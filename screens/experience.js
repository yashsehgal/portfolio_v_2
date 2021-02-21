/// setting up max-width & margin as auto for the body
/// to center up the entire page
document.body.style.maxWidth = "1400px";
document.body.style.margin = "auto";
document.body.style.backgroundColor = "black";

let name_headline = document.createElement("p");
name_headline.className = "headline";
name_headline.style.fontFamily = "Poppins";
name_headline.style.fontSize = "70px";
// name_headline.style.color = "white";
name_headline.style.textDecoration = "none";
name_headline.innerHTML = "Yash Sehgal.experience()";
name_headline.style.fontWeight = "600";

/// appending <name_headline> in the document root section
document.getElementById("root").appendChild(name_headline);

let headerContainer = document.createElement("div");
headerContainer.className = "header";
headerContainer.id = "header-section";

let header_options = ["Home", "Experience", "Projects", "Education", "Skills", "Resume"];
let header_option_links = ["index.htm", "experience.htm", "projects.htm", "education.htm", "skills.htm", "YashSehgal.pdf"];

for (headerOptions in header_options) {
  if (header_options[headerOptions].toLowerCase() != "resume") {
    let _option = document.createElement("a");
    _option.className = "header_option"
    _option.innerHTML = header_options[headerOptions];
    _option.href = header_option_links[headerOptions];
    _option.style.textDecoration = "none";
    _option.style.marginRight = "3em";
    _option.style.fontFamily = "Poppins";
    headerContainer.append(_option);
  }

  /// checking that if the user has selected "resume" option
  /// the pdf file will open in a new tab
  if (header_options[headerOptions].toLowerCase() == "resume") {
    let _option = document.createElement("a");
    _option.className = "header_option"
    _option.innerHTML = header_options[headerOptions];
    _option.href = header_option_links[headerOptions];
    _option.style.textDecoration = "none";
    _option.style.marginRight = "3em";
    _option.style.fontFamily = "Poppins";
    headerContainer.append(_option);

    // if (_option.onclick() == true) {
    //   window.open(header_option_links[headerOptions]);
    // }
  }
}

/// appending <headerContainer> in the document root section
document.getElementById("root").appendChild(headerContainer);

/// experience section DOM elements
let experience_section = document.createElement("div");
experience_section.className = "animate__animated animate__fadeInUp";
experience_section.style.marginTop = "4em";

// let experience_heading = document.createElement("h3");            /// for experience heading
// experience_heading.className = "experience_heading";

// let experience_desc = document.createElement("p");                /// for experience description
// experience_desc.className = "experience_desc";

// let experience_desc_content = document.createElement("p");        /// for experience description content
// experience_desc_content.className = "experience_desc_content";

/// FETCHING DATA-VALUES FROM JSON FILE

fetch('/experiences_list.json')
  .then((res) => res.json())
  .then((res) => {
    for (let data in res) {
      
      let experience_heading = document.createElement("h3");            /// for experience heading
      experience_heading.className = "experience_heading";
      experience_heading.style.fontFamily = "Poppins";
      experience_heading.style.color = "white";
      experience_heading.style.fontWeight = "600";

      let experience_desc = document.createElement("div");                /// for experience description
      experience_desc.className = "experience_desc";
      experience_desc.style.fontFamily = "Poppins";
      experience_desc.style.color = "gray";
      experience_desc.style.fontWeight = "300";

      let experience_desc_content = document.createElement("p");        /// for experience description content
      experience_desc_content.className = "experience_desc_content";
      experience_desc_content.style.fontFamily = "Poppins";
      experience_desc_content.style.color = "white";
      experience_desc_content.style.fontWeight = "normal";
      experience_desc_content.style.fontSize = "14px";
      experience_desc_content.style.width = "50%";

      experience_heading.innerHTML = res[data].heading;

      // let company_name = document.createElement("p");
      // company_name.innerHTML = res[data].company_name;
      // company_name.style.fontFamily = "Poppins";
      // company_name.style.color = "gray";
      // company_name.style.fontWeight = "300";

      // let duration = document.createElement("p");
      // duration.innerHTML = res[data].duration;
      // duration.style.fontFamily = "Poppins";
      // duration.style.color = "gray";
      // duration.style.fontFamily = "300";

      // experience_desc.innerHTML = `${res[data].company_name}, ${res[data].duration}`;

      if (res[data].current === true) {
        /// currently working here as the <current> is true
        if (res[data].isAvailableOnline === true) {
          experience_desc.innerHTML =  `<a href="${res[data].external_url}" class="link" target="_blank">@${res[data].company_name}</a>`;
        } else {
          experience_desc.innerHTML =  `@${res[data].company_name}`;
        }

      } else if (res[data].current === false) {
        /// not working now, as the <current> is false
        if (res[data].isAvailableOnline === true) {
          experience_desc.innerHTML = `<a href="${res[data].external_url}" class="link" target="_blank">@${res[data].company_name}</a>`;
        } else {
          experience_desc.innerHTML = `@${res[data].company_name}, ${res[data].duration}`;
        }
      }

      experience_desc_content.innerHTML = res[data].job_description;

      /// appending all the things inside experience-section
      experience_section.append(experience_heading);
      experience_section.append(experience_desc);
      experience_section.append(experience_desc_content);
      // experience_section.append("<br>");

    }
  });

/// appending <experience-section> in the document root section
document.getElementById("root").appendChild(experience_section);