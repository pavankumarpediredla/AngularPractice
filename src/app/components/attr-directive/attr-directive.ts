import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-attr-directive',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './attr-directive.html',
  styleUrl: './attr-directive.css',
})
export class AttrDirective {

  divClass = "bg-danger";

  

  num1=0;
  num2=0;

  isChecked:boolean= false;
  playList = [
    {isActive:false,grade:'A',name:'sachin tendulkar', city: 'Mumbai',contactNo:'87642876472'},
    {isActive:true, grade:'F',name:'Virat Kohli ', city: 'Mumbai',contactNo:'87642876472'},
    {isActive:false,grade:'A',name:' Sharma', city: 'Bhopal',contactNo:'87642876472'},
    {isActive:true, grade:'B',name:'Virendra Sehwag', city: 'Delhi',contactNo:'876428786'},
    {isActive:false,grade:'A',name:'polard ', city: 'chennai',contactNo:'76398223'},
    {isActive:true, grade:'C',name:'sachin tendulkar', city: 'Mumbai',contactNo:'87642876472'},
    {isActive:false,grade:'A',name:' Kohli ', city: 'Mumbai',contactNo:'87642876472'},
    {isActive:true, grade:'D',name:'Rohit Sharma', city: 'Bhopal',contactNo:'87642876472'},
    {isActive:true, grade:'A',name:' Sehwag', city: 'Delhi',contactNo:'876428786'},
    {isActive:false,grade:'A',name:'GAYLE ', city: 'chennai',contactNo:'76398223'}
  ]

  textColor =''
  textFontColor = ''
addDivClass(classNmae:string){
    this.divClass = classNmae;
  }

  myCustomCSS = {
    'background-color': 'green',
    color: 'black',
    'font-size':'33px'
  }
}
