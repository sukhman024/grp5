export function showUserDetails(email) {
    var user={GroupNo:"1", FirstName:"fn", LastName:"ln" , PhoneNumber: "2343545", SkillSet: "Node", Unit: "cloud"}
    return user;
}

export function updateProfile(user) {
    return true;
}

export function showListOfStudents(users) {
    return true;
}

export function sendSMS(smsText,receiverNum,senderNum) {
    return true;
}

export function sendEmail(senderEmail,receiverEmail,subject,mailText) {
    return true;
}

export function validateUsername(email) {
    const regex = RegExp('');
    return RegExp('foo*', 'g');
}