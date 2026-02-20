import {
  NgxEchartsDirective,
  NgxEchartsModule
} from "./chunk-WWKEGZW6.js";
import {
  DatetimePickerComponent
} from "./chunk-QKT6VB6X.js";
import {
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4FAZ62Q4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GLLL6ZVE.js";

// src/app/features/roll-details/roll-details.component.ts
function RollDetailsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_19_Template_div_click_0_listener() {
      const mill_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMill(mill_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mill_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedMill === mill_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mill_r2, " ");
  }
}
function RollDetailsComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_30_Template_div_click_0_listener() {
      const roll_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRoll(roll_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const roll_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedRoll === roll_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", roll_r5, " ");
  }
}
function RollDetailsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_41_Template_div_click_0_listener() {
      const pos_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPosition(pos_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pos_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedPosition === pos_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pos_r7, " ");
  }
}
function RollDetailsComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.chartOptions)("autoResize", true);
  }
}
function RollDetailsComponent_div_83_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 50);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 51);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 52);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 53);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 55);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 56);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("even", i_r10 % 2 === 1)("last-row", i_r10 === ctx_r2.rollUsageData.length - 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.cycleNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.plant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.rolledLength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.diaStart);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.diaEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.maintCost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.remarks);
    \u0275\u0275advance();
    \u0275\u0275classProp("yes", row_r9.spall === "Yes")("no", row_r9.spall === "No");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.spall);
    \u0275\u0275advance();
    \u0275\u0275classProp("yes", row_r9.crack === "Yes")("no", row_r9.crack === "No");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.crack);
    \u0275\u0275advance();
    \u0275\u0275classProp("good", row_r9.uniformCirc === "Good")("average", row_r9.uniformCirc === "Average")("poor", row_r9.uniformCirc === "Poor");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.uniformCirc);
    \u0275\u0275advance();
    \u0275\u0275classProp("yes", row_r9.fitForUse === "Yes")("no", row_r9.fitForUse === "No");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.fitForUse);
  }
}
function RollDetailsComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 35)(2, "table", 36)(3, "thead")(4, "tr")(5, "th");
    \u0275\u0275text(6, "Cycle No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Plant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Rolled Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Cycle Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cycle End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Diameter(Start)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Diameter(End)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Maint Cost(MINR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Spall");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Crack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Uniform Circulation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Fit For Use");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, RollDetailsComponent_div_83_tr_34_Template, 29, 36, "tr", 37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 38)(36, "button", 39);
    \u0275\u0275listener("click", function RollDetailsComponent_div_83_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal());
    });
    \u0275\u0275elementStart(37, "span", 40);
    \u0275\u0275text(38, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "Edit Last Row");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 41)(42, "button", 42);
    \u0275\u0275listener("click", function RollDetailsComponent_div_83_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "button", 43);
    \u0275\u0275listener("click", function RollDetailsComponent_div_83_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(1));
    });
    \u0275\u0275text(46, " Page 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 42);
    \u0275\u0275listener("click", function RollDetailsComponent_div_83_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Next");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx_r2.rollUsageData);
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === ctx_r2.totalPages);
  }
}
function RollDetailsComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function RollDetailsComponent_div_84_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showEditModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function RollDetailsComponent_div_85_div_36_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RollDetailsComponent_div_85_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_div_36_Template_div_click_0_listener() {
      const o_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editForm.spall = o_r14;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, RollDetailsComponent_div_85_div_36_span_1_Template, 2, 0, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.editForm.spall === o_r14);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editForm.spall === o_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r14, " ");
  }
}
function RollDetailsComponent_div_85_div_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RollDetailsComponent_div_85_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_div_47_Template_div_click_0_listener() {
      const o_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editForm.crack = o_r16;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, RollDetailsComponent_div_85_div_47_span_1_Template, 2, 0, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.editForm.crack === o_r16);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editForm.crack === o_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r16, " ");
  }
}
function RollDetailsComponent_div_85_div_58_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RollDetailsComponent_div_85_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_div_58_Template_div_click_0_listener() {
      const o_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editForm.uniformCirc = o_r18;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, RollDetailsComponent_div_85_div_58_span_1_Template, 2, 0, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.editForm.uniformCirc === o_r18);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editForm.uniformCirc === o_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r18, " ");
  }
}
function RollDetailsComponent_div_85_div_69_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 74);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function RollDetailsComponent_div_85_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_div_69_Template_div_click_0_listener() {
      const o_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.editForm.fitForUse = o_r20;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, RollDetailsComponent_div_85_div_69_span_1_Template, 2, 0, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.editForm.fitForUse === o_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editForm.fitForUse === o_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r20, " ");
  }
}
function RollDetailsComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60)(3, "span", 40);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Edit Last Row ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 61);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showEditModal = false);
    });
    \u0275\u0275elementStart(7, "span", 40);
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 62)(10, "div", 63)(11, "label");
    \u0275\u0275text(12, "Rolled Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function RollDetailsComponent_div_85_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.rolledLength, $event) || (ctx_r2.editForm.rolledLength = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 63)(15, "label");
    \u0275\u0275text(16, "Maint Cost MINR");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function RollDetailsComponent_div_85_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.maintCost, $event) || (ctx_r2.editForm.maintCost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 63)(19, "label");
    \u0275\u0275text(20, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function RollDetailsComponent_div_85_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.remarks, $event) || (ctx_r2.editForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 67)(23, "label");
    \u0275\u0275text(24, "Roll Change Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "app-datetime-picker", 68);
    \u0275\u0275twoWayListener("valueChange", function RollDetailsComponent_div_85_Template_app_datetime_picker_valueChange_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.rollChangeTime, $event) || (ctx_r2.editForm.rollChangeTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 63)(27, "label");
    \u0275\u0275text(28, "Spall");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 69);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(30, "div", 9);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("spall"));
    });
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 11);
    \u0275\u0275text(34, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 12);
    \u0275\u0275template(36, RollDetailsComponent_div_85_div_36_Template, 3, 4, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 63)(38, "label");
    \u0275\u0275text(39, "Crack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 69);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_40_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(41, "div", 9);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_41_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("crack"));
    });
    \u0275\u0275elementStart(42, "span", 10);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 11);
    \u0275\u0275text(45, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 12);
    \u0275\u0275template(47, RollDetailsComponent_div_85_div_47_Template, 3, 4, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 63)(49, "label");
    \u0275\u0275text(50, "Uniform Circulation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 69);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_51_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(52, "div", 9);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_52_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("uniformCirc"));
    });
    \u0275\u0275elementStart(53, "span", 10);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span", 11);
    \u0275\u0275text(56, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 12);
    \u0275\u0275template(58, RollDetailsComponent_div_85_div_58_Template, 3, 4, "div", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 63)(60, "label");
    \u0275\u0275text(61, "Fit For Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 69);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_62_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(63, "div", 9);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_div_click_63_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("fitForUse"));
    });
    \u0275\u0275elementStart(64, "span", 10);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span", 11);
    \u0275\u0275text(67, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 12);
    \u0275\u0275template(69, RollDetailsComponent_div_85_div_69_Template, 3, 4, "div", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(70, "div", 70)(71, "button", 71);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showEditModal = false);
    });
    \u0275\u0275text(72, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "button", 72);
    \u0275\u0275listener("click", function RollDetailsComponent_div_85_Template_button_click_73_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveEdit());
    });
    \u0275\u0275text(74, "Save");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.rolledLength);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.maintCost);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.remarks);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.editForm.rollChangeTime);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "spall");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editForm.spall);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.spallOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "crack");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editForm.crack);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.crackOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "uniformCirc");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editForm.uniformCirc);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.uniformCircOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "fitForUse");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.editForm.fitForUse);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.fitForUseOptions);
  }
}
var RollDetailsComponent = class _RollDetailsComponent {
  constructor() {
    this.activeTab = "dia";
    this.showEditModal = false;
    this.openDropdown = null;
    this.selectedMill = "E1";
    this.selectedRoll = "WR";
    this.selectedPosition = "Top";
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.totalPages = 1;
    this.millOptions = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.rollOptions = ["WR", "BUR", "EDGER", "PINCH"];
    this.positionOptions = ["Top", "Bottom"];
    this.spallOptions = ["Yes", "No"];
    this.crackOptions = ["Yes", "No"];
    this.uniformCircOptions = ["Good", "Average", "Poor"];
    this.fitForUseOptions = ["Yes", "No"];
    this.rollUsageData = [
      {
        cycleNo: 1,
        plant: "Mill 1",
        position: "Top",
        rolledLength: 600,
        startDate: "2025-03-11",
        endDate: "2025-01-15",
        diaStart: 483,
        diaEnd: 441,
        maintCost: 0.1,
        remarks: "Normal wear",
        spall: "No",
        crack: "No",
        uniformCirc: "Good",
        fitForUse: "Yes"
      },
      {
        cycleNo: 2,
        plant: "Mill 1",
        position: "Top",
        rolledLength: 600,
        startDate: "2025-03-15",
        endDate: "2025-01-20",
        diaStart: 441,
        diaEnd: 403,
        maintCost: 0.2,
        remarks: "High usage",
        spall: "Yes",
        crack: "No",
        uniformCirc: "Average",
        fitForUse: "Yes"
      },
      {
        cycleNo: 3,
        plant: "Mill 1",
        position: "Bottom",
        rolledLength: 600,
        startDate: "2025-02-18",
        endDate: "2025-01-20",
        diaStart: 403,
        diaEnd: 389,
        maintCost: 0.2,
        remarks: "High usage",
        spall: "Yes",
        crack: "Yes",
        uniformCirc: "Poor",
        fitForUse: "Yes"
      },
      {
        cycleNo: 4,
        plant: "Mill 1",
        position: "Bottom",
        rolledLength: 600,
        startDate: "2025-02-15",
        endDate: "2025-01-20",
        diaStart: 389,
        diaEnd: 361,
        maintCost: 0.3,
        remarks: "High usage",
        spall: "No",
        crack: "Yes",
        uniformCirc: "Average",
        fitForUse: "Yes"
      },
      {
        cycleNo: 5,
        plant: "Mill 1",
        position: "Top",
        rolledLength: 500,
        startDate: "2025-03-15",
        endDate: "2025-01-20",
        diaStart: 361,
        diaEnd: 360,
        maintCost: 0.2,
        remarks: "High usage",
        spall: "No",
        crack: "No",
        uniformCirc: "Good",
        fitForUse: "No"
      }
    ];
    this.editForm = {
      cycleNo: 0,
      plant: "",
      position: "",
      rolledLength: 0,
      startDate: "",
      endDate: "",
      diaStart: 0,
      diaEnd: 0,
      maintCost: 0,
      remarks: "",
      spall: "",
      crack: "",
      uniformCirc: "",
      fitForUse: "",
      rollChangeTime: ""
    };
    this.chartOptions = {};
  }
  ngOnInit() {
    this.initChart();
  }
  initChart() {
    this.chartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15, 26, 46, 0.95)",
        borderColor: "rgba(0, 212, 255, 0.2)",
        textStyle: {
          color: "#E8F0FE"
        }
      },
      legend: {
        data: ["Current Roll Dia(mm)", "Avg Grinding(mm)"],
        textStyle: {
          color: "#7B90B8"
        },
        top: 10
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: "15%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        name: "Cycles",
        nameLocation: "middle",
        nameGap: 25,
        axisLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        axisLabel: {
          color: "#7B90B8"
        },
        splitLine: {
          show: false
        }
      },
      yAxis: [
        {
          type: "value",
          name: "Diameter(mm)",
          min: 360,
          max: 470,
          axisLabel: {
            color: "#7B90B8"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.05)"
            }
          },
          nameTextStyle: {
            color: "#7B90B8"
          }
        },
        {
          type: "value",
          name: "Avg Grinding(mm)",
          min: 10,
          max: 40,
          axisLabel: {
            color: "#7B90B8"
          },
          splitLine: {
            show: false
          },
          nameTextStyle: {
            color: "#FF8C42"
          }
        }
      ],
      series: [
        {
          name: "Avg Grinding(mm)",
          type: "bar",
          yAxisIndex: 1,
          data: [15, 35, 8, 28, 22, 0, 0, 0, 0],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(255, 140, 66, 0.9)" },
                { offset: 1, color: "rgba(255, 140, 66, 0.3)" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: 35
        },
        {
          name: "Current Roll Dia(mm)",
          type: "line",
          yAxisIndex: 0,
          data: [460, 440, 410, 395, 380, null, null, null, null],
          smooth: false,
          lineStyle: {
            color: "#2563EB",
            width: 2.5
          },
          itemStyle: {
            color: "#2563EB"
          },
          endLabel: {
            show: true
          },
          symbol: "circle",
          symbolSize: 8,
          markPoint: {
            data: [
              {
                type: "max",
                name: "Max",
                label: {
                  color: "#00D4FF"
                }
              }
            ],
            itemStyle: {
              color: "rgba(255, 69, 96, 0.8)"
            }
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(37, 99, 235, 0.15)" },
                { offset: 1, color: "rgba(37, 99, 235, 0)" }
              ]
            }
          }
        }
      ]
    };
  }
  toggleDropdown(name) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  closeAllDropdowns() {
    this.openDropdown = null;
  }
  selectMill(val) {
    this.selectedMill = val;
    this.openDropdown = null;
  }
  selectRoll(val) {
    this.selectedRoll = val;
    this.openDropdown = null;
  }
  selectPosition(val) {
    this.selectedPosition = val;
    this.openDropdown = null;
  }
  openEditModal() {
    const lastRow = this.rollUsageData[this.rollUsageData.length - 1];
    this.editForm = __spreadProps(__spreadValues({}, lastRow), { rollChangeTime: lastRow.rollChangeTime ?? "" });
    this.showEditModal = true;
  }
  saveEdit() {
    this.rollUsageData[this.rollUsageData.length - 1] = __spreadValues({}, this.editForm);
    this.showEditModal = false;
  }
  goToPage(n) {
    if (n >= 1 && n <= this.totalPages) {
      this.currentPage = n;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onDocClick(e) {
    if (!e.target.closest(".custom-select")) {
      this.openDropdown = null;
    }
  }
  static {
    this.\u0275fac = function RollDetailsComponent_Factory(t) {
      return new (t || _RollDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RollDetailsComponent, selectors: [["app-roll-details"]], hostBindings: function RollDetailsComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RollDetailsComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 86, vars: 20, consts: [[1, "roll-details-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "filter-bar"], [1, "dropdown-wrap"], [1, "dropdown-label"], [1, "custom-select"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "info-card"], [1, "info-header"], [1, "info-grid"], [1, "info-item"], [1, "info-label"], [1, "info-value", "roll-id"], [1, "info-value", "seller"], [1, "info-value", "delivery-date"], [1, "info-value", "po-price"], [1, "info-value", "min-diameter"], [1, "info-value", "rating"], [1, "tabs-row"], ["type", "button", 1, "tab-button", 3, "click"], [1, "tab-content-area"], ["class", "tab-content", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "edit-modal", 3, "click", 4, "ngIf"], [1, "select-option", 3, "click"], [1, "tab-content"], [1, "chart-container"], ["echarts", "", 1, "chart", 3, "options", "autoResize"], [1, "table-wrapper"], [1, "usage-table"], [3, "even", "last-row", 4, "ngFor", "ngForOf"], [1, "table-actions"], ["type", "button", 1, "edit-btn", 3, "click"], [1, "material-icons"], [1, "pagination-wrap"], ["type", "button", 1, "page-btn", 3, "click", "disabled"], ["type", "button", 1, "page-btn", 3, "click"], [1, "col-cycle"], [1, "col-plant"], [1, "col-position"], [1, "col-length"], [1, "col-date"], [1, "col-dia-start"], [1, "col-dia-end"], [1, "col-cost"], [1, "col-remarks"], [1, "col-spall"], [1, "col-crack"], [1, "col-uniform"], [1, "col-fit"], [1, "modal-backdrop", 3, "click"], [1, "edit-modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 3, "click"], [1, "modal-body"], [1, "form-field"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.1", 3, "ngModelChange", "ngModel"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "form-field", "full-width"], ["label", "", 3, "valueChange", "value"], [1, "custom-select", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "button", 1, "save-btn", 3, "click"], ["class", "option-check material-icons", 4, "ngIf"], [1, "option-check", "material-icons"]], template: function RollDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Roll Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "label", 7);
        \u0275\u0275text(11, "Select Mill");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9);
        \u0275\u0275listener("click", function RollDetailsComponent_Template_div_click_13_listener() {
          return ctx.toggleDropdown("mill");
        });
        \u0275\u0275elementStart(14, "span", 10);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 12);
        \u0275\u0275template(19, RollDetailsComponent_div_19_Template, 2, 3, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 6)(21, "label", 7);
        \u0275\u0275text(22, "Select Roll");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8)(24, "div", 9);
        \u0275\u0275listener("click", function RollDetailsComponent_Template_div_click_24_listener() {
          return ctx.toggleDropdown("roll");
        });
        \u0275\u0275elementStart(25, "span", 10);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 11);
        \u0275\u0275text(28, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 12);
        \u0275\u0275template(30, RollDetailsComponent_div_30_Template, 2, 3, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 6)(32, "label", 7);
        \u0275\u0275text(33, "Select Position");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 8)(35, "div", 9);
        \u0275\u0275listener("click", function RollDetailsComponent_Template_div_click_35_listener() {
          return ctx.toggleDropdown("position");
        });
        \u0275\u0275elementStart(36, "span", 10);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 11);
        \u0275\u0275text(39, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 12);
        \u0275\u0275template(41, RollDetailsComponent_div_41_Template, 2, 3, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 14)(43, "div", 15);
        \u0275\u0275text(44, "Roll Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 16)(46, "div", 17)(47, "div", 18);
        \u0275\u0275text(48, "Roll ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 19);
        \u0275\u0275text(50, "WR123");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 17)(52, "div", 18);
        \u0275\u0275text(53, "Seller");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 20);
        \u0275\u0275text(55, "Supplier3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 17)(57, "div", 18);
        \u0275\u0275text(58, "Delivery Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 21);
        \u0275\u0275text(60, "2025-01-10");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 17)(62, "div", 18);
        \u0275\u0275text(63, "PO Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 22);
        \u0275\u0275text(65, "1000 MINR");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 17)(67, "div", 18);
        \u0275\u0275text(68, "Min Diameter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 23);
        \u0275\u0275text(70, "50.10 mm");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 17)(72, "div", 18);
        \u0275\u0275text(73, "Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 24);
        \u0275\u0275text(75, "8.9/10");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(76, "div", 25)(77, "button", 26);
        \u0275\u0275listener("click", function RollDetailsComponent_Template_button_click_77_listener() {
          return ctx.activeTab = "dia";
        });
        \u0275\u0275text(78, " Dia Consumption ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "button", 26);
        \u0275\u0275listener("click", function RollDetailsComponent_Template_button_click_79_listener() {
          return ctx.activeTab = "usage";
        });
        \u0275\u0275text(80, " Roll Usage ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 27);
        \u0275\u0275template(82, RollDetailsComponent_div_82_Template, 3, 2, "div", 28)(83, RollDetailsComponent_div_83_Template, 50, 5, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(84, RollDetailsComponent_div_84_Template, 1, 0, "div", 29)(85, RollDetailsComponent_div_85_Template, 75, 20, "div", 30);
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275classProp("open", ctx.openDropdown === "mill");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedMill);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.millOptions);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "roll");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedRoll);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.rollOptions);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "position");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedPosition);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.positionOptions);
        \u0275\u0275advance(36);
        \u0275\u0275classProp("active", ctx.activeTab === "dia");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "usage");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "dia");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "usage");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, NgxEchartsModule, NgxEchartsDirective, DatetimePickerComponent], styles: ['\n\n.roll-details-page[_ngcontent-%COMP%] {\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n  min-height: 100%;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 14px 20px;\n  margin-bottom: 16px;\n}\n.dropdown-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-wrap[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.dropdown-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.select-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #00D4FF;\n  background: rgba(0, 212, 255, 0.08);\n}\n.select-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7B90B8;\n  transition: transform 0.2s ease;\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-trigger[_ngcontent-%COMP%] {\n  border-color: #2563EB;\n  background: rgba(37, 99, 235, 0.1);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: #00D4FF;\n}\n.select-options[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #0F1A2E;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  max-height: 260px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 9999;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 212, 255, 0.05);\n  animation: _ngcontent-%COMP%_dropdownFade 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_dropdownFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-options[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-option[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  color: #7B90B8;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.select-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.select-option[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.15);\n  color: #E8F0FE;\n  padding-left: 18px;\n}\n.select-option.selected[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.1);\n  color: #00D4FF;\n  font-weight: 600;\n  border-left: 2px solid #00D4FF;\n}\n.info-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d1535,\n      #111d3a);\n  border: 1px solid rgba(37, 99, 235, 0.25);\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n.info-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1e3a8a,\n      #1d4ed8);\n  padding: 10px 24px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  color: #E8F0FE;\n}\n.info-grid[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #3D5175;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.info-value.roll-id[_ngcontent-%COMP%] {\n  color: #00D4FF;\n}\n.info-value.seller[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.info-value.delivery-date[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.info-value.po-price[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.info-value.min-diameter[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.info-value.rating[_ngcontent-%COMP%] {\n  color: #FFB800;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n  margin-bottom: 0;\n}\n.tab-button[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #7B90B8;\n  border-bottom: 3px solid transparent;\n  transition: all 0.2s ease;\n  font-family: "Inter", sans-serif;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  color: #E8F0FE;\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  border-bottom-color: #00D4FF;\n  background: rgba(0, 212, 255, 0.05);\n}\n.tab-content-area[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 0 0 14px 14px;\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.tab-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 8px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #0a1020;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #1e3a6e;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #2563EB;\n}\n.usage-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1400px;\n  border-collapse: collapse;\n}\n.usage-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n}\n.usage-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  padding: 12px 16px;\n  white-space: nowrap;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n  text-align: left;\n}\n.usage-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.usage-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.usage-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.usage-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.usage-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.last-row[_ngcontent-%COMP%] {\n  border-left: 3px solid #00D4FF;\n  background: rgba(0, 212, 255, 0.04);\n}\n.usage-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  white-space: nowrap;\n  font-size: 12.5px;\n}\n.col-cycle[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 700;\n  text-align: center;\n}\n.col-plant[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.col-position[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.col-length[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.col-date[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.col-dia-start[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-dia-end[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-cost[_ngcontent-%COMP%] {\n  color: #FF4560;\n}\n.col-remarks[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-spall.yes[_ngcontent-%COMP%] {\n  color: #FF4560;\n  font-weight: 600;\n}\n.col-spall.no[_ngcontent-%COMP%] {\n  color: #00E5A0;\n  font-weight: 600;\n}\n.col-crack.yes[_ngcontent-%COMP%] {\n  color: #FF4560;\n  font-weight: 600;\n}\n.col-crack.no[_ngcontent-%COMP%] {\n  color: #00E5A0;\n  font-weight: 600;\n}\n.col-uniform.good[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-uniform.average[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-uniform.poor[_ngcontent-%COMP%] {\n  color: #FF4560;\n}\n.col-fit.yes[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-fit.no[_ngcontent-%COMP%] {\n  color: #FF4560;\n}\n.table-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 0;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(37, 99, 235, 0.1);\n  border: 1px solid rgba(37, 99, 235, 0.3);\n  border-radius: 8px;\n  padding: 8px 18px;\n  color: #00D4FF;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: "Inter", sans-serif;\n}\n.edit-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.edit-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.2);\n}\n.pagination-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.05);\n  color: #7B90B8;\n  font-size: 13px;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease;\n  font-family: "Inter", sans-serif;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #00D4FF;\n  color: #00D4FF;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: #2563EB;\n  border-color: #2563EB;\n  color: white;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.75);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.edit-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 480px;\n  max-width: 95vw;\n  max-height: 85vh;\n  overflow-y: auto;\n  z-index: 1001;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 16px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n  background: rgba(0, 212, 255, 0.03);\n  border-radius: 16px 16px 0 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 20px;\n}\n.modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid #1A2844;\n  background: rgba(255, 255, 255, 0.04);\n  color: #7B90B8;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n.modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.4);\n  color: #FF4560;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #3D5175;\n  font-weight: 600;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  outline: none;\n  transition: border 0.2s;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);\n}\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #0F1A2E;\n  color: #E8F0FE;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid rgba(0, 212, 255, 0.08);\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid #1A2844;\n  border-radius: 8px;\n  padding: 9px 22px;\n  color: #7B90B8;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: all 0.2s;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563EB,\n      #1d4ed8);\n  border: none;\n  border-radius: 8px;\n  padding: 9px 22px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);\n  transition: filter 0.2s, transform 0.2s;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n  transform: scale(1.02);\n}\n@media (max-width: 1200px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .filter-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .tab-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 8px 16px;\n  }\n}\n/*# sourceMappingURL=roll-details.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RollDetailsComponent, { className: "RollDetailsComponent", filePath: "src\\app\\features\\roll-details\\roll-details.component.ts", lineNumber: 32 });
})();
export {
  RollDetailsComponent
};
//# sourceMappingURL=chunk-M7CQWFPY.js.map
