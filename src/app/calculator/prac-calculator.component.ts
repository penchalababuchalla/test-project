import { Component } from '@angular/core';

@Component({
	selector:'incriment-decriment',
	templateUrl:'./prac-calculator.component.html',
	styleUrls: ['./prac-calculator.component.css']

})
export class PracCalculatorComponent {
	count=0;
	incriment(){
		this.count++
	}
	decriment(){
		this.count--
	}
}
