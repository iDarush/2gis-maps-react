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

var GeoJSON = (function (_MapComponent) {
    _inherits(GeoJSON, _MapComponent);

    function GeoJSON() {
        _classCallCheck(this, GeoJSON);

        _get(Object.getPrototypeOf(GeoJSON.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null
        };
    }

    _createClass(GeoJSON, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderGeoJSON();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.checkPropsChange(['data', 'style', 'pointToLayer', 'onEachFeature', 'onEachFeature'], prevProps)) {
                this.renderGeoJSON();
            }
        }
    }, {
        key: 'renderGeoJSON',
        value: function renderGeoJSON() {
            var options = {
                style: this.props.style,
                pointToLayer: this.props.pointToLayer,
                onEachFeature: this.props.onEachFeature,
                filter: this.props.filter
            };

            if (this.state.dgElement) {
                this.state.dgElement.remove();
            }

            var dgElement = _gisMaps2['default'].geoJson(this.props.data, options);
            this.props.element.addLayer(dgElement);

            this.setState({
                dgElement: dgElement
            });
        }
    }], [{
        key: 'propsTypes',
        value: {
            data: _propTypes2['default'].object,
            style: _propTypes2['default'].object,
            pointToLayer: _propTypes2['default'].func,
            onEachFeature: _propTypes2['default'].func,
            filter: _propTypes2['default'].func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            style: null,
            pointToLayer: null,
            onEachFeature: null,
            filter: null
        },
        enumerable: true
    }]);

    return GeoJSON;
})(_MapComponent3['default']);

exports['default'] = GeoJSON;
module.exports = exports['default'];