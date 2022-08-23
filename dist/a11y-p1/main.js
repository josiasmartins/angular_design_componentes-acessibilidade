"use strict";
(self["webpackChunka11y_p1"] = self["webpackChunka11y_p1"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_yes_no_button_group_yes_no_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/yes-no-button-group/yes-no-button-group.component */ 4536);



let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(formBuilder) {
      this.title = 'a11y-p1'; // public yesNoAnswer = 'no';

      this.formGroup = null;
      this.formGroup = formBuilder.group({
        yesNoAnswer: [{
          value: 'no',
          disabled: false
        }]
      });
    }

    submit() {
      this.formGroup.get('yesNoAnswer').disable();
      console.log(this.formGroup.value, 'ibag');
    }

  }

  AppComponent.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };

  AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 2,
    consts: [["tabindex", "0"], [3, "formGroup", "ngSubmit"], ["formControlName", "yesNoAnswer", "label", "Are you good enough in Angular"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_3_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-yes-no-button-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("appDisabedControl", true);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _shared_components_yes_no_button_group_yes_no_button_group_component__WEBPACK_IMPORTED_MODULE_0__.YesNoButtonGroupComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
  });
  return AppComponent;
})();

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_components_yes_no_button_group_yes_no_button_group_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/yes-no-button-group/yes-no-button-group.module */ 71);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





let AppModule = /*#__PURE__*/(() => {
  class AppModule {}

  AppModule.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };

  AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _shared_components_yes_no_button_group_yes_no_button_group_module__WEBPACK_IMPORTED_MODULE_1__.YesNoButtonGroupModule]
  });
  return AppModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _shared_components_yes_no_button_group_yes_no_button_group_module__WEBPACK_IMPORTED_MODULE_1__.YesNoButtonGroupModule]
  });
})();

/***/ }),

/***/ 4536:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/yes-no-button-group/yes-no-button-group.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoButtonGroupComponent": () => (/* binding */ YesNoButtonGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_unique_id_unique_id_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/unique-id/unique-id.service */ 1082);




