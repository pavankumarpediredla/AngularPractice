import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-directives',
  imports: [NgIf,FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isDivVisible = true;


  onShowDiv1(){
    this.isDivVisible=true;

  }

  onHideDiv1(){ //logic 1
    this.isDivVisible = false;
  }

  toggleDiv1Visibility(){//logic 2
    this.isDivVisible = !this.isDivVisible;
  }
  
  hideShowDiv1(isHide:boolean){//logic3
    this.isDivVisible =isHide;
  }

  hasRefferalCode = false;

}
