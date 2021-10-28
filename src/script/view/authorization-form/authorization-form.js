import { render, remove } from "../../common/render";
import { RenderPosition, AuthState } from "../../common/const";
import AbstractComponent from "../abstract/abstract-component";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import RestorePassword from "./restore";
import RestorePasswordConfirm from "./restore-confirm";

const createAuthorizationFormContainerMarkup = () => {
    return (
        `<section class="feedback">
            <div class="feedback-container">
            </div>
        </section>`
    )
}

export default class AuthorizationFormContainer extends AbstractComponent {
    constructor() {
        super();

        this._activeAuthStateComponent = null;
        this.renderActiveAuthState = this.renderActiveAuthState.bind(this);
    }

    getTemplate() {
        return createAuthorizationFormContainerMarkup();
    }

    renderActiveAuthState(authState) {
        if (this._activeAuthStateComponent) {
            remove(this._activeAuthStateComponent);
        }

        switch (authState) {
            case AuthState.SIGN_IN:
                this._signInComponent = new SignIn(this._onChangeActiveAuthState);
                this._activeAuthStateComponent = this._signInComponent;
                render(this.getElement(), this._signInComponent, RenderPosition.BEFOREEND)
                break;
            case AuthState.SIGN_UP:
                this._signUpComponent = new SignUp(this._onChangeActiveAuthState);
                this._activeAuthStateComponent = this._signUpComponent;
                render(this.getElement(), this._signUpComponent, RenderPosition.BEFOREEND);
                break;
            case AuthState.RESTORE:
                this._restoreComponent = new RestorePassword(this._onChangeActiveAuthState);
                this._activeAuthStateComponent = this._restoreComponent;
                render(this.getElement(), this._restoreComponent, RenderPosition.BEFOREEND);
                break;
            case AuthState.RESTORE_CONFIRM:
                this._restoreConfirmComponent = new RestorePasswordConfirm(this._onChangeActiveAuthState);
                this._activeAuthStateComponent = this._restoreConfirmComponent;
                render(this.getElement(), this._restoreConfirmComponent, RenderPosition.BEFOREEND);
                break;
        }
    }

    setOnChangeActiveAuthStateHandler(handler) {
        this._onChangeActiveAuthState = handler;
    }
}