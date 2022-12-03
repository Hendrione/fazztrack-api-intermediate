const Page = require('./page')

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

module.exports = new HomePage();