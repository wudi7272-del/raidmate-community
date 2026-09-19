import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as I18nProvider } from "./i18n-ZRsGI6Tp.mjs";
import { l as StoreProvider } from "./ui-kit-jIK0-xvY.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$6 } from "./admin-CcwAuGIy.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CzOXfL1I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DCVVAIxx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Raid Nexus — Pokémon GO 团战社区" },
			{
				name: "description",
				content: "实时团战组队、排队、战术计算与训练家动态社区，支持中英日韩四语言。"
			},
			{
				property: "og:title",
				content: "Raid Nexus — Pokémon GO 团战社区"
			},
			{
				property: "og:description",
				content: "远程与现场团战房间、VIP 优先排队、炫耀墙与 IV 计算助手。"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans+KR:wght@400;500;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "zh-CN",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
	});
}
var $$splitComponentImporter$4 = () => import("./routes-CGUxBjvL.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Raid Nexus — Pokémon GO 实时团战组队与排队系统" },
		{
			name: "description",
			content: "实时创建远程团战与现场近卡团战房间，VIP 优先排队、一键复制好友码、一键发车。"
		},
		{
			property: "og:title",
			content: "Raid Nexus — 实时团战组队"
		},
		{
			property: "og:description",
			content: "远程邀请函与现场私房密码双模式打房排队系统，支持中英日韩四语言。"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./profile-DzFJCSLm.mjs");
var Route$3 = createFileRoute("/profile")({
	head: () => ({ meta: [
		{ title: "训练家资料卡 | Raid Nexus" },
		{
			name: "description",
			content: "设置训练家名称、游戏代号、好友代码与等级，一键复制好友码并开启 VIP 特权。"
		},
		{
			property: "og:title",
			content: "训练家资料卡"
		},
		{
			property: "og:description",
			content: "管理你的训练家身份、好友代码与 VIP 优先排队权限。"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./super-admin-Cm4x-uoQ.mjs");
var Route$2 = createFileRoute("/super-admin")({
	head: () => ({ meta: [{ title: "超级管理员控制台 | Raid Nexus" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tools-V5dqofAF.mjs");
var Route$1 = createFileRoute("/tools")({
	head: () => ({ meta: [
		{ title: "IV / LV / CP 计算助手 | Raid Nexus" },
		{
			name: "description",
			content: "快速估算宝可梦个体值、等级与进化后战力，团战前一秒决策。"
		},
		{
			property: "og:title",
			content: "IV / LV / CP 计算助手"
		},
		{
			property: "og:description",
			content: "输入攻击、防御、体力与等级，立即得到 IV 评分与进化 CP。"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./wall-DEfpd9Ns.mjs");
var Route = createFileRoute("/wall")({
	head: () => ({ meta: [
		{ title: "炫耀墙 · 闪光战绩动态 | Raid Nexus" },
		{
			name: "description",
			content: "发布闪光、百变怪、暗影与 100IV 宝可梦战绩，点赞评论与训练家互动。"
		},
		{
			property: "og:title",
			content: "炫耀墙 · 闪光战绩动态"
		},
		{
			property: "og:description",
			content: "晒出你的闪光与 100IV 捕捉，点赞评论实时互动。"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AdminRoute: Route$6.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$5
	}),
	ProfileRoute: Route$3.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => Route$5
	}),
	SuperAdminRoute: Route$2.update({
		id: "/super-admin",
		path: "/super-admin",
		getParentRoute: () => Route$5
	}),
	ToolsRoute: Route$1.update({
		id: "/tools",
		path: "/tools",
		getParentRoute: () => Route$5
	}),
	WallRoute: Route.update({
		id: "/wall",
		path: "/wall",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
