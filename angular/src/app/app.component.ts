import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name= 'Dhruvin';
  arr = ['uname','psw'];
  
  login(value:string){
    this.arr.push(value);
  }
}