import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Output('eventSwitch') componentSelection = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  componentSelector(componentName: string) {
  	this.componentSelection.emit(componentName);
  }
}
