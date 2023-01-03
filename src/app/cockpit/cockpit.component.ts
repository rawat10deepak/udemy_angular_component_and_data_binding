import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter();
  @Output('bp') bluePrintCreated = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      type: 'server',
      name: nameInput.value,
      content: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      type: 'blueprint',
      name: nameInput.value,
      content: this.newServerContent,
    });
  }
}
