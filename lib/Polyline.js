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

var Polyline = (function (_MapComponent) {
    _inherits(Polyline, _MapComponent);

    function Polyline() {
        _classCallCheck(this, Polyline);

        _get(Object.getPrototypeOf(Polyline.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(Polyline, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = _gisMaps2['default'].polyline(this.props.points, this.props.style);

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
            this.updatePoints(prevProps);
            this.updateLabel(prevProps);
            this.updateStyle(prevProps);
            this.updateEvents(this.state.dgElement);
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: _propTypes2['default'].object,
            points: _propTypes2['default'].array,
            label: _propTypes2['default'].string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            style: null
        },
        enumerable: true
    }]);

    return Polyline;
})(_MapComponent3['default']);

exports['default'] = Polyline;
module.exports = exports['default'];