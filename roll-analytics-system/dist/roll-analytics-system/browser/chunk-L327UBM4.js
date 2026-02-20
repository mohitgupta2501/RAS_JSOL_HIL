import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4FAZ62Q4.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/alarms/alarms.component.ts
function AlarmsComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25)(2, "span", 26);
    \u0275\u0275text(3, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 28)(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 30)(11, "span", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const alarm_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275classProp("even", i_r2 % 2 === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", alarm_r1.date, " \xA0|\xA0 ", alarm_r1.time, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alarm_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(alarm_r1.parameter);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("high", alarm_r1.severity === "HIGH")("medium", alarm_r1.severity === "MEDIUM")("low", alarm_r1.severity === "LOW");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", alarm_r1.severity, " ");
  }
}
var AlarmsComponent = class _AlarmsComponent {
  constructor() {
    this.sortField = "";
    this.sortDir = 1;
    this.panelCollapsed = true;
    this.alarms = [
      { date: "13/02/2026", time: "10:30 AM", description: "High Temperature in Boiler", parameter: "Temperature", severity: "HIGH" },
      { date: "13/02/2026", time: "9:15 AM", description: "Low Pressure in Turbine", parameter: "Pressure", severity: "LOW" },
      { date: "12/02/2026", time: "6:45 PM", description: "Medium Flow Variation in Pipeline", parameter: "Flow Rate", severity: "MEDIUM" },
      { date: "11/02/2026", time: "1:10 PM", description: "Overheating Detected in Motor", parameter: "Temperature", severity: "HIGH" },
      { date: "10/02/2026", time: "4:00 AM", description: "Compressor Load Fluctuation", parameter: "Load", severity: "LOW" },
      { date: "09/02/2026", time: "11:20 AM", description: "Voltage Spike in Main Panel", parameter: "Voltage", severity: "HIGH" },
      { date: "09/02/2026", time: "8:45 AM", description: "Vibration Anomaly in Roll Stand 3", parameter: "Vibration", severity: "MEDIUM" },
      { date: "08/02/2026", time: "3:30 PM", description: "Coolant Flow Below Threshold", parameter: "Flow Rate", severity: "LOW" },
      { date: "07/02/2026", time: "7:00 AM", description: "Bearing Temperature Critical", parameter: "Temperature", severity: "HIGH" },
      { date: "06/02/2026", time: "2:15 PM", description: "Hydraulic Pressure Drop", parameter: "Pressure", severity: "MEDIUM" }
    ];
  }
  get sorted() {
    if (!this.sortField)
      return [...this.alarms];
    return [...this.alarms].sort((a, b) => {
      const va = a[this.sortField];
      const vb = b[this.sortField];
      if (va === vb)
        return 0;
      const cmp = String(va).localeCompare(String(vb), void 0, { numeric: true });
      return this.sortDir * (cmp < 0 ? -1 : 1);
    });
  }
  get totalCount() {
    return this.alarms.length;
  }
  get highCount() {
    return this.alarms.filter((a) => a.severity === "HIGH").length;
  }
  get mediumCount() {
    return this.alarms.filter((a) => a.severity === "MEDIUM").length;
  }
  get lowCount() {
    return this.alarms.filter((a) => a.severity === "LOW").length;
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDir = this.sortDir === 1 ? -1 : 1;
    } else {
      this.sortField = field;
      this.sortDir = 1;
    }
  }
  togglePanel() {
    this.panelCollapsed = !this.panelCollapsed;
  }
  downloadCsv() {
    const headers = ["Date", "Time", "Description", "Parameter", "Severity"];
    const rows = this.alarms.map((a2) => [a2.date, a2.time, a2.description, a2.parameter, a2.severity].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","));
    const csv = [headers.join(","), ...rows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "alarms_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function AlarmsComponent_Factory(t) {
      return new (t || _AlarmsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlarmsComponent, selectors: [["app-alarms"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 71, vars: 5, consts: [[1, "alarms-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "chips-row"], [1, "chip", "chip-total"], [1, "material-icons", "chip-icon"], [1, "chip-label"], [1, "chip-count"], [1, "chip", "chip-high"], [1, "chip", "chip-medium"], [1, "chip", "chip-low"], [1, "main-card"], [1, "card-header"], [1, "card-title-wrap"], [1, "material-icons", "card-icon"], [1, "card-title"], ["type", "button", 1, "download-btn", 3, "click"], [1, "material-icons"], [1, "table-wrap"], [1, "alarms-table"], [3, "click"], [1, "material-icons", "sort-icon"], [3, "even", 4, "ngFor", "ngForOf"], [1, "col-datetime"], [1, "material-icons", "datetime-icon"], [1, "col-desc"], [1, "col-param"], [1, "param-chip"], [1, "col-severity"], [1, "severity-badge"]], template: function AlarmsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Alarms");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "span", 7);
        \u0275\u0275text(18, "error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 8);
        \u0275\u0275text(20, "HIGH");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 9);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11)(24, "span", 7);
        \u0275\u0275text(25, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 8);
        \u0275\u0275text(27, "MEDIUM");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "span", 9);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 12)(31, "span", 7);
        \u0275\u0275text(32, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 8);
        \u0275\u0275text(34, "LOW");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 9);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 13)(38, "header", 14)(39, "div", 15)(40, "span", 16);
        \u0275\u0275text(41, "notifications_active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h2", 17);
        \u0275\u0275text(43, "Alarms");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "button", 18);
        \u0275\u0275listener("click", function AlarmsComponent_Template_button_click_44_listener() {
          return ctx.downloadCsv();
        });
        \u0275\u0275elementStart(45, "span", 19);
        \u0275\u0275text(46, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "span");
        \u0275\u0275text(48, "Download");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 20)(50, "table", 21)(51, "thead")(52, "tr")(53, "th", 22);
        \u0275\u0275listener("click", function AlarmsComponent_Template_th_click_53_listener() {
          return ctx.sort("date");
        });
        \u0275\u0275text(54, "Date & Time ");
        \u0275\u0275elementStart(55, "span", 23);
        \u0275\u0275text(56, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "th", 22);
        \u0275\u0275listener("click", function AlarmsComponent_Template_th_click_57_listener() {
          return ctx.sort("description");
        });
        \u0275\u0275text(58, "Description ");
        \u0275\u0275elementStart(59, "span", 23);
        \u0275\u0275text(60, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "th", 22);
        \u0275\u0275listener("click", function AlarmsComponent_Template_th_click_61_listener() {
          return ctx.sort("parameter");
        });
        \u0275\u0275text(62, "Parameter ");
        \u0275\u0275elementStart(63, "span", 23);
        \u0275\u0275text(64, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "th", 22);
        \u0275\u0275listener("click", function AlarmsComponent_Template_th_click_65_listener() {
          return ctx.sort("severity");
        });
        \u0275\u0275text(66, "Severity ");
        \u0275\u0275elementStart(67, "span", 23);
        \u0275\u0275text(68, "unfold_more");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "tbody");
        \u0275\u0275template(70, AlarmsComponent_tr_70_Template, 13, 13, "tr", 24);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275textInterpolate(ctx.totalCount);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.highCount);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.mediumCount);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.lowCount);
        \u0275\u0275advance(34);
        \u0275\u0275property("ngForOf", ctx.sorted);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.alarms-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: var(--bg-primary);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.chips-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  border: 1px solid transparent;\n}\n.chip[_ngcontent-%COMP%]   .chip-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.chip[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.chip-total[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-color: var(--border-color);\n}\n.chip-total[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.chip-high[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.12);\n  border-color: rgba(255, 69, 96, 0.3);\n}\n.chip-high[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  color: var(--accent-red);\n}\n.chip-high[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 20px rgba(255, 69, 96, 0.2);\n}\n.chip-medium[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.12);\n  border-color: rgba(255, 140, 66, 0.3);\n}\n.chip-medium[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  color: var(--accent-orange);\n}\n.chip-low[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.12);\n  border-color: rgba(0, 229, 160, 0.3);\n}\n.chip-low[_ngcontent-%COMP%]   .chip-count[_ngcontent-%COMP%] {\n  color: var(--accent-green);\n}\n.main-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0f1a2e,\n      #0a1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 212, 255, 0.03);\n}\n.card-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--accent-cyan);\n  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.5));\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);\n  transition: filter 0.2s, transform 0.2s;\n}\n.download-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n  transform: scale(1.02);\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.alarms-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.alarms-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.alarms-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: var(--text-muted);\n  font-weight: 700;\n  text-align: left;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.alarms-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.alarms-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s, box-shadow 0.2s;\n}\n.alarms-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n  box-shadow: inset 2px 0 0 var(--accent-cyan);\n}\n.alarms-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.alarms-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.alarms-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  font-size: 13.5px;\n  color: var(--text-secondary);\n  vertical-align: middle;\n}\n.col-datetime[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.datetime-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--accent-cyan);\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.col-desc[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.param-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 6px;\n  padding: 3px 10px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.severity-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 4px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.severity-badge.high[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.15);\n  color: #ff4560;\n  border: 1px solid rgba(255, 69, 96, 0.4);\n  box-shadow: 0 0 10px rgba(255, 69, 96, 0.2);\n}\n.severity-badge.medium[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.15);\n  color: #ff8c42;\n  border: 1px solid rgba(255, 140, 66, 0.4);\n}\n.severity-badge.low[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.15);\n  color: #00e5a0;\n  border: 1px solid rgba(0, 229, 160, 0.4);\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  background: rgba(0, 212, 255, 0.03);\n  border: none;\n  color: var(--text-secondary);\n  font-size: 14px;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.2s;\n}\n.accordion-header[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 212, 255, 0.06);\n}\n.accordion-title[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.accordion-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px solid var(--border-color);\n}\n.accordion-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=alarms.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlarmsComponent, { className: "AlarmsComponent", filePath: "src\\app\\features\\alarms\\alarms.component.ts", lineNumber: 21 });
})();
export {
  AlarmsComponent
};
//# sourceMappingURL=chunk-L327UBM4.js.map
