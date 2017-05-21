import React, { Component } from 'react';

class Canvas extends Component {
    constructor () {
        super();

        this.state = {
            x: 0, y: 0,
            prevX: 0, prevY: 0,
            flag: false,
            dotFlag: false,
        };

        this.mouseMove = this.findXY.bind(this, 'move');
        this.mouseDown = this.findXY.bind(this, 'down');
        this.mouseUp = this.findXY.bind(this, 'up');
        this.mouseOut = this.findXY.bind(this, 'out');
    }

    componentDidMount () {
        this.context = this.canvas.getContext('2d');
    }

    render () {
        return (
            <canvas
                ref={cnvs => this.canvas = cnvs}
                onMouseMove={this.mouseMove}
                onMouseDown={this.mouseDown}
                onMouseUp={this.mouseUp}
                onMouseOut={this.mouseOut}
                width="300"
                height="300">
                    Your browser doesn't support canvas.
            </canvas>
        );
    }

    draw () {
        const { paletteStore, brushPotStore } = this.props.stores;
        const { x, y, prevX, prevY } = this.state;

        const ctx = this.context;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = paletteStore.currentColor.hex;
        ctx.lineJoin = "round";
        ctx.lineWidth = brushPotStore.currentBrushSize;
        ctx.closePath();
        ctx.stroke();
    }

    findXY (type, e) {
        const state = this.state;
        const cnvs = this.canvas;

        const x = e.clientX - cnvs.offsetLeft;
        const y = e.clientY - cnvs.offsetTop;

        if (type == 'down') {
            this.setState({
                x, y,
                prevX: state.x,
                prevY: state.y,
                flag: true,
                dotFlag: true,
            }, () => {
                const ctx = this.context;
                ctx.beginPath();
                ctx.fillStyle = 'black';
                ctx.fillRect(x, y, 2, 2);
                ctx.closePath();

                this.setState({ dotFlag: false });
            });
        }
        else if (type == 'up' || type == 'out') {
            this.setState({ flag: false });
        }
        else if (type == 'move') {
            if (state.flag) {
                this.setState({
                    x, y,
                    prevX: state.x,
                    prevY: state.y,
                }, this.draw);
            }
        }
    }
}

export default Canvas;