let YesNoButtonGroupComponent = /*#__PURE__*/(() => {
  class YesNoButtonGroupComponent {
    constructor(uniqueIdService) {
      this.uniqueIdService = uniqueIdService;
      this.disabled = false;
      this.value = null;
      this.label = ''; // EventEmitter: vai emitir uma string
      // Lembre-se da convenção no qual a @Output() property deve ter o mesmo nome da
      // @Input() property acrescido com o sufixo Change

      this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.id = null;
      this.options = YesNoButtonGroupOption;

      this.onChange = value => {};

      this.onTouched = () => {};

      this.id = uniqueIdService.generateuniqueIdWithPrefix('yes-no-button-group');
    }

    ngOnInit() {}

    writeValue(value) {
      this.value = value;
      this.onChange(this.value);
      this.valueChange.emit(this.value);
    }

    registerOnChange(fn) {
      this.onChange = fn;
    }

    registerOnTouched(fn) {
      this.onTouched = fn;
    }

    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }

    activate(value) {
      // this.value = value;
      // // emit: notifica o mundo externo que o valor mudou
      // this.valueChange.emit(this.value);
      this.writeValue(value);
    }

  }

  YesNoButtonGroupComponent.ɵfac = function YesNoButtonGroupComponent_Factory(t) {
    return new (t || YesNoButtonGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_unique_id_unique_id_service__WEBPACK_IMPORTED_MODULE_0__.UniqueIdService));
  };

  YesNoButtonGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: YesNoButtonGroupComponent,
    selectors: [["app-yes-no-button-group"]],
    inputs: {
      disabled: "disabled",
      value: "value",
      label: "label"
    },
    outputs: {
      valueChange: "valueChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
      /**
       * NG_VALUE_ACESSOR: É um injection token que marca nosso componente para que
       * seja injetado dentro da infraestrutura do formGroup.
       */
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
      multi: true,
      // useExisting: use alguém
      // forwardRef(): mostra só quando tiver a referencia

      /**
       * forwardRef: É usado quando o token ao qual precisamos nos referir para fins de DI é declarado, mas ainda não definido
       */
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => YesNoButtonGroupComponent)
    }])],
    decls: 11,
    vars: 10,
    consts: [["role", "radiogroup", 1, "button-group"], [1, "radio"], ["type", "radio", 3, "change"], [1, "button", "button-yes"], [1, "button", "button-no"]],
    template: function YesNoButtonGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function YesNoButtonGroupComponent_Template_input_change_4_listener() {
          return ctx.activate(ctx.options.YES);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1)(8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function YesNoButtonGroupComponent_Template_input_change_8_listener() {
          return ctx.activate(ctx.options.NO);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id + "-yes")("name", ctx.id)("checked", ctx.value === ctx.options.YES);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.id + "-yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id + "-no")("name", ctx.id)("checked", ctx.value === ctx.options.NO);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.id + "-no");
      }
    },
    styles: [".button-group[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.button-group[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  border: 1px solid #aeb6c6;\n  padding: 0.5rem 0.75rem;\n  margin: 0;\n  color: black;\n  background-color: #fff;\n}\n.button-group[_ngcontent-%COMP%]   .button.button-yes[_ngcontent-%COMP%] {\n  border-radius: 5px 0 0 5px;\n}\n.button-group[_ngcontent-%COMP%]   .button.button-no[_ngcontent-%COMP%] {\n  border-radius: 0 5px 5px 0;\n}\n.button-group[_ngcontent-%COMP%]   .button.button-pressed[_ngcontent-%COMP%], .button-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label.button[_ngcontent-%COMP%] {\n  background-color: #0FC7FF;\n  border-color: #0FC7FF;\n  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.2);\n}\n.button-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.button-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 25%;\n  left: 25%;\n}\n.button-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%] {\n  outline: solid 1px #272c3f;\n}\n.button-group[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllcy1uby1idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxPbmVEcml2ZSUyMC0lMjBBY2NlbnR1cmVcXERvY3VtZW50c1xccHJvamV0b3NcXGFsdXJhXFxhbmd1bGFyXFxmb3JtYWNhby1hbmd1bGFyXFxhbmd1bGFyX2Rlc2lnbl9jb21wb25lbnRlc19hY2Vzc2liaWxpZGFkZVxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xceWVzLW5vLWJ1dHRvbi1ncm91cFxceWVzLW5vLWJ1dHRvbi1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLG1CQUFBO0FDSEo7QURNRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDSko7QURNSTtFQUNFLDBCQUFBO0FDSk47QURPSTtFQUNFLDBCQUFBO0FDTE47QURRSTtFQUNFLHlCQXZCc0I7RUF3QnRCLHFCQXhCc0I7RUF5QnRCLDhDQUFBO0FDTk47QURZRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFVJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNSTjtBRFNNO0VBQ0UsMEJBQUE7QUNQUjtBRGNJO0VBQ0UsY0FBQTtBQ1pOIiwiZmlsZSI6Inllcy1uby1idXR0b24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkOiB2YXJpdmFlbCBkbyBzYXNzXHJcbiRidXR0b24tcHJlc3NlZC1iYWNrZ3JvdW5kOiAjMEZDN0ZGO1xyXG5cclxuLmJ1dHRvbi1ncm91cCB7XHJcbiAgLmxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZWI2YzY7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJi5idXR0b24teWVzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5idXR0b24tbm8ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJ1dHRvbi1wcmVzc2VkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1wcmVzc2VkLWJhY2tncm91bmQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGJ1dHRvbi1wcmVzc2VkLWJhY2tncm91bmQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tZ3JvdXAge1xyXG4gIC5yYWRpbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNSU7XHJcbiAgICAgIGxlZnQ6IDI1JTtcclxuICAgICAgJjpmb2N1cyArIGxhYmVsIHtcclxuICAgICAgICBvdXRsaW5lOiBzb2xpZCAxcHggIzI3MmMzZjtcclxuICAgICAgfVxyXG4gICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgQGV4dGVuZCAuYnV0dG9uLXByZXNzZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYnV0dG9uLWdyb3VwIC5sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG4uYnV0dG9uLWdyb3VwIC5idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWViNmM2O1xuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnV0dG9uLWdyb3VwIC5idXR0b24uYnV0dG9uLXllcyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xufVxuLmJ1dHRvbi1ncm91cCAuYnV0dG9uLmJ1dHRvbi1ubyB7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xufVxuLmJ1dHRvbi1ncm91cCAuYnV0dG9uLmJ1dHRvbi1wcmVzc2VkLCAuYnV0dG9uLWdyb3VwIC5yYWRpbyBpbnB1dDpjaGVja2VkICsgbGFiZWwuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGQzdGRjtcbiAgYm9yZGVyLWNvbG9yOiAjMEZDN0ZGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYnV0dG9uLWdyb3VwIC5yYWRpbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmJ1dHRvbi1ncm91cCAucmFkaW8gaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAyNSU7XG59XG4uYnV0dG9uLWdyb3VwIC5yYWRpbyBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgb3V0bGluZTogc29saWQgMXB4ICMyNzJjM2Y7XG59XG4uYnV0dG9uLWdyb3VwIC5yYWRpbyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
  });
  return YesNoButtonGroupComponent;
})();
var YesNoButtonGroupOption = /*#__PURE__*/(() => {
  (function (YesNoButtonGroupOption) {
    YesNoButtonGroupOption["YES"] = "yes";
    YesNoButtonGroupOption["NO"] = "no";
  })(YesNoButtonGroupOption || (YesNoButtonGroupOption = {}));

  return YesNoButtonGroupOption;
})();

