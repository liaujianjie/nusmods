// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import firebase from 'utils/firebase/firebase';
import '@firebase/auth';
import { FirebaseAuth } from 'react-firebaseui';
// import firebaseui from 'firebaseui';
import 'firebaseui';
import '~firebaseui/dist/firebaseui.css';

import type { State } from 'reducers';

// import config from 'config';
import { toggleLoginDialog } from 'actions/app';
// import { GitHub, Facebook, Mail } from './icons';
import CloseButton from './CloseButton';
import Modal from './Modal';
// import styles from './LoginModal.scss';

type Props = {
  isOpen: boolean,
  toggleLoginDialog: Function,
};

export class LoginModalComponent extends PureComponent<Props> {
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => {
        console.log('HOLY SHIT GUYS LOGGED IN ');
        return false;
      },
    },
  };

  // ui = null;

  // componentDidUpdate() {
  // if (!this.props.isOpen) return;
  // this.ui = new firebaseui.auth.AuthUI(firebase.auth());
  // this.ui.start('#logindiv', this.uiConfig);
  // }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.toggleLoginDialog}>
        <CloseButton onClick={this.props.toggleLoginDialog} />
        <div>
          <h1>LOG N ROLs</h1>
          <p>
            Thank you for your time! You can talk to us on Messenger, file an issue on GitHub, or
            fill up a short feedback form (takes you less than 3 minutes).
          </p>
          <FirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      </Modal>
    );
  }
}

export default connect(
  (state: State) => ({
    isOpen: state.app.isLoginModalOpen,
  }),
  { toggleLoginDialog },
)(LoginModalComponent);
