var proto = module.exports = function(options) {
  var opts = options || {}

  function router(req,res,next) {
    router.handle(req,res,next)
  }

  setPrototypeOf(router, proto)

  router.params = {}
  router._params = []
  router.caseSensitive = opts.caseSensitive
  router.mergeParams = opts.mergeParams
  router.strict = opts.strict
  router.stack = []

  return router;
}