/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script/common/const.js":
/*!************************************!*\
  !*** ./src/script/common/const.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "ActiveScreen": () => (/* binding */ ActiveScreen),
/* harmony export */   "AuthState": () => (/* binding */ AuthState)
/* harmony export */ });
var RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend'
};
var ActiveScreen = {
  AUTH: 'AUTH',
  DOCTOR_VIEW: 'DOCTOR_VIEW'
};
var AuthState = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  RESTORE: 'RESTORE',
  RESTORE_CONFIRM: 'RESTORE_CONFIRM'
};

/***/ }),

/***/ "./src/script/common/render.js":
/*!*************************************!*\
  !*** ./src/script/common/render.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/script/common/const.js");

var createElement = function createElement(template) {
  var newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
var render = function render(container, component, place) {
  switch (place) {
    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;

    case _const__WEBPACK_IMPORTED_MODULE_0__.RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};
var replace = function replace(newComponent, oldComponent) {
  var parentElement = oldComponent.getElement().parentElement;
  var newElement = newComponent.getElement();
  var oldElement = oldComponent.getElement();
  var isExistElement = parentElement && newElement && oldElement;

  if (isExistElement && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};
var remove = function remove(component) {
  component.getElement().remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/script/controllers/authorization-form-controller.js":
/*!*****************************************************************!*\
  !*** ./src/script/controllers/authorization-form-controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorizationFormController)
/* harmony export */ });
/* harmony import */ var _common_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/render */ "./src/script/common/render.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/const */ "./src/script/common/const.js");
/* harmony import */ var _view_authorization_form_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/authorization-form/sign-up */ "./src/script/view/authorization-form/sign-up.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var AuthorizationFormController = /*#__PURE__*/function () {
  function AuthorizationFormController(model, view) {
    _classCallCheck(this, AuthorizationFormController);

    this._model = model;
    this._view = view;
    this._container = null;
    this.onChangeActiveAuthState = this.onChangeActiveAuthState.bind(this);
  }

  _createClass(AuthorizationFormController, [{
    key: "render",
    value: function render(container) {
      this._container = container;

      (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.render)(container, this._view, _common_const__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);

      this._view._setOnChangeActiveAuthStateComponent(this.onChangeActiveAuthState);

      this._model._setActiveAuthState(_common_const__WEBPACK_IMPORTED_MODULE_1__.AuthState.SIGN_UP);
    }
  }, {
    key: "_setActiveAuthStateComponent",
    value: function _setActiveAuthStateComponent(authState) {
      this._model._setActiveAuthState(authState);
    }
  }, {
    key: "onChangeActiveAuthState",
    value: function onChangeActiveAuthState(authComponent) {
      this._model._setActiveAuthState(authComponent);
    }
  }]);

  return AuthorizationFormController;
}();



/***/ }),

/***/ "./src/script/model/authorization-form-model.js":
/*!******************************************************!*\
  !*** ./src/script/model/authorization-form-model.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorizationFormModel)
/* harmony export */ });
/* harmony import */ var _view_authorization_form_sign_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/authorization-form/sign-in */ "./src/script/view/authorization-form/sign-in.js");
/* harmony import */ var _view_authorization_form_sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/authorization-form/sign-up */ "./src/script/view/authorization-form/sign-up.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var AuthorizationFormModel = /*#__PURE__*/function () {
  function AuthorizationFormModel(view) {
    _classCallCheck(this, AuthorizationFormModel);

    this._view = view;
    this.activeAuthState = null;
  }

  _createClass(AuthorizationFormModel, [{
    key: "_setActiveAuthState",
    value: function _setActiveAuthState(authState) {
      this.activeAuthState = authState;

      this._view._renderActiveAuthState(this.activeAuthState);
    }
  }]);

  return AuthorizationFormModel;
}();



/***/ }),

/***/ "./src/script/view/abstract/abstract-component.js":
/*!********************************************************!*\
  !*** ./src/script/view/abstract/abstract-component.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractComponent)
/* harmony export */ });
/* harmony import */ var _common_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/render */ "./src/script/common/render.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var AbstractComponent = /*#__PURE__*/function () {
  function AbstractComponent() {
    _classCallCheck(this, AbstractComponent);

    if ((this instanceof AbstractComponent ? this.constructor : void 0) === AbstractComponent) {
      throw new Error("Can't instance AbstractComponent, only concrete one.");
    }

    this._element = null;
  }

  _createClass(AbstractComponent, [{
    key: "getTemplate",
    value: function getTemplate() {
      throw new Error('Abstract method not implemented: getTemplate');
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (!this._element) {
        this._element = (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
      }

      return this._element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this._element = null;
    }
  }]);

  return AbstractComponent;
}();



/***/ }),

