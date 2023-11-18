import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Movielist from "./components/movieList.component";
import Profile from "./components/profile.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user.user,
      });
    }
  }

  componentWillUnmount() {
    // EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <div className="container-fuild">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Movie Land
            </Link>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="/login"
                    className="nav-link btn btn-success btn-sm ml-3"
                    onClick={this.logOut}
                  >
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={"/register"}
                    className="nav-link  btn btn-primary btn-sm ml-3"
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
        </div>
        {/* <Movielist /> */}
        <Routes>
          <Route path="/" element={<Movielist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </>
    );
  }
}

export default App;
