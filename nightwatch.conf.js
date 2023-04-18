module.exports = {
    src_folders: [],
    page_objects_path: ["page-objects"],
    globals_path: "globals.js",
  
    webdriver: {
      start_process: true,
      port: 9515,
      server_path: require('chromedriver').path,
    },
  
    test_settings: {
      default: {
        desiredCapabilities : {
          browserName : 'chrome',
          chromeOptions: {
            args: [
              "--verbose",
              "--headless",
              "--no-sandbox",
              "--disable-gpu",
              "--lang=en-US",
              "window-size=1920,1080",
            ],
          },
        },
        screenshots: {
            enabled: true,
            path: "screenshots",
          },
          skip_testcases_on_fail: false,
      }
    }
  };