/***/ "./src/script/view/authorization-form/authorization-form.js":
/*!******************************************************************!*\
  !*** ./src/script/view/authorization-form/authorization-form.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthorizationFormContainer)
/* harmony export */ });
/* harmony import */ var _common_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/render */ "./src/script/common/render.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/const */ "./src/script/common/const.js");
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract/abstract-component */ "./src/script/view/abstract/abstract-component.js");
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in */ "./src/script/view/authorization-form/sign-in.js");
/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up */ "./src/script/view/authorization-form/sign-up.js");
/* harmony import */ var _restore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restore */ "./src/script/view/authorization-form/restore.js");
/* harmony import */ var _restore_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restore-confirm */ "./src/script/view/authorization-form/restore-confirm.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var createAuthorizationFormContainerMarkup = function createAuthorizationFormContainerMarkup() {
  return "<section class=\"feedback\">\n            <div class=\"feedback-container\">\n            </div>\n        </section>";
};

var AuthorizationFormContainer = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(AuthorizationFormContainer, _AbstractComponent);

  var _super = _createSuper(AuthorizationFormContainer);

  function AuthorizationFormContainer() {
    var _this;

    _classCallCheck(this, AuthorizationFormContainer);

    _this = _super.call(this);
    _this._activeAuthStateComponent = null;
    _this._renderActiveAuthState = _this._renderActiveAuthState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AuthorizationFormContainer, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createAuthorizationFormContainerMarkup();
    }
  }, {
    key: "_renderActiveAuthState",
    value: function _renderActiveAuthState(authState) {
      if (this._activeAuthStateComponent) {
        (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.remove)(this._activeAuthStateComponent);
      }

      switch (authState) {
        case _common_const__WEBPACK_IMPORTED_MODULE_1__.AuthState.SIGN_IN:
          this._signInComponent = new _sign_in__WEBPACK_IMPORTED_MODULE_3__["default"](this._onChangeActiveAuthState);
          this._activeAuthStateComponent = this._signInComponent;
          (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.render)(this.getElement(), this._signInComponent, _common_const__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
          break;

        case _common_const__WEBPACK_IMPORTED_MODULE_1__.AuthState.SIGN_UP:
          this._signUpComponent = new _sign_up__WEBPACK_IMPORTED_MODULE_4__["default"](this._onChangeActiveAuthState);
          this._activeAuthStateComponent = this._signUpComponent;
          (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.render)(this.getElement(), this._signUpComponent, _common_const__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
          break;

        case _common_const__WEBPACK_IMPORTED_MODULE_1__.AuthState.RESTORE:
          this._restoreComponent = new _restore__WEBPACK_IMPORTED_MODULE_5__["default"](this._onChangeActiveAuthState);
          this._activeAuthStateComponent = this._restoreComponent;
          (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.render)(this.getElement(), this._restoreComponent, _common_const__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
          break;

        case _common_const__WEBPACK_IMPORTED_MODULE_1__.AuthState.RESTORE_CONFIRM:
          this._restoreConfirmComponent = new _restore_confirm__WEBPACK_IMPORTED_MODULE_6__["default"](this._onChangeActiveAuthState);
          this._activeAuthStateComponent = this._restoreConfirmComponent;
          (0,_common_render__WEBPACK_IMPORTED_MODULE_0__.render)(this.getElement(), this._restoreConfirmComponent, _common_const__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFOREEND);
          break;
      }
    }
  }, {
    key: "_setOnChangeActiveAuthStateComponent",
    value: function _setOnChangeActiveAuthStateComponent(handler) {
      this._onChangeActiveAuthState = handler;
    }
  }]);

  return AuthorizationFormContainer;
}(_abstract_abstract_component__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/script/view/authorization-form/restore-confirm.js":
/*!***************************************************************!*\
  !*** ./src/script/view/authorization-form/restore-confirm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestorePasswordConfirm)
/* harmony export */ });
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/abstract-component */ "./src/script/view/abstract/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRestorePasswordConfirmMarkup = function createRestorePasswordConfirmMarkup() {
  return "<div class=\"feedback-wrapper feedback-wrapper_restore-password feedback-wrapper_restore-confirm\">\n            <form class=\"feedback-form\">\n                <div class=\"feedback-restore-password\">\n                    <a class=\"feedback-restore__btn\" href=\"#\">\n                        <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M0.499951 7.80005L6.19995 13.4C6.59995 13.8 7.19995 13.8 7.59995 13.4C7.99995 13 7.99995 12.4 7.59995 12L2.69995 7.00005L7.59995 2.00005C7.99995 1.60005 7.99995 1.00005 7.59995 0.600049C7.39995 0.400049 7.19995 0.300049 6.89995 0.300049C6.59995 0.300049 6.39995 0.400049 6.19995 0.600049L0.499951 6.20005C0.0999512 6.70005 0.0999512 7.30005 0.499951 7.80005C0.499951 7.70005 0.499951 7.70005 0.499951 7.80005Z\" fill=\"#A1ABC9\"/>\n                        </svg>\n                    </a>\n                    <span>Restore password</span>\n                </div>\n                <div class=\"feedback-message feedback-message_restore\">\n                    <p class=\"feedback-message__item\">\n                        An email has been sent to <span class=\"feedback-message__email\">example@exam.com</span>. Check your inbox, and click the reset link provided.\n                    </p>\n                </div>\n            </form>\n        </div>";
};

