import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count=0;
  incriment(){
    // debugger
    this.count++
  }
  decriment(){
    // debugger
    if(this.count==0){
      return
    }
    this.count--
  }
}
