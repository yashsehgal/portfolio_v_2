/// this is a test file which contains all the test methods which will check all the other functions and logics written
/// in other code modules.

/**
 * TODO: To write test cases for all the methods
 * TODO: Test other unit test cases also and design global testing modules
 */

/// exporting all the module to be tested

import Logger from 'logger';

class Test {
  
  /// this function will print all the test case outputs
  testLoggerMethod(message, type) {
    const loggerTest = new Logger;
    loggerTest.logMessage(message, type);
  }

  /// this function will check all the possible outputs from the logger method
  checkLoggerMethod(message) {
    const types = ["log", "info", "warn", "error"];
    
    for(var count = 0; count < types.length; count++) {
      this.testLoggerMethod(message, types[count]);
    }
  }
};

const runTests = function runTests() {
  const tester = new Test();
  
  /// this statement will be showing the message on the console with all the logging methods (like: log, info, warn, error)
  tester.checkLoggerMethod("The username is not available");
}