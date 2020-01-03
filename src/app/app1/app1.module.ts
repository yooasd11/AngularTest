import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App1Component } from '@app/app1/app1.component';

@NgModule({
  declarations: [
    App1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [App1Component]
})
class App1Module {
}

export const EntryModule = App1Module;
