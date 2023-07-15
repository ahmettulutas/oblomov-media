import { PageLayout } from '@/components/layouts/page-layout/PageLayout';
import React from 'react';

export default function Layout ({ children }:{children: React.ReactNode}) {
  return <PageLayout>{children}</PageLayout>;
}