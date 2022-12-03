const Page = require('./page')

class FrontPage extends Page {
    
    get inputUsername() {
        return $('#loginusername')
    }
    
    get inputPassword() {
        return $('#loginpassword')
    }

    get buttonLogin() {
        return $(`[onclick='logIn()']`)
    }

    get linkTextLogin() {
        return $(`[data-target='#logInModal']`)
    }

    async login(username, password) {
        await this.linkTextLogin.click()

        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)

        await this.buttonLogin.click()
    }

    open() {
        return super.open('index.html')
    }

}

module.exports = {
    FrontPage
}