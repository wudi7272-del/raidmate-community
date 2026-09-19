import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-kit-jIK0-xvY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FORMATIONS = [
	{
		id: "mega",
		name: "Mega 核心爆发",
		description: "高压速推，适合竞速榜冲刺",
		dps: 920
	},
	{
		id: "weather",
		name: "天气增幅队",
		description: "稳定输出，兼顾容错与续航",
		dps: 760
	},
	{
		id: "counter",
		name: "属性克制队",
		description: "针对 Boss 弱点，均衡高效",
		dps: 830
	}
];
var ADMIN_USERNAME = "admin";
var ADMIN_PASSWORD = "5500123488htk";
var WORDS = [
	"Pikachu",
	"Bulbasaur",
	"Charmander",
	"Squirtle",
	"Eevee",
	"Snorlax",
	"Gengar",
	"Lapras",
	"Dratini",
	"Mewtwo"
];
function generatePassword() {
	const pick = () => WORDS[Math.floor(Math.random() * WORDS.length)];
	const a = pick();
	let b = pick();
	let c = pick();
	while (b === a) b = pick();
	while (c === a || c === b) c = pick();
	return `${a}-${b}-${c}`;
}
function randCode() {
	const n = () => String(Math.floor(1e3 + Math.random() * 9e3));
	return `${n()} ${n()} ${n()}`;
}
var uid = () => Math.random().toString(36).slice(2, 10);
function readStored(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : fallback;
	} catch {
		return fallback;
	}
}
function seedFinanceOrders() {
	return [{
		id: "ORD-24091",
		kind: "deposit",
		username: "MistyGo",
		amount: 6,
		coins: 300,
		status: "pending",
		proof: "",
		accountInfo: "USDT TRC20 · TQnexus-demo",
		contact: "Telegram @mistygo",
		createdAt: Date.now() - 36e5
	}, {
		id: "WD-811",
		kind: "withdrawal",
		username: "ShinyHunterJP",
		amount: 150,
		coins: 150,
		status: "pending",
		proof: "",
		accountInfo: "Binance UID 884201",
		contact: "Discord shiny.jp",
		createdAt: Date.now() - 18e5
	}];
}
function seedRooms() {
	return [{
		id: uid(),
		boss: "Mewtwo",
		gym: "Shibuya Crossing Gym",
		cp: 54148,
		type: "Psychic",
		minutes: 38,
		mode: "remote",
		capacity: 10,
		hostName: "wudi0693",
		hostCode: randCode(),
		password: generatePassword(),
		launched: false,
		createdAt: Date.now() - 12e4,
		queue: [
			{
				id: uid(),
				name: "ShinyHunterJP",
				code: randCode(),
				vip: true,
				ready: true,
				dps: 840
			},
			{
				id: uid(),
				name: "KimRaidKing",
				code: randCode(),
				vip: false,
				ready: true,
				dps: 710
			},
			{
				id: uid(),
				name: "阿杰打团",
				code: randCode(),
				vip: false,
				ready: false,
				dps: 620
			}
		],
		formationId: "counter",
		lottery: {
			enabled: true,
			entries: ["ShinyHunterJP", "KimRaidKing"],
			pot: 10
		}
	}, {
		id: uid(),
		boss: "Rayquaza",
		gym: "KLCC Park Gym",
		cp: 51968,
		type: "Dragon",
		minutes: 21,
		mode: "local",
		capacity: 5,
		hostName: "NeonTrainer",
		hostCode: randCode(),
		password: generatePassword(),
		launched: false,
		createdAt: Date.now() - 3e5,
		queue: [{
			id: uid(),
			name: "MistyGo",
			code: randCode(),
			vip: false,
			ready: false,
			dps: 650
		}],
		formationId: "weather",
		lottery: {
			enabled: false,
			entries: [],
			pot: 0
		}
	}];
}
function seedPosts() {
	return [
		{
			id: uid(),
			author: "ShinyHunterJP",
			kind: "shiny",
			text: "街中で色違いゲット！5000回目の遭遇でようやく…",
			location: "Shibuya, Tokyo",
			image: "shiny",
			iv: {
				a: 15,
				d: 14,
				s: 15
			},
			likes: 128,
			liked: false,
			comments: [{
				id: uid(),
				author: "KimRaidKing",
				text: "축하합니다! 부럽네요 🔥"
			}, {
				id: uid(),
				author: "阿杰打团",
				text: "运气太好了吧！"
			}],
			createdAt: Date.now() - 6e5
		},
		{
			id: uid(),
			author: "NeonTrainer",
			kind: "shadow",
			text: "Shadow catch of the night — 96% and ready for the raid meta.",
			location: "KLCC Park",
			image: "shadow",
			iv: {
				a: 15,
				d: 14,
				s: 14
			},
			likes: 74,
			liked: false,
			comments: [{
				id: uid(),
				author: "MistyGo",
				text: "Nice one!"
			}],
			createdAt: Date.now() - 18e5
		},
		{
			id: uid(),
			author: "wudi0693",
			kind: "hundo",
			text: "百分百个体值，直接满级培养！",
			location: "Bukit Bintang",
			iv: {
				a: 15,
				d: 15,
				s: 15
			},
			likes: 210,
			liked: false,
			comments: [],
			createdAt: Date.now() - 54e5
		}
	];
}
var StoreContext = (0, import_react.createContext)(null);
var defaultProfile = {
	trainerName: "wudi0693",
	gameCode: "WUDI0693",
	friendCode: "8231 4477 9015",
	level: 43,
	vip: true,
	coins: 240,
	badges: []
};
function StoreProvider({ children }) {
	const [profile, setProfileState] = (0, import_react.useState)(defaultProfile);
	const [authUser, setAuthUser] = (0, import_react.useState)(null);
	const [accounts, setAccounts] = (0, import_react.useState)(() => readStored("raid-nexus-accounts", []));
	const [frozenAccounts, setFrozenAccounts] = (0, import_react.useState)(() => readStored("raid-nexus-frozen", []));
	const [financeOrders, setFinanceOrders] = (0, import_react.useState)(() => readStored("raid-nexus-finance", seedFinanceOrders()));
	const [rooms, setRooms] = (0, import_react.useState)(() => readStored("raid-nexus-rooms", seedRooms()));
	const [posts, setPosts] = (0, import_react.useState)(() => seedPosts());
	const [toast, setToast] = (0, import_react.useState)(null);
	const [sirens, setSirens] = (0, import_react.useState)([]);
	const [leaderboard] = (0, import_react.useState)([
		{
			id: "1",
			team: "Tokyo Night Shift",
			boss: "Rayquaza",
			seconds: 74,
			reward: 300,
			badge: "极速战神"
		},
		{
			id: "2",
			team: "KLCC Counterforce",
			boss: "Mewtwo",
			seconds: 89,
			reward: 200,
			badge: "极速战神"
		},
		{
			id: "3",
			team: "Seoul Spark",
			boss: "Kyogre",
			seconds: 103,
			reward: 100,
			badge: "极速战神"
		}
	]);
	const [bounties, setBounties] = (0, import_react.useState)([{
		id: uid(),
		author: "MistyGo",
		request: "求带过暗影 Boss，第一次挑战求稳",
		reward: 100,
		boss: "Shadow Mewtwo",
		status: "open"
	}, {
		id: uid(),
		author: "新手小火龙",
		request: "今晚 20:30 求带过 Mega 雷公",
		reward: 80,
		boss: "Mega Raikou",
		status: "open"
	}]);
	(0, import_react.useEffect)(() => {
		const raw = localStorage.getItem("raid-nexus-profile");
		if (raw) try {
			setProfileState({
				...defaultProfile,
				...JSON.parse(raw)
			});
		} catch {}
		const savedUser = localStorage.getItem("raid-nexus-auth");
		if (savedUser) try {
			setAuthUser(JSON.parse(savedUser));
		} catch {
			localStorage.removeItem("raid-nexus-auth");
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (authUser?.role !== "player") return;
		localStorage.setItem("raid-nexus-profile", JSON.stringify(profile));
		setAccounts((current) => {
			const next = current.map((account) => account.username === authUser.username ? {
				...account,
				profile
			} : account);
			localStorage.setItem("raid-nexus-accounts", JSON.stringify(next));
			return next;
		});
	}, [profile, authUser]);
	(0, import_react.useEffect)(() => localStorage.setItem("raid-nexus-rooms", JSON.stringify(rooms)), [rooms]);
	(0, import_react.useEffect)(() => localStorage.setItem("raid-nexus-finance", JSON.stringify(financeOrders)), [financeOrders]);
	(0, import_react.useEffect)(() => localStorage.setItem("raid-nexus-frozen", JSON.stringify(frozenAccounts)), [frozenAccounts]);
	const setProfile = (p) => {
		setProfileState(p);
		localStorage.setItem("raid-nexus-profile", JSON.stringify(p));
	};
	const isAuthenticated = authUser !== null;
	const isAdmin = authUser?.role === "admin";
	const register = (username, password, trainerCode) => {
		const normalized = username.trim();
		const accounts = JSON.parse(localStorage.getItem("raid-nexus-accounts") ?? "[]");
		if (!normalized || normalized.toLowerCase() === ADMIN_USERNAME || password.length < 6 || !/^\d{12}$/.test(trainerCode) || accounts.some((account) => account.username.toLowerCase() === normalized.toLowerCase())) {
			showToast("注册信息无效：用户名需唯一，密码至少 6 位，训练家代码需为 12 位数字");
			return false;
		}
		const nextProfile = {
			...defaultProfile,
			trainerName: normalized,
			gameCode: normalized.toUpperCase(),
			friendCode: trainerCode,
			vip: false,
			coins: 100,
			badges: []
		};
		localStorage.setItem("raid-nexus-accounts", JSON.stringify([...accounts, {
			username: normalized,
			password,
			profile: nextProfile
		}]));
		localStorage.setItem("raid-nexus-profile", JSON.stringify(nextProfile));
		const nextUser = {
			username: normalized,
			role: "player",
			trainerCode
		};
		localStorage.setItem("raid-nexus-auth", JSON.stringify(nextUser));
		setProfileState(nextProfile);
		setAuthUser(nextUser);
		showToast("注册成功，已自动登录");
		return true;
	};
	const login = (username, password) => {
		const normalized = username.trim();
		if (normalized.toLowerCase() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
			const adminUser = {
				username: ADMIN_USERNAME,
				role: "admin",
				trainerCode: ""
			};
			localStorage.setItem("raid-nexus-auth", JSON.stringify(adminUser));
			setAuthUser(adminUser);
			showToast("管理员登录成功");
			return true;
		}
		const account = JSON.parse(localStorage.getItem("raid-nexus-accounts") ?? "[]").find((item) => item.username.toLowerCase() === normalized.toLowerCase() && item.password === password);
		if (!account || frozenAccounts.includes(account.username)) {
			showToast("账号或密码错误");
			return false;
		}
		const nextUser = {
			username: account.username,
			role: "player",
			trainerCode: account.profile.friendCode
		};
		localStorage.setItem("raid-nexus-auth", JSON.stringify(nextUser));
		localStorage.setItem("raid-nexus-profile", JSON.stringify(account.profile));
		setProfileState(account.profile);
		setAuthUser(nextUser);
		showToast("登录成功");
		return true;
	};
	const logout = () => {
		localStorage.removeItem("raid-nexus-auth");
		setAuthUser(null);
		setProfileState(defaultProfile);
	};
	const showToast = (msg) => {
		setToast(msg);
		window.setTimeout(() => setToast(null), 1800);
	};
	const copy = (text, msg) => {
		navigator.clipboard?.writeText(text);
		showToast(msg);
	};
	(0, import_react.useEffect)(() => {
		const receive = (event) => {
			if (event.key === "raid-nexus-accounts" && event.newValue) try {
				setAccounts(JSON.parse(event.newValue));
			} catch {}
			if (event.key === "raid-nexus-frozen" && event.newValue) try {
				setFrozenAccounts(JSON.parse(event.newValue));
			} catch {}
			if (event.key === "raid-nexus-finance" && event.newValue) try {
				setFinanceOrders(JSON.parse(event.newValue));
			} catch {}
			if (event.key === "raid-nexus-rooms" && event.newValue) try {
				setRooms(JSON.parse(event.newValue));
			} catch {}
			if (event.key !== "raid-nexus-siren" || !event.newValue) return;
			try {
				setSirens((prev) => [JSON.parse(event.newValue), ...prev].slice(0, 3));
			} catch {}
		};
		window.addEventListener("storage", receive);
		return () => window.removeEventListener("storage", receive);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		profile,
		setProfile,
		authUser,
		isAuthenticated,
		isAdmin,
		register,
		login,
		logout,
		rooms,
		posts,
		toast,
		showToast,
		copy,
		sirens,
		leaderboard,
		bounties,
		broadcastSiren: (roomId) => {
			if (profile.coins < 30) {
				showToast("金币不足，需要 30 金币");
				return;
			}
			const siren = {
				id: uid(),
				host: profile.trainerName,
				message: "紧急发车！现在加入，马上满车开打！",
				roomId,
				createdAt: Date.now(),
				expiresAt: Date.now() + 45e3
			};
			setProfileState((current) => ({
				...current,
				coins: current.coins - 30
			}));
			setSirens((prev) => [siren, ...prev].slice(0, 3));
			localStorage.setItem("raid-nexus-siren", JSON.stringify(siren));
			showToast("全服警报已发出，消耗 30 金币");
		},
		createBounty: (request, boss, reward) => {
			const amount = Math.max(5, Math.floor(reward));
			if (profile.coins < amount) {
				showToast("金币不足，无法托管悬赏");
				return;
			}
			setProfileState((current) => ({
				...current,
				coins: current.coins - amount
			}));
			setBounties((prev) => [{
				id: uid(),
				author: profile.trainerName,
				request,
				reward: amount,
				boss,
				status: "open"
			}, ...prev]);
			showToast("悬赏已发布，金币已托管");
		},
		acceptBounty: (bountyId) => setBounties((prev) => prev.map((bounty) => bounty.id === bountyId && bounty.status === "open" ? {
			...bounty,
			status: "accepted",
			acceptedBy: profile.trainerName
		} : bounty)),
		settleBounty: (bountyId) => {
			const bounty = bounties.find((item) => item.id === bountyId);
			if (!bounty || bounty.status !== "accepted" || bounty.acceptedBy !== profile.trainerName) return;
			setBounties((prev) => prev.map((item) => item.id === bountyId ? {
				...item,
				status: "completed"
			} : item));
			setProfileState((current) => ({
				...current,
				coins: current.coins + bounty.reward
			}));
			showToast(`带队完成，获得 ${bounty.reward} 金币`);
		},
		setFormation: (roomId, formationId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			formationId
		} : room)),
		toggleLottery: (roomId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			lottery: {
				...room.lottery,
				enabled: !room.lottery.enabled
			}
		} : room)),
		joinLottery: (roomId) => {
			if (profile.coins < 5) {
				showToast("金币不足，需要 5 金币入池");
				return;
			}
			setRooms((prev) => prev.map((room) => {
				if (room.id !== roomId || !room.lottery.enabled || room.lottery.entries.includes(profile.trainerName)) return room;
				return {
					...room,
					lottery: {
						...room.lottery,
						entries: [...room.lottery.entries, profile.trainerName],
						pot: room.lottery.pot + 5
					}
				};
			}));
			setProfileState((current) => ({
				...current,
				coins: current.coins - 5
			}));
		},
		settleRoom: (roomId, catchType) => {
			const room = rooms.find((item) => item.id === roomId);
			if (!room || !room.lottery.enabled || room.lottery.entries.length === 0) return;
			if (catchType === "normal") {
				showToast("本局没有 Shiny 或 100% IV，彩池保留");
				return;
			}
			const winner = catchType === "shiny" ? profile.trainerName : room.lottery.entries[0];
			if (!winner) return;
			const prize = Math.floor(room.lottery.pot * .8);
			setRooms((prev) => prev.map((item) => item.id === roomId ? {
				...item,
				lottery: {
					...item.lottery,
					winner,
					pot: 0
				}
			} : item));
			if (winner === profile.trainerName) setProfileState((current) => ({
				...current,
				coins: current.coins + prize
			}));
			showToast(`${winner} 赢得彩池大奖 ${prize} 金币（平台抽成 20%）`);
		},
		addCoins: (amount, reason) => {
			setProfileState((current) => {
				const next = {
					...current,
					coins: current.coins + amount
				};
				localStorage.setItem("raid-nexus-profile", JSON.stringify(next));
				return next;
			});
			showToast(`${reason} +${amount} 金币`);
		},
		buyVip: () => {
			if (profile.vip) {
				showToast("VIP 已开启");
				return;
			}
			if (profile.coins < 199) {
				showToast("金币不足，需要 199 金币");
				return;
			}
			setProfileState((current) => {
				const next = {
					...current,
					coins: current.coins - 199,
					vip: true
				};
				localStorage.setItem("raid-nexus-profile", JSON.stringify(next));
				return next;
			});
			showToast("VIP 插队特权已开启");
		},
		createRoom: (r) => setRooms((prev) => [{
			...r,
			id: uid(),
			gym: r.gym ?? "Raid Nexus Gym",
			queue: [],
			launched: false,
			createdAt: Date.now(),
			formationId: r.formationId ?? "counter",
			lottery: r.lottery ?? {
				enabled: false,
				entries: [],
				pot: 0
			}
		}, ...prev]),
		joinRoom: (roomId) => setRooms((prev) => prev.map((room) => {
			if (room.id !== roomId) return room;
			if (room.queue.some((m) => m.isSelf)) return room;
			const me = {
				id: uid(),
				name: profile.trainerName,
				code: profile.friendCode,
				vip: profile.vip,
				ready: false,
				dps: 680,
				isSelf: true
			};
			if (!profile.vip) return {
				...room,
				queue: [...room.queue, me]
			};
			const lastVip = room.queue.reduce((acc, m, i) => m.vip ? i + 1 : acc, 0);
			const next = [...room.queue];
			next.splice(lastVip, 0, me);
			return {
				...room,
				queue: next
			};
		})),
		leaveRoom: (roomId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			queue: room.queue.filter((m) => !m.isSelf)
		} : room)),
		toggleReady: (roomId, memberId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			queue: room.queue.map((m) => m.id === memberId ? {
				...m,
				ready: !m.ready
			} : m)
		} : room)),
		kick: (roomId, memberId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			queue: room.queue.filter((m) => m.id !== memberId)
		} : room)),
		launchRoom: (roomId) => setRooms((prev) => prev.map((room) => room.id === roomId ? {
			...room,
			launched: true
		} : room)),
		removeRoom: (roomId) => setRooms((prev) => prev.filter((r) => r.id !== roomId)),
		addPost: (p) => setPosts((prev) => [{
			...p,
			id: uid(),
			author: profile.trainerName,
			likes: 0,
			liked: false,
			comments: [],
			createdAt: Date.now()
		}, ...prev]),
		toggleLike: (postId) => setPosts((prev) => prev.map((p) => p.id === postId ? {
			...p,
			liked: !p.liked,
			likes: p.likes + (p.liked ? -1 : 1)
		} : p)),
		addComment: (postId, text) => setPosts((prev) => prev.map((p) => p.id === postId ? {
			...p,
			comments: [...p.comments, {
				id: uid(),
				author: profile.trainerName,
				text
			}]
		} : p)),
		removePost: (postId) => setPosts((prev) => prev.filter((p) => p.id !== postId))
	}), [
		profile,
		authUser,
		isAuthenticated,
		rooms,
		posts,
		toast,
		isAdmin,
		sirens,
		leaderboard,
		bounties,
		copy
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside StoreProvider");
	return ctx;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var variants = {
	primary: "bg-primary text-primary-foreground hover:brightness-110 glow-primary",
	accent: "bg-accent text-accent-foreground hover:brightness-110 glow-accent",
	ghost: "bg-surface-2/60 text-foreground hover:bg-surface-2",
	outline: "border border-border bg-transparent text-foreground hover:bg-surface-2/70",
	danger: "bg-destructive/90 text-destructive-foreground hover:bg-destructive",
	vip: "bg-vip text-primary-foreground hover:brightness-110"
};
function Button({ variant = "primary", size = "md", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("tap-scale inline-flex items-center justify-center gap-1.5 rounded-xl font-semibold disabled:cursor-not-allowed disabled:opacity-45", size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-sm", variants[variant], className),
		...props
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("glass-card rise-in p-4", className),
		children
	});
}
function Badge({ children, tone = "default", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide", {
			default: "bg-surface-2 text-foreground",
			primary: "bg-primary/15 text-primary",
			accent: "bg-accent/18 text-accent",
			vip: "bg-vip/20 text-vip",
			muted: "bg-muted text-muted-foreground"
		}[tone], className),
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), children]
	});
}
var fieldBase = "w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/35";
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn(fieldBase, className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn(fieldBase, "min-h-24 resize-none", className),
		...props
	});
}
function Select({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: cn(fieldBase, "appearance-none", className),
		...props
	});
}
function SectionTitle({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-bold tracking-tight neon-text",
			children: title
		}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: subtitle
		}) : null]
	});
}
//#endregion
export { Field as a, Select as c, cn as d, generatePassword as f, FORMATIONS as i, StoreProvider as l, Button as n, Input as o, useStore as p, Card as r, SectionTitle as s, Badge as t, Textarea as u };
