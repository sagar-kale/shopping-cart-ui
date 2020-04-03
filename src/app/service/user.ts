import { UserInfo } from 'firebase';
import { auth } from 'firebase/app';

export class User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  emailVerified?: boolean;
  providerData?: UserInfo[];
  providerId?: string;
  metadata?: auth.UserMetadata;
}
