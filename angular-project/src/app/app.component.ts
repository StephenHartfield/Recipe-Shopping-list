import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  dropped = false;
  mountedComponent='recipe'

  dropDown() {
  	this.dropped = !this.dropped;
  }
}
