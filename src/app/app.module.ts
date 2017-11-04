import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule, Response} from '@angular/http';
import { AppComponent } from './app.component';
import { userToDoService } from './../services/userToDo.service'
import { RouterModule }   from '@angular/router';
import { ToDoComponent} from '../toDo/todo.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  HttpModule
  BrowserModule,
  RouterModule.forRoot([
  		{ path :'', redirectTo : 'app', pathMatch: 'full'},
  		{ path: 'app', component: AppComponent 

		  {path : 'todos/:id' component: ToDoComponent ,children :[		  
  			{
        path: '',
        redirectTo: 'app',
        pathMatch : 'full'
      }
		  ]
		  }
		  
		])
  ],
  
  providers: [userToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
