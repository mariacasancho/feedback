import * as firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FOREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FOREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FOREBASE_PROJECT_ID
  });
}

export default firebase;
