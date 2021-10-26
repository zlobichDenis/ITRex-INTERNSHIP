import SignIn from "../view/authorization-form/sign-in";
import SignUp from "../view/authorization-form/sign-up";

export default class AuthorizationFormModel {
    constructor(view) {
        this._view = view;
        this.activeAuthState = null;
    }

    _setActiveAuthState(authState) {
        this.activeAuthState = authState;
        this._view._renderActiveAuthState(this.activeAuthState);
    }
}