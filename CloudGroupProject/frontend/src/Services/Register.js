export function SignInUserService(user) {    
    if (ValidatePassword(user.password) && ValidateEmail(user.email)) {
        return { firstname: "Test 1", Lastname: "Test2" };
    } else {
        return false;
    }
}

export function SignUpUserService(params) {
  return { email: "abc@ddef.com", firstname: "Test 1", Lastname: "Test2" , password: "dummypassword", phone: "123456"};
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

export function ValidatePassword(password) {
    return true;
  }

/*
   export default {
     getUser : ()=>{
         return fetch('/employee')
                 .then(res => res.json())
                 .then(data => data);
     },
     updateUser : (user)=>{
         return fetch(`/profile/${user.email}`,
                     {method : "put",
                      body: JSON.stringify(user),
                      headers : {
                          "Content-Type" : "application/json"
                      }}).then(res => res.json())
                         .then(data => data);
     },
     createUser : (user)=>{
         return fetch(`/employee`,
             {method : 'post',
             body: JSON.stringify(user),
             headers : {
                 "Content-Type" : "application/json"
             }}).then(res => res.json())
                 .then(data => data);
     }
 }

 */