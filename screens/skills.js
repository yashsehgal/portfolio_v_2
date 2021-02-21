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
name_headline.innerHTML = "Yash Sehgal.hasSkills()";
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

let skills_section = document.createElement("div");
skills_section.className = "content animate__animated animate__fadeInUp";
skills_section.id = "skills-section";
skills_section.style.marginTop = "3em";

fetch('/skills_list.json')
  .then((res) => res.json())
  .then((res) => {
    for (let data in res) {
      // console.log(res[data]);
      let skill_name = document.createElement("h3");
      skill_name.className = "skill_name";
      skill_name.style.color = "white";
      skill_name.style.fontFamily = "Poppins";
      skill_name.style.fontWeight = "600";
      // skill_name.style.fontSize = "24px";
      skill_name.innerHTML = res[data].skill_name;

      let skill_level = document.createElement("p");
      skill_level.id = "skill_level";
      skill_level.style.color = "gray";
      skill_level.style.fontFamily = "Poppins";
      skill_level.innerHTML = res[data].level;

      skills_section.append(skill_name);
      skills_section.append(skill_level);
    }
  });

  document.getElementById("root").appendChild(skills_section);
