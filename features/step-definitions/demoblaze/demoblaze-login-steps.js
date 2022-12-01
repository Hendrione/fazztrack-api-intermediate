import { Given, When, Then } from '@cucumber/cucumber';
import dotenv from 'dotenv';

import loginPage from '../../page-objects/demoblaze/demoblaze-login-page';

dotenv.config();


Given(/^user is on the demoblaze login page$/, () => {
    loginPage.open()
});

When(/^user is successfully logged in to demoblaze$/, () => {
    loginPage.clickLinkTextLogin();
    loginPage.inputUsername(process.env.USERNAME);
    loginPage.inputPassword(process.env.PASSWORD);
    loginPage.clickBtnLogin();
});
