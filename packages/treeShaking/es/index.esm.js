function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Apple =
/*#__PURE__*/
function () {
  function Apple(_ref2) {
    var model = _ref2.model;

    _classCallCheck(this, Apple);

    this.className = 'Apple';
    this.model = model;
  }

  _createClass(Apple, [{
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
  }]);

  return Apple;
}();

var appleModel = new Apple({
  model: 'IphoneX'
}).getModel();
console.log(appleModel);
