import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useI18n } from "./i18n-ZRsGI6Tp.mjs";
import { a as Field, d as cn, n as Button, o as Input, p as useStore, r as Card, s as SectionTitle, t as Badge, u as Textarea } from "./ui-kit-jIK0-xvY.mjs";
import { S as Heart, _ as MapPin, g as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "./Shell-CDMrEDNL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wall-DEfpd9Ns.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var post_shiny_default = "/assets/post-shiny-DGIxaE3C.jpg";
var post_shadow_default = "/assets/post-shadow-DJlH76kD.jpg";
var KINDS = [
	"shiny",
	"ditto",
	"shadow",
	"hundo"
];
var kindTone = {
	shiny: "primary",
	ditto: "accent",
	shadow: "muted",
	hundo: "vip"
};
function resolveImage(image) {
	if (!image) return void 0;
	if (image === "shiny") return post_shiny_default;
	if (image === "shadow") return post_shadow_default;
	return image;
}
function WallPage() {
	const { t } = useI18n();
	const { posts, addPost } = useStore();
	const [text, setText] = (0, import_react.useState)("");
	const [location, setLocation] = (0, import_react.useState)("");
	const [kind, setKind] = (0, import_react.useState)("shiny");
	const [image, setImage] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: t("wall.title"),
			subtitle: t("wall.subtitle")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: text,
					onChange: (e) => setText(e.target.value),
					placeholder: t("wall.compose")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: KINDS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setKind(k),
						className: cn("tap-scale rounded-xl border px-3 py-1.5 text-xs font-semibold", kind === k ? "border-primary/60 bg-primary/15 text-primary" : "border-border text-muted-foreground"),
						children: t(`wall.kind.${k}`)
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("wall.location"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: location,
							onChange: (e) => setLocation(e.target.value),
							placeholder: "KLCC"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t("wall.image"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: image,
							onChange: (e) => setImage(e.target.value),
							placeholder: "https://"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					disabled: !text.trim(),
					onClick: () => {
						addPost({
							kind,
							text: text.trim(),
							location: location.trim() || "—",
							...image.trim() ? { image: image.trim() } : {},
							iv: {
								a: 15,
								d: 15,
								s: 15
							}
						});
						setText("");
						setLocation("");
						setImage("");
					},
					children: t("wall.post")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PostCard, { post }, post.id))
		})
	] });
}
function PostCard({ post }) {
	const { t } = useI18n();
	const { toggleLike, addComment, removePost, isAdmin, profile } = useStore();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const src = resolveImage(post.image);
	const ivPct = Math.round((post.iv.a + post.iv.d + post.iv.s) / 45 * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary",
						children: post.author.slice(0, 2).toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: post.author
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: kindTone[post.kind],
								children: t(`wall.kind.${post.kind}`)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-[11px] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), post.location]
						})]
					}),
					isAdmin || post.author === profile.trainerName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => removePost(post.id),
						className: "ml-auto text-[11px] text-muted-foreground hover:text-destructive",
						children: t("wall.delete")
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed",
				children: post.text
			}),
			src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: post.text,
				loading: "lazy",
				width: 1024,
				height: 768,
				className: "w-full rounded-2xl border border-border object-cover"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 text-[11px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "primary",
						children: ["ATK ", post.iv.a]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "primary",
						children: ["DEF ", post.iv.d]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "primary",
						children: ["HP ", post.iv.s]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "vip",
						children: [ivPct, "% IV"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-t border-border/70 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: post.liked ? "accent" : "ghost",
					onClick: () => toggleLike(post.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("h-4 w-4", post.liked && "fill-current") }),
						" ",
						post.likes
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => setOpen((v) => !v),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }),
						" ",
						post.comments.length,
						" ",
						t("wall.comments")
					]
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 rise-in",
				children: [post.comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface-2/50 px-3 py-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-primary",
							children: c.author
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: c.text
						})
					]
				}, c.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft,
						onChange: (e) => setDraft(e.target.value),
						placeholder: t("wall.writeComment")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						disabled: !draft.trim(),
						onClick: () => {
							addComment(post.id, draft.trim());
							setDraft("");
						},
						children: t("wall.send")
					})]
				})]
			}) : null
		]
	});
}
//#endregion
export { WallPage as component };
