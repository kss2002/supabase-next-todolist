'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient();

interface Props {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
