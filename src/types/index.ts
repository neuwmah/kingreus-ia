// Tipos para os planos de serviço
export interface Plan {
  id: 'basico' | 'profissional';
  name: string;
  price: string;
  setupPrice?: string;
  monthlyPrice?: string;
  features: string[];
  badge?: string;
  badgeType?: 'popular' | 'professional';
  whatsappNumber: string;
}

// Tipo para configuração do WhatsApp
export interface WhatsAppConfig {
  defaultNumber: string;
  message: {
    greeting: string;
    planInterest: (planName: string, planPrice: string) => string;
    generalInquiry: string;
  };
}

// Props para componentes
export interface PricingCardProps {
  plan: Plan;
  onContractPlan: (planId: string) => void;
}

export interface HeaderProps {
  onContactClick: () => void;
}

export interface FooterProps {
  // Props opcionais para customização futura
  year?: number;
  companyName?: string;
}