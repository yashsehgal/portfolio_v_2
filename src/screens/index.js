/// this is the index dom collection
/// for index.htm page

/// internal functions
// function getPlutoMessage(message, id) {
//   if (message != null) {
//     let pluto_message = document.createElement("span");
//     pluto_message.className = "pluto_message";
//     pluto_message.style.fontFamily = "Hack";
//     pluto_message.style.color = "teal";
//     pluto_message.style.textDecoration = "none";
//     pluto_message.innerHTML = `> pluto("Yash Sehgal").${message}`;

//     document.getElementById(id).appendChild(pluto_message);
//   }
// }

// let json_object = require('path');

/// pluto responses object
let res = [
  {
    "response": "pluto('Yash Sehgal').about();",
    "title": "About Him",
    "tag": "about"
  },
  {
    "response": "pluto('Yash Sehgal').skills()",
    "title": "Skills He has",
    "tag": "skills"
  },
  {
    "response": "pluto('Yash Sehgal').education()",
    "title": "His Education",
    "tag": "education"
  },
  {
    "response": "pluto('Yash Sehgal').experience()",
    "title": "My Experiences",
    "tag": "experience"
  }
];


let _skills_res = [
  {
    "title": "Python"
  },
  {
    "title": "C"
  },
  {
    "title": "C++"
  },
  {
    "title": "JavaScript"
  },
  {
    "title": "UI/UX Designing"
  },
  {
    "title": "Frontend Web Development & Designing"
  },
  {
    "title": "JSON"
  },
  {
    "title": "SQL"
  }
]

let _education_res = [
  {
    "title": "Bachelors of Technology, Computer Science (with specialization in AI)",
    "education_desc": "Medicaps University, Indore, India",
    "duration": "2020-2024"
  },
  {
    "title": "High School Graduation",
    "education_desc": "Guru Harkrishan Public School, Indore, India",
    "duration": "2018-2020"
  }
]


let _experience_res = [
  {
    "title": "UI/UX Design Intern",
    "companyname": "Infonium",
    "duration": "current",
    "category": "employment"
  },
  {
    "title": "Graphic Designing - Executive",
    "companyname": "CodeChef Medicaps Chapter (CMC)",
    "duration": "current",
    "category": "employment"
  },
  {
    "title": "Core Member",
    "companyname": "ACM Medicaps Chapter (MUACM)",
    "duration": "current",
    "category": "employment"
  },
  {
    "title": "Open Source Developer",
    "companyname": "GirlScript Summer Of Code (GSSOC)",
    "duration": "3 months",
    "category": "participation"
  },
  {
    "title": "Open Source Contributor",
    "companyname": "DevScript Winter Of Code (DSWOC)",
    "duration": "3 months",
    "category": "participation"
  },
  {
    "title": "Open Source Contributor",
    "companyname": "Hacktoberfest, By DigitalOcean",
    "duration": "1 month",
    "category": "participation"
  }
]


let homepage_container = document.createElement("div");
homepage_container.className = "homepage_container animate__fadeInUp animate__animated";



let introduction_section = document.createElement("div");
introduction_section.className = "introduction_section";
introduction_section.id = "introduction-section";
// introduction_section.style.textAlign = "center";

let introduction_headline = document.createElement("p");
introduction_headline.className = "headline";
introduction_headline.style.fontFamily = "Poppins";
introduction_headline.style.width = "40%";
introduction_headline.style.fontSize = "32px";
// introduction_headline.style.float = "left";
introduction_headline.innerHTML = `Hey you Beautiful, I am <a href="https://www.github.com/yashsehgal/pluto" target="_blank" class="pluto">Pluto!</a> A Creation of <a href="/index.htm" style="color: black">Yash Sehgal</a>`;


let introduction_description = document.createElement("p");
introduction_description.className = "description";
introduction_description.style.fontFamily = "Poppins";
// introduction_description.style.float = "left";
introduction_description.innerHTML = "He is a <u>Tech Savvy</u>. <u>Developer</u>. and a <u>Designer</u>";

let profile_photo = document.createElement("img");
profile_photo.className = "profile animate__fadeInUp animate__animated";
profile_photo.src = "src/screens/profile.png";
profile_photo.style.float = "right";
profile_photo.style.width = "24%";
profile_photo.style.marginTop = "15em"
profile_photo.style.boxShadow = "12px 12px black";
profile_photo.style.outline = "solid";
profile_photo.alt = "The profile photo path is not in the mood. You should check my social profiles to see me :)";


