import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-ZRsGI6Tp.mjs";
import { a as Field, n as Button, o as Input, p as useStore, r as Card, s as SectionTitle, t as Badge } from "./ui-kit-jIK0-xvY.mjs";
import { A as Coins, C as Gift, M as Check, O as Crown, a as Upload, j as Clipboard, n as X } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Shell-CDMrEDNL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-DzFJCSLm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const { t } = useI18n();
	const { profile, setProfile, isAdmin, copy, showToast, addCoins, buyVip, submitDeposit, submitWithdrawal } = useStore();
	const [draft, setDraft] = (0, import_react.useState)(profile);
	const [monetizationOpen, setMonetizationOpen] = (0, import_react.useState)(false);
	const [financeMode, setFinanceMode] = (0, import_react.useState)("deposit");
	const [financeAmount, setFinanceAmount] = (0, import_react.useState)("6");
	const [financeCoins, setFinanceCoins] = (0, import_react.useState)("300");
	const [financeAccount, setFinanceAccount] = (0, import_react.useState)("");
	const [financeContact, setFinanceContact] = (0, import_react.useState)("");
	const [financeProof, setFinanceProof] = (0, import_react.useState)("");
	const handleProof = (file) => {
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => setFinanceProof(String(reader.result ?? ""));
		reader.readAsDataURL(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { title: t("profile.title") }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3 glow-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 font-display text-lg font-bold text-primary",
						children: draft.trainerName.slice(0, 2).toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg font-bold",
						children: draft.trainerName
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "primary",
								children: ["LV ", draft.level]
							}),
							draft.vip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "vip",
								children: "VIP"
							}) : null,
							isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "accent",
								children: t("profile.admin")
							}) : null
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between rounded-xl border border-vip/30 bg-vip/5 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-4 w-4 text-vip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground",
							children: "NEXUS Coins"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-bold text-vip",
							children: profile.coins
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "vip",
						onClick: () => setMonetizationOpen(true),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3.5 w-3.5" }), " 获取金币"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("profile.trainerName"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.trainerName,
						onChange: (e) => setDraft({
							...draft,
							trainerName: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("profile.gameCode"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.gameCode,
						onChange: (e) => setDraft({
							...draft,
							gameCode: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("profile.friendCode"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: draft.friendCode,
							onChange: (e) => setDraft({
								...draft,
								friendCode: e.target.value
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => copy(draft.friendCode, t("copied")),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "h-4 w-4" })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: t("profile.level"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: draft.level,
						onChange: (e) => setDraft({
							...draft,
							level: Number(e.target.value)
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: () => {
						setProfile({
							...draft,
							coins: profile.coins,
							badges: profile.badges,
							vip: profile.vip || draft.vip
						});
						showToast(t("profile.saved"));
					},
					children: t("profile.save")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: t("profile.perks")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: draft.vip ? "vip" : "outline",
					className: "w-full",
					onClick: () => {
						const next = {
							...draft,
							vip: !draft.vip,
							coins: profile.coins,
							badges: profile.badges
						};
						setDraft(next);
						setProfile(next);
					},
					children: draft.vip ? t("profile.vipOn") : t("profile.vipOff")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: t("profile.adminNote")
				})
			]
		}),
		monetizationOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-[80] grid place-items-center bg-background/75 px-4 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card w-full max-w-md space-y-4 border-vip/30 p-5 glow-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-display text-lg font-bold text-vip",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-5 w-5" }), " Monetization Suite"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: "测试模式，不会产生真实扣款。"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Close",
							className: "rounded-lg p-1 text-muted-foreground hover:bg-surface-2 hover:text-foreground",
							onClick: () => setMonetizationOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: financeMode === "deposit" ? "primary" : "outline",
							onClick: () => setFinanceMode("deposit"),
							children: "充值申请"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: financeMode === "withdrawal" ? "primary" : "outline",
							onClick: () => setFinanceMode("withdrawal"),
							children: "提现申请"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 rounded-xl border border-border bg-surface-2/30 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: financeMode === "deposit" ? "充值金额 / USDT" : "提现金币数量",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: "1",
									value: financeAmount,
									onChange: (event) => setFinanceAmount(event.target.value)
								})
							}),
							financeMode === "deposit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "到账金币",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: "1",
									value: financeCoins,
									onChange: (event) => setFinanceCoins(event.target.value)
								})
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "收付款户口信息",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: financeAccount,
									placeholder: "银行户口 / 钱包地址 / UID",
									onChange: (event) => setFinanceAccount(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "联系方式",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: financeContact,
									placeholder: "Telegram / Discord / 手机",
									onChange: (event) => setFinanceContact(event.target.value)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-xs text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }),
									financeProof ? "凭证已读取，可重新上传" : "上传转账凭证 / 收付款二维码 / 银行截图",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "sr-only",
										type: "file",
										accept: "image/*",
										onChange: (event) => handleProof(event.target.files?.[0])
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								onClick: () => {
									const amount = Number(financeAmount);
									if (!financeAccount.trim() || !financeContact.trim() || !Number.isFinite(amount) || amount <= 0) {
										showToast("请完整填写金额、户口信息和联系方式");
										return;
									}
									if (financeMode === "deposit") submitDeposit({
										amount,
										coins: Math.max(1, Number(financeCoins)),
										proof: financeProof,
										accountInfo: financeAccount.trim(),
										contact: financeContact.trim()
									});
									else submitWithdrawal({
										amount,
										proof: financeProof,
										accountInfo: financeAccount.trim(),
										contact: financeContact.trim()
									});
									setFinanceProof("");
								},
								children: financeMode === "deposit" ? "提交充值审核" : "提交提现申请"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 p-3 text-left transition hover:bg-primary/15",
								onClick: () => addCoins(5, "激励广告奖励"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-5 w-5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold",
											children: "观看激励广告"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "完整观看后获得 +5 金币"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-bold text-primary",
										children: "+5"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-3 text-left transition hover:bg-accent/15 disabled:cursor-not-allowed disabled:opacity-50",
								disabled: profile.vip,
								onClick: () => buyVip(),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-5 w-5 text-accent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold",
											children: "购买 VIP 插队特权"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "199 金币 · 优先进入队列"
										})]
									}),
									profile.vip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-bold text-accent",
										children: "199"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex w-full items-center gap-3 rounded-xl border border-vip/30 bg-vip/10 p-3 text-left transition hover:bg-vip/15",
								onClick: () => addCoins(50, "测试充值包"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-5 w-5 text-vip" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold",
											children: "金币充值包"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground",
											children: "测试模式 · 购买 50 金币"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-bold text-vip",
										children: "+50"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "w-full",
						onClick: () => setMonetizationOpen(false),
						children: "关闭"
					})
				]
			})
		}) : null
	] });
}
//#endregion
export { ProfilePage as component };
