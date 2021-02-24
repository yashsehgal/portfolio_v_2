// this is the contact section


let contact_page_container = document.createElement("div");
contact_page_container.className = "contact_page_container";

let contact_form = document.createElement("div");
contact_form.className = "contact_form";

/// declaring input fields

// let FullName = document.createElement("input");
// FullName.className = "input";
// FullName.id = "fullname-input";
// FullName.name = "fullname";
// FullName.style.width = "50%";

// let ContactNumber = document.createElement("input:number");
// ContactNumber.className = "input";
// ContactNumber.id = "contact_number-input";

// let EmailAddress = document.createElement("input:email");
// EmailAddress.className = "input";
// EmailAddress.id = "email_address-input";

// let Description = document.getElementById("textarea");
// Description.className = "input";
// Description.id = "description-input";

// contact_form.append(FullName);
// contact_form.append(ContactNumber);
// contact_form.append(EmailAddress);
// contact_form.append(Description);

contact_form.innerHTML = `

  <h1 class="heading">Contact Me</h1>

  <form method="GET">
  
  <label name="fullname">Full Name</label>
  <input type="text" class="input" id="full_name-input" name="fullname" required>

  <br>

  <label name="contact">Contact Number</label>
  <input type="text" class="input" id="contact-input" name="contact">

  <br>

  <label name="email">Email Address</label>
  <input type="email" class="input" id="email_address-input" name="email" required>

  <br>

  <label name="description">Any Message</label>
  <textarea class="input" id="description-input" name="description"></textarea>

  <br>

  <a href="" class="button submit_button" id="submit-button" onclick="">Send</a>

</form>`;

contact_page_container.append(contact_form);

document.getElementById("content").appendChild(contact_page_container);


let fullname = document.getElementById("full_name-input").value;
console.log(fullname)


/// contact form event methods

// class ContactFormActivity {
//   checkDetails() {
//     // if (document.getElementById("fullname-input").hasChildNodes() && document.getElementById("contact-input").hasChildNodes() &&
//     //     document.getElementById("email_address-input").hasChildNodes() && document.getElementById("description-input").hasChildNodes()) {
//           if (document.getElementById("contact-input").type === "number") {
//             fetch('/user_contact.json')
//               .then((res) => res.json())
//               .then((res) => {
//                 for (let data in res) {
//                   console.log(res[data]);
//                 }
//               });
//           }
//   }
// };

// let contactFormActivity = new ContactFormActivity();
// contactFormActivity.checkDetails();

// // document.getElementsByClassName("input").item
// for (let classItems in document.getElementsByClassName("input").item) {
//   if (((document.getElementsByClassName("input").item)[classItems]).hasChildNodes()) {
//     console.log("running...");
//   }
// }