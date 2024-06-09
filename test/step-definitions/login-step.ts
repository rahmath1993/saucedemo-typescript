import { When } from '@wdio/cucumber-framework';
import { loginSuccess } from '../support/behavior/login-action';

When('I success login on the website application', async (table) => {
    await browser.pause(1000);
    await loginSuccess(table);
});
