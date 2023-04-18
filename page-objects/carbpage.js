var carbPageCommands = {
  enter_age: function (age) {
    return this.clearValue("@age_text_field").setValue(
      "@age_text_field",
      age
    );
  },

  enter_height: function (height) {
    return this.clearValue("@height_text_field").setValue(
      "@height_text_field",
      height
    );
  },

  enter_weight: function (weight) {
    return this.clearValue("@weight_text_field").setValue(
      "@weight_text_field",
      weight
    );
  },

  select_activity: function (activity_type) {
    if (activity_type == "light") {
      return this.click('#cactivity option[value="1.375"]')
    }
  },

  select_male: function (gender) {
    if (gender == "male") {
      return this.click("@male_radio_button")
    }
  },

  click_button: function (button) {
    if (button == "calculate") {
      return this.click('@calculate_button')
    }
  },

  check_results_visible: function () {
    return this.waitForElementVisible('xpath', '@result_header', 1000);
  },

  check_error_message_visible: function () {
    return this.waitForElementVisible('xpath', '@error_message', 1000);
  }
};

module.exports = {
  commands: [carbPageCommands],

  elements: {
    age_text_field: {
      selector: "//input[@id='cage']",
      locateStrategy: "xpath",
    },
  
    height_text_field: {
      selector: "//input[@id='cheightmeter']",
      locateStrategy: "xpath",
    },

    weight_text_field: {
      selector: "//input[@id='ckg']",
      locateStrategy: "xpath",
    },

    calculate_button: {
      selector: "//input[@alt='Calculate']",
      locateStrategy: "xpath",
    },

    result_table: {
      selector: "//table[@class='cinfoT']//tbody",
      locateStrategy: "xpath",
    },

    result_header: {
      selector: "//h2[@class='h2result']",
      locateStrategy: "xpath",
    },

    error_message: {
      selector: "//div/font[contains(text(), 'Please provide an age between 18 and 80.')]",
      locateStrategy: "xpath",
    },

    male_radio_button: {
      selector: "//label[@for='csex1']",
      locateStrategy: "xpath",
    }
  }
};
