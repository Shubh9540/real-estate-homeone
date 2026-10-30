import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaHandshake, FaHome, FaKey } from 'react-icons/fa';
import { ServiceCardProps, ServicesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaHome':
      return <FaHome />;
    case 'FaKey':
      return <FaKey />;
    case 'FaHandshake':
      return <FaHandshake />;
    default:
      return null;
  }
};

export const ServiceCard = ({ service, linkText }: ServiceCardProps) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-[0_8px_22px_rgba(5,16,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-48 w-full overflow-hidden sm:h-52">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <span className="absolute left-1/2 top-48 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[var(--color-accent)] bg-[var(--color-primary)] text-2xl text-[var(--color-accent-light)] shadow-lg sm:top-52">
        {renderIcon(service.icon)}
      </span>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-11">
        <Link href="#contact" className="transition-colors hover:text-[var(--color-accent)]">
          <h3 className="mb-3 text-xl font-extrabold text-[var(--color-primary)]">
            {service.title}{service.highlightedTitle && <span className="text-[var(--color-accent)]"> {service.highlightedTitle}</span>}
          </h3>
        </Link>

        <p className="mb-5 flex-1 text-sm leading-6 text-[var(--color-text-light)]">{service.description}</p>

        <Link href="#contact" className="inline-flex items-center gap-4 text-sm font-bold text-[var(--color-accent)] transition-all hover:gap-5">
          <span>{linkText}</span>
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  );
};

export const Services = ({ data }: ServicesProps) => {
  if (!data) return null;

  return (
    <section id="services" className="relative w-full overflow-hidden bg-[var(--color-bg-alt)] py-8 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">{data.subtitle}</p>
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            {data.title1} <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} linkText={data.linkText} />
          ))}
        </div>
      </div>
    </section>
  );
};
