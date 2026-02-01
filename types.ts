export interface PricingPlan {
  name: string;
  subtitle: string;
  monthlyPrice: string;
  annualPrice: string;
  monthlySavings?: string;
  annualSavings: string;
  linkMonthly: string;
  linkAnnual: string;
  recommendedBadge?: string;
  features: string[];
  isPopular?: boolean;
  isDark?: boolean;
  isEnterprise?: boolean;
  additionalCosts?: {
    label: string;
    items: { label: string; value: string }[];
    whatsapp?: {
      monthly: string;
      perMessage: string;
    }
  };
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  image: string;
  video?: string; // Optional video URL
  role?: string; // Optional role/title
  result?: string; // Optional quantifiable result badge (e.g., "Economizou R$ 28k/ano")
}

export interface Feature {
  id?: string;
  title: string;
  subtitle?: string;
  icon: string;
  highlight?: boolean;
  description?: string;
  detailImage?: string;
  longDescription?: string;
  benefits?: string[];
  howItWorks?: { step: string; title: string; description: string }[];
  useCases?: { title: string; description: string }[];
  whoIsItFor?: string[];
  faq?: { question: string; answer: string }[];
}

export interface ToolReplacement {
  name: string;
  logo: string;
}