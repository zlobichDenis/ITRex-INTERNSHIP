import { render } from "../common/render";
import { RenderPosition, AuthState } from "../common/const";


export default class AuthorizationFormController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._container = null;
        this.onChangeActiveAuthState = this.onChangeActiveAuthState.bind(this);
    }  

    render(container) {
        this._container = container;
        render(container, this._view, RenderPosition.BEFOREEND);

        this._view._setOnChangeActiveAuthStateComponent(this.onChangeActiveAuthState);
        this._model._setActiveAuthState(AuthState.SIGN_UP);
    }

    _setActiveAuthStateComponent(authState) {
        this._model._setActiveAuthState(authState);
    }

    onChangeActiveAuthState(authComponent) {
        this._model._setActiveAuthState(authComponent);
    }
}