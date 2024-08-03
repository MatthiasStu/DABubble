import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [MatCardModule, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute){}


}
