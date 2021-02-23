/// this is the footer section - footer as a component

// let footer = document.createElement("div");
// footer.className = "footer";

// let footer_options = [
//   {
//     "left_section": {
//       {
//         "title"
//       }
//     },
//     "right_section": {

//     }
//   }
// ];        /// creating an internal JSON Object


let right_footer_section = document.createElement("div");
right_footer_section.className = "footer";

let footer_options = [
  {
    "title": "GitHub",
    "url": "https://www.github.com/yashsehgal"
  },
  {
    "title": "LinkedIn",
    "url": "https://www.linkedin.com/in/yash-sehgal-55b7711a4/"
  },
  {
    "title": "Instagram",
    "url": "https://www.instagram.com/sehgalyash_"
  },
  {
    "title": "YouTube",
    "url": "https://www.youtube.com/channel/UC23yA3SBkV_ehY4H8VSuNVg"
  }
];          /// creating an internal JSON object

for (let data in footer_options) {
  let _option_writer__ = document.createElement("a");
  _option_writer__.className = "footer_option";
  _option_writer__.style.marginRight = "1em";
  // _option_writer__.style.float = "right";
  // _option_writer__.style.marginLeft = "1em";
  // _option_writer__.style.color = "black";
  _option_writer__.innerHTML = `<a href="${footer_options[data].url}" class="footer_option" target="_blank">${footer_options[data].title}</a>`;

  right_footer_section.append(_option_writer__);
}

/// styling right-footer-section
// right_footer_section.style.float = "right";
right_footer_section.style.paddingTop = "6em";
right_footer_section.style.paddingBottom = "6em";
// right_footer_section.style.backgroundColor = "#eee";
// right_footer_section.style.transform = "rotate(90deg)";



document.getElementById("footer").appendChild(right_footer_section);