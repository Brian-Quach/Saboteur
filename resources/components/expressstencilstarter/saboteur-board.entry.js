import { r as registerInstance, h } from './index-bd5dc31c.js';

const saboteurBoardCss = "";

const SaboteurBoard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The first name
         */
        this.count = 'first';
    }
    render() {
        return h("div", null, "Your ", h("span", { class: "tomat" }, `{ ${this.count} }`), " Stencil component!");
    }
};
SaboteurBoard.style = saboteurBoardCss;

export { SaboteurBoard as saboteur_board };
