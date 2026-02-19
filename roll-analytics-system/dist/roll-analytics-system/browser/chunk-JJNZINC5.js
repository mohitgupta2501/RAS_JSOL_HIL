import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ABWFYJAQ.js";
import {
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
} from "./chunk-NI6J6SBZ.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/performance/performance.component.ts
function PerformanceComponent_ng_container_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_18_div_11_Template_div_click_0_listener() {
      const opt_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMill(opt_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedMill === opt_r4);
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
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
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
    \u0275\u0275template(11, PerformanceComponent_ng_container_18_div_11_Template, 2, 3, "div", 22);
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
function PerformanceComponent_ng_container_19_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PerformanceComponent_ng_container_19_div_11_Template_div_click_0_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectSupplier(opt_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedSupplier === opt_r7);
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
    \u0275\u0275elementStart(4, "div", 17)(5, "div", 18);
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
    \u0275\u0275template(11, PerformanceComponent_ng_container_19_div_11_Template, 2, 3, "div", 22);
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
function PerformanceComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PerformanceComponent_div_30_Template_div_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItem(opt_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selectedItem === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r9, " ");
  }
}
function PerformanceComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PerformanceComponent_div_46_Template_div_click_0_listener() {
      const opt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRoll(opt_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r1.selectedRoll === opt_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r11, " ");
  }
}
function PerformanceComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275listener("click", function PerformanceComponent_th_60_Template_th_click_0_listener() {
      const i_r13 = \u0275\u0275restoreView(_r12).index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sort("v" + (i_r13 + 1)));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 30);
    \u0275\u0275text(3, "unfold_more");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const header_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", header_r14, " ");
  }
}
function PerformanceComponent_tr_62_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r15.v1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r15.v1));
  }
}
function PerformanceComponent_tr_62_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r15.v1);
  }
}
function PerformanceComponent_tr_62_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r15.v2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r15.v2));
  }
}
function PerformanceComponent_tr_62_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r15.v2);
  }
}
function PerformanceComponent_tr_62_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r15.v3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getStars(row_r15.v3));
  }
}
function PerformanceComponent_tr_62_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r15.v3);
  }
}
function PerformanceComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275template(6, PerformanceComponent_tr_62_ng_container_6_Template, 6, 2, "ng-container", 37)(7, PerformanceComponent_tr_62_ng_template_7_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275template(10, PerformanceComponent_tr_62_ng_container_10_Template, 6, 2, "ng-container", 37)(11, PerformanceComponent_tr_62_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36);
    \u0275\u0275template(14, PerformanceComponent_tr_62_ng_container_14_Template, 6, 2, "ng-container", 37)(15, PerformanceComponent_tr_62_ng_template_15_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const normalValue_r17 = \u0275\u0275reference(8);
    const normalValue2_r18 = \u0275\u0275reference(12);
    const normalValue3_r19 = \u0275\u0275reference(16);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("even", i_r16 % 2 === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("rating-row", row_r15.parameter === "Ratings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r15.parameter, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.units);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r15, "v1"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r15.parameter === "Ratings")("ngIfElse", normalValue_r17);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r15, "v2"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r15.parameter === "Ratings")("ngIfElse", normalValue2_r18);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("color", ctx_r1.getValueColor(row_r15, "v3"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r15.parameter === "Ratings")("ngIfElse", normalValue3_r19);
  }
}
var PerformanceComponent = class _PerformanceComponent {
  constructor() {
    this.isMillStats = false;
    this.selectedMill = "Mill 1";
    this.selectedSupplier = "Supplier 1";
    this.selectedItem = "Roll";
    this.chokeOn = false;
    this.selectedRoll = "WR";
    this.panelCollapsed = true;
    this.sortField = "";
    this.sortDir = 1;
    this.openDropdown = null;
    this.millOptions = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.supplierOptions = ["Supplier 1", "Supplier 3", "Supplier 5"];
    this.itemOptions = ["Roll", "Choke"];
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
    return this.isMillStats ? "SUPPLIER" : "MILL";
  }
  get currentHeaders() {
    if (this.isMillStats) {
      return ["Supplier 1", "Supplier 3", "Supplier 5"];
    } else {
      return ["Mill 1", "Mill 2", "Mill 3"];
    }
  }
  get currentData() {
    return this.isMillStats ? this.supplierStatsData : this.millStatsData;
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
    return "\u2605".repeat(Math.round(val));
  }
  getValueColor(row, col) {
    if (row.parameter === "Total Breakdown") {
      if (col === "v1")
        return "#00E5A0";
      if (col === "v2")
        return "#FF8C42";
      if (col === "v3")
        return "#FF4560";
    } else {
      if (col === "v1")
        return "#00D4FF";
      if (col === "v2")
        return "#FF8C42";
      if (col === "v3")
        return "#FF8C42";
    }
    return "#E8F0FE";
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
  selectSupplier(val) {
    this.selectedSupplier = val;
    this.openDropdown = null;
  }
  selectItem(val) {
    this.selectedItem = val;
    this.openDropdown = null;
  }
  selectRoll(val) {
    this.selectedRoll = val;
    this.openDropdown = null;
  }
  onDocClick(e) {
    if (!e.target.closest(".custom-select")) {
      this.openDropdown = null;
    }
  }
  static {
    this.\u0275fac = function PerformanceComponent_Factory(t) {
      return new (t || _PerformanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerformanceComponent, selectors: [["app-performance"]], hostBindings: function PerformanceComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function PerformanceComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 63, vars: 23, consts: [["normalValue", ""], ["normalValue2", ""], ["normalValue3", ""], [1, "perf-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "filter-card"], [1, "filter-label"], [1, "toggle-wrap"], [1, "toggle-label"], ["type", "button", "role", "switch", 1, "toggle-pill", 3, "click"], [1, "toggle-thumb"], [4, "ngIf"], [1, "dropdown-wrap"], [1, "dropdown-label"], [1, "custom-select"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "choke-wrap"], [1, "choke-label"], ["type", "button", 1, "choke-pill", 3, "click"], [1, "table-card"], [1, "table-wrap"], [1, "perf-table"], [3, "click"], [1, "material-icons", "sort-icon"], [3, "click", 4, "ngFor", "ngForOf"], [3, "even", 4, "ngFor", "ngForOf"], [1, "select-option", 3, "click"], [1, "col-parameter"], [1, "col-units"], [1, "col-value"], [4, "ngIf", "ngIfElse"], [1, "rating-cell"], [1, "rating-num"], [1, "rating-stars"]], template: function PerformanceComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(23, "div", 17)(24, "div", 18);
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
        \u0275\u0275template(30, PerformanceComponent_div_30_Template, 2, 3, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 23)(32, "label", 24);
        \u0275\u0275text(33, "CHOKE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "button", 25);
        \u0275\u0275listener("click", function PerformanceComponent_Template_button_click_34_listener() {
          return ctx.chokeOn = !ctx.chokeOn;
        });
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 15)(37, "label", 16);
        \u0275\u0275text(38, "SELECT ROLL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 17)(40, "div", 18);
        \u0275\u0275listener("click", function PerformanceComponent_Template_div_click_40_listener() {
          return ctx.toggleDropdown("roll");
        });
        \u0275\u0275elementStart(41, "span", 19);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 20);
        \u0275\u0275text(44, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 21);
        \u0275\u0275template(46, PerformanceComponent_div_46_Template, 2, 3, "div", 22);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "div", 26)(48, "div", 27)(49, "table", 28)(50, "thead")(51, "tr")(52, "th", 29);
        \u0275\u0275listener("click", function PerformanceComponent_Template_th_click_52_listener() {
          return ctx.sort("parameter");
        });
        \u0275\u0275text(53, " Parameters ");
        \u0275\u0275elementStart(54, "span", 30);
        \u0275\u0275text(55, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "th", 29);
        \u0275\u0275listener("click", function PerformanceComponent_Template_th_click_56_listener() {
          return ctx.sort("units");
        });
        \u0275\u0275text(57, " Units ");
        \u0275\u0275elementStart(58, "span", 30);
        \u0275\u0275text(59, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(60, PerformanceComponent_th_60_Template, 4, 1, "th", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "tbody");
        \u0275\u0275template(62, PerformanceComponent_tr_62_Template, 17, 18, "tr", 32);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.dynamicLabel);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inactive", ctx.isMillStats);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("on", ctx.isMillStats);
        \u0275\u0275attribute("aria-checked", ctx.isMillStats);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inactive", !ctx.isMillStats);
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
        \u0275\u0275classProp("on", ctx.chokeOn);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.chokeOn ? "ON" : "OFF", " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.openDropdown === "roll");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedRoll);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.rollOptions);
        \u0275\u0275advance(14);
        \u0275\u0275property("ngForOf", ctx.currentHeaders);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.sortedData);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.perf-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.filter-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  letter-spacing: 2px;\n  color: #E8F0FE;\n  text-transform: uppercase;\n}\n.toggle-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #E8F0FE;\n  font-weight: 600;\n}\n.toggle-label.inactive[_ngcontent-%COMP%] {\n  color: #3D5175;\n  font-weight: 400;\n}\n.toggle-pill[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 26px;\n  border-radius: 13px;\n  border: none;\n  background: #2563EB;\n  cursor: pointer;\n  position: relative;\n  transition: background 0.3s;\n}\n.toggle-pill.on[_ngcontent-%COMP%]   .toggle-thumb[_ngcontent-%COMP%] {\n  transform: translateX(22px);\n}\n.toggle-thumb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 2px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: white;\n  transition: transform 0.3s;\n}\n.dropdown-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.dropdown-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.custom-select[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 140px;\n}\n.select-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 8px 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.select-trigger[_ngcontent-%COMP%]:hover {\n  border-color: #00D4FF;\n  background: rgba(0, 212, 255, 0.08);\n}\n.select-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7B90B8;\n  transition: transform 0.2s ease;\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-trigger[_ngcontent-%COMP%] {\n  border-color: #2563EB;\n  background: rgba(37, 99, 235, 0.1);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: #00D4FF;\n}\n.select-options[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: calc(100% + 6px);\n  left: 0;\n  right: 0;\n  background: #0F1A2E;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n  z-index: 9999;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 212, 255, 0.05);\n  animation: _ngcontent-%COMP%_dropdownFade 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_dropdownFade {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.custom-select.open[_ngcontent-%COMP%]   .select-options[_ngcontent-%COMP%] {\n  display: block;\n}\n.select-option[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n  font-family: "Inter", sans-serif;\n  color: #7B90B8;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n.select-option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.select-option[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.15);\n  color: #E8F0FE;\n  padding-left: 18px;\n}\n.select-option.selected[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.1);\n  color: #00D4FF;\n  font-weight: 600;\n  border-left: 2px solid #00D4FF;\n}\n.choke-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.choke-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  margin-bottom: 4px;\n}\n.choke-pill[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 4px 16px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  border: 1px solid #1A2844;\n  background: rgba(255, 255, 255, 0.08);\n  color: #7B90B8;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.choke-pill.on[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.15);\n  color: #00E5A0;\n  border: 1px solid rgba(0, 229, 160, 0.3);\n}\n.table-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.perf-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.perf-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  text-align: left;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: background 0.2s;\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n}\n.perf-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.perf-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.perf-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  font-size: 13.5px;\n  vertical-align: middle;\n}\n.col-parameter[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.col-parameter.rating-row[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.col-units[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.col-value[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n}\n.rating-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.rating-num[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13.5px;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 2px;\n  color: #FFB800;\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: rgba(255, 140, 66, 0.03);\n  border: none;\n  font-size: 13px;\n  color: #7B90B8;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s;\n}\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 140, 66, 0.06);\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF8C42;\n}\n.accordion-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.accordion-chevron[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7B90B8;\n}\n/*# sourceMappingURL=performance.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerformanceComponent, { className: "PerformanceComponent", filePath: "src\\app\\features\\performance\\performance.component.ts", lineNumber: 19 });
})();
export {
  PerformanceComponent
};
//# sourceMappingURL=chunk-JJNZINC5.js.map
