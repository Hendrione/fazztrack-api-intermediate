

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PromotionPage {
    /**
     * define selectors using getter methods
     */
    
    get lbl_promotion() {
        return $("//*[@data-testid='Promotions']")
    }
    get lbl_PWP() {
        return $("//*[@data-testid='tagOption-pwp']")
    }
    get lbl_mustBuy() {
        return $("//*[@data-testid='tagOption-must-buy']")
    }
    get lbl_digitalClub() {
        return $("//*[@data-testid='tagOption-digital-club-exclusive']")
    }
    get text_product() {
        return $("//*[@data-testid='product']")
    }

    async click_(input){
        const filters ={
            PWP: this.lbl_PWP,
            mustbuy: this.lbl_mustBuy,
            digitalclub: this.lbl_digitalClub,
        }
        return (await filters[input]).click();
    }

    async verify_items(input) {
        const label ={
            PWP: 'PWP',
            mustbuy: 'Must Buy',
            digitalclub: 'Offer'
        };
        return expect(await this.text_product).toHaveTextContaining(label[input]);
    }

    async verify_all_filters(filter, locator) {
        return expect(await $(locator)).toHaveTextContaining(filter);
    }
}

export default new PromotionPage();