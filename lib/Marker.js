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

var Marker = (function (_MapComponent) {
    _inherits(Marker, _MapComponent);

    function Marker() {
        var _this = this;

        _classCallCheck(this, Marker);

        _get(Object.getPrototypeOf(Marker.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: [],
            pos: this.props.pos || null
        };

        this.dragging = function (e) {
            _this.setState({
                dgElement: _this.state.dgElement,
                childrenForRender: _this.state.childrenForRender,
                pos: e.latlng
            });
        };
    }

    _createClass(Marker, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var dgElement = _gisMaps2['default'].marker(this.props.pos, {
                draggable: this.props.draggable,
                clickable: this.props.clickable
            });

            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }

            this.setState({
                dgElement: dgElement
            }, function () {
                // For dragging Marker.
                if (_this2.props.draggable) {
                    _this2.draggingSwitchTo(true);
                }
            });

            this.bindEvents(dgElement);

            // todo: fix it after fix https://github.com/2gis/mapsapi/issues/332
            if (this.props.staticLabel) {
                this.props.element.addLayer(dgElement);

                dgElement.bindLabel(this.props.staticLabel, { 'static': true });
            } else {
                this.props.element.addLayer(dgElement);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var dgElement = this.state.dgElement;

            this.updatePos(prevProps);

            this.updateLabel(prevProps);

            // Update static label.
            if (this.checkPropsChange('staticLabel', prevProps)) {
                dgElement.bindLabel(this.props.staticLabel, { 'static': true });
            }

            // Update draggable.
            if (this.checkPropsChange('draggable', prevProps)) {
                this.draggingSwitchTo(this.props.draggable);
            }

            this.updateEvents(dgElement, prevProps);
        }
    }, {
        key: 'draggingSwitchTo',
        value: function draggingSwitchTo(isEnable) {
            var dgElement = this.state.dgElement;

            if (isEnable) {
                dgElement.on('drag', this.dragging);
                dgElement.dragging.enable();
            } else {
                dgElement.off('drag', this.dragging);
                dgElement.dragging.disable();
                dgElement.setLatLng(this.state.pos);
            }
        }
    }], [{
        key: 'propsTypes',
        value: {
            pos: _propTypes2['default'].array,
            label: _propTypes2['default'].string,
            staticLabel: _propTypes2['default'].string,
            draggable: _propTypes2['default'].bool,
            clickable: _propTypes2['default'].bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            draggable: false,
            clickable: true,
            label: false,
            staticLabel: false
        },
        enumerable: true
    }]);

    return Marker;
})(_MapComponent3['default']);

exports['default'] = Marker;
module.exports = exports['default'];