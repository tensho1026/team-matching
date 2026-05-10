"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SectionHeading } from "@/components/app/section-heading";
import { useEffect, useState } from "react";
type Project = {
  id: string;
  name: string;
  description: string;
  maxMembers: number;
  skillLevel: string;
  user: {
    id: string;
  };
}[];

export function RecruitmentSearchPanel() {
  const [projects, setProjects] = useState<Project>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("http://localhost:3000/projects");
      if (res.ok) {
        const data = await res.json();
        console.log(data, "プロジェクト");

        setProjects(data);
      }
    };
    fetchProjects();
  }, []);
  return (
    <section id="recruitments" className="space-y-4">
      <SectionHeading
        title="募集一覧・検索"
        description="キーワード、技術スタック、ロール、レベル、募集状態の検索UI"
      />
      <div className="grid gap-4">
        <div className="grid gap-4">
          {projects.map((item) => (
            <Card key={item.id}>
              <CardHeader className="gap-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-3 text-sm sm:grid-cols-3">
                  <div>
                    <p className="text-muted-foreground">対象レベル</p>
                    <p className="font-medium">{item.skillLevel}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">募集人数</p>
                    <p className="font-medium">{item.maxMembers}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">現在のメンバー数</p>
                    <p className="font-medium">0人</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button size="sm">応募する</Button>
                  <Button size="sm" variant="outline">
                    詳細を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
