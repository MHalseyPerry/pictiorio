import { observable } from 'mobx';

export default class PaletteStore {
    colors = {
        black: '#000000',
        white: '#ffffff',
        red: '#ff0000',
        green: '#00ff00',
        blue: '#0000ff',
        yellow: '#ffff00',
    };
    @observable selectedColor = 'black';

    get colorMap () {
        return Object.keys(this.colors).map(this.colorAsObj.bind(this));
    }

    get currentColor () {
        return this.colorAsObj(this.selectedColor);
    }

    set color (color) {
        this.selectedColor = color;
    }

    colorAsObj (key) {
        return {
            name: key,
            hex: this.colors[key],
        };
    }
}
