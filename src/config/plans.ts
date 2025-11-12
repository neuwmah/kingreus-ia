import { Plan, WhatsAppConfig } from '@/types';

// Configuração dos planos
export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Assistente de Atendimento WhatsApp',
    price: 'R$ 39,99/mês',
    features: [
      'Bot de respostas automáticas 24h',
      'Menu personalizado com opções',
      'Suporte direto por WhatsApp'
    ],
    badge: 'Mais pedido',
    badgeType: 'popular',
    whatsappNumber: '558296079374' // Substituir pelo número real
  },
  {
    id: 'profissional',
    name: 'Site Vitrine Profissional',
    price: 'R$ 149,99 setup + R$ 39,99/mês',
    setupPrice: 'R$ 149,99',
    monthlyPrice: 'R$ 39,99/mês',
    features: [
      'Página para mostrar seus trabalhos',
      'Galeria/portfólio e seção "Sobre"',
      'Botão de contato direto no WhatsApp',
      'Hospedagem & manutenção mensal'
    ],
    badge: 'Profissional',
    badgeType: 'professional',
    whatsappNumber: '558296079374' // Substituir pelo número real
  }
];

// Configuração do WhatsApp
export const whatsappConfig: WhatsAppConfig = {
  defaultNumber: '558296079374', // Substituir pelo número real
  message: {
    greeting: 'Olá! Quero automatizar meu comércio com a KingReus IA.',
    planInterest: (planName: string, planPrice: string) => 
      `Olá! Quero automatizar meu comércio com a KingReus IA. Tenho interesse no plano *${planName}*.`,
    generalInquiry: 'Olá! Quero automatizar meu comércio com a KingReus IA.'
  }
};