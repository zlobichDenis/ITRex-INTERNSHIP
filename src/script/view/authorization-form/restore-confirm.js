import AbstractComponent from "../abstract/abstract-component";

const createRestorePasswordConfirmMarkup = () => {
    return (
        `<div class="feedback-wrapper feedback-wrapper_restore-password feedback-wrapper_restore-confirm">
            <form class="feedback-form">
                <div class="feedback-restore-password">
                    <a class="feedback-restore__btn" href="#">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499951 7.80005L6.19995 13.4C6.59995 13.8 7.19995 13.8 7.59995 13.4C7.99995 13 7.99995 12.4 7.59995 12L2.69995 7.00005L7.59995 2.00005C7.99995 1.60005 7.99995 1.00005 7.59995 0.600049C7.39995 0.400049 7.19995 0.300049 6.89995 0.300049C6.59995 0.300049 6.39995 0.400049 6.19995 0.600049L0.499951 6.20005C0.0999512 6.70005 0.0999512 7.30005 0.499951 7.80005C0.499951 7.70005 0.499951 7.70005 0.499951 7.80005Z" fill="#A1ABC9"/>
                        </svg>
                    </a>
                    <span>Restore password</span>
                </div>
                <div class="feedback-message feedback-message_restore">
                    <p class="feedback-message__item">
                        An email has been sent to <span class="feedback-message__email">example@exam.com</span>. Check your inbox, and click the reset link provided.
                    </p>
                </div>
            </form>
        </div>`
    )
}

export default class RestorePasswordConfirm extends AbstractComponent {
    constructor() {
        super();

        this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

        this._subsribeOnEvents();
    }

    getTemplate() {
        return createRestorePasswordConfirmMarkup();
    }

    _subsribeOnEvents() {
        const element = this.getElement();
        this._onChangeActiveAuthState(element);
    }

    _onChangeActiveAuthState(element) {
        element.querySelector('.feedback-restore__btn').addEventListener('click', () => this._onChangeActiveAuthStateHandler(AuthState.SIGN_IN));
    }
}