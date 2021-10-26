import { AuthState } from "../../common/const";
import AbstractComponent from "../abstract/abstract-component";

const createSignInMarkup = () => {
    return (
        `<div class="feedback-wrapper feedback-wrapper_sign-in">
            <form class="feedback-form">
                <p class="feedback-form__title">Sign In</p>
                <div class="feedback-field">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z" fill="#A1ABC9"/>
                    </svg>                                
                    <input class="feedback-field__input" type="email" placeholder="Email" name="email">
                </div>
                <div class="feedback-field">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z" fill="#A1ABC9"/>
                    </svg>                                
                    <input class="feedback-field__input" type="password" placeholder="Password" name="pass">
                    <button class="feedback-field__btn">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93994 5.08C10.2907 5.02624 10.6451 4.99949 10.9999 5C14.1799 5 17.1699 7.29 18.9099 11C18.6438 11.5646 18.3433 12.1123 18.0099 12.64C17.9041 12.8038 17.8485 12.995 17.8499 13.19C17.8522 13.4082 17.9257 13.6198 18.0594 13.7923C18.1931 13.9648 18.3795 14.0889 18.5903 14.1455C18.8011 14.2022 19.0246 14.1883 19.2267 14.1061C19.4289 14.0238 19.5986 13.8777 19.7099 13.69C20.1759 12.9579 20.5806 12.1887 20.9199 11.39C20.9736 11.2652 21.0013 11.1308 21.0013 10.995C21.0013 10.8592 20.9736 10.7248 20.9199 10.6C18.8999 5.91 15.0999 3 10.9999 3C10.5306 2.99764 10.062 3.0378 9.59994 3.12C9.46862 3.14233 9.34298 3.1903 9.2302 3.26118C9.11742 3.33206 9.0197 3.42446 8.94263 3.5331C8.86555 3.64175 8.81063 3.76451 8.78101 3.89438C8.75138 4.02425 8.74762 4.15868 8.76994 4.29C8.79227 4.42132 8.84024 4.54696 8.91112 4.65975C8.982 4.77253 9.0744 4.87024 9.18304 4.94732C9.29169 5.02439 9.41445 5.07931 9.54432 5.10894C9.67419 5.13857 9.80862 5.14233 9.93994 5.12V5.08ZM2.70994 1.29C2.6167 1.19676 2.50601 1.1228 2.38419 1.07234C2.26237 1.02188 2.1318 0.995911 1.99994 0.995911C1.86808 0.995911 1.73751 1.02188 1.61569 1.07234C1.49387 1.1228 1.38318 1.19676 1.28994 1.29C1.10164 1.47831 0.99585 1.7337 0.99585 2C0.99585 2.2663 1.10164 2.5217 1.28994 2.71L4.38994 5.8C2.97551 7.16153 1.8498 8.79399 1.07994 10.6C1.02488 10.7262 0.996456 10.8623 0.996456 11C0.996456 11.1377 1.02488 11.2738 1.07994 11.4C3.09994 16.09 6.89994 19 10.9999 19C12.797 18.9876 14.5517 18.4525 16.0499 17.46L19.2899 20.71C19.3829 20.8037 19.4935 20.8781 19.6154 20.9289C19.7372 20.9797 19.8679 21.0058 19.9999 21.0058C20.132 21.0058 20.2627 20.9797 20.3845 20.9289C20.5064 20.8781 20.617 20.8037 20.7099 20.71C20.8037 20.617 20.8781 20.5064 20.9288 20.3846C20.9796 20.2627 21.0057 20.132 21.0057 20C21.0057 19.868 20.9796 19.7373 20.9288 19.6154C20.8781 19.4936 20.8037 19.383 20.7099 19.29L2.70994 1.29ZM9.06994 10.48L11.5199 12.93C11.3509 12.9785 11.1758 13.002 10.9999 13C10.4695 13 9.9608 12.7893 9.58573 12.4142C9.21066 12.0391 8.99994 11.5304 8.99994 11C8.99789 10.8242 9.02147 10.649 9.06994 10.48ZM10.9999 17C7.81994 17 4.82994 14.71 3.09994 11C3.74603 9.57375 4.66301 8.28658 5.79994 7.21L7.56994 9C7.15419 9.7588 6.99568 10.6319 7.1182 11.4885C7.24072 12.345 7.63766 13.1387 8.24947 13.7505C8.86128 14.3623 9.65497 14.7592 10.5115 14.8817C11.368 15.0043 12.2411 14.8458 12.9999 14.43L14.5899 16C13.501 16.6409 12.2634 16.9856 10.9999 17Z" fill="#A1ABC9"/>
                        </svg>     
                    </button>                              
                </div>
                <div class="feedback-message">
                    <p class="feedback-message_text">Password contain unsupported characters</p>
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

        this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;
        this._subsctibeOnEvents();
    }

    getTemplate() {
        return createSignInMarkup();
    }

    _subsctibeOnEvents() {
        const element = this.getElement();

        this._onChangeActiveAuthState(element)
    }

    _onChangeActiveAuthState(element) {
        element.querySelector('.feedback-text__link').addEventListener('click', () =>  this._onChangeActiveAuthStateHandler(AuthState.SIGN_UP));
        element.querySelector('.feedback-buttons__forgot').addEventListener('click', () => this._onChangeActiveAuthStateHandler(AuthState.RESTORE));
    }
}