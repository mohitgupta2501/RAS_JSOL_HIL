import {
  FormsModule
} from "./chunk-O3VMOCKE.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4FAZ62Q4.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/performance/performance.component.ts
function PerformanceComponent_ng_container_18_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function PerformanceComponent_ng_container_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_18_div_11_Template_div_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMill(opt_r4));
    });
    \u0275\u0275template(1, PerformanceComponent_ng_container_18_div_11_span_1_Template, 2, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedMill === opt_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedMill === opt_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r4, " ");
  }
}
function PerformanceComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "label", 16);
    \u0275\u0275text(3, "SELECT MILL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_18_Template_div_click_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_18_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDropdown("mill"));
    });
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275template(11, PerformanceComponent_ng_container_18_div_11_Template, 3, 4, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r1.openDropdown === "mill");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedMill);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.millOptions);
  }
}
function PerformanceComponent_ng_container_19_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function PerformanceComponent_ng_container_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_19_div_11_Template_div_click_0_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSupplier(opt_r7));
    });
    \u0275\u0275template(1, PerformanceComponent_ng_container_19_div_11_span_1_Template, 2, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedSupplier === opt_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedSupplier === opt_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r7, " ");
  }
}
function PerformanceComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15)(2, "label", 16);
    \u0275\u0275text(3, "SELECT SUPPLIER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_19_Template_div_click_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_19_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDropdown("supplier"));
    });
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 20);
    \u0275\u0275text(9, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 21);
    \u0275\u0275template(11, PerformanceComponent_ng_container_19_div_11_Template, 3, 4, "div", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("open", ctx_r1.openDropdown === "supplier");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedSupplier);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.supplierOptions);
  }
}
function PerformanceComponent_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function PerformanceComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PerformanceComponent_div_30_Template_div_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItem(opt_r9));
    });
    \u0275\u0275template(1, PerformanceComponent_div_30_span_1_Template, 2, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selectedItem === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedItem === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r9, " ");
  }
}
function PerformanceComponent_div_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function PerformanceComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PerformanceComponent_div_41_Template_div_click_0_listener() {
      const opt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectGrade(opt_r11));
    });
    \u0275\u0275template(1, PerformanceComponent_div_41_span_1_Template, 2, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selectedGrade === opt_r11);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedGrade === opt_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r11, " ");
  }
}
function PerformanceComponent_div_52_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function PerformanceComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275listener("click", function PerformanceComponent_div_52_Template_div_click_0_listener() {
      const opt_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRoll(opt_r13));
    });
    \u0275\u0275template(1, PerformanceComponent_div_52_span_1_Template, 2, 0, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selectedRoll === opt_r13);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedRoll === opt_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r13, " ");
  }
}
function PerformanceComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275listener("click", function PerformanceComponent_th_72_Template_th_click_0_listener() {
      const i_r15 = \u0275\u0275restoreView(_r14).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort("v" + (i_r15 + 1)));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3, "unfold_more");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r16 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", header_r16, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.sortField === "v" + (i_r15 + 1));
  }
}
function PerformanceComponent_tr_74_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v1"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.v1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r17.v1));
  }
}
function PerformanceComponent_tr_74_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.v1);
  }
}
function PerformanceComponent_tr_74_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v2"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.v2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r17.v2));
  }
}
function PerformanceComponent_tr_74_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.v2);
  }
}
function PerformanceComponent_tr_74_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v3"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.v3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r17.v3));
  }
}
function PerformanceComponent_tr_74_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.v3);
  }
}
function PerformanceComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275template(6, PerformanceComponent_tr_74_ng_container_6_Template, 6, 4, "ng-container", 42)(7, PerformanceComponent_tr_74_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275template(10, PerformanceComponent_tr_74_ng_container_10_Template, 6, 4, "ng-container", 42)(11, PerformanceComponent_tr_74_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275template(14, PerformanceComponent_tr_74_ng_container_14_Template, 6, 4, "ng-container", 42)(15, PerformanceComponent_tr_74_ng_template_15_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const normalValue_r19 = \u0275\u0275reference(8);
    const normalValue2_r20 = \u0275\u0275reference(12);
    const normalValue3_r21 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("even", i_r18 % 2 === 1)("rating-row", row_r17.parameter === "Ratings");
    \u0275\u0275advance();
    \u0275\u0275classProp("rating-row", row_r17.parameter === "Ratings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r17.parameter, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.units);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v1"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r17.parameter === "Ratings")("ngIfElse", normalValue_r19);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v2"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r17.parameter === "Ratings")("ngIfElse", normalValue2_r20);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r17, "v3"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r17.parameter === "Ratings")("ngIfElse", normalValue3_r21);
  }
}
var LOWER_IS_BETTER_PARAMS = [
  "Total Breakdown",
  "Avg Lead Time",
  "Avg Cost per Km",
  "Avg Purchase Cost"
];
var PerformanceComponent = class _PerformanceComponent {
  constructor() {
    this.isMillStats = false;
    this.openDropdown = null;
    this.selectedMill = "E1";
    this.selectedSupplier = "Supplier 1";
    this.selectedItem = "Roll";
    this.selectedGrade = "SS304";
    this.selectedRoll = "WR";
    this.panelCollapsed = true;
    this.sortField = "";
    this.sortDir = 1;
    this.millOptions = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.supplierOptions = ["Supplier 1", "Supplier 3", "Supplier 5"];
    this.itemOptions = ["Roll", "Choke"];
    this.gradeOptions = ["SS304", "SS316", "MS", "HSLA", "IF Steel", "API Grade"];
    this.rollOptions = ["WR", "BUR", "Edger", "Pinch"];
    this.millStatsData = [
      { parameter: "Avg Rolled Length", units: "Km", v1: 118.5, v2: 111.43, v3: 112.9 },
      { parameter: "Avg Rolled Tonage", units: "Ton/mm", v1: 180, v2: 175, v3: 170 },
      { parameter: "Avg Utilization", units: "%", v1: 98, v2: 95, v3: 92 },
      { parameter: "Avg Hourly Tonage", units: "Ton/Hr", v1: 50, v2: 48, v3: 45 },
      { parameter: "Total Breakdown", units: "Count", v1: 2, v2: 3, v3: 4 },
      { parameter: "Avg Coolant Conc", units: "%", v1: 80, v2: 85, v3: 90 },
      { parameter: "Avg Purchase Cost", units: "MINR", v1: 80, v2: 85, v3: 90 },
      { parameter: "Avg Cycles", units: "Count", v1: 10.2, v2: 9.9, v3: 8.6 },
      { parameter: "Avg Lead Time", units: "Months", v1: 8.9, v2: 7.2, v3: 9.5 },
      { parameter: "Avg Cost per Km", units: "MINR/Km", v1: 8.8, v2: 8.2, v3: 9.3 },
      { parameter: "Ratings", units: "/10", v1: 9.2, v2: 8.8, v3: 7.9 }
    ];
    this.supplierStatsData = [
      { parameter: "Avg Rolled Length", units: "Km", v1: 118.5, v2: 111.43, v3: 112.9 },
      { parameter: "Avg Rolled Tonage", units: "Ton/mm", v1: 180, v2: 175, v3: 170 },
      { parameter: "Avg Utilization", units: "%", v1: 98, v2: 95, v3: 92 },
      { parameter: "Avg Hourly Tonage", units: "Ton/Hr", v1: 50, v2: 48, v3: 45 },
      { parameter: "Total Breakdown", units: "Count", v1: 2, v2: 3, v3: 4 },
      { parameter: "Avg Coolant Conc", units: "%", v1: 80, v2: 85, v3: 90 },
      { parameter: "Avg Purchase Cost", units: "MINR", v1: 80, v2: 85, v3: 90 },
      { parameter: "Avg Cycles", units: "Count", v1: 10.2, v2: 9.9, v3: 8.6 },
      { parameter: "Avg Lead Time", units: "Months", v1: 8.9, v2: 7.2, v3: 9.5 },
      { parameter: "Avg Cost per Km", units: "MINR/Km", v1: 8.8, v2: 8.2, v3: 9.3 },
      { parameter: "Ratings", units: "/10", v1: 9.5, v2: 8.5, v3: 7.5 }
    ];
  }
  get dynamicLabel() {
    return this.isMillStats ? "MILL" : "SUPPLIER";
  }
  get currentHeaders() {
    if (this.isMillStats) {
      return ["Mill 1", "Mill 2", "Mill 3"];
    } else {
      return ["Supplier 1", "Supplier 3", "Supplier 5"];
    }
  }
  get currentData() {
    return this.isMillStats ? this.millStatsData : this.supplierStatsData;
  }
  get sortedData() {
    if (!this.sortField)
      return [...this.currentData];
    return [...this.currentData].sort((a, b) => {
      let va;
      let vb;
      if (this.sortField === "parameter") {
        va = a.parameter;
        vb = b.parameter;
      } else if (this.sortField === "units") {
        va = a.units;
        vb = b.units;
      } else if (this.sortField === "v1") {
        va = a.v1;
        vb = b.v1;
      } else if (this.sortField === "v2") {
        va = a.v2;
        vb = b.v2;
      } else if (this.sortField === "v3") {
        va = a.v3;
        vb = b.v3;
      } else {
        return 0;
      }
      if (va === vb)
        return 0;
      if (typeof va === "number" && typeof vb === "number") {
        return this.sortDir * (va - vb);
      }
      const cmp = String(va).localeCompare(String(vb), void 0, { numeric: true });
      return this.sortDir * (cmp < 0 ? -1 : 1);
    });
  }
  toggleMode() {
    this.isMillStats = !this.isMillStats;
    this.sortField = "";
    this.sortDir = 1;
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDir = this.sortDir === 1 ? -1 : 1;
    } else {
      this.sortField = field;
      this.sortDir = 1;
    }
  }
  getStars(val) {
    const stars = Math.round(val / 2);
    const filled = "\u2605".repeat(Math.min(stars, 5));
    const empty = "\u2606".repeat(5 - Math.min(stars, 5));
    return filled + empty;
  }
  getValueColor(row, col) {
    const vals = [row.v1, row.v2, row.v3].map(Number).filter((v) => !isNaN(v));
    if (vals.length === 0)
      return "#E8F0FE";
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    const val = Number(row[col]);
    if (!Number.isFinite(val))
      return "#E8F0FE";
    const upperBound = avg * 1.05;
    const lowerBound = avg * 0.95;
    const isLowerBetter = LOWER_IS_BETTER_PARAMS.includes(row.parameter);
    if (isLowerBetter) {
      if (val < lowerBound)
        return "#00E5A0";
      if (val > upperBound)
        return "#FF4560";
      return "#FF8C42";
    } else {
      if (val > upperBound)
        return "#00E5A0";
      if (val < lowerBound)
        return "#FF4560";
      return "#FF8C42";
    }
  }
  toggleDropdown(name) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  closeAll() {
    this.openDropdown = null;
  }
  selectMill(opt) {
    this.selectedMill = opt;
    this.openDropdown = null;
  }
  selectSupplier(opt) {
    this.selectedSupplier = opt;
    this.openDropdown = null;
  }
  selectItem(opt) {
    this.selectedItem = opt;
    this.openDropdown = null;
  }
  selectGrade(opt) {
    this.selectedGrade = opt;
    this.openDropdown = null;
  }
  selectRoll(opt) {
    this.selectedRoll = opt;
    this.openDropdown = null;
  }
  static {
    this.\u0275fac = function PerformanceComponent_Factory(t) {
      return new (t || _PerformanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerformanceComponent, selectors: [["app-performance"]], hostBindings: function PerformanceComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function PerformanceComponent_click_HostBindingHandler() {
          return ctx.closeAll();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 75, vars: 32, consts: [["normalValue", ""], ["normalValue2", ""], ["normalValue3", ""], [1, "perf-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "filter-card"], [1, "filter-heading"], [1, "toggle-wrap"], [1, "toggle-label"], ["type", "button", "role", "switch", 1, "toggle-pill", 3, "click"], [1, "toggle-thumb"], [4, "ngIf"], [1, "filter-group"], [1, "filter-label"], [1, "custom-select", 3, "click"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "table-card"], [1, "table-wrap"], [1, "perf-table"], [2, "width", "260px", "min-width", "260px"], [2, "width", "110px", "min-width", "110px"], [2, "width", "calc((100% - 370px) / 3)"], [1, "header-row"], [1, "col-param", 3, "click"], [1, "material-icons", "sort-icon"], [1, "col-units-h", 3, "click"], ["class", "col-val-h", 3, "click", 4, "ngFor", "ngForOf"], [3, "even", "rating-row", 4, "ngFor", "ngForOf"], [1, "select-option", 3, "click"], ["class", "option-check material-icons", 4, "ngIf"], [1, "option-check", "material-icons"], [1, "col-val-h", 3, "click"], [1, "col-parameter"], [1, "col-units"], [1, "col-value"], [4, "ngIf", "ngIfElse"], [1, "rating-cell"], [1, "rating-num"], [1, "rating-stars"]], template: function PerformanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "span", 5);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 6);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 7);
        \u0275\u0275text(7, "Performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 8)(9, "span", 9);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10)(12, "span", 11);
        \u0275\u0275text(13, "Supplier Stats");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 12);
        \u0275\u0275listener("click", function PerformanceComponent_Template_button_click_14_listener() {
          return ctx.toggleMode();
        });
        \u0275\u0275element(15, "span", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 11);
        \u0275\u0275text(17, "Mill Stats");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(18, PerformanceComponent_ng_container_18_Template, 12, 4, "ng-container", 14)(19, PerformanceComponent_ng_container_19_Template, 12, 4, "ng-container", 14);
        \u0275\u0275elementStart(20, "div", 15)(21, "label", 16);
        \u0275\u0275text(22, "SELECT ITEM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 17);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_23_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(24, "div", 18);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_24_listener() {
          return ctx.toggleDropdown("item");
        });
        \u0275\u0275elementStart(25, "span", 19);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 20);
        \u0275\u0275text(28, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 21);
        \u0275\u0275template(30, PerformanceComponent_div_30_Template, 3, 4, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 15)(32, "label", 16);
        \u0275\u0275text(33, "SELECT GRADE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_34_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(35, "div", 18);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_35_listener() {
          return ctx.toggleDropdown("grade");
        });
        \u0275\u0275elementStart(36, "span", 19);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 20);
        \u0275\u0275text(39, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 21);
        \u0275\u0275template(41, PerformanceComponent_div_41_Template, 3, 4, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 15)(43, "label", 16);
        \u0275\u0275text(44, "SELECT ROLL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 17);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_45_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(46, "div", 18);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_46_listener() {
          return ctx.toggleDropdown("roll");
        });
        \u0275\u0275elementStart(47, "span", 19);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 20);
        \u0275\u0275text(50, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 21);
        \u0275\u0275template(52, PerformanceComponent_div_52_Template, 3, 4, "div", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(53, "div", 23)(54, "div", 24)(55, "table", 25)(56, "colgroup");
        \u0275\u0275element(57, "col", 26)(58, "col", 27)(59, "col", 28)(60, "col", 28)(61, "col", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "thead")(63, "tr", 29)(64, "th", 30);
        \u0275\u0275listener("click", function PerformanceComponent_Template_th_click_64_listener() {
          return ctx.sort("parameter");
        });
        \u0275\u0275text(65, " Parameters ");
        \u0275\u0275elementStart(66, "span", 31);
        \u0275\u0275text(67, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "th", 32);
        \u0275\u0275listener("click", function PerformanceComponent_Template_th_click_68_listener() {
          return ctx.sort("units");
        });
        \u0275\u0275text(69, " Units ");
        \u0275\u0275elementStart(70, "span", 31);
        \u0275\u0275text(71, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(72, PerformanceComponent_th_72_Template, 4, 3, "th", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "tbody");
        \u0275\u0275template(74, PerformanceComponent_tr_74_Template, 17, 20, "tr", 34);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dynamicLabel);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", !ctx.isMillStats)("inactive", ctx.isMillStats);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.isMillStats);
        \u0275\u0275attribute("aria-checked", ctx.isMillStats);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.isMillStats)("inactive", !ctx.isMillStats);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isMillStats);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isMillStats);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "item");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedItem);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.itemOptions);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "grade");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedGrade);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.gradeOptions);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "roll");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedRoll);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.rollOptions);
        \u0275\u0275advance(14);
        \u0275\u0275classProp("active", ctx.sortField === "parameter");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.sortField === "units");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.currentHeaders);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.sortedData);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule], styles: ["\n\n.perf-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.filter-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n}\n.filter-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: #E8F0FE;\n  text-transform: uppercase;\n  margin-right: 8px;\n  flex-shrink: 0;\n}\n.toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3D5175;\n  font-weight: 400;\n}\n.toggle-label.inactive[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.toggle-label.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 700;\n}\n.toggle-pill[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 26px;\n  border-radius: 13px;\n  border: none;\n  background: #2563EB;\n  cursor: pointer;\n  position: relative;\n  transition: background 0.3s;\n}\n.toggle-pill.on[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.3s;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 140px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  margin-bottom: 4px;\n}\n.filter-select[_ngcontent-%COMP%] {\n  min-width: 140px;\n  max-width: 180px;\n}\n.table-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  overflow: hidden;\n  width: 100%;\n  margin-top: 0;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 520px;\n}\n.perf-table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n.perf-table[_ngcontent-%COMP%]   .header-row[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  background: #0D1628;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .perf-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n  padding: 13px 20px;\n  box-sizing: border-box;\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.2s;\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  vertical-align: middle;\n  margin-left: 4px;\n  color: #3D5175;\n  cursor: pointer;\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-icon.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n}\n.perf-table[_ngcontent-%COMP%]   .col-param[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 20px;\n}\n.perf-table[_ngcontent-%COMP%]   .col-units-h[_ngcontent-%COMP%], .perf-table[_ngcontent-%COMP%]   .col-val-h[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.perf-table[_ngcontent-%COMP%]   td.col-parameter[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 20px;\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.perf-table[_ngcontent-%COMP%]   td.col-parameter.rating-row[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.perf-table[_ngcontent-%COMP%]   td.col-units[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #7B90B8;\n  font-size: 12px;\n}\n.perf-table[_ngcontent-%COMP%]   td.col-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.rating-row[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.03);\n  border-top: 2px solid rgba(0, 212, 255, 0.1);\n}\n.perf-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n}\n.rating-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.rating-num[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 15px;\n  letter-spacing: 3px;\n  color: #FFB800;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=performance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerformanceComponent, { className: "PerformanceComponent", filePath: "src\\app\\features\\performance\\performance.component.ts", lineNumber: 27 });
})();
export {
  PerformanceComponent
};
//# sourceMappingURL=chunk-LALZ3I2A.js.map
