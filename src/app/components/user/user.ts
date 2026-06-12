import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  name: string = "Pavan";
  //this.name = "kumar";
  date: Date =new Date;
  phNumber: number = 955389415;
  type =35;
  address!:string;
  div4bgClassName = "col-4 bg-success";
  projectName = "SAP";
  companyAddress = " ITSEZ Madurawada Visakhapatnam"
  myInputType = "radio";
  addressRows = 4;
  isActive = true;
  myPlaceHolder = "Enter your Name";
  onMouseEnterColor = " bg-success";
bgColor = 'aqua';

  showAlertWelcome(){
    alert('Welcome to SAP');
  }

  showMsg(message:string){
    alert(message)
  }
  getCourseName(){
    return "SAP PROJECTS"
  }
  onCityChnage(event:Event){
    alert("city changed :"+(event.target as HTMLButtonElement).value)
  }
  onTextChange(){
    alert(' text Changed!')
  }
  onMouseEnter(color:string){
    console.log('On mouse eneter!')
        this.bgColor = color;

  }
  onMouseLeft(color:string){
    console.log(' Mouse Left!')
        this.bgColor = color;

  }

  showClickedText(event:MouseEvent){
    alert((event.target as HTMLButtonElement).innerHTML)
  }
  changeProjectName(){
    this.projectName = " SAAS"
  }

  changeProjectNameV2(){
    this.projectName = " SAAS"
  }
}
