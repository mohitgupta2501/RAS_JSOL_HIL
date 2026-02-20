import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-P2O2KUUR.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Subscription,
  filter,
  inject,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4FAZ62Q4.js";
import "./chunk-GLLL6ZVE.js";

// src/app/core/services/layout.service.ts
var LayoutService = class _LayoutService {
  constructor() {
    this.sidebarCollapsed = signal(false);
    this.mobileSidebarOpen = signal(false);
  }
  toggleSidebar() {
    this.sidebarCollapsed.update((v) => !v);
  }
  toggleMobileSidebar() {
    this.mobileSidebarOpen.update((v) => !v);
  }
  closeMobileSidebar() {
    this.mobileSidebarOpen.set(false);
  }
  static {
    this.\u0275fac = function LayoutService_Factory(t) {
      return new (t || _LayoutService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LayoutService, factory: _LayoutService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/layout/navbar/navbar.component.ts
var _c0 = () => ["/notifications"];
function NavbarComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 21);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.subs = new Subscription();
    this.shiftLabel = "Shift A  \xB7  Mon, 19 Feb 2025";
    this.shiftTime = "06:00 \u2013 14:00";
    this.unreadCount = 4;
    this.pageTitle = "Dashboard";
    this.subs.add(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => {
      let r = this.route;
      while (r?.firstChild)
        r = r.firstChild;
      return r?.snapshot.title;
    })).subscribe((title) => {
      this.pageTitle = title ?? "Dashboard";
    }));
  }
  toggleMobileSidebar() {
    this.layoutService.toggleMobileSidebar();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 6, consts: [[1, "navbar"], [1, "navbar-left"], ["aria-label", "Toggle menu", 1, "mobile-menu-btn", 3, "click"], [1, "material-icons"], ["href", "#", 1, "logo-box", "client-box"], ["src", "assets/images/Jindal_Steel.png", "alt", "Jindal Logo", 1, "logo-img"], [1, "navbar-center"], [1, "material-icons", "title-icon"], [1, "app-title"], [1, "navbar-right"], [1, "shift-card"], [1, "shift-badge"], [1, "shift-text"], [1, "shift-label"], [1, "shift-time"], [1, "navbar-divider"], ["aria-label", "Notifications", 1, "icon-btn", "notification-btn", 3, "routerLink"], ["class", "badge", 4, "ngIf"], ["title", "AD", 1, "avatar"], ["href", "#", 1, "logo-box", "hitachi-box"], ["src", "assets/images/Hitachi_Logo.jpeg", "alt", "Hitachi Logo", 1, "logo-img"], [1, "badge"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_2_listener() {
          return ctx.toggleMobileSidebar();
        });
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275text(4, "menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "a", 4);
        \u0275\u0275element(6, "img", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "span", 7);
        \u0275\u0275text(9, "analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "h1", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
        \u0275\u0275text(15, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "span", 13);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(21, "div", 15);
        \u0275\u0275elementStart(22, "a", 16)(23, "span", 3);
        \u0275\u0275text(24, "notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, NavbarComponent_span_25_Template, 1, 0, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 18)(27, "span");
        \u0275\u0275text(28, "AD");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "a", 19);
        \u0275\u0275element(30, "img", 20);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.pageTitle);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.shiftLabel);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.shiftTime);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.unreadCount > 0);
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: var(--navbar-height);\n  background:\n    linear-gradient(\n      180deg,\n      #0b1120 0%,\n      #07091a 100%);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  z-index: 1000;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  width: 40px;\n  height: 40px;\n  border: 1px solid var(--border-color);\n  border-radius: 10px;\n  background: rgba(0, 212, 255, 0.05);\n  color: var(--text-secondary);\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.3);\n  color: var(--accent-cyan);\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);\n}\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  min-width: 0;\n}\n.logo-box[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 14px;\n  border: 1px solid rgba(0, 212, 255, 0.2);\n  border-radius: 10px;\n  background: rgba(0, 212, 255, 0.04);\n  text-decoration: none;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.logo-box[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.45);\n  box-shadow: 0 0 24px rgba(0, 212, 255, 0.12);\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  flex-shrink: 0;\n}\n.logo-icon.client-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-cyan),\n      var(--accent-blue));\n  box-shadow: 0 0 12px rgba(0, 212, 255, 0.3);\n}\n.logo-icon.hitachi-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-red),\n      #c53050);\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "Inter", sans-serif;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  color: var(--text-secondary);\n  text-transform: uppercase;\n}\n.navbar-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.title-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-cyan),\n      var(--accent-purple));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.app-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 600;\n  font-family: "Inter", sans-serif;\n  margin: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #00d4ff 0%,\n      #a78bfa 50%,\n      #00d4ff 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: shimmer 4s linear infinite;\n}\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n  justify-content: flex-end;\n  min-width: 0;\n}\n.shift-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 7px 14px;\n  background: rgba(37, 99, 235, 0.08);\n  border: 1px solid rgba(37, 99, 235, 0.25);\n  border-radius: 10px;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.shift-badge[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-cyan));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  flex-shrink: 0;\n  font-family: "Inter", sans-serif;\n}\n.shift-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.shift-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.shift-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent-cyan);\n  line-height: 1.2;\n}\n.navbar-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 0%,\n      var(--border-color) 50%,\n      transparent 100%);\n  flex-shrink: 0;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px solid var(--border-color);\n  background: transparent;\n  color: var(--text-secondary);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.4);\n  color: var(--accent-cyan);\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);\n}\n.badge-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 8px;\n  height: 8px;\n  background: var(--accent-red);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--accent-red);\n  animation: _ngcontent-%COMP%_pulse-dot 1.5s ease-in-out infinite;\n}\n.notification-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 8px;\n  height: 8px;\n  background: var(--accent-red);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--accent-red);\n  animation: _ngcontent-%COMP%_pulse-dot 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse-dot {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--accent-blue),\n      var(--accent-purple));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  color: white;\n  box-shadow: 0 0 20px rgba(0, 212, 255, 0.25);\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n.avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  box-shadow: 0 0 28px rgba(0, 212, 255, 0.35);\n}\n@media (max-width: 768px) {\n  .navbar-center[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .shift-card[_ngcontent-%COMP%]   .shift-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo-box.client-box[_ngcontent-%COMP%], .logo-box.hitachi-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\core\\layout\\navbar\\navbar.component.ts", lineNumber: 14 });
})();

