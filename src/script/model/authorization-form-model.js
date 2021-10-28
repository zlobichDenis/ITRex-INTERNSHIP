import { AuthState } from "../common/const";

export default class AuthorizationFormModel {
    constructor() {

        this._activeAuthStateChangeHandlers = [];

        this._activeAuthState = null;
    }

    getActiveAuthState() {
        return this._activeAuthState;
    }

    setActiveAuthState(authState) {
        this._activeAuthState = authState;
        this._callHandlers(this._activeAuthStateChangeHandlers);
    }


    _callHandlers(handlers) {
        handlers.forEach((handler) => handler());
    }

    setAuthStateChangeHandler(handler) {
        this._activeAuthStateChangeHandlers.push(handler);
    }
}