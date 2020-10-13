import { Component, Prop, h } from '@stencil/core';
export class MyComponent {
    constructor() {
        /**
         * The first name
         */
        this.count = 'first';
    }
    render() {
        return h("div", null,
            "Your ",
            h("span", { class: "tomat" }, `{ ${this.count} }`),
            " Stencil component!");
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "count": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The first name"
            },
            "attribute": "count",
            "reflect": false,
            "defaultValue": "'first'"
        }
    }; }
}
