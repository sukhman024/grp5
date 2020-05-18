import React, { useState, seEffect, useEffect } from "react";
import "../../../styles/App.css";
import "../../../styles/index.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import { SignInUserService } from "../../../Services/Register";

const SignIn = () => {
  const [status, currentStatus] = useState(null);
  var [currentUser, setCurrentUser] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [userlist, setuserlist] = useState("");

  //New user added
  let [loggedInUser,setLoggedInUser] = useState();

  const SignInUser = (username, password) => {
    // var output = SignInUserService({ email: username, password: password });
//Old code

    console.log("userlist,==", userlist)
    userlist.forEach(userlist => {
      //console.log("inside for each");
      if (userlist.email === username && userlist.password === password) {
        //console.log("email id entered:" + userlist.email + "password:" + userlist.password);
         setCurrentUser(userlist);
        //currentUser = userlist;
        currentStatus('user');
      }
    });
    // if (output) {
    //   console.log("current user signin:",currentUser);
    //   //console.log("output");
    //   currentStatus("user");
    // }

    // New Code
    // var loggedInUserObj = {
    //   email: username,
    //   password: password
    // }
    // console.log("1"+loggedInUserObj);
    // setLoggedInUser(loggedInUserObj);
    // console.log(loggedInUser);
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Content-Type", "text/plain");
    // fetch(`http://localhost:5000/user/login`,
    //   {method : 'post',
    //   body: JSON.stringify(loggedInUser),
    //   headers : {
    //       "Content-Type" : "application/json"
    //   }}).then(res => res.json())
    //       .then(data => {
    //         currentStatus("user")
    //       });

  };

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => { setuserlist(data.response) });
  }, [])

// useEffect(()=>{
//   fetch(`http://localhost:5000/user/login`,
//   {method : 'post',
//   body: JSON.stringify(loggedInUser),
//   headers : {
//       "Content-Type" : "application/json"
//   }}).then(res => res.json())
//       .then(data => {
//         currentStatus("user")
//       });
// })




  if (status === "user") {
    console.log("passing current user=", currentUser)
    return <Redirect to={{
      pathname: '/Profile',
      currentUser:currentUser , userlist: userlist 
    }} />;
  } else if (status === "signup") {
    return <Redirect to="/signup" />;
  }
  else {
    return (
      <div>
        <Form className="App">
          <h1 className="Cen">Teamup USER LOGIN</h1>
          <h2 className="Cen">Enter Details</h2>
          <FormGroup>
            <label className="Cen">Username</label>
            <Input
              className="Username"
              type="Username"
              placeholder="Username"
              onChange={(event) => {
                setusername(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">Password</label>
            <Input
              className="Password"
              type="Password"
              placeholder="Password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
          </FormGroup>
          <div className="Left">
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <Button
            onClick={() => {
              SignInUser(username, password);
            }}
            className="block"
          >
            Log in
          </Button>
          <Button
            onClick={() => {
              currentStatus("signup");
            }}
            className="block"
          >
            Sign up
          </Button>
        </Form>
      </div>
    );
  }
};

export default SignIn;
