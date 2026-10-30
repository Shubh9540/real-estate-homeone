'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from '@/types/templates.types';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = ({ data }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const navLinks = [...(data.navLinksLeft || []), ...(data.navLinksRight || [])];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-main)] shadow-[0_4px_18px_rgba(5,16,36,0.06)]">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-9 w-auto object-contain sm:h-10 lg:h-12" />
        </Link>

        <nav className="hidden h-full flex-1 items-center justify-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="relative flex h-full items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] xl:text-base"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          {data.contactButton && (
            <div className="hidden items-center gap-6 lg:flex">
              <span className="h-12 w-px bg-[var(--color-border)]" />
              <Link href={data.contactButton.url} className="flex min-w-44 items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(196,146,80,0.3)] transition-colors hover:bg-[var(--color-accent-light)] xl:min-w-48 xl:text-base">
                {data.contactButton.text}
              </Link>
            </div>
          )}

          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu" className="flex h-10 w-10 items-center justify-center rounded-md text-2xl text-[var(--color-primary)] transition-colors hover:bg-[var(--color-bg-alt)] lg:hidden">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-t border-[var(--color-border)] bg-[var(--color-bg-main)] p-4 shadow-xl lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-4 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span>{link.label}</span>
            </Link>
          ))}
          {data.contactButton && (
            <Link href={data.contactButton.url} onClick={() => setMobileMenuOpen(false)} className="mx-4 mt-6 flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(196,146,80,0.25)] transition-colors hover:bg-[var(--color-accent-light)]">
              {data.contactButton.text}
            </Link>
          )}
        </div>
      )}
    </header>
  );
};
