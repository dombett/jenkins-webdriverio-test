import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^I am testing$/, async () => {
    await console.log('We are testing')
})

When(/^I perform the test$/, async () => {
    await console.log('The test is being performed')
})

Then(/^I should see (\w+)$/, async (status) => {
    let expected;
    if (status="success") {
        expected = true
    } else {
        expected = false
    }
    await expect(expected).toBe(true)
})
