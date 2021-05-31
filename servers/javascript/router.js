// The prototype of our router for the prototype
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

proto.route = function route(path) {
  var route = new Route(path)
  var layer = new Layer(path,{},route.dispatch.bind(route))

  layer.route = route;
  this.stack.push(layer)

  return route;
}