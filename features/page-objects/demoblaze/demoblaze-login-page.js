import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get txtfieldUsername () { return $('#loginusername') }
    get txtfieldPassword () { return $('#loginpassword') }
    get linkTextLogin () { return $('[data-target="#logInModal"]') }
    get btnLogin () { return $('[onclick="logIn()"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

     open () {
        return super.open('/');
    }

    inputUsername (username) {
        this.txtfieldUsername.waitForDisplayed(2000);
        (this.txtfieldUsername).setValue(username);
    }

    inputPassword(password) {
        this.txtfieldPassword.waitForDisplayed(2000);
        (this.txtfieldPassword).setValue(password);
    }

    clickLinkTextLogin() {
        this.linkTextLogin.waitForDisplayed(2000);
        (this.linkTextLogin).click();
    }

    clickBtnLogin() {
        this.btnLogin.waitForDisplayed(2000);
        (this.btnLogin).click();
    }

    isBtnLoginDisplayed () {
        this.btnLogin.waitForDisplayed(2000);
        return this.btnLogin.isDisplayed();
    }
}

export default new loginPage();
