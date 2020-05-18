import React, { useState, seEffect, useEffect } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import UserDashboard from "../Home/UserDashboard";
import { showUserDetails, updateProfile } from "../../../Services/Profile";
import { Redirect } from "react-router-dom";

const updateProfileToMongo = (data) => {
  //OLD CODE
  // if (updateProfile(data)) {
  //   alert("updated data" + data.firstname);
  // } else {
  //   alert("updated data failed");
  // }

  //NEW CODE
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Content-Type", "text/plain");
  var userObj = {
    firstName: data.firstname,
    lastName: data.lastNname,
    phoneNumber: data.phonenumber,
    skillSet: data.skillset
  }
 let x = data.userEmail;
  fetch(`http://localhost:5000/user/update/${x}`,
            {method : 'put',
            body: JSON.stringify(userObj),
            headers : {
                "Content-Type" : "application/json"
            }}).then(res => res.json())
                .then(data => {
                  console.log("Updated data " + data);
                });
};

const MyProfile = (props) => {
  console.log("current user in profile:",props.location.currentUser);
  console.log("userlist in profile:",props.location.userlist)
  // console.log("cur us",props.currentUser)
  var user = showUserDetails("");
  const [locationAPI, setlocationAPI] = useState(null);
  const [status, currentStatus] = useState(null);
  const [groupNo, setGroupNo] = useState(user.GroupNo);
  const [firstname, setfirstname] = useState(props.location.currentUser?.firstName);
  const [lastname, setlastname] = useState(user.LastName);
  const [phonenumber, setphonenumber] = useState(user.PhoneNumber);
  const [skillset, setskillset] = useState(user.SkillSet);
  const [unit, setunit] = useState(user.Unit);
  const [redirection, setredirection] = useState("");
  const [userEmail,setUserEmail] = useState(props.location.currentUser?.email);
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((result) => {
        setlocationAPI(result);
      });



    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => data);
  }, [])
  if (redirection == "Group") {
    console.log("props.userlist passed to group==", props.location.userlist)
    return (<Redirect
      to={{
        pathname: '/Group',
        userlist: props.location.userlist
      }} />);
  }else if (redirection == "Students") {
    console.log("props.userlist passed to student==", props.location.userlist)
    return (<Redirect
      to={{
        pathname: '/Students',
        userlist: props.location.userlist
      }} />);
  } else {
    return (
      <div>
        <Form className="App">
          <h1 className="Cen">My Profile</h1>
          <h2 className="Cen">Enter Details</h2>
          <FormGroup>
            <label className="Cen">GroupNo</label>
            <Input
              className="Username"
              type="GroupNo"
              placeholder="GroupNo"
              value={props.location.currentUser?.groupNum}
              onChange={(event) => {
                setGroupNo(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">FirstName</label>
            <Input
              className="Username"
              type="FirstName"
              placeholder="FirstName"
              value={firstname}
              onChange={(event) => {
                setfirstname(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">LastName</label>
            <Input
              className="Username"
              type="LastName"
              placeholder="LastName"
              value={props.location.currentUser?.lastName}
              onChange={(event) => {
                setlastname(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">City</label>
            <Input
              className="Username"
              type="LastName"
              placeholder="LastName"
              value={locationAPI?.city}
              onChange={(event) => {
                setlastname(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">State</label>
            <Input
              className="Username"
              type="LastName"
              placeholder="LastName"
              value={locationAPI?.region}
              onChange={(event) => {
                setlastname(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">PhoneNumber</label>
            <Input
              className="Username"
              type="PhoneNumber"
              placeholder="PhoneNumber"
              value={props.location.currentUser?.phoneNumber}
              onChange={(event) => {
                setphonenumber(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">Skillset</label>
            <Input
              className="Username"
              type="Skillset"
              placeholder="Skillset"
              value={props.location.currentUser?.skillSet}
              onChange={(event) => {
                setskillset(event.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <label className="Cen">Unit</label>
            <Input
              className="Username"
              type="Unit"
              placeholder="Unit"
              value={unit}
              onChange={(event) => {
                setunit(event.target.value);
              }}
            />
          </FormGroup>

          <Button
            onClick={() => updateProfileToMongo({groupNo, firstname, lastname, phonenumber, skillset, userEmail})}
            className="block"
          >
            Update
          </Button>
          <Button onClick={() => currentStatus("back")} className="block">
            Back
          </Button>
          <Button
            onClick={() => setredirection("Group")}
            className="block"
          >
            Group
          </Button>
          <Button
            onClick={() => setredirection("Students")}
            className="block"
          >
            StudentsList
          </Button>
        </Form>
      </div>
    );
  }


};

export default MyProfile;
