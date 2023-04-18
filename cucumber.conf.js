const { setDefaultTimeout, AfterAll, BeforeAll } = require("cucumber");
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
} = require("nightwatch-api");

setDefaultTimeout(100 * 1000);

BeforeAll(async () => {
  await startWebDriver({ env: process.env.NODE_ENV || "default" });
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
});
