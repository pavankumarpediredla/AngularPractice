import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {

  studentName:string ='Pavan';
  rollNo:number = 121;


  studentCity = signal("pune");//WritableSignal<string>
  isStudentActive = signal(true);//WritableSignal<boolean>
  studenDetails = signal({name:"pavan",contactNo:445554222,class:5});
  cityList = signal(['Mumbai','Pune','Andhra']);


  //why signal -> chnage detection
  //zone.js is responsible for doing it ->
  //whenever there is a change zone.js come nto he picture and changes it.
  //zone.js is the third party library -> angular eam doesnt have control on it.
  // instead of zone.js they come up with signal.
  //in stead of performance only angular boght their own change detection process.

//If we know a variable value is getting changed then always use a signal way.
//can use normal way. in async
//Standalone means evrything will be depending on the app module
//app.modules.ts everything should be registered in app modules only then we use them.
//but in standalone we can use in the same component it self.
//what ever that component need it will have it int he same componenet

  courseName : WritableSignal<string> =signal("Angular");

  constructor(){
    console.log(this.studentName);
    console.log(this.studentCity())
    //if u want to execute the code after some particlar time then we use setTimeout
    //Asynchronous
    setTimeout(() => {
      alert('from  timeout');
      this.studentCity.set("VIZAG ");
    }, 3000);
    console.log(this.changeCity())
  }


  changeNmae(){
    this.studentName = 'Chetan';
  }

  changeCity(){
    this.studentCity.set('Vizag');
  }
}
