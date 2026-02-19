import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ABWFYJAQ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NI6J6SBZ.js";
import "./chunk-GLLL6ZVE.js";

// src/app/features/telegram-logs/telegram-logs.component.ts
function TelegramLogsComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 25);
    \u0275\u0275listener("click", function TelegramLogsComponent_ng_container_21_Template_button_click_1_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToPage(p_r2));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.currentPage === p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r2, " ");
  }
}
function TelegramLogsComponent_tr_68_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td", 30)(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 33);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 34)(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275classProp("even", i_r5 % 2 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r4.date, " | ", row_r4.time, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.teleNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.teleDescription);
    \u0275\u0275advance();
    \u0275\u0275classProp("send", row_r4.direction === "Send")("receive", row_r4.direction === "Receive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.direction);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.outerSystem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.cmmMode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.length);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sent", row_r4.status === "Sent")("received", row_r4.status === "Received");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.user);
  }
}
function TelegramLogsComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "p", 38);
    \u0275\u0275text(2, "No alarm data to display.");
    \u0275\u0275elementEnd()();
  }
}
var TelegramLogsComponent = class _TelegramLogsComponent {
  constructor() {
    this.sortField = "";
    this.sortDir = 1;
    this.accordionCollapsed = true;
    this.currentPage = 1;
    this.itemsPerPage = 11;
    this.rawLogs = [
      { date: "28/08/2025", time: "8:21 AM", teleNo: "L001", teleDescription: "Setup Data", direction: "Send", outerSystem: "L1", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "28/08/2025", time: "8:20 AM", teleNo: "L001", teleDescription: "Setup Data", direction: "Receive", outerSystem: "M2", cmmMode: "TCP/IP", length: 0, status: "Received", user: "L2" },
      { date: "28/08/2025", time: "6:19 AM", teleNo: "P002", teleDescription: "Coil on Entry Coil Station(PDI Request)", direction: "Send", outerSystem: "M2", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "28/08/2025", time: "6:19 AM", teleNo: "P003", teleDescription: "Coil on Entry Coil Station(PDI Request)", direction: "Receive", outerSystem: "L1", cmmMode: "TCP/IP", length: 0, status: "Received", user: "L2" },
      { date: "25/08/2025", time: "6:04 PM", teleNo: "P002", teleDescription: "Coil Tracking Information", direction: "Receive", outerSystem: "L1", cmmMode: "TCP/IP", length: 0, status: "Received", user: "L2" },
      { date: "12/08/2025", time: "9:56 AM", teleNo: "P001", teleDescription: "Label Printing on Coil", direction: "Send", outerSystem: "LP", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "12/08/2025", time: "9:56 AM", teleNo: "P001", teleDescription: "Coil Sampling Result(PDO)", direction: "Send", outerSystem: "M2", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "12/08/2025", time: "9:56 AM", teleNo: "P001", teleDescription: "Coil Sampling Result(PDO)", direction: "Receive", outerSystem: "L1", cmmMode: "TCP/IP", length: 0, status: "Received", user: "L2" },
      { date: "12/08/2025", time: "9:55 AM", teleNo: "P001", teleDescription: "Label Printing on Coil", direction: "Send", outerSystem: "LP", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "12/08/2025", time: "9:10 AM", teleNo: "P001", teleDescription: "Coil Sampling Result(PDO)", direction: "Send", outerSystem: "M2", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" },
      { date: "10/08/2025", time: "2:30 PM", teleNo: "P004", teleDescription: "Roll Force Measurement", direction: "Send", outerSystem: "L1", cmmMode: "TCP/IP", length: 0, status: "Sent", user: "L2" }
    ];
  }
  get logs() {
    return this.rawLogs;
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.logs.length / this.itemsPerPage));
  }
  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  get sorted() {
    if (!this.sortField)
      return [...this.pagedData];
    return [...this.pagedData].sort((a, b) => {
      const va = a[this.sortField];
      const vb = b[this.sortField];
      if (va === vb)
        return 0;
      const cmp = String(va).localeCompare(String(vb), void 0, { numeric: true });
      return this.sortDir * (cmp < 0 ? -1 : 1);
    });
  }
  get pagedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.logs.slice(start, start + this.itemsPerPage);
  }
  sort(field) {
    if (this.sortField === field) {
      this.sortDir = this.sortDir === 1 ? -1 : 1;
    } else {
      this.sortField = field;
      this.sortDir = 1;
    }
  }
  goToPage(n) {
    if (n >= 1 && n <= this.totalPages)
      this.currentPage = n;
  }
  nextPage() {
    if (this.currentPage < this.totalPages)
      this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 1)
      this.currentPage--;
  }
  downloadCsv() {
    const headers = ["Date", "Time", "Tele.No", "Tele.Description", "Direction", "Outer System", "Cmm Mode", "Length", "Status", "User"];
    const rows = this.logs.map((r) => [r.date, r.time, r.teleNo, r.teleDescription, r.direction, r.outerSystem, r.cmmMode, r.length, r.status, r.user].map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","));
    const csv = [headers.join(","), ...rows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "telegram_logs_export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static {
    this.\u0275fac = function TelegramLogsComponent_Factory(t) {
      return new (t || _TelegramLogsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TelegramLogsComponent, selectors: [["app-telegram-logs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 87, vars: 5, consts: [[1, "telegram-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "main-card"], [1, "card-header"], [1, "card-title-wrap"], [1, "material-icons", "card-icon"], [1, "card-title"], [1, "pagination-wrap"], ["type", "button", 1, "page-btn", 3, "click", "disabled"], [1, "material-icons"], [4, "ngFor", "ngForOf"], [1, "table-wrap"], [1, "logs-table"], [3, "click"], [1, "material-icons", "sort-icon"], [3, "even", 4, "ngFor", "ngForOf"], [1, "action-bar"], [1, "action-left"], ["type", "button", 1, "action-btn", "resend-btn"], ["type", "button", 1, "action-btn", "rereceive-btn"], ["type", "button", 1, "download-btn", 3, "click"], ["class", "accordion-body", 4, "ngIf"], ["type", "button", 1, "page-btn", 3, "click"], [1, "col-datetime"], [1, "col-tele-no"], [1, "col-desc"], [1, "col-direction"], [1, "col-outer"], [1, "outer-chip"], [1, "col-cmm"], [1, "col-length"], [1, "col-status"], [1, "status-badge"], [1, "col-user"], [1, "accordion-body"], [1, "accordion-text"]], template: function TelegramLogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Telegram Logs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "header", 6)(10, "div", 7)(11, "span", 8);
        \u0275\u0275text(12, "chat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h2", 9);
        \u0275\u0275text(14, "Telegram Log");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_button_click_16_listener() {
          return ctx.prevPage();
        });
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span");
        \u0275\u0275text(20, "Back");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, TelegramLogsComponent_ng_container_21_Template, 3, 3, "ng-container", 13);
        \u0275\u0275elementStart(22, "button", 11);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_button_click_22_listener() {
          return ctx.nextPage();
        });
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "Next");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 12);
        \u0275\u0275text(26, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 14)(28, "table", 15)(29, "thead")(30, "tr")(31, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_31_listener() {
          return ctx.sort("date");
        });
        \u0275\u0275text(32, "Date & Time ");
        \u0275\u0275elementStart(33, "span", 17);
        \u0275\u0275text(34, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_35_listener() {
          return ctx.sort("teleNo");
        });
        \u0275\u0275text(36, "Tele.No ");
        \u0275\u0275elementStart(37, "span", 17);
        \u0275\u0275text(38, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_39_listener() {
          return ctx.sort("teleDescription");
        });
        \u0275\u0275text(40, "Tele.Description ");
        \u0275\u0275elementStart(41, "span", 17);
        \u0275\u0275text(42, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_43_listener() {
          return ctx.sort("direction");
        });
        \u0275\u0275text(44, "Direction ");
        \u0275\u0275elementStart(45, "span", 17);
        \u0275\u0275text(46, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_47_listener() {
          return ctx.sort("outerSystem");
        });
        \u0275\u0275text(48, "Outer System ");
        \u0275\u0275elementStart(49, "span", 17);
        \u0275\u0275text(50, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_51_listener() {
          return ctx.sort("cmmMode");
        });
        \u0275\u0275text(52, "Cmm Mode ");
        \u0275\u0275elementStart(53, "span", 17);
        \u0275\u0275text(54, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_55_listener() {
          return ctx.sort("length");
        });
        \u0275\u0275text(56, "Length ");
        \u0275\u0275elementStart(57, "span", 17);
        \u0275\u0275text(58, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_59_listener() {
          return ctx.sort("status");
        });
        \u0275\u0275text(60, "Status ");
        \u0275\u0275elementStart(61, "span", 17);
        \u0275\u0275text(62, "unfold_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "th", 16);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_th_click_63_listener() {
          return ctx.sort("user");
        });
        \u0275\u0275text(64, "User ");
        \u0275\u0275elementStart(65, "span", 17);
        \u0275\u0275text(66, "unfold_more");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(67, "tbody");
        \u0275\u0275template(68, TelegramLogsComponent_tr_68_Template, 21, 20, "tr", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "div", 19)(70, "div", 20)(71, "button", 21)(72, "span", 12);
        \u0275\u0275text(73, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "span");
        \u0275\u0275text(75, "Resend");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "button", 22)(77, "span", 12);
        \u0275\u0275text(78, "replay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span");
        \u0275\u0275text(80, "Re-Receive");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(81, "button", 23);
        \u0275\u0275listener("click", function TelegramLogsComponent_Template_button_click_81_listener() {
          return ctx.downloadCsv();
        });
        \u0275\u0275elementStart(82, "span", 12);
        \u0275\u0275text(83, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "span");
        \u0275\u0275text(85, "Download");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(86, TelegramLogsComponent_div_86_Template, 3, 0, "div", 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("disabled", ctx.currentPage === 1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.pages);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.currentPage === ctx.totalPages);
        \u0275\u0275advance(46);
        \u0275\u0275property("ngForOf", ctx.sorted);
        \u0275\u0275advance(18);
        \u0275\u0275property("ngIf", !ctx.accordionCollapsed);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.telegram-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: var(--bg-primary);\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n}\n.main-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0f1a2e,\n      #0a1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 212, 255, 0.03);\n}\n.card-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--accent-cyan);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--text-primary);\n  margin: 0;\n}\n.pagination-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.page-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid var(--border-color);\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n  transition: border-color 0.2s ease, color 0.2s ease;\n}\n.page-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--accent-cyan);\n  color: var(--accent-cyan);\n}\n.page-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.page-btn.active[_ngcontent-%COMP%] {\n  background: var(--accent-blue);\n  border-color: var(--accent-blue);\n  color: white;\n}\n.page-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.logs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.logs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: var(--text-muted);\n  font-weight: 700;\n  text-align: left;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.logs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .sort-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.7;\n  vertical-align: middle;\n  margin-left: 4px;\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  transition: background 0.2s ease;\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.07);\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.even[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.15);\n}\n.logs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover.even {\n  background: rgba(37, 99, 235, 0.07);\n}\n.logs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  font-size: 13px;\n  color: var(--text-secondary);\n  vertical-align: middle;\n}\n.col-datetime[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.col-tele-no[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n}\n.col-tele-no[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.col-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.col-direction.send[_ngcontent-%COMP%] {\n  color: #00d4ff;\n}\n.col-direction.receive[_ngcontent-%COMP%] {\n  color: #a78bfa;\n}\n.outer-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 5px;\n  padding: 2px 8px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n.col-cmm[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.col-length[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-align: center;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.status-badge.sent[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.12);\n  color: #00d4ff;\n  border: 1px solid rgba(0, 212, 255, 0.3);\n  box-shadow: 0 0 8px rgba(0, 212, 255, 0.15);\n}\n.status-badge.received[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.12);\n  color: #00e5a0;\n  border: 1px solid rgba(0, 229, 160, 0.3);\n}\n.col-user[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 20px;\n  border-top: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 0, 0, 0.2);\n}\n.action-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  border: 1px solid rgba(0, 212, 255, 0.25);\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 13px;\n  cursor: pointer;\n  transition: border-color 0.2s, color 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-cyan);\n  color: var(--accent-cyan);\n}\n.action-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.download-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #2563eb,\n      #1d4ed8);\n  border: none;\n  border-radius: 8px;\n  padding: 8px 18px;\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);\n  transition: filter 0.2s, transform 0.2s;\n}\n.download-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.download-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.15);\n  transform: scale(1.02);\n}\n.accordion-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  background: var(--bg-card);\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.accordion-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  background: rgba(255, 140, 66, 0.03);\n  border: none;\n  font-size: 13px;\n  color: var(--text-muted);\n  cursor: pointer;\n  text-align: left;\n}\n.accordion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--accent-orange);\n}\n.accordion-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.accordion-chevron[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: var(--text-muted);\n}\n.accordion-body[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-top: 1px solid var(--border-color);\n}\n.accordion-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=telegram-logs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TelegramLogsComponent, { className: "TelegramLogsComponent", filePath: "src\\app\\features\\telegram-logs\\telegram-logs.component.ts", lineNumber: 27 });
})();
export {
  TelegramLogsComponent
};
//# sourceMappingURL=chunk-G2D5TGXY.js.map
