import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'testName', content: 'just test text' },
  ];

  onAddServerAdded(serverData) {
    this.serverElements.push(serverData);
  }

  onAddBlueprintAdded(blueprintData) {
    this.serverElements.push(blueprintData);
  }
}
