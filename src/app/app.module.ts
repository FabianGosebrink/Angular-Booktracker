import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { Comp2Component } from './comp2/comp2.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [AppComponent, Comp2Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,

    RouterModule.forRoot(AppRoutes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
