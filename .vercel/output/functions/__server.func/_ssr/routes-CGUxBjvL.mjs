import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-ZRsGI6Tp.mjs";
import { a as Field, c as Select, d as cn, f as generatePassword, i as FORMATIONS, n as Button, o as Input, p as useStore, r as Card, t as Badge } from "./ui-kit-jIK0-xvY.mjs";
import { A as Coins, a as Upload, c as Target, d as Siren, m as ScanLine, o as Trophy, u as Sparkles, w as Gauge } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Shell-CDMrEDNL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CGUxBjvL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_raid_default = "/assets/hero-raid-CYqUXLLN.jpg";
var TYPES = [
	"Psychic",
	"Dragon",
	"Fire",
	"Water",
	"Grass",
	"Electric",
	"Dark",
	"Steel",
	"Ghost"
];
function RoomsPage() {
	const { t } = useI18n();
	const { rooms, profile, sirens, leaderboard, bounties } = useStore();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [creating, setCreating] = (0, import_react.useState)(false);
	const visible = rooms.filter((r) => filter === "all" || r.mode === filter);
	const queued = rooms.reduce((n, r) => n + r.queue.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-3xl border border-border rise-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_raid_default,
					alt: "",
					width: 1600,
					height: 912,
					className: "h-40 w-full object-cover opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-bold tracking-[0.2em] text-primary",
								children: t("live")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-2xl font-bold neon-text",
							children: t("rooms.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t("rooms.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "primary",
								children: [
									rooms.length,
									" ",
									t("openRooms")
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "accent",
								children: [
									queued + 128,
									" ",
									t("onlineTrainers")
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-vip/30 bg-vip/5 sm:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground",
							children: t("wallet.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coins, { className: "h-4 w-4 text-vip" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-display text-2xl font-bold text-vip",
						children: profile.coins
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted-foreground",
						children: t("wallet.hint")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-primary/30 bg-primary/5 sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold",
							children: t("siren.title")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] text-muted-foreground",
						children: t("siren.hint")
					}),
					sirens[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-xs text-accent",
						children: [
							sirens[0].host,
							"：",
							sirens[0].message
						]
					}) : null
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveOpsPanel, {
			leaderboard,
			bounties
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [[
				"all",
				"remote",
				"local"
			].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFilter(f),
				className: cn("tap-scale rounded-xl border border-border px-3 py-2 text-xs font-semibold", filter === f ? "border-primary/60 bg-primary/15 text-primary" : "text-muted-foreground"),
				children: t(`rooms.filter.${f}`)
			}, f)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "ml-auto",
				size: "sm",
				onClick: () => setCreating(true),
				children: ["＋ ", t("rooms.create")]
			})]
		}),
		creating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateRoomForm, {
			onClose: () => setCreating(false),
			types: TYPES
		}) : null,
		visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "text-center text-sm text-muted-foreground",
			children: t("rooms.empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: visible.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomCard, { room }, room.id))
		})
	] });
}
function LiveOpsPanel({ leaderboard, bounties }) {
	const { t } = useI18n();
	const { createBounty, acceptBounty, settleBounty, profile } = useStore();
	const [request, setRequest] = (0, import_react.useState)("");
	const [boss, setBoss] = (0, import_react.useState)("Shadow Mewtwo");
	const [reward, setReward] = (0, import_react.useState)(100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-vip" }), t("leaderboard.title")]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] text-muted-foreground",
					children: t("leaderboard.subtitle")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "vip",
					children: "TOP 3"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: leaderboard.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl bg-surface-2/45 px-3 py-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg text-vip",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-semibold",
								children: entry.team
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] text-muted-foreground",
								children: [
									entry.boss,
									" · ",
									entry.seconds,
									"s · ",
									entry.badge
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-primary",
							children: ["+", entry.reward]
						})
					]
				}, entry.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4 text-accent" }), t("bounty.title")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1fr_0.7fr_0.45fr] gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: request,
							onChange: (e) => setRequest(e.target.value),
							placeholder: t("bounty.placeholder")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: boss,
							onChange: (e) => setBoss(e.target.value),
							placeholder: "Boss"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: reward,
							onChange: (e) => setReward(Number(e.target.value))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					className: "w-full",
					disabled: !request.trim(),
					onClick: () => {
						createBounty(request.trim(), boss.trim() || "Raid Boss", reward);
						setRequest("");
					},
					children: t("bounty.publish")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: bounties.slice(0, 3).map((bounty) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface-2/35 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-semibold",
										children: bounty.request
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-[10px] text-muted-foreground",
										children: [
											bounty.author,
											" · ",
											bounty.boss
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: bounty.status === "completed" ? "muted" : "vip",
									children: [bounty.reward, " 金"]
								})]
							}),
							bounty.status === "open" && bounty.author !== profile.trainerName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "accent",
								className: "mt-2",
								onClick: () => acceptBounty(bounty.id),
								children: t("bounty.accept")
							}) : null,
							bounty.status === "accepted" && bounty.acceptedBy === profile.trainerName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								className: "mt-2",
								onClick: () => settleBounty(bounty.id),
								children: t("bounty.settle")
							}) : null
						]
					}, bounty.id))
				})
			]
		})]
	});
}
function CreateRoomForm({ onClose, types }) {
	const { t } = useI18n();
	const { profile, createRoom, showToast } = useStore();
	const [boss, setBoss] = (0, import_react.useState)("");
	const [gym, setGym] = (0, import_react.useState)("");
	const [cp, setCp] = (0, import_react.useState)(45e3);
	const [type, setType] = (0, import_react.useState)(types[0] ?? "Psychic");
	const [minutes, setMinutes] = (0, import_react.useState)(45);
	const [mode, setMode] = (0, import_react.useState)("remote");
	const [capacity, setCapacity] = (0, import_react.useState)(10);
	const [password, setPassword] = (0, import_react.useState)(generatePassword());
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const handleScreenshot = (file) => {
		if (!file) return;
		setScanning(true);
		window.setTimeout(() => {
			setBoss("Mega Rayquaza");
			setGym("Central Plaza Gym");
			setMinutes(32);
			setType("Dragon");
			setScanning(false);
			showToast(t("form.ocrDone"));
		}, 650);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-3 glow-primary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-base font-bold text-primary",
				children: t("form.create")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary/35 bg-primary/10 px-3 py-3 text-xs font-semibold text-primary transition hover:bg-primary/15",
				children: [
					scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "h-4 w-4 animate-pulse" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }),
					scanning ? t("form.ocrScanning") : t("form.ocrUpload"),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/*",
						className: "sr-only",
						onChange: (event) => handleScreenshot(event.target.files?.[0])
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("form.bossName"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: boss,
					onChange: (e) => setBoss(e.target.value),
					placeholder: "Mewtwo"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("form.gym"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: gym,
					onChange: (e) => setGym(e.target.value),
					placeholder: "Central Plaza Gym"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("form.cp"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: cp,
							onChange: (e) => setCp(Number(e.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("form.type"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: type,
							onChange: (e) => setType(e.target.value),
							children: types.map((ty) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: ty,
								children: ty
							}, ty))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("form.timeLeft"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: minutes,
							onChange: (e) => setMinutes(Number(e.target.value))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("form.capacity"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
							value: capacity,
							onChange: (e) => setCapacity(Number(e.target.value)),
							children: [
								3,
								5,
								8,
								10,
								20
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: n,
								children: n
							}, n))
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2",
				children: ["remote", "local"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setMode(m),
					className: cn("tap-scale rounded-xl border p-3 text-left", mode === m ? "border-primary/60 bg-primary/12 glow-primary" : "border-border bg-surface/50"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs font-bold",
						children: t(`rooms.mode.${m}`)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-[10px] leading-snug text-muted-foreground",
						children: t(`rooms.mode.${m}.desc`)
					})]
				}, m))
			}),
			mode === "local" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: t("form.password"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: password,
						onChange: (e) => setPassword(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => setPassword(generatePassword()),
						children: t("form.regenerate")
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "flex-1",
					onClick: () => {
						createRoom({
							boss: boss.trim() || "Mewtwo",
							gym: gym.trim() || "Raid Nexus Gym",
							cp,
							type,
							minutes,
							mode,
							capacity,
							hostName: profile.trainerName,
							hostCode: profile.friendCode,
							password
						});
						showToast(t("form.submit"));
						onClose();
					},
					children: t("form.submit")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: onClose,
					children: t("form.cancel")
				})]
			})
		]
	});
}
function RoomCard({ room }) {
	const { t } = useI18n();
	const { profile, isAdmin, copy, joinRoom, leaveRoom, toggleReady, kick, launchRoom, removeRoom, broadcastSiren, setFormation, toggleLottery, joinLottery, settleRoom } = useStore();
	const isHost = room.hostName === profile.trainerName;
	const canManage = isHost || isAdmin;
	const inQueue = room.queue.some((m) => m.isSelf);
	const full = room.queue.length >= room.capacity;
	const formation = FORMATIONS.find((item) => item.id === room.formationId) ?? FORMATIONS[0];
	const totalDps = formation.dps + room.queue.reduce((sum, member) => sum + (member.dps ?? 0), 0);
	const estimatedMinutes = Math.max(1, Math.round(room.cp / totalDps * .7));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-3 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: room.mode === "remote" ? "primary" : "accent",
							children: t(`rooms.mode.${room.mode}`)
						}), room.launched ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "muted",
							children: t("rooms.launched")
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl font-bold",
						children: room.boss
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							t("rooms.cp"),
							" ",
							room.cp.toLocaleString(),
							" · ",
							room.type,
							" · ",
							t("rooms.timeLeft"),
							" ",
							room.minutes,
							" ",
							t("rooms.minutes")
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: t("rooms.host") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-foreground",
						children: room.hostName
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-surface-2/50 px-3 py-2 text-[11px] leading-snug text-muted-foreground",
				children: t(`rooms.mode.${room.mode}.desc`)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 rounded-xl border border-primary/20 bg-primary/5 p-3 sm:grid-cols-[1fr_auto]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-bold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-3.5 w-3.5" }), t("formation.title")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						className: "mt-2",
						value: room.formationId,
						onChange: (event) => setFormation(room.id, event.target.value),
						children: FORMATIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: item.id,
							children: [
								item.name,
								" · ",
								item.dps,
								" DPS"
							]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] text-muted-foreground",
						children: formation.description
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 text-center sm:min-w-44",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-background/50 px-2 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-bold text-primary",
							children: totalDps
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground",
							children: t("formation.dps")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-background/50 px-2 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-lg font-bold text-accent",
							children: [estimatedMinutes, "m"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground",
							children: t("formation.estimate")
						})]
					})]
				})]
			}),
			room.mode === "local" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => copy(room.password, t("copied")),
				className: "tap-scale flex w-full items-center justify-between rounded-xl border border-accent/40 bg-accent/10 px-3 py-2.5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold uppercase tracking-wider text-accent",
					children: t("rooms.password")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-bold text-accent",
					children: room.password
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => copy(room.hostCode, t("copied")),
				className: "tap-scale flex w-full items-center justify-between rounded-xl border border-primary/40 bg-primary/10 px-3 py-2.5 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold uppercase tracking-wider text-primary",
					children: t("rooms.copyHostCode")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-bold text-primary",
					children: room.hostCode
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: t("rooms.queue")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: t("rooms.slots", {
							a: room.queue.length,
							b: room.capacity
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 w-full overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sheen-bar h-full rounded-full bg-primary transition-all duration-500",
						style: { width: `${Math.min(100, room.queue.length / room.capacity * 100)}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: room.queue.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 rounded-xl bg-surface-2/40 px-3 py-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-5 font-display text-muted-foreground",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: m.isSelf ? `${m.name} (${t("rooms.you")})` : m.name
							}),
							m.vip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "vip",
								children: t("rooms.vip")
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("ml-auto text-[10px] font-semibold", m.ready ? "text-primary" : "text-muted-foreground"),
								children: m.ready ? "● " + t("rooms.ready") : "○"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => copy(m.code, t("copied")),
								className: "tap-scale rounded-lg bg-background/60 px-2 py-1 text-[10px]",
								children: m.code
							}),
							m.isSelf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleReady(room.id, m.id),
								className: "tap-scale rounded-lg bg-primary/20 px-2 py-1 text-[10px] font-semibold text-primary",
								children: m.ready ? t("rooms.unready") : t("rooms.ready")
							}) : null,
							canManage && !m.isSelf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => kick(room.id, m.id),
								className: "tap-scale rounded-lg bg-destructive/20 px-2 py-1 text-[10px] font-semibold text-destructive",
								children: t("rooms.kick")
							}) : null
						]
					}, m.id))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					inQueue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						onClick: () => leaveRoom(room.id),
						children: t("rooms.leave")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: profile.vip ? "vip" : "primary",
						disabled: full || room.launched,
						onClick: () => joinRoom(room.id),
						children: full ? t("rooms.full") : profile.vip ? t("rooms.joinVip") : t("rooms.join")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => copy(room.queue.map((m) => `${m.name}: ${m.code}`).join("\n"), t("copied")),
						children: t("rooms.copyAllCodes")
					}),
					canManage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "accent",
							onClick: () => broadcastSiren(room.id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Siren, { className: "h-3.5 w-3.5" }),
								t("siren.title"),
								" · 30"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "accent",
							disabled: room.launched,
							onClick: () => launchRoom(room.id),
							children: t("rooms.launch")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "danger",
							onClick: () => removeRoom(room.id),
							children: isAdmin && !isHost ? t("rooms.adminClean") : t("rooms.disband")
						})
					] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-vip/25 bg-vip/5 p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-bold text-vip",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
								t("lottery.title"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: "vip",
									children: [
										room.lottery.pot,
										" ",
										t("wallet.coins")
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: cn("rounded-lg px-2 py-1 text-[10px] font-semibold", room.lottery.enabled ? "bg-vip/20 text-vip" : "bg-surface-2 text-muted-foreground"),
							onClick: () => toggleLottery(room.id),
							children: room.lottery.enabled ? t("lottery.enabled") : t("lottery.enable")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center justify-between gap-2 text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("lottery.hint") }), room.lottery.enabled && !room.lottery.entries.includes(profile.trainerName) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "vip",
							onClick: () => joinLottery(room.id),
							children: t("lottery.join")
						}) : null]
					}),
					room.lottery.winner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 text-[11px] font-semibold text-vip",
						children: [
							t("lottery.winner"),
							"：",
							room.lottery.winner
						]
					}) : null,
					canManage && room.lottery.enabled && room.lottery.pot > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => settleRoom(room.id, "shiny"),
							children: t("lottery.shinySettle")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => settleRoom(room.id, "normal"),
							children: t("lottery.normalDrop")
						})]
					}) : null
				]
			})
		]
	});
}
//#endregion
export { RoomsPage as component };
