import React, { useState, seEffect } from 'react';
import "../../../styles/App.css";
import * as ReactBootStrap from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap';

const Students = (props) => {
  const [status, currentStatus] = useState(null);
  const [userlist, setuserlist] = useState(props.location.userlist);
  //const [groupdata, setgroup] = useState(group);
  console.log("user list inside students=", userlist);
  return(
    <div>
      <h1 className="Cen">Student list</h1>
    </div>
  
  );
  /*
  const displayStudentList = (student) => {
   console.log(student)
    return (
      <React.Fragment>
        <FormGroup>
         {
           student.map(function (student) {
            return (<React.Fragment>
            <label className="Cen">{student.email}</label>

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
                  <td>{student.email} </td>
                  <td>{student.email} </td>
                  <td>{student.email}</td>
                  <td>{student.email}</td>
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
      <Form className="App">
        {userlist.map(function (student) {
          return displayStudentList(student);
        })}
      </Form>
    </div>
  );
*/
}

export default Students;