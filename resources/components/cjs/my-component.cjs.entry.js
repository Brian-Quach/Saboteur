'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8a31e8c5.js');

const myComponentCss = ".tomat{color:tomato}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The first name
         */
        this.count = 'first';
    }
    render() {
        return index.h("div", null, "Your ", index.h("span", { class: "tomat" }, `{ ${this.count} }`), " Stencil component!");
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
