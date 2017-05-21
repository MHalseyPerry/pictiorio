import { observable } from 'mobx';

export default class BrushPotStore {
    brushSizes = [3, 5, 10, 13];
    @observable currentBrushSize = 5;

    get brushCount () {
        return this.brushSizes.length;
    }

    set brushSize (size) {
        if (this.brushSizes.includes(size)) {
            this.currentBrushSize = size;
        } else {
            throw 'Invalid brush size passed to EaselStore!';
        }
    }

    incBrushSize () {
        const currentIndex = this.brushSizes.indexOf(this.currentBrushSize);
        const nextIndex = currentIndex + 1;

        if (nextIndex < this.brushSizes.length) {
            this.currentBrushSize = this.brushSizes[nextIndex];
        }
    }

    decBrushSize () {
        const currentIndex = this.brushSizes.indexOf(this.currentBrushSize);
        const nextIndex = currentIndex - 1;

        if (nextIndex >= 0) {
            this.currentBrushSize = this.brushSizes[nextIndex];
        }
    }
};
