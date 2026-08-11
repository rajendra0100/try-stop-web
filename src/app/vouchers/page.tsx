import type { Metadata } from 'next';
import React from 'react';
import VouchersDirectory from '@/components/VouchersDirectory';

export const metadata: Metadata = {
  title: 'Explore Outlet Directory & Platform Vouchers',
  description: 'Search verified local fashion boutiques and food cafes in Mansarovar, Jaipur. Filter by category, view store locations, and claim platform voucher offers.',
  keywords: ['TryStop vouchers directory', 'Mansarovar Jaipur shop vouchers', 'Local fashion deals Jaipur', 'Food cafe vouchers'],
};

export default function VouchersPage() {
  return <VouchersDirectory />;
}
