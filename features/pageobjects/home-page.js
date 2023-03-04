// const Page = require('./page')
import Page from './page.js'

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    async buttonItemName(itemName){
        //back quote - dibawah tombol ESC
        return await $(`//a[text()='${itemName}']`)
    }

    get buttonAddToCart(){
        return $(`//a[text()='Add to cart']`)
    }

    async clickItemName(itemName){
        await (await this.buttonItemName(itemName)).click()
    }

    async clickAddToCartBtn(){
        await (await this.buttonAddToCart).click()
        await browser.pause(5000)
    }

    async acceptAlert(){
        await browser.acceptAlert()
    }

    async clickBackToProductList(){
        await browser.back()
        await browser.back()
    }

    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }
}

// module.exports = new HomePage();
export default new HomePage()