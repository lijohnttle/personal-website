import React from 'react';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

class Fade extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    handleVisibilityChange(isVisible) {
        if (this.props.once && this.state.isVisible) {
            return;
        }

        this.setState({
            isVisible
        });
    }

    render() {
        return (
            <VisibilitySensor partialVisibility minTopValue={24} onChange={this.handleVisibilityChange}>
                <Spring to={{ opacity: this.state.isVisible ? 1 : 0 }} >
                    {({ opacity }) => <div style={{ opacity }}>{this.props.children}</div>}
                </Spring>
            </VisibilitySensor>
        );
    }
}    

export { Fade };