/***/ }),

/***/ 71:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/yes-no-button-group/yes-no-button-group.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YesNoButtonGroupModule": () => (/* binding */ YesNoButtonGroupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _yes_no_button_group_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yes-no-button-group.component */ 4536);
/* harmony import */ var _directives_keyboard_manager_keyboard_manager_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/keyboard-manager/keyboard-manager.module */ 3189);
/* harmony import */ var _directives_disabled_control_disabled_control_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/disabled-control/disabled-control.module */ 3045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





let YesNoButtonGroupModule = /*#__PURE__*/(() => {
  class YesNoButtonGroupModule {}

  YesNoButtonGroupModule.ɵfac = function YesNoButtonGroupModule_Factory(t) {
    return new (t || YesNoButtonGroupModule)();
  };

  YesNoButtonGroupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: YesNoButtonGroupModule
  });
  YesNoButtonGroupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _directives_keyboard_manager_keyboard_manager_module__WEBPACK_IMPORTED_MODULE_1__.KeyboardManagerModule, _directives_disabled_control_disabled_control_module__WEBPACK_IMPORTED_MODULE_2__.DisabledControlModule]
  });
  return YesNoButtonGroupModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](YesNoButtonGroupModule, {
    declarations: [_yes_no_button_group_component__WEBPACK_IMPORTED_MODULE_0__.YesNoButtonGroupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _directives_keyboard_manager_keyboard_manager_module__WEBPACK_IMPORTED_MODULE_1__.KeyboardManagerModule, _directives_disabled_control_disabled_control_module__WEBPACK_IMPORTED_MODULE_2__.DisabledControlModule],
    exports: [_yes_no_button_group_component__WEBPACK_IMPORTED_MODULE_0__.YesNoButtonGroupComponent]
  });
})();

/***/ }),

/***/ 5817:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/directives/disabled-control/disabled-control.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledControlDirective": () => (/* binding */ DisabledControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



let DisabledControlDirective = /*#__PURE__*/(() => {
  class DisabledControlDirective {
    constructor(ngControl) {
      this.ngControl = ngControl;
      this.appDisabedControl = false;
    }

    ngOnChanges(changes) {
      if (changes.appDisabedControl) {
        const action = this.appDisabedControl ? 'disable' : 'enable';
        this.ngControl.control[action]();
      }
    }

  }

  DisabledControlDirective.ɵfac = function DisabledControlDirective_Factory(t) {
    return new (t || DisabledControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl));
  };

  DisabledControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DisabledControlDirective,
    selectors: [["", "appDisabledControl", ""]],
    inputs: {
      appDisabedControl: "appDisabedControl"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
  return DisabledControlDirective;
})();

/***/ }),

/***/ 3045:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/directives/disabled-control/disabled-control.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledControlModule": () => (/* binding */ DisabledControlModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _disabled_control_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./disabled-control.directive */ 5817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



let DisabledControlModule = /*#__PURE__*/(() => {
  class DisabledControlModule {}

  DisabledControlModule.ɵfac = function DisabledControlModule_Factory(t) {
    return new (t || DisabledControlModule)();
  };

  DisabledControlModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DisabledControlModule
  });
  DisabledControlModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
  });
  return DisabledControlModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DisabledControlModule, {
    declarations: [_disabled_control_directive__WEBPACK_IMPORTED_MODULE_0__.DisabledControlDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_disabled_control_directive__WEBPACK_IMPORTED_MODULE_0__.DisabledControlDirective]
  });
})();

/***/ }),

/***/ 1816:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/directives/keyboard-manager/keyboard-manager-item.directive.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardManagerItemDirective": () => (/* binding */ KeyboardManagerItemDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


let KeyboardManagerItemDirective = /*#__PURE__*/(() => {
  class KeyboardManagerItemDirective {
    constructor( // ElementRef: embrulha o dom
    elementRef) {
      this.elementRef = elementRef;
      this.focused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }

    focus() {
      this.elementRef.nativeElement.focus();
      this.focused.emit();
    }

    isFocused() {
      return this.elementRef.nativeElement === document.activeElement;
    }

  }

  KeyboardManagerItemDirective.ɵfac = function KeyboardManagerItemDirective_Factory(t) {
    return new (t || KeyboardManagerItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };

  KeyboardManagerItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: KeyboardManagerItemDirective,
    selectors: [["", "appKmItem", ""]],
    outputs: {
      focused: "focused"
    }
  });
  return KeyboardManagerItemDirective;
})();

