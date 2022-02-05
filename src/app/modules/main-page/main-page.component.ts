import { DataService } from './../../core/services/data.service';
import { Feature } from './../../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  features$!: Observable<Feature[]>;
  selectedFeature$!: Observable<Feature | null>

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.features$ = this.dataService.features$;
    this.selectedFeature$ = this.dataService.selectedFeature$
  }

  selectFeature(id: number) {
    this.dataService.selectFeature(id)
  }
}
