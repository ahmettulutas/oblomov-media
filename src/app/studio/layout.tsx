import { PageLayout } from '@/components';
import React from 'react';

export default function Layout ({ children }:{children: React.ReactNode}) {
  return <PageLayout>{children}</PageLayout>;
}