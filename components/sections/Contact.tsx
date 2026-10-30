'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FaArrowRight,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaRegFileAlt,
  FaUser,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaClock': return <FaClock />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaXTwitter': return <FaXTwitter />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <section id="contact" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      {data.intro && (
        <div className="mx-auto mb-8 max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-sm">
              {data.intro.eyebrow}
            </p>
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            {data.intro.title} <span className="text-[var(--color-accent)]">{data.intro.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
            {data.intro.description}
          </p>
        </div>
      )}

      <div className="relative overflow-hidden py-4 lg:py-8">
        {data.backgroundImage && (
          <div className="absolute inset-y-0 left-0 hidden w-2/5 lg:block">
            <Image
              src={data.backgroundImage}
              alt={data.backgroundImageAlt || 'Contact Background'}
              fill
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/5 to-white/30" />
          </div>
        )}

        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 overflow-hidden rounded-xl shadow-[0_18px_50px_rgba(5,16,36,0.16)] lg:grid-cols-[1.45fr_0.9fr]">
          {data.form && (
            <div className="bg-[var(--color-card-dark)] p-5 text-white sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-accent)]" />
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-light)]">
                  {data.form.eyebrow}
                </p>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                {data.form.title} <span className="text-[var(--color-accent-light)]">{data.form.titleHighlight}</span>
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
                {data.form.description}
              </p>

              <form
                className="mt-7 space-y-4"
                onChange={() => setSubmitted(false)}
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                  event.currentTarget.reset();
                }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" />
                    <input
                      name="fullName"
                      type="text"
                      required
                      placeholder={data.form.fullNamePlaceholder}
                      className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[var(--color-accent)]"
                    />
                  </label>
                  <label className="relative block">
                    <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={data.form.emailPlaceholder}
                      className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[var(--color-accent)]"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="relative block">
                    <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" />
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder={data.form.phonePlaceholder}
                      className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[var(--color-accent)]"
                    />
                  </label>
                  <label className="relative block">
                    <FaRegFileAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/55" />
                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder={data.form.subjectPlaceholder}
                      className="w-full rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[var(--color-accent)]"
                    />
                  </label>
                </div>

                <label className="relative block">
                  <FaRegCommentDots className="pointer-events-none absolute left-4 top-5 text-white/55" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder={data.form.messagePlaceholder}
                    className="w-full resize-none rounded-md border border-white/20 bg-white/5 py-4 pl-12 pr-4 text-sm text-white outline-none placeholder:text-white/50 focus:border-[var(--color-accent)]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[var(--color-accent)] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[var(--color-accent-dark)] sm:w-auto"
                >
                  <span>{data.form.buttonText}</span>
                  <FaArrowRight className="text-xs" />
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="rounded-md border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-200"
                  >
                    {data.form.successMessage}
                  </p>
                )}
              </form>
            </div>
          )}

          {data.contactPanel && (
            <div className="bg-[var(--color-card-darker)] p-5 text-white sm:p-8 lg:p-10">
              <h4 className="text-xl font-bold">
                {data.contactPanel.title1} <span className="text-[var(--color-accent-light)]">{data.contactPanel.titleHighlight}</span>
              </h4>
              <span className="mt-3 block h-0.5 w-10 bg-[var(--color-accent)]" />
              <p className="mt-3 text-sm text-white/75">{data.contactPanel.description}</p>

              {data.contactPanel.items && (
                <ul className="mt-6 space-y-6">
                  {data.contactPanel.items.map((item) => (
                    <li key={item.id} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent-light)]">
                        {renderIcon(item.icon)}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-white">{item.title}</h5>
                        {item.lines?.map((line) => (
                          <p key={line.id} className="mt-0.5 text-sm text-white/75">
                            {item.url ? (
                              <a href={item.url} className="hover:text-[var(--color-accent-light)] transition-colors">
                                {line.text}
                              </a>
                            ) : (
                              line.text
                            )}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {data.contactPanel.socialLinks && (
                <div className="mt-8 border-t border-white/15 pt-6">
                  <h5 className="text-sm font-bold text-white">{data.contactPanel.socialTitle}</h5>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {data.contactPanel.socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)] text-sm text-white transition-colors hover:bg-[var(--color-accent)]"
                      >
                        {renderIcon(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
