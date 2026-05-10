import { Send, UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FormField } from "@/components/app/form-field";
import { SectionHeading } from "@/components/app/section-heading";
import { useAuth } from "@/contexts/auth-context";

export function RecruitmentPostPanel() {
  const token = useAuth();
  console.log(token);
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });
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
        <CardContent className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="プロジェクト名">
              <Input />
            </FormField>
            <FormField label="募集人数">
              <Input />
            </FormField>
          </div>
          <FormField label="概要">
            <Textarea />
          </FormField>

          <div className="grid gap-4 md:grid-cols-3">
            <FormField label="対象レベル">
              <Select defaultValue="beginner">
                <option value="beginner">初心者歓迎</option>
                <option value="middle">中級者向け</option>
                <option value="pro">実務経験者向け</option>
              </Select>
            </FormField>
          </div>
          <div className="flex justify-end border-t border-border pt-5">
            <Button className="w-full sm:w-auto" onClick={handleSubmit}>
              <Send />
              募集を作成
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
