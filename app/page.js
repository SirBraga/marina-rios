import CTAButton from "../components/CTAButton";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { saveLead, bookCall } from "./actions";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--brand-bg)] via-purple-50 to-[var(--brand-bg-alt)] py-24 px-4 overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--brand-accent)] rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-[var(--brand-gold)] rounded-full animate-float delay-300"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--brand-accent-light)] rounded-full animate-pulse-slow"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--brand-text)] mb-6 leading-tight text-shadow">
                  Desbloqueie a <span className="gradient-text">prosperidade</span> do seu negócio em 60 minutos
                </h1>
                <p className="text-xl text-[var(--brand-text-light)] mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
                  Leitura do campo energético do seu negócio para identificar bloqueios com precisão e transformar em ações práticas imediatas
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up delay-400">
                  <CTAButton href="#oferta" variant="primary" className="text-lg px-8 py-4 shadow-glow hover-lift">
                    Comprar sessão agora
                  </CTAButton>
                  <CTAButton href="#pre-diagnostico" variant="ghost" className="text-lg px-8 py-4 hover-lift">
                    Pré-diagnóstico 15min
                  </CTAButton>
                </div>
              </div>
              
              <div className="relative animate-slide-in-right">
                <div className="w-full h-96 image-placeholder rounded-2xl shadow-2xl">
                  Marina em sessão
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Para quem é */}
        <section className="py-20 px-4 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                Esta sessão é para você que:
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">É uma mulher de 40+ anos, espiritualizada e conectada com sua intuição</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left delay-100">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">Tem seu próprio negócio mas ainda não está faturando o suficiente</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left delay-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">Sente que há bloqueios invisíveis impedindo sua prosperidade</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left delay-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">Quer transformar sua intuição em estratégia lucrativa</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left delay-400">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">Busca clareza sobre os próximos passos no seu negócio</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors duration-300 animate-slide-in-left delay-500">
                      <div className="w-8 h-8 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-[var(--brand-text)] font-medium">Está pronta para receber orientações práticas e diretas</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="w-full h-80 image-placeholder rounded-2xl shadow-lg">
                  Mulher empreendedora
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dor → Promessa */}
        <section className="py-20 px-4 bg-gradient-to-r from-[var(--brand-bg-alt)] to-purple-50 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[var(--brand-accent)] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[var(--brand-gold)] rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-[var(--brand-accent-light)] rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="w-full h-96 image-placeholder rounded-2xl shadow-xl">
                  Bloqueios energéticos
                </div>
              </div>
              
              <div className="text-center lg:text-left animate-slide-in-right">
                <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-8 leading-tight">
                  Você sabe que tem <span className="gradient-text">potencial</span>, mas algo está bloqueando
                </h2>
                <p className="text-xl text-[var(--brand-text-light)] mb-8">
                  Sua intuição diz que é possível mais, mas você não consegue identificar exatamente o que está impedindo seu negócio de prosperar. É hora de transformar essa intuição em estratégia clara e lucrativa.
                </p>
                <div className="glass-effect p-8 rounded-2xl shadow-glow hover-lift">
                  <h3 className="text-2xl font-bold gradient-text mb-4">
                    Com precisão cirúrgica, vou revelar:
                  </h3>
                  <p className="text-[var(--brand-text)] text-lg font-medium">
                    Exatamente o que bloqueia a prosperidade do seu negócio + ações práticas imediatas para desbloqueio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios/Resultados */}
        <section className="py-20 px-4 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                O que você vai receber:
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover-lift animate-fade-in-up">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--brand-gold)] rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Diagnóstico rápido, direto e preciso
                </h3>
                <p className="text-[var(--brand-text-light)] leading-relaxed">
                  Identificação exata dos bloqueios energéticos que impedem seu negócio de prosperar
                </p>
              </div>
              
              <div className="text-center group hover-lift animate-fade-in-up delay-200">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--brand-gold)] rounded-full animate-pulse delay-100"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Resultado imediato quando há desbloqueio
                </h3>
                <p className="text-[var(--brand-text-light)] leading-relaxed">
                  Transformação energética que você sente na hora, liberando o fluxo da prosperidade
                </p>
              </div>
              
              <div className="text-center group hover-lift animate-fade-in-up delay-400">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-accent-light)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--brand-gold)] rounded-full animate-pulse delay-200"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Próximos passos práticos
                </h3>
                <p className="text-[var(--brand-text-light)] leading-relaxed">
                  Plano de ação claro e objetivo para implementar imediatamente após a sessão
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-16 px-4 bg-[var(--brand-bg-alt)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[var(--brand-text)] mb-12">
              Como funciona:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-accent)] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Agendar/Comprar
                </h3>
                <p className="text-[var(--brand-text-light)]">
                  Escolha sua sessão e faça o pagamento seguro. Você receberá o link da videochamada por email.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-accent)] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Sessão 60min (Meet/Zoom)
                </h3>
                <p className="text-[var(--brand-text-light)]">
                  Leitura completa do campo energético do seu negócio com identificação precisa dos bloqueios.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--brand-accent)] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-text)] mb-4">
                  Plano prático pós-sessão
                </h3>
                <p className="text-[var(--brand-text-light)]">
                  Você recebe um resumo com as ações práticas para implementar imediatamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prova social */}
        <section className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                O que minhas clientes dizem:
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full mb-4"></div>
              <p className="text-[var(--brand-text-light)] italic">
                *Depoimentos do trabalho geral, adaptados para o contexto de negócios
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl shadow-lg hover-lift animate-slide-in-left">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 image-placeholder rounded-full mr-4">
                    Ana
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-text)]">Ana Silva</h4>
                    <p className="text-sm text-[var(--brand-text-light)]">45 anos, Consultora</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--brand-text)] italic leading-relaxed">
                  "A clareza que recebi foi impressionante. Marina conseguiu identificar exatamente o que estava me bloqueando e me deu passos práticos que funcionaram imediatamente."
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-2xl shadow-lg hover-lift animate-slide-in-left delay-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 image-placeholder rounded-full mr-4">
                    Carla
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-text)]">Carla Mendes</h4>
                    <p className="text-sm text-[var(--brand-text-light)]">52 anos, Terapeuta</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--brand-text)] italic leading-relaxed">
                  "Nunca imaginei que uma sessão pudesse ser tão precisa. Saí com um plano claro e meu negócio começou a fluir de forma diferente."
                </p>
              </div>
              
              <div className="glass-effect p-8 rounded-2xl shadow-lg hover-lift animate-slide-in-left delay-400">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 image-placeholder rounded-full mr-4">
                    Lucia
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--brand-text)]">Lúcia Santos</h4>
                    <p className="text-sm text-[var(--brand-text-light)]">48 anos, Coach</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--brand-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--brand-text)] italic leading-relaxed">
                  "O resultado foi além das minhas expectativas. Marina tem um dom especial para enxergar o que nós não conseguimos ver sozinhas."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta & Preço */}
        <section id="oferta" className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                Sua Oportunidade de Transformação
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="w-full h-96 image-placeholder rounded-2xl shadow-xl">
                    Sessão de leitura
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[var(--brand-accent)] text-white p-4 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div className="text-sm font-medium">Apenas</div>
                      <div className="text-2xl font-bold">60min</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[var(--brand-text)] mb-3">
                      Leitura do Campo Energético
                    </h3>
                    <p className="text-xl text-[var(--brand-text-light)] leading-relaxed">
                      Descubra exatamente o que bloqueia a prosperidade do seu negócio e receba um plano de ação prático para implementar imediatamente.
                    </p>
                  </div>
                  
                  <div className="flex items-baseline gap-4">
                    <div className="text-5xl font-bold text-[var(--brand-accent)]">
                      R$ 497
                    </div>
                    <div className="text-[var(--brand-text-light)] line-through text-xl">
                      R$ 697
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[var(--brand-gold)]/10 to-yellow-50 p-5 rounded-xl border-l-4 border-[var(--brand-gold)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--brand-gold)] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">+</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--brand-text)]">Bônus Gratuito</h4>
                        <p className="text-[var(--brand-text-light)]">Pré-diagnóstico de 15 minutos</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[var(--brand-text)]">Sessão online via Google Meet/Zoom</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[var(--brand-text)]">Resumo com ações por email</span>
                    </div>
                   
                  </div>
                  
                  <div className="pt-4">
                    <CTAButton href="https://wa.me/5511999999999?text=Quero%20comprar%20a%20sessão%20de%20leitura%20energética" variant="primary" className="w-full text-lg py-4 shadow-glow">
                      Reservar Minha Sessão
                    </CTAButton>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pré-diagnóstico */}
        <section id="pre-diagnostico" className="py-20 px-4 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                Ou comece com um <span className="gradient-text">Pré-diagnóstico GRATUITO</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <div className="w-full h-96 image-placeholder rounded-2xl shadow-xl">
                  Pré-diagnóstico gratuito
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="glass-effect p-8 rounded-2xl shadow-xl hover-lift">
                  <div className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-accent-light)] text-white px-6 py-3 rounded-full text-center font-bold mb-6">
                    100% GRATUITO - SEM COMPROMISSO
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--brand-text)] mb-4">
                    15 minutos para identificar seu principal bloqueio
                  </h3>
                  
                 
                  
                  <form action={bookCall} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--brand-text)] mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--brand-text)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--brand-text)] mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] focus:border-transparent transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <CTAButton type="submit" variant="primary" className="w-full text-lg py-4 shadow-glow hover-lift">
                      Agendar Pré-diagnóstico GRATUITO
                    </CTAButton>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gradient-to-br from-[var(--brand-bg-alt)] to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-[var(--brand-text)] mb-4">
                Perguntas Frequentes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-gold)] mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="glass-effect p-6 rounded-2xl shadow-lg hover-lift animate-fade-in-up border-l-4 border-[var(--brand-accent)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brand-text)] mb-3">
                      Como é a sessão?
                    </h3>
                    <p className="text-[var(--brand-text-light)] leading-relaxed">
                      A sessão acontece por videochamada (Google Meet ou Zoom) e dura 60 minutos. Faço a leitura do campo energético do seu negócio e compartilho as informações em tempo real.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl shadow-lg hover-lift animate-fade-in-up delay-100 border-l-4 border-[var(--brand-accent)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brand-text)] mb-3">
                      Preciso estar com a câmera ligada?
                    </h3>
                    <p className="text-[var(--brand-text-light)] leading-relaxed">
                      Não é obrigatório, mas recomendo para uma conexão mais profunda. O importante é que você esteja em um ambiente tranquilo e receptivo.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl shadow-lg hover-lift animate-fade-in-up delay-200 border-l-4 border-[var(--brand-accent)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brand-text)] mb-3">
                      Recebo um resumo com as ações?
                    </h3>
                    <p className="text-[var(--brand-text-light)] leading-relaxed">
                      Sim! Após a sessão, você recebe por email um resumo com os principais pontos identificados e as ações práticas para implementar.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl shadow-lg hover-lift animate-fade-in-up delay-300 border-l-4 border-[var(--brand-accent)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brand-text)] mb-3">
                      Não sou 'mística', funciona mesmo assim?
                    </h3>
                    <p className="text-[var(--brand-text-light)] leading-relaxed">
                      Perfeitamente! Você não precisa acreditar em nada específico. O trabalho funciona independente das suas crenças, pois trabalho com informações energéticas objetivas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect p-6 rounded-2xl shadow-lg hover-lift animate-fade-in-up delay-400 border-l-4 border-[var(--brand-accent)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[var(--brand-accent)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--brand-text)] mb-3">
                      Qual a política de remarcação/reembolso?
                    </h3>
                    <p className="text-[var(--brand-text-light)] leading-relaxed">
                      Você pode remarcar até 24h antes da sessão. Reembolso integral em até 7 dias se não ficar satisfeita com o resultado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-gradient-to-br from-[var(--brand-accent)] via-[var(--brand-accent-light)] to-purple-800 text-white relative overflow-hidden">
          {/* Background decorativo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left animate-slide-in-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-shadow">
                  Pronta para desbloqueiar a <span className="text-[var(--brand-gold)]">prosperidade</span> do seu negócio?
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Não deixe mais um dia passar com seu potencial bloqueado. Sua transformação começa agora.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                  <CTAButton href="#oferta" variant="primary" className="bg-white text-[var(--brand-accent)] hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl hover-lift">
                    Comprar Sessão Agora
                  </CTAButton>
                  <CTAButton href="#pre-diagnostico" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-accent)] text-lg px-8 py-4 hover-lift">
                    Pré-diagnóstico Gratuito
                  </CTAButton>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Disponível agora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Garantia de satisfação</span>
                  </div>
                </div>
              </div>
              
              <div className="animate-slide-in-right">
                <div className="relative">
                  <div className="w-full h-96 image-placeholder rounded-2xl shadow-2xl">
                    Transformação
                  </div>
                  <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-xl animate-float">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[var(--brand-text)]">+500</div>
                      <div className="text-sm text-[var(--brand-text-light)]">Vidas transformadas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}