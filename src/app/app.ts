import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from "./components/shared/header/header";
import { Footer } from "./components/shared/footer/footer";
import { User } from './components/user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  Header, Footer,User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management');

  constructor(private router: Router){}

  loginDashboard(){
    this.router.navigate(['/dashboard'])
  }

}
