import { describe, expect, it } from 'vitest';
import { defaultFaqs } from './faqs';
import { services } from './services';

describe('services', () => {
  it('has unique slugs', () => {
    const slugs = services.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('fills in every field', () => {
    for (const s of services) {
      expect(s.slug).toMatch(/^[a-z0-9-]+$/);
      expect(s.title.trim()).not.toBe('');
      expect(s.summary.trim()).not.toBe('');
      expect(s.example.trim()).not.toBe('');
      expect(s.includes.length).toBeGreaterThan(0);
    }
  });
});

describe('default FAQs', () => {
  it('has unique, answered questions', () => {
    const questions = defaultFaqs.map((f) => f.question);
    expect(new Set(questions).size).toBe(questions.length);
    for (const f of defaultFaqs) {
      expect(f.question.trim()).toMatch(/\?$/);
      expect(f.answer.trim()).not.toBe('');
    }
  });
});
