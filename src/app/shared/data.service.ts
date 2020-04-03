import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private emailVerified$ = new BehaviorSubject<any>(null);
  emailVarified = this.emailVerified$.asObservable();

  constructor() {}

  changeMessage(val: any) {
    this.emailVerified$.next(val);
  }
}
