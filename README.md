# React DOM Object

Uses react-dom-obj to create a real-time DOM synced with Firebase

## Usage

```sh
npm install react-dom-obj-firebase --save
```

```javascript
import RedomoFB from 'react-dom-obj-firebase';

RedomoFB.init({
  apiKey: <FIREBASE_API_KEY>,
  authDomain: <FIREBASE_AUTH_DOMAIN>,
  databaseURL: <FIREBASE_DATABASE_URL>
});

RedomoFB.start('firebase-path');

// Call RedomoFB.stop('firebase-path'); to stop real-time updates from Firebase
```
