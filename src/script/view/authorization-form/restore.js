import { AuthState } from "../../common/const";
import AbstractComponent from "../abstract/abstract-component";
import validator from "validator";

const createRestorePasswordMarkup = () => {
    return (
        `<div class="feedback-wrapper feedback-wrapper_restore-password">
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
                    Please use your email address, and we’ll send you the link to reset your password
                </p>
            </div>
            <div class="feedback-field">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="#A1ABC9"/>
                    </svg>                                
                    <input id="feedback-field__input_email" class="feedback-field__input" type="email" placeholder="Email" name="email">
                </div>
                <div class="feedback-message feedback-message_email">
                    <p class="feedback-message_text">Enter the correct email</p>
                </div>
            <div class="feedback-submit">
                <button class="feedback-submit__btn" type="submit">
                    <span>Send Reset Link</span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </form>
    </div>`
    )
};

export default class RestorePassword extends AbstractComponent {
    constructor(onChangeActiveAuthState) {
        super();

        this._isValidEmail = true;

        this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

        this._subscribeOnEvents();
    }

    recoveryListeners() {
        this._subscribeOnEvents();
    }

    getTemplate() {
        return createRestorePasswordMarkup();
    }

    _subscribeOnEvents() {
        const element = this.getElement();
        this._onChangeActiveAuthState(element);
        this._inputsValidation(element);
    }

    _onChangeActiveAuthState(element) {
        element.querySelector('.feedback-restore__btn').addEventListener('click', () => this._onChangeActiveAuthStateHandler(AuthState.SIGN_IN));
    }

    _isShowingAlertMessage(element, isValid, fieldName) {
        if (!isValid) {
            element.querySelector(`.feedback-message_${fieldName}`).classList.add(`feedback-message_show`);
            return;
        }
        element.querySelector(`.feedback-message_${fieldName}`).classList.remove('feedback-message_show');
    }

    _inputsValidation(element) {
        element.querySelector('#feedback-field__input_email').addEventListener('input', (evt) => {
            this._isValidEmail = validator.isEmail(evt.target.value) || validator.isEmpty(evt.target.value);
            this._isShowingAlertMessage(element, this._isValidEmail, 'email');
        });
    }
}