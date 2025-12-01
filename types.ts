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
}

export interface Feature {
  title: string;
  icon: string;
  highlight?: boolean;
}

export interface ToolReplacement {
  name: string;
  logo: string;
}