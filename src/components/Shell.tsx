import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LANGS, useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { Badge, Button } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [open]);

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("nav.language")}
        className="tap-scale flex items-center gap-1.5 rounded-xl border border-border bg-surface-2/60 px-3 py-2 text-xs font-semibold"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <span className={cn("text-[9px] transition-transform", open && "rotate-180")}>▼</span>
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-popover/95 shadow-xl backdrop-blur-xl rise-in">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface-2",
                l.code === lang && "bg-primary/12 text-primary",
              )}
            >
              <span className="text-base">{l.flag}</span>
              {l.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const NAV = [
  { to: "/", key: "nav.rooms", icon: "⚔️" },
  { to: "/wall", key: "nav.wall", icon: "✨" },
  { to: "/tools", key: "nav.tools", icon: "🧮" },
  { to: "/profile", key: "nav.profile", icon: "🪪" },
] as const;

export function TopNav() {
  const { t } = useI18n();
  const { profile, isAdmin } = useStore();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/18 text-lg glow-primary">
            ⚡
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-[0.18em] neon-text">
              {t("appName")}
            </span>
            <span className="block text-[10px] text-muted-foreground">{t("tagline")}</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          {isAdmin ? <Badge tone="accent" className="hidden sm:inline-flex">{t("profile.admin")}</Badge> : null}
          {profile.vip ? <Badge tone="vip">VIP</Badge> : null}
          <LanguageSwitcher />
        </div>
      </div>
      <nav className="mx-auto max-w-5xl overflow-x-auto px-4 pb-2">
        <div className="flex gap-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="tap-scale shrink-0 rounded-xl border border-border bg-surface/60 px-3.5 py-2 text-xs font-semibold text-muted-foreground"
              activeProps={{
                className:
                  "tap-scale shrink-0 rounded-xl border border-primary/50 bg-primary/15 px-3.5 py-2 text-xs font-semibold text-primary glow-primary",
              }}
            >
              <span className="mr-1">{item.icon}</span>
              {t(item.key)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function BottomBar() {
  const { t } = useI18n();
  const { profile, copy } = useStore();
  const [floating, setFloating] = useState(false);

  return (
    <>
      {floating ? (
        <div className="fixed bottom-28 right-4 z-50 w-60 glass-card rise-in p-3 glow-accent">
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-bold tracking-wide text-accent">
              {t("float.title")}
            </span>
            <button
              onClick={() => setFloating(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {t("float.close")}
            </button>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{t("float.hint")}</p>
          <div className="mt-3 space-y-2">
            <Button
              size="sm"
              className="w-full"
              onClick={() => copy(profile.friendCode, t("copied"))}
            >
              {t("bar.copyCode")} · {profile.friendCode}
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={() => window.open("https://pokemongolive.com/", "_blank")}
            >
              {t("bar.launchGame")}
            </Button>
          </div>
        </div>
      ) : null}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center gap-2 pb-3">
          <Button className="flex-1" onClick={() => window.open("https://pokemongolive.com/", "_blank")}>
            🎮 {t("bar.launchGame")}
          </Button>
          <Button
            variant={floating ? "accent" : "ghost"}
            className="flex-1"
            onClick={() => setFloating((v) => !v)}
          >
            🫧 {t("bar.floating")}
          </Button>
          <Button variant="outline" onClick={() => copy(profile.friendCode, t("copied"))} aria-label={t("bar.copyCode")}>
            📋
          </Button>
        </div>
      </div>
    </>
  );
}

export function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  return (
    <div className="pointer-events-none fixed left-1/2 top-24 z-[60] -translate-x-1/2 rounded-full border border-primary/40 bg-popover/95 px-4 py-2 text-xs font-semibold text-primary shadow-xl backdrop-blur-xl rise-in">
      {toast}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-5xl space-y-5 px-4 pb-36 pt-5">{children}</main>
      <BottomBar />
      <Toast />
    </div>
  );
}
