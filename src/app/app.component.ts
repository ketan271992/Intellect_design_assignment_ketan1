import { Component, ngOnInit } from '@angular/core';
import {userToDoService} from '../services/userToDo.service'
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Router } from '@angular/router';

export interface Users{
	"id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": any 
    "phone": string,
    "website": string,
    "company": any

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})

export class AppComponent implements ngOnInit,Users {
	constructor(private userService : userToDoService, private router: Router) {  
		this.getUsers();
	  }

  title = 'Personal Todo's;
  private users : Users[] = [];
  private errorMessage : any = "";
  todoList;
  showToDo : boolean = false;

  
  getData (userId){
  	 this.router.navigate(['./todos'+userId])
  }

  getUsers(){
      return this.userService.getData()
      .subscribe(
      		users => this.users = users,
             );
  }

  viewToDoList(userId){
  this.showToDo = !this.showToDo;
  	return this.userService.getTodo(userId)
      .subscribe(
      		todoList => this.todoList = todoList,
             );

  }
}
