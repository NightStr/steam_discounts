module.exports = { contents: "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require('react-dom');\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _app = require('./components/app');\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _rootContainer = require('./containers/rootContainer');\n\nvar _rootContainer2 = _interopRequireDefault(_rootContainer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Root = function Root() {\n    return _react2.default.createElement(\n        _rootContainer2.default,\n        null,\n        _react2.default.createElement(_app2.default, null)\n    );\n};\n_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));",
dependencies: ["react","react-dom","./components/app","./containers/rootContainer"],
sourceMap: {},
headerContent: undefined,
mtime: 1517495548007,
devLibsRequired : undefined,
_ : {}
}
