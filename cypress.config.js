const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":'https://pushing-front.vercel.app/',
    watchForFileChanges:false, //parametro en false, que indica que cada vez que guardemos el test NO se ejecute automaticamente
    defaultCommandTimeout: 10000 //por defecto se le indica que espere por los elementos a 30 segundos
  },
});
