import { Given, When, Then } from '@cucumber/cucumber';
import dotenv from 'dotenv';

import homePage from '../../page-objects/demoblaze/demoblaze-home-page';

dotenv.config();

Then(/^user should see home page demoblaze$/, () => {
    homePage.assertLogoutLinkText();
});

Then(/^user should see home page demoblaze but failed assertion$/, () => {
    homePage.failedAssertLogoutLinkText();
});
