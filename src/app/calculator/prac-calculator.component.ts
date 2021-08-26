import { Component } from '@angular/core';

@Component({
	selector:'calculator',
	templateUrl:'./prac-calculator.component.html',
	styleUrls: ['./prac-calculator.component.css']

})
export class PracCalculatorComponent {
	count=0;
	input= '';
	pressNum(num: string){
		this.input = this.input+num ;

	}
	result(){
		// let formula=this.input;
		this.input =eval(this.input);

	}
	backspace() {
    
      this.input=this.input.substr(0, this.input.length-1)
    
  	}
	clear(){
		this.input='';
	}

	factorial(){
		var n = parseInt(this.input);
		var i=0;
		var a=1;

		for (i=n; i>=1; i--){

			a=a*i;
		}
		
   		this.input = a.toString();
	}
}
