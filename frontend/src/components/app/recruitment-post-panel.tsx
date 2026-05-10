import type { FormEvent } from "react";
import { Send, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FormField } from "@/components/app/form-field";
import { SectionHeading } from "@/components/app/section-heading";
import { useAuth } from "@/contexts/auth-context";

export function RecruitmentPostPanel() {
  const { token } = useAuth();
  const navigate = useNavigate();
  console.log(token);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = {
      name: String(formData.get("name") ?? "").trim(),
      maxMembers: Number(formData.get("maxMembers") ?? 0),
      description: String(formData.get("description") ?? "").trim(),
      skillLevel: String(formData.get("skillLevel") ?? "初心者歓迎"),
    };

    const res = await fetch("http://localhost:3000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token ?? ""}`,
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      navigate("/", { replace: true });
    }

    return res;
  };
  return (
    <section id="post" className="space-y-4">
      <SectionHeading
        title="募集投稿"
        description="プロジェクト内容、募集ロール、連絡方法の投稿UI"
      />
      <Card>
        <CardHeader className="flex items-center gap-3 !space-y-0">
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <UsersRound className="size-5" />
          </div>
          <CardTitle>新しい募集</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="プロジェクト名">
                <Input
                  id="project-name"
                  name="name"
                  placeholder="DevLink Board"
                  required
                />
              </FormField>
              <FormField label="募集人数">
                <Input
                  id="project-max-members"
                  name="maxMembers"
                  type="number"
                  min={1}
                  placeholder="3"
                  required
                />
              </FormField>
            </div>
            <FormField label="概要">
              <Textarea
                id="project-description"
                name="description"
                placeholder="チーム開発のメンバー募集と応募管理をできるWebサービスを作ります。"
                required
              />
            </FormField>

            <div className="grid gap-4 md:grid-cols-3">
              <FormField label="対象レベル">
                <Select
                  id="project-skill-level"
                  name="skillLevel"
                  defaultValue="初心者歓迎"
                >
                  <option value="初心者歓迎">初心者歓迎</option>
                  <option value="中級者向け">中級者向け</option>
                  <option value="実務経験者向け">実務経験者向け</option>
                </Select>
              </FormField>
            </div>
            <div className="flex justify-end border-t border-border pt-5">
              <Button type="submit" className="w-full sm:w-auto">
                <Send />
                募集を作成
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
