import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() config: any;
  @Output() configUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) {}
  get JSON() {
      return JSON;
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('Child changes : ', changes);
  }

  handleButtonClick() {
      this.configUpdate.emit();
  }
}
