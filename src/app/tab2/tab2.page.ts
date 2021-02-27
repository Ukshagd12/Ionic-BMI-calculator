import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  height: number;
  weight: number;
  bmiValue: number;
  bmiMessage: string;
  constructor() { }
  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      let finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
    }
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmiValue > 30 && this.bmiValue < 35) {
      this.bmiMessage = "Obese Type I"
    }

    if (this.bmiValue > 35 && this.bmiValue < 40) {
      this.bmiMessage = "Obese Type II"
    }

    if (this.bmiValue > 40) {
      this.bmiMessage = "Obese Type III"
    }
  }

}
