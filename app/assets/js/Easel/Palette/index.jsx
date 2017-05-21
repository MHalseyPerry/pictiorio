import React, { Component } from 'react';

import { observer } from 'mobx-react';

@observer
class Palette extends Component {
    render () {
        return (
            <div className="palette">
                {this.getColors()}
            </div>
        );
    }

    getColors () {
        const { store } = this.props;

        console.log(store.currentColor);

        return store.colorMap.map( color => (
            <Color
                key={color.name}
                action={this.handleColorChange.bind(this, color)}
                selected={store.currentColor.name == color.name}
                color={color} />
        ));
    }

    handleColorChange (color) {
        console.log('switchin to ', color);
        const { store } = this.props;
        store.color = color.name;
    }
}

class Color extends Component {
    render () {
        const { color, action, selected } = this.props;

        const reticuleStyle = {
            background: color.hex,
        };

        const classes = [
            'color',
            'selector-circle',
            selected ? 'selected' : '',
        ].join(' ');

        return (
            <div
                className={classes}
                onClick={action}>
                <div
                    className="reticule"
                    style={reticuleStyle} />
            </div>
        )
    }
}

export default Palette;
