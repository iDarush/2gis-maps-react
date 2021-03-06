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

var Popup = (function (_MapComponent) {
    _inherits(Popup, _MapComponent);

    function Popup() {
        _classCallCheck(this, Popup);

        _get(Object.getPrototypeOf(Popup.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Popup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var popupHtml = this.renderChildren();

            var element = this.props.element;

            var dgElement = null;

            // Popup options.
            var _props = this.props;
            var maxWidth = _props.maxWidth;
            var minWidth = _props.minWidth;
            var maxHeight = _props.maxHeight;
            var sprawling = _props.sprawling;
            var className = _props.className;

            var options = {
                maxWidth: maxWidth, minWidth: minWidth, maxHeight: maxHeight, sprawling: sprawling, className: className
            };

            if (this.insideMap()) {
                dgElement = _gisMaps2['default'].popup(options).setLatLng(this.props.pos).setContent(popupHtml).openOn(element);
            } else {
                if (element.getPopup()) {
                    element.setPopupContent(popupHtml);
                } else {
                    element.bindPopup(popupHtml, options);
                }

                dgElement = element.getPopup();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var element = this.props.element;

            if (prevProps.children != this.props.children) {
                var popupHtml = this.renderChildren();

                if (this.insideMap()) {
                    element.getPopup().setContent(popupHtml);
                } else {
                    element.setPopupContent(popupHtml);
                }
            }

            this.updatePos(prevProps);

            if (element.getPopup) {
                this.updateEvents(element.getPopup());
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.element.unbindPopup();
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            return _reactDomServer2['default'].renderToString(_react2['default'].createElement(
                'div',
                { style: {
                        padding: 0,
                        margin: 0,
                        display: 'inline'
                    } },
                this.props.children
            ));
        }
    }], [{
        key: 'propsTypes',
        value: {
            pos: _propTypes2['default'].array,
            maxWidth: _propTypes2['default'].number,
            minWidth: _propTypes2['default'].number,
            maxHeight: _propTypes2['default'].number,
            sprawling: _propTypes2['default'].bool,
            className: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            sprawling: false,
            className: ''
        },
        enumerable: true
    }]);

    return Popup;
})(_MapComponent3['default']);

exports['default'] = Popup;
module.exports = exports['default'];