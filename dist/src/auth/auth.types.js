"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultAuthOptions = exports.ResourceOwnership = exports.ActionScope = exports.RequestType = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["STUDENT"] = "student";
    Roles["ADMIN"] = "admin";
})(Roles || (exports.Roles = Roles = {}));
var RequestType;
(function (RequestType) {
    RequestType["CreateOne"] = "CreateOne";
    RequestType["CreateMany"] = "CreateMany";
    RequestType["GetOne"] = "GetOne";
    RequestType["GetMany"] = "GetMany";
    RequestType["UpdateOne"] = "UpdateOne";
    RequestType["UpdateMany"] = "UpdateMany";
    RequestType["DeleteOne"] = "DeleteOne";
    RequestType["DeleteMany"] = "DeleteMany";
    RequestType["Search"] = "Search";
    RequestType["Custom"] = "Custom";
})(RequestType || (exports.RequestType = RequestType = {}));
var ActionScope;
(function (ActionScope) {
    ActionScope["Admin"] = "admin";
    ActionScope["Student"] = "student";
})(ActionScope || (exports.ActionScope = ActionScope = {}));
var ResourceOwnership;
(function (ResourceOwnership) {
    ResourceOwnership["Admin"] = "admin";
    ResourceOwnership["Student"] = "student";
})(ResourceOwnership || (exports.ResourceOwnership = ResourceOwnership = {}));
exports.DefaultAuthOptions = {
    Context: null,
    ActionScope: ActionScope.Student,
    Ownership: ResourceOwnership.Student,
    RequestType: RequestType.Custom,
    ResourceIdName: 'id',
    CustomAuthorization: false,
    AlternateAuth: false,
    SignupOrSignin: false,
    OptionalUserAuth: false,
};
//# sourceMappingURL=auth.types.js.map