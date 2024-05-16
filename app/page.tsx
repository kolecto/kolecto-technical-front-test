'use client';
import { Table } from './components/Table';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center p-8">
      <h1 className="text-2xl">Supplier invoices</h1>
      <Table />
    </main>
  );
}
