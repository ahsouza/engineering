var methods = require('methods')
var slice = Array.prototype.slice
var api = exports = module.exports = {}

api.init = function() {
  this.cache = {}
  this.engines = {}
  this.settings = {}
  //for holding the application router
  this._router = undefined;
}

methods.forEach(function (method){
  api[method] = function(path) {
    this.lazyrouter()
    var route = this._router.route(path)

    route[method].apply(route, slice.call(arguments, 1))
    return this;
  }
})

api.lazyrouter = function lazyrouter() {
  if(!this._router) {
    this._router = new Router({})
  }
}

var route = this._router.route(path)

route[method].apply(route, slice.call(arguments, 1))
return this;