import React, { Component } from 'react';

import Palette from './Palette';
import Canvas from './Canvas';
import BrushPot from './BrushPot';

import BrushPotStore from '../stores/BrushPotStore.js';
const brushPotStore = new BrushPotStore();

import PaletteStore from '../stores/PaletteStore.js';
const paletteStore = new PaletteStore();

class Easel extends Component {
    render () {
        return (
            <div className="easel">
                <Palette store={paletteStore} />
                <Canvas stores={{
                    paletteStore,
                    brushPotStore
                }} />
                <BrushPot store={brushPotStore} />
            </div>
        );
    }
}

export default Easel;
