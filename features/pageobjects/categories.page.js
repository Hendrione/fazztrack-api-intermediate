import { assert } from 'chai';
import Page from '../pageobjects/page'
var assertChai = require('chai').assert;

class CategoriesPage extends Page {
    get category_container() {
        return $$("//*[@data-testid='viewAllItem']")
    }
    
    get category_image() {
        return $$("//*[@data-testid='category-img']")
    }

    get tf_search_input(){
        return $("//*[@data-testid='search-input-desktop']");
    }

    async verify_all_clickable_link() {
        var array_status = [];
        const categories_list = await this.category_container;
        const categories_image = await this.category_image;
        await categories_image[0].waitForDisplayed({timeout: 5000})
        await (await this.tf_search_input).click();
        for await (const link of categories_list) {
            const href = await link.getAttribute('href');
            let status = await super.check_link(href);
            array_status.push(status);
        }
        console.log(array_status);
        if(array_status.includes(200)){ //if element contains 200 and mix without 200
            return assert.equal(array_status.every( (val, i, arr) => val === arr[0]),true);
        }else{//if all element does not contain 200
            return assertChai.fail("All the link in Categories Page is broken")
        }
    }
}

export default new CategoriesPage();