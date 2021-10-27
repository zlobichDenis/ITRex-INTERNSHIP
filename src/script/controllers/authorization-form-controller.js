import { render } from "../common/render";
import { RenderPosition } from "../common/const";


export default class AuthorizationFormController {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._container = null;
        this._activeAuthState = null;

        this.onChangeActiveAuthState = this.onChangeActiveAuthState.bind(this);
        this._renderActiveAuthStateComponent = this._renderActiveAuthStateComponent.bind(this);

        this._model._setAuthStateChangeHandler(this._renderActiveAuthStateComponent);
    }  

    render(container) {
        this._container = container;
        this._activeAuthState = this._model._getActiveAuthState();
        this._initRouting(this._activeAuthState);

        render(container, this._view, RenderPosition.BEFOREEND);

        this._view._setOnChangeActiveAuthStateHandler(this.onChangeActiveAuthState);
        this._view._renderActiveAuthState(this._activeAuthState);
    }

    _renderActiveAuthStateComponent() {
        this._activeAuthState = this._model._getActiveAuthState();
        this._view._renderActiveAuthState(this._activeAuthState);
    }

    _setActiveAuthStateComponent(authState) {
        this._model._setActiveAuthState(authState);
    }

    onChangeActiveAuthState(authState) {
        history.pushState({activeState: authState}, `${authState}-page`, `${authState}`);
        console.log(history)
        // this._model._setActiveAuthState(authState);
    }

    _initRouting(authState) {
        history.pushState({activeState: authState}, `${authState}-page`, `${authState}`);
        window.addEventListener('popstate', () => {
            this._model._setActiveAuthState(location.pathname);
        })
    }
}