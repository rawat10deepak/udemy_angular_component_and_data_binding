import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {
    console.log('constructor called ');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called ');
    // console.log(JSON.stringify(changes));
  }

  ngDoCheck() {
    console.log('ngDoCheck called ');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called ');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called ');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called ');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called ');
  }

  ngOnInit() {
    console.log('ngOnInit called ');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called ');
  }
}
