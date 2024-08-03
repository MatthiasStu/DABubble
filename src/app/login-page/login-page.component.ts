import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { AuthModule } from '@angular/fire/auth';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatCardModule, AuthModule, MatButtonModule, MatIconModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  provider = new GoogleAuthProvider(); 
  router: Router = inject(Router);

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      console.log('User signed in: ', result.user);
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error during sign-in: ', error);
    }
  }
}