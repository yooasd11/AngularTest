import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { App2Component } from '@app/app2/app2.component';

@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap: [App2Component]
})
class App2Module { }

export const EntryModule = App2Module;