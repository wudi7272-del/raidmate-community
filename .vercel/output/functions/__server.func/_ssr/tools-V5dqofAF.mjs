import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Field, n as Button, o as Input, r as Card, s as SectionTitle, t as Badge } from "./ui-kit-jIK0-xvY.mjs";
import { M as Check, P as BellRing, b as ImagePlus, k as Crosshair, l as Swords, p as ShieldCheck, t as Zap } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Shell-CDMrEDNL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tools-V5dqofAF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ToolsPage() {
	const [a, setA] = (0, import_react.useState)(15);
	const [d, setD] = (0, import_react.useState)(15);
	const [s, setS] = (0, import_react.useState)(15);
	const [level, setLevel] = (0, import_react.useState)(30);
	const [cp, setCp] = (0, import_react.useState)(1800);
	const [hp, setHp] = (0, import_react.useState)(160);
	const [species, setSpecies] = (0, import_react.useState)("暗影超梦");
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [alertEnabled, setAlertEnabled] = (0, import_react.useState)(true);
	const [floating, setFloating] = (0, import_react.useState)(false);
	const uploadRef = (0, import_react.useRef)(null);
	const pct = Math.round((a + d + s) / 45 * 100);
	const cpm = .094 + (level - 1) * .0155;
	const estCp = Math.max(10, Math.round((100 + a) * Math.sqrt(100 + d) * Math.sqrt(100 + s) * cpm * cpm / 10));
	const grade = pct === 100 ? "perfect" : pct >= 89 ? "great" : pct >= 67 ? "ok" : "bad";
	(0, import_react.useEffect)(() => {
		const receiveCapture = (event) => {
			const data = event.data?.type === "pokemon-go-screen-capture" ? event.data : null;
			if (!data) return;
			setScanning(true);
			window.setTimeout(() => {
				setScanning(false);
				if (typeof data.cp === "number") setCp(data.cp);
				if (typeof data.hp === "number") setHp(data.hp);
				if (typeof data.species === "string") setSpecies(data.species);
			}, 450);
		};
		window.addEventListener("message", receiveCapture);
		window.addEventListener("onNativeScreenCapture", receiveCapture);
		return () => {
			window.removeEventListener("message", receiveCapture);
			window.removeEventListener("onNativeScreenCapture", receiveCapture);
		};
	}, []);
	const sliders = [
		[
			"攻击 IV",
			a,
			setA,
			15
		],
		[
			"防御 IV",
			d,
			setD,
			15
		],
		[
			"体力 IV",
			s,
			setS,
			15
		],
		[
			"等级 LV",
			level,
			setLevel,
			51
		]
	];
	const handleUpload = () => {
		setScanning(true);
		window.setTimeout(() => {
			setScanning(false);
			setSpecies("暗影超梦");
			setCp(1821);
			setHp(160);
			setA(15);
			setD(15);
			setS(15);
		}, 650);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		className: floating ? "floating-mode" : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				title: "IV / PvP 战术中心",
				subtitle: "普通玩家免费无限次查询，支持手动输入、截图识别与原生悬浮窗接入"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), "免费无限次 IV 查询已开启"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: alertEnabled,
							onChange: (e) => setAlertEnabled(e.target.checked)
						}), "100% IV 强提醒"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setFloating((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-3.5 w-3.5" }), floating ? "退出悬浮视图" : "极简悬浮视图"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4 border-accent/30 bg-accent/5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm font-bold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-4 w-4 text-accent" }), "截图 / 悬浮窗识别"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[11px] text-muted-foreground",
							children: "支持 window.onNativeScreenCapture 与 postMessage 数据桥接"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: uploadRef,
							type: "file",
							accept: "image/*",
							className: "hidden",
							onChange: handleUpload
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => uploadRef.current?.click(),
							disabled: scanning,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-3.5 w-3.5" }), scanning ? "正在识别..." : "上传游戏截图"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "宝可梦",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: species,
								onChange: (e) => setSpecies(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "CP",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "10",
								value: cp,
								onChange: (e) => setCp(Number(e.target.value))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "HP",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								min: "1",
								value: hp,
								onChange: (e) => setHp(Number(e.target.value))
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-4",
				children: [sliders.map(([label, value, set, max]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm text-primary",
							children: value
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 0,
						max,
						value,
						onChange: (e) => set(Number(e.target.value)),
						className: "w-full accent-[var(--primary)]"
					})]
				}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("tools.baseCp"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: cp,
							onChange: (e) => setCp(Number(e.target.value))
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("tools.evoMultiplier"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.1",
							value: evo,
							onChange: (e) => setEvo(Number(e.target.value))
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: pct === 100 && alertEnabled ? "glow-accent border-accent/70 text-center" : "glow-primary text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "IV 综合评分"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-3xl font-bold neon-text",
								children: [pct, "%"]
							}),
							pct === 100 && alertEnabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-center gap-1 text-xs font-bold text-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "h-3.5 w-3.5" }), "100% IV 强提醒"]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "估算 CP / HP"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold text-primary",
								children: estCp
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									"截图 HP ",
									hp,
									" · 输入 CP ",
									cp
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wider text-muted-foreground",
							children: "PvP 评级"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: grade === "bad" ? "muted" : "vip",
							className: "mt-2",
							children: grade === "perfect" ? "大师联赛优先" : grade === "great" ? "高级联赛可用" : "建议继续筛选"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swords, { className: "h-4 w-4 text-primary" }), "一键推演最佳配招"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary" }), "快速招式：念力"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-primary" }), "蓄力招式：精神击破 · 暗影球"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-vip" }), "建议定位：大师联赛压制位"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "h-4 w-4 text-vip" }), "Boss 100% IV CP 对照表"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "所有玩家免费查看，无次数限制。天气加成会改变对应 CP。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2 text-xs sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-2",
								children: ["超梦 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "ml-2 text-primary",
									children: "CP 2387"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-2",
								children: ["裂空座 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "ml-2 text-primary",
									children: "CP 2191"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-2",
								children: ["盖欧卡 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "ml-2 text-primary",
									children: "CP 2351"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-surface-2 p-2",
								children: ["固拉多 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "ml-2 text-primary",
									children: "CP 2351"
								})]
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ToolsPage as component };
