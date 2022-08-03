import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mycalculator';
  toshow = '0'
  currvalue = ''
  onclickinput(value:string){
    this.currvalue = this.currvalue + value
    this.toshow = this.currvalue
  }
  back(){
    this.currvalue = this.currvalue.slice(0, -1)
    this.toshow = this.currvalue
    if(this.toshow==''){
      this.toshow = '0'
    }
    
  }
  clear(){
    this.currvalue = '';
    this.toshow = '0'
  }
  equals(){
    this.toshow = eval(this.currvalue)
    this.currvalue = this.toshow
  }
}
