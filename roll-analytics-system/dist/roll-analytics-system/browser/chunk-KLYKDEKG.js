import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-ABWFYJAQ.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
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

// src/app/features/notifications/notifications.component.ts
function NotificationsComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
  }
}
function NotificationsComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function NotificationsComponent_button_21_Template_button_click_0_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.filterBy(f_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeFilter === f_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r3, " ");
  }
}
function NotificationsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span", 21);
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No notifications");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function NotificationsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function NotificationsComponent_div_24_Template_div_click_0_listener() {
      const n_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.markRead(n_r5));
    });
    \u0275\u0275template(1, NotificationsComponent_div_24_div_1_Template, 1, 0, "div", 23);
    \u0275\u0275elementStart(2, "div", 24)(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 26)(6, "p", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 29);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275classProp("unread", !n_r5.read);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !n_r5.read);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + n_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.msg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r5.time);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  constructor() {
    this.activeFilter = "All";
    this.filters = ["All", "Unread", "HIGH", "WARNING", "INFO"];
    this.notifications = [
      { id: 1, title: "Critical Alarm", msg: "High Temperature in Boiler detected - immediate action required", time: "2 minutes ago", type: "danger", icon: "thermostat", read: false },
      { id: 2, title: "Critical Alarm", msg: "Overheating Detected in Motor - Check cooling system", time: "15 minutes ago", type: "danger", icon: "warning", read: false },
      { id: 3, title: "Warning", msg: "Voltage Spike detected in Main Panel", time: "1 hour ago", type: "warning", icon: "bolt", read: false },
      { id: 4, title: "Warning", msg: "Vibration Anomaly detected in Roll Stand 3", time: "2 hours ago", type: "warning", icon: "vibration", read: false },
      { id: 5, title: "System Info", msg: "Shift A started successfully - Mon 19 Feb 2025", time: "8 hours ago", type: "info", icon: "info", read: true },
      { id: 6, title: "System Info", msg: "Daily health check completed successfully", time: "10 hours ago", type: "success", icon: "check_circle", read: true },
      { id: 7, title: "Warning", msg: "Coolant Flow dropped below threshold in Stand F3", time: "1 day ago", type: "warning", icon: "water_drop", read: true },
      { id: 8, title: "System Info", msg: "Performance report generated for Shift C", time: "2 days ago", type: "info", icon: "assessment", read: true }
    ];
  }
  get filteredNotifications() {
    if (this.activeFilter === "All")
      return this.notifications;
    if (this.activeFilter === "Unread")
      return this.notifications.filter((n) => !n.read);
    if (this.activeFilter === "HIGH")
      return this.notifications.filter((n) => n.type === "danger");
    if (this.activeFilter === "WARNING")
      return this.notifications.filter((n) => n.type === "warning");
    if (this.activeFilter === "INFO")
      return this.notifications.filter((n) => n.type === "info" || n.type === "success");
    return this.notifications;
  }
  get unreadCount() {
    return this.notifications.filter((n) => !n.read).length;
  }
  markAllRead() {
    this.notifications.forEach((n) => n.read = true);
  }
  clearAll() {
    this.notifications = [];
  }
  markRead(n) {
    n.read = true;
  }
  filterBy(f) {
    this.activeFilter = f;
  }
  static {
    this.\u0275fac = function NotificationsComponent_Factory(t) {
      return new (t || _NotificationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 25, vars: 4, consts: [[1, "notifications-page"], [1, "breadcrumb"], [1, "breadcrumb-item", "muted"], [1, "material-icons", "breadcrumb-sep"], [1, "breadcrumb-item", "active"], [1, "page-header-card"], [1, "header-left"], [1, "material-icons", "header-icon"], [1, "header-title"], ["class", "unread-badge", 4, "ngIf"], [1, "header-actions"], [1, "btn-mark-read", 3, "click"], [1, "btn-clear", 3, "click"], [1, "filter-tabs"], ["type", "button", "class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "notifications-list"], ["class", "empty-state", 4, "ngIf"], ["class", "notif-card", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "unread-badge"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "empty-state"], [1, "material-icons", "empty-icon"], [1, "notif-card", 3, "click"], ["class", "notif-dot", 4, "ngIf"], [1, "notif-icon-wrap"], [1, "material-icons"], [1, "notif-content"], [1, "notif-title"], [1, "notif-msg"], [1, "notif-time"], [1, "notif-dot"]], template: function NotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Home");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5, "chevron_right");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 4);
        \u0275\u0275text(7, "Notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "span", 8);
        \u0275\u0275text(13, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, NotificationsComponent_span_14_Template, 2, 1, "span", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10)(16, "button", 11);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_16_listener() {
          return ctx.markAllRead();
        });
        \u0275\u0275text(17, "Mark All as Read");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_18_listener() {
          return ctx.clearAll();
        });
        \u0275\u0275text(19, "Clear All");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275template(21, NotificationsComponent_button_21_Template, 2, 3, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275template(23, NotificationsComponent_div_23_Template, 5, 0, "div", 16)(24, NotificationsComponent_div_24_Template, 12, 9, "div", 17);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.filters);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.filteredNotifications.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.filteredNotifications);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.notifications-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 24px;\n  background: #060B18;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 20px;\n  font-size: 13px;\n}\n.breadcrumb-item[_ngcontent-%COMP%] {\n  color: #7B90B8;\n}\n.breadcrumb-item.muted[_ngcontent-%COMP%] {\n  color: #3D5175;\n}\n.breadcrumb-item.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-weight: 500;\n}\n.breadcrumb-sep[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n}\n.page-header-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 14px;\n  padding: 16px 24px;\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.header-icon[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 24px;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.unread-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.15);\n  color: #FF4560;\n  border: 1px solid rgba(255, 69, 96, 0.3);\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-mark-read[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 212, 255, 0.25);\n  background: rgba(0, 212, 255, 0.06);\n  color: #00D4FF;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: all 0.2s;\n}\n.btn-mark-read[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.5);\n  background: rgba(0, 212, 255, 0.1);\n}\n.btn-clear[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 69, 96, 0.25);\n  background: rgba(255, 69, 96, 0.06);\n  color: #FF4560;\n  border-radius: 8px;\n  padding: 8px 16px;\n  font-size: 13px;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: all 0.2s;\n}\n.btn-clear[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.5);\n  background: rgba(255, 69, 96, 0.1);\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  border-bottom: 2px solid transparent;\n  background: transparent;\n  color: #7B90B8;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #E8F0FE;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  border-bottom-color: #00D4FF;\n}\n.notifications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.notif-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0F1A2E,\n      #0A1020);\n  border: 1px solid rgba(0, 212, 255, 0.1);\n  border-radius: 12px;\n  padding: 16px 20px;\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  transition: all 0.2s;\n  cursor: pointer;\n  border-left: 3px solid transparent;\n  position: relative;\n}\n.notif-card.unread[_ngcontent-%COMP%] {\n  border-left-color: #2563EB;\n  background: rgba(37, 99, 235, 0.05);\n}\n.notif-card.unread[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.1);\n}\n.notif-card[_ngcontent-%COMP%]:not(.unread) {\n  opacity: 0.7;\n}\n.notif-card[_ngcontent-%COMP%]:not(.unread):hover {\n  opacity: 1;\n  background: rgba(255, 255, 255, 0.03);\n}\n.notif-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #FF4560;\n  box-shadow: 0 0 8px rgba(255, 69, 96, 0.8);\n}\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-icon-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.notif-icon-wrap.type-danger[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.15);\n  color: #FF4560;\n}\n.notif-icon-wrap.type-warning[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.15);\n  color: #FF8C42;\n}\n.notif-icon-wrap.type-success[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.15);\n  color: #00E5A0;\n}\n.notif-icon-wrap.type-info[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.15);\n  color: #00D4FF;\n}\n.notif-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #E8F0FE;\n  margin: 0;\n}\n.notif-msg[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #7B90B8;\n  margin: 4px 0 0;\n  line-height: 1.4;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #3D5175;\n  margin-top: 6px;\n  display: block;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 60px auto;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #3D5175;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #3D5175;\n  margin: 0;\n}\n/*# sourceMappingURL=notifications.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src\\app\\features\\notifications\\notifications.component.ts", lineNumber: 21 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-KLYKDEKG.js.map
