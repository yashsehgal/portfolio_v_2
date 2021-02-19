class Assets {
  fetch_list_dir(folder_name="assets") {
    var path = require('path');
    var file = '/style/assets/';
    var filename = path.parse(file).base;

    console.log(filename);
  }
};