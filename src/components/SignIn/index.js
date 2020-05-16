import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export default class Main extends Component {
    render() {
      return (
        <Container as="main" role="main">
         <AmplifyAuthenticator>
      <div>
        My App
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
        </Container>
      )
    }
  }