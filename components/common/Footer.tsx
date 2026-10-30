import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaXTwitter':
      return <FaXTwitter />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaYoutube':
      return <FaYoutube />;
    default:
      return null;
  }
};

const renderContactIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    case 'FaPhoneAlt':
      return <FaPhoneAlt />;
    case 'FaEnvelope':
      return <FaEnvelope />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative w-full border-t border-[var(--color-border)] bg-[var(--color-bg-alt)] text-[var(--color-text)]">
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8 lg:py-12">
        <div className="lg:pr-10">
          <Link href="/" className="block" aria-label={data.logoAlt}>
            <img
              src={data.logo}
              alt={data.logoAlt}
              className="h-16 w-auto max-w-[280px] object-contain object-left sm:h-20"
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--color-text-light)]">
            {data.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {data.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-sm text-[var(--color-text)] shadow-sm transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
              >
                {renderSocialIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-[var(--color-border)] lg:px-10">
          <h3 className="text-xl font-bold text-[var(--color-primary)]">{data.quickLinksTitle}</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[var(--color-accent)]" />
          <ul className="mt-6 space-y-4">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center justify-between gap-4 text-sm text-[var(--color-text-light)] transition-colors hover:text-[var(--color-accent)]">
                  <span>{link.label}</span>
                  <FaArrowRight className="shrink-0 text-xs text-[var(--color-accent)]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-[var(--color-border)] lg:px-10">
          <h3 className="text-xl font-bold text-[var(--color-primary)]">{data.contactTitle}</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[var(--color-accent)]" />
          <ul className="mt-6 space-y-5">
            {data.contactItems.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] bg-white text-base text-[var(--color-accent)] shadow-sm">
                  {renderContactIcon(item.icon)}
                </span>
                <div className="pt-0.5">
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">{item.title}</h4>
                  {item.url ? (
                    <a href={item.url} className="mt-1 block text-sm leading-5 text-[var(--color-text-light)] transition-colors hover:text-[var(--color-accent)]">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-5 text-[var(--color-text-light)]">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-[var(--color-border)] lg:pl-10">
          <h3 className="text-xl font-bold text-[var(--color-primary)]">{data.companyTitle}</h3>
          <span className="mt-3 block h-0.5 w-10 bg-[var(--color-accent)]" />
          <ul className="mt-6 space-y-4">
            {data.companyLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className="flex items-center justify-between gap-4 text-sm text-[var(--color-text-light)] transition-colors hover:text-[var(--color-accent)]">
                  <span>{link.label}</span>
                  <FaArrowRight className="shrink-0 text-xs text-[var(--color-accent)]" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-border)] bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-4 px-4 py-6 text-center sm:px-6 lg:px-8">
          <span className="hidden h-px w-10 bg-[var(--color-accent)] sm:block" />
          <p className="text-xs text-[var(--color-text-light)] sm:text-sm">{data.copyrightText}</p>
          <span className="hidden h-px w-10 bg-[var(--color-accent)] sm:block" />
        </div>
      </div>
    </footer>
  );
};
