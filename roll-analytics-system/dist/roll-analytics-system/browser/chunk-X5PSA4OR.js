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
  DecimalPipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
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
import "./chunk-GLLL6ZVE.js";

// src/app/features/cost-analysis/cost-analysis.component.ts
function CostAnalysisComponent_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_16_Template_div_click_0_listener() {
      const o_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMill(o_r2));
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_16_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedMill === o_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedMill === o_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2, " ");
  }
}
function CostAnalysisComponent_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_24_Template_div_click_0_listener() {
      const o_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRollType(o_r5));
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_24_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedRollType === o_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRollType === o_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r5, " ");
  }
}
function CostAnalysisComponent_div_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_32_Template_div_click_0_listener() {
      const o_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSupplier(o_r7));
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_32_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedSupplier === o_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedSupplier === o_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r7, " ");
  }
}
function CostAnalysisComponent_div_40_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_40_Template_div_click_0_listener() {
      const o_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPeriod(o_r9));
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_40_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedPeriod === o_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPeriod === o_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r9, " ");
  }
}
function CostAnalysisComponent_div_136_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_136_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_136_div_16_Template_div_click_0_listener() {
      const o_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.newEntry.activity = o_r12;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_136_div_16_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.newEntry.activity === o_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.newEntry.activity === o_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r12, " ");
  }
}
function CostAnalysisComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "label");
    \u0275\u0275text(4, "Roll ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_136_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newEntry.rollId, $event) || (ctx_r2.newEntry.rollId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 70)(7, "label");
    \u0275\u0275text(8, "Activity Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_136_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_136_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("activity"));
    });
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275template(16, CostAnalysisComponent_div_136_div_16_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 70)(18, "label");
    \u0275\u0275text(19, "Cost (MINR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_136_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newEntry.cost, $event) || (ctx_r2.newEntry.cost = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 70)(22, "label");
    \u0275\u0275text(23, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "app-datetime-picker", 73);
    \u0275\u0275twoWayListener("valueChange", function CostAnalysisComponent_div_136_Template_app_datetime_picker_valueChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newEntry.date, $event) || (ctx_r2.newEntry.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 70)(26, "label");
    \u0275\u0275text(27, "Duration (Hrs)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_136_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newEntry.duration, $event) || (ctx_r2.newEntry.duration = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 75)(30, "label");
    \u0275\u0275text(31, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_136_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newEntry.remarks, $event) || (ctx_r2.newEntry.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 77)(34, "button", 78);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_136_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEntryForm = false);
    });
    \u0275\u0275text(35, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 79);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_136_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addEntry());
    });
    \u0275\u0275text(37, "Save Entry");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newEntry.rollId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "activity");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.newEntry.activity || "Grinding");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.activityTypeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newEntry.cost);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.newEntry.date);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newEntry.duration);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newEntry.remarks);
  }
}
function CostAnalysisComponent_tr_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 82);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 83);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 84);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 85);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 86)(14, "span", 87);
    \u0275\u0275listener("click", function CostAnalysisComponent_tr_156_Template_span_click_14_listener() {
      const i_r14 = \u0275\u0275restoreView(_r13).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteEntry(i_r14));
    });
    \u0275\u0275text(15, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r15 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275classProp("even", i_r14 % 2 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.rollId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.activity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.cost);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r15.remarks);
  }
}
function CostAnalysisComponent_div_173_div_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_173_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_div_16_Template_div_click_0_listener() {
      const s_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.conditionForm.stand = s_r18;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_173_div_16_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.conditionForm.stand === s_r18);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.conditionForm.stand === s_r18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r18, " ");
  }
}
function CostAnalysisComponent_div_173_div_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_173_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_div_31_Template_div_click_0_listener() {
      const o_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.conditionForm.spall = o_r20;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_173_div_31_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.conditionForm.spall === o_r20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.conditionForm.spall === o_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r20, " ");
  }
}
function CostAnalysisComponent_div_173_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_173_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_div_42_Template_div_click_0_listener() {
      const o_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.conditionForm.crack = o_r22;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_173_div_42_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.conditionForm.crack === o_r22);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.conditionForm.crack === o_r22);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r22, " ");
  }
}
function CostAnalysisComponent_div_173_div_53_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_173_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_div_53_Template_div_click_0_listener() {
      const o_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.conditionForm.circulation = o_r24;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_173_div_53_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.conditionForm.circulation === o_r24);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.conditionForm.circulation === o_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r24, " ");
  }
}
function CostAnalysisComponent_div_173_div_64_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function CostAnalysisComponent_div_173_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_div_64_Template_div_click_0_listener() {
      const o_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.conditionForm.surface = o_r26;
      return \u0275\u0275resetView(ctx_r2.openDropdown = null);
    });
    \u0275\u0275template(1, CostAnalysisComponent_div_173_div_64_span_1_Template, 2, 0, "span", 66);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r26 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.conditionForm.surface === o_r26);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.conditionForm.surface === o_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r26, " ");
  }
}
function CostAnalysisComponent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "div", 70)(3, "label");
    \u0275\u0275text(4, "Roll ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_173_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.conditionForm.rollId, $event) || (ctx_r2.conditionForm.rollId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 70)(7, "label");
    \u0275\u0275text(8, "Stand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_9_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("stand"));
    });
    \u0275\u0275elementStart(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275template(16, CostAnalysisComponent_div_173_div_16_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 70)(18, "label");
    \u0275\u0275text(19, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "app-datetime-picker", 73);
    \u0275\u0275twoWayListener("valueChange", function CostAnalysisComponent_div_173_Template_app_datetime_picker_valueChange_20_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.conditionForm.date, $event) || (ctx_r2.conditionForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 70)(22, "label");
    \u0275\u0275text(23, "Spall");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_24_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(25, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("spall"));
    });
    \u0275\u0275elementStart(26, "span", 8);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 9);
    \u0275\u0275text(29, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 10);
    \u0275\u0275template(31, CostAnalysisComponent_div_173_div_31_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 70)(33, "label");
    \u0275\u0275text(34, "Crack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_35_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(36, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_36_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("crack"));
    });
    \u0275\u0275elementStart(37, "span", 8);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 9);
    \u0275\u0275text(40, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10);
    \u0275\u0275template(42, CostAnalysisComponent_div_173_div_42_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 70)(44, "label");
    \u0275\u0275text(45, "Circulation / Fit for Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_46_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(47, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_47_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("circulation"));
    });
    \u0275\u0275elementStart(48, "span", 8);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 9);
    \u0275\u0275text(51, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 10);
    \u0275\u0275template(53, CostAnalysisComponent_div_173_div_53_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 70)(55, "label");
    \u0275\u0275text(56, "Surface Condition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 6);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_57_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(58, "div", 7);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_div_click_58_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("surface"));
    });
    \u0275\u0275elementStart(59, "span", 8);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 9);
    \u0275\u0275text(62, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 10);
    \u0275\u0275template(64, CostAnalysisComponent_div_173_div_64_Template, 3, 4, "div", 11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 75)(66, "label");
    \u0275\u0275text(67, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 90);
    \u0275\u0275twoWayListener("ngModelChange", function CostAnalysisComponent_div_173_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.conditionForm.remarks, $event) || (ctx_r2.conditionForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 77)(70, "button", 78);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showConditionForm = false);
    });
    \u0275\u0275text(71, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 79);
    \u0275\u0275listener("click", function CostAnalysisComponent_div_173_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveCondition());
    });
    \u0275\u0275text(73, "Save Condition");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.conditionForm.rollId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "stand");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.conditionForm.stand);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.stands);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("value", ctx_r2.conditionForm.date);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "spall");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.conditionForm.spall);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.spallOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "crack");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.conditionForm.crack);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.crackOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "circulation");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.conditionForm.circulation);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.circulationOptions);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "surface");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.conditionForm.surface);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.surfaceOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.conditionForm.remarks);
  }
}
function CostAnalysisComponent_tr_197_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 81);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 92);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 93);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 94);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 95);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 96)(16, "span", 97);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td", 85);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("even", i_r28 % 2 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.rollId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.stand);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.spall);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.crack);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.circulation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.surface);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("critical", ctx_r2.getOverallStatus(row_r27) === "CRITICAL")("warning", ctx_r2.getOverallStatus(row_r27) === "WARNING")("good", ctx_r2.getOverallStatus(row_r27) === "GOOD");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getOverallStatus(row_r27), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r27.remarks);
  }
}
function CostAnalysisComponent_div_213_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 98)(1, "p", 99);
    \u0275\u0275text(2, "No alarm data to display.");
    \u0275\u0275elementEnd()();
  }
}
var CostAnalysisComponent = class _CostAnalysisComponent {
  constructor() {
    this.openEntryForm = false;
    this.showConditionForm = false;
    this.accordionCollapsed = true;
    this.openDropdown = null;
    this.selectedMill = "Mill 1";
    this.selectedRollType = "WR";
    this.selectedSupplier = "Supplier 1";
    this.selectedPeriod = "Monthly";
    this.millOptions = ["Mill 1", "Mill 2", "Mill 3"];
    this.rollTypeOptions = ["WR", "BUR", "IMR", "Edger Roll", "Pinch Roll"];
    this.supplierOptions = ["Supplier 1", "Supplier 2", "Supplier 3", "Supplier 4", "Supplier 5"];
    this.periodOptions = ["Current Shift", "Daily", "Weekly", "Monthly"];
    this.stands = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.activityTypeOptions = [
      "Grinding",
      "Polishing",
      "Surface Treatment",
      "Repair",
      "Roll Change",
      "Preventive Maintenance",
      "Other"
    ];
    this.spallOptions = ["Yes", "No", "Partial"];
    this.crackOptions = ["Yes", "No", "Surface Only", "Deep"];
    this.circulationOptions = ["Good", "Average", "Poor", "Unfit"];
    this.surfaceOptions = ["Normal", "Rough", "Smooth", "Damaged"];
    this.kpiCostPerKm = { current: 0.52, best: 0.38, avg: 0.61 };
    this.kpiCostPerTon = { current: 0.85, best: 0.62, avg: 0.91 };
    this.kpiCostPerCampaign = { current: 14.5, best: 11.2, avg: 16.8 };
    this.entriesData = [
      { date: "19/02/2026 08:30", rollId: "WR123", activity: "Grinding", duration: 2, cost: 0.85, remarks: "Surface grinding after 5th cycle" },
      { date: "18/02/2026 14:00", rollId: "BUR354", activity: "Polishing", duration: 1.5, cost: 0.45, remarks: "Profile correction" },
      { date: "17/02/2026 10:15", rollId: "IMR58", activity: "Surface Treatment", duration: 3, cost: 1.2, remarks: "Anti-wear coating applied" }
    ];
    this.conditionData = [
      { date: "19/02/2026 09:00", rollId: "WR123", stand: "F1", spall: "No", crack: "No", circulation: "Good", surface: "Normal", remarks: "Normal wear pattern" },
      { date: "18/02/2026 15:30", rollId: "BUR354", stand: "F3", spall: "Partial", crack: "Surface Only", circulation: "Average", surface: "Rough", remarks: "Minor surface degradation observed" },
      { date: "17/02/2026 11:00", rollId: "ERO_898", stand: "E1", spall: "Yes", crack: "No", circulation: "Poor", surface: "Damaged", remarks: "Immediate inspection needed" },
      { date: "16/02/2026 08:45", rollId: "IRO_228", stand: "F5", spall: "No", crack: "No", circulation: "Good", surface: "Normal", remarks: "Post grinding check OK" }
    ];
    this.newEntry = {
      rollId: "",
      activity: "Grinding",
      cost: void 0,
      date: "",
      duration: void 0,
      remarks: ""
    };
    this.conditionForm = {
      rollId: "",
      stand: "E1",
      date: "",
      spall: "No",
      crack: "No",
      circulation: "Good",
      surface: "Normal",
      remarks: ""
    };
    this.supplierChartOptions = {};
    this.trendChartOptions = {};
    this.correlationChartOptions = {};
  }
  get totalIndirectCost() {
    return this.entriesData.reduce((sum, e) => sum + e.cost, 0);
  }
  get kpi1BelowAvg() {
    return this.kpiCostPerKm.current < this.kpiCostPerKm.avg;
  }
  get kpi2BelowAvg() {
    return this.kpiCostPerTon.current < this.kpiCostPerTon.avg;
  }
  get kpi3BelowAvg() {
    return this.kpiCostPerCampaign.current < this.kpiCostPerCampaign.avg;
  }
  ngOnInit() {
    this.buildSupplierChart();
    this.buildTrendChart();
    this.buildCorrelationChart();
  }
  buildSupplierChart() {
    this.supplierChartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15,26,46,0.95)",
        borderColor: "rgba(0,212,255,0.2)",
        textStyle: { color: "#E8F0FE" }
      },
      legend: {
        top: 10,
        textStyle: { color: "#7B90B8" },
        data: ["Cost/Km", "Cost/Ton", "Best Avg Line"]
      },
      grid: { left: 55, right: 55, top: 45, bottom: 35, containLabel: true },
      xAxis: {
        type: "category",
        data: ["Supplier 1", "Supplier 2", "Supplier 3", "Supplier 4", "Supplier 5", "Supplier 6", "Supplier 7", "Supplier 8", "Supplier 9", "Supplier 10"],
        axisLabel: { color: "#7B90B8" },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
        splitLine: { show: false }
      },
      yAxis: [
        {
          type: "value",
          name: "Cost/Km (MINR)",
          nameTextStyle: { color: "#7B90B8" },
          axisLabel: { color: "#7B90B8" },
          splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } }
        },
        {
          type: "value",
          name: "Cost/Ton",
          nameTextStyle: { color: "#A78BFA" },
          axisLabel: { color: "#A78BFA" },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "Cost/Km",
          type: "bar",
          yAxisIndex: 0,
          data: [0.61, 0.58, 0.55, 0.51, 0.59, 0.63, 0.65, 0.68, 0.7, 0.72],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#1565C0" },
                { offset: 1, color: "#42A5F5" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: 16
        },
        {
          name: "Cost/Ton",
          type: "bar",
          yAxisIndex: 1,
          data: [0.85, 0.8, 0.75, 0.7, 0.82, 0.9, 0.88, 0.92, 0.95, 0.98],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#6A1B9A" },
                { offset: 1, color: "#AB47BC" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: 16
        },
        {
          name: "Best Avg Line",
          type: "line",
          yAxisIndex: 0,
          data: [0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52],
          lineStyle: { type: "dashed", color: "#00E5A0", width: 2 },
          symbol: "none"
        }
      ]
    };
  }
  buildTrendChart() {
    this.trendChartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15,26,46,0.95)",
        borderColor: "rgba(0,212,255,0.2)",
        textStyle: { color: "#E8F0FE" }
      },
      legend: {
        textStyle: { color: "#7B90B8" },
        data: ["Cost/Km", "Cost/Ton", "Cost/Campaign"]
      },
      grid: { left: 55, right: 30, top: 45, bottom: 35, containLabel: true },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisLabel: { color: "#7B90B8" },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
        splitLine: { show: false }
      },
      yAxis: {
        type: "value",
        name: "Cost (MINR)",
        axisLabel: { color: "#7B90B8" },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } }
      },
      series: [
        {
          name: "Cost/Km",
          type: "line",
          data: [0.58, 0.55, 0.62, 0.59, 0.61, 0.57, 0.63, 0.6, 0.58, 0.65, 0.61, 0.59],
          lineStyle: { color: "#00D4FF", width: 2.5 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(0,212,255,0.15)" },
                { offset: 1, color: "rgba(0,212,255,0)" }
              ]
            }
          },
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          itemStyle: { color: "#00D4FF" }
        },
        {
          name: "Cost/Ton",
          type: "line",
          data: [0.82, 0.79, 0.85, 0.83, 0.87, 0.8, 0.88, 0.85, 0.82, 0.9, 0.86, 0.83],
          lineStyle: { color: "#A78BFA", width: 2.5 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(167,139,250,0.12)" },
                { offset: 1, color: "rgba(167,139,250,0)" }
              ]
            }
          },
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          itemStyle: { color: "#A78BFA" }
        },
        {
          name: "Cost/Campaign",
          type: "line",
          data: [13.5, 14.2, 13.8, 15.1, 14.5, 13.9, 15.8, 14.6, 13.2, 16.1, 15, 14.3],
          lineStyle: { color: "#FF8C42", width: 2.5 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(255,140,66,0.1)" },
                { offset: 1, color: "rgba(255,140,66,0)" }
              ]
            }
          },
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          itemStyle: { color: "#FF8C42" }
        }
      ]
    };
  }
  buildCorrelationChart() {
    const scatterData = [[0.61, 98], [0.58, 95], [0.55, 92], [0.51, 88], [0.59, 96], [0.63, 91], [0.65, 89], [0.68, 93], [0.7, 87], [0.72, 90]];
    const suppliers = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10"];
    this.correlationChartOptions = {
      backgroundColor: "transparent",
      tooltip: {
        trigger: "item",
        formatter: (params) => {
          const d = params.data;
          const i = params.dataIndex;
          return `Supplier ${i + 1}<br/>Cost/Km: ${d[0].toFixed(2)} MINR<br/>Utilization: ${d[1]}%`;
        },
        backgroundColor: "rgba(15,26,46,0.95)",
        borderColor: "rgba(0,212,255,0.2)",
        textStyle: { color: "#E8F0FE" }
      },
      grid: { left: 60, right: 40, top: 40, bottom: 45, containLabel: true },
      xAxis: {
        type: "value",
        name: "Avg MINR/Km",
        min: 0.4,
        max: 0.8,
        axisLabel: { color: "#7B90B8" },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
        nameTextStyle: { color: "#7B90B8" }
      },
      yAxis: {
        type: "value",
        name: "Avg Utilization (%)",
        min: 85,
        max: 100,
        axisLabel: { color: "#7B90B8" },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
        nameTextStyle: { color: "#7B90B8" }
      },
      series: [
        {
          type: "scatter",
          data: scatterData,
          symbolSize: (val) => val[1] / 5,
          itemStyle: {
            color: (params) => {
              const cost = params.data[0];
              if (cost < 0.55)
                return "#00E5A0";
              if (cost < 0.65)
                return "#FF8C42";
              return "#FF4560";
            }
          },
          label: {
            show: true,
            formatter: (params) => suppliers[params.dataIndex],
            color: "#E8F0FE",
            fontSize: 11
          }
        }
      ]
    };
  }
  toggleDropdown(name) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  closeAll() {
    this.openDropdown = null;
  }
  selectMill(v) {
    this.selectedMill = v;
    this.openDropdown = null;
  }
  selectRollType(v) {
    this.selectedRollType = v;
    this.openDropdown = null;
  }
  selectSupplier(v) {
    this.selectedSupplier = v;
    this.openDropdown = null;
  }
  selectPeriod(v) {
    this.selectedPeriod = v;
    this.openDropdown = null;
  }
  addEntry() {
    const e = this.newEntry;
    if (!e.rollId || e.cost == null)
      return;
    this.entriesData.unshift({
      date: e.date ? this.formatEntryDate(e.date) : (/* @__PURE__ */ new Date()).toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }).replace(",", ""),
      rollId: e.rollId,
      activity: e.activity || "Grinding",
      duration: e.duration ?? 0,
      cost: e.cost,
      remarks: e.remarks || ""
    });
    this.newEntry = { rollId: "", activity: "Grinding", cost: void 0, date: "", duration: void 0, remarks: "" };
    this.openEntryForm = false;
  }
  formatEntryDate(v) {
    if (v.length >= 14) {
      const y = v.slice(0, 4), m = v.slice(4, 6), d = v.slice(6, 8), hh = v.slice(8, 10), mm = v.slice(10, 12);
      return `${d}/${m}/${y} ${hh}:${mm}`;
    }
    return v;
  }
  deleteEntry(i) {
    this.entriesData.splice(i, 1);
  }
  saveCondition() {
    const c = this.conditionForm;
    if (!c.rollId || !c.date)
      return;
    this.conditionData.unshift({
      date: c.date.length >= 14 ? this.formatEntryDate(c.date) : c.date,
      rollId: c.rollId,
      stand: c.stand || "E1",
      spall: c.spall || "No",
      crack: c.crack || "No",
      circulation: c.circulation || "Good",
      surface: c.surface || "Normal",
      remarks: c.remarks || ""
    });
    this.conditionForm = { rollId: "", stand: "E1", date: "", spall: "No", crack: "No", circulation: "Good", surface: "Normal", remarks: "" };
    this.showConditionForm = false;
  }
  getOverallStatus(row) {
    if (row.spall === "Yes" || row.crack === "Yes" || row.circulation === "Poor" || row.circulation === "Unfit")
      return "CRITICAL";
    if (row.spall === "Partial" || row.crack === "Surface Only" || row.circulation === "Average" || row.surface === "Rough")
      return "WARNING";
    return "GOOD";
  }
  static {
    this.\u0275fac = function CostAnalysisComponent_Factory(t) {
      return new (t || _CostAnalysisComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CostAnalysisComponent, selectors: [["app-cost-analysis"]], hostBindings: function CostAnalysisComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CostAnalysisComponent_click_HostBindingHandler() {
          return ctx.closeAll();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 214, vars: 59, consts: [[1, "cost-analysis-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "filter-bar"], [1, "custom-select", 3, "click"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-card-header"], [1, "kpi-card-body"], [1, "material-icons", "kpi-icon", "cyan"], [1, "kpi-main", "cyan"], [1, "kpi-divider"], [1, "kpi-row"], [1, "kpi-label"], [1, "kpi-val", "green"], [1, "kpi-val", "orange"], [1, "trend-badge"], [1, "material-icons"], [1, "material-icons", "kpi-icon", "purple"], [1, "kpi-main", "purple"], [1, "material-icons", "kpi-icon", "orange"], [1, "kpi-main", "orange"], [1, "charts-row"], [1, "chart-card"], [1, "chart-title"], [1, "material-icons", "chart-icon", "cyan"], [1, "chart-wrap", 2, "height", "340px"], ["echarts", "", 1, "chart", 3, "options", "autoResize"], [1, "material-icons", "chart-icon", "purple"], [1, "indirect-card"], [1, "indirect-header"], [1, "indirect-title-wrap"], [1, "material-icons", "indirect-icon"], ["type", "button", 1, "add-entry-btn", 3, "click"], ["class", "entry-form-wrap", 4, "ngIf"], [1, "entries-table-wrap"], [1, "entries-table"], [3, "even", 4, "ngFor", "ngForOf"], [1, "total-row"], ["colspan", "4"], [1, "total-cost"], ["colspan", "2"], [1, "condition-card"], [1, "condition-header"], [1, "condition-title-wrap"], [1, "material-icons", "condition-icon"], ["type", "button", 1, "log-condition-btn", 3, "click"], ["class", "condition-form-wrap", 4, "ngIf"], [1, "condition-table-wrap"], [1, "condition-table"], [1, "correlation-card"], [1, "chart-wrap", "correlation-chart", 2, "height", "380px"], [1, "accordion-panel"], ["type", "button", 1, "accordion-header", 3, "click"], [1, "material-icons", "accordion-icon"], [1, "accordion-title"], [1, "material-icons", "accordion-chevron"], ["class", "accordion-body", 4, "ngIf"], [1, "select-option", 3, "click"], ["class", "option-check material-icons", 4, "ngIf"], [1, "option-check", "material-icons"], [1, "entry-form-wrap"], [1, "entry-form"], [1, "form-field"], ["type", "text", "placeholder", "Roll ID", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["label", "", 3, "valueChange", "value"], ["type", "number", "step", "0.1", "placeholder", "0", 3, "ngModelChange", "ngModel"], [1, "form-field", "full-width"], ["type", "text", "placeholder", "Remarks", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "button", 1, "save-btn", 3, "click"], [1, "col-date"], [1, "col-roll-id"], [1, "col-activity"], [1, "col-duration"], [1, "col-cost"], [1, "col-remarks"], [1, "col-action"], ["title", "Delete", 1, "material-icons", "action-delete", 3, "click"], [1, "condition-form-wrap"], [1, "condition-form"], ["rows", "2", "placeholder", "Remarks", 3, "ngModelChange", "ngModel"], [1, "col-stand"], [1, "col-spall"], [1, "col-crack"], [1, "col-circulation"], [1, "col-surface"], [1, "col-status"], [1, "status-badge"], [1, "accordion-body"], [1, "accordion-text"]], template: function CostAnalysisComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Cost Analysis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_9_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(10, "div", 7);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_10_listener() {
          return ctx.toggleDropdown("mill");
        });
        \u0275\u0275elementStart(11, "span", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, CostAnalysisComponent_div_16_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 6);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_17_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(18, "div", 7);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_18_listener() {
          return ctx.toggleDropdown("rollType");
        });
        \u0275\u0275elementStart(19, "span", 8);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275template(24, CostAnalysisComponent_div_24_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 6);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_25_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(26, "div", 7);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_26_listener() {
          return ctx.toggleDropdown("supplier");
        });
        \u0275\u0275elementStart(27, "span", 8);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 9);
        \u0275\u0275text(30, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 10);
        \u0275\u0275template(32, CostAnalysisComponent_div_32_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 6);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_33_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(34, "div", 7);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_div_click_34_listener() {
          return ctx.toggleDropdown("period");
        });
        \u0275\u0275elementStart(35, "span", 8);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "span", 9);
        \u0275\u0275text(38, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 10);
        \u0275\u0275template(40, CostAnalysisComponent_div_40_Template, 3, 4, "div", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 12)(42, "div", 13)(43, "div", 14);
        \u0275\u0275text(44, "COST PER KM ROLLED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 15)(46, "span", 16);
        \u0275\u0275text(47, "straighten");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 17);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "div", 18);
        \u0275\u0275elementStart(51, "div", 19)(52, "span", 20);
        \u0275\u0275text(53, "Best");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "span", 21);
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 19)(57, "span", 20);
        \u0275\u0275text(58, "Avg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "span", 22);
        \u0275\u0275text(60);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 23)(62, "span", 24);
        \u0275\u0275text(63);
        \u0275\u0275elementEnd();
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "div", 13)(66, "div", 14);
        \u0275\u0275text(67, "COST PER TON PROCESSED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 15)(69, "span", 25);
        \u0275\u0275text(70, "scale");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 26);
        \u0275\u0275text(72);
        \u0275\u0275elementEnd();
        \u0275\u0275element(73, "div", 18);
        \u0275\u0275elementStart(74, "div", 19)(75, "span", 20);
        \u0275\u0275text(76, "Best");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 21);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 19)(80, "span", 20);
        \u0275\u0275text(81, "Avg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "span", 22);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 23)(85, "span", 24);
        \u0275\u0275text(86);
        \u0275\u0275elementEnd();
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 13)(89, "div", 14);
        \u0275\u0275text(90, "COST PER CAMPAIGN");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 15)(92, "span", 27);
        \u0275\u0275text(93, "campaign");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 28);
        \u0275\u0275text(95);
        \u0275\u0275elementEnd();
        \u0275\u0275element(96, "div", 18);
        \u0275\u0275elementStart(97, "div", 19)(98, "span", 20);
        \u0275\u0275text(99, "Best");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "span", 21);
        \u0275\u0275text(101);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 19)(103, "span", 20);
        \u0275\u0275text(104, "Avg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "span", 22);
        \u0275\u0275text(106);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 23)(108, "span", 24);
        \u0275\u0275text(109);
        \u0275\u0275elementEnd();
        \u0275\u0275text(110);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(111, "div", 29)(112, "div", 30)(113, "div", 31)(114, "span", 32);
        \u0275\u0275text(115, "attach_money");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, " Supplier Cost Comparison ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 33);
        \u0275\u0275element(118, "div", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 30)(120, "div", 31)(121, "span", 35);
        \u0275\u0275text(122, "timeline");
        \u0275\u0275elementEnd();
        \u0275\u0275text(123, " Lifecycle Cost Trend (Monthly) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 33);
        \u0275\u0275element(125, "div", 34);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 36)(127, "div", 37)(128, "div", 38)(129, "span", 39);
        \u0275\u0275text(130, "build");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, " Manual Indirect Cost Entry ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "button", 40);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_button_click_132_listener() {
          return ctx.openEntryForm = !ctx.openEntryForm;
        });
        \u0275\u0275elementStart(133, "span", 24);
        \u0275\u0275text(134, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(135, " Add Entry ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(136, CostAnalysisComponent_div_136_Template, 38, 9, "div", 41);
        \u0275\u0275elementStart(137, "div", 42)(138, "table", 43)(139, "thead")(140, "tr")(141, "th");
        \u0275\u0275text(142, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "th");
        \u0275\u0275text(144, "Roll ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "th");
        \u0275\u0275text(146, "Activity Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "th");
        \u0275\u0275text(148, "Duration (Hrs)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "th");
        \u0275\u0275text(150, "Cost (MINR)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "th");
        \u0275\u0275text(152, "Remarks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "th");
        \u0275\u0275text(154, "Action");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(155, "tbody");
        \u0275\u0275template(156, CostAnalysisComponent_tr_156_Template, 16, 8, "tr", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "tfoot")(158, "tr", 45)(159, "td", 46);
        \u0275\u0275text(160, "TOTAL INDIRECT COST");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "td", 47);
        \u0275\u0275text(162);
        \u0275\u0275pipe(163, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(164, "td", 48);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(165, "div", 49)(166, "div", 50)(167, "div", 51)(168, "span", 52);
        \u0275\u0275text(169, "health_and_safety");
        \u0275\u0275elementEnd();
        \u0275\u0275text(170, " Roll Condition Monitoring ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "button", 53);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_button_click_171_listener() {
          return ctx.showConditionForm = !ctx.showConditionForm;
        });
        \u0275\u0275text(172, " Log Condition ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(173, CostAnalysisComponent_div_173_Template, 74, 23, "div", 54);
        \u0275\u0275elementStart(174, "div", 55)(175, "table", 56)(176, "thead")(177, "tr")(178, "th");
        \u0275\u0275text(179, "Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "th");
        \u0275\u0275text(181, "Roll ID");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "th");
        \u0275\u0275text(183, "Stand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "th");
        \u0275\u0275text(185, "Spall");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "th");
        \u0275\u0275text(187, "Crack");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(188, "th");
        \u0275\u0275text(189, "Circulation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "th");
        \u0275\u0275text(191, "Surface");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "th");
        \u0275\u0275text(193, "Overall Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "th");
        \u0275\u0275text(195, "Remarks");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(196, "tbody");
        \u0275\u0275template(197, CostAnalysisComponent_tr_197_Template, 20, 17, "tr", 44);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(198, "div", 57)(199, "div", 31)(200, "span", 32);
        \u0275\u0275text(201, "insights");
        \u0275\u0275elementEnd();
        \u0275\u0275text(202, " Cost vs Performance Correlation (Supplier View) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 58);
        \u0275\u0275element(204, "div", 34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "div", 59)(206, "button", 60);
        \u0275\u0275listener("click", function CostAnalysisComponent_Template_button_click_206_listener() {
          return ctx.accordionCollapsed = !ctx.accordionCollapsed;
        });
        \u0275\u0275elementStart(207, "span", 61);
        \u0275\u0275text(208, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "span", 62);
        \u0275\u0275text(210, "Alarms Not Available.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "span", 63);
        \u0275\u0275text(212);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(213, CostAnalysisComponent_div_213_Template, 3, 0, "div", 64);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275classProp("open", ctx.openDropdown === "mill");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedMill);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.millOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "rollType");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedRollType);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.rollTypeOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "supplier");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedSupplier);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.supplierOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "period");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedPeriod);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.periodOptions);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerKm.current, " MINR/Km");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerKm.best, " MINR/Km");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerKm.avg, " MINR/Km");
        \u0275\u0275advance();
        \u0275\u0275classProp("below", ctx.kpi1BelowAvg)("above", !ctx.kpi1BelowAvg);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.kpi1BelowAvg ? "trending_down" : "trending_up");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.kpi1BelowAvg ? "Below Average \u2014 Efficient" : "Above Average", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerTon.current, " MINR/Ton");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerTon.best, " MINR/Ton");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerTon.avg, " MINR/Ton");
        \u0275\u0275advance();
        \u0275\u0275classProp("below", ctx.kpi2BelowAvg)("above", !ctx.kpi2BelowAvg);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.kpi2BelowAvg ? "trending_down" : "trending_up");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.kpi2BelowAvg ? "Below Average \u2014 Efficient" : "Above Average", " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerCampaign.current, " MINR");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerCampaign.best, " MINR");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.kpiCostPerCampaign.avg, " MINR");
        \u0275\u0275advance();
        \u0275\u0275classProp("below", ctx.kpi3BelowAvg)("above", !ctx.kpi3BelowAvg);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.kpi3BelowAvg ? "trending_down" : "trending_up");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.kpi3BelowAvg ? "Below Average \u2014 Efficient" : "Above Average", " ");
        \u0275\u0275advance(8);
        \u0275\u0275property("options", ctx.supplierChartOptions)("autoResize", true);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.trendChartOptions)("autoResize", true);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.openEntryForm);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.entriesData);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 56, ctx.totalIndirectCost, "1.2-2"));
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.showConditionForm);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngForOf", ctx.conditionData);
        \u0275\u0275advance(7);
        \u0275\u0275property("options", ctx.correlationChartOptions)("autoResize", true);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.accordionCollapsed ? "expand_more" : "expand_less");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.accordionCollapsed);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgModel, NgxEchartsModule, NgxEchartsDirective, DatetimePickerComponent], styles: ["\n\n.cost-analysis-page[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #060B18;\n  min-height: 100%;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 14px 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  overflow: hidden;\n}\n.kpi-card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1e3a8a,\n      #1e40af);\n  padding: 10px 18px;\n  text-align: center;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #E8F0FE;\n}\n.kpi-card-body[_ngcontent-%COMP%] {\n  padding: 18px 20px;\n  position: relative;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 6px;\n}\n.kpi-icon.cyan[_ngcontent-%COMP%] {\n  color: #00D4FF;\n}\n.kpi-icon.purple[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.kpi-icon.orange[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.kpi-main[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n}\n.kpi-main.cyan[_ngcontent-%COMP%] {\n  color: #00D4FF;\n}\n.kpi-main.purple[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.kpi-main.orange[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.kpi-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 10px 0;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3D5175;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.kpi-val.green[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.kpi-val.orange[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.trend-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-radius: 20px;\n  padding: 4px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 12px;\n}\n.trend-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.trend-badge.below[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.1);\n  border: 1px solid rgba(0, 229, 160, 0.3);\n  color: #00E5A0;\n}\n.trend-badge.above[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.1);\n  border: 1px solid rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.charts-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 20px;\n  height: 380px;\n}\n.chart-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #E8F0FE;\n  margin-bottom: 12px;\n}\n.chart-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.chart-icon.cyan[_ngcontent-%COMP%] {\n  color: #00D4FF;\n}\n.chart-icon.purple[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.chart-wrap[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.indirect-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(255, 140, 66, 0.2);\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.indirect-header[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.05);\n  border-bottom: 1px solid rgba(255, 140, 66, 0.1);\n  padding: 14px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.indirect-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #E8F0FE;\n}\n.indirect-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF8C42;\n}\n.add-entry-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(37, 99, 235, 0.1);\n  border: 1px solid rgba(37, 99, 235, 0.3);\n  border-radius: 8px;\n  padding: 8px 18px;\n  color: #00D4FF;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: Inter, sans-serif;\n}\n.add-entry-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.add-entry-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.2);\n}\n.entry-form-wrap[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  margin-bottom: 16px;\n}\n.entry-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #3D5175;\n  font-weight: 600;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  padding: 9px 12px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-family: Inter, sans-serif;\n  outline: none;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: #7B90B8;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n}\n.form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 56px;\n}\n.form-field.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid #1A2844;\n  border-radius: 8px;\n  padding: 8px 20px;\n  color: #7B90B8;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: Inter, sans-serif;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.save-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #2563EB,\n      #1d4ed8);\n  border: none;\n  border-radius: 8px;\n  padding: 8px 20px;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: Inter, sans-serif;\n}\n.save-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n}\n.entries-table-wrap[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  overflow-x: auto;\n}\n.entries-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n}\n.entries-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.entries-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  text-align: left;\n}\n.entries-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.entries-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.06);\n}\n.entries-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.entries-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n}\n.col-date[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.col-roll-id[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n}\n.col-activity[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-duration[_ngcontent-%COMP%] {\n  color: #A78BFA;\n  text-align: center;\n}\n.col-cost[_ngcontent-%COMP%] {\n  color: #FF8C42;\n  font-weight: 700;\n}\n.col-remarks[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.col-action[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.action-delete[_ngcontent-%COMP%] {\n  color: #FF4560;\n  cursor: pointer;\n  font-size: 20px;\n}\n.action-delete[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(0 0 6px rgba(255, 69, 96, 0.6));\n}\n.total-row[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-top: 2px solid rgba(0, 212, 255, 0.1);\n}\n.total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.total-cost[_ngcontent-%COMP%] {\n  color: #FF8C42 !important;\n  font-size: 15px !important;\n  font-weight: 800 !important;\n}\n.condition-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(167, 139, 250, 0.2);\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.condition-header[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.05);\n  border-bottom: 1px solid rgba(167, 139, 250, 0.1);\n  padding: 14px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.condition-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #E8F0FE;\n}\n.condition-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #A78BFA;\n}\n.log-condition-btn[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.1);\n  border: 1px solid rgba(167, 139, 250, 0.3);\n  color: #A78BFA;\n  border-radius: 8px;\n  padding: 8px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: Inter, sans-serif;\n}\n.log-condition-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(167, 139, 250, 0.2);\n}\n.condition-form-wrap[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n.condition-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.condition-table-wrap[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow-x: auto;\n}\n.condition-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.condition-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(167, 139, 250, 0.05);\n  border-bottom: 1px solid rgba(167, 139, 250, 0.1);\n}\n.condition-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  text-align: left;\n}\n.condition-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.condition-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.06);\n}\n.condition-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.condition-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n}\n.col-stand[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-spall[_ngcontent-%COMP%], .col-crack[_ngcontent-%COMP%], .col-circulation[_ngcontent-%COMP%], .col-surface[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.status-badge.critical[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.15);\n  border: 1px solid rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n.status-badge.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.15);\n  border: 1px solid rgba(255, 140, 66, 0.3);\n  color: #FF8C42;\n}\n.status-badge.good[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.15);\n  border: 1px solid rgba(0, 229, 160, 0.3);\n  color: #00E5A0;\n}\n.correlation-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.correlation-chart[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: rgba(255, 140, 66, 0.03);\n  border: none;\n  font-size: 13px;\n  color: #7B90B8;\n  cursor: pointer;\n  text-align: left;\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF8C42;\n}\n.accordion-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.accordion-chevron[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7B90B8;\n}\n.accordion-body[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.accordion-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #7B90B8;\n}\n/*# sourceMappingURL=cost-analysis.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CostAnalysisComponent, { className: "CostAnalysisComponent", filePath: "src\\app\\features\\cost-analysis\\cost-analysis.component.ts", lineNumber: 35 });
})();
export {
  CostAnalysisComponent
};
//# sourceMappingURL=chunk-X5PSA4OR.js.map
