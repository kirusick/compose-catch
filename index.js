"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeHandlers;
function composeHandlers(err) {
  var res = err;

  for (var _len = arguments.length, handlers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handlers[_key - 1] = arguments[_key];
  }

  handlers.some(function (handler) {
    try {
      res = handler(res);
      return true;
    } catch (e) {
      res = e;
      return false;
    }
  });

  return res;
}