import React from 'react';
import {
  FaAward,
  FaBuilding,
  FaHandshake,
  FaHeadset,
  FaHome,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUserTie,
} from 'react-icons/fa';
import { WhyChooseUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaBuilding':
      return <FaBuilding />;
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaAward':
      return <FaAward />;
    case 'FaUserTie':
      return <FaUserTie />;
    case 'FaHome':
      return <FaHome />;
    case 'FaHandshake':
      return <FaHandshake />;
    case 'FaHandHoldingUsd':
      return <FaHandHoldingUsd />;
    case 'FaHeadset':
      return <FaHeadset />;
    default:
      return null;
  }
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch lg:min-h-[24rem] lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-center py-2 lg:col-span-5 lg:py-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-0.5 w-10 bg-[var(--color-accent)]" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-accent)] sm:text-sm">
                {data.subtitle}
              </p>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
              <span className="block">{data.title1}</span>
              <span className="block text-[var(--color-accent)]">{data.title2}</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-light)] sm:text-base">
              {data.description}
            </p>
          </div>

          <div className="relative mt-7 h-72 overflow-hidden lg:col-span-7 lg:mt-0 lg:h-auto lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
            <img src={data.imageMain} alt={data.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="relative z-20 mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
          {data.features.map((feature) => (
            <article
              key={feature.id}
              className="group flex h-full flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_10px_28px_rgba(13,27,42,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)] hover:shadow-xl"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-bg)] to-[var(--color-bg-alt)] text-2xl text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/20 transition-all duration-300 group-hover:scale-110 group-hover:from-[var(--color-accent)] group-hover:to-[var(--color-accent-dark)] group-hover:text-white group-hover:ring-0">
                {renderIcon(feature.icon)}
              </div>

              <h3 className="mt-5 text-lg font-extrabold leading-6 text-[var(--color-primary)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
