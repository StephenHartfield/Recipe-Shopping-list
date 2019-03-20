import { Component, OnInit } from '@angular/core';

@Component({
  //in app.component.html render template from here using selector found there
  //see app.component.html for matching selectors
  //cannot select by id (not supported) neither are sudo selectors, such as :hover
  //Element selector
  //selector: 'app-servers',
  
  //by attribute - remember this as a selector for attributes []
  //selector: '[app-servers]',
  
  //by class
  selector: '.app-servers',
  template: '<app-server></app-server>',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
