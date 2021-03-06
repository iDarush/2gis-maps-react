'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDomServer = require('react-dom/server');

var _reactDomServer2 = _interopRequireDefault(_reactDomServer);

var _gisMaps = require('2gis-maps');

var _gisMaps2 = _interopRequireDefault(_gisMaps);

var _MapComponent2 = require('./MapComponent');

var _MapComponent3 = _interopRequireDefault(_MapComponent2);

var DivIcon = (function (_MapComponent) {
    _inherits(DivIcon, _MapComponent);

    function DivIcon() {
        _classCallCheck(this, DivIcon);

        _get(Object.getPrototypeOf(DivIcon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DivIcon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var iconHtml = '';
            if (this.props.children) {
                iconHtml = _reactDomServer2['default'].renderToString(_react2['default'].createElement(
                    'div',
                    { style: {
                            padding: 0,
                            margin: 0,
                            display: 'inline'
                        } },
                    this.props.children
                ));
            } else {
                iconHtml = this.props.dangerouslySetInnerHTML;
            }

            var icon = _gisMaps2['default'].divIcon({
                iconSize: this.props.iconSize,
                html: iconHtml
            });

            this.props.element.setIcon(icon);
        }
    }], [{
        key: 'propsTypes',
        value: {
            iconSize: _propTypes2['default'].array,
            dangerouslySetInnerHTML: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            dangerouslySetInnerHTML: ''
        },
        enumerable: true
    }]);

    return DivIcon;
})(_MapComponent3['default']);

exports['default'] = DivIcon;
module.exports = exports['default'];