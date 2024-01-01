'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function StudioNav() {
  return (
    <header className="flex justify-between items-center pt-2 px-4">
      <Link href="/" className="flex text-white group">
        <ArrowLeft className="w-6 h-6 transition-transform duration-500 group-hover:-translate-x-2" />
        <span className="ml-2">Back to site</span>
      </Link>
    </header>
  );
}
