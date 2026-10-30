import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { AgentsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt />;
    default:
      return null;
  }
};

export const Agents = ({ data }: AgentsProps) => {
  if (!data) return null;

  return (
    <section id="agents" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[var(--color-accent)]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
                {data.subtitle}
              </p>
              <span className="h-px w-10 bg-[var(--color-accent)]" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              {data.title1} <span className="text-[var(--color-accent)]">{data.highlightedTitle}</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
              {data.description}
            </p>
          </div>

          <Link
            href="#contact"
            className="mt-5 flex items-center justify-center gap-3 text-sm font-bold text-[var(--color-accent)] transition-all duration-300 hover:gap-4 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0"
          >
            <span>{data.viewAllText}</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.agents.map((agent) => (
            <article
              key={agent.id}
              className="group overflow-hidden rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-[0_8px_24px_rgba(5,16,36,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-[var(--color-bg-alt)]">
                <Image
                  src={agent.image}
                  alt={agent.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-bold text-white shadow-md">
                  {agent.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-extrabold leading-tight text-[var(--color-primary)]">{agent.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-light)]">{agent.role}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                  <span className="text-[var(--color-accent)]">{renderIcon(agent.locationIcon)}</span>
                  <span>{agent.location}</span>
                </div>

                <div className="mt-4 grid grid-cols-3 divide-x divide-[var(--color-border-light)] border-t border-[var(--color-border-light)] pt-4">
                  {agent.stats.map((stat) => (
                    <div key={stat.id} className="px-2 text-center first:pl-0 last:pr-0">
                      <p className="text-base font-extrabold text-[var(--color-primary)]">{stat.value}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-text-light)]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
