"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
    handlers[_key] = arguments[_key];
  }

  return function (err) {
    var res = err;

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
  };
};