import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.checkIfEmailVerified(credential.user);
    return this.updateUserData(credential.user);
  }

  async facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.checkIfEmailVerified(credential.user);
    return this.updateUserData(credential.user);
  }

  async githubLogin() {
    const provider = new auth.GithubAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.checkIfEmailVerified(credential.user);
    return this.updateUserData(credential.user);
  }

  async signInWithCredentials({ email, password }: Credentials) {
    const credentials = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    //  console.log(credentials.user);
    if (!credentials.user.emailVerified) {
      throw new Error('Please verify email first!');
    }
    return this.updateUserData(credentials.user);
  }

  async registerUser(creds: Credentials) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
      creds.email,
      creds.password
    );
    await this.afAuth.auth.currentUser.updateProfile({
      displayName: creds.name,
      photoURL: creds.photoURL
    });

    this.sendVarificationMail();
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

  private updateUserData({
    uid,
    email,
    displayName,
    photoURL,
    emailVerified
  }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(
      `users/${uid}`
    );
    const data = {
      uid,
      email,
      displayName,
      photoURL,
      emailVerified
    };
    //  console.log('data from new obj::', data);
    return userRef.set(data, { merge: true });
  }

  async sendVarificationMail() {
    return await this.afAuth.auth.currentUser.sendEmailVerification();
  }

  // Reset Forggot password
  async resetPassword(resetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(resetEmail);
  }

  checkIfEmailVerified(creds: firebase.User): void {
    if (!creds.emailVerified) {
      this.snackBar.open('Please Verify Your Email address', 'OK');
      this.sendVarificationMail();
      this.router.navigate(['/verify-email']);
    }
  }
}
