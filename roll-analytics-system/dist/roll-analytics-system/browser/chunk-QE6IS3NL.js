import {
  CommonModule,
  NgForOf
} from "./chunk-ABWFYJAQ.js";
import {
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
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NI6J6SBZ.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/mill-information/mill-information.component.ts
function MillInformationComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
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
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 32);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 33);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 34);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 34);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 35);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 35);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 36);
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
var MillInformationComponent = class _MillInformationComponent {
  constructor() {
    this.stands = ["E1", "R1", "E2", "R2", "F1e", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "PR1", "PR2", "PR3"];
    this.selectedStand = "E1";
    this.rollInformation = [];
    this.panelCollapsed = true;
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
  }
  ngOnInit() {
    this.rollInformation = this.getGroupForStand("E1");
  }
  getGroupForStand(stand) {
    if (["E1", "E2", "F1e"].includes(stand)) {
      return [...this.group1];
    }
    if (["R2", "F1", "F2", "F3", "F4", "F5", "F6", "F7"].includes(stand)) {
      return [...this.group2];
    }
    if (["PR1", "PR2", "PR3"].includes(stand)) {
      return [...this.group3];
    }
    if (stand === "R1") {
      return [...this.group4];
    }
    return [...this.group1];
  }
  onTabChange(stand) {
    this.selectedStand = stand;
    this.rollInformation = this.getGroupForStand(stand);
  }
  static {
    this.\u0275fac = function MillInformationComponent_Factory(t) {
      return new (t || _MillInformationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MillInformationComponent, selectors: [["app-mill-information"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 3, consts: [[1, "mill-info-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "image-card"], ["src", "assets/login/Mill_Information.png", "alt", "Mill Layout Diagram", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex';", 1, "mill-image"], [1, "image-placeholder", 2, "display", "none"], [1, "tabs-row"], ["type", "button", "class", "tab-button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "table-card"], [1, "card-header"], [1, "header-left"], [1, "material-icons", "card-icon"], [1, "card-title"], [1, "stand-badge"], [1, "table-wrapper"], [1, "roll-table"], [1, "header-row-1"], ["rowspan", "2"], ["colspan", "2", 1, "crown-header"], ["colspan", "3", 1, "current-header"], ["colspan", "3", 1, "cumulative-header"], [1, "header-row-2"], [3, "even", 4, "ngFor", "ngForOf"], ["type", "button", 1, "tab-button", 3, "click"], [1, "col-type"], [1, "col-position"], [1, "col-roll-id"], [1, "col-supplier"], [1, "col-diameter"], [1, "col-rough"], [1, "col-crown"], [1, "col-cycles"], [1, "col-current"], [1, "col-cumulative"], [1, "col-time"]], template: function MillInformationComponent_Template(rf, ctx) {
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
        \u0275\u0275text(32, "Roll ID/Choke ID");
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
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.stands);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.selectedStand);
        \u0275\u0275advance(45);
        \u0275\u0275property("ngForOf", ctx.rollInformation);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.mill-info-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.image-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 16px;\n  margin-bottom: 16px;\n  overflow-x: auto;\n}\n.mill-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  min-width: 1200px;\n  display: block;\n  margin: 0 auto;\n}\n.image-placeholder[_ngcontent-%COMP%] {\n  height: 120px;\n  background: rgba(0, 212, 255, 0.05);\n  border: 2px dashed rgba(0, 212, 255, 0.2);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #3D5175;\n  font-size: 14px;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.tab-button[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border-radius: 8px 8px 0 0;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-bottom: none;\n  background: rgba(255, 255, 255, 0.03);\n  color: #7B90B8;\n  margin-right: 3px;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.tab-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.08);\n  color: #E8F0FE;\n  border-color: rgba(0, 212, 255, 0.15);\n}\n.tab-button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(37, 99, 235, 0.2),\n      rgba(37, 99, 235, 0.08));\n  color: #00D4FF;\n  border-color: rgba(0, 212, 255, 0.25);\n  border-bottom: 2px solid #00D4FF;\n  font-weight: 700;\n}\n.table-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 0 14px 14px 14px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 212, 255, 0.03);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 20px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #E8F0FE;\n}\n.stand-badge[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.15);\n  border: 1px solid rgba(37, 99, 235, 0.3);\n  border-radius: 8px;\n  padding: 4px 16px;\n  color: #00D4FF;\n  font-size: 14px;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: auto;\n  max-height: 500px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #0a1020;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #1e3a6e;\n  border-radius: 4px;\n}\n.table-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #2563EB;\n}\n.roll-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 2200px;\n  border-collapse: collapse;\n  font-family: "Inter", sans-serif;\n}\n.roll-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.header-row-1[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.08);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.12);\n}\n.header-row-1[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.header-row-1[_ngcontent-%COMP%]   .crown-header[_ngcontent-%COMP%] {\n  color: #A78BFA;\n}\n.header-row-1[_ngcontent-%COMP%]   .current-header[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.header-row-1[_ngcontent-%COMP%]   .cumulative-header[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.header-row-2[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.04);\n}\n.header-row-2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: center;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.18s;\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.roll-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.roll-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  text-align: center;\n  font-size: 13px;\n  color: #E8F0FE;\n}\n.col-type[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n  font-weight: 500;\n}\n.col-position[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.col-roll-id[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n  cursor: pointer;\n}\n.col-roll-id[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.col-supplier[_ngcontent-%COMP%] {\n  color: #94A3B8;\n}\n.col-diameter[_ngcontent-%COMP%] {\n  color: #E8F0FE;\n}\n.col-rough[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-rough.no-value[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.col-crown[_ngcontent-%COMP%] {\n  color: #A78BFA;\n  font-weight: 500;\n}\n.col-cycles[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 600;\n}\n.col-current[_ngcontent-%COMP%] {\n  color: #00E5A0;\n}\n.col-cumulative[_ngcontent-%COMP%] {\n  color: #FF8C42;\n}\n.col-time[_ngcontent-%COMP%] {\n  color: #7B90B8;\n  font-size: 12px;\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: #0F1A2E;\n  border: 1px solid #1A2844;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s;\n}\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 140, 66, 0.05);\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #FF8C42;\n}\n.accordion-title[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #3D5175;\n  font-size: 13px;\n}\n.accordion-chevron[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #7B90B8;\n}\n/*# sourceMappingURL=mill-information.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MillInformationComponent, { className: "MillInformationComponent", filePath: "src\\app\\features\\mill-information\\mill-information.component.ts", lineNumber: 30 });
})();
export {
  MillInformationComponent
};
//# sourceMappingURL=chunk-QE6IS3NL.js.map
