import Page from './page.js'

class ProductDetailPage extends Page {

    get buttonAddToCart(){
        return $(`//a[text()='Add to cart']`)
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

}

export default new ProductDetailPage