var RestorePasswordConfirm = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(RestorePasswordConfirm, _AbstractComponent);

  var _super = _createSuper(RestorePasswordConfirm);

  function RestorePasswordConfirm() {
    var _this;

    _classCallCheck(this, RestorePasswordConfirm);

    _this = _super.call(this);
    _this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

    _this._subsribeOnEvents();

    return _this;
  }

  _createClass(RestorePasswordConfirm, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createRestorePasswordConfirmMarkup();
    }
  }, {
    key: "_subsribeOnEvents",
    value: function _subsribeOnEvents() {
      var element = this.getElement();

      this._onChangeActiveAuthState(element);
    }
  }, {
    key: "__onChangeActiveAuthState",
    value: function __onChangeActiveAuthState(element) {
      var _this2 = this;

      element.querySelector('.feedback-restore__btn').addEventListener('click', function () {
        return _this2._onChangeActiveAuthStateHandler(AuthState.SIGN_IN);
      });
    }
  }]);

  return RestorePasswordConfirm;
}(_abstract_abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/script/view/authorization-form/restore.js":
/*!*******************************************************!*\
  !*** ./src/script/view/authorization-form/restore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RestorePassword)
/* harmony export */ });
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/const */ "./src/script/common/const.js");
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/abstract-component */ "./src/script/view/abstract/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createRestorePasswordMarkup = function createRestorePasswordMarkup() {
  return "<div class=\"feedback-wrapper feedback-wrapper_restore-password\">\n        <form class=\"feedback-form\">\n            <div class=\"feedback-restore-password\">\n                <a class=\"feedback-restore__btn\" href=\"#\">\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M0.499951 7.80005L6.19995 13.4C6.59995 13.8 7.19995 13.8 7.59995 13.4C7.99995 13 7.99995 12.4 7.59995 12L2.69995 7.00005L7.59995 2.00005C7.99995 1.60005 7.99995 1.00005 7.59995 0.600049C7.39995 0.400049 7.19995 0.300049 6.89995 0.300049C6.59995 0.300049 6.39995 0.400049 6.19995 0.600049L0.499951 6.20005C0.0999512 6.70005 0.0999512 7.30005 0.499951 7.80005C0.499951 7.70005 0.499951 7.70005 0.499951 7.80005Z\" fill=\"#A1ABC9\"/>\n                    </svg>\n                </a>\n                <span>Restore password</span>\n            </div>\n            <div class=\"feedback-message feedback-message_restore\">\n                <p class=\"feedback-message__item\">\n                    Please use your email address, and we\u2019ll send you the link to reset your password\n                </p>\n            </div>\n            <div class=\"feedback-field\">\n                <svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z\" fill=\"#A1ABC9\"/>\n                </svg>                                \n                <input class=\"feedback-field__input\" type=\"email\" placeholder=\"Email\" name=\"email\">\n            </div>\n            <div class=\"feedback-submit\">\n                <button class=\"feedback-submit__btn\" type=\"submit\">\n                    <span>Send Reset Link</span>\n                    <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z\" fill=\"white\"/>\n                    </svg>\n                </button>\n            </div>\n        </form>\n    </div>";
};

