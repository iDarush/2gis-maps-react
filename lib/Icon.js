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

var _gisMaps = require('2gis-maps');

var _gisMaps2 = _interopRequireDefault(_gisMaps);

var _MapComponent2 = require('./MapComponent');

var _MapComponent3 = _interopRequireDefault(_MapComponent2);

var Icon = (function (_MapComponent) {
    _inherits(Icon, _MapComponent);

    function Icon() {
        _classCallCheck(this, Icon);

        _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setIcon();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevProps.iconUrl != this.props.iconUrl || prevProps.iconSize != this.props.iconSize) {
                this.setIcon();
            }
            this.props.element._bringToFront();
        }
    }, {
        key: 'setIcon',
        value: function setIcon() {
            this.props.element.setIcon(_gisMaps2['default'].icon({
                iconUrl: this.props.iconUrl,
                iconSize: this.props.iconSize
            }));
        }
    }], [{
        key: 'propsTypes',
        value: {
            iconUrl: _propTypes2['default'].string,
            iconSize: _propTypes2['default'].array
        },
        enumerable: true
    }]);

    return Icon;
})(_MapComponent3['default']);

exports['default'] = Icon;
module.exports = exports['default'];