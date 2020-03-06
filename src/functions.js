const FUNCTIONS = (app) => {
  app.functions = {
    test () {
      return app.params
    }
  }
}

export {FUNCTIONS}