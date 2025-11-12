import AnimatedWave from "@/components/AnimatedWave";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — KingReus IA",
  description: "Política de Privacidade da KingReus IA. Saiba como coletamos, utilizamos e protegemos seus dados pessoais em conformidade com a LGPD."
};

export default function PoliticaPage() {
  return (
    <section className="relative">
      <div className="w-full max-w-4xl mx-auto p-6 md:pt-12 md:pb-20 md:px-0 relative z-1">
        <div className="bg-[#1a1a1a] rounded-lg py-6 px-5 md:p-8 md:border md:border-[#313131]">
          <h1 className="text-xl md:text-2xl font-bold mb-3">Política de Privacidade</h1>
          <p className="text-sm leading-6 text-[#AAAAAA] mb-6">Vigente a partir de 17 de outubro de 2025</p>

          <div className="space-y-6 text-gray-300 text-sm leading-6">
            <p>
              Esta Política de Privacidade descreve como a <strong className="text-white">KingReus IA</strong> coleta, utiliza, compartilha e protege dados pessoais, em conformidade com a Lei Geral de Proteção de Dados — <strong className="text-white">LGPD (Lei nº 13.709/2018)</strong>.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">1. Controlador e contato</h2>
              <p><strong>Controlador:</strong> KingReus IA</p>
              <p><strong>Endereço:</strong> Rua Adolfo Noberto Lima, 566 — Bairro Novo, Delmiro Gouveia — AL</p>
              <p><strong>E-mail:</strong> <a href="mailto:contato@kingreusia.com" className="text-blue-400 hover:text-blue-300 transition-colors">contato@kingreusia.com</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">2. Dados pessoais tratados</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Contato:</strong> nome, telefone/WhatsApp, e-mail.</li>
                <li><strong>Navegação:</strong> IP, data/horário, páginas acessadas, cookies.</li>
                <li><strong>Transacionais:</strong> mensagens do WhatsApp e informações necessárias à execução dos serviços.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">3. Finalidades</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Atendimento e contato comercial.</li>
                <li>Prestação, manutenção e melhoria dos serviços.</li>
                <li>Cumprimento de obrigações legais.</li>
                <li>Prevenção a fraudes e segurança.</li>
                <li>Envio de comunicações transacionais e marketing (opt-out disponível).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">4. Bases legais</h2>
              <p>Execução de contrato, obrigação legal, legítimo interesse e consentimento, quando aplicável.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">5. Compartilhamento</h2>
              <p>Com provedores de infraestrutura, mensageria (incluindo WhatsApp/Meta) e parceiros necessários, sob confidencialidade e segurança.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">6. Transferência internacional</h2>
              <p>Pode ocorrer conforme uso de nuvem e ferramentas de terceiros, com salvaguardas adequadas à LGPD.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">7. Cookies</h2>
              <p>Utilizamos cookies para melhorar a experiência e medir audiência. O bloqueio pode afetar recursos do site.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">8. Direitos do titular</h2>
              <p>Confirmação, acesso, correção, anonimização, portabilidade, informação sobre compartilhamentos, revogação do consentimento e revisão de decisões automatizadas. Solicite via <a href="mailto:contato@kingreusia.com" className="text-blue-400 hover:text-blue-300 transition-colors">contato@kingreusia.com</a>.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">9. Segurança</h2>
              <p>Medidas técnicas e organizacionais razoáveis para proteção. Nenhum sistema é absolutamente imune.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">10. Retenção</h2>
              <p>Manteremos os dados pelo tempo necessário às finalidades e obrigações legais; após, descarte seguro.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">11. Comunicações via WhatsApp</h2>
              <p>Ao iniciar conversa, você autoriza mensagens relacionadas a serviços. É possível solicitar interrupção a qualquer tempo.</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">12. Alterações</h2>
              <p>Esta Política pode ser atualizada. Publicaremos a nova versão com data.</p>
              <p className="text-[#AAAAAA] mt-6">Última atualização: 17 de outubro de 2025</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#313131]">
            <a href="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              ← Voltar ao site
            </a>
          </div>
        </div>
      </div>

      <AnimatedWave />
    </section>
  );
}