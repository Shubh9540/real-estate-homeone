import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { HeroButtonData, HeroProps } from '@/types/templates.types';

const renderButtonIcon = (button: HeroButtonData) => {
  switch (button.icon) {
    case 'FaArrowRight':
      return <FaArrowRight className="text-xs" />;
    default:
      return null;
  }
};

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section id="hero" className="relative flex min-h-[34rem] w-full items-center justify-center overflow-hidden bg-[var(--color-primary)] lg:min-h-[38rem] xl:min-h-[42rem]">
      {/* Background Image */}
      <img
        src={data.image}
        alt={data.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      
      {/* Solid dark overlay for 100% sharp text visibility */}
      <div className="absolute inset-0 bg-[#0d1b2a]/75 backdrop-brightness-75" />

      {/* Centered Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[var(--color-accent)]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-accent-light)] sm:text-sm drop-shadow-md">
              {data.eyebrow}
            </p>
            <span className="h-0.5 w-10 bg-[var(--color-accent)]" />
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            <span className="block">{data.titleLine1}</span>
            <span className="block text-[var(--color-accent-light)] drop-shadow-md">{data.highlightedTitle}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
            {data.description}
          </p>

          <div className="mt-8 flex items-center justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(224,122,95,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-accent-light)] hover:shadow-2xl"
            >
              <span>{data.primaryButton.text}</span>
              {renderButtonIcon(data.primaryButton)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
