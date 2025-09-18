import CTAButton from "../../components/CTAButton";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-[var(--brand-radius-lg)] p-8 shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-[var(--brand-text)] mb-4">
            Obrigada pelo seu interesse!
          </h1>
          
          <p className="text-[var(--brand-text-light)] mb-6">
            Recebemos suas informações e entraremos em contato em breve para agendar sua sessão.
          </p>
          
          <CTAButton href="/" variant="primary">
            Voltar ao início
          </CTAButton>
        </div>
      </div>
    </div>
  );
}