/// appending introductory data into introduction_section
introduction_section.append(profile_photo);
homepage_container.append(introduction_headline);
homepage_container.append(introduction_description);


/// appending data into homepage container
homepage_container.append(introduction_section);

let about_section = document.createElement("div");
about_section.id = "about-section";
about_section.className = "section";

let skills_section = document.createElement("div");
skills_section.id = "skills-section";
skills_section.className = "section";

let education_section = document.createElement("div");
education_section.id = "education-section";
education_section.className = "section";

let experience_section = document.createElement("div");
experience_section.id = "experience-section";
experience_section.className = "section";

// fetch(pluto_responses_object)
//   .then((res) => res.json())
//   .then((res) => {
    for (let data in res) {
      
      // let response = document.createElement("p");
      // response.className = "pluto_response";
      
      if (res[data].tag != null && res[data].tag === "about" && res[data].response != null) {
        
        /// code for "about me" section
        let pluto_response = document.createElement("p");
        pluto_response.className = "pluto_response";
        pluto_response.innerHTML = `> ${res[data].response}`;

        let section_title = document.createElement("h1");
        section_title.className = "section_title";
        section_title.innerHTML = res[data].title;
        section_title.style.fontFamily = "Poppins";
        section_title.style.fontWeight = 600;

        let description = document.createElement("p");
        description.className = "description";
        description.style.width = "52%";
        description.style.fontFamily = "Poppins";
        description.style.color = "black";
        description.innerText = `
        "The guy who is mostly online on Discord and working during online classes."

        I am Yash Sehgal, a usual undergraduate student pursuing a computer science degree with a specialization in AI who is consistently evolving and learning new things nearly every day. My goal is to add as much value as I can add to other people's life. I am a Tech-Savvy, Developer and also a Designer.

        Exploration is something I really appreciate whether you know how to do anything or not. Just do it! In the end, you'll learn about that particular thing, and that's what I feel is an ideal way to learn new things. Just to be in the process.

        Also, When I am free and not working, I love to play the piano.`;

        about_section.append(pluto_response);
        about_section.append(section_title);
        about_section.append(description);


      } else if (res[data].tag != null && res[data].tag === "skills" && res[data].response != null) {

        /// code for "skills" section
        let pluto_response = document.createElement("p");
        pluto_response.className = "pluto_response";
        pluto_response.innerHTML = `> ${res[data].response}`;

        let section_title = document.createElement("h1");
        section_title.className = "section_title";
        section_title.innerHTML = res[data].title;
        section_title.style.fontFamily = "Poppins";
        section_title.style.fontWeight = 600;

        // let description = document.createElement("p");
        // description.className = "description";
        // description.style.width = "52%";
        // description.style.fontFamily = "Poppins";
        // description.style.color = "black";

        let skills_list = document.createElement("span");
        skills_list.className = "inline_list";

        for (let skills in _skills_res) {
          let skill_writer = document.createElement("span");
          skill_writer.style.fontFamily = "Poppins";
          skill_writer.className = "skill_name";

          // skill_writer.innerHTML = `${_skills_res[0].title}`;
          if (_skills_res[skills].title != "SQL") {
            skill_writer.innerHTML = `${_skills_res[skills].title}, `;
          } else {
            skill_writer.innerHTML = `${_skills_res[skills].title}`;
          }
          skills_list.append(skill_writer);
        }

        skills_section.append(pluto_response);
        skills_section.append(section_title);
        skills_section.append(skills_list);
        // skills_section.append(description);
      }

      // } else if (res[data].tag != null && res[data].tag === "education" && res[data].response != null) {

      //   /// code for "education" section
      //   let pluto_response = document.createElement("p");
      //   pluto_response.className = "pluto_response";
      //   pluto_response.innerHTML = `> ${res[data].response}`;

      //   let section_title = document.createElement("h1");
      //   section_title.className = "section_title";
      //   section_title.innerHTML = res[data].title;
      //   section_title.style.fontFamily = "Poppins";
      //   section_title.style.fontWeight = 600;

      //   // let description = document.createElement("p");
      //   // description.className = "description";
      //   // description.style.width = "52%";
      //   // description.style.fontFamily = "Poppins";
      //   // description.style.color = "black";

               
      //   education_section.append(pluto_response);
      //   education_section.append(section_title);
      //   for (let data in _education_res) {
      //     if (_education_res[data].title != null && _education_res[data].duration != null && _education_res[data].education_desc != null) {
      //       let educationtitle = document.createElement("h3");
      //       educationtitle.className = "title";
      //       educationtitle.style.fontFamily = "Poppins";
      //       educationtitle.style.color = "black";
      //       educationtitle.innerHTML = _education_res[data].title;

      //       let educationdescription = document.createElement("span");
      //       educationdescription.className = "description";
      //       educationdescription.style.fontFamily = "Poppins";
      //       educationdescription.style.color = "gray";
      //       educationdescription.innerHTML = _education_res[data].education_desc;

      //       let educationduration = document.createElement("span");
      //       educationduration.className = "duration";
      //       educationduration.style.fontFamily = "Poppins";
      //       educationduration.style.color = "gray";
      //       educationduration.innerHTML = ` (${_education_res[data].duration})`;
            
      //       education_section.append(educationtitle);
      //       education_section.append(educationdescription);
      //       education_section.append(educationduration);
      //     }
      //   }

      // } else if (res[data].tag != null && res[data].tag === "experience" && res[data].response != null) {

      //   /// code for "experience" section
      //   let pluto_response = document.createElement("p");
      //   pluto_response.className = "pluto_response";
      //   pluto_response.innerHTML = `> ${res[data].response}`;

      //   let section_title = document.createElement("h1");
      //   section_title.className = "section_title";
      //   section_title.innerHTML = res[data].title;
      //   section_title.style.fontFamily = "Poppins";
      //   section_title.style.fontWeight = 600;

      //   // let description = document.createElement("p");
      //   // description.className = "description";
      //   // description.style.width = "52%";
      //   // description.style.fontFamily = "Poppins";
      //   // description.style.color = "black";

      //   experience_section.append(pluto_response);
      //   experience_section.append(section_title);

      //   for (let data in _experience_res) {
      //     let experiencetitle = document.createElement("h3");
      //     experiencetitle.className = "title";
          
      //     let experiencedescription = document.createElement("span");
      //     experiencedescription.className = "description";

      //     let experienceduration = document.createElement("span");
      //     experienceduration.className = "duration";


      //     let participationlist = document.createElement("div");


      //     if (_experience_res[data].category != null && _experience_res[data].category === "employment") {
      //       experiencetitle.innerHTML = _experience_res[data].title;
      //       experiencetitle.style.color = "black";
      //       experiencetitle.style.fontFamily = "Poppins";

      //       experiencedescription.innerHTML = `@${_experience_res[data].companyname}`;
      //       experiencedescription.style.color = "gray";
      //       experiencedescription.style.fontFamily = "Poppins";

      //       if (_experience_res[data].duration != "current") {
      //         experienceduration.innerHTML = _experience_res[data].duration;
      //         experienceduration.style.color = "gray";
      //         experienceduration.style.fontFamily = "Poppins";
      //       } else {
      //         experienceduration.innerHTML = ` <u>currently working</u>`;
      //         experienceduration.style.color = "gray";
      //         experienceduration.style.fontFamily = "Poppins";
      //       }
      //     } else if (_experience_res[data].category != null && _experience_res[data].category === "participation") {
      //       // let participation_writer = document.createElement("a");
      //       // participation_writer.innerHTML = _experience_res[data].companyname;
      //       // participation_writer.style.color = "black";
      //       // participation_writer.style.fontFamily = "Poppins";

      //       // participationlist.append(participation_writer);
      //     }

      //     // experiencetitle.innerHTML = _experience_res[data].title;



      //     experience_section.append(experiencetitle);
      //     experience_section.append(experiencedescription); experience_section.append(experienceduration);
      //     // experience_section.append(`<h4>Participated in Events like: </h4>`);
      //     // experience_section.append(participationlist);

      //   }

      // } 
      else {
        console.warn("something went wrong with <index.js> module. Sections method is not working properly!");
      }
    }


    /// adding bg colors to sections
    // education_section.style.backgroundColor = "#eee";
    // education_section.style.padding = "4em";

    // experience_section.style.backgroundColor = "#eee";
    // experience_section.style.padding = "4em";


    /// appending all the sections into the homepage-container
    homepage_container.append(about_section);
    homepage_container.append(skills_section);
    homepage_container.append(education_section);
    homepage_container.append(experience_section);
  // });  


/// appending each and every section inside homepage-container into root
document.getElementById("content").appendChild(homepage_container);
