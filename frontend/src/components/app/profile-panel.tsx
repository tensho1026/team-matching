import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  GitBranch,
  LogOut,
  Pencil,
  Plus,
  Save,
} from "lucide-react";

import { useAuth } from "@/contexts/auth-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/app/form-field";
import { SectionHeading } from "@/components/app/section-heading";

const techStackOptions = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue",
  "Nuxt",
  "Svelte",
  "Angular",
  "Node.js",
  "NestJS",
  "Express",
  "Ruby on Rails",
  "Laravel",
  "Django",
  "FastAPI",
  "Go",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "AWS",
  "GCP",
  "Firebase",
  "Supabase",
  "Tailwind CSS",
  "shadcn/ui",
  "Figma",
  "GitHub Actions",
  "GraphQL",
  "REST API",
];

const developmentStyleOptions = [
  "ガチ開発",
  "ゆるく個人開発",
  "ハッカソン",
  "ポートフォリオ作成",
  "就活用実績作り",
  "週末開発",
  "平日夜中心",
  "朝活",
  "ペアプロ",
  "モブプロ",
  "レビュー重視",
  "仕様相談しながら",
  "短期集中",
  "長期運用",
];

const focusAreaOptions = [
  "フロントエンド",
  "バックエンド",
  "インフラ",
  "デザイン",
  "PM",
  "UI/UX",
  "QA",
  "テスト",
  "DevOps",
  "DB設計",
  "API設計",
  "認証",
  "状態管理",
  "パフォーマンス改善",
  "アクセシビリティ",
  "ドキュメント",
  "スクラム運営",
];

const profileIconOptions = [
  { icon: "🚀", label: "ロケット" },
  { icon: "⚡", label: "稲妻" },
  { icon: "🧠", label: "ひらめき" },
  { icon: "🛸", label: "UFO" },
  { icon: "🧪", label: "実験" },
  { icon: "🎮", label: "ゲーム" },
  { icon: "🕹️", label: "アーケード" },
  { icon: "🧩", label: "パズル" },
  { icon: "🔥", label: "炎" },
  { icon: "💾", label: "フロッピー" },
  { icon: "🛰️", label: "衛星" },
  { icon: "🍜", label: "ラーメン" },
];

type ProfileDraft = {
  icon: string;
  name: string;
  email: string;
  bio: string;
  githubUser: string;
  experience: string;
  primaryArea: string;
  techStacks: string[];
  developmentStyles: string[];
  focusAreas: string[];
};

type MultiSelectFieldProps = {
  label: string;
  options: string[];
  selected: string[];
  variant?: "secondary" | "outline" | "info";
  customValue: string;
  onCustomValueChange: (value: string) => void;
  onToggle: (value: string) => void;
  onAddCustom: () => void;
};

function ProfileValue({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="min-h-10 rounded-md border border-border bg-muted px-3 py-2 text-sm leading-6 text-foreground">
        {children}
      </div>
    </div>
  );
}

