import AnimatedWave from "@/components/AnimatedWave";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso — KingReus IA",
  description: "Termos de Uso da KingReus IA."
};

export default function TermosPage() {
  return (
    <section className="relative">
      <div className="w-full max-w-4xl mx-auto p-6 md:pt-12 md:pb-20 md:px-0 relative z-1">
        <div className="bg-[#1a1a1a] rounded-lg py-6 px-5 md:p-8 md:border md:border-[#313131]">
          <h1 className="text-xl md:text-2xl font-bold mb-3">Termos de Uso</h1>
          <p className="text-sm leading-6 text-[#AAAAAA] mb-6">Vigente a partir de 17 de outubro de 2025</p>

          <div className="space-y-6 text-gray-300 text-sm leading-6">
            <div>
              <h2 className="text-lg font-semibold text-white mb-6">1. Aceitação</h2>
              <p>
                Ao acessar o site e/ou contratar os serviços da <strong className="text-white">KingReus IA</strong>, você concorda com estes Termos de Uso e com a nossa Política de Privacidade.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">2. Objeto</h2>
              <p>
                Oferecemos soluções de automação (bots de WhatsApp, sites e páginas) e serviços correlatos, conforme descritos no site e em propostas.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">3. Cadastro e comunicações</h2>
              <p>
                Informações devem ser verdadeiras e atualizadas. Comunicações podem ocorrer por e-mail, WhatsApp e canais informados.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">4. Contratação e pagamentos</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Planos e serviços avulsos com valores informados no site/proposta.</li>
                <li>A ativação pode depender de informações e aprovações do cliente.</li>
                <li>Em inadimplência, serviços podem ser suspensos até regularização.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">5. Uso adequado</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>É vedado uso para fins ilícitos, spam, fraude, violação de direitos ou normas.</li>
                <li>O cliente responde pelo conteúdo enviado e pelos dados cadastrados nas plataformas.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">6. Propriedade intelectual</h2>
              <p>
                Layout, textos, logos, design e código pertencem à KingReus IA ou a licenciantes. Proibida reprodução sem autorização.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">7. Limitação de responsabilidade</h2>
              <p>
                Na extensão permitida, não respondemos por danos indiretos, lucros cessantes ou indisponibilidades de terceiros (WhatsApp/Meta, nuvem, registradores) nem por mau uso.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">8. Suporte e SLA</h2>
              <p>
                Suporte pelos canais informados. SLAs específicos constam em proposta quando aplicável.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">9. Rescisão</h2>
              <p>
                Qualquer parte pode encerrar a contratação mediante aviso, observadas obrigações pendentes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">10. Privacidade</h2>
              <p>
                Dados pessoais são tratados conforme a <a href="/politica" className="text-blue-400 hover:text-blue-300 transition-colors">Política de Privacidade</a> e a legislação aplicável.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">11. Alterações</h2>
              <p>
                Os Termos podem ser atualizados a qualquer tempo. O uso contínuo após a publicação implica aceitação.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-6">12. Foro e legislação</h2>
              <p>
                Aplica-se a legislação brasileira. Fica eleito o foro do domicílio do usuário/cliente, salvo disposição legal específica.
              </p>
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