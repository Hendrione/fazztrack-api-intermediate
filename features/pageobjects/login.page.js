
class LoginPage {

    get tf_email() {
        return $("//*[@data-testid='welcomeInputEmailOrPhone']")
    }
    get tf_password() {
        return $("//input[@data-testid='signInInputPassword']")
    }
    get btn_next() {
        return $("//button[@data-testid='welcomeButtonSubmit']")
    }
    get btn_login() {
        return $("//button[@data-testid='signInButtonSubmit']")
    }
    get icon_account() {
        return $("//*[@data-testid='accountPageLink']")
    }
    get lbl_logout() {
        return $("//*[@data-testid='ProfileLogOutButton']")
    }


    async input_valid_login(username, password) {
        await (await this.tf_email).setValue(username);
        await (await this.btn_next).click();
        await (await this.tf_password).setValue(password);
        await (await this.btn_login).click();
    }

    async verify_login_success() {
        await (await this.icon_account).waitForDisplayed({ timeout: 20000 });
        return expect(this.icon_account).toHaveTextContaining("Account")
    }

    async proceed_to_logout() {
        await (await this.icon_account).click();
        await (await this.lbl_logout).click();
    }

}

export default new LoginPage();