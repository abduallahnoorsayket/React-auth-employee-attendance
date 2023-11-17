import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Movielist from "./components/movieList.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
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

    // EventBus.on("logout", () => {
    //   this.logOut();
    // });
  }

  componentWillUnmount() {
    // EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <>
        <div className="container-fuild">
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
              Movie Land
            </Link>
            {/* <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/design"} className="nav-link">
                    Slider Design
                  </Link>
                </li>
              )}
            </div> */}

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
        </Routes>

        {/* <AuthVerify logOut={this.logOut}/> */}
      </>
    );
  }
}

export default App;
