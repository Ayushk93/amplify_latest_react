import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';

export default class Main extends Component {
    render() {
        return (
            <Container as="main" role="main">
                <AmplifyAuthenticator>
    <AmplifySignUp slot="sign-up"></AmplifySignUp>

    <div>
      My App
      <AmplifySignOut></AmplifySignOut>
    </div>
  </AmplifyAuthenticator>
            </Container>
        )
    }
}