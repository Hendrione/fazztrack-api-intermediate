// const Page = require('./page')
import Page from './page.js'

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

// module.exports = new HomePage();
export default new HomePage()