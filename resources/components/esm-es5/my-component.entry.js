import { r as registerInstance, h } from './index-3a09ee9d.js';
var myComponentCss = ".tomat{color:tomato}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The first name
         */
        this.count = 'first';
    }
    MyComponent.prototype.render = function () {
        return h("div", null, "Your ", h("span", { class: "tomat" }, "{ " + this.count + " }"), " Stencil component!");
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { MyComponent as my_component };
