import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  studentName:string ='Pavan';
  rollNo:number = 121;


  studentCity = signal("pune");
  isStudentActive = signal(true);
  studenDetails = signal({name:"pavan",contactNo:445554222,class:5});
  cityList = signal(['Mumbai','Pune','Andhra']);


  constructor(){
    console.log(this.studentName);
    console.log(this.studentCity())
  }


  changeNmae(){
    this.studentName = 'Chetan';
  }

  changeCity(){
    this.studentCity.set('Vizag');
  }
}