var RestorePassword = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(RestorePassword, _AbstractComponent);

  var _super = _createSuper(RestorePassword);

  function RestorePassword(onChangeActiveAuthState) {
    var _this;

    _classCallCheck(this, RestorePassword);

    _this = _super.call(this);
    _this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

    _this._subsribeOnEvents();

    return _this;
  }

  _createClass(RestorePassword, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createRestorePasswordMarkup();
    }
  }, {
    key: "_subsribeOnEvents",
    value: function _subsribeOnEvents() {
      var element = this.getElement();

      this._onChangeActiveAuthState(element);
    }
  }, {
    key: "_onChangeActiveAuthState",
    value: function _onChangeActiveAuthState(element) {
      var _this2 = this;

      element.querySelector('.feedback-restore__btn').addEventListener('click', function () {
        return _this2._onChangeActiveAuthStateHandler(_common_const__WEBPACK_IMPORTED_MODULE_0__.AuthState.SIGN_IN);
      });
    }
  }]);

  return RestorePassword;
}(_abstract_abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/script/view/authorization-form/sign-in.js":
/*!*******************************************************!*\
  !*** ./src/script/view/authorization-form/sign-in.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/const */ "./src/script/common/const.js");
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/abstract-component */ "./src/script/view/abstract/abstract-component.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var createSignInMarkup = function createSignInMarkup() {
  return "<div class=\"feedback-wrapper feedback-wrapper_sign-in\">\n            <form class=\"feedback-form\">\n                <p class=\"feedback-form__title\">Sign In</p>\n                <div class=\"feedback-field\">\n                    <svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z\" fill=\"#A1ABC9\"/>\n                    </svg>                                \n                    <input class=\"feedback-field__input\" type=\"email\" placeholder=\"Email\" name=\"email\">\n                </div>\n                <div class=\"feedback-field\">\n                    <svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z\" fill=\"#A1ABC9\"/>\n                    </svg>                                \n                    <input class=\"feedback-field__input\" type=\"password\" placeholder=\"Password\" name=\"pass\">\n                    <button class=\"feedback-field__btn\">\n                        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M9.93994 5.08C10.2907 5.02624 10.6451 4.99949 10.9999 5C14.1799 5 17.1699 7.29 18.9099 11C18.6438 11.5646 18.3433 12.1123 18.0099 12.64C17.9041 12.8038 17.8485 12.995 17.8499 13.19C17.8522 13.4082 17.9257 13.6198 18.0594 13.7923C18.1931 13.9648 18.3795 14.0889 18.5903 14.1455C18.8011 14.2022 19.0246 14.1883 19.2267 14.1061C19.4289 14.0238 19.5986 13.8777 19.7099 13.69C20.1759 12.9579 20.5806 12.1887 20.9199 11.39C20.9736 11.2652 21.0013 11.1308 21.0013 10.995C21.0013 10.8592 20.9736 10.7248 20.9199 10.6C18.8999 5.91 15.0999 3 10.9999 3C10.5306 2.99764 10.062 3.0378 9.59994 3.12C9.46862 3.14233 9.34298 3.1903 9.2302 3.26118C9.11742 3.33206 9.0197 3.42446 8.94263 3.5331C8.86555 3.64175 8.81063 3.76451 8.78101 3.89438C8.75138 4.02425 8.74762 4.15868 8.76994 4.29C8.79227 4.42132 8.84024 4.54696 8.91112 4.65975C8.982 4.77253 9.0744 4.87024 9.18304 4.94732C9.29169 5.02439 9.41445 5.07931 9.54432 5.10894C9.67419 5.13857 9.80862 5.14233 9.93994 5.12V5.08ZM2.70994 1.29C2.6167 1.19676 2.50601 1.1228 2.38419 1.07234C2.26237 1.02188 2.1318 0.995911 1.99994 0.995911C1.86808 0.995911 1.73751 1.02188 1.61569 1.07234C1.49387 1.1228 1.38318 1.19676 1.28994 1.29C1.10164 1.47831 0.99585 1.7337 0.99585 2C0.99585 2.2663 1.10164 2.5217 1.28994 2.71L4.38994 5.8C2.97551 7.16153 1.8498 8.79399 1.07994 10.6C1.02488 10.7262 0.996456 10.8623 0.996456 11C0.996456 11.1377 1.02488 11.2738 1.07994 11.4C3.09994 16.09 6.89994 19 10.9999 19C12.797 18.9876 14.5517 18.4525 16.0499 17.46L19.2899 20.71C19.3829 20.8037 19.4935 20.8781 19.6154 20.9289C19.7372 20.9797 19.8679 21.0058 19.9999 21.0058C20.132 21.0058 20.2627 20.9797 20.3845 20.9289C20.5064 20.8781 20.617 20.8037 20.7099 20.71C20.8037 20.617 20.8781 20.5064 20.9288 20.3846C20.9796 20.2627 21.0057 20.132 21.0057 20C21.0057 19.868 20.9796 19.7373 20.9288 19.6154C20.8781 19.4936 20.8037 19.383 20.7099 19.29L2.70994 1.29ZM9.06994 10.48L11.5199 12.93C11.3509 12.9785 11.1758 13.002 10.9999 13C10.4695 13 9.9608 12.7893 9.58573 12.4142C9.21066 12.0391 8.99994 11.5304 8.99994 11C8.99789 10.8242 9.02147 10.649 9.06994 10.48ZM10.9999 17C7.81994 17 4.82994 14.71 3.09994 11C3.74603 9.57375 4.66301 8.28658 5.79994 7.21L7.56994 9C7.15419 9.7588 6.99568 10.6319 7.1182 11.4885C7.24072 12.345 7.63766 13.1387 8.24947 13.7505C8.86128 14.3623 9.65497 14.7592 10.5115 14.8817C11.368 15.0043 12.2411 14.8458 12.9999 14.43L14.5899 16C13.501 16.6409 12.2634 16.9856 10.9999 17Z\" fill=\"#A1ABC9\"/>\n                        </svg>     \n                    </button>                              \n                </div>\n                <div class=\"feedback-message\">\n                    <p class=\"feedback-message_text\">Password contain unsupported characters</p>\n                </div>\n                <div class=\"feedback-submit\">\n                    <button class=\"feedback-submit__btn\" type=\"submit\">\n                        <span>Sign in</span>\n                        <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z\" fill=\"white\"/>\n                        </svg>\n                    </button>\n                </div>\n            </form>\n            <div class=\"feedback-buttons feedback-buttons_sign-in\">\n                <a href=\"#\" class=\"feedback-buttons__forgot\">Forgot password?</a>\n                <div class=\"feedback-text\">\n                    <p class=\"feedback-text__quest\">Don\u2019t have an account?</p>\n                    <a class=\"feedback-text__link\" href=\"#\">Sign Up</a>\n                </div>\n            </div>\n        </div>";
};

