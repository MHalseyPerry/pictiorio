import React, { Component } from 'react';

import Palette from './Palette';
import Canvas from './Canvas';
import BrushPot from './BrushPot';
import Audience from './Audience';

import BrushPotStore from '../stores/BrushPotStore.js';
const brushPotStore = new BrushPotStore();

import PaletteStore from '../stores/PaletteStore.js';
const paletteStore = new PaletteStore();

import UserStore from '../stores/UserStore.js';
const userStore = new UserStore();

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
                <Audience store={userStore} />
            </div>
        );
    }
}

export default Easel;
