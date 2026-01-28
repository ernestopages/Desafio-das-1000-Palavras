
import React from 'react';
import { Banner } from './components/Banner';
import { Timer } from './components/Timer';
import { FAQItem } from './components/FAQ';
import { Button } from './components/Button';
import { TestimonialCarousel } from './components/TestimonialCarousel';

const App: React.FC = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('offer-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const checkoutLink = "https://indec-digital.mycartpanda.com/checkout/206397069:1";

  // Cor personalizada laranja-amarelada
  const highlightColor = "text-[#ff9d00]";

  return (
    <div className="flex flex-col min-h-screen bg-brand selection:bg-[#ff9d00] selection:text-brand overflow-x-hidden">
      {/* Banner de Alerta */}
      <Banner />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative bg-white pt-6 pb-10 text-center overflow-hidden">
          <div className="px-5 max-w-4xl mx-auto relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2 text-[#00355b] uppercase tracking-tighter">
              DIGA <span className={highlightColor}>ADEUS</span> AO GOOGLE TRADUTOR EM MENOS DE <span className={highlightColor}>21 DIAS</span>!
            </h1>
            
            <p className="text-base md:text-xl font-medium text-[#00355b]/90 mb-6 max-w-2xl mx-auto leading-tight px-4">
              Aprenda o inglês real em casa, sozinho(a), com apenas 15 minutos por dia.
            </p>

            <div className="relative mb-4 flex justify-center group">
              <img 
                src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281007/MOCKUP_1_rkdync.webp" 
                alt="Mockup do Curso" 
                className="w-full max-w-[300px] md:max-w-md h-auto drop-shadow-2xl relative z-10"
                loading="eager"
              />
            </div>

            {/* Bloco de Preço Hero */}
            <div className="mb-6 bg-[#f8fafc] rounded-3xl p-5 md:p-8 shadow-2xl border border-[#00355b]/5 max-w-sm mx-auto relative overflow-hidden">
              <p className="text-lg line-through text-red-600 mb-0 font-bold opacity-80">De R$99,90</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#00355b]/60 mb-0">por apenas</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl font-bold text-[#15803d]">R$</span>
                <span className="text-6xl font-bold text-[#15803d] tracking-tighter">10,00</span>
              </div>
              <p className="text-sm font-bold text-[#00355b] leading-tight max-w-[280px] mx-auto">
                Apenas um valor simbólico para separar quem realmente quer aprender inglês de verdade dos curiosos.
              </p>
            </div>

            <div className="flex justify-center">
              <Button onClick={scrollToOffer} variant="primary" className="py-6 px-10 text-2xl animate-pulse-cta shadow-2xl">
                QUERO APRENDER INGLÊS
              </Button>
            </div>
          </div>
        </section>

        {/* Transição */}
        <section className="px-5 py-12 text-center bg-brand">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight text-white">
              VOCÊ <span className="text-[#ff9d00]">NÃO PRECISA</span> DE CURSO CARO, PROFESSOR NATIVO E MUITO MENOS DE <span className="text-[#ff9d00]">ANOS DE AULA</span>
            </h2>
            <div className="flex justify-center">
              <p className="text-xl md:text-2xl font-bold text-white bg-[#ff9d00] px-4 py-1.5 shadow-lg">
                Precisa só de uma coisa
              </p>
            </div>
          </div>
        </section>

        {/* O que você vai encontrar */}
        <section className="px-5 py-12 bg-white/5 border-y border-white/10">
          <div className="max-w-3xl mx-auto space-y-8 text-center md:text-left">
            <div className="space-y-4 text-lg leading-relaxed text-white">
              <p>
                Fazer um desafio de 21 dias onde você aprenderá as <span className="font-bold text-[#ff9d00] underline decoration-2">1000 palavras mais usadas</span> no inglês real. Com apenas 7 dias você já começa a entender músicas, séries e conversas e em até 21 dias, consegue falar e se expressar em inglês com confiança.
              </p>
              <p className="opacity-80 italic text-sm">
                É só isso. O resto é apenas o que as grandes escolas inventam para arrancar mais dinheiro de você.
              </p>
              <div className="bg-white/10 p-5 rounded-2xl border-l-4 border-[#22c55e] text-left space-y-3">
                <p className="text-sm md:text-base">💬 80% de todas as conversas em inglês acontecem com apenas 1000 palavras. E é exatamente essas palavras que você vai dominar com esse método.</p>
                <p className="font-bold text-white uppercase text-sm md:text-base">Se você consegue repetir, você consegue falar.</p>
                <p className="text-sm md:text-base opacity-90 text-white font-medium">E se você tem 21 dias, tem tempo pra entender e pronunciar inglês de verdade.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-3xl space-y-4 text-left shadow-2xl">
              <h3 className="text-lg font-bold text-center text-[#00355b] uppercase">O QUE VOCÊ VAI ENCONTRAR:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  { emoji: "📘", text: "Desafio de 21 dias" },
                  { emoji: "🎧", text: "Audiobook Completo" },
                  { emoji: "📄", text: "LISTA COM TRADUÇÃO E PRONÚNCIA" },
                  { emoji: "📱", text: "Apostila Digital" },
                  { emoji: "⬇️", text: "Download Imediato" },
                  { emoji: "♾️", text: "Acesso Vitalício" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#00355b] bg-[#f1f5f9] p-2 rounded-xl">
                    <span className="text-lg">{item.emoji}</span>
                    <span className="font-bold text-xs uppercase">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-center">
              <Button onClick={scrollToOffer} variant="primary" className="animate-pulse-cta">
                QUERO COMEÇAR O DESAFIO AGORA!
              </Button>
            </div>
          </div>
        </section>

        {/* Por que aprender 1000 palavras */}
        <section className="px-5 py-12 max-w-4xl mx-auto space-y-10 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white px-2">
              💡 Por que aprender apenas 1000 palavras é o jeito mais rápido de entender inglês?
            </h2>
            <div className="text-base md:text-lg space-y-5 text-left opacity-90 leading-relaxed text-white">
              <p>O segredo não é “aprender mais”… é aprender o que realmente é usado no dia a dia.</p>
              <p>No inglês, as 1000 palavras mais usadas dominam mais de 80% das conversas reais.</p>
              <p>Por isso, quando você foca nelas, você começa a entender facilmente o que é falado e finalmente para de sentir que “ouve, ouve… e não entende nada”.</p>
              <p>Isso significa que, ao dominar apenas essas palavras, você já entende o inglês real do dia a dia e começa a entender filmes, séries e músicas em apenas 7 dias sem precisar passar anos preso em gramática de escolas caras.</p>
              
              <div className="bg-[#22c55e]/20 border-l-4 border-[#22c55e] p-5 rounded-r-xl font-bold italic shadow-inner">
                E é exatamente por isso que muitas pessoas “aprende sozinhas” em casa: jogando jogos online, vendo vídeos, repetindo as mesmas palavras várias vezes sem nem perceber.
              </div>

              <p>Não é mágica, é frequência. Quando você vê e escuta as palavras certas várias vezes, seu cérebro começa a reconhecer e entender naturalmente.</p>
              <p className="font-bold">
                👉 Esse método é diferente porque não te faz estudar “inglês infinito”.
              </p>
              <p>Ele te faz dominar o que mais aparece em qualquer fala, o caminho mais curto pra começar a entender de verdade.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 mt-6">
            <img 
              src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281006/MOCKUP_2_vvv0ad.webp" 
              alt="Mockup Celular" 
              className="w-full max-w-[280px] h-auto drop-shadow-2xl mx-auto"
              loading="lazy"
            />
            <Button onClick={scrollToOffer} variant="primary" className="animate-pulse-cta">
              QUERO APRENDER INGLÊS RÁPIDO
            </Button>
          </div>
        </section>

        {/* Diferencial do Desafio */}
        <section className="px-5 py-12 bg-white/5 border-t border-white/10">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
              Esse DESAFIO é diferente de tudo o que você já viu!
            </h2>
            
            <div className="grid grid-cols-1 gap-4 text-left">
              {[
                { title: "Aprenda com o ouvido", text: "O mesmo jeito que você aprendeu português" },
                { title: "Tradução e pronúncia lado a lado", text: "Você conhece a palavra, a sua tradução e como é a pronúncia correta." },
                { title: "Acompanhamento em áudio", text: "Ouça enquanto faz outras coisas e aprenda de forma natural, como uma criança." },
                { title: "Aprenda com a Repetição inteligente", text: "Com esse método de repetição o seu cérebro memoriza naturalmente" },
                { title: "Método validado por alunos reais", text: "Mais de 5.137 alunos já comprovaram que é possível entender inglês em poucos dias." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/5">
                  <span className="text-xl flex-shrink-0 text-[#22c55e]">✅</span>
                  <div>
                    <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF - FUNDO BRANCO */}
        <section className="px-5 py-16 bg-white overflow-x-hidden border-y border-gray-100 shadow-inner">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight max-wxl mx-auto text-[#00355b]">
                JÁ SÃO MAIS DE 5137 PESSOAS COMUNS QUE TESTARAM E APROVARAM O DESAFIO DAS 1000 PALAVRAS!
              </h2>
              <p className="text-sm font-bold text-[#00355b]/60 uppercase tracking-widest max-w-lg mx-auto">
                Confira alguns depoimentos:
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* GARANTIA SECTION - FUNDO AZUL */}
        <section className="px-5 py-16 bg-brand text-center space-y-6 max-w-3xl mx-auto border-t border-white/10">
          <img 
            src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281009/selo-garantia_d80js4.webp" 
            alt="Selo de Garantia" 
            className="w-56 md:w-72 mx-auto drop-shadow-lg"
            loading="lazy"
          />
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-white tracking-tighter">7 DIAS DE GARANTIA</h2>
          <p className="text-base md:text-lg text-white opacity-90 px-4 leading-relaxed max-w-2xl mx-auto">
            Teste sem risco! O Desafio Das 1000 palavras é tão eficaz que se você não sentir nenhuma evolução em 7 dias, devolvemos 100% do seu dinheiro sem burocracias, simples assim!
          </p>
        </section>

        {/* SE VOCÊ SECTION - FUNDO AZUL */}
        <section className="px-5 py-16 bg-brand text-white border-t border-white/10">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-tighter">SE VOCÊ…</h2>
            <ul className="space-y-6">
              {[
                "Já tentou estudar inglês, mas nunca conseguiu aprender;",
                "Não tem tempo para cursos longos e aulas chatas;",
                "Quer aprender só o que realmente importa pra entender o idioma;",
                "Quer aprender o idioma de forma fácil e rápida;",
                "Quer entender músicas, filmes e conversas sem tradução;",
                "Sempre sonhou em falar inglês, mas acha que já é tarde demais;"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg md:text-xl font-medium leading-tight">
                  <span className="text-red-500 font-bold text-2xl flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-center pt-10">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#ff9d00] animate-pulse">ENTÃO VOCÊ PRECISO DISSO:</h3>
            </div>
          </div>
        </section>

        {/* OFFER BLOCK FINAL - FUNDO BRANCO */}
        <section id="offer-section" className="px-5 py-16 bg-white text-[#00355b]">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase">
              O DESAFIO DAS 1000 PALAVRAS
            </h2>
            
            <img 
              src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281007/MOCKUP_1_rkdync.webp" 
              alt="Mockup do Curso" 
              className="w-full max-w-[320px] mx-auto drop-shadow-2xl"
              loading="lazy"
            />

            <div className="bg-[#f8fafc] p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-md mx-auto relative overflow-hidden">
              <ul className="text-left space-y-4 mb-8">
                {[
                  "Desafio das 1000 Palavras",
                  "Audiobook 1000 Palavras",
                  "Tradução e Pronúncia",
                  "Pagamento Único",
                  "Download Imediato",
                  "Acesso Vitalício"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-[#15803d] text-lg">
                    <span className="text-2xl">✅</span> {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-0 py-6 border-t border-gray-200/50">
                <p className="text-xl line-through text-red-600 font-bold opacity-70">De R$99,90</p>
                <p className="text-xs font-bold uppercase text-[#00355b]/50 tracking-widest mb-1">por apenas</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <span className="text-3xl font-bold text-[#15803d]">R$</span>
                  <span className="text-6xl md:text-7xl font-bold text-[#15803d] tracking-tighter">10,00</span>
                </div>
              </div>

              <a href={checkoutLink} className="block w-full">
                <Button variant="checkout" showIcon={true} className="w-full py-6 animate-pulse-cta">
                  QUERO COMPRAR AGORA
                </Button>
              </a>
            </div>

            <Timer />

            <p className="text-sm font-bold opacity-60 flex items-center justify-center gap-2 mt-4">
              <svg className="w-5 h-5 text-[#15803d]" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/></svg>
              Compra 100% Segura • 7 Dias de Garantia
            </p>
          </div>
        </section>

        {/* QUEM SOU EU SECTION */}
        <section className="px-5 py-16 bg-brand border-t border-white/10">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="w-full max-w-[300px] flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/drcqck3r9/image/upload/v1769281008/EXPERT_c0sg3o.webp" 
                alt="Pedro Henrique" 
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/10"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 text-white text-center md:text-left">
              <h2 className="text-3xl font-bold uppercase tracking-tight">Quem sou eu?</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed opacity-90">
                <p>
                  Prazer, me chamo <span className="font-bold">Pedro Henrique</span>, fundador da GoFluência, com mais de 20 anos de experiência ensinando inglês autêntico para pessoas de todos os níveis e idades.
                </p>
                <p>
                  Ao longo dessa jornada, já ajudei milhares de estudantes que precisavam aprender inglês de forma acelerada, seja para uma viagem, ou para uma oportunidade de emprego. Por isso, desenvolvi o Desafio Das 1000 Palavras, onde consigo levar o inglês direto ao ponto, para que qualquer pessoa consiga aprender de forma leve, rápida e eficiente de qualquer lugar, mesmo sem tempo ou paciência para cursos chatos.
                </p>
                <p>
                  Minha meta sempre foi tornar o inglês mais prático, acessível e alcançável para todos. Hoje com uma comunidade com mais de 5.000 alunos, continuo com a mesma missão:
                </p>
                <p className="text-2xl italic font-bold">💭 Levar o inglês para todos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPÇÕES SECTION */}
        <section className="px-5 py-16 bg-white text-[#00355b]">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl font-bold uppercase tracking-tight">AGORA VOCÊ TEM DUAS OPÇÕES:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* OPÇÃO 1 */}
              <div className="p-8 bg-red-50 rounded-[2.5rem] border-2 border-red-100 flex flex-col justify-between shadow-lg">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-red-600 uppercase">OPÇÃO 1:<br/>CONTINUAR SEM NUNCA ENTENDER INGLÊS</h3>
                  <ul className="text-left space-y-4 mb-8">
                    {["Desistir toda vez que tenta aprender.", "Achar que inglês é difícil demais pra você.", "Ver os outros falando e se sentir incapaz.", "Depender de legenda e Google Tradutor pra tudo.", "Viver com a sensação de que “já passou da idade”."].map((item, i) => (
                      <li key={i} className="flex gap-3 font-medium text-[#00355b]/80"><span className="flex-shrink-0">❌</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* OPÇÃO 2 */}
              <div className="p-8 bg-green-50 rounded-[2.5rem] border-2 border-green-100 flex flex-col justify-between relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 bg-[#22c55e] text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase">Recomendado</div>
                <div>
                  <h3 className="text-xl font-bold mb-6 text-[#15803d] uppercase">OPÇÃO 2:<br/>APRENDER EM 21 DIAS O QUE MAIS IMPORTA</h3>
                  <ul className="text-left space-y-4 mb-8">
                    {[
                      "Entender mais de 80% do inglês falado em 7 dias.",
                      "Conseguir pronunciar inglês em 21 dias",
                      "Se sentir orgulhoso por finalmente conseguir.",
                      "Ouvir séries e músicas e realmente entender.",
                      "Se libertar do tradutor e das legendas.",
                      "Aprender de forma rápida e definitiva."
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 font-bold text-[#00355b]"><span className="flex-shrink-0 text-[#22c55e]">✅</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <a href={checkoutLink} className="w-full flex justify-center">
                <Button variant="checkout" showIcon={true} className="py-6 px-10 animate-pulse-cta">
                  QUERO COMPRAR AGORA
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION COMPLETO */}
        <section className="px-5 py-16 bg-brand max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center uppercase text-white mb-10 tracking-tight">DÚVIDAS FREQUENTES:</h2>
          <div className="space-y-4">
            <FAQItem question="Preciso estudar muito tempo por dia pra ter resultado?">
              Não! Bastam 10 a 15 minutos por dia ouvindo o áudio e lendo o material. O segredo não é o tempo, é o foco nas palavras certas. Você aprende mais em poucos minutos do que em horas de aulas tradicionais.
            </FAQItem>
            <FAQItem question="Esse desafio funciona mesmo pra quem nunca estudou inglês?">
              Sim! na verdade, ele foi feito exatamente pra quem já tentou e não conseguiu. Você não precisa saber nada: o material parte do zero e te mostra, passo a passo, as palavras que aparecem em 80% das conversas reais em inglês.
            </FAQItem>
            <FAQItem question="É indicado pra qualquer idade?">
              Sim! Temos alunos de 12 até 70 anos. O segredo não é idade, é método. E esse funciona pra qualquer pessoa que queira entender o essencial do inglês de forma simples e natural.
            </FAQItem>
            <FAQItem question="Até quando vai essa promoção?">
              Essa é uma oferta por tempo limitado. O valor atual é promocional e pode mudar a qualquer momento. Aproveite enquanto está menos de uma pizza.
            </FAQItem>
            <FAQItem question="Como eu recebo e acesso o material depois da compra?">
              Assim que o pagamento é confirmado, o acesso é liberado automaticamente em poucos segundos. Você recebe um e-mail com o link direto para baixar o e-book e ouvir o audiobook, tudo em um só lugar, simples e rápido. E pode ficar tranquilo: o material é seu pra sempre, pra baixar e usar no celular, computador ou tablet, até sem internet.
            </FAQItem>
            <FAQItem question="Posso usar mesmo sem internet?">
              Sim. Depois de baixar o material, ele é seu pra sempre, inclusive os áudios. Estude até em modo offline, no carro, no ônibus ou na caminhada.
            </FAQItem>
            <FAQItem question="Já tentei cursos e aplicativos e não consegui. Por que esse seria diferente?">
              Porque cursos e apps te ensinam palavras raras e regras inúteis. Aqui, você foca só nas 1000 palavras que realmente aparecem nas conversas reais. É por isso que o progresso vem rápido, e você finalmente sente que está entendendo.
            </FAQItem>
            <FAQItem question="Tem suporte se eu tiver dúvida?">
              Sim. Você pode entrar em contato pelo e-mail de suporte. Nossa equipe responde rápido e ajuda em qualquer dificuldade.
            </FAQItem>
            <FAQItem question="E se eu não entender nada mesmo assim?">
              Sem problema. Você tem 7 dias de garantia total. Se achar que não aprendeu, é só pedir reembolso. Ou seja, você testa sem risco nenhum.
            </FAQItem>
            <FAQItem question="Por que esse material custa tão barato?">
              Porque além da promoção, nossa missão é tornar o inglês acessível pra todos. Você está recebendo um método testado, completo e direto, por um valor simbólico pra democratizar o aprendizado. Mas o conteúdo vale facilmente 10x mais.
            </FAQItem>
          </div>
          <div className="text-center pt-10">
            <a href={checkoutLink} className="flex justify-center w-full">
              <Button variant="checkout" showIcon={true} className="animate-pulse-cta py-6 w-full max-w-md">
                QUERO COMPRAR AGORA
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 bg-black/40 text-center text-[10px] opacity-40 text-white">
        <p>© {new Date().getFullYear()} GoFluência - Todos os direitos reservados.</p>
        <p className="mt-2">O aprendizado de idiomas depende do esforço individual e consistência.</p>
      </footer>
    </div>
  );
};

export default App;
