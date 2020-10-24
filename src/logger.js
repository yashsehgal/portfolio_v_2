class Logger {
  logMessage(message, type = "log") {
    if (message.length != 0) {
      if (type === "log") {
        console.log(message);
      } else if (type === "info") {
        console.info(message);
      } else if (type === "warn") {
        console.warn(message);
      } else if (type === "error") {
        console.error(message);
      }
    }    
  }
};
