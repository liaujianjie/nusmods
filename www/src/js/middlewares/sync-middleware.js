// @flow
import { firebase } from '@firebase/app';
import '@firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDyExdop0njbfcRSLbk7l3JTUsPAjS5W_8',
  authDomain: 'api-project-889500375187.firebaseapp.com',
  projectId: 'api-project-889500375187',
});

// console.log('OSENUH', firebase);

firebase.firestore();

// export default () => () => () => {};
export default function booya() {
  const derp = firebase.firestore();
  derp
    .collection('derp')
    .doc('ba')
    .onSnapshot((doc) => doc.data());
}
