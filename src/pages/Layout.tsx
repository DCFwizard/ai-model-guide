import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { OrganizationSchema } from '@/components/OrganizationSchema';
import { Toaster } from '@/components/ui/sonner';
export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      <OrganizationSchema />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}