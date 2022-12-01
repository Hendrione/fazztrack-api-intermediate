import {
    Given,
    When,
    Then,
    After,
    Status
} from '@cucumber/cucumber';
import promotion_page from '../pageobjects/promotion.page';
import homepage from '../pageobjects/home.page';
import login_page from '../pageobjects/login.page';
import categories_page from '../pageobjects/categories.page';
import checkout_page from '../pageobjects/checkout.page'
import cucumberJson from 'wdio-cucumberjs-json-reporter';
import imageToBase64 from 'image-to-base64';

After(async function (testCase) {
    if (testCase.result.status === Status.FAILED) {
        const file = `${Date.now()}.png`;
        await browser.saveScreenshot(`reports/image/${file}`);
        const base64 = await imageToBase64(`reports/image/${file}`);
        await cucumberJson.attach(base64.toString(), 'image/png');
    }
})

const pages = {
    login: login_page,
    home: homepage,
    promotion: promotion_page,
    categories: categories_page,
    checkout: checkout_page
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I navigate to (\w+) page$/, async (menu) => {
    await pages['home'].click_menu(menu);
});

When(/^I click filter (\w+)$/, async (filter) => {
    await pages['promotion'].click_(filter);
});

Then(/^I verify on items (\w+)$/, async (filter) => {
    await pages['promotion'].verify_items(filter);
})

Then(/^I verify all filters$/, async (dataTable) => {
     for await (const element of dataTable.hashes()){
       await pages['promotion'].verify_all_filters(element.filter, element.locator);
    }
})

When(/^I input valid login with username (.+) and  password (.+)$/, async (username, password) => {
    await pages['login'].input_valid_login(username, password);
});

Then(/^I successfully login$/, async () => {
    await pages['login'].verify_login_success();
})

When(/^I proceed to Logout$/, async () => {
    await pages['login'].proceed_to_logout();
});

Then(/^I successfully logout$/, async () => {
    await pages['home'].verify_logout_success();
})

Then(/^I successfully check all link is not broken$/, {timeout: 240 * 1000}, async () => {
    await pages['categories'].verify_all_clickable_link();
})

When(/^I clear the cart$/, async () => {
    await pages['checkout'].click_empty_cart();
})

When(/^I search for (\w+)$/, async (item) => {
    await pages['checkout'].search_product(item);
})

When(/^I add item to cart$/, async () => {
    await pages['checkout'].click_add_to_cart();
})

When(/^I go to (\w+) page$/, async (page) => {
    await pages['checkout'].click_to_checkout();
})

When(/^I choose time-slot$/, async () => {
    await pages['checkout'].choose_time_slot();
})

When(/^I choose credit-card$/, async () => {
    await pages['checkout'].choose_credit_card();
})

Then(/^I successfully prepare the order$/, async () => {
    await pages['checkout'].verify_prepare_order_succesfully();
})