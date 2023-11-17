import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser.user, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {this.state.userReady ? (
          <div>
            <header className="jumbotron ">
              <h3>
                <strong>{currentUser.username}'s</strong>
                <br></br> Profile
              </h3>
            </header>
            <div className="text-white">
              <p>
                {/* <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
              ...{" "}
              {currentUser.accessToken.substr(
                currentUser.accessToken.length - 20
              )} */}
              </p>
              <p>
                <strong>Id:</strong> {currentUser.pk}
              </p>
              <p>
                <strong>Email:</strong> {currentUser.username}
              </p>
              <strong>Authorities:</strong> Not Added
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
