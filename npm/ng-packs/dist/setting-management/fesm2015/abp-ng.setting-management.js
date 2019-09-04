import { NgModule, Injectable, Component, Self } from '@angular/core';
import { DynamicLayoutComponent, CoreModule } from '@abp/ng.core';
import { Router, RouterModule } from '@angular/router';
import snq from 'snq';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RootSettingManagementModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RootSettingManagementModule,
            providers: [],
        };
    }
}
RootSettingManagementModule.decorators = [
    { type: NgModule, args: [{},] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InitialService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.settings = this.router.config
            .map((/**
         * @param {?} route
         * @return {?}
         */
        route => snq((/**
         * @return {?}
         */
        () => route.data.routes.settings))))
            .filter((/**
         * @param {?} settings
         * @return {?}
         */
        settings => settings && settings.length))
            .reduce((/**
         * @param {?} acc
         * @param {?} val
         * @return {?}
         */
        (acc, val) => [...acc, ...val]), [])
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order - b.order));
    }
}
InitialService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InitialService.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /** @type {?} */
    InitialService.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    InitialService.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingComponent {
    /**
     * @param {?} initialService
     */
    constructor(initialService) {
        this.initialService = initialService;
        this.selected = (/** @type {?} */ ({}));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.settings = this.initialService.settings;
        this.selected = this.settings[0];
    }
}
SettingComponent.decorators = [
    { type: Component, args: [{
                selector: 'abp-setting',
                template: "<div class=\"row entry-row\">\n  <div class=\"col-auto\">\n    <h1 class=\"content-header-title\">{{ 'AbpSettingManagement::Settings' | abpLocalization }}</h1>\n  </div>\n  <div id=\"breadcrumb\" class=\"col-md-auto pl-md-0\">\n    <abp-breadcrumb></abp-breadcrumb>\n  </div>\n  <div class=\"col\">\n    <div class=\"text-lg-right pt-2\" id=\"AbpContentToolbar\"></div>\n  </div>\n</div>\n\n<div id=\"SettingManagementWrapper\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <ul class=\"nav flex-column nav-pills\" id=\"T515ccf3324254f41a4a9a6b34b0dae56\" role=\"tablist\">\n            <li\n              *ngFor=\"let setting of settings\"\n              (click)=\"selected = setting\"\n              class=\"nav-item\"\n              [abpPermission]=\"setting.requiredPolicy\"\n            >\n              <a\n                class=\"nav-link\"\n                [id]=\"setting.name + '-tab'\"\n                role=\"tab\"\n                [class.active]=\"setting.name === selected.name\"\n                >{{ setting.name | abpLocalization }}</a\n              >\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-9\">\n          <div class=\"tab-content\">\n            <div class=\"tab-pane fade show active\" [id]=\"selected.name + '-tab'\" role=\"tabpanel\">\n              <h2>{{ selected.name | abpLocalization }}</h2>\n              <hr class=\"my-4\" />\n\n              <ng-container\n                *ngComponentOutlet=\"selected.component\"\n                [abpPermission]=\"selected.requiredPolicy\"\n              ></ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            }] }
];
/** @nocollapse */
SettingComponent.ctorParameters = () => [
    { type: InitialService }
];
if (false) {
    /** @type {?} */
    SettingComponent.prototype.settings;
    /** @type {?} */
    SettingComponent.prototype.selected;
    /**
     * @type {?}
     * @private
     */
    SettingComponent.prototype.initialService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const routes = [
    {
        path: '',
        component: DynamicLayoutComponent,
        children: [{ path: '', component: SettingComponent }],
    },
];
class SettingManagementRoutingModule {
}
SettingManagementRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingManagementModule {
    /**
     * @param {?} initialService
     */
    constructor(initialService) { }
}
SettingManagementModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SettingComponent],
                imports: [SettingManagementRoutingModule, CoreModule, ThemeSharedModule],
                providers: [InitialService],
            },] }
];
/** @nocollapse */
SettingManagementModule.ctorParameters = () => [
    { type: InitialService, decorators: [{ type: Self }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SETTING_MANAGEMENT_ROUTES = {
    routes: (/** @type {?} */ ([
        {
            name: 'Settings',
            path: 'setting-management',
            parentName: 'AbpUiNavigation::Menu:Administration',
            layout: "application" /* application */,
            order: 6,
            iconClass: 'fa fa-cog',
        },
    ])),
    settings: [],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { RootSettingManagementModule, SETTING_MANAGEMENT_ROUTES, SettingComponent, SettingManagementModule, SettingComponent as ɵa, InitialService as ɵb, SettingManagementRoutingModule as ɵc };
//# sourceMappingURL=abp-ng.setting-management.js.map