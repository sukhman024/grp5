import React, { useState, seEffect } from 'react';
import "../../../styles/App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';
import {TextField  } from "@material-ui/core";
var group=[
  [
    {
      groupno:0,
      email:"1",
      fn:"fn1",
      ln:"ln1",
      skill:"node"
    },
    {
      groupno:0,
      email:"2",
      fn:"fn2",
      ln:"ln2",
      skill:"node2"
    }
  ],
 [
    {
      groupno:1,
      email:"3",
      fn:"fn1",
      ln:"ln1",
      skill:"node"
    }
  ],
  [
    {
      groupno:2,
      email:"4",
      fn:"fn4",
      ln:"ln4",
      skill:"node"
    },
    {
      groupno:2,
      email:"5",
      fn:"fn5",
      ln:"ln5",
      skill:"node2"
    }
  ]
];

var curuser={
  groupno:0,
  email:"6",
  fn:"new user",
  ln:"new user",
  skill:"js"
}
const AssignGroup= (cuser,groupdata, setgroup, groupNum)=>{
    groupdata=groupdata[groupNum];
    cuser.groupno=Number(groupNum);
    groupdata.push(cuser);
    setgroup(groupdata);
}
const LeaveGroup= (cuser,groupdata, setgroup, groupNum)=>{
  groupdata=groupdata[groupNum];
  cuser.groupno=Number(groupNum);
  // groupdata.push(cuser);
  setgroup(groupdata);
}
const Group = (props) => {
  const [status, currentStatus] = useState(null);
  const [groupNum, setGroupNum] = useState('');
  var [cuser, setcuser] = useState(curuser);
  // const [userlist, setuserlist] = useState(props.location.userlist);
  const [groupdata, setgroup] = useState(group);

  
  const groupList = (item) => {
    console.log('===',item)
    return (
      <React.Fragment>
        <FormGroup>
         {
           item.map(function (item) {
            return (<React.Fragment>
            <label className="Cen">{item.groupno}</label>

            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>FNameirst </th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>GRoup Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.fn} </td>
                  <td>{item.ln} </td>
                  <td>{item.email}</td>
                  <td>{item.skill}</td>
                </tr>
              </tbody>
            </Table>
            </React.Fragment>)
          })
         }
          
        </FormGroup>
       
      </React.Fragment>
    );

  }
  return (
    <div>
      {console.log("rendering")} 
      <Form className="App">
        {group.map(function (item) {
          return groupList(item);
        })}
        <TextField 
        variant={"outlined"}
        value={groupNum} 
        onChange={(event)=>{
           setGroupNum(event.target.value)
        }}/>
        <Button onClick={() => AssignGroup(cuser,groupdata, setgroup, groupNum)} className="block">JOIN</Button>
        <Button onClick={() => {LeaveGroup(cuser,groupdata, setgroup, 0)
            // var user=cuser;
            // user.groupno=0;
            // setcuser(user);

            // console.log("set=",groupdata)
        }} className="block">Leave</Button>
      </Form>
    </div>
  );

}

export default Group;