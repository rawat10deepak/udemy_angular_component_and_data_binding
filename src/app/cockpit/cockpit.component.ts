import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter();
  @Output('bp') bluePrintCreated = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      type: 'blueprint',
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
