'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const total = data.testimonials.length;
  const visibleTestimonials = [
    data.testimonials[(activeIndex - 1 + total) % total],
    data.testimonials[activeIndex],
    data.testimonials[(activeIndex + 1) % total],
  ];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[var(--color-bg-alt)] py-8 lg:py-12">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[var(--color-accent)]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">{data.subtitle}</span>
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
            {data.title1}{' '}
            <span className="text-[var(--color-accent)]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#1e293b] sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl py-5 md:py-8">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3 md:gap-0">
            {visibleTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${activeIndex}`}
                className={`${index !== 1 ? 'hidden md:flex' : 'flex'} relative h-80 flex-col items-center rounded-xl border px-6 pb-7 pt-16 text-center shadow-[0_10px_30px_rgba(5,16,36,0.10)] transition-all duration-700 ease-in-out ${index === 1 ? 'z-10 border-[var(--color-accent)]/30 bg-[var(--color-primary)] text-white md:scale-110' : 'border-[var(--color-border-light)] bg-white/95 text-[var(--color-text-light)] md:opacity-75'}`}
              >
                <div className={`absolute -top-10 h-20 w-20 overflow-hidden rounded-full border-4 shadow-md ${index === 1 ? 'border-white bg-[var(--color-bg-alt)]' : 'border-[var(--color-border-light)] bg-white'}`}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>

                <span className={`absolute left-1/2 top-7 ml-7 flex h-8 w-8 items-center justify-center rounded-full text-sm shadow-md ${index === 1 ? 'bg-white text-[var(--color-accent)]' : 'bg-[var(--color-accent)] text-white'}`}>
                  <FaQuoteRight />
                </span>

                <h3 className={`text-lg font-extrabold ${index === 1 ? 'text-white' : 'text-[var(--color-primary)]'}`}>
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">{testimonial.location}</p>

                <span className={`my-5 h-px w-10 ${index === 1 ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]'}`} />

                <p className={`text-sm leading-6 sm:text-base ${index === 1 ? 'text-[#e5e7eb]' : 'text-[var(--color-text-light)]'}`}>
                  {testimonial.quote}
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label={data.previousLabel}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-white text-[var(--color-accent)] shadow-lg transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white md:-left-2"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={data.nextLabel}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-border-light)] bg-white text-[var(--color-accent)] shadow-lg transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white md:-right-2"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-3 md:mt-6">
          {data.testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${data.slideLabel} ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-7 bg-[var(--color-accent)]' : 'w-2.5 bg-[#cbd1d9]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
