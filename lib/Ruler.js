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

var Ruler = (function (_MapComponent) {
    _inherits(Ruler, _MapComponent);

    function Ruler() {
        _classCallCheck(this, Ruler);

        _get(Object.getPrototypeOf(Ruler.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(Ruler, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dgElement = _gisMaps2['default'].ruler(this.props.points);
            this.props.element.addLayer(dgElement);
            this.setState({
                dgElement: dgElement
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            this.updatePoints(prevProps);
        }
    }], [{
        key: 'propsTypes',
        value: {
            points: _propTypes2['default'].array
        },
        enumerable: true
    }]);

    return Ruler;
})(_MapComponent3['default']);

exports['default'] = Ruler;
module.exports = exports['default'];