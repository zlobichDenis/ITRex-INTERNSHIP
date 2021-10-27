import AuthorizationFormContainer from "./script/view/authorization-form/authorization-form";
import AuthorizationFormController from "./script/controllers/authorization-form-controller";
import { ActiveScreen, AuthState } from "./script/common/const";
import AuthorizationFormModel from "./script/model/authorization-form-model";


const rootContainer = document.getElementById('root');

const authorizationFormView = new AuthorizationFormContainer();
const authorizationFormModel = new AuthorizationFormModel();
const authorizationFormController = new AuthorizationFormController(authorizationFormModel, authorizationFormView);
authorizationFormModel._setActiveAuthState(AuthState.SIGN_UP);


const renderActiveScreen = (activeScreen = ActiveScreen.AUTH) => {
    switch (activeScreen) {
        case ActiveScreen.AUTH:
        authorizationFormController.render(rootContainer);
    }
};

renderActiveScreen();


