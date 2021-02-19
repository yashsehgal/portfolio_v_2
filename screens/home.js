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
name_headline.innerHTML = "Yash Sehgal.introduce()";
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

let introduction_section = document.createElement("div");
introduction_section.className = "introduction_section";
introduction_section.id = "introduction-section";

let introduction_content = document.createElement("div");
introduction_content.className = "animate__animated animate__fadeInUp introduction_content";
introduction_content.id = "introduction-content";

introduction_content.innerHTML = `
  Hey There, I am <a href="https://www.github.com/yashsehgal/pluto" target="_blank" class="pluto_font">Pluto</a>. 
  A creation of Yash Sehgal. <br/>
  He is a Tech Savvy. Developer <br/>
  and a Designer.
`;

introduction_content.style.fontFamily = "Poppins";
introduction_content.style.color = "white";
introduction_content.style.fontSize = "24px";

introduction_section.append(introduction_content);
introduction_section.style.marginTop = "6em";

/// appending <introduction_section> in the document root section
document.getElementById("root").appendChild(introduction_section);