// src/app/core/layout/sidebar/sidebar.component.ts
var _c02 = () => ({ exact: true });
function SidebarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "Roll Analytics System");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275element(4, "span", 12);
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6, "MENU");
    \u0275\u0275elementEnd()()();
  }
}
function SidebarComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("click", function SidebarComponent_a_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNavClick());
    });
    \u0275\u0275elementStart(1, "span", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r3.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275attribute("title", ctx_r1.layoutService.sidebarCollapsed() ? item_r3.label : null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function SidebarComponent_footer_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "footer", 18)(1, "div", 19);
    \u0275\u0275element(2, "span", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4, "System Online");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.version);
  }
}
var SidebarComponent = class _SidebarComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
    this.version = "v2.4.1";
    this.menuItems = [
      { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
      { path: "/roll-details", label: "Roll Details", icon: "settings" },
      { path: "/mill-information", label: "Mill Information", icon: "precision_manufacturing" },
      { path: "/telegram-logs", label: "Telegram Logs", icon: "chat" },
      { path: "/alarms", label: "Alarms", icon: "notifications_active" },
      { path: "/performance", label: "Performance", icon: "speed" },
      { path: "/cost-analysis", label: "Cost Analysis", icon: "paid" }
    ];
  }
  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
  onNavClick() {
    this.layoutService.closeMobileSidebar();
  }
  static {
    this.\u0275fac = function SidebarComponent_Factory(t) {
      return new (t || _SidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 10, consts: [[1, "sidebar"], [1, "sidebar-header"], ["class", "header-left", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidebar", 1, "collapse-btn", 3, "click"], [1, "material-icons"], [1, "sidebar-nav"], ["routerLinkActive", "active", "class", "nav-item", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["class", "sidebar-footer", 4, "ngIf"], [1, "sidebar-overlay", 3, "click"], [1, "header-left"], [1, "sidebar-brand"], [1, "menu-row"], [1, "menu-dot"], [1, "menu-label"], ["routerLinkActive", "active", 1, "nav-item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "nav-icon-wrap"], [1, "material-icons", "nav-icon"], [1, "nav-label"], [1, "sidebar-footer"], [1, "status-row"], [1, "status-dot"], [1, "status-text"], [1, "version-text"]], template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "aside", 0)(1, "header", 1);
        \u0275\u0275template(2, SidebarComponent_div_2_Template, 7, 0, "div", 2);
        \u0275\u0275elementStart(3, "button", 3);
        \u0275\u0275listener("click", function SidebarComponent_Template_button_click_3_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementStart(4, "span", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "nav", 5);
        \u0275\u0275template(7, SidebarComponent_a_7_Template, 6, 6, "a", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, SidebarComponent_footer_8_Template, 7, 1, "footer", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275listener("click", function SidebarComponent_Template_div_click_9_listener() {
          return ctx.layoutService.closeMobileSidebar();
        });
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("collapsed", ctx.layoutService.sidebarCollapsed())("mobile-open", ctx.layoutService.mobileSidebarOpen());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.layoutService.sidebarCollapsed() || ctx.layoutService.mobileSidebarOpen());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.layoutService.sidebarCollapsed() ? "chevron_right" : "chevron_left");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.menuItems);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.layoutService.sidebarCollapsed() || ctx.layoutService.mobileSidebarOpen());
        \u0275\u0275advance();
        \u0275\u0275classProp("visible", ctx.layoutService.mobileSidebarOpen());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, RouterLinkActive], styles: ['\n\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: var(--navbar-height);\n  left: 0;\n  width: var(--sidebar-width);\n  height: calc(100vh - var(--navbar-height) - 40px);\n  background:\n    linear-gradient(\n      180deg,\n      #08102a 0%,\n      #07091a 100%);\n  border-right: 1px solid rgba(0, 212, 255, 0.08);\n  box-shadow: 4px 0 30px rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-direction: column;\n  z-index: 999;\n  overflow-x: hidden;\n  overflow-y: auto;\n  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-collapsed);\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 0;\n  padding-right: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .collapse-btn[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-icon-wrap[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sidebar.mobile-open[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  z-index: 1001;\n  transform: translateX(0);\n}\n.sidebar.mobile-open[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .sidebar.mobile-open[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%], .sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  display: block;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 14px;\n  flex-shrink: 0;\n}\n.header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  color: var(--text-primary);\n  line-height: 1;\n  padding: 2px 0 4px;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(0, 212, 255, 0.95),\n      rgba(167, 139, 250, 0.9));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-shadow: 0 0 18px rgba(0, 212, 255, 0.14);\n}\n.menu-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.menu-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--accent-cyan);\n  box-shadow: 0 0 10px var(--accent-cyan);\n  flex-shrink: 0;\n}\n.menu-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  font-family: "Inter", sans-serif;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: 1px solid rgba(0, 212, 255, 0.15);\n  background: rgba(0, 212, 255, 0.05);\n  color: var(--text-secondary);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: auto;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.collapse-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 212, 255, 0.4);\n  color: var(--accent-cyan);\n  box-shadow: 0 0 14px rgba(0, 212, 255, 0.12);\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-height: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border-radius: 10px;\n  color: var(--text-secondary);\n  text-decoration: none;\n  position: relative;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  font-family: "Inter", sans-serif;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.1);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.15);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      rgba(37, 99, 235, 0.2) 0%,\n      rgba(37, 99, 235, 0.05) 100%);\n  border: 1px solid rgba(37, 99, 235, 0.2);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.25),\n      rgba(0, 212, 255, 0.15));\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--accent-cyan);\n}\n.nav-item.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 3px;\n  height: 24px;\n  border-radius: 3px 0 0 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--accent-cyan),\n      var(--accent-blue));\n  box-shadow: 0 0 12px rgba(0, 212, 255, 0.4);\n}\n.nav-icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.04);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--text-secondary);\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav-label[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid rgba(0, 212, 255, 0.06);\n  flex-shrink: 0;\n}\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--accent-green);\n  box-shadow: 0 0 10px var(--accent-green);\n  animation: pulse-dot 2.5s ease-in-out infinite;\n  flex-shrink: 0;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  font-family: "Inter", sans-serif;\n}\n.version-text[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: var(--text-muted);\n  display: block;\n  font-family: "Inter", sans-serif;\n}\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  pointer-events: none;\n}\n.sidebar-overlay.visible[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 1;\n  pointer-events: auto;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 0;\n    transform: translateX(-100%);\n    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  .sidebar[_ngcontent-%COMP%]:not(.mobile-open)   .nav-label[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]:not(.mobile-open)   .header-left[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]:not(.mobile-open)   .sidebar-footer[_ngcontent-%COMP%] {\n    opacity: 0;\n    visibility: hidden;\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%] {\n    width: var(--sidebar-width);\n    transform: translateX(0);\n  }\n  .sidebar.mobile-open[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .sidebar.mobile-open[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%], .sidebar.mobile-open[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n    opacity: 1;\n    visibility: visible;\n  }\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 0;\n  }\n  .sidebar.collapsed.mobile-open[_ngcontent-%COMP%] {\n    width: var(--sidebar-width);\n  }\n  .collapse-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=sidebar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src\\app\\core\\layout\\sidebar\\sidebar.component.ts", lineNumber: 19 });
})();

