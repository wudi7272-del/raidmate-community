import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-ZRsGI6Tp.mjs";
import { d as cn, n as Button, o as Input, p as useStore, t as Badge } from "./ui-kit-jIK0-xvY.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Calculator, T as Gamepad2, h as PictureInPicture2, l as Swords, s as TriangleAlert, t as Zap, u as Sparkles, x as IdCard } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shell-CDMrEDNL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		key: "nav.rooms",
		Icon: Swords
	},
	{
		to: "/wall",
		key: "nav.wall",
		Icon: Sparkles
	},
	{
		to: "/tools",
		key: "nav.tools",
		Icon: Calculator
	},
	{
		to: "/profile",
		key: "nav.profile",
		Icon: IdCard
	}
];
function TopNav() {
	const { t } = useI18n();
	const { profile, authUser, logout, sirens } = useStore();
	const activeSiren = sirens[0];
	const [authOpen, setAuthOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		activeSiren ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-x-3 top-3 z-[70] mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-accent/60 bg-accent/15 px-4 py-3 shadow-2xl backdrop-blur-xl rise-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5 shrink-0 text-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] font-bold uppercase tracking-[0.18em] text-accent",
						children: ["全服紧急发车警报 · ", activeSiren.host]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 truncate text-xs font-semibold",
						children: activeSiren.message
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-lg bg-accent px-2.5 py-1.5 text-[10px] font-bold text-accent-foreground",
					children: "立即上车"
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-9 w-9 place-items-center rounded-xl bg-primary/18 text-lg glow-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm font-bold tracking-[0.18em] neon-text",
							children: t("appName")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-muted-foreground",
							children: t("tagline")
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						profile.vip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "vip",
							children: "VIP"
						}) : null,
						authUser ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-xl border border-border bg-surface-2/60 px-3 py-2 text-xs font-semibold",
							onClick: () => logout(),
							title: "退出登录",
							children: authUser.username
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-xl border border-primary/45 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary",
							onClick: () => setAuthOpen(true),
							children: "登录 / 注册"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSwitcher, {})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto max-w-5xl overflow-x-auto px-4 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "tap-scale flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-surface/60 px-3.5 py-2 text-xs font-semibold text-muted-foreground",
						activeProps: { className: "tap-scale flex shrink-0 items-center gap-1.5 rounded-xl border border-primary/50 bg-primary/15 px-3.5 py-2 text-xs font-semibold text-primary glow-primary" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "h-3.5 w-3.5" }), t(item.key)]
					}, item.to))
				})
			})]
		}),
		authOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthDialog, {
			onClose: () => setAuthOpen(false),
			onAdminLogin: () => {
				setAuthOpen(false);
				navigate({ to: "/admin" });
			}
		}) : null
	] });
}
function AuthDialog({ onClose, onAdminLogin }) {
	const { login, register } = useStore();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [trainerCode, setTrainerCode] = (0, import_react.useState)("");
	const submit = () => {
		if (mode === "register") {
			if (register(username, password, trainerCode)) onClose();
			return;
		}
		if (login(username, password)) if (username.trim().toLowerCase() === "admin" && password === "5500123488htk") onAdminLogin();
		else onClose();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[80] grid place-items-center bg-background/75 px-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card w-full max-w-md space-y-4 border-primary/30 p-5 glow-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-primary",
						children: "登录 / 注册"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "登录后管理金币、排队和提现申请。"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-muted-foreground",
						onClick: onClose,
						children: "关闭"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 rounded-xl bg-surface-2/60 p-1",
					children: ["login", "register"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: cn("rounded-lg px-3 py-2 text-xs font-semibold", mode === item ? "bg-primary/20 text-primary" : "text-muted-foreground"),
						onClick: () => setMode(item),
						children: item === "login" ? "登录" : "注册"
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold text-muted-foreground",
						children: "账号"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: username,
						onChange: (event) => setUsername(event.target.value),
						placeholder: "训练家账号"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold text-muted-foreground",
						children: "密码"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						value: password,
						onChange: (event) => setPassword(event.target.value),
						placeholder: "至少 6 位",
						onKeyDown: (event) => {
							if (event.key === "Enter") submit();
						}
					})]
				}),
				mode === "register" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold text-muted-foreground",
						children: "12 位 Pokémon GO 训练家代码"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						inputMode: "numeric",
						maxLength: 12,
						value: trainerCode,
						onChange: (event) => setTrainerCode(event.target.value.replace(/\D/g, "")),
						placeholder: "例如 123456789012"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: submit,
					children: mode === "login" ? "登录" : "创建账号并登录"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] text-muted-foreground",
					children: "普通玩家与后台账号使用同一个登录入口。"
				})
			]
		})
	});
}
function BottomBar() {
	const { t } = useI18n();
	const { profile, copy } = useStore();
	const [floating, setFloating] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [floating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-28 right-4 z-50 w-60 glass-card rise-in p-3 glow-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xs font-bold tracking-wide text-accent",
					children: t("float.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFloating(false),
					className: "text-xs text-muted-foreground hover:text-foreground",
					children: t("float.close")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-[11px] leading-relaxed text-muted-foreground",
				children: t("float.hint")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					className: "w-full",
					onClick: () => copy(profile.friendCode, t("copied")),
					children: [
						t("bar.copyCode"),
						" · ",
						profile.friendCode
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					className: "w-full",
					onClick: () => window.open("https://pokemongolive.com/", "_blank"),
					children: t("bar.launchGame")
				})]
			})
		]
	}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center gap-2 pb-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "flex-1",
					onClick: () => window.open("https://pokemongolive.com/", "_blank"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "h-4 w-4" }),
						" ",
						t("bar.launchGame")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: floating ? "accent" : "ghost",
					className: "flex-1",
					onClick: () => setFloating((v) => !v),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PictureInPicture2, { className: "h-4 w-4" }),
						" ",
						t("bar.floating")
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => copy(profile.friendCode, t("copied")),
					"aria-label": t("bar.copyCode"),
					children: "📋"
				})
			]
		})
	})] });
}
function Toast() {
	const { toast } = useStore();
	if (!toast) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed left-1/2 top-24 z-[60] -translate-x-1/2 rounded-full border border-primary/40 bg-popover/95 px-4 py-2 text-xs font-semibold text-primary shadow-xl backdrop-blur-xl rise-in",
		children: toast
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-5xl space-y-5 px-4 pb-36 pt-5",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toast, {})
		]
	});
}
//#endregion
export { PageShell as t };
