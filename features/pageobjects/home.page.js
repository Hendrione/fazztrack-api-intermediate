import Page from './page';

var menus = {
    promotions: "//*[@data-testid='Promotions']",
    categories: "//*[@data-testid='Categories']",
    login: "//*[@data-testid='loginPageLink']",
    cart: "//a[@data-testid='cart-button']"
}

class HomePage extends Page {

    async click_menu(menu) {
        return $(menus[menu]).click();
    }

    async open(page = '') {
        return super.open(page);
    }

    async verify_logout_success(){
        return expect($(menus['login'])).toBePresent();
    }

}

export default new HomePage;