import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unitTesting';


  sumTwoNumbers(a, b) {
    return a + b;
  }

  
  sayHi(user) {
    console.log('hello');
    return 'nikhil';
  }

  convertToUpperCase(userName) {
    return userName.toUpperCase();
  }



}
