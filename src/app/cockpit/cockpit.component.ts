import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter();
  @Output('bp') bluePrintCreated = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
