const { BeforeAll, AfterAll, BeforeEach } = require("cucumber");
const { client } = require("nightwatch-api");

BeforeAll(() => {
  client.windowMaximize();
  client.url(client.globals.launch_url);
  return client;
});

AfterAll(() => {
  client.closeWindow();
  return client
});
