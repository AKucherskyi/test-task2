import { environment } from './../../../environments/environment';
import { Feature } from './../../shared/interfaces';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private _features: BehaviorSubject<Feature[]> = new BehaviorSubject<Feature[]>([])
    public features$: Observable<Feature[]> = this._features.asObservable().pipe(
        filter(data => !!data)) 

    private _selectedFeature: BehaviorSubject<Feature | null> = new BehaviorSubject<Feature | null>(null)
    public selectedFeature$: Observable<Feature | null> = this._selectedFeature.asObservable()

    constructor (private http: HttpClient) {}

    getFeatures(): Observable<Feature[]> {
        return this.http.get<Feature[]>(`${environment.repositoryUrl}/DATA.json`)
    }

    updateFeatures(): Observable<Feature[]> {
       return this.getFeatures().pipe(
            tap(data => {
                this._features.next(data)
            })
        )
    }

    selectFeature(id: number): void {
        this._selectedFeature.next(this._features.value.find(feature => feature.ProductId == id) || null)
    }

    resetSelectedFeature(): void {
        this._selectedFeature.next(null)
    }
}

export function initApp(dataService: DataService) {
    return () => dataService.updateFeatures()
}