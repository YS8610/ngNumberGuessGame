import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngNumberGuessGame';

  minimum = 0;
  maximum = 100;
  randomNumber = Math.floor(Math.random() * (this.maximum-1)) + (this.minimum+1);
  isCompleted = false;
  msg = "";
  guesses: number[] = [];

  userinput = new FormControl('',Validators.required);


  onSubmit(){
    console.log(this.userinput.value);
    if (this.userinput.value>this.minimum && this.userinput.value< this.maximum){
      this.guesses.push(this.userinput.value);

      if (this.userinput.value == this.randomNumber ){
        this.msg = "You guessed the right number... Please refresh the browser to restart the game";
        this.isCompleted = true;
      }
      else if ( this.userinput.value > this.randomNumber){
        this.maximum = this.userinput.value;
        this.msg = "The range is from " + (this.minimum+1) + " to " + (this.maximum-1);
      }
      else{
        this.minimum = this.userinput.value;
        this.msg = "The range is from " + (this.minimum+1) + " to " + (this.maximum-1);
      }
    }
  }
}
