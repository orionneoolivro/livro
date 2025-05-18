import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>NADA DE OI, SUMIDA</h1>
            <h2>O Guia Definitivo Para Flertar Com Autenticidade e Conquistar Quem Você Quiser</h2>
            <p className="subheadline">
              Descubra as técnicas comprovadas que já ajudaram mais de 10.000 pessoas a criarem conexões genuínas e deixarem para trás as abordagens genéricas que ninguém responde
            </p>
            <div className="cta-primary">
              <button className="btn-primary"><span style={{marginRight:8}}>⚡</span>QUERO DOMINAR A ARTE DO FLERTE AUTÊNTICO</button>
              <p className="urgency">Oferta por tempo limitado: 50% de desconto nas próximas 48 horas</p>
            </div>
          </div>
          <div className="hero-image">
            <img src="/ebook_mockup.png" alt="eBook Nada de Oi, Sumida" />
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2>O QUE VOCÊ VAI APRENDER NESTE EBOOK</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h3>Como abordar qualquer pessoa de forma natural e marcante</h3>
              <p>Descubra como iniciar conversas que realmente geram interesse e conexão, sem parecer forçado ou clichê.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔗</div>
              <h3>Como criar conversas que geram conexão e interesse real</h3>
              <p>Aprenda a ir além do superficial e construir laços genuínos, seja online ou presencialmente.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚫</div>
              <h3>Como evitar os erros clássicos que afastam oportunidades</h3>
              <p>Saiba o que não fazer e como se destacar entre milhões, sendo lembrado(a) de verdade.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌟</div>
              <h3>Como transformar insegurança em autoconfiança</h3>
              <p>Desenvolva sua segurança emocional e aprenda a se posicionar com autenticidade e leveza.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💬</div>
              <h3>Como flertar tanto online quanto na vida real</h3>
              <p>Domine as melhores estratégias para conquistar em qualquer ambiente, com ética e respeito.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h3>Como criar oportunidades e ser lembrado(a)</h3>
              <p>Aprenda a se destacar de verdade, criar oportunidades únicas e ser lembrado(a) por quem você realmente é.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-points">
        <div className="container">
          <h2>VOCÊ SE IDENTIFICA COM ALGUMA DESSAS SITUAÇÕES?</h2>
          <div className="pain-points-list">
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Manda mensagens que nunca são respondidas</p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Não sabe como iniciar uma conversa interessante</p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Fica nervoso(a) e trava na hora de falar com alguém que te atrai</p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Usa sempre as mesmas abordagens genéricas que todo mundo usa</p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Não sabe como manter o interesse da outra pessoa após o primeiro contato</p>
            </div>
            <div className="pain-item">
              <div className="pain-icon">❌</div>
              <p>Tem medo de parecer invasivo(a) ou desinteressante</p>
            </div>
          </div>
          <div className="cta-secondary">
            <button className="btn-primary">QUERO RESOLVER ESSES PROBLEMAS AGORA</button>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="author">
        <div className="container">
          <h2>QUEM É O AUTOR</h2>
          <div className="author-content">
            <div className="author-image">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ 
                  width: '100%', 
                  borderRadius: '10px', 
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  maxWidth: '350px',
                  margin: '0 auto'
                }}
              >
                <source src="/wellington.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="author-bio">
              <h3>Orion Neoo</h3>
              <p className="author-title">Especialista em comunicação interpessoal e relacionamentos</p>
              <p>
                Orion Neoo, 24 anos, especialista em comunicação interpessoal e relacionamentos. Já ajudou mais de 10.000 pessoas a transformarem sua vida social e amorosa através de técnicas comprovadas de flerte autêntico e comunicação eficaz.
              </p>
              <p>
                Formado em Psicologia e com especialização em Dinâmicas Sociais, Orion desenvolveu um método único que combina psicologia comportamental, linguagem corporal e técnicas de comunicação para criar conexões genuínas e duradouras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selo de prova social */}
      <div className="selo-prova-social">+10.000 pessoas impactadas</div>

      {/* Preview Section */}
      <section className="preview">
        <div className="container">
          <h2>DÊ UMA ESPIADA NO CONTEÚDO</h2>
          <div className="preview-content">
            <div className="preview-image">
              <img src="/ebook_preview.png" alt="Sumário do eBook" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="preview-text">
              <h3>9 CAPÍTULOS COMPLETOS COM TUDO QUE VOCÊ PRECISA</h3>
              <p>
                O eBook "Nada de Oi, Sumida" foi estruturado para guiar você passo a passo no desenvolvimento de habilidades de conquista autêntica e eficaz. Cada capítulo aborda um aspecto essencial da comunicação e conexão interpessoal.
              </p>
              <p>
                Desde as bases psicológicas da conquista até técnicas avançadas para diferentes contextos, você terá acesso a um conteúdo completo, prático e testado por milhares de pessoas.
              </p>
              <div className="cta-preview">
                <button className="btn-primary">QUERO ACESSO COMPLETO AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>O QUE DIZEM OS LEITORES</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Depois de meses mandando mensagens sem resposta, apliquei as técnicas do Wellington e consegui não só respostas, mas encontros reais! O capítulo sobre observação mudou completamente minha forma de abordar as pessoas."
              </p>
              <div className="testimonial-author">
                <img src="/testimonial1.png" alt="Mariana, 28 anos" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <h4>Mariana Silva</h4>
                  <p>28 anos, São Paulo</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Eu sempre travava nas conversas e não sabia como manter o interesse. Com as dicas do eBook, consegui desenvolver confiança e hoje consigo me comunicar de forma muito mais natural e autêntica."
              </p>
              <div className="testimonial-author">
                <img src="/testimonial2.png" alt="Rafael, 32 anos" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <h4>Rafael Mendes</h4>
                  <p>32 anos, Rio de Janeiro</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "As missões práticas do eBook foram transformadoras! Cada desafio me ajudou a sair da zona de conforto e hoje tenho muito mais facilidade para iniciar e manter conversas interessantes, tanto online quanto pessoalmente."
              </p>
              <div className="testimonial-author">
                <img src="/testimonial3.png" alt="Camila, 25 anos" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                <div>
                  <h4>Camila Oliveira</h4>
                  <p>25 anos, Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="whats-included">
        <div className="container">
          <h2>O QUE ESTÁ INCLUÍDO</h2>
          <div className="included-list">
            <div className="included-item">
              <div className="included-icon">📚</div>
              <div className="included-text">
                <h3>eBook completo com 9 capítulos</h3>
                <p>Mais de 50 páginas de conteúdo prático e transformador</p>
              </div>
            </div>
            <div className="included-item">
              <div className="included-icon">💬</div>
              <div className="included-text">
                <h3>Exemplos práticos e scripts prontos</h3>
                <p>Modelos de mensagens e abordagens que você pode adaptar e usar imediatamente</p>
              </div>
            </div>
            <div className="included-item">
              <div className="included-icon">🎯</div>
              <div className="included-text">
                <h3>Exercícios e missões práticas</h3>
                <p>Atividades para desenvolver suas habilidades de forma progressiva</p>
              </div>
            </div>
            <div className="included-item">
              <div className="included-icon">🔄</div>
              <div className="included-text">
                <h3>Acesso vitalício com atualizações</h3>
                <p>Receba todas as atualizações futuras sem custo adicional</p>
              </div>
            </div>
            <div className="included-item">
              <div className="included-icon">🎁</div>
              <div className="included-text">
                <h3>BÔNUS: Guia de flerte nas redes sociais</h3>
                <p>Estratégias específicas para Instagram, WhatsApp e outras plataformas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee">
        <div className="container">
          <h2>SEM RISCOS PARA VOCÊ</h2>
          <div className="guarantee-content">
            <div className="guarantee-image">
              <img src="/guarantee_badge.png" alt="Garantia de 30 dias" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="guarantee-text">
              <h3>GARANTIA DE SATISFAÇÃO DE 30 DIAS</h3>
              <p>
                Se por qualquer motivo você não ficar satisfeito com o conteúdo do eBook, basta enviar um e-mail dentro de 30 dias após a compra e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>
              <p>
                Estamos tão confiantes no poder transformador deste material que assumimos todo o risco. Você tem um mês inteiro para aplicar as técnicas e verificar os resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2>Pronto para Mudar o Jogo?</h2>
          <div className="contador-urgencia" id="contador-urgencia"></div>
          <div className="pricing-flex">
            <div className="bonus-list">
              <h3>BÔNUS EXCLUSIVOS</h3>
              <ul>
                <li>
                  <b>🎯 Prompt de IA Personalizado</b>
                  <br />
                  Sugestões inteligentes de locais, roupas, acessórios e mensagens personalizadas para cada situação.
                </li>
                <li>
                  <b>📅 Cronograma de 30 Dias</b>
                  <br />
                  Plano diário passo a passo para conquistar alguém em apenas 30 dias, com metas e objetivos claros.
                </li>
                <li>
                  <b>✅ Checklist do Encontro Perfeito</b>
                  <br />
                  Guia rápido para não esquecer nada importante antes do encontro, desde a preparação até o momento final.
                </li>
                <li>
                  <b>💬 Mensagens Assertivas</b>
                  <br />
                  Coleção de mensagens prontas e eficazes para diferentes situações, adaptáveis ao seu estilo.
                </li>
              </ul>
            </div>
            <div className="pricing-box">
              <div className="price-tag">
                <p className="original-price">De <span>R$97,00</span></p>
                <p className="current-price">Por apenas <span>R$47,00</span></p>
              </div>
              <div className="payment-options">
                <p>Pagamento único - Sem mensalidades</p>
                <div className="payment-methods">
                  <span>💳 Cartão de crédito</span>
                  <span>💰 PIX</span>
                  <span>📄 Boleto</span>
                </div>
              </div>
              <div className="scarcity">
                <p>⏰ Oferta válida até 20/05/2025</p>
                <p>🔥 Apenas 50 vagas disponíveis neste valor</p>
              </div>
              <div className="cta-pricing">
                <button className="btn-primary"><span style={{marginRight:8}}>⚡</span>QUERO TRANSFORMAR MINHA VIDA AMOROSA AGORA</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>ESTÁ PRONTO PARA TRANSFORMAR SUA VIDA AMOROSA?</h2>
          <p>
            Não perca mais tempo com abordagens que não funcionam. Aprenda técnicas comprovadas que já ajudaram milhares de pessoas a criarem conexões genuínas e conquistarem quem desejam.
          </p>
          <div className="final-form">
            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu melhor e-mail" />
            <button className="btn-primary">QUERO DOMINAR A ARTE DO FLERTE AGORA</button>
          </div>
          <div className="guarantee-reminder">
            <p>🔒 Compra 100% segura</p>
            <p>✅ Garantia de 30 dias ou seu dinheiro de volta</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>PERGUNTAS FREQUENTES</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>O eBook funciona tanto para homens quanto para mulheres?</h3>
              <p>
                Sim! O conteúdo foi desenvolvido para ser útil independentemente do gênero. Há capítulos específicos com dicas para homens e mulheres, além de estratégias universais que funcionam para todos.
              </p>
            </div>
            <div className="faq-item">
              <h3>Quanto tempo leva para ver resultados?</h3>
              <p>
                Muitos leitores relatam melhorias já nas primeiras tentativas após aplicar as técnicas. No entanto, como qualquer habilidade, o flerte eficaz requer prática. Com dedicação às missões propostas, você pode esperar resultados significativos em 2-4 semanas.
              </p>
            </div>
            <div className="faq-item">
              <h3>Como recebo o eBook após a compra?</h3>
              <p>
                Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do eBook em formato PDF, que pode ser lido em qualquer dispositivo (computador, tablet ou smartphone).
              </p>
            </div>
            <div className="faq-item">
              <h3>Preciso ter experiência prévia?</h3>
              <p>
                Não! O eBook foi estruturado para atender desde iniciantes completos até pessoas que já têm alguma experiência mas querem melhorar suas habilidades. O conteúdo é apresentado de forma progressiva e acessível.
              </p>
            </div>
            <div className="faq-item">
              <h3>E se eu não gostar do conteúdo?</h3>
              <p>
                Oferecemos garantia de satisfação de 30 dias. Se você não ficar satisfeito por qualquer motivo, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem questionamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Nada de Oi, Sumida. Todos os direitos reservados.
          </div>
          <div className="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="mailto:contato@vendalivro.com">Contato</a>
          </div>
        </div>
        <div className="footer-selos">
          <img src="/ssl.png" alt="Site Seguro" style={{ height: '32px', filter: 'drop-shadow(0 0 8px #ff4c00)' }} />
          <img src="/pagseguro.png" alt="PagSeguro" style={{ height: '32px', filter: 'drop-shadow(0 0 8px #ff4c00)' }} />
          <img src="/pix.png" alt="PIX" style={{ height: '32px', filter: 'drop-shadow(0 0 8px #ff4c00)' }} />
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <button className="btn-primary sticky-btn" onClick={() => {
          const el = document.querySelector('.pricing');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
          💳 Quero garantir meu desconto agora
        </button>
        <div className="sticky-icons">
          <span title="Cartão de crédito">💳</span>
          <span title="PIX">💰</span>
          <span title="Boleto">📄</span>
        </div>
      </div>

      {/* Adicionar script do contador de urgência */}
      <script dangerouslySetInnerHTML={{__html:`
        (function(){
          function startCountdown() {
            var end = new Date();
            end.setHours(23,59,59,999);
            var x = setInterval(function() {
              var now = new Date().getTime();
              var distance = end - now;
              var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var s = Math.floor((distance % (1000 * 60)) / 1000);
              document.getElementById('contador-urgencia').innerHTML = 'Oferta expira em: ' + h + 'h ' + m + 'm ' + s + 's';
              if (distance < 0) {
                clearInterval(x);
                document.getElementById('contador-urgencia').innerHTML = 'Oferta encerrada!';
              }
            }, 1000);
          }
          if (typeof window !== 'undefined') startCountdown();
        })();
      `}} />
    </div>
  );
};

export default App;
