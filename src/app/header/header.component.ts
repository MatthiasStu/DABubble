import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router'; 
import { filter } from 'rxjs';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoginPage: boolean = false; 

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isLoginPage = this.activatedRoute.firstChild?.snapshot?.routeConfig?.path === 'login';
      });
  }

}
