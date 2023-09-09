import React from "react";

import { PageLayout } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
}