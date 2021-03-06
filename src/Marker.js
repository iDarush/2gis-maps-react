import React from 'react'
import PropTypes from 'prop-types'
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Marker extends MapComponent {
    static propsTypes = {
        pos: PropTypes.array,
        label: PropTypes.string,
        staticLabel: PropTypes.string,
        draggable: PropTypes.bool,
        clickable: PropTypes.bool
    };

    static defaultProps = {
        draggable: false,
        clickable: true,
        label: false,
        staticLabel: false
    };

    state = {
        dgElement: null,
        childrenForRender: [],
        pos: this.props.pos || null
    };

    componentDidMount() {
        let dgElement = DG.marker(this.props.pos, {
            draggable: this.props.draggable,
            clickable: this.props.clickable
        });

        if (this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        this.setState({
            dgElement: dgElement
        }, () => {
            // For dragging Marker.
            if (this.props.draggable) {
                this.draggingSwitchTo(true);
            }
        });

        this.bindEvents(dgElement);

        // todo: fix it after fix https://github.com/2gis/mapsapi/issues/332
        if (this.props.staticLabel) {
            this.props.element.addLayer(dgElement);

            dgElement.bindLabel(this.props.staticLabel, { 'static': true });
        }
        else {
            this.props.element.addLayer(dgElement);
        }
    }

    componentDidUpdate(prevProps) {
        const { dgElement } = this.state;

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

    dragging = e => {
        this.setState({
            dgElement: this.state.dgElement,
            childrenForRender: this.state.childrenForRender,
            pos: e.latlng
        });
    };

    draggingSwitchTo(isEnable) {
        const { dgElement } = this.state;

        if (isEnable) {
            dgElement.on('drag', this.dragging);
            dgElement.dragging.enable();
        }
        else {
            dgElement.off('drag', this.dragging);
            dgElement.dragging.disable();
            dgElement.setLatLng(this.state.pos);
        }
    }
}
