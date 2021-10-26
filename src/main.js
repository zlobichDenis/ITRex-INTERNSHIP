import AuthorizationFormContainer from "./script/view/authorization-form/authorization-form";
import AuthorizationFormController from "./script/controllers/authorization-form-controller";
import SignUp from "./script/view/authorization-form/sign-up";
import { render } from "./script/common/render";
import { RenderPosition, ActiveScreen } from "./script/common/const";
import AuthorizationFormModel from "./script/model/authorization-form-model";


const rootContainer = document.getElementById('root');

const authorizationFormView = new AuthorizationFormContainer();
const authorizationFormModel = new AuthorizationFormModel(authorizationFormView);
const authorizationFormController = new AuthorizationFormController(authorizationFormModel, authorizationFormView);



const renderActiveScreen = (activeScreen = ActiveScreen.AUTH) => {
    switch (activeScreen) {
        case ActiveScreen.AUTH:
        authorizationFormController.render(rootContainer);
    }
};

renderActiveScreen();


