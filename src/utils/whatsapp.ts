import { whatsappConfig } from '@/config/plans';

/**
 * Cria uma mensagem formatada para WhatsApp
 */
export const createWhatsAppMessage = (planName: string, planPrice: string): string => {
  return whatsappConfig.message.planInterest(planName, planPrice);
};

/**
 * Abre o WhatsApp com uma mensagem pré-formatada
 */
export const openWhatsApp = (number: string, message: string): void => {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${number}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

/**
 * Abre o WhatsApp com mensagem de interesse em um plano específico
 */
export const contactForPlan = (planName: string, planPrice: string, whatsappNumber: string): void => {
  const message = createWhatsAppMessage(planName, planPrice);
  openWhatsApp(whatsappNumber, message);
};

/**
 * Abre o WhatsApp com mensagem geral de contato
 */
export const contactGeneral = (): void => {
  const message = whatsappConfig.message.generalInquiry;
  openWhatsApp(whatsappConfig.defaultNumber, message);
};