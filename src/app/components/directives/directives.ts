import { Component } from '@angular/core';
import { NgIf, NgClass, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-directives',
  imports: [NgIf, FormsModule, NgForOf],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  //*ngIf and @if
  isDivVisible = true;

  onShowDiv1() {
    this.isDivVisible = true;
  }

  onHideDiv1() {
    //logic 1
    this.isDivVisible = false;
  }

  toggleDiv1Visibility() {
    //logic 2
    this.isDivVisible = !this.isDivVisible;
  }

  hideShowDiv1(isHide: boolean) {
    //logic3
    this.isDivVisible = isHide;
  }

  hasRefferalCode = false;
  selectedIdentityProof: string = '';
  isDiv2Visible: string = 'yes';
  toggleButton() {
    this.isDiv2Visible = this.isDiv2Visible == 'yes' ? 'no' : 'yes';
  }

  textInput: string = '';
  isVowels: boolean = false;

  onTextChange() {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    let isVowelPresent = false;
    vowelsList.forEach((n) => {
      if ( this.textInput.includes(n)) {
        if(isVowelPresent == false ){
        isVowelPresent = true;
      }
      }
    });
    this.isVowels = isVowelPresent;
  }
  startDayChar = '';

  //ngFor
  userSelectionView = 'ngFor';

  changeView(view:string){
    this.userSelectionView = view;
  }

  studentList = ['Chetan','Rahul','namen','Ankit']
}
