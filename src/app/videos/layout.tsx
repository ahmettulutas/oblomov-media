import React from "react";

import { PageLayout } from "@/components/layouts/page-layout/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageLayout>{children}</PageLayout>;
}