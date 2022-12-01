import {
    expect
} from "chai"

class CheckoutPage {

    get btn_empty_cart() {
        return $("//button[@data-testid='empty-cart-button']")
    }
    get btn_confirmation_empty() {
        return $("//button[@data-testid='confirmation-popup-proceed-button']")
    }
    get btn_start_shopping() {
        return $("//a[@data-testid='error-page-link']")
    }
    get tf_search_product() {
        return $("//*[@data-testid='search-input-desktop']")
    }
    get btn_add_to_cart() {
        return $("//*[@data-testid='SvgAddToCart']")
    }
    get btn_remove_fr_cart() {
        return $("//*[@data-testid='SvgRemoveFromCart']")
    }
    get ctn_product() {
        return $("//*[@data-testid='product']")
    }
    get btn_cart_checkout() {
        return $("//button[@data-testid='linkToCheckout']")
    }
    get rad_time_slot() {
        return $("//*[@data-testid='checkout-available-timeslot']")
    }
    get btn_cont_time_slot() {
        return $("//button[@data-testid='checkout-timeslot-continue-button']")
    }
    get rad_credit_card_item() {
        return $("//*[@data-testid='credit-card-item']")
    }
    get btn_cont_card() {
        return $("//button[@data-testid='checkout-payment-continue-button']")
    }
    get btn_place_order() {
        return $("//button[@data-testid='checkout-place-order-button']")
    }


    async click_empty_cart() {
        if (await (await this.btn_empty_cart).isDisplayed()) {
            await this.btn_empty_cart.click();
            await (await this.btn_confirmation_empty).click();
        }
        return (await this.btn_start_shopping).waitForDisplayed({timeout: 5000}); //confirmation cart is empty
    }

    async search_product(item) {
        await (await this.tf_search_product).waitForEnabled({timeout: 5000})
        await (await this.tf_search_product.setValue(item));
        await browser.keys('\uE007');
        await (await this.ctn_product).waitForDisplayed({timeout: 5000}); //wait until list of product is displayed
    }

    async click_add_to_cart() {
        const el = await this.btn_add_to_cart;
        await el.scrollIntoView();
        await el.waitForClickable({timeout: 5000});
        await el.click();
        await (await this.btn_remove_fr_cart).waitForDisplayed({timeout: 5000}); //wait item is added to the cart
    }

    async click_to_checkout() {
        const el = await this.btn_cart_checkout;
        await el.waitForEnabled({timeout: 5000});
        await el.waitForClickable({timeout: 5000});
        await el.click();
    }

    async choose_time_slot() {
        await (await this.rad_time_slot).waitForDisplayed({timeout: 5000})
        await (await this.rad_time_slot).click();
        await (await this.btn_cont_time_slot).click();
    }

    async choose_credit_card() {
        await (await this.rad_credit_card_item).waitForDisplayed({timeout: 5000});
        await (await this.btn_cont_card).waitForClickable({timeout: 5000});
        await (await this.btn_cont_card).click();
    }

    async verify_prepare_order_succesfully() {
        await (await this.btn_place_order).waitForDisplayed({timeout: 5000});
        const isDisplay = await (await this.btn_place_order).isDisplayed();
        return expect(isDisplay).is.equal(true);
    }
}

export default new CheckoutPage;