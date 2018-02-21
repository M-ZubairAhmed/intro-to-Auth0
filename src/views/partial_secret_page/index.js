import React from 'react'

export default class PartialSecretPage extends React.Component {
  render() {
    return (
      <div>
        <h3>this is a partial secret page</h3>
        <h5>I am public part of the page thus, i am visible anyways</h5>
        <p>below would ideally be a private part of the page</p>
        {this.props.auth.isAuthenticated() ? (
          <h5>
            I am private part of the page thus i am only be visible to logged in
            users
          </h5>
        ) : null}
      </div>
    )
  }
}
