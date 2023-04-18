const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');
const carbPage = client.page.carbpage();

Given("I am on carbohydrate calculator page", function () {
    return client
        .waitForElementVisible('body', 1000)
        .assert.title("Carbohydrate Calculator");
  });

When("I enter {string} in age", function (age) {
    return carbPage.enter_age(age)
});

When("I select gender {string}", function (gender) {
    return carbPage.select_male(gender)
});

When("I enter {string} in height", function (height) {
    return carbPage.enter_height(height)
});

When("I enter {string} in weight", function (weight) {
    return carbPage.enter_weight(weight)
});

When("I select {string} exercise", function (activity_type) {
    return carbPage.select_activity(activity_type)
});

When("I click {string}", function (button) {
    return carbPage.click_button(button)
});

Then("I see {string}", function (result) {
    if (result == 'results') {
        return carbPage.check_results_visible()
    }
    if (result == 'error message') {
        return carbPage.check_error_message_visible()
    }
});