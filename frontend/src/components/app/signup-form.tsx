import type { FormEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LockKeyhole, Mail, UserPlus, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SIGNUP_API_URL = "http://localhost:3000/auth/register";

export function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      name: String(formData.get("name") ?? ""),
    };
    console.log(payload);

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch(SIGNUP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("signup failed");
      }

      setSubmitMessage("新規登録情報を送信しました。");
    } catch {
      setSubmitMessage("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card id="signup" className="overflow-hidden">
      <CardHeader className="border-b border-border bg-card">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>新規登録</CardTitle>
            <CardDescription>
              名前、メールアドレス、パスワードを入力してください。
            </CardDescription>
          </div>
          <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
            <UserPlus className="size-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="signup-name">名前</Label>
            <div className="relative">
              <UserRound className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="signup-name"
                name="name"
                autoComplete="name"
                className="pl-9"
                placeholder="田中 優希"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-email">メールアドレス</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                className="pl-9"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="signup-password">パスワード</Label>
            <div className="relative">
              <LockKeyhole className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                className="pl-9"
                placeholder="password"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-1 w-full justify-center"
            disabled={isSubmitting}
          >
            <UserPlus />
            {isSubmitting ? "送信中" : "新規登録"}
          </Button>
          {submitMessage && (
            <p className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
              {submitMessage}
            </p>
          )}
          <p className="border-t border-border pt-4 text-center text-sm text-muted-foreground">
            すでにアカウントをお持ちの方は
            <Link
              to="/login"
              className="ml-1 font-medium text-primary hover:text-primary/80"
            >
              ログインはこちら
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
