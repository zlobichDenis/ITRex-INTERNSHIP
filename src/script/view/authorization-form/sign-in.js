import { AuthState } from "../../common/const";
import AbstractComponent from "../abstract/abstract-component";
import validator from "validator";

const createSignInMarkup = (emailValue = '', passwordValue = '') => {
    return (
        `<div class="feedback-wrapper feedback-wrapper_sign-in">
            <form class="feedback-form">
                <p class="feedback-form__title">Sign In</p>
                <div class="feedback-field">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="#A1ABC9"/>
                    </svg>                                
                    <input value="${emailValue}" id="feedback-field__input_email" class="feedback-field__input" type="email" placeholder="Email" name="email">
                </div>
                <div class="feedback-message feedback-message_email">
                    <p class="feedback-message_text">Email contain unsupported characters</p>
                </div>
                <div class="feedback-field">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill="#A1ABC9"/>
                    </svg>                                
                    <input class="feedback-field__input feedback-field__input_password" id="feedback-field__input_pass" value="${passwordValue}" type="password" placeholder="Password" name="pass">
                    <div class="feedback-field__icon feedback-field__icon_password"></div> 
                </div> 
                <div class="feedback-message feedback-message_password">
                    <p class="feedback-message_text">Password must contain at least one digit</p>
                </div>
                <div class="feedback-submit">
                    <button class="feedback-submit__btn" type="submit">
                        <span>Sign in</span>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </form>
            <div class="feedback-buttons feedback-buttons_sign-in">
                <a href="#" class="feedback-buttons__forgot">Forgot password?</a>
                <div class="feedback-text">
                    <p class="feedback-text__quest">Don’t have an account?</p>
                    <a class="feedback-text__link" href="#">Sign Up</a>
                </div>
            </div>
        </div>`
    )
};

export default class SignIn extends AbstractComponent {
    constructor(onChangeActiveAuthState) {
        super();

        this._isValidEmail = true;
        this._isValidPass = true;

        this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;
        this._subscribeOnEvents();
    }

    recoveryListeners() {
        this._subscribeOnEvents();
    }

    getTemplate() {
        return createSignInMarkup(this.email, this.password);
    }

    rerender() {
        super.rerender()
    }


    _subscribeOnEvents() {
        const element = this.getElement();

        this._onChangeActiveAuthState(element);
        this._inputsValidation(element);
        this._showHidePasswordToggle(element);
    }

    _onChangeActiveAuthState(element) {
        element.querySelector('.feedback-text__link').addEventListener('click', () =>  this._onChangeActiveAuthStateHandler(AuthState.SIGN_UP));
        element.querySelector('.feedback-buttons__forgot').addEventListener('click', () => this._onChangeActiveAuthStateHandler(AuthState.RESTORE));
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
            this.email = evt.target.value;
            this._isValidEmail = validator.isEmail(evt.target.value) || validator.isEmpty(evt.target.value);
            this._isShowingAlertMessage(element, this._isValidEmail, 'email');
        });

        element.querySelector('#feedback-field__input_pass').addEventListener('input', (evt) => {
            this.password = evt.target.value;
            this._isValidPass = !validator.isAlpha(evt.target.value) || validator.isEmpty(evt.target.value);
            this._isShowingAlertMessage(element, this._isValidPass, 'password');
        });
    }

    _showHidePasswordToggle(element) {
        element.querySelector('.feedback-field__icon_password').addEventListener('click', () => {
            const passInput = element.querySelector('.feedback-field__input_password');
            if (passInput.getAttribute('type') === 'password') {
                element.querySelector('.feedback-field__icon').classList.add('feedback-field__icon_show');
                passInput.setAttribute('type', 'text');
                return;
            }
            element.querySelector('.feedback-field__icon').classList.remove('feedback-field__icon_show');
            passInput.setAttribute('type', 'password');
        })
    }
}