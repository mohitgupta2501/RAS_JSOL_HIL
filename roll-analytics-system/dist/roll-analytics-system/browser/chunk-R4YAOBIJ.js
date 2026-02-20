import {
  DatetimePickerComponent
} from "./chunk-QKT6VB6X.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-O3VMOCKE.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4FAZ62Q4.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/mill-information/mill-information.component.ts
function MillInformationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function MillInformationComponent_button_13_Template_button_click_0_listener() {
      const stand_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange(stand_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stand_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedStand === stand_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stand_r2, " ");
  }
}
function MillInformationComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 43);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 43);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 43);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 44);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 44);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 44);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 45);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const roll_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275classProp("even", i_r5 % 2 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.rollId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.supplier);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.diameter);
    \u0275\u0275advance();
    \u0275\u0275classProp("no-value", roll_r4.rough === "-");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(roll_r4.rough);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.crownMin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.crownMax);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.totalCycles);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.weightTon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.slabs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.lengthKm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.weightTon2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.slabs2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.lengthKm2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(roll_r4.rollChangeTime);
  }
}
function MillInformationComponent_button_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MillInformationComponent_button_69_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openManualEntryModal());
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Manual Entry ");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MillInformationComponent_div_83_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showManualEntryModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_84_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_84_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_div_24_Template_div_click_0_listener() {
      const o_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.manualEntryForm.rollType = o_r10;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_84_div_24_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.manualEntryForm.rollType === o_r10);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.manualEntryForm.rollType === o_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r10, " ");
  }
}
function MillInformationComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "span", 28);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Manual Entry ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showManualEntryModal = false);
    });
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 53)(11, "label");
    \u0275\u0275text(12, "Roll ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.rollId, $event) || (ctx_r2.manualEntryForm.rollId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 53)(15, "label");
    \u0275\u0275text(16, "Roll Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("manualRollType"));
    });
    \u0275\u0275elementStart(19, "span", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 58);
    \u0275\u0275text(22, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 59);
    \u0275\u0275template(24, MillInformationComponent_div_84_div_24_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 53)(26, "label");
    \u0275\u0275text(27, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.supplier, $event) || (ctx_r2.manualEntryForm.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 53)(30, "label");
    \u0275\u0275text(31, "Diameter mm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.diameterMm, $event) || (ctx_r2.manualEntryForm.diameterMm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 53)(34, "label");
    \u0275\u0275text(35, "Rough uRA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.roughUra, $event) || (ctx_r2.manualEntryForm.roughUra = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 53)(38, "label");
    \u0275\u0275text(39, "Crown Min");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.crownMin, $event) || (ctx_r2.manualEntryForm.crownMin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 53)(42, "label");
    \u0275\u0275text(43, "Crown Max");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.crownMax, $event) || (ctx_r2.manualEntryForm.crownMax = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 53)(46, "label");
    \u0275\u0275text(47, "Total Cycles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_84_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.totalCycles, $event) || (ctx_r2.manualEntryForm.totalCycles = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 64)(50, "label");
    \u0275\u0275text(51, "Roll Change Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "app-datetime-picker", 65);
    \u0275\u0275twoWayListener("valueChange", function MillInformationComponent_div_84_Template_app_datetime_picker_valueChange_52_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualEntryForm.rollChangeTime, $event) || (ctx_r2.manualEntryForm.rollChangeTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "div", 66)(54, "button", 67);
    \u0275\u0275listener("click", function MillInformationComponent_div_84_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showManualEntryModal = false);
    });
    \u0275\u0275text(55, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "button", 68);
    \u0275\u0275text(57, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.rollId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "manualRollType");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.manualEntryForm.rollType);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.rollTypeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.supplier);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.diameterMm);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.roughUra);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.crownMin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.crownMax);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualEntryForm.totalCycles);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.manualEntryForm.rollChangeTime);
  }
}
function MillInformationComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MillInformationComponent_div_85_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDefectModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_div_20_Template_div_click_0_listener() {
      const s_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.defectForm.stand = s_r14;
      ctx_r2.onDefectStandChange();
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_86_div_20_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.defectForm.stand === s_r14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.defectForm.stand === s_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r14, " ");
  }
}
function MillInformationComponent_div_86_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_div_31_Template_div_click_0_listener() {
      const o_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.defectForm.type = o_r16;
      ctx_r2.onDefectTypeChange();
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_86_div_31_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.defectForm.type === o_r16);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.defectForm.type === o_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r16, " ");
  }
}
function MillInformationComponent_div_86_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_div_42_Template_div_click_0_listener() {
      const k_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.defectForm.kind = k_r18;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_86_div_42_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.defectForm.kind === k_r18);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.defectForm.kind === k_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", k_r18, " ");
  }
}
function MillInformationComponent_div_86_div_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_div_53_Template_div_click_0_listener() {
      const p_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.defectForm.position = p_r20;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_86_div_53_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.defectForm.position === p_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.defectForm.position === p_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r20, " ");
  }
}
function MillInformationComponent_div_86_div_64_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_86_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_div_64_Template_div_click_0_listener() {
      const d_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.selectedDefect = d_r22;
      ctx_r2.onDefectChange();
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_86_div_64_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedDefect === d_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedDefect === d_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r22, " ");
  }
}
function MillInformationComponent_div_86_input_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_86_input_65_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.otherDefectText, $event) || (ctx_r2.otherDefectText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function MillInformationComponent_div_86_input_65_Template_input_blur_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addCustomDefect());
    })("keydown.enter", function MillInformationComponent_div_86_input_65_Template_input_keydown_enter_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addCustomDefect());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.otherDefectText);
  }
}
function MillInformationComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 72)(3, "span", 28);
    \u0275\u0275text(4, "bug_report");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Report Defect ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDefectModal = false);
    });
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 52)(10, "div", 53)(11, "label");
    \u0275\u0275text(12, "Stand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(14, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("defectStand"));
    });
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 58);
    \u0275\u0275text(18, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 59);
    \u0275\u0275template(20, MillInformationComponent_div_86_div_20_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 53)(22, "label");
    \u0275\u0275text(23, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(25, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("defectType"));
    });
    \u0275\u0275elementStart(26, "span", 57);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 58);
    \u0275\u0275text(29, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 59);
    \u0275\u0275template(31, MillInformationComponent_div_86_div_31_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 53)(33, "label");
    \u0275\u0275text(34, "Kind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_35_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(36, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("defectKind"));
    });
    \u0275\u0275elementStart(37, "span", 57);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 58);
    \u0275\u0275text(40, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 59);
    \u0275\u0275template(42, MillInformationComponent_div_86_div_42_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 53)(44, "label");
    \u0275\u0275text(45, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_46_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(47, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("defectPosition"));
    });
    \u0275\u0275elementStart(48, "span", 57);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 58);
    \u0275\u0275text(51, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 59);
    \u0275\u0275template(53, MillInformationComponent_div_86_div_53_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 64)(55, "label");
    \u0275\u0275text(56, "Defect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_57_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(58, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_div_click_58_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("defect"));
    });
    \u0275\u0275elementStart(59, "span", 57);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 58);
    \u0275\u0275text(62, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 59);
    \u0275\u0275template(64, MillInformationComponent_div_86_div_64_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(65, MillInformationComponent_div_86_input_65_Template, 1, 1, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 64)(67, "label");
    \u0275\u0275text(68, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "textarea", 74);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_86_Template_textarea_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defectForm.reason, $event) || (ctx_r2.defectForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 64)(71, "label");
    \u0275\u0275text(72, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "app-datetime-picker", 65);
    \u0275\u0275twoWayListener("valueChange", function MillInformationComponent_div_86_Template_app_datetime_picker_valueChange_73_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.defectForm.dateTime, $event) || (ctx_r2.defectForm.dateTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 66)(75, "button", 67);
    \u0275\u0275listener("click", function MillInformationComponent_div_86_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDefectModal = false);
    });
    \u0275\u0275text(76, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 68);
    \u0275\u0275text(78, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "defectStand");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.defectForm.stand);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.stands);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "defectType");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.defectForm.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.defectTypeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "defectKind");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.defectForm.kind);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.kindOptionsForDefect);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "defectPosition");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.defectForm.position);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.positionOptionsForDefect);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "defect");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedDefect || "Select...");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.defectOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showOtherDefectInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.defectForm.reason);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.defectForm.dateTime);
  }
}
function MillInformationComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275listener("click", function MillInformationComponent_div_87_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDowntimeModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_88_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_88_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_div_24_Template_div_click_0_listener() {
      const o_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.downtimeForm.millSection = o_r27;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_88_div_24_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.downtimeForm.millSection === o_r27);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.downtimeForm.millSection === o_r27);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r27, " ");
  }
}
function MillInformationComponent_div_88_div_61_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_88_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_div_61_Template_div_click_0_listener() {
      const o_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.downtimeForm.downtimeType = o_r29;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_88_div_61_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.downtimeForm.downtimeType === o_r29);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.downtimeForm.downtimeType === o_r29);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r29, " ");
  }
}
function MillInformationComponent_div_88_div_72_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MillInformationComponent_div_88_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_div_72_Template_div_click_0_listener() {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.downtimeForm.reason = r_r31;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, MillInformationComponent_div_88_div_72_span_1_Template, 2, 0, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.downtimeForm.reason === r_r31);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.downtimeForm.reason === r_r31);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r31, " ");
  }
}
function MillInformationComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 77)(3, "span", 28);
    \u0275\u0275text(4, "timer_off");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Log Downtime ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 51);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDowntimeModal = false);
    });
    \u0275\u0275elementStart(7, "span", 28);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 78)(10, "div", 53)(11, "label");
    \u0275\u0275text(12, "Mill ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_88_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.millId, $event) || (ctx_r2.downtimeForm.millId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 53)(15, "label");
    \u0275\u0275text(16, "Mill Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_17_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(18, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_18_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("downtimeSection"));
    });
    \u0275\u0275elementStart(19, "span", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 58);
    \u0275\u0275text(22, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 59);
    \u0275\u0275template(24, MillInformationComponent_div_88_div_24_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 64)(26, "label");
    \u0275\u0275text(27, "Downtime Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "app-datetime-picker", 65);
    \u0275\u0275twoWayListener("valueChange", function MillInformationComponent_div_88_Template_app_datetime_picker_valueChange_28_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.startTime, $event) || (ctx_r2.downtimeForm.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 79);
    \u0275\u0275text(30, "Format: YYYYMMDDHHmmss e.g. 20260209150536");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 64)(32, "label");
    \u0275\u0275text(33, "Downtime Actual Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "app-datetime-picker", 65);
    \u0275\u0275twoWayListener("valueChange", function MillInformationComponent_div_88_Template_app_datetime_picker_valueChange_34_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.actualStartTime, $event) || (ctx_r2.downtimeForm.actualStartTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 79);
    \u0275\u0275text(36, "Format: YYYYMMDDHHmmss e.g. 20260209150536");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 53)(38, "label");
    \u0275\u0275text(39, "Downtime Planned Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 80)(41, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_88_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.plannedDurationHrs, $event) || (ctx_r2.downtimeForm.plannedDurationHrs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 82);
    \u0275\u0275text(43, "Hrs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 53)(45, "label");
    \u0275\u0275text(46, "Downtime Actual Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 80)(48, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_88_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.actualDurationHrs, $event) || (ctx_r2.downtimeForm.actualDurationHrs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 82);
    \u0275\u0275text(50, "Hrs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 53)(52, "label");
    \u0275\u0275text(53, "Downtime Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_54_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(55, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("downtimeType"));
    });
    \u0275\u0275elementStart(56, "span", 57);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 58);
    \u0275\u0275text(59, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 59);
    \u0275\u0275template(61, MillInformationComponent_div_88_div_61_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 64)(63, "label");
    \u0275\u0275text(64, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 55);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_65_listener($event) {
      \u0275\u0275restoreView(_r25);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(66, "div", 56);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_div_click_66_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("downtimeReason"));
    });
    \u0275\u0275elementStart(67, "span", 57);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 58);
    \u0275\u0275text(70, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 59);
    \u0275\u0275template(72, MillInformationComponent_div_88_div_72_Template, 3, 4, "div", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 64)(74, "label");
    \u0275\u0275text(75, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "textarea", 84);
    \u0275\u0275twoWayListener("ngModelChange", function MillInformationComponent_div_88_Template_textarea_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.downtimeForm.remarks, $event) || (ctx_r2.downtimeForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "span", 85);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 66)(80, "button", 67);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showDowntimeModal = false);
    });
    \u0275\u0275text(81, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 86);
    \u0275\u0275listener("click", function MillInformationComponent_div_88_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitDowntime());
    });
    \u0275\u0275text(83, "Submit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.downtimeForm.millId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "downtimeSection");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.downtimeForm.millSection);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.millSectionOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.downtimeForm.startTime);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("value", ctx_r2.downtimeForm.actualStartTime);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.downtimeForm.plannedDurationHrs);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.downtimeForm.actualDurationHrs);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "downtimeType");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.downtimeForm.downtimeType);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.downtimeTypeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "downtimeReason");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.downtimeForm.reason);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.downtimeReasonOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.downtimeForm.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.remarksLength, "/", ctx_r2.maxRemarksLength, "");
  }
}
var MillInformationComponent = class _MillInformationComponent {
  constructor() {
    this.stands = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.selectedStand = "E1";
    this.rollInformation = [];
    this.panelCollapsed = true;
    this.manualEntryStands = ["E1", "E2", "F1e", "PR1", "PR2", "PR3"];
    this.showManualEntryModal = false;
    this.showDefectModal = false;
    this.showDowntimeModal = false;
    this.showSuccessToast = false;
    this.openDropdown = null;
    this.manualEntryForm = {
      rollId: "",
      rollType: "WR",
      supplier: "",
      diameterMm: null,
      roughUra: null,
      crownMin: null,
      crownMax: null,
      totalCycles: null,
      rollChangeTime: ""
    };
    this.rollTypeOptions = ["WR", "BUR", "IMR", "Edger Roll", "Pinch Roll"];
    this.defectForm = {
      stand: "E1",
      type: "Roll",
      kind: "WR",
      position: "Drive Side",
      defect: "",
      reason: "",
      dateTime: ""
    };
    this.defectOptions = ["Crack", "Spall", "Wear", "Chipping", "Surface Damage", "Dimensional Error", "Other"];
    this.selectedDefect = "";
    this.showOtherDefectInput = false;
    this.otherDefectText = "";
    this.defectTypeOptions = ["Roll", "Choke", "Bearing"];
    this.kindByType = {
      Roll: ["WR", "BUR", "IMR", "Edger Roll", "Pinch Roll"],
      Choke: ["Inner Choke", "Outer Choke"],
      Bearing: ["Drive Side", "Operator Side"]
    };
    this.downtimeForm = {
      millId: "",
      millSection: "Roughing",
      startTime: "",
      // YYYYMMDDHHmmss
      actualStartTime: "",
      // YYYYMMDDHHmmss
      plannedDurationHrs: null,
      actualDurationHrs: null,
      downtimeType: "Planned",
      reason: "Scheduled Maintenance",
      remarks: ""
    };
    this.millSectionOptions = ["Roughing", "Edger", "Finishing", "Skin Pass"];
    this.downtimeTypeOptions = ["Planned", "Un-Planned"];
    this.downtimeReasonOptions = [
      "Roll/Choke Change",
      "Mill Overhaul",
      "Bearing Failure",
      "Electrical Fault",
      "Mechanical Fault",
      "Scheduled Maintenance",
      "Other"
    ];
    this.maxRemarksLength = 50;
    this.group1 = [
      { name: "Edger Roll", position: "OS", rollId: "ERO_898", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Edger Roll", position: "DS", rollId: "ERD_895", supplier: "Supplier3", diameter: 1523.54, rough: "-", crownMin: 121.1, crownMax: 124.9, totalCycles: 2, weightTon: 180, slabs: 5, lengthKm: 610, weightTon2: 300, slabs2: 9, lengthKm2: 720, rollChangeTime: "26/02/10 10:35" },
      { name: "Choke", position: "OST", rollId: "EROT_455", supplier: "Supplier3", diameter: 1112.56, rough: "-", crownMin: 119.5, crownMax: 124, totalCycles: 5, weightTon: 720, slabs: 18, lengthKm: 1450, weightTon2: 890, slabs2: 22, lengthKm2: 1700, rollChangeTime: "26/01/06 05:45" },
      { name: "Choke", position: "DST", rollId: "EROB_562", supplier: "Supplier4", diameter: 1025.65, rough: 2.3, crownMin: 122, crownMax: 126.3, totalCycles: 4, weightTon: 410, slabs: 10, lengthKm: 980, weightTon2: 600, slabs2: 14, lengthKm2: 1200, rollChangeTime: "26/01/06 05:45" },
      { name: "Choke", position: "OSB", rollId: "ERDT_635", supplier: "Supplier4", diameter: 1265.89, rough: "-", crownMin: 118.7, crownMax: 123.6, totalCycles: 6, weightTon: 150, slabs: 4, lengthKm: 260, weightTon2: 280, slabs2: 7, lengthKm2: 390, rollChangeTime: "26/02/10 09:59" },
      { name: "Choke", position: "DSB", rollId: "ERDB_562", supplier: "Supplier5", diameter: 1458.65, rough: "-", crownMin: 121, crownMax: 127, totalCycles: 1, weightTon: 200, slabs: 6, lengthKm: 310, weightTon2: 350, slabs2: 8, lengthKm2: 470, rollChangeTime: "26/02/10 09:59" }
    ];
    this.group2 = [
      { name: "Work Roll", position: "Top", rollId: "WRT_782", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Roll", position: "Bottom", rollId: "WRB_256", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Backup Roll", position: "Top", rollId: "BRT_856", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Backup Roll", position: "Bottom", rollId: "BRB_125", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Choke", position: "Top", rollId: "WRTO_265", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Choke", position: "Top", rollId: "WRTD_365", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Choke", position: "OS", rollId: "WRBO_589", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Choke", position: "OS", rollId: "WRBD_365", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Backup Choke", position: "Top", rollId: "BRTO_356", supplier: "Supplier3", diameter: 1523.54, rough: "-", crownMin: 121.1, crownMax: 124.9, totalCycles: 2, weightTon: 180, slabs: 5, lengthKm: 610, weightTon2: 300, slabs2: 9, lengthKm2: 720, rollChangeTime: "26/02/10 10:35" },
      { name: "Backup Choke", position: "Top", rollId: "BRTD_658", supplier: "Supplier3", diameter: 1112.56, rough: "-", crownMin: 119.5, crownMax: 124, totalCycles: 5, weightTon: 720, slabs: 18, lengthKm: 1450, weightTon2: 890, slabs2: 22, lengthKm2: 1700, rollChangeTime: "26/01/06 05:45" },
      { name: "Backup Choke", position: "Bottom", rollId: "BRBO_457", supplier: "Supplier4", diameter: 1025.65, rough: 2.3, crownMin: 122, crownMax: 126.3, totalCycles: 4, weightTon: 410, slabs: 10, lengthKm: 980, weightTon2: 600, slabs2: 14, lengthKm2: 1200, rollChangeTime: "26/01/06 05:45" },
      { name: "Backup Choke", position: "Bottom", rollId: "BRBD_235", supplier: "Supplier4", diameter: 1265.89, rough: "-", crownMin: 118.7, crownMax: 123.6, totalCycles: 6, weightTon: 150, slabs: 4, lengthKm: 260, weightTon2: 280, slabs2: 7, lengthKm2: 390, rollChangeTime: "26/02/10 09:59" }
    ];
    this.group3 = [
      { name: "Pinch Roll", position: "Top", rollId: "PRT_568", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Pinch Roll", position: "Bottom", rollId: "PRB_762", supplier: "Supplier3", diameter: 1523.54, rough: "-", crownMin: 121.1, crownMax: 124.9, totalCycles: 2, weightTon: 180, slabs: 5, lengthKm: 610, weightTon2: 300, slabs2: 9, lengthKm2: 720, rollChangeTime: "26/02/10 10:35" },
      { name: "Pinch Roll", position: "OS", rollId: "PRTO_455", supplier: "Supplier3", diameter: 1112.56, rough: "-", crownMin: 119.5, crownMax: 124, totalCycles: 5, weightTon: 720, slabs: 18, lengthKm: 1450, weightTon2: 890, slabs2: 22, lengthKm2: 1700, rollChangeTime: "26/01/06 05:45" },
      { name: "Pinch Roll", position: "DS", rollId: "PRTD_562", supplier: "Supplier4", diameter: 1025.65, rough: 2.3, crownMin: 122, crownMax: 126.3, totalCycles: 4, weightTon: 410, slabs: 10, lengthKm: 980, weightTon2: 600, slabs2: 14, lengthKm2: 1200, rollChangeTime: "26/01/06 05:45" },
      { name: "Pinch Roll", position: "OS", rollId: "PRBO_635", supplier: "Supplier4", diameter: 1265.89, rough: "-", crownMin: 118.7, crownMax: 123.6, totalCycles: 6, weightTon: 150, slabs: 4, lengthKm: 260, weightTon2: 280, slabs2: 7, lengthKm2: 390, rollChangeTime: "26/02/10 09:59" },
      { name: "Pinch Roll", position: "DS", rollId: "PRBD_562", supplier: "Supplier5", diameter: 1458.65, rough: "-", crownMin: 121, crownMax: 127, totalCycles: 1, weightTon: 200, slabs: 6, lengthKm: 310, weightTon2: 350, slabs2: 8, lengthKm2: 470, rollChangeTime: "26/02/10 09:59" }
    ];
    this.group4 = [
      { name: "Work Roll", position: "Top", rollId: "WRTO_892", supplier: "Supplier8", diameter: 1212.25, rough: "-", crownMin: 10.2, crownMax: 125.4, totalCycles: 7, weightTon: 350, slabs: 12, lengthKm: 820, weightTon2: 500, slabs2: 15, lengthKm2: 980, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Roll", position: "Bottom", rollId: "WRTD_123", supplier: "Supplier3", diameter: 1523.54, rough: "-", crownMin: 121.1, crownMax: 124.9, totalCycles: 2, weightTon: 180, slabs: 5, lengthKm: 610, weightTon2: 300, slabs2: 9, lengthKm2: 720, rollChangeTime: "26/02/10 10:35" },
      { name: "Work Choke", position: "Top", rollId: "WRBO_455", supplier: "Supplier3", diameter: 1112.56, rough: "-", crownMin: 119.5, crownMax: 124, totalCycles: 5, weightTon: 720, slabs: 18, lengthKm: 1450, weightTon2: 890, slabs2: 22, lengthKm2: 1700, rollChangeTime: "26/01/06 05:45" },
      { name: "Work Choke", position: "Top", rollId: "WRBD_659", supplier: "Supplier4", diameter: 1025.65, rough: 2.3, crownMin: 122, crownMax: 126.3, totalCycles: 4, weightTon: 410, slabs: 10, lengthKm: 980, weightTon2: 600, slabs2: 14, lengthKm2: 1200, rollChangeTime: "26/01/06 05:45" },
      { name: "Work Choke", position: "Bottom", rollId: "PRBO_635", supplier: "Supplier4", diameter: 1265.89, rough: "-", crownMin: 118.7, crownMax: 123.6, totalCycles: 6, weightTon: 150, slabs: 4, lengthKm: 260, weightTon2: 280, slabs2: 7, lengthKm2: 390, rollChangeTime: "26/02/10 09:59" },
      { name: "Work Choke", position: "Bottom", rollId: "PRBD_562", supplier: "Supplier5", diameter: 1458.65, rough: "-", crownMin: 121, crownMax: 127, totalCycles: 1, weightTon: 200, slabs: 6, lengthKm: 310, weightTon2: 350, slabs2: 8, lengthKm2: 470, rollChangeTime: "26/02/10 09:59" }
    ];
    this.positionOptionsForDefect = ["Drive Side", "Operator Side"];
  }
  get showManualEntryButton() {
    return this.manualEntryStands.includes(this.selectedStand);
  }
  ngOnInit() {
    this.rollInformation = this.getGroupForStand("E1");
    this.defectForm.dateTime = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
  }
  getGroupForStand(stand) {
    if (["E1", "E2", "F1e"].includes(stand))
      return [...this.group1];
    if (["R2", "F1", "F2", "F3", "F4", "F5", "F6", "F7"].includes(stand))
      return [...this.group2];
    if (["PR1", "PR2", "PR3"].includes(stand))
      return [...this.group3];
    if (stand === "R1")
      return [...this.group4];
    return [...this.group1];
  }
  onTabChange(stand) {
    this.selectedStand = stand;
    this.rollInformation = this.getGroupForStand(stand);
  }
  openManualEntryModal() {
    if (!this.manualEntryStands.includes(this.selectedStand))
      return;
    this.manualEntryForm = {
      rollId: "",
      rollType: "WR",
      supplier: "",
      diameterMm: null,
      roughUra: null,
      crownMin: null,
      crownMax: null,
      totalCycles: null,
      rollChangeTime: ""
    };
    this.showManualEntryModal = true;
  }
  openDefectModal() {
    this.defectForm.stand = this.selectedStand;
    this.defectForm.type = "Roll";
    this.defectForm.kind = "WR";
    this.updateDefectPositionOptions();
    this.defectForm.position = this.positionOptionsForDefect[0] || "";
    this.defectForm.reason = "";
    this.selectedDefect = "";
    this.defectForm.dateTime = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
    this.showOtherDefectInput = false;
    this.otherDefectText = "";
    this.showDefectModal = true;
  }
  openDowntimeModal() {
    this.downtimeForm.millId = this.selectedStand;
    this.downtimeForm.millSection = "Roughing";
    this.downtimeForm.startTime = "";
    this.downtimeForm.actualStartTime = "";
    this.downtimeForm.plannedDurationHrs = null;
    this.downtimeForm.actualDurationHrs = null;
    this.downtimeForm.downtimeType = "Planned";
    this.downtimeForm.reason = "Scheduled Maintenance";
    this.downtimeForm.remarks = "";
    this.showDowntimeModal = true;
  }
  get kindOptionsForDefect() {
    return this.kindByType[this.defectForm.type] || [];
  }
  updateDefectPositionOptions() {
    const stand = this.defectForm.stand;
    const type = this.defectForm.type;
    if (type === "Choke") {
      this.positionOptionsForDefect = ["Drive Top", "Drive Bottom", "Operator Top", "Operator Bottom"];
    } else if (type === "Roll") {
      if (["E1", "E2", "F1e"].includes(stand)) {
        this.positionOptionsForDefect = ["Drive Side", "Operator Side"];
      } else {
        this.positionOptionsForDefect = ["Top", "Bottom"];
      }
    } else {
      this.positionOptionsForDefect = ["Top", "Bottom"];
    }
  }
  onDefectTypeChange() {
    this.defectForm.kind = this.kindOptionsForDefect[0] || "";
    this.updateDefectPositionOptions();
    this.defectForm.position = this.positionOptionsForDefect[0] || "";
  }
  onDefectStandChange() {
    this.updateDefectPositionOptions();
    this.defectForm.position = this.positionOptionsForDefect[0] || "";
  }
  onDefectChange() {
    if (this.selectedDefect === "Other") {
      this.showOtherDefectInput = true;
      this.defectForm.defect = "";
    } else {
      this.showOtherDefectInput = false;
      this.defectForm.defect = this.selectedDefect;
    }
  }
  addCustomDefect() {
    const text = this.otherDefectText.trim();
    if (text) {
      const idx = this.defectOptions.indexOf("Other");
      if (idx >= 0)
        this.defectOptions.splice(idx, 0, text);
      this.selectedDefect = text;
      this.defectForm.defect = text;
      this.showOtherDefectInput = false;
      this.otherDefectText = "";
    }
  }
  toggleDropdown(name) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  closeAll() {
    this.openDropdown = null;
  }
  get remarksLength() {
    return (this.downtimeForm.remarks || "").length;
  }
  submitDowntime() {
    this.showDowntimeModal = false;
    this.showSuccessToast = true;
    setTimeout(() => this.showSuccessToast = false, 3500);
  }
  static {
    this.\u0275fac = function MillInformationComponent_Factory(t) {
      return new (t || _MillInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MillInformationComponent, selectors: [["app-mill-information"]], hostBindings: function MillInformationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MillInformationComponent_click_HostBindingHandler() {
          return ctx.closeAll();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 89, vars: 12, consts: [[1, "mill-info-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "image-card"], ["src", "assets/login/Mill_Information.png", "alt", "Mill Layout Diagram", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex';", 1, "mill-image"], [1, "image-placeholder", 2, "display", "none"], [1, "tabs-row"], ["type", "button", "class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "table-card"], [1, "card-header"], [1, "header-left"], [1, "material-icons", "card-icon"], [1, "card-title"], [1, "stand-badge"], [1, "table-wrapper"], [1, "roll-table"], [1, "header-row-1"], ["rowspan", "2"], ["colspan", "2", 1, "crown-header"], ["colspan", "3", 1, "current-header"], ["colspan", "3", 1, "cumulative-header"], [1, "header-row-2"], [3, "even", 4, "ngFor", "ngForOf"], [1, "action-buttons"], ["type", "button", "class", "action-btn manual-entry-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "action-btn", "defect-btn", 3, "click"], [1, "material-icons"], ["type", "button", 1, "action-btn", "downtime-btn", 3, "click"], [1, "success-toast"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "mill-modal", 3, "click", 4, "ngIf"], ["class", "mill-modal downtime-modal", 3, "click", 4, "ngIf"], ["type", "button", 1, "tab-button", 3, "click"], [1, "col-type"], [1, "col-position"], [1, "col-roll-id"], [1, "col-supplier"], [1, "col-diameter"], [1, "col-rough"], [1, "col-crown"], [1, "col-cycles"], [1, "col-current"], [1, "col-cumulative"], [1, "col-time"], ["type", "button", 1, "action-btn", "manual-entry-btn", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "mill-modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 3, "click"], [1, "modal-body"], [1, "form-field"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "custom-select", 3, "click"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.001", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", 3, "ngModelChange", "ngModel"], [1, "form-field", "full-width"], ["label", "", 3, "valueChange", "value"], [1, "modal-footer"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "button", 1, "submit-btn"], [1, "select-option", 3, "click"], ["class", "option-check material-icons", 4, "ngIf"], [1, "option-check", "material-icons"], [1, "modal-title", "defect-title"], ["type", "text", "class", "other-defect-input", "placeholder", "Describe defect...", 3, "ngModel", "ngModelChange", "blur", "keydown.enter", 4, "ngIf"], ["rows", "3", "placeholder", "Enter reason for defect...", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Describe defect...", 1, "other-defect-input", 3, "ngModelChange", "blur", "keydown.enter", "ngModel"], [1, "mill-modal", "downtime-modal", 3, "click"], [1, "modal-title", "downtime-title"], [1, "modal-body", "form-grid-2"], [1, "dt-hint"], [1, "input-with-unit"], ["type", "number", "max", "9999", "placeholder", "Hrs", 3, "ngModelChange", "ngModel"], [1, "unit-badge"], ["type", "number", "placeholder", "Hrs", 3, "ngModelChange", "ngModel"], ["rows", "3", "maxlength", "50", "placeholder", "Max 50 characters", 3, "ngModelChange", "ngModel"], [1, "char-counter"], ["type", "button", 1, "submit-btn", 3, "click"]], template: function MillInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Mill Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275element(9, "img", 6);
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275text(11, " Mill Layout Diagram ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275template(13, MillInformationComponent_button_13_Template, 2, 3, "button", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "span", 13);
        \u0275\u0275text(18, "table_chart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "Roll Information");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 15);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 16)(24, "table", 17)(25, "thead")(26, "tr", 18)(27, "th", 19);
        \u0275\u0275text(28, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th", 19);
        \u0275\u0275text(30, "Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "th", 19);
        \u0275\u0275text(32, "Roll ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th", 19);
        \u0275\u0275text(34, "Supplier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th", 19);
        \u0275\u0275text(36, "Diameter (mm)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th", 19);
        \u0275\u0275text(38, "Rough (uRA)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th", 20);
        \u0275\u0275text(40, "Crown (Micron)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th", 19);
        \u0275\u0275text(42, "Total Cycles");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th", 21);
        \u0275\u0275text(44, "Current Accumulation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th", 22);
        \u0275\u0275text(46, "Cumulative Accumulation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th", 19);
        \u0275\u0275text(48, "Roll Change Time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "tr", 23)(50, "th");
        \u0275\u0275text(51, "Min");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Max");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Weight (Ton)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th");
        \u0275\u0275text(57, "Slabs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Length (Km)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Weight (Ton)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "th");
        \u0275\u0275text(63, "Slabs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "th");
        \u0275\u0275text(65, "Length (Km)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(66, "tbody");
        \u0275\u0275template(67, MillInformationComponent_tr_67_Template, 33, 20, "tr", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "div", 25);
        \u0275\u0275template(69, MillInformationComponent_button_69_Template, 4, 0, "button", 26);
        \u0275\u0275elementStart(70, "button", 27);
        \u0275\u0275listener("click", function MillInformationComponent_Template_button_click_70_listener() {
          return ctx.openDefectModal();
        });
        \u0275\u0275elementStart(71, "span", 28);
        \u0275\u0275text(72, "bug_report");
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, " Defect ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 29);
        \u0275\u0275listener("click", function MillInformationComponent_Template_button_click_74_listener() {
          return ctx.openDowntimeModal();
        });
        \u0275\u0275elementStart(75, "span", 28);
        \u0275\u0275text(76, "timer_off");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " Downtime ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 30)(79, "span", 28);
        \u0275\u0275text(80, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span");
        \u0275\u0275text(82, "Entry submitted successfully!");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(83, MillInformationComponent_div_83_Template, 1, 0, "div", 31)(84, MillInformationComponent_div_84_Template, 58, 12, "div", 32)(85, MillInformationComponent_div_85_Template, 1, 0, "div", 31)(86, MillInformationComponent_div_86_Template, 79, 23, "div", 32)(87, MillInformationComponent_div_87_Template, 1, 0, "div", 31)(88, MillInformationComponent_div_88_Template, 84, 20, "div", 33);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.stands);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", ctx.selectedStand, " Stand");
        \u0275\u0275advance(45);
        \u0275\u0275property("ngForOf", ctx.rollInformation);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.showManualEntryButton);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("visible", ctx.showSuccessToast);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.showManualEntryModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showManualEntryModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDefectModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDefectModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDowntimeModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDowntimeModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MaxLengthValidator, MaxValidator, NgModel, DatetimePickerComponent], styles: ['\n\n.mill-info-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.image-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 16px;\n  overflow-x: auto;\n}\n.mill-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  min-width: 1200px;\n  display: block;\n  margin: 0 auto;\n}\n.image-placeholder[_ngcontent-%COMP%] {\n  height: 120px;\n  background: rgba(0, 212, 255, 0.05);\n  border: 2px dashed rgba(0, 212, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3D5175;\n  font-size: 14px;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.tab-button[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 8px 8px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-bottom: none;\n  background: rgba(255, 255, 255, 0.03);\n  color: #7B90B8;\n  margin-right: 3px;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  color: #E8F0FE;\n  border-color: rgba(0, 212, 255, 0.15);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2),\n      rgba(37, 99, 235, 0.08));\n  color: #00D4FF;\n  border-color: rgba(0, 212, 255, 0.25);\n  border-bottom: 2px solid #00D4FF;\n  font-weight: 700;\n}\n.table-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 0 14px 14px 14px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 212, 255, 0.03);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #E8F0FE;\n}\n.stand-badge[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.15);\n  border: 1px solid rgba(37, 99, 235, 0.3);\n  border-radius: 8px;\n  padding: 4px 16px;\n  color: #00D4FF;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 500px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #0a1020;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #1e3a6e;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #2563EB;\n}\n.roll-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 2200px;\n  border-collapse: collapse;\n  font-family: "Inter", sans-serif;\n}\n.roll-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.header-row-1[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.08);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.12);\n}\n.header-row-1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.header-row-1[_ngcontent-%COMP%]   .crown-header[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.header-row-1[_ngcontent-%COMP%]   .current-header[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.header-row-1[_ngcontent-%COMP%]   .cumulative-header[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.header-row-2[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.04);\n}\n.header-row-2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.18s;\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.roll-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: center;\n  font-size: 13px;\n  color: #E8F0FE;\n}\n.col-type[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.col-position[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.col-roll-id[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n  cursor: pointer;\n}\n.col-roll-id[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.col-supplier[_ngcontent-%COMP%] {\n  color: #94A3B8;\n}\n.col-diameter[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-rough[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-rough.no-value[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.col-crown[_ngcontent-%COMP%] {\n  color: #A78BFA;\n  font-weight: 500;\n}\n.col-cycles[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n}\n.col-current[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-cumulative[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-time[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  border-top: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: Inter, sans-serif;\n}\n.action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.manual-entry-btn[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.1);\n  border: 1px solid rgba(0, 212, 255, 0.3);\n  color: #00D4FF;\n}\n.manual-entry-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.18);\n}\n.defect-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.1);\n  border: 1px solid rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.defect-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 69, 96, 0.18);\n}\n.downtime-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.1);\n  border: 1px solid rgba(255, 140, 66, 0.3);\n  color: #FF8C42;\n}\n.downtime-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 140, 66, 0.18);\n}\n.success-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 60px;\n  right: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #064e3b,\n      #065f46);\n  border: 1px solid rgba(0, 229, 160, 0.4);\n  border-radius: 12px;\n  padding: 14px 22px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #00E5A0;\n  font-size: 14px;\n  font-weight: 600;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 229, 160, 0.1);\n  z-index: 2000;\n  transform: translateY(20px);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.success-toast[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.success-toast.visible[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.75);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.mill-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 520px;\n  max-width: 95vw;\n  max-height: 85vh;\n  overflow-y: auto;\n  z-index: 1001;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n  background: rgba(0, 212, 255, 0.03);\n  border-radius: 16px 16px 0 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 20px;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-title.defect-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-title.downtime-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FFB800;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #1A2844;\n  background: rgba(255, 255, 255, 0.04);\n  color: #7B90B8;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.4);\n  color: #FF4560;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  padding: 20px 22px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #3D5175;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-family: Inter, sans-serif;\n  outline: none;\n  transition: border 0.2s, box-shadow 0.2s;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder, .mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #7B90B8;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #0F1A2E;\n  color: #E8F0FE;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 60px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .other-defect-input[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .readonly-field[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.03);\n  color: #7B90B8;\n  cursor: default;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .duration-display[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  font-size: 13px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field.form-grid-2[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .dt-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #3D5175;\n  margin-top: 4px;\n  display: block;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .input-with-unit[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 8px 0 0 8px;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .unit-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.08);\n  border: 1px solid rgba(0, 212, 255, 0.15);\n  border-radius: 0 8px 8px 0;\n  padding: 10px 12px;\n  color: #00D4FF;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.mill-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .char-counter[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #3D5175;\n  margin-top: 4px;\n  display: block;\n}\n.mill-modal[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.mill-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid #1A2844;\n  border-radius: 8px;\n  padding: 9px 22px;\n  color: #7B90B8;\n  font-size: 13px;\n  font-family: Inter, sans-serif;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.mill-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.mill-modal[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563EB,\n      #1d4ed8);\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: Inter, sans-serif;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);\n  transition: filter 0.2s;\n}\n.mill-modal[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #0F1A2E;\n  border: 1px solid #1A2844;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s;\n}\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 140, 66, 0.05);\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF8C42;\n}\n.accordion-title[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #3D5175;\n  font-size: 13px;\n}\n.accordion-chevron[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7B90B8;\n}\n/*# sourceMappingURL=mill-information.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MillInformationComponent, { className: "MillInformationComponent", filePath: "src\\app\\features\\mill-information\\mill-information.component.ts", lineNumber: 32 });
})();
export {
  MillInformationComponent
};
//# sourceMappingURL=chunk-R4YAOBIJ.js.map