var SignIn = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(SignIn, _AbstractComponent);

  var _super = _createSuper(SignIn);

  function SignIn(onChangeActiveAuthState) {
    var _this;

    _classCallCheck(this, SignIn);

    _this = _super.call(this);
    _this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

    _this._subsctibeOnEvents();

    return _this;
  }

  _createClass(SignIn, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createSignInMarkup();
    }
  }, {
    key: "_subsctibeOnEvents",
    value: function _subsctibeOnEvents() {
      var element = this.getElement();

      this._onChangeActiveAuthState(element);
    }
  }, {
    key: "_onChangeActiveAuthState",
    value: function _onChangeActiveAuthState(element) {
      var _this2 = this;

      element.querySelector('.feedback-text__link').addEventListener('click', function () {
        return _this2._onChangeActiveAuthStateHandler(_common_const__WEBPACK_IMPORTED_MODULE_0__.AuthState.SIGN_UP);
      });
      element.querySelector('.feedback-buttons__forgot').addEventListener('click', function () {
        return _this2._onChangeActiveAuthStateHandler(_common_const__WEBPACK_IMPORTED_MODULE_0__.AuthState.RESTORE);
      });
    }
  }]);

  return SignIn;
}(_abstract_abstract_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/script/view/authorization-form/sign-up.js":
/*!*******************************************************!*\
  !*** ./src/script/view/authorization-form/sign-up.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var _abstract_abstract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract/abstract-component */ "./src/script/view/abstract/abstract-component.js");
/* harmony import */ var _sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in */ "./src/script/view/authorization-form/sign-in.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/const */ "./src/script/common/const.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var createSignUpMarkup = function createSignUpMarkup() {
  return "<div class=\"feedback-wrapper feedback-wrapper_sign-up\">\n            <form class=\"feedback-form\">\n                <p class=\"feedback-form__title\">Sign Up</p>\n                <div class=\"feedback-field\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z\" fill=\"#A1ABC9\"/>\n                    </svg>\n                    <input class=\"feedback-field__input\" type=\"text\" placeholder=\"First Name\" name=\"first\">\n                </div>\n                <div class=\"feedback-field\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10 0C8.06053 0.00368503 6.16393 0.571311 4.54128 1.63374C2.91862 2.69617 1.63994 4.20754 0.86099 5.98377C0.0820354 7.76 -0.163575 9.72442 0.154075 11.6378C0.471725 13.5511 1.33893 15.3308 2.65005 16.76C3.58647 17.775 4.72299 18.5851 5.98799 19.1392C7.25298 19.6933 8.61903 19.9793 10 19.9793C11.3811 19.9793 12.7471 19.6933 14.0121 19.1392C15.2771 18.5851 16.4136 17.775 17.35 16.76C18.6612 15.3308 19.5284 13.5511 19.846 11.6378C20.1637 9.72442 19.9181 7.76 19.1391 5.98377C18.3602 4.20754 17.0815 2.69617 15.4588 1.63374C13.8362 0.571311 11.9396 0.00368503 10 0ZM10 18C7.92851 17.9969 5.93896 17.1903 4.45005 15.75C4.90209 14.6495 5.67108 13.7083 6.6593 13.0459C7.64752 12.3835 8.81036 12.0298 10 12.0298C11.1897 12.0298 12.3526 12.3835 13.3408 13.0459C14.329 13.7083 15.098 14.6495 15.55 15.75C14.0611 17.1903 12.0716 17.9969 10 18ZM8.00005 8C8.00005 7.60444 8.11735 7.21776 8.33711 6.88886C8.55687 6.55996 8.86923 6.30362 9.23468 6.15224C9.60013 6.00087 10.0023 5.96126 10.3902 6.03843C10.7782 6.1156 11.1346 6.30608 11.4143 6.58579C11.694 6.86549 11.8844 7.22186 11.9616 7.60982C12.0388 7.99778 11.9992 8.39991 11.8478 8.76537C11.6964 9.13082 11.4401 9.44318 11.1112 9.66294C10.7823 9.8827 10.3956 10 10 10C9.46962 10 8.96091 9.78929 8.58584 9.41421C8.21076 9.03914 8.00005 8.53043 8.00005 8ZM16.91 14C16.0166 12.4718 14.6415 11.283 13 10.62C13.5092 10.0427 13.841 9.33066 13.9555 8.56944C14.0701 7.80822 13.9625 7.03011 13.6458 6.3285C13.3291 5.62688 12.8166 5.03156 12.17 4.61397C11.5233 4.19637 10.7698 3.97425 10 3.97425C9.23026 3.97425 8.47682 4.19637 7.83014 4.61397C7.18346 5.03156 6.67102 5.62688 6.3543 6.3285C6.03758 7.03011 5.93004 7.80822 6.04458 8.56944C6.15912 9.33066 6.49088 10.0427 7.00005 10.62C5.35865 11.283 3.98352 12.4718 3.09005 14C2.37799 12.7871 2.00177 11.4065 2.00005 10C2.00005 7.87827 2.8429 5.84344 4.34319 4.34315C5.84349 2.84285 7.87832 2 10 2C12.1218 2 14.1566 2.84285 15.6569 4.34315C17.1572 5.84344 18 7.87827 18 10C17.9983 11.4065 17.6221 12.7871 16.91 14Z\" fill=\"#A1ABC9\"/>\n                    </svg>\n                    <input class=\"feedback-field__input\" type=\"text\" placeholder=\"Last Name\" name=\"last\">\n                </div>\n                <div class=\"feedback-field\">\n                    <svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3L10 7.88L2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM18 13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V5.28L9.48 9.85C9.63202 9.93777 9.80446 9.98397 9.98 9.98397C10.1555 9.98397 10.328 9.93777 10.48 9.85L18 5.28V13Z\" fill=\"#A1ABC9\"/>\n                    </svg>                                \n                    <input class=\"feedback-field__input\" type=\"email\" placeholder=\"Email\" name=\"email\">\n                </div>\n                <div class=\"feedback-field\">\n                    <svg width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M8 11C7.73478 11 7.48043 11.1054 7.29289 11.2929C7.10536 11.4804 7 11.7348 7 12V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V12C9 11.7348 8.89464 11.4804 8.70711 11.2929C8.51957 11.1054 8.26522 11 8 11ZM13 7V5C13 3.67392 12.4732 2.40215 11.5355 1.46447C10.5979 0.526784 9.32608 0 8 0C6.67392 0 5.40215 0.526784 4.46447 1.46447C3.52678 2.40215 3 3.67392 3 5V7C2.20435 7 1.44129 7.31607 0.87868 7.87868C0.316071 8.44129 0 9.20435 0 10V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7956 7 13 7ZM5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10V17Z\" fill=\"#A1ABC9\"/>\n                    </svg>                                \n                    <input class=\"feedback-field__input\" type=\"password\" placeholder=\"Password\" name=\"pass\">\n                    <button class=\"feedback-field__btn\">\n                        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M9.93994 5.08C10.2907 5.02624 10.6451 4.99949 10.9999 5C14.1799 5 17.1699 7.29 18.9099 11C18.6438 11.5646 18.3433 12.1123 18.0099 12.64C17.9041 12.8038 17.8485 12.995 17.8499 13.19C17.8522 13.4082 17.9257 13.6198 18.0594 13.7923C18.1931 13.9648 18.3795 14.0889 18.5903 14.1455C18.8011 14.2022 19.0246 14.1883 19.2267 14.1061C19.4289 14.0238 19.5986 13.8777 19.7099 13.69C20.1759 12.9579 20.5806 12.1887 20.9199 11.39C20.9736 11.2652 21.0013 11.1308 21.0013 10.995C21.0013 10.8592 20.9736 10.7248 20.9199 10.6C18.8999 5.91 15.0999 3 10.9999 3C10.5306 2.99764 10.062 3.0378 9.59994 3.12C9.46862 3.14233 9.34298 3.1903 9.2302 3.26118C9.11742 3.33206 9.0197 3.42446 8.94263 3.5331C8.86555 3.64175 8.81063 3.76451 8.78101 3.89438C8.75138 4.02425 8.74762 4.15868 8.76994 4.29C8.79227 4.42132 8.84024 4.54696 8.91112 4.65975C8.982 4.77253 9.0744 4.87024 9.18304 4.94732C9.29169 5.02439 9.41445 5.07931 9.54432 5.10894C9.67419 5.13857 9.80862 5.14233 9.93994 5.12V5.08ZM2.70994 1.29C2.6167 1.19676 2.50601 1.1228 2.38419 1.07234C2.26237 1.02188 2.1318 0.995911 1.99994 0.995911C1.86808 0.995911 1.73751 1.02188 1.61569 1.07234C1.49387 1.1228 1.38318 1.19676 1.28994 1.29C1.10164 1.47831 0.99585 1.7337 0.99585 2C0.99585 2.2663 1.10164 2.5217 1.28994 2.71L4.38994 5.8C2.97551 7.16153 1.8498 8.79399 1.07994 10.6C1.02488 10.7262 0.996456 10.8623 0.996456 11C0.996456 11.1377 1.02488 11.2738 1.07994 11.4C3.09994 16.09 6.89994 19 10.9999 19C12.797 18.9876 14.5517 18.4525 16.0499 17.46L19.2899 20.71C19.3829 20.8037 19.4935 20.8781 19.6154 20.9289C19.7372 20.9797 19.8679 21.0058 19.9999 21.0058C20.132 21.0058 20.2627 20.9797 20.3845 20.9289C20.5064 20.8781 20.617 20.8037 20.7099 20.71C20.8037 20.617 20.8781 20.5064 20.9288 20.3846C20.9796 20.2627 21.0057 20.132 21.0057 20C21.0057 19.868 20.9796 19.7373 20.9288 19.6154C20.8781 19.4936 20.8037 19.383 20.7099 19.29L2.70994 1.29ZM9.06994 10.48L11.5199 12.93C11.3509 12.9785 11.1758 13.002 10.9999 13C10.4695 13 9.9608 12.7893 9.58573 12.4142C9.21066 12.0391 8.99994 11.5304 8.99994 11C8.99789 10.8242 9.02147 10.649 9.06994 10.48ZM10.9999 17C7.81994 17 4.82994 14.71 3.09994 11C3.74603 9.57375 4.66301 8.28658 5.79994 7.21L7.56994 9C7.15419 9.7588 6.99568 10.6319 7.1182 11.4885C7.24072 12.345 7.63766 13.1387 8.24947 13.7505C8.86128 14.3623 9.65497 14.7592 10.5115 14.8817C11.368 15.0043 12.2411 14.8458 12.9999 14.43L14.5899 16C13.501 16.6409 12.2634 16.9856 10.9999 17Z\" fill=\"#A1ABC9\"/>\n                        </svg>     \n                    </button> \n                </div>\n                <div class=\"feedback-field\">\n                    <svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M14.7099 1.2101C14.617 1.11638 14.5064 1.04198 14.3845 0.991213C14.2627 0.940445 14.132 0.914307 13.9999 0.914307C13.8679 0.914307 13.7372 0.940445 13.6154 0.991213C13.4935 1.04198 13.3829 1.11638 13.29 1.2101L5.83995 8.6701L2.70995 5.5301C2.61343 5.43687 2.49949 5.36355 2.37463 5.31435C2.24978 5.26514 2.11645 5.24101 1.98227 5.24334C1.84809 5.24566 1.71568 5.27438 1.5926 5.32788C1.46953 5.38137 1.35819 5.45858 1.26495 5.55511C1.17171 5.65163 1.0984 5.76557 1.04919 5.89042C0.999989 6.01528 0.975859 6.1486 0.97818 6.28278C0.980502 6.41696 1.00923 6.54937 1.06272 6.67245C1.11622 6.79553 1.19343 6.90687 1.28995 7.0001L5.12995 10.8401C5.22291 10.9338 5.33351 11.0082 5.45537 11.059C5.57723 11.1098 5.70794 11.1359 5.83995 11.1359C5.97196 11.1359 6.10267 11.1098 6.22453 11.059C6.34639 11.0082 6.45699 10.9338 6.54995 10.8401L14.7099 2.68011C14.8115 2.58646 14.8925 2.47281 14.9479 2.34631C15.0033 2.21981 15.0319 2.08321 15.0319 1.94511C15.0319 1.807 15.0033 1.6704 14.9479 1.5439C14.8925 1.4174 14.8115 1.30375 14.7099 1.2101Z\" fill=\"#A1ABC9\"/>\n                    </svg>                                \n                    <input class=\"feedback-field__input\" type=\"password\" placeholder=\"Confirm Password\" name=\"confirm\">\n                    <button class=\"feedback-field__btn\">\n                        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M9.93994 5.08C10.2907 5.02624 10.6451 4.99949 10.9999 5C14.1799 5 17.1699 7.29 18.9099 11C18.6438 11.5646 18.3433 12.1123 18.0099 12.64C17.9041 12.8038 17.8485 12.995 17.8499 13.19C17.8522 13.4082 17.9257 13.6198 18.0594 13.7923C18.1931 13.9648 18.3795 14.0889 18.5903 14.1455C18.8011 14.2022 19.0246 14.1883 19.2267 14.1061C19.4289 14.0238 19.5986 13.8777 19.7099 13.69C20.1759 12.9579 20.5806 12.1887 20.9199 11.39C20.9736 11.2652 21.0013 11.1308 21.0013 10.995C21.0013 10.8592 20.9736 10.7248 20.9199 10.6C18.8999 5.91 15.0999 3 10.9999 3C10.5306 2.99764 10.062 3.0378 9.59994 3.12C9.46862 3.14233 9.34298 3.1903 9.2302 3.26118C9.11742 3.33206 9.0197 3.42446 8.94263 3.5331C8.86555 3.64175 8.81063 3.76451 8.78101 3.89438C8.75138 4.02425 8.74762 4.15868 8.76994 4.29C8.79227 4.42132 8.84024 4.54696 8.91112 4.65975C8.982 4.77253 9.0744 4.87024 9.18304 4.94732C9.29169 5.02439 9.41445 5.07931 9.54432 5.10894C9.67419 5.13857 9.80862 5.14233 9.93994 5.12V5.08ZM2.70994 1.29C2.6167 1.19676 2.50601 1.1228 2.38419 1.07234C2.26237 1.02188 2.1318 0.995911 1.99994 0.995911C1.86808 0.995911 1.73751 1.02188 1.61569 1.07234C1.49387 1.1228 1.38318 1.19676 1.28994 1.29C1.10164 1.47831 0.99585 1.7337 0.99585 2C0.99585 2.2663 1.10164 2.5217 1.28994 2.71L4.38994 5.8C2.97551 7.16153 1.8498 8.79399 1.07994 10.6C1.02488 10.7262 0.996456 10.8623 0.996456 11C0.996456 11.1377 1.02488 11.2738 1.07994 11.4C3.09994 16.09 6.89994 19 10.9999 19C12.797 18.9876 14.5517 18.4525 16.0499 17.46L19.2899 20.71C19.3829 20.8037 19.4935 20.8781 19.6154 20.9289C19.7372 20.9797 19.8679 21.0058 19.9999 21.0058C20.132 21.0058 20.2627 20.9797 20.3845 20.9289C20.5064 20.8781 20.617 20.8037 20.7099 20.71C20.8037 20.617 20.8781 20.5064 20.9288 20.3846C20.9796 20.2627 21.0057 20.132 21.0057 20C21.0057 19.868 20.9796 19.7373 20.9288 19.6154C20.8781 19.4936 20.8037 19.383 20.7099 19.29L2.70994 1.29ZM9.06994 10.48L11.5199 12.93C11.3509 12.9785 11.1758 13.002 10.9999 13C10.4695 13 9.9608 12.7893 9.58573 12.4142C9.21066 12.0391 8.99994 11.5304 8.99994 11C8.99789 10.8242 9.02147 10.649 9.06994 10.48ZM10.9999 17C7.81994 17 4.82994 14.71 3.09994 11C3.74603 9.57375 4.66301 8.28658 5.79994 7.21L7.56994 9C7.15419 9.7588 6.99568 10.6319 7.1182 11.4885C7.24072 12.345 7.63766 13.1387 8.24947 13.7505C8.86128 14.3623 9.65497 14.7592 10.5115 14.8817C11.368 15.0043 12.2411 14.8458 12.9999 14.43L14.5899 16C13.501 16.6409 12.2634 16.9856 10.9999 17Z\" fill=\"#A1ABC9\"/>\n                        </svg>     \n                    </button> \n                </div>\n                <div class=\"feedback-submit\">\n                    <button class=\"feedback-submit__btn\" type=\"submit\">\n                        <span>Sign up</span>\n                        <svg width=\"8\" height=\"14\" viewBox=\"0 0 8 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z\" fill=\"white\"/>\n                        </svg>\n                    </button>\n                </div>\n            </form>\n            <div class=\"feedback-buttons\">\n                <div class=\"feedback-text\">\n                    <p class=\"feedback-text__quest\">Already have an account?</p>\n                    <a class=\"feedback-text__link\" href=\"#\">Sign In</a>\n                </div>\n            </div>\n        </div>";
};

var SignUp = /*#__PURE__*/function (_AbstractComponent) {
  _inherits(SignUp, _AbstractComponent);

  var _super = _createSuper(SignUp);

  function SignUp(onChangeActiveAuthState) {
    var _this;

    _classCallCheck(this, SignUp);

    _this = _super.call(this);
    _this._onChangeActiveAuthStateHandler = onChangeActiveAuthState;

    _this._subscribeOnEvents();

    return _this;
  }

  _createClass(SignUp, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createSignUpMarkup();
    }
  }, {
    key: "_subscribeOnEvents",
    value: function _subscribeOnEvents() {
      var element = this.getElement();

      this._setChangeActiveAuthStateHandler(element);
    }
  }, {
    key: "_setChangeActiveAuthStateHandler",
    value: function _setChangeActiveAuthStateHandler(element) {
      var _this2 = this;

      element.querySelector('.feedback-text__link').addEventListener('click', function () {
        return _this2._onChangeActiveAuthStateHandler(_common_const__WEBPACK_IMPORTED_MODULE_2__.AuthState.SIGN_IN);
      });
    }
  }]);

  return SignUp;
}(_abstract_abstract_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_view_authorization_form_authorization_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/view/authorization-form/authorization-form */ "./src/script/view/authorization-form/authorization-form.js");
/* harmony import */ var _script_controllers_authorization_form_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/controllers/authorization-form-controller */ "./src/script/controllers/authorization-form-controller.js");
/* harmony import */ var _script_view_authorization_form_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/view/authorization-form/sign-up */ "./src/script/view/authorization-form/sign-up.js");
/* harmony import */ var _script_common_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script/common/render */ "./src/script/common/render.js");
/* harmony import */ var _script_common_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/common/const */ "./src/script/common/const.js");
/* harmony import */ var _script_model_authorization_form_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/model/authorization-form-model */ "./src/script/model/authorization-form-model.js");






var rootContainer = document.getElementById('root');
var authorizationFormView = new _script_view_authorization_form_authorization_form__WEBPACK_IMPORTED_MODULE_0__["default"]();
var authorizationFormModel = new _script_model_authorization_form_model__WEBPACK_IMPORTED_MODULE_5__["default"](authorizationFormView);
var authorizationFormController = new _script_controllers_authorization_form_controller__WEBPACK_IMPORTED_MODULE_1__["default"](authorizationFormModel, authorizationFormView);

var renderActiveScreen = function renderActiveScreen() {
  var activeScreen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _script_common_const__WEBPACK_IMPORTED_MODULE_4__.ActiveScreen.AUTH;

  switch (activeScreen) {
    case _script_common_const__WEBPACK_IMPORTED_MODULE_4__.ActiveScreen.AUTH:
      authorizationFormController.render(rootContainer);
  }
};

renderActiveScreen();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map