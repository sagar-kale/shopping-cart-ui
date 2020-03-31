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
    return this.updateUserData(credential.user);
  }

  async facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log('Facebook credential::', credential);
    return this.updateUserData(credential.user);
  }

  async githubLogin() {
    const provider = new auth.GithubAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log('Git credential::', credential);
    return this.updateUserData(credential.user);
  }

  async signInWithCredentials(email: string, password: string) {
    const credentials = await this.afAuth.auth.signInWithEmailAndPassword(
      email,
      password
    );
    return this.updateUserData(credentials.user);
  }

  async registerUser(email: string, password: string) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log(
      'register from frebase:::',
      credential.user,
      credential.additionalUserInfo
    );
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
    return userRef.set(data, { merge: true });
  }

  public async sendVarificationMail() {
    try {
      await this.afAuth.auth.currentUser.sendEmailVerification();
      this.router.navigate(['/varify-email-address']);
    } catch (err) {
      this.snackBar.open(err, 'OK');
    }
  }

  // Reset Forggot password
  async resetPassword(resetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(resetEmail);
  }
}
