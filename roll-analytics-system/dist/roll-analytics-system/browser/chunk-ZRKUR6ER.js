import {
  NgxEchartsDirective,
  NgxEchartsModule
} from "./chunk-WWKEGZW6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
import "./chunk-GLLL6ZVE.js";

// src/app/features/dashboard/dashboard.component.ts
function DashboardComponent_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DashboardComponent_div_18_Template_div_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectItem(opt_r2));
    });
    \u0275\u0275template(1, DashboardComponent_div_18_span_1_Template, 2, 0, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedItem === opt_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedItem === opt_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2, " ");
  }
}
function DashboardComponent_div_26_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DashboardComponent_div_26_Template_div_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectLocation(opt_r5));
    });
    \u0275\u0275template(1, DashboardComponent_div_26_span_1_Template, 2, 0, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedLocation === opt_r5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedLocation === opt_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5, " ");
  }
}
function DashboardComponent_div_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DashboardComponent_div_34_Template_div_click_0_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRoll(opt_r7));
    });
    \u0275\u0275template(1, DashboardComponent_div_34_span_1_Template, 2, 0, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedRoll === opt_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedRoll === opt_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r7, " ");
  }
}
function DashboardComponent_div_42_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DashboardComponent_div_42_Template_div_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectPosition(opt_r9));
    });
    \u0275\u0275template(1, DashboardComponent_div_42_span_1_Template, 2, 0, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selectedPosition === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPosition === opt_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r9, " ");
  }
}
function DashboardComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.diameterChartOptions)("autoResize", true);
  }
}
function DashboardComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275element(2, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r2.costChartOptions)("autoResize", true);
  }
}
function DashboardComponent_div_119_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_119_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275listener("click", function DashboardComponent_div_119_div_14_Template_div_click_0_listener() {
      const s_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectSupplier(s_r12));
    });
    \u0275\u0275template(1, DashboardComponent_div_119_div_14_span_1_Template, 2, 0, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedSupplier === s_r12);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedSupplier === s_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r12, " ");
  }
}
function DashboardComponent_div_119_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 58)(14, "button", 59);
    \u0275\u0275listener("click", function DashboardComponent_div_119_tr_34_Template_button_click_14_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openBreakageModal(row_r14.rollId));
    });
    \u0275\u0275text(15, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("even", i_r15 % 2 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.rollId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.rollType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.poDelivery);
    \u0275\u0275advance();
    \u0275\u0275classProp("late", ctx_r2.isDeliveryLate(row_r14))("ontime", !ctx_r2.isDeliveryLate(row_r14));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.actualDelivery, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.remarks);
  }
}
function DashboardComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "div", 42)(3, "span", 43);
    \u0275\u0275text(4, "Roll Supplier History:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 44);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275listener("click", function DashboardComponent_div_119_Template_div_click_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275listener("click", function DashboardComponent_div_119_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("supplier"));
    });
    \u0275\u0275elementStart(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 11);
    \u0275\u0275template(14, DashboardComponent_div_119_div_14_Template, 3, 4, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 46)(16, "table", 47)(17, "thead")(18, "tr")(19, "th");
    \u0275\u0275text(20, "Roll ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Roll Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "PO Delivery Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Actual Delivery Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Price(MINR)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Strip Breakage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, DashboardComponent_div_119_tr_34_Template, 16, 12, "tr", 48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 49)(36, "button", 50);
    \u0275\u0275listener("click", function DashboardComponent_div_119_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.prevPage());
    });
    \u0275\u0275text(37, "Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 51);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 50);
    \u0275\u0275listener("click", function DashboardComponent_div_119_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextPage());
    });
    \u0275\u0275text(41, "Next");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedSupplier);
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r2.openDropdown === "supplier");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedSupplier);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.supplierOptions);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.rollSupplierData);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.currentPage === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.currentPage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.currentPage >= ctx_r2.totalPages);
  }
}
function DashboardComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function DashboardComponent_div_120_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBreakageModal = false);
    });
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_div_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function DashboardComponent_div_121_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 62)(2, "div", 63)(3, "span", 64);
    \u0275\u0275text(4, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Strip Breakage Analysis ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 65)(7, "div", 66)(8, "span", 67);
    \u0275\u0275text(9, "Roll ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 68);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 66)(13, "span", 67);
    \u0275\u0275text(14, "Breakage Count:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 69);
    \u0275\u0275text(16, "2 Breakages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 66)(18, "span", 67);
    \u0275\u0275text(19, "Failure Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 69);
    \u0275\u0275text(21, "High Tension Zone");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 66)(23, "span", 67);
    \u0275\u0275text(24, "Failure Mode:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 69);
    \u0275\u0275text(26, "Strip snap at Stand-3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 70);
    \u0275\u0275text(28, "Probable Cause:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "ul", 71)(30, "li");
    \u0275\u0275text(31, "Sudden tensile overload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "Improper roll crown / profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "High inter-stand tension");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "Strip camber / steering issue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Material grade variation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 70);
    \u0275\u0275text(41, "History / Observation:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 72);
    \u0275\u0275text(43, " Repeated strip instability observed during last rolling cycle. Operator intervention required. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 73)(45, "button", 74);
    \u0275\u0275listener("click", function DashboardComponent_div_121_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showBreakageModal = false);
    });
    \u0275\u0275text(46, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.selectedRollId);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.activeTab = "diameter";
    this.showBreakageModal = false;
    this.selectedRollId = "";
    this.openDropdown = null;
    this.selectedItem = "Roll";
    this.selectedLocation = "E1";
    this.selectedRoll = "Edger Roll";
    this.selectedPosition = "Drive Side";
    this.selectedSupplier = "Supplier 1";
    this.searchQuery = "";
    this.itemOptions = ["Roll", "Bearing", "Sleeve"];
    this.locationOptions = ["E1", "E2", "F1", "F2", "F3"];
    this.rollOptions = ["Edger Roll", "Work Roll", "Backup Roll"];
    this.positionOptions = ["Drive Side", "Operator Side"];
    this.diameterChartOptions = {};
    this.costChartOptions = {};
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalPages = 1;
    this.supplierOptions = [
      "Supplier 1",
      "Supplier 2",
      "Supplier 3",
      "Supplier 4",
      "Supplier 5",
      "Supplier 6",
      "Supplier 7",
      "Supplier 8",
      "Supplier 9",
      "Supplier 10"
    ];
    this.rollSupplierData = [
      {
        rollId: "WR123",
        rollType: "WR",
        poDelivery: "2025-03-11",
        actualDelivery: "2025-01-15",
        price: 14.5,
        remarks: "Warranty 18 month from delivery",
        stripBreakage: true
      },
      {
        rollId: "IMR58",
        rollType: "IMR",
        poDelivery: "2025-02-16",
        actualDelivery: "2025-05-20",
        price: 13.7,
        remarks: "Warranty 18 month from usage starts",
        stripBreakage: true
      },
      {
        rollId: "BUR354",
        rollType: "BUR",
        poDelivery: "2025-02-16",
        actualDelivery: "2025-05-20",
        price: 94.2,
        remarks: "Warranty 18 month from delivery",
        stripBreakage: true
      },
      {
        rollId: "BUR054",
        rollType: "BUR",
        poDelivery: "2025-02-16",
        actualDelivery: "2025-03-20",
        price: 96.1,
        remarks: "Buy back of used roll",
        stripBreakage: true
      },
      {
        rollId: "IMR516",
        rollType: "IMR",
        poDelivery: "2025-02-16",
        actualDelivery: "2025-01-20",
        price: 11.9,
        remarks: "Max. operating temp. 110 degree cels.",
        stripBreakage: true
      }
    ];
  }
  ngOnInit() {
    this.totalPages = Math.max(1, Math.ceil(this.rollSupplierData.length / this.itemsPerPage));
    this.buildDiameterChartOptions();
    this.buildCostChartOptions();
  }
  buildDiameterChartOptions() {
    this.diameterChartOptions = {
      backgroundColor: "transparent",
      legend: {
        data: ["Current Dia.(mm)", "Best Dia.(mm)", "Current Roll(%)", "Best Roll(%)"],
        textStyle: { color: "#7B90B8" },
        top: 0
      },
      grid: { left: 60, right: 60, top: 50, bottom: 50, containLabel: true },
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15, 26, 46, 0.95)",
        borderColor: "rgba(0, 212, 255, 0.2)",
        textStyle: { color: "#E8F0FE" }
      },
      xAxis: {
        type: "category",
        data: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
        name: "Cycles",
        nameLocation: "middle",
        nameGap: 28,
        axisLabel: { color: "#7B90B8" },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
        splitLine: { show: false }
      },
      yAxis: [
        {
          type: "value",
          name: "Utilization (%)",
          min: 0,
          max: 100,
          axisLabel: { color: "#7B90B8" },
          splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
          axisLine: { show: false }
        },
        {
          type: "value",
          name: "Diameter (mm)",
          min: 360,
          max: 470,
          axisLabel: { color: "#7B90B8" },
          splitLine: { show: false },
          axisLine: { show: false }
        }
      ],
      series: [
        {
          name: "Current Dia.(mm)",
          type: "bar",
          yAxisIndex: 1,
          data: [460, 440, 412, 398, 382, "-", "-", "-", "-", "-"],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#7B1FA2" },
                { offset: 1, color: "#9C27B0" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: 18,
          barGap: "10%"
        },
        {
          name: "Best Dia.(mm)",
          type: "bar",
          yAxisIndex: 1,
          data: [462, 448, 430, 418, 408, 420, 430, 445, 458, 465],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#2E7D32" },
                { offset: 1, color: "#4CAF50" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: 18
        },
        {
          name: "Current Roll(%)",
          type: "line",
          yAxisIndex: 0,
          data: ["-", "-", "-", "-", 40, "-", "-", "-", "-", "-"],
          lineStyle: { color: "#1565C0", width: 2.5 },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: { color: "#2196F3" },
          smooth: false
        },
        {
          name: "Best Roll(%)",
          type: "line",
          yAxisIndex: 0,
          data: [6, 12, 20, 30, 45, 58, 72, 82, 90, 96],
          lineStyle: { color: "#2E7D32", width: 2, type: "solid" },
          symbol: "emptyCircle",
          symbolSize: 8,
          itemStyle: { color: "#4CAF50" },
          smooth: false
        }
      ]
    };
  }
  buildCostChartOptions() {
    this.costChartOptions = {
      backgroundColor: "transparent",
      legend: {
        data: ["Best Avg MINR/Km", "Avg MINR/Km", "Avg Cost(MINR)", "Avg Lead Team(Months)"],
        textStyle: { color: "#7B90B8" },
        top: 0
      },
      grid: { left: 60, right: 60, top: 50, bottom: 50, containLabel: true },
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(15, 26, 46, 0.95)",
        borderColor: "rgba(0, 212, 255, 0.2)",
        textStyle: { color: "#E8F0FE" }
      },
      xAxis: {
        type: "category",
        data: [
          "Supplier 1",
          "Supplier 2",
          "Supplier 3",
          "Supplier 4",
          "Supplier 5",
          "Supplier 6",
          "Supplier 7",
          "Supplier 8",
          "Supplier 9",
          "Supplier 10"
        ],
        axisLabel: { color: "#7B90B8", rotate: 30 },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.1)" } },
        splitLine: { show: false }
      },
      yAxis: [
        {
          type: "value",
          name: "Cost/km",
          min: 0,
          max: 0.8,
          axisLabel: { color: "#7B90B8" },
          splitLine: { lineStyle: { color: "rgba(255,255,255,0.05)" } },
          axisLine: { show: false }
        },
        {
          type: "value",
          name: "Cost/Cycle",
          min: 11,
          max: 20.5,
          axisLabel: { color: "#7B90B8" },
          splitLine: { show: false },
          axisLine: { show: false }
        }
      ],
      series: [
        {
          name: "Best Avg MINR/Km",
          type: "line",
          yAxisIndex: 0,
          data: [0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52, 0.52],
          lineStyle: { type: "dashed", color: "#1565C0", width: 2 },
          symbol: "emptyCircle",
          symbolSize: 6,
          itemStyle: { color: "#2196F3" }
        },
        {
          name: "Avg MINR/Km",
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
                { offset: 1, color: "#1976D2" }
              ]
            }
          },
          barWidth: 16,
          barGap: "5%"
        },
        {
          name: "Avg Cost(MINR)",
          type: "bar",
          yAxisIndex: 0,
          data: [0.5, 0.36, 0.05, 0.23, 0.64, 0.76, 0.57, 0.41, 0.25, 0.59],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#E65100" },
                { offset: 1, color: "#FF9800" }
              ]
            }
          },
          barWidth: 16
        },
        {
          name: "Avg Lead Team(Months)",
          type: "bar",
          yAxisIndex: 1,
          data: [19, 18.5, 18, 18, 18, 19, 17.5, 18.5, 19, 20],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#6A1B9A" },
                { offset: 1, color: "#9C27B0" }
              ]
            }
          },
          barWidth: 16
        }
      ]
    };
  }
  openBreakageModal(rollId) {
    this.selectedRollId = rollId;
    this.showBreakageModal = true;
  }
  switchTab(tab) {
    this.activeTab = tab;
  }
  isDeliveryLate(row) {
    return new Date(row.actualDelivery) > new Date(row.poDelivery);
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  toggleDropdown(name) {
    this.openDropdown = this.openDropdown === name ? null : name;
  }
  closeAll() {
    this.openDropdown = null;
  }
  selectItem(opt) {
    this.selectedItem = opt;
    this.openDropdown = null;
  }
  selectLocation(opt) {
    this.selectedLocation = opt;
    this.openDropdown = null;
  }
  selectRoll(opt) {
    this.selectedRoll = opt;
    this.openDropdown = null;
  }
  selectPosition(opt) {
    this.selectedPosition = opt;
    this.openDropdown = null;
  }
  selectSupplier(s) {
    this.selectedSupplier = s;
    this.openDropdown = null;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], hostBindings: function DashboardComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function DashboardComponent_click_HostBindingHandler() {
          return ctx.closeAll();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 122, vars: 28, consts: [[1, "dashboard-page"], [1, "filter-bar"], [1, "filter-left"], [1, "stats-label"], ["href", "javascript:void(0)", 1, "stats-link", 3, "click"], ["type", "text", "placeholder", "Search Roll / Coil ID", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-right"], [1, "custom-select", 3, "click"], [1, "select-trigger", 3, "click"], [1, "select-value"], [1, "material-icons", "select-arrow"], [1, "select-options"], ["class", "select-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-card-header"], [1, "stat-card-body", "two-col"], [1, "stat-half"], [1, "stat-label"], [1, "stat-value", "green"], [1, "stat-meta", "cyan"], [1, "stat-value", "orange"], [1, "stat-meta"], [1, "stat-card-body", "single-col"], [1, "stat-value", "cyan"], [1, "stat-divider"], [1, "stat-value", "red"], [1, "stat-value", "green", "big"], [1, "tabs-row"], ["type", "button", 1, "tab-btn", 3, "click"], ["class", "chart-card", 4, "ngIf"], ["class", "supplier-card", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["class", "breakage-modal", 3, "click", 4, "ngIf"], [1, "select-option", 3, "click"], ["class", "option-check material-icons", 4, "ngIf"], [1, "option-check", "material-icons"], [1, "chart-card"], [1, "chart-container"], ["echarts", "", 1, "chart", 3, "options", "autoResize"], [1, "supplier-card"], [1, "supplier-header"], [1, "supplier-title-wrap"], [1, "supplier-title-label"], [1, "supplier-title-value"], [1, "custom-select", "supplier-dropdown", 3, "click"], [1, "table-wrapper"], [1, "supplier-table"], [3, "even", 4, "ngFor", "ngForOf"], [1, "pagination-wrap"], ["type", "button", 1, "page-btn", 3, "click", "disabled"], ["type", "button", 1, "page-btn", "active"], [1, "col-roll-id"], [1, "col-roll-type"], [1, "col-po-delivery"], [1, "col-actual-delivery"], [1, "col-price"], [1, "col-remarks"], [1, "col-breakage"], ["type", "button", 1, "view-breakage-btn", 3, "click"], [1, "modal-backdrop", 3, "click"], [1, "breakage-modal", 3, "click"], [1, "modal-header"], [1, "modal-title"], [1, "material-icons", 2, "color", "#FF8C42"], [1, "modal-body"], [1, "info-row"], [1, "info-label"], [1, "info-value", "cyan"], [1, "info-value"], [1, "section-title"], [1, "cause-list"], [1, "observation"], [1, "modal-footer"], ["type", "button", 1, "close-btn", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "Stats for: WR (ID: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "a", 4);
        \u0275\u0275listener("click", function DashboardComponent_Template_a_click_5_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275text(6, "WR123");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, " )");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_9_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_11_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_12_listener() {
          return ctx.toggleDropdown("item");
        });
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 11);
        \u0275\u0275template(18, DashboardComponent_div_18_Template, 3, 4, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 7);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_19_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(20, "div", 8);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_20_listener() {
          return ctx.toggleDropdown("location");
        });
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 10);
        \u0275\u0275text(24, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 11);
        \u0275\u0275template(26, DashboardComponent_div_26_Template, 3, 4, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 7);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_27_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(28, "div", 8);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_28_listener() {
          return ctx.toggleDropdown("roll");
        });
        \u0275\u0275elementStart(29, "span", 9);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 10);
        \u0275\u0275text(32, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 11);
        \u0275\u0275template(34, DashboardComponent_div_34_Template, 3, 4, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 7);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_35_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(36, "div", 8);
        \u0275\u0275listener("click", function DashboardComponent_Template_div_click_36_listener() {
          return ctx.toggleDropdown("position");
        });
        \u0275\u0275elementStart(37, "span", 9);
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span", 10);
        \u0275\u0275text(40, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 11);
        \u0275\u0275template(42, DashboardComponent_div_42_Template, 3, 4, "div", 12);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 13)(44, "div", 14)(45, "div", 15);
        \u0275\u0275text(46, "WR ROLLED LENGTH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 16)(48, "div", 17)(49, "div", 18);
        \u0275\u0275text(50, "Best Achieved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 19);
        \u0275\u0275text(52, "8.85 Km");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 20);
        \u0275\u0275text(54, "Supplier1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 17)(56, "div", 18);
        \u0275\u0275text(57, "Curr. Vendor: Supplier3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 21);
        \u0275\u0275text(59, "7 Km");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 22);
        \u0275\u0275text(61, "Best: 7.87 Km");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(62, "div", 14)(63, "div", 15);
        \u0275\u0275text(64, "WR BEST PRICE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 23)(66, "div", 18);
        \u0275\u0275text(67, "Vendor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 24);
        \u0275\u0275text(69, "Supplier1");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "div", 25);
        \u0275\u0275elementStart(71, "div", 18);
        \u0275\u0275text(72, "Price");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 19);
        \u0275\u0275text(74, "11.76 MINR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 18);
        \u0275\u0275text(76, "PO Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div", 22);
        \u0275\u0275text(78, "11/24/2024");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 14)(80, "div", 15);
        \u0275\u0275text(81, "WR EOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "div", 16)(83, "div", 17)(84, "div", 18);
        \u0275\u0275text(85, "Best Achieved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 19);
        \u0275\u0275text(87, "9.85 Km");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 20);
        \u0275\u0275text(89, "Supplier1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 17)(91, "div", 18);
        \u0275\u0275text(92, "Curr. Vendor Supplier3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 21);
        \u0275\u0275text(94, "Best: 7.37 Km");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 26);
        \u0275\u0275text(96, "Remain: 0.65 Km");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "div", 14)(98, "div", 15);
        \u0275\u0275text(99, "WR CAPACITY UTILIZATION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 23)(101, "div", 18);
        \u0275\u0275text(102, "Best Achieved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "div", 27);
        \u0275\u0275text(104, "95.96 %");
        \u0275\u0275elementEnd();
        \u0275\u0275element(105, "div", 25);
        \u0275\u0275elementStart(106, "div", 20);
        \u0275\u0275text(107, "Vendor: Supplier4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 21);
        \u0275\u0275text(109, "Curr. Vendor: 73.25 %");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(110, "div", 28)(111, "button", 29);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_111_listener() {
          return ctx.switchTab("diameter");
        });
        \u0275\u0275text(112, " Diameter Utilization ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "button", 29);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_113_listener() {
          return ctx.switchTab("cost");
        });
        \u0275\u0275text(114, " WR Cost ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "button", 29);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_115_listener() {
          return ctx.switchTab("supplier");
        });
        \u0275\u0275text(116, " Roll Supplier ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(117, DashboardComponent_div_117_Template, 3, 2, "div", 30)(118, DashboardComponent_div_118_Template, 3, 2, "div", 30)(119, DashboardComponent_div_119_Template, 42, 9, "div", 31)(120, DashboardComponent_div_120_Template, 1, 0, "div", 32)(121, DashboardComponent_div_121_Template, 47, 1, "div", 33);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("open", ctx.openDropdown === "item");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedItem);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.itemOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "location");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedLocation);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.locationOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "roll");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedRoll);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.rollOptions);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.openDropdown === "position");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.selectedPosition);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.positionOptions);
        \u0275\u0275advance(69);
        \u0275\u0275classProp("active", ctx.activeTab === "diameter");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "cost");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "supplier");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.activeTab === "diameter");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "cost");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "supplier");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBreakageModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBreakageModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgxEchartsModule, NgxEchartsDirective], styles: ['@charset "UTF-8";\n\n\n\n.dashboard-page[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #060B18;\n  min-height: 100%;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 0 0 16px 0;\n}\n.filter-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.stats-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7B90B8;\n}\n.stats-link[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n}\n.stats-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.search-input[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 8px;\n  padding: 7px 14px;\n  color: #E8F0FE;\n  font-size: 13px;\n  width: 200px;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #7B90B8;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563EB;\n}\n.filter-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.filter-right[_ngcontent-%COMP%]   .custom-select[_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 12px;\n  overflow: hidden;\n}\n.stat-card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1e3a8a,\n      #1e40af);\n  padding: 8px 16px;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #E8F0FE;\n  text-align: center;\n}\n.stat-card-body[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.stat-card-body.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.stat-card-body.single-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  color: #3D5175;\n  font-weight: 600;\n  margin-bottom: 3px;\n}\n.stat-half[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #3D5175;\n  margin-bottom: 3px;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n.stat-value.green[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.stat-value.cyan[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 14px;\n  font-weight: 600;\n}\n.stat-value.orange[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.stat-value.red[_ngcontent-%COMP%] {\n  color: #FF4560;\n  font-weight: 700;\n}\n.stat-value.big[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.stat-meta[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 11px;\n  margin-top: 2px;\n}\n.stat-meta[_ngcontent-%COMP%]   .stat-meta-value[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.06);\n  margin: 8px 0;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  margin-bottom: 0;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #7B90B8;\n  background: transparent;\n  border: none;\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #E8F0FE;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  border-bottom-color: #00D4FF;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 0;\n}\n.chart-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n}\n.chart-container[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.supplier-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 0;\n}\n.supplier-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.supplier-title-wrap[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7B90B8;\n}\n.supplier-title-value[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n  margin-left: 4px;\n}\n.supplier-dropdown[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.supplier-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.supplier-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.supplier-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  text-align: left;\n}\n.supplier-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s;\n}\n.supplier-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.supplier-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.supplier-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  vertical-align: middle;\n}\n.col-roll-id[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n}\n.col-roll-type[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.col-po-delivery[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-actual-delivery.ontime[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-actual-delivery.late[_ngcontent-%COMP%] {\n  color: #FF4560;\n}\n.col-price[_ngcontent-%COMP%] {\n  color: #FF8C42;\n  font-weight: 600;\n}\n.col-remarks[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.view-breakage-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #FF4560;\n  font-weight: 600;\n  font-size: 13px;\n  cursor: pointer;\n  padding: 0;\n}\n.view-breakage-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pagination-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 8px;\n  padding-top: 12px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  background: rgba(255, 255, 255, 0.05);\n  color: #7B90B8;\n  font-size: 13px;\n  cursor: pointer;\n  transition: border-color 0.2s, color 0.2s;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #00D4FF;\n  color: #00D4FF;\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.15);\n  border-color: #00D4FF;\n  color: #00D4FF;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.breakage-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 480px;\n  max-width: 92vw;\n  z-index: 1001;\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(255, 140, 66, 0.25);\n  border-radius: 16px;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.8);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 16px 22px;\n  border-bottom: 1px solid rgba(255, 140, 66, 0.1);\n  background: rgba(255, 140, 66, 0.04);\n  border-radius: 16px 16px 0 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.modal-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 10px;\n}\n.info-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3D5175;\n  font-weight: 600;\n  min-width: 130px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.info-value.cyan[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 700;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #7B90B8;\n  margin: 14px 0 8px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  padding-bottom: 4px;\n}\n.cause-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.cause-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7B90B8;\n  padding: 4px 0;\n  padding-left: 16px;\n  position: relative;\n}\n.cause-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  color: #FF8C42;\n  position: absolute;\n  left: 0;\n}\n.observation[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7B90B8;\n  line-height: 1.6;\n  margin: 0;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 14px 22px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  justify-content: center;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e2a3a,\n      #0f1a2e);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  padding: 9px 36px;\n  color: #E8F0FE;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: Inter, sans-serif;\n  transition:\n    background 0.2s,\n    border-color 0.2s,\n    color 0.2s;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 69, 96, 0.1);\n  border-color: rgba(255, 69, 96, 0.3);\n  color: #FF4560;\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\features\\dashboard\\dashboard.component.ts", lineNumber: 24 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-ZRKUR6ER.js.map
