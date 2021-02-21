/// this is the header component, which will be used by all the webpages
/// className of header usage should be <header>

let header = document.createElement("span");
header.className = "header";

fetch('/src/api/header_options.json')
  .then((res) => res.json())
  .then((res) => {
    for (let data in res) {
      let header_option = document.createElement("a");
      header_option.className = "header_option";

      // header_option.innerHTML = res[data].option;
      if (res[data].option.toLowerCase() != "v.2.0") {
        header_option.innerHTML = `<a href="${res[data].url}" class="header_option">${res[data].option}</a>`;
      } else if (res[data].option.toLowerCase() == "v.2.0") {
        header_option.innerHTML = `<a href="${res[data].url}" class="header_option" target="_blank">${res[data].option}</a>`;
      } else {
        console.warn("invalid header option found!!");
      }

      /// styling header options
      header_option.style.fontFamily = "Poppins";

      header_option.style.marginLeft = "1em";
      header_option.style.marginRight = "1em";


      header.append(header_option);
    }
  });

  header.style.float = "right";
  document.getElementById("header").appendChild(header);