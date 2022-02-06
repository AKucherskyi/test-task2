import { DataService } from './../../core/services/data.service';
import { Feature } from './../../shared/interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  features$!: Observable<Feature[]>;
  selectedFeature!: Feature | null;
  selectedFeatureTableData: Object[] = [];
  destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.features$ = this.dataService.features$;
    this.dataService.selectedFeature$
      .pipe(takeUntil(this.destroy$))
      .subscribe((feature) => {
        this.selectedFeature = feature;
        if (feature) {
          this.selectedFeatureTableData = Object.keys(feature).map((key) => ({
            key,
            value: feature[key as keyof Feature],
          }));
        }
      });
  }

  selectFeature(id: number) {
    this.dataService.selectFeature(id);
  }

  resetSelectedFeature() {
    this.dataService.resetSelectedFeature();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
