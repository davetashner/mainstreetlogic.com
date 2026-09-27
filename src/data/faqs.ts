export interface FaqItem {
  question: string;
  answer: string;
}

export const defaultFaqs: FaqItem[] = [
  {
    question: 'How long do projects take?',
    answer:
      "Most take two to six weeks. A simple automation or website update can be done in a week; custom software usually takes four to six. You'll see the timeline in the proposal before anything starts.",
  },
  {
    question: 'Who will I be working with?',
    answer:
      "Me. I'm the one on the call, writing the code, and answering your email. There are no account managers or ticket queues in between.",
  },
  {
    question: 'What if I need changes after launch?',
    answer:
      'I build in review points during the project so you can ask for adjustments before it ships. After launch, changes are billed hourly or handled through an ongoing support plan.',
  },
  {
    question: 'How does payment work?',
    answer:
      'Most projects are half up front and half on completion. Larger projects can be split into milestones. I accept credit cards, ACH transfers, and checks.',
  },
  {
    question: 'Do you only work with businesses in Virginia?',
    answer:
      "No. Most of my work happens remotely, so location doesn't matter. If you're in Central Virginia, I'm glad to meet in person.",
  },
];
