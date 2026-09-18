import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/Shell";
import { Badge, Button, Card, Field, Input, SectionTitle } from "@/components/ui-kit";
import { useI18n } from "@/lib/i18n";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "训练家资料卡 | Raid Nexus" },
      {
        name: "description",
        content: "设置训练家名称、游戏代号、好友代码与等级，一键复制好友码并开启 VIP 特权。",
      },
      { property: "og:title", content: "训练家资料卡" },
      { property: "og:description", content: "管理你的训练家身份、好友代码与 VIP 优先排队权限。" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { t } = useI18n();
  const { profile, setProfile, isAdmin, copy, showToast } = useStore();
  const [draft, setDraft] = useState(profile);

  return (
    <PageShell>
      <SectionTitle title={t("profile.title")} />

      <Card className="space-y-3 glow-primary">
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/20 font-display text-lg font-bold text-primary">
            {draft.trainerName.slice(0, 2).toUpperCase()}
          </span>
          <div>
            <div className="font-display text-lg font-bold">{draft.trainerName}</div>
            <div className="mt-1 flex gap-2">
              <Badge tone="primary">LV {draft.level}</Badge>
              {draft.vip ? <Badge tone="vip">VIP</Badge> : null}
              {isAdmin ? <Badge tone="accent">{t("profile.admin")}</Badge> : null}
            </div>
          </div>
        </div>

        <Field label={t("profile.trainerName")}>
          <Input
            value={draft.trainerName}
            onChange={(e) => setDraft({ ...draft, trainerName: e.target.value })}
          />
        </Field>
        <Field label={t("profile.gameCode")}>
          <Input
            value={draft.gameCode}
            onChange={(e) => setDraft({ ...draft, gameCode: e.target.value })}
          />
        </Field>
        <Field label={t("profile.friendCode")}>
          <div className="flex gap-2">
            <Input
              value={draft.friendCode}
              onChange={(e) => setDraft({ ...draft, friendCode: e.target.value })}
            />
            <Button variant="outline" onClick={() => copy(draft.friendCode, t("copied"))}>
              📋
            </Button>
          </div>
        </Field>
        <Field label={t("profile.level")}>
          <Input
            type="number"
            value={draft.level}
            onChange={(e) => setDraft({ ...draft, level: Number(e.target.value) })}
          />
        </Field>

        <Button
          className="w-full"
          onClick={() => {
            setProfile(draft);
            showToast(t("profile.saved"));
          }}
        >
          {t("profile.save")}
        </Button>
      </Card>

      <Card className="space-y-3">
        <p className="text-xs text-muted-foreground">{t("profile.perks")}</p>
        <Button
          variant={draft.vip ? "vip" : "outline"}
          className="w-full"
          onClick={() => {
            const next = { ...draft, vip: !draft.vip };
            setDraft(next);
            setProfile(next);
          }}
        >
          {draft.vip ? "👑 " + t("profile.vipOn") : t("profile.vipOff")}
        </Button>
        <p className="text-[11px] text-muted-foreground">{t("profile.adminNote")}</p>
      </Card>
    </PageShell>
  );
}
