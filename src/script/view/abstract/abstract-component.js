import { createElement } from "../../common/render";

export default class AbstractComponent {
    constructor() {
        if(new.target === AbstractComponent) {
            throw new Error(`Can't instance AbstractComponent, only concrete one.`);
        }
        this._element = null;
    }

    getTemplate() {
        throw new Error ('Abstract method not implemented: getTemplate');
    }

    getElement() {
        if(!this._element) {
            this._element = createElement(this.getTemplate());
        }

        return this._element;
    }

    removeElement() {
        this._element = null;
    }

    rerender() {
        const oldElement = this.getElement();
        const parent = oldElement.parentElement;

        this.removeElement();

        const newElement = this.getElement();

        parent.replaceChild(newElement, oldElement);

        this.recoveryListeners();
    }
}