import { Component } from '@angular/core';

@Component({
	//selector is required here. This is what you use in app.component.html (it is already exported by the line 'export class ServerComponent' and imported in app.module.ts)
	selector: 'app-server',
	//can use hard coded template, but change templateUrl to template: '<template></template>'
	templateUrl: './server.component.html',
	//for the styles below, this is correct. However, when pointing to a scss or css file, 
	//use styleUrl: ['style.css']
	styles: [`
		.online {
			color: green;
		}
	`]
})
export class ServerComponent {
	serverStatus: string = 'offline';
	serverNumber: number = 10;
	buttonClass = 'btn btn-primary normalButton';
	serverName = 'Server';
	create = false;
	servers = [];

	constructor() {
		setTimeout(() => {this.buttonClass = 'btn btn-success changedButton'}, 2000);
	}

	// disabledButton = true;

	// constructor() {
	// 	setTimeout(() => {this.disabledButton = false}, 2000)
	// }

	getStatus() {
		return this.serverStatus;
	}

	onCreateServer() {
		if(this.serverStatus == 'offline') {
			this.serverStatus = 'online';
		} else {
			this.serverStatus = 'offline';
		}
		this.create = !this.create;
		this.servers.push(this.serverName);
	}

	onInputField(event: any) {
		this.serverName = event.target.value;
		// fun alternatives: this.serverName += ' ' + event.target.value + ' |';
		// this.serverName += event.key + ' | ';
		//If IDE or Typescript has trouble, write this.serverName = (<HTMLInputElement>event.target).value;
	}

	getColor() {
		return this.serverStatus == 'online' ? 'green' : 'red';
	}
}