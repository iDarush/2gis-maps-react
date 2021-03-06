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

var Map = (function (_MapComponent) {
    _inherits(Map, _MapComponent);

    function Map() {
        _classCallCheck(this, Map);

        _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            dgElement: null,
            childrenForRender: []
        };
    }

    _createClass(Map, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            var container = this.refs.container;

            // Map options.
            var _props = this.props;
            var zoom = _props.zoom;
            var center = _props.center;
            var geoclicker = _props.geoclicker;
            var projectDetector = _props.projectDetector;
            var zoomControl = _props.zoomControl;
            var fullscreenControl = _props.fullscreenControl;
            var preferCanvas = _props.preferCanvas;
            var touchZoom = _props.touchZoom;
            var scrollWheelZoom = _props.scrollWheelZoom;
            var doubleClickZoom = _props.doubleClickZoom;
            var dragging = _props.dragging;
            var maxBounds = _props.maxBounds;
            var minZoom = _props.minZoom;
            var maxZoom = _props.maxZoom;

            var options = {
                zoom: zoom, center: center, geoclicker: geoclicker, projectDetector: projectDetector, zoomControl: zoomControl, fullscreenControl: fullscreenControl, preferCanvas: preferCanvas, touchZoom: touchZoom,
                scrollWheelZoom: scrollWheelZoom, doubleClickZoom: doubleClickZoom, dragging: dragging, maxBounds: maxBounds, minZoom: minZoom, maxZoom: maxZoom
            };

            // Check exist prop center.
            if (!center) {
                console.error('For initial map You should set prop \'center\'.');
            }

            // Check exist zoom center.
            if (!zoom) {
                console.error('For initial map You should set prop \'zoom\'.');
            }

            // Create Map.
            var dgElement = _gisMaps2['default'].map(container, options);

            if (this.props.onProjectChange) {
                dgElement.on('projectchange', function (e) {
                    return _this.props.onProjectChange(e);
                });
            }

            if (this.props.onProjectLeave) {
                dgElement.on('projectleave', function (e) {
                    return _this.props.onProjectLeave(e);
                });
            }

            this.setState({
                dgElement: dgElement
            });

            this.bindEvents(dgElement);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var dgElement = this.state.dgElement;

            if (this.checkPropsChange('center', prevProps)) {
                dgElement.setView(this.props.center);
            }

            if (this.checkPropsChange('zoom', prevProps)) {
                dgElement.setZoom(this.props.zoom);
            }

            if (this.checkPropsChange('style', prevProps)) {
                dgElement.invalidateSize();
            }

            this.updateEvents(dgElement, prevProps);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { ref: 'container', style: this.props.style },
                _get(Object.getPrototypeOf(Map.prototype), 'render', this).call(this)
            );
        }
    }], [{
        key: 'propsTypes',
        value: {
            style: _propTypes2['default'].object,
            center: _propTypes2['default'].array,
            zoom: _propTypes2['default'].number,
            geoclicker: _propTypes2['default'].bool,
            projectDetector: _propTypes2['default'].bool,
            zoomControl: _propTypes2['default'].bool,
            fullscreenControl: _propTypes2['default'].bool,
            preferCanvas: _propTypes2['default'].bool,
            touchZoom: _propTypes2['default'].bool,
            scrollWheelZoom: _propTypes2['default'].bool,
            doubleClickZoom: _propTypes2['default'].bool,
            dragging: _propTypes2['default'].bool,
            maxBounds: _propTypes2['default'].array,
            minZoom: _propTypes2['default'].number,
            maxZoom: _propTypes2['default'].number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            zoom: false,
            center: false,
            geoclicker: false,
            projectDetector: false,
            zoomControl: true,
            fullscreenControl: true,
            preferCanvas: true,
            touchZoom: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
        },
        enumerable: true
    }]);

    return Map;
})(_MapComponent3['default']);

exports['default'] = Map;
module.exports = exports['default'];