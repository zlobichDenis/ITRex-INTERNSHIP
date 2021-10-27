import { AuthState } from "../common/const";

export default class AuthorizationFormModel {
    constructor() {

        this._activeAuthStateChangeHandlers = [];

        this._activeAuthState = AuthState.SIGN_UP;
    }

    _getActiveAuthState() {
        return this._activeAuthState;
    }

    _setActiveAuthState(authState) {
        this._activeAuthState = authState;
        this._callHandlers(this._activeAuthStateChangeHandlers);
    }


    _callHandlers(handlers) {
        handlers.forEach((handler) => handler());
    }

    _setAuthStateChangeHandler(handler) {
        this._activeAuthStateChangeHandlers.push(handler);
    }
}