/***/ }),

/***/ 5275:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/directives/keyboard-manager/keyboard-manager.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardManagerDirective": () => (/* binding */ KeyboardManagerDirective)
/* harmony export */ });
/* harmony import */ var _keyboard_manager_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-manager-item.directive */ 1816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



let KeyboardManagerDirective = /*#__PURE__*/(() => {
  class KeyboardManagerDirective {
    constructor() {
      // Contentchild: busca todo mundo que é filho do elemento KeyboardManagerDirective
      // QueryList: atualiza dinamicamente as listas
      this.items = null;
    }

    manageKeys(event) {
      // event.key: dá acesso a tecla pressionado
      switch (event.key) {
        case 'ArrowUp':
          this.moveFocus(ArrowDirective.RIGHT).focus();
          break;

        case 'ArrowDown':
          this.moveFocus(ArrowDirective.LEFT).focus();
          break;

        case 'ArrowLeft':
          this.moveFocus(ArrowDirective.LEFT).focus();
          break;

        case 'ArrowRight':
          this.moveFocus(ArrowDirective.RIGHT).focus();
          break;
      }
    }

    moveFocus(direction) {
      const items = this.items.toArray();
      console.log(this.items);
      const currentSelectedIndex = items.findIndex(item => item.isFocused());
      const targetElementFocus = items[currentSelectedIndex + direction];

      if (targetElementFocus) {
        return targetElementFocus;
      }

      return direction === ArrowDirective.LEFT ? items[items.length - 1] : items[0];
    }

  }

  KeyboardManagerDirective.ɵfac = function KeyboardManagerDirective_Factory(t) {
    return new (t || KeyboardManagerDirective)();
  };

  KeyboardManagerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: KeyboardManagerDirective,
    selectors: [["", "appKm", ""]],
    contentQueries: function KeyboardManagerDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _keyboard_manager_item_directive__WEBPACK_IMPORTED_MODULE_0__.KeyboardManagerItemDirective, 4);
      }

      if (rf & 2) {
        let _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.items = _t);
      }
    },
    hostBindings: function KeyboardManagerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KeyboardManagerDirective_keyup_HostBindingHandler($event) {
          return ctx.manageKeys($event);
        });
      }
    }
  });
  return KeyboardManagerDirective;
})();
var ArrowDirective = /*#__PURE__*/(() => {
  (function (ArrowDirective) {
    ArrowDirective[ArrowDirective["LEFT"] = -1] = "LEFT";
    ArrowDirective[ArrowDirective["RIGHT"] = 1] = "RIGHT";
  })(ArrowDirective || (ArrowDirective = {}));

  return ArrowDirective;
})();

/***/ }),

/***/ 3189:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/directives/keyboard-manager/keyboard-manager.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardManagerModule": () => (/* binding */ KeyboardManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _keyboard_manager_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-manager.directive */ 5275);
/* harmony import */ var _keyboard_manager_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-manager-item.directive */ 1816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let KeyboardManagerModule = /*#__PURE__*/(() => {
  class KeyboardManagerModule {}

  KeyboardManagerModule.ɵfac = function KeyboardManagerModule_Factory(t) {
    return new (t || KeyboardManagerModule)();
  };

  KeyboardManagerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: KeyboardManagerModule
  });
  KeyboardManagerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
  return KeyboardManagerModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](KeyboardManagerModule, {
    declarations: [_keyboard_manager_directive__WEBPACK_IMPORTED_MODULE_0__.KeyboardManagerDirective, _keyboard_manager_item_directive__WEBPACK_IMPORTED_MODULE_1__.KeyboardManagerItemDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_keyboard_manager_directive__WEBPACK_IMPORTED_MODULE_0__.KeyboardManagerDirective, _keyboard_manager_item_directive__WEBPACK_IMPORTED_MODULE_1__.KeyboardManagerItemDirective]
  });
})();

/***/ }),

/***/ 1082:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/unique-id/unique-id.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniqueIdService": () => (/* binding */ UniqueIdService)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ 8281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let UniqueIdService = /*#__PURE__*/(() => {
  class UniqueIdService {
    generateuniqueIdWithPrefix(prefix) {
      const uniqueId = this.generateUniqueId();
      return `${prefix}-${uniqueId}`;
    }

    generateUniqueId() {
      return uuid__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

  }

  UniqueIdService.ɵfac = function UniqueIdService_Factory(t) {
    return new (t || UniqueIdService)();
  };

  UniqueIdService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UniqueIdService,
    factory: UniqueIdService.ɵfac,
    providedIn: 'root'
  });
  return UniqueIdService;
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map