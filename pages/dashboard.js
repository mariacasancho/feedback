import useSWR from 'swr';
import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/core';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import SiteTable from '@/components/SiteTable';
import fetcher from '@/utils/fetcher';

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR('/api/sites', fetcher);

  console.log(data, error);
  if (!auth.user) {
    return <SiteTableSkeleton />;
  }

  return (
    <DashboardShell>
      {data?.sites ? <SiteTable sites={data.sites} /> : <EmptyState />};
    </DashboardShell>
  );
};

export default Dashboard;
