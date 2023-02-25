// const {Given, When, Then} = require('@wdio/cucumber-framework');
import {Given, When, Then} from '@wdio/cucumber-framework'

// const FrontPage = require('../pageobjects/front-page')
// const HomePage = require('../pageobjects/home-page');
import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'


Given(/^I am on the front page$/, async() => {
    await FrontPage.open()
})

When(/^I try to login with correct credential$/, async() => {
    await FrontPage.login('wibowo.bullseye', 'bullseye');
})

Then (/^I am successfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('wibowo.bullseye')
})