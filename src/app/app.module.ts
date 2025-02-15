import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
