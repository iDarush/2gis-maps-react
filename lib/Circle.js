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

var Circle = (function (_MapComponent) {
    _inherits(Circle, _MapComponent);

    function Circle() {
        _classCallCheck(this, Circle);

        _get(Object.getPrototypeOf(Circle.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(Circle, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = _gisMaps2['default'].circle(this.props.pos, this.props.radius);

            if (this.props.style) {
                dgElement.setStyle(this.props.style);
            }

            if (this.props.label) {
                dgElement.bindLabel(this.props.label);
            }

            this.setState({
                dgElement: dgElement
            });

            this.bindEvents(dgElement);

            this.props.element.addLayer(dgElement);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var dgElement = this.state.dgElement;

            this.updatePos(prevProps);

            if (this.checkPropsChange('radius', prevProps)) {
                dgElement.setRadius(this.props.radius);
            }

            this.updateLabel(prevProps);

            this.updateStyle(prevProps);

            this.updateEvents(dgElement, prevProps);
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: _propTypes2['default'].object,
            pos: _propTypes2['default'].array,
            radius: _propTypes2['default'].number,
            label: _propTypes2['default'].string
        },
        enumerable: true
    }]);

    return Circle;
})(_MapComponent3['default']);

exports['default'] = Circle;
module.exports = exports['default'];