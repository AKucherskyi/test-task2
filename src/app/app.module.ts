import { MainPageModule } from './modules/main-page/main-page.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initApp, DataService } from './core/services/data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainPageModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    deps: [DataService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
