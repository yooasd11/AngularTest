import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  config = {
    a : 'a',
    b : 'b',
    c : 'c',
  }

  constructor(private cdr: ChangeDetectorRef) {}

  get JSON() {
    return JSON;
  }

  handleConfigUpdate() {
    console.log('handle config update');
    // this.config = {
    //   ...this.config,
    //   a: 'z',
    // }
    this.config.a += 'z';
    
     //this.cdr.detectChanges();
  }
}
