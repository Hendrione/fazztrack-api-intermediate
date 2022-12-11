const Page = require('./page')

class CartPage extends Page {
    get btnAddToCart() {
        return $(`.btn-success`)
    }

    async clickBtnAddToCart() {
        await this.btnAddToCart.click()
    }

    async clickOkAlert(){
        await browser.acceptAlert()
    }

    async clickBrowserBackBtn() {
        await browser.back()
        await browser.back()
    }
}

module.exports = new CartPage()