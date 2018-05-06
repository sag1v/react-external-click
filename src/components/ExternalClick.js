import React from "react";
import { findDOMNode } from 'react-dom'
import propTypes from 'prop-types';
import isRequiredIf from 'react-proptype-conditional-require';

class ExternalClick extends React.Component {

    static propTypes = {
        render: isRequiredIf(propTypes.func, props => !props.children, 'render is required when no children are passed'),
        children: isRequiredIf(propTypes.func, props => !props.render, 'children are required when the render prop is not passed'),
    }

    state = {
        clickedOutside: false
    }

    componentDidMount() {
        this.ref = findDOMNode(this);
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = e => {
        if (this.ref && this.ref.contains) {
            const clickedOutside = !this.ref.contains(e.target);
            this.setState({ clickedOutside });
        }

    }

    render() {
        const { children, render } = this.props;
        const { clickedOutside } = this.state;
        const renderingFunc = render || children;
        
        if (typeof renderingFunc === 'function') {
            return renderingFunc(clickedOutside);
        } else {
            return null
        }
    }
}

export default ExternalClick;