// src/app/core/layout/footer/footer.component.ts
function FooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function FooterComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.popupOpen = false);
    });
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 25);
    \u0275\u0275text(3, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 26);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", a_r3.dateTime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r3.parameter);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(a_r3.severity.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r3.severity, " ");
  }
}
function FooterComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 28);
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.popupOpen = false;
    this.currentTime = "";
    this.alarms = [
      { dateTime: "13/02/2026 | 10:30 AM", description: "High Temperature in Boiler", parameter: "Temperature", severity: "HIGH" },
      { dateTime: "13/02/2026 | 9:15 AM", description: "Low Pressure in Turbine", parameter: "Pressure", severity: "LOW" },
      { dateTime: "12/02/2026 | 6:45 PM", description: "Medium Flow Variation in Pipeline", parameter: "Flow Rate", severity: "MEDIUM" },
      { dateTime: "11/02/2026 | 1:10 PM", description: "Overheating Detected in Motor", parameter: "Temperature", severity: "HIGH" },
      { dateTime: "10/02/2026 | 4:00 AM", description: "Compressor Load Fluctuation", parameter: "Load", severity: "LOW" },
      { dateTime: "09/02/2026 | 11:20 AM", description: "Voltage Spike in Main Panel", parameter: "Voltage", severity: "HIGH" }
    ];
  }
  get highCount() {
    return this.alarms.filter((a) => a.severity === "HIGH").length;
  }
  get medCount() {
    return this.alarms.filter((a) => a.severity === "MEDIUM").length;
  }
  get lowCount() {
    return this.alarms.filter((a) => a.severity === "LOW").length;
  }
  togglePopup() {
    this.popupOpen = !this.popupOpen;
  }
  ngOnInit() {
    this.updateTime();
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1e3);
  }
  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
  updateTime() {
    const now = /* @__PURE__ */ new Date();
    this.currentTime = now.toLocaleTimeString("en-GB");
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 57, vars: 13, consts: [["class", "popup-backdrop", 3, "click", 4, "ngIf"], [1, "alarm-popup"], [1, "popup-header"], [1, "popup-title"], [1, "material-icons"], [1, "footer-text"], [1, "total-badge"], [1, "popup-chips"], [1, "chip", "high"], [1, "chip", "medium"], [1, "chip", "low"], [1, "close-popup", 3, "click"], [1, "popup-table-wrap"], [1, "popup-table"], [4, "ngFor", "ngForOf"], [1, "popup-footer-bar"], ["routerLink", "/alarms", 1, "view-all-btn", 3, "click"], [1, "alarm-footer-bar", 3, "click"], [1, "footer-left"], [1, "material-icons", "footer-alarm-icon"], ["class", "alarm-live-dot", 4, "ngIf"], [1, "footer-right"], [1, "footer-clock"], [1, "material-icons", "expand-icon"], [1, "popup-backdrop", 3, "click"], [1, "material-icons", "cal-icon"], [1, "param-chip"], [1, "severity-badge"], [1, "alarm-live-dot"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FooterComponent_div_0_Template, 1, 0, "div", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "notifications_active");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span", 5);
        \u0275\u0275text(7, " Active Alarms ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "span", 8)(12, "span", 4);
        \u0275\u0275text(13, "error");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span", 9)(16, "span", 4);
        \u0275\u0275text(17, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10)(20, "span", 4);
        \u0275\u0275text(21, "check_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 11);
        \u0275\u0275listener("click", function FooterComponent_Template_button_click_23_listener($event) {
          ctx.togglePopup();
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(24, "span", 4);
        \u0275\u0275text(25, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 12)(27, "table", 13)(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "DATE & TIME");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "DESCRIPTION");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "PARAMETER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "SEVERITY");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tbody");
        \u0275\u0275template(39, FooterComponent_tr_39_Template, 13, 6, "tr", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 15)(41, "button", 16);
        \u0275\u0275listener("click", function FooterComponent_Template_button_click_41_listener() {
          return ctx.popupOpen = false;
        });
        \u0275\u0275elementStart(42, "span", 4);
        \u0275\u0275text(43, "open_in_new");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " View Full Alarms Page ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "div", 17);
        \u0275\u0275listener("click", function FooterComponent_Template_div_click_45_listener() {
          return ctx.togglePopup();
        });
        \u0275\u0275elementStart(46, "div", 18)(47, "span", 19);
        \u0275\u0275text(48, "alarm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 5);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd();
        \u0275\u0275template(51, FooterComponent_span_51_Template, 1, 0, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 21)(53, "span", 22);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 23);
        \u0275\u0275text(56, " expand_less ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.popupOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("open", ctx.popupOpen);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.alarms.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" HIGH ", ctx.highCount, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" MEDIUM ", ctx.medCount, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" LOW ", ctx.lowCount, " ");
        \u0275\u0275advance(17);
        \u0275\u0275property("ngForOf", ctx.alarms);
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1(" Active Alarms (", ctx.alarms.length, ") ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.alarms.length > 0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.currentTime);
        \u0275\u0275advance();
        \u0275\u0275classProp("rotated", ctx.popupOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ['\n\n.alarm-footer-bar[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  z-index: 1050;\n}\n[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.alarm-footer-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  z-index: 1050;\n  background:\n    linear-gradient(\n      90deg,\n      #0A1020,\n      #07091A);\n  border-top: 1px solid rgba(255, 140, 66, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);\n}\n.alarm-footer-bar[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      90deg,\n      #0D1428,\n      #0A0F1E);\n  border-top-color: rgba(255, 140, 66, 0.4);\n}\n.footer-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.footer-alarm-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #FF8C42;\n}\n.footer-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #00D4FF;\n  text-shadow: 0 0 8px rgba(0, 212, 255, 0.6);\n}\n.alarm-live-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #FF4560;\n  box-shadow: 0 0 8px rgba(255, 69, 96, 0.8);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.2);\n  }\n}\n.footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.footer-clock[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #3D5175;\n  font-family: "Inter", sans-serif;\n  letter-spacing: 1px;\n}\n.expand-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #3D5175;\n  transition: transform 0.3s ease;\n}\n.expand-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.popup-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1048;\n  background: rgba(0, 0, 0, 0.3);\n}\n.alarm-popup[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  left: 0;\n  right: 0;\n  max-height: 0;\n  overflow: hidden;\n  z-index: 1049;\n  background:\n    linear-gradient(\n      145deg,\n      #0D1428,\n      #080E1C);\n  border-top: 1px solid rgba(0, 212, 255, 0.12);\n  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.7);\n  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;\n  opacity: 0;\n}\n.alarm-popup.open[_ngcontent-%COMP%] {\n  max-height: 420px;\n  opacity: 1;\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 24px;\n  border-bottom: 1px solid rgba(0, 212, 255, 0.08);\n  background: rgba(0, 212, 255, 0.03);\n  flex-wrap: wrap;\n}\n.popup-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.popup-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #00D4FF;\n  font-size: 18px;\n}\n.popup-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 15px;\n  font-weight: 700;\n  color: #E8F0FE;\n}\n.total-badge[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.15);\n  color: #00D4FF;\n  border-radius: 20px;\n  padding: 2px 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.popup-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex: 1;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.chip[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.chip.high[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.12);\n  color: #FF4560;\n  border: 1px solid rgba(255, 69, 96, 0.3);\n}\n.chip.medium[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.12);\n  color: #FF8C42;\n  border: 1px solid rgba(255, 140, 66, 0.3);\n}\n.chip.low[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.12);\n  color: #00E5A0;\n  border: 1px solid rgba(0, 229, 160, 0.3);\n}\n.close-popup[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 28px;\n  height: 28px;\n  border-radius: 7px;\n  border: 1px solid #1A2844;\n  background: rgba(255, 255, 255, 0.04);\n  color: #7B90B8;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.close-popup[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 69, 96, 0.4);\n  color: #FF4560;\n}\n.close-popup[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.popup-table-wrap[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 280px;\n  overflow-x: auto;\n}\n.popup-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 700px;\n}\n.popup-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: rgba(0, 212, 255, 0.05);\n  border-bottom: 1px solid rgba(0, 212, 255, 0.1);\n}\n.popup-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #3D5175;\n  font-weight: 700;\n  text-align: left;\n}\n.popup-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 11px 20px;\n  font-size: 13px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n  color: #E8F0FE;\n}\n.popup-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, 0.07);\n}\n.cal-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #00D4FF;\n  vertical-align: middle;\n  margin-right: 6px;\n}\n.param-chip[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  padding: 2px 10px;\n  font-size: 12px;\n  color: #7B90B8;\n}\n.severity-badge[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n}\n.severity-badge.high[_ngcontent-%COMP%] {\n  background: rgba(255, 69, 96, 0.12);\n  color: #FF4560;\n  border: 1px solid rgba(255, 69, 96, 0.35);\n}\n.severity-badge.medium[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 66, 0.12);\n  color: #FF8C42;\n  border: 1px solid rgba(255, 140, 66, 0.35);\n}\n.severity-badge.low[_ngcontent-%COMP%] {\n  background: rgba(0, 229, 160, 0.12);\n  color: #00E5A0;\n  border: 1px solid rgba(0, 229, 160, 0.35);\n}\n.popup-footer-bar[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border-top: 1px solid rgba(0, 212, 255, 0.08);\n  display: flex;\n  justify-content: flex-end;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(37, 99, 235, 0.1);\n  border: 1px solid rgba(37, 99, 235, 0.25);\n  border-radius: 8px;\n  padding: 7px 18px;\n  color: #00D4FF;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: "Inter", sans-serif;\n  transition: all 0.2s;\n}\n.view-all-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.view-all-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.2);\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\core\\layout\\footer\\footer.component.ts", lineNumber: 19 });
})();

// src/app/core/layout/layout/layout.component.ts
var LayoutComponent = class _LayoutComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
  }
  static {
    this.\u0275fac = function LayoutComponent_Factory(t) {
      return new (t || _LayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 2, consts: [[1, "layout-wrapper"], [1, "layout-body"], [1, "main-content"]], template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "app-navbar");
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "app-sidebar");
        \u0275\u0275elementStart(4, "main", 2);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(6, "app-footer");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275classProp("sidebar-collapsed", ctx.layoutService.sidebarCollapsed());
      }
    }, dependencies: [RouterOutlet, NavbarComponent, SidebarComponent, FooterComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  overflow: hidden;\n}\n.layout-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n}\n.layout-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - 64px - 40px);\n  margin-top: 64px;\n  overflow: hidden;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  background: #060B18;\n  min-width: 0;\n  margin-left: var(--sidebar-width);\n  padding: 20px;\n  padding-bottom: 40px;\n  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n  z-index: 1;\n}\n.main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-collapsed);\n}\napp-footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  height: 40px;\n  position: relative;\n  z-index: 1050;\n}\napp-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 999;\n}\napp-navbar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1000;\n}\n@media (max-width: 768px) {\n  .main-content[_ngcontent-%COMP%], .main-content.sidebar-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src\\app\\core\\layout\\layout\\layout.component.ts", lineNumber: 15 });
})();
export {
  LayoutComponent
};
//# sourceMappingURL=chunk-WE7EJI2E.js.map
