'use client';

import PricingCard from '@/components/PricingCard';
import Carousel from '@/components/Carousel';
import AnimatedWave from '@/components/AnimatedWave';
import { plans } from '@/config/plans';
import { contactForPlan, contactGeneral } from '@/utils/whatsapp';

export default function Home() {
  const handleContractPlan = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      contactForPlan(plan.name, plan.price, plan.whatsappNumber);
    }
  };

  return (
    <section className="relative lg:min-h-[calc(100vh-160px)] flex items-center w-full overflow-hidden mt-6 mb-12 md:my-0 md:pt-12 md:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col-reverse md:flex-row relative z-10">
        <Carousel />  

        <div className="w-full max-w-[800px] flex flex-col">
          <div className="mb-12 text-center md:text-left">
            <h1 className="mb-6 text-4xl font-black">
              👑 KingReus IA
            </h1>
            <h2 className="mb-4 text-xl font-semibold">
              Atendimento via WhatsApp automatizado! 🤖
            </h2>
            <p className="text-base leading-6">
              Escolha um plano e fale comigo no WhatsApp para contratar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full md:gap-4 md:items-start">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onContractPlan={handleContractPlan}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatedWave />
    </section>
  );
}