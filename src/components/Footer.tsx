import { FooterProps } from '@/types';

export default function Footer({ 
  year = new Date().getFullYear(), 
  companyName = '👑 KingReus IA' 
}: FooterProps) {
  return (
    <footer className="bg-black border-t border-[#313131] md:h-20 py-6 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse md:flex-row justify-between items-center">
        <p className="text-white text-sm">
          &copy; {year} {companyName}
        </p>
        
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a 
            href="/politica" 
            className="text-white hover:text-green-400 text-sm transition-colors duration-200"
          >
            Política de Privacidade
          </a>
          <a 
            href="/termos" 
            className="text-white hover:text-green-400 text-sm transition-colors duration-200"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}