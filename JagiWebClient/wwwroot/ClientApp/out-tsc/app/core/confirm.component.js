"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_1 = require("ngx-bootstrap/modal");
/**
 * ������ܽT�{���u�������A
 * �ϥΤ覡�G
     confirmDelete() {
        const initialState = {
            title: "�T�{�R��",
            description: "�нT�{�O�_�R��",
            action: this.deleting // callback method
        };
        this.modalRef = this.modalService.show(ConfirmComponent, { initialState });
    }
 */
var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.title = "�T�{����";
        this.description = "Are your sure wanna deleted?";
        this.closeBtnName = "����";
        this.action = function () { };
    }
    ConfirmComponent.prototype.confirm = function () {
        this.action();
        this.bsModalRef.hide();
    };
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'confirm',
            templateUrl: "confirm.component.html",
            styles: []
        }),
        __metadata("design:paramtypes", [modal_1.BsModalRef])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map