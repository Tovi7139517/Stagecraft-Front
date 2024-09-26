import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-access',
  templateUrl: './no-access.component.html',
  styleUrls: ['./no-access.component.css']
})
export class NoAccessComponent {

  constructor(private router: Router) { }

  goHome() {
    debugger
    this.router.navigate(['/']); // מפנה לדף הבית
  }
}