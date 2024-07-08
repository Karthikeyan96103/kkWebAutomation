const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get loginbtn() {
    return $("#login-button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(await this.inputUsername, username);
    await browser.pause(1000);
    await this.inputPassword.setValue(await this.inputPassword, password);
    await browser.pause(1000);
    await this.loginbtn.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
}

module.exports = new LoginPage();
