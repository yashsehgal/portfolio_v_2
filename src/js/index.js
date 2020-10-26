userAvailable = () => {
  sendEmail();
};

sendEmail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "yashsehgal.work@gmail.com",
    Password: "yashsehgal24",
    To: "yashsehgal.work@gmail.com",
    From: "yashsehgal.work@gmail.com",
    Subject: "Portfolio AI Updates",
    Body: "Congratulations! A new user has gone through your portfolio sir..."
  })
    .then(function (message){
      console.log("the email has been sent to the admin")
    })
}

userAvailable();