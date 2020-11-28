// userAvailable = () => {
//   sendEmail();
// };


// /**
//  * @params : nothing
//  * @define : This sendEmail function will create a email format object which will share the object values to 
//  *          the email address that has been used as "To"
//  */
// sendEmail = () => {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "EMAIL-ADDRESS",
//     Password: "PASSWORD",
//     To: "SENDER'S-EMAIL-ADDRESS",
//     From: "RECIEVER'S EMAIL ADDRESS",
//     Subject: "Portfolio AI Updates",
//     Body: "Congratulations! A new user has gone through your portfolio sir..."
//   })
//     .then(function (message){
//       console.log("the email has been sent to the admin")
//     })
// }

// userAvailable();