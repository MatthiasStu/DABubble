import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyDlBs53dPJh0c8m_KT-3Xsaso5A-8Oo_Bk",
  authDomain: "dabubble-262fa.firebaseapp.com",
  projectId: "dabubble-262fa",
  storageBucket: "dabubble-262fa.appspot.com",
  messagingSenderId: "262577326478",
  appId: "1:262577326478:web:b35ca59cb9cd54f3c3fcdf"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-262fa","appId":"1:262577326478:web:b35ca59cb9cd54f3c3fcdf","storageBucket":"dabubble-262fa.appspot.com","apiKey":"AIzaSyDlBs53dPJh0c8m_KT-3Xsaso5A-8Oo_Bk","authDomain":"dabubble-262fa.firebaseapp.com","messagingSenderId":"262577326478"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimationsAsync()]
};
