import { r as registerInstance, h } from './index-3a09ee9d.js';

const myComponentCss = ".tomat{color:tomato}";

const MyComponent = class {
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
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
