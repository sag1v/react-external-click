import React from "react";
import propTypes from 'prop-types';

class ExternalClick extends React.Component {

    static propTypes = {
        render: propTypes.func.isRequired
    }

    state = {
        clickedOutside: false
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = e => {
        const clickedOutside = this.ref && this.ref.contains && !this.ref.contains(e.target);
        this.setState({ clickedOutside });
    }

    attachRef = node => {
        this.ref = node;
    }

    render() {
        const { children, render } = this.props;
        const { clickedOutside } = this.state;
        const renderingFunc = render || children || function () { return <div></div> };
        const Child = renderingFunc(clickedOutside);
        const WithRef = React.cloneElement(Child, {
            ref: this.attachRef
        });
        return typeof WithRef.type === 'string' ? WithRef : <div ref={this.attachRef}>{Child}</div>;
    }
}

export default ExternalClick;