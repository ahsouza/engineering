var methods = require('methods')
var slice = Array.prototype.slice
var api = exports = module.exports = {}

// -------------------------------------------------------------------------------------
api.init = function() {
  this.cache = {}
  this.engines = {}
  this.settings = {}
  //for holding the application router
  this._router = undefined;
}
// -------------------------------------------------------------------------------------
// Returns all HTTP methods in lowercase.
// 'get','post','put','head','delete','options','trace','copy','lock','mkcol','purge',
// 'propfind','proppatch','unlock','report','mkactivity','merge','m-search','move',
// 'subscribe','unsubscribe','patch','search','connect','notify','checkout',
methods.forEach(function (method){
  api[method] = function(path) {
    this.lazyrouter()
    var route = this._router.route(path)
    route[method].apply(route, slice.call(arguments, 1))
    return this;
  }
})
// -------------------------------------------------------------------------------------
// Iterating the available methods and creating the functions in an API
api.lazyrouter = function lazyrouter() {
  if(!this._router) {
    this._router = new Router({})
  }
}
// -------------------------------------------------------------------------------------
var route = this._router.route(path)

route[method].apply(route, slice.call(arguments, 1))
return this;
