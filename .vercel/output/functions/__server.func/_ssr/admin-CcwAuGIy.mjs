import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Field, n as Button, o as Input, p as useStore, r as Card, s as SectionTitle, t as Badge } from "./ui-kit-jIK0-xvY.mjs";
import { g as useNavigate, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Coins, D as Eye, E as FilePenLine, F as Ban, I as ArrowLeft, M as Check, f as Shield, i as UserCheck, n as X, r as Wallet, v as LogOut, y as Image } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CcwAuGIy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Route = createFileRoute("/admin")({ component: AdminPage });
function AdminPage() {
	const navigate = useNavigate();
	const { isAdmin, logout, accounts, frozenAccounts, financeOrders, rooms, removeRoom, showToast, reviewFinanceOrder, toggleFrozenAccount, updateAccount, toggleAccountVip, resetAccountPassword } = useStore();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [room, setRoom] = (0, import_react.useState)(null);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [coins, setCoins] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (!isAdmin) navigate({ to: "/" });
	}, [isAdmin, navigate]);
	if (!isAdmin) return null;
	const pending = (kind) => financeOrders.filter((item) => item.kind === kind && item.status === "pending").length;
	const visible = financeOrders.filter((item) => filter === "all" || item.kind === filter);
	const jump = (id, nextFilter) => {
		if (nextFilter) setFilter(nextFilter);
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	const adjust = (account) => {
		const amount = Number(coins[account.username]);
		if (!Number.isFinite(amount) || amount === 0) return;
		updateAccount(account.username, {
			...account.profile,
			coins: Math.max(0, account.profile.coins + amount)
		});
		setCoins({
			...coins,
			[account.username]: ""
		});
		showToast("金币余额已更新");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background px-4 py-5 text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-bold neon-text",
								children: "NEXUS CONTROL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: "超级管理员后台 · 全局运营控制台"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => {
								logout();
								navigate({ to: "/" });
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), "退出管理后台"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "玩家账户",
								value: String(accounts.length),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, {}),
								onClick: () => jump("users")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "在线房间",
								value: String(rooms.length),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {}),
								onClick: () => jump("rooms")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "待审充值",
								value: String(pending("deposit")),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, {}),
								onClick: () => jump("finance", "deposit")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								label: "待处理提现",
								value: String(pending("withdrawal")),
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, {}),
								onClick: () => jump("finance", "withdrawal")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "finance",
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
								title: "财务审核中心",
								subtitle: "点击订单查看完整用户资料与凭证"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									"all",
									"deposit",
									"withdrawal"
								].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: filter === value ? "primary" : "outline",
									onClick: () => setFilter(value),
									children: value === "all" ? "全部" : value === "deposit" ? "充值" : "提现"
								}, value))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 lg:grid-cols-2",
							children: visible.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinanceRow, {
								order,
								open: () => setSelected(order),
								review: (decision) => reviewFinanceOrder(order.id, decision)
							}, order.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "users",
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							title: "用户控制中心",
							subtitle: "调整金币、VIP、冻结账号、编辑资料与重置密码"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: accounts.length ? accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRow, {
								account,
								frozen: frozenAccounts.includes(account.username),
								editing: editing === account.username,
								coin: coins[account.username] ?? "",
								setCoin: (value) => setCoins({
									...coins,
									[account.username]: value
								}),
								adjust: () => adjust(account),
								toggleFreeze: () => toggleFrozenAccount(account.username),
								toggleVip: () => toggleAccountVip(account.username),
								edit: () => setEditing(editing === account.username ? null : account.username),
								save: (profile, password) => {
									updateAccount(account.username, profile, password || void 0);
									setEditing(null);
									showToast("用户资料已保存");
								},
								reset: (password) => {
									resetAccountPassword(account.username, password);
									showToast("密码已重置");
								}
							}, account.username)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "暂无注册玩家。"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						id: "rooms",
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
							title: "全局房间控制",
							subtitle: "查看成员详情或强行解散房间"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-2 md:grid-cols-2",
							children: rooms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-xl bg-surface-2/45 p-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-semibold",
											children: [
												item.boss,
												" · ",
												item.gym
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-muted-foreground",
											children: [
												"房主 ",
												item.hostName,
												" · ",
												item.queue.length,
												"/",
												item.capacity,
												" 人 ·",
												" ",
												item.launched ? "已发车" : "排队中"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setRoom(item),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }), "详情"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "danger",
										onClick: () => {
											removeRoom(item.id);
											showToast("房间已强行解散");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-3 w-3" }), "解散"]
									})
								]
							}, item.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
						onClick: () => void navigate({ to: "/" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "返回普通首页"]
					})
				]
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderDialog, {
				order: selected,
				account: accounts.find((item) => item.username === selected.username),
				close: () => setSelected(null)
			}) : null,
			room ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomDialog, {
				room,
				close: () => setRoom(null)
			}) : null
		]
	});
}
function FinanceRow({ order, open, review }) {
	const pending = order.status === "pending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-xl bg-surface-2/45 p-3 text-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "min-w-0 flex-1 text-left",
				onClick: open,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-semibold",
					children: [
						order.id,
						" · ",
						order.username
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] text-muted-foreground",
					children: order.kind === "deposit" ? `充值 ${order.amount} USDT · ${order.coins} 金币` : `提现 ${order.coins} 金币 · ${order.amount} 金额`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: pending ? "vip" : order.status === "approved" ? "primary" : "muted",
				children: pending ? "待审核" : order.status === "approved" ? "已完成" : "已退回"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "outline",
				onClick: open,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3 w-3" }), "资料"]
			}),
			pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				onClick: () => review("approved"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" }), "通过"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "outline",
				onClick: () => review("rejected"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" }), "退回"]
			})] }) : null
		]
	});
}
function UserRow({ account, frozen, editing, coin, setCoin, adjust, toggleFreeze, toggleVip, edit, save, reset }) {
	const [draft, setDraft] = (0, import_react.useState)(account.profile);
	const [password, setPassword] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setDraft(account.profile), [account.profile]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface-2/45 p-3 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-semibold",
						children: [
							account.username,
							" ",
							account.profile.vip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "vip",
								children: "VIP"
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] text-muted-foreground",
						children: [
							account.profile.friendCode,
							" · ",
							account.profile.coins,
							" 金币"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: frozen ? "muted" : "primary",
					children: frozen ? "已冻结" : "正常"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "w-24 py-1.5 text-xs",
					type: "number",
					placeholder: "±金币",
					value: coin,
					onChange: (event) => setCoin(event.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: adjust,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-3 w-3" }), "调整"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "outline",
					onClick: toggleVip,
					children: account.profile.vip ? "取消 VIP" : "设置 VIP"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: frozen ? "primary" : "danger",
					onClick: toggleFreeze,
					children: frozen ? "解封" : "冻结"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "outline",
					onClick: edit,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePenLine, { className: "h-3 w-3" }), "资料"]
				})
			]
		}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-2 border-t border-border pt-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "用户名",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.trainerName,
						onChange: (e) => setDraft({
							...draft,
							trainerName: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "训练家代码",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.gameCode,
						onChange: (e) => setDraft({
							...draft,
							gameCode: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "好友代码",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft.friendCode,
						onChange: (e) => setDraft({
							...draft,
							friendCode: e.target.value
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "等级",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: draft.level,
						onChange: (e) => setDraft({
							...draft,
							level: Number(e.target.value)
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "新密码",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						value: password,
						placeholder: "留空不修改",
						onChange: (e) => setPassword(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						onClick: () => save(draft, password),
						children: "保存资料"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						disabled: !password,
						onClick: () => {
							reset(password);
							setPassword("");
						},
						children: "仅重置密码"
					})]
				})
			]
		}) : null]
	});
}
function OrderDialog({ order, account, close }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		title: `${order.id} · ${order.kind === "deposit" ? "充值订单" : "提现申请"}`,
		close,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 text-xs sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "用户名",
					value: order.username
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "训练家代码",
					value: account?.profile.friendCode ?? "未找到"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "联系方式",
					value: order.contact || "未填写"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "收付款户口",
					value: order.accountInfo || "未填写"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "金额",
					value: `${order.amount} / ${order.coins} 金币`
				})
			]
		}), order.proof ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: order.proof,
			target: "_blank",
			rel: "noreferrer",
			className: "mt-3 block overflow-hidden rounded-xl border border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: order.proof,
				alt: "转账凭证",
				className: "max-h-80 w-full object-contain"
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "mx-auto mb-2 h-5 w-5" }), "该订单未上传凭证"]
		})]
	});
}
function RoomDialog({ room, close }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		title: `${room.boss} · ${room.gym}`,
		close,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 text-xs sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "房主",
					value: `${room.hostName} · ${room.hostCode}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "模式",
					value: `${room.mode} · ${room.minutes} 分钟`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "密码",
					value: room.password || "远程邀请"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
					label: "队列",
					value: `${room.queue.length}/${room.capacity}`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-2",
			children: room.queue.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between rounded-lg bg-surface-2/50 px-3 py-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: member.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: member.ready ? "已准备" : "未准备"
				})]
			}, member.id))
		})]
	});
}
function Dialog({ title, children, close }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-background/80 px-4 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card max-h-[90vh] w-full max-w-2xl overflow-auto p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-primary",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "关闭",
					onClick: close,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), children]
		})
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-surface-2/40 p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-semibold",
			children: value
		})]
	});
}
function Metric({ label, value, icon, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: "text-left",
		onClick,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "flex items-center gap-3 transition hover:border-primary/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-xl font-bold",
				children: value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] text-muted-foreground",
				children: label
			})] })]
		})
	});
}
//#endregion
export { Route as n, AdminPage as t };
