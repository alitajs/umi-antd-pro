var format = function(mockData) {
    return delay(mockData, 0);
  };
  
  var delay = function(proxy, timer) {
    var mockApi = {};
    Object.keys(proxy).forEach(function(key) {
      var result = proxy[key].$body || proxy[key];
      if (
        Object.prototype.toString.call(result) === "[object String]" &&
        /^http/.test(result)
      ) {
        mockApi[key] = proxy[key];
      } else {
        mockApi[key] = function(req, res) {
          var foo;
          if (Object.prototype.toString.call(result) === "[object Function]") {
            foo = result;
          } else {
            foo = function(req, res) {
              res.json(result);
            };
          }
  
          setTimeout(function() {
            foo(req, res);
          }, timer);
        };
      }
    });
    mockApi.__mockData = proxy;
    return mockApi;
  };
  
  module.exports.delay = delay;
  module.exports.format = format;
  