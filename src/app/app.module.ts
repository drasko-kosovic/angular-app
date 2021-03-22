import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StudentModule} from "./student/student.module";
import { HomeComponent } from './home/home.component';
import { StudentRoutingModule } from './student/student-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StudentModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
