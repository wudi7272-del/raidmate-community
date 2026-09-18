import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/Shell";
import { Badge, Card, Field, Input, SectionTitle } from "@/components/ui-kit";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "IV / LV / CP 计算助手 | Raid Nexus" },
      {
        name: "description",
        content: "快速估算宝可梦个体值、等级与进化后战力，团战前一秒决策。",
      },
      { property: "og:title", content: "IV / LV / CP 计算助手" },
      { property: "og:description", content: "输入攻击、防御、体力与等级，立即得到 IV 评分与进化 CP。" },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const { t } = useI18n();
  const [a, setA] = useState(15);
  const [d, setD] = useState(14);
  const [s, setS] = useState(15);
  const [level, setLevel] = useState(30);
  const [cp, setCp] = useState(1800);
  const [evo, setEvo] = useState(1.9);

  const pct = Math.round(((a + d + s) / 45) * 100);
  const cpm = 0.094 + (level - 1) * 0.0155;
  const estCp = Math.max(10, Math.round(((100 + a) * Math.sqrt(100 + d) * Math.sqrt(100 + s) * cpm * cpm) / 10));
  const evoCp = Math.round(cp * evo);
  const grade =
    pct === 100 ? "perfect" : pct >= 89 ? "great" : pct >= 67 ? "ok" : "bad";

  const sliders: [string, number, (v: number) => void, number][] = [
    [t("tools.attack"), a, setA, 15],
    [t("tools.defense"), d, setD, 15],
    [t("tools.stamina"), s, setS, 15],
    [t("tools.level"), level, setLevel, 51],
  ];

  return (
    <PageShell>
      <SectionTitle title={t("tools.title")} subtitle={t("tools.subtitle")} />

      <Card className="space-y-4">
        {sliders.map(([label, value, set, max]) => (
          <div key={label} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-muted-foreground">{label}</span>
              <span className="font-display text-sm text-primary">{value}</span>
            </div>
            <input
              type="range"
              min={0}
              max={max}
              value={value}
              onChange={(e) => set(Number(e.target.value))}
              className="w-full accent-[var(--primary)]"
            />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-3">
          <Field label={t("tools.baseCp")}>
            <Input type="number" value={cp} onChange={(e) => setCp(Number(e.target.value))} />
          </Field>
          <Field label={t("tools.evoMultiplier")}>
            <Input
              type="number"
              step="0.1"
              value={evo}
              onChange={(e) => setEvo(Number(e.target.value))}
            />
          </Field>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        <Card className="glow-primary text-center">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {t("tools.ivPercent")}
          </div>
          <div className="font-display text-3xl font-bold neon-text">{pct}%</div>
        </Card>
        <Card className="text-center">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {t("tools.estCp")}
          </div>
          <div className="font-display text-3xl font-bold text-primary">{estCp}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {t("tools.evoCp")}
          </div>
          <div className="font-display text-3xl font-bold text-accent">{evoCp}</div>
        </Card>
        <Card className="text-center">
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
            {t("tools.grade")}
          </div>
          <Badge tone={grade === "bad" ? "muted" : "vip"} className="mt-2">
            {t(`tools.grade.${grade}`)}
          </Badge>
        </Card>
      </div>
    </PageShell>
  );
}
