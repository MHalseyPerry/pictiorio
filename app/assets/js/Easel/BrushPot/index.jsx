import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer
class BrushPot extends Component {
    render () {
        return (
            <div className="brushpot">
                {this.renderBrushes()}
            </div>
        );
    }

    renderBrushes () {
        const { store } = this.props;

        return store.brushSizes.map( size => (
            <Brush
                key={size}
                action={this.handleBrushChange.bind(this, size)}
                selected={store.currentBrushSize == size}
                size={size} />
        ));
    }

    handleBrushChange (size) {
        const { store } = this.props;
        store.brushSize = size;
    }
}

class Brush extends Component {
    render () {
        const { size, action, selected } = this.props;
        const style = {
            width: `${size}px`,
            height: `${size}px`,
        };

        const classes = [
            'brush',
            'selector-circle',
            selected ? 'selected' : '',
        ].join(' ');

        return (
            <div
                className={classes}
                onClick={action}>
                <div
                    className="reticule"
                    style={style} />
            </div>
        );
    }
}

export default BrushPot;
