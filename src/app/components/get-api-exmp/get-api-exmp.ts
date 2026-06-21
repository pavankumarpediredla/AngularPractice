import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-api-exmp',
  imports: [],
  templateUrl: './get-api-exmp.html',
  styleUrl: './get-api-exmp.css',
})
export class GetApiExmp {

  http = inject(HttpClient);
  jsonUserList: any[] = []
  varr = signal([]);
  jsonSignal: WritableSignal<any[]> = signal([]);
  busUserList: WritableSignal<any[]> =signal([])
  getAllUsers(){

this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next : (result : any) =>{
          
     this.jsonUserList =result;
      },
      error:(error:any)=> {
      }
     });
  }

  getAllUserUsingSignal(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next:(result:any) =>{
        this.jsonSignal.set(result);
      },
      error:(error:any)=>{

      }
    })
  }

  getAllBusUsers(){
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe({
      next:(result:any)=>{
          this.busUserList.set(result.data);
      },
      error(error:any){

      }
    })
  }
}
