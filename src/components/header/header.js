/// this is the header component, which will be used by all the webpages
/// className of header usage should be <header>

let header = document.createElement("span");
header.className = "header";

let _res = [
  {
    "option": "Home",
    "url": "/index.htm"
  },
  {
    "option": "Contact",
    "url": "/contact.htm"
  },
  {
    "option": "v.2.0",
    "url": "https://www.github.com/yashsehgal/portfolio_v_2"
  }
];

// fetch('/src/screens/api/header_options.json')
//   .then((res) => res.json())
//   .then((res) => {
    for (let data in _res) {
      let header_option = document.createElement("a");
      header_option.className = "header_option";

      // header_option.innerHTML = _res[data].option;
      if (_res[data].option.toLowerCase() != "v.2.0") {
        header_option.innerHTML = `<a href="${_res[data].url}" class="header_option">${_res[data].option}</a>`;
      } else if (_res[data].option.toLowerCase() == "v.2.0") {
        header_option.innerHTML = `<a href="${_res[data].url}" class="header_option" target="_blank">${_res[data].option}</a>`;
      } else {
        console.warn("invalid header option found!!");
      }

      /// styling header options
      header_option.style.fontFamily = "Poppins";

      header_option.style.marginLeft = "1em";
      header_option.style.marginRight = "1em";


      header.append(header_option);
    }
  // });

  header.style.float = "right";
  document.getElementById("header").appendChild(header);