function MultiSelectField({
  label,
  options,
  selected,
  variant = "secondary",
  customValue,
  onCustomValueChange,
  onToggle,
  onAddCustom,
}: MultiSelectFieldProps) {
  const allOptions = [
    ...options,
    ...selected.filter((item) => !options.includes(item)),
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {allOptions.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <Button
              key={option}
              type="button"
              size="sm"
              variant={isSelected ? "default" : "outline"}
              onClick={() => onToggle(option)}
            >
              {option}
            </Button>
          );
        })}
      </div>
      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
        <Input
          value={customValue}
          onChange={(event) => onCustomValueChange(event.target.value)}
          placeholder="選択肢にない項目を追加"
        />
        <Button type="button" variant="outline" onClick={onAddCustom}>
          <Plus />
          追加
        </Button>
      </div>
      {selected.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {selected.map((item) => (
            <Badge key={item} variant={variant}>
              {item}
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function toggleSelected(items: string[], value: string) {
  if (items.includes(value)) {
    return items.filter((item) => item !== value);
  }

  return [...items, value];
}

function addCustomItem(items: string[], value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue || items.includes(trimmedValue)) {
    return items;
  }

  return [...items, trimmedValue];
}

export function ProfilePanel() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [customTechStack, setCustomTechStack] = useState("");
  const [customDevelopmentStyle, setCustomDevelopmentStyle] = useState("");
  const [customFocusArea, setCustomFocusArea] = useState("");
  const [profile, setProfile] = useState<ProfileDraft>({
    icon: "🚀",
    name: user?.name ?? "ユーザー",
    email: user?.email ?? "",
    bio: "React と NestJS を中心に、チームで使いやすいUIとAPI設計を作るのが好きです。",
    githubUser: "yuki",
    experience: "2-3",
    primaryArea: "frontend",
    techStacks: ["React", "TypeScript", "NestJS"],
    developmentStyles: ["レビュー重視", "平日夜中心"],
    focusAreas: ["フロントエンド", "API設計", "状態管理"],
  });
  const [draft, setDraft] = useState(profile);

  const githubUrl = `https://github.com/${profile.githubUser}`;
  const displayIcon = isEditing ? draft.icon : profile.icon;

  async function handleLogout() {
    setIsLoggingOut(true);
    await logout();
    navigate("/login", { replace: true });
  }

  function handleStartEdit() {
    setDraft(profile);
    setIsEditing(true);
  }

  function handleSave() {
    setProfile(draft);
    setIsEditing(false);
  }

  return (
    <section id="profile" className="space-y-4">
      <SectionHeading
        title="プロフィール"
        description="ログイン中のアカウント情報とプロフィール設定"
      />
      <Card>
        <CardHeader className="flex flex-col items-start justify-between gap-3 !space-y-0 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-2xl text-secondary-foreground">
              {displayIcon}
            </div>
            <div className="min-w-0">
              <CardTitle>{profile.name}</CardTitle>
              <p className="break-all text-sm text-muted-foreground">
                {profile.email}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:justify-end">
            <Badge variant="success">参加可能</Badge>
            {isEditing ? (
              <Button className="w-full sm:w-auto" onClick={handleSave}>
                <Save />
                保存
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={handleStartEdit}
              >
                <Pencil />
                編集
              </Button>
            )}
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={handleLogout}
              disabled={isLoggingOut}
            >
              <LogOut />
              {isLoggingOut ? "ログアウト中" : "ログアウト"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-5">
          {isEditing ? (
            <>
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">
                  プロフィールアイコン
                </p>
                <div className="flex flex-wrap gap-2">
                  {profileIconOptions.map((item) => (
                    <Button
                      key={item.label}
                      type="button"
                      size="icon"
                      variant={draft.icon === item.icon ? "default" : "outline"}
                      className="text-xl"
                      aria-label={item.label}
                      onClick={() => setDraft({ ...draft, icon: item.icon })}
                    >
                      {item.icon}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="名前">
                  <Input
                    id="profile-name"
                    name="name"
                    value={draft.name}
                    onChange={(event) =>
                      setDraft({ ...draft, name: event.target.value })
                    }
                  />
                </FormField>
              </div>
              <FormField label="自己紹介">
                <Textarea
                  id="profile-bio"
                  name="bio"
                  value={draft.bio}
                  onChange={(event) =>
                    setDraft({ ...draft, bio: event.target.value })
                  }
                />
              </FormField>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="GitHub URL">
                  <div className="grid overflow-hidden rounded-md border border-input bg-card sm:grid-cols-[auto_minmax(0,1fr)]">
                    <div className="flex h-10 items-center border-b border-border px-3 text-sm text-muted-foreground sm:border-b-0 sm:border-r">
                      github.com/
                    </div>
                    <Input
                      id="profile-github-user"
                      name="githubUser"
                      className="border-0 shadow-none focus-visible:ring-0"
                      value={draft.githubUser}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          githubUser: event.target.value
                            .replace("https://github.com/", "")
                            .replace("github.com/", "")
                            .replace("/", ""),
                        })
                      }
                      placeholder="your-name"
                    />
                  </div>
                </FormField>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="経験年数">
                  <Select
                    id="profile-experience"
                    name="experience"
                    value={draft.experience}
                    onChange={(event) =>
                      setDraft({ ...draft, experience: event.target.value })
                    }
                  >
                    <option value="0-1">1年未満</option>
                    <option value="1-2">1-2年</option>
                    <option value="2-3">2-3年</option>
                    <option value="3+">3年以上</option>
                  </Select>
                </FormField>
                <FormField label="得意領域">
                  <Select
                    id="profile-primary-area"
                    name="primaryArea"
                    value={draft.primaryArea}
                    onChange={(event) =>
                      setDraft({ ...draft, primaryArea: event.target.value })
                    }
                  >
                    <option value="frontend">フロントエンド</option>
                    <option value="backend">バックエンド</option>
                    <option value="infra">インフラ</option>
                    <option value="design">デザイン</option>
                    <option value="pm">PM</option>
                    <option value="uiux">UI/UX</option>
                  </Select>
                </FormField>
              </div>
              <MultiSelectField
                label="技術スタック"
                options={techStackOptions}
                selected={draft.techStacks}
                customValue={customTechStack}
                onCustomValueChange={setCustomTechStack}
                onToggle={(value) =>
                  setDraft({
                    ...draft,
                    techStacks: toggleSelected(draft.techStacks, value),
                  })
                }
                onAddCustom={() => {
                  setDraft({
                    ...draft,
                    techStacks: addCustomItem(
                      draft.techStacks,
                      customTechStack,
                    ),
                  });
                  setCustomTechStack("");
                }}
              />
              <MultiSelectField
                label="希望する開発スタイル"
                options={developmentStyleOptions}
                selected={draft.developmentStyles}
                variant="outline"
                customValue={customDevelopmentStyle}
                onCustomValueChange={setCustomDevelopmentStyle}
                onToggle={(value) =>
                  setDraft({
                    ...draft,
                    developmentStyles: toggleSelected(
                      draft.developmentStyles,
                      value,
                    ),
                  })
                }
                onAddCustom={() => {
                  setDraft({
                    ...draft,
                    developmentStyles: addCustomItem(
                      draft.developmentStyles,
                      customDevelopmentStyle,
                    ),
                  });
                  setCustomDevelopmentStyle("");
                }}
              />
              <MultiSelectField
                label="担当できる領域"
                options={focusAreaOptions}
                selected={draft.focusAreas}
                variant="info"
                customValue={customFocusArea}
                onCustomValueChange={setCustomFocusArea}
                onToggle={(value) =>
                  setDraft({
                    ...draft,
                    focusAreas: toggleSelected(draft.focusAreas, value),
                  })
                }
                onAddCustom={() => {
                  setDraft({
                    ...draft,
                    focusAreas: addCustomItem(
                      draft.focusAreas,
                      customFocusArea,
                    ),
                  });
                  setCustomFocusArea("");
                }}
              />
            </>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <ProfileValue label="名前">{profile.name}</ProfileValue>
              </div>
              <ProfileValue label="自己紹介">{profile.bio}</ProfileValue>
              <div className="grid gap-4 md:grid-cols-2">
                <ProfileValue label="GitHub URL">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-0 items-center gap-2 font-medium text-primary hover:text-primary/80"
                  >
                    <GitBranch className="size-4 shrink-0" />
                    <span className="break-all">
                      github.com/{profile.githubUser}
                    </span>
                    <ExternalLink className="size-4 shrink-0" />
                  </a>
                </ProfileValue>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <ProfileValue label="経験年数">
                  {profile.experience === "0-1"
                    ? "1年未満"
                    : profile.experience === "1-2"
                      ? "1-2年"
                      : profile.experience === "2-3"
                        ? "2-3年"
                        : "3年以上"}
                </ProfileValue>
                <ProfileValue label="得意領域">
                  {profile.primaryArea === "frontend"
                    ? "フロントエンド"
                    : profile.primaryArea === "backend"
                      ? "バックエンド"
                      : profile.primaryArea === "infra"
                        ? "インフラ"
                        : profile.primaryArea === "design"
                          ? "デザイン"
                          : profile.primaryArea === "pm"
                            ? "PM"
                            : "UI/UX"}
                </ProfileValue>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    技術スタック
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.techStacks.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    希望する開発スタイル
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.developmentStyles.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  担当できる領域
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.focusAreas.map((item) => (
                    <Badge key={item} variant="info">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
