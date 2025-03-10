<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button, Card } from 'primevue';
import DeferredContent from 'primevue/deferredcontent';

const visibleRight = ref(false);

const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};

const scrollToPlans = () => {
  visibleRight.value = false; // Corrigido, sem o ref()

  const plansSection = document.getElementById('plans');
  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToFaq = () => {
  visibleRight.value = false; // Corrigido, sem o ref()

  const faqSection = document.getElementById('faq');
  if (faqSection) {
    faqSection.scrollIntoView({ behavior: 'smooth',  });
  }
}


const features = [
  { title: 'Análises em Tempo Real', description: 'Rastreie seus investimentos com dados e insights em tempo real através de IA.', icon: 'pi pi-chart-line' },
  { title: 'Análise Preditiva', description: 'Sugestões personalizadas para balancear seu portfólio automaticamente.', icon: 'pi pi-search' },
  { title: 'Multi-moedas & Cripto', description: 'Suporte para mais de 100 moedas fiduciárias e 2000+ criptomoedas.', icon: 'pi pi-users' },
  { title: 'Segurança Blockchain', description: 'Acesso exclusivo para investidores profissionais.', icon: 'pi pi-lock' },
];

const logos = [
  { src: 'https://www.xpinc.com/wp-content/uploads/sites/6/2022/06/XP-Investimentos-Bolacha-Negativo-e1642465746868.png', alt: 'XP Investimentos' },
  { src: 'https://images.sftcdn.net/images/t_app-icon-m/p/2f156baa-076c-4f54-83bb-10bb85931b9d/3963270423/c6-bank-logo', alt: 'C6 Bank' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ita%C3%BA_Unibanco_logo_2023.svg/1200px-Ita%C3%BA_Unibanco_logo_2023.svg.png', alt: 'Itau Unibanco' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nubank_logo_2021.svg/2560px-Nubank_logo_2021.svg.png', alt: 'Nubank' },
  { src: 'https://logodownload.org/wp-content/uploads/2018/09/bradesco-logo-novo-2018.png', alt: 'Bradesco' }
];

const testimonials = [
  { name: 'John Doe', position: 'Investidor', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'O FinTrack transformou completamente a maneira como eu gerencio meus investimentos.' },
  { name: 'Jane Smith', position: 'Empreendedora', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'As informações em tempo real são inestimáveis. Não consigo imaginar investir sem elas.' },
  { name: 'Alice Johnson', position: 'Consultora', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'Fácil de usar. Altamente recomendada para quem leva a sério os investimentos.' }
];
</script>

<template>
  <div class="min-h-screen ">
    <!-- Header -->
    <header>
      <div
        class="container mx-auto flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-3">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-md bg-[#FF4C00] text-white font-bold">
            FT
          </div>
          <span class="text-xl font-semibold text-[#FF4C00]">FinTrack</span>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a
            href="#index"
            class="text-sm cursor-pointer font-medium hover:text-[#FF4C00]">
            Inicio
          </a>
          <a
            @click="scrollToPlans"
            class="text-sm font-medium cursor-pointer hover:text-[#FF4C00]">
            Planos
          </a>
          <a
            @click="scrollToFaq"
            class="text-sm font-medium cursor-pointer hover:text-[#FF4C00]">
            Dúvidas
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <router-link
            to="/login"
            @click="navigateTo('/login')"
            class="hidden md:block text-sm font-medium hover:text-[#FF4C00]">
            Entrar
          </router-link>
          <Button
            label="Criar conta"
            class="!bg-[#FF4C00] !text-white !border-transparent !hover:bg-[#FF4C00]"
            size="small"
            @click="navigateTo('/signup')" />
          <Button
            icon="pi pi-bars"
            class="p-button-text p-button-rounded !text-[#FF4C00] !bg-transparent block md:!hidden"
            @click="visibleRight = true" />
        </div>
      </div>
    </header>

    <Drawer v-model:visible="visibleRight" header="Menu" position="right">
      <div class="flex flex-col space-y-4 p-4">
        <a
          href="#index"
          class="text-lg font-medium text-white hover:text-[#FF4C00]">
          Inicio
        </a>
        <a
          href="#plans"
          @click="scrollToPlans"
          class="text-lg font-medium text-white hover:text-[#FF4C00]">
          Planos
        </a>
        <a
          href="#faq"
          @click="scrollToFaq"
          class="text-lg font-medium text-white hover:text-[#FF4C00]">
          Dúvidas
        </a>
      </div>
    </Drawer>

    <main>
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-r from-[#0D0D0D] to-[#2b2b2b] py-16 md:py-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1
                class="text-4xl md:text-5xl text-center font-bold  leading-tight mb-6">
                Acompanhe seus Investimentos
                <span
                  class="bg-gradient-to-r from-[#FF4C00] via-[#ff743d] to-[#ffb89d] bg-clip-text text-transparent">
                  de Forma Inteligente
                </span>
              </h1>
              <p class="text-xl font-regular text-center text-gray-400 mb-8">
                Rastreie, analise e otimize seu portfólio de investimentos com
                precisão. Tenha uma IA exclusiva para suas necessidades, tome
                decisões baseadas em dados e alcance seus objetivos financeiros.
              </p>
              <div class="flex sm:flex-row gap-4 w-full">
                <Button
                  label="Começe agora!"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  class="w-full !bg-[#FF4C00] !text-white !border-transparent !hover:bg-[#FF4C00]"
                  size="small"
                  @click="navigateTo('/signup')" />
                <Button
                  label="Saiba mais"
                  iconPos="left"
                  class="p-button-outlined w-full !border-[#FF4C00] !bg-transparent !text-[#FF4C00]"
                  size="large" />
              </div>
              <div class="mt-8 gap-4 flex items-center">
                <div class="flex -space-x-2">
                  <DeferredContent class="flex -space-x-2" @load="onImageLoad">
                    <img
                      v-for="i in 4"
                      :key="i"
                      src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                      alt="User avatar"
                      class="w-10 h-10 rounded-full border-2 border-transparent" />
                  </DeferredContent>
                </div>
                <div class="">
                  <div class="flex items-center">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="pi pi-star-fill text-yellow-400 text-sm pb-1"></i>
                  </div>
                  <p class="text-sm text-gray-400">
                    Mais de 2.000 usuários satisfeitos
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <DeferredContent @load="onImageLoad">
                <img
                  src="/dashboardphoto.png"
                  alt="Dashboard preview"
                  class="rounded-lg shadow-xl" />
              </DeferredContent>
            </div>
          </div>
        </div>
      </section>

      <!-- Logos Section -->
      <section class="py-16 md:py-24 ">
        <div class="container mx-auto px-4">
          <p
            class="text-center text-sm font-medium text-gray-400 uppercase mb-8">
            Usado por pessoas das maiores empresas do continente!
          </p>
          <div
            class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div
              v-for="logo in logos"
              :key="logo.src"
              class="w-20 h-20 md:w-24 md:h-24">
              <img
                class="w-full h-full object-contain"
                :class="logo.alt === 'C6 Bank' ? 'rounded-lg' : ''"
                :src="logo.src"
                :alt="logo.alt" />
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="how-it-works" class="">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Tecnologia que
              <span
                class="bg-gradient-to-r from-[#FF4C00] via-[#ff6021] to-[#ff7c48] bg-clip-text text-transparent">
                transforma
              </span>
              suas finanças.
            </h2>
            <p class="text-xl text-gray-400">
              Nossa plataforma utiliza IA e análises avançadas para ajudar você
              a rastrear, analisar e otimizar seus investimentos.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              v-for="feature in features"
              :key="feature.title"
              class=" border !border-[#FF4C00] !bg-[#FF4C00]">
              <template #header>
                <div class="p-4 !pb-2">
                  <div
                    class="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4">
                    <i :class="feature.icon" class="text-[#ff6021] text-xl"></i>
                  </div>
                  <h3 class="text-xl font-semibold">
                    {{ feature.title }}
                  </h3>
                </div>
              </template>
              <template #content>
                <p class="">{{ feature.description }}</p>
              </template>
            </Card>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 md:py-24 ">
        <div class="container mx-auto px-4 py-16 md:py-24">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold  mb-4 px-1">
              O que nossos
              <span
                class="bg-gradient-to-r from-[#FF4C00] via-[#ff6021] to-[#ff7c48]  bg-clip-text text-transparent">
                primeiros usuários estão dizendo.
              </span>
            </h2>
            <p class="text-xl text-gray-400">
              Não acredite apenas na nossa palavra — ouça alguns de nossos
              incríveis clientes.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            <Card
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="">
              <template #content>
                <div class="flex flex-col gap-4 justify-between">
                  <div class="flex">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="pi pi-star-fill text-yellow-400 text-sm"></i>
                  </div>
                  <p class="text-lg text-gray-200 mb-6">
                    {{ testimonial.quote }}
                  </p>
                  <div class="flex items-center gap-4">
                    <DeferredContent @load="onImageLoad">
                      <img
                        :src="testimonial.avatar"
                        alt="Testimonial avatar"
                        class="w-12 h-12 rounded-full" />
                    </DeferredContent>
                    <div>
                      <p class="font-semibold text-gray-200">
                        {{ testimonial.name }}
                      </p>
                      <p class="text-gray-400">{{ testimonial.position }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <!-- Plans Section -->
        <div id="plans" class="container mx-auto px-4 py-16 md:py-24">
          <div class=" pb-8">
            <h1
              class="text-3xl md:text-4xl font-bold text-center !text-white mb-4">
              Planos para todos os tipos de perfis
            </h1>
            <p class="text-center !text-white">
              <span
                class="font-bold bg-gradient-to-r from-[#FF4C00] via-[#ff6021] to-[#ff7c48] bg-clip-text text-transparent">
                Sem surpresas e sem taxas
              </span>
              adicionais no final do mês. Escolha o plano que se adapte ao seu
              estilo financeiro e
              <span
                class="font-bold bg-gradient-to-r from-[#FF4C00] via-[#ff6021] to-[#ff7c48] bg-clip-text text-transparent">
                transforme suas finanças.
              </span>
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto  ">
            <div
              class="card flex flex-col justify-between p-4 rounded-lg !bg-[#FF4C00]">
              <div class="">
                <h2 class="text-2xl md:text-4xl font-bold mb-2">Starter</h2>
                <p class=" pb-4 pt-2">Para investidores Iniciantes</p>
                <div class="flex flex-col gap-2 ">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>Dashboard</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>5 Ativos</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>Atualização diaria</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="pt-8 text-3xl text-center">Gratuito</p>
                <div
                  class="flex justify-center items-center mx-auto w-full mt-2">
                  <Button
                    class="w-full !text-white !bg-transparent !border-2 !border-[#ef8456]"
                    label="Começar Agora!"
                    variant="outlined" />
                </div>
              </div>
            </div>
            <div
              class="flex flex-col justify-between p-4 rounded-lg !bg-[#FF4C00]">
              <div>
                <h2 class="text-4xl !text-white md:text-4xl font-bold mb-2">
                  Pro
                </h2>
                <p
                  class="px-4 py-2 bg-green-600 text-white text-center rounded-full inline-block text-md">
                  Mais vendido!
                </p>
                <p class=" pb-4 pt-2">Para investidores ativos</p>
              </div>
              <div class="flex flex-col gap-2 ">
                <div class="flex items-center gap-2">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <p>IA Ilimitada</p>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <p>Dashboard Completo</p>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <p>ativos ilimitados</p>
                </div>
                <div class="flex items-center gap-2">
                  <i class="pi pi-check-circle text-green-600"></i>
                  <p>Atualização em tempo real</p>
                </div>
              </div>
              <div>
                <p class="opacity-50 text-center pt-8">12x</p>
                <p class=" text-3xl text-center">R$29,90</p>
                <div
                  class="flex justify-center items-center mx-auto w-full mt-4">
                  <Button
                    class="w-full !bg-[#ff4d00] !text-white"
                    label="Começar Agora!" />
                </div>
              </div>
            </div>
            <div
              class="card p-4 rounded-lg !bg-[#FF4C00] flex flex-col justify-between">
              <div class="flex flex-col justify-between">
                <div>
                  <h2
                    class="text-4xl text-green-600 md:text-4xl font-bold mb-2">
                    Premium
                  </h2>
                  <p class=" pb-4 pt-2">Para investidores ativos</p>
                </div>
                <div class="flex flex-col gap-2 ">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>IA Ilimitada</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>Dashboard Completo</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>ativos ilimitados</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-green-600"></i>
                    <p>Atualização em tempo real</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="opacity-50 text-center">12x</p>
                <p class="text-3xl text-center">R$59,90</p>
                <div
                  class="flex justify-center items-center mx-auto w-full mt-4">
                  <Button
                    class="w-full !bg-[#ff4d00] !text-white"
                    label="Começar Agora!" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div id="faq" class="container mx-auto px-8 pb-4 pt-0 py-16 md:py-24">
          <h1 class="text-center text-3xl  font-bold py-4 mb-8">FAQ</h1>
          <div class="demo-collapse">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item
                title="O que é o Sistema Financeiro Inteligente?"
                name="1">
                <div>
                  O Sistema Financeiro Inteligente é uma plataforma que permite
                  aos usuários consolidarem todas as informações financeiras em
                  um único lugar. Ele exibe detalhes sobre investimentos, saldo
                  bancário, criptomoedas e muito mais, oferecendo uma visão
                  completa do seu portfólio financeiro.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Como funciona o dashboard?" name="2">
                <div>
                  O dashboard é a tela principal da plataforma, onde você pode
                  visualizar:
                </div>
                <div>Tabela com suas ações e valores totais investidos.</div>
                <div>
                  - Cards informativos sobre o retorno do seu portfólio.
                </div>
                <div>- Análises e insights sobre suas finanças.</div>
              </el-collapse-item>
              <el-collapse-item
                title="O que é o conselheiro de finanças com IA?"
                name="3">
                <div>
                  Nosso sistema conta com um agente de Inteligência Artificial
                  que atua como um gestor financeiro pessoal. Ele pode fornecer:
                </div>
                <div>- Sugestões para otimizar seus investimentos.</div>
                <div>- Análises de risco e oportunidades.</div>
                <div>
                  - Recomendações personalizadas com base no seu perfil.
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="Como funciona a seção de criptomoedas?"
                name="4">
                <div>
                  A seção de criptomoedas é dedicada exclusivamente ao mercado
                  cripto. Nela, você pode acompanhar:
                </div>
                <div>- O saldo do seu portfólio de criptomoedas.</div>
                <div>- Cotação em tempo real.</div>
                <div>- Tendências e análises do mercado cripto.</div>
              </el-collapse-item>
              <el-collapse-item title="Meus dados estao exposto??" name="5">
                <div>
                  Nao! Priorizamos a segurança dos seus dados utilizando
                  criptografia avançada e medidas de proteção para garantir a
                  privacidade das suas informações financeiras.
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="O sistema permite transações financeiras?"
                name="6">
                <div>
                  Atualmente, o sistema é focado em monitoramento e análise
                  financeira, não permitindo transações bancárias diretamente
                  pela plataforma.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Como posso acessar o sistema?" name="7">
                <div>
                  O sistema pode ser acessado via navegador web ou aplicativo
                  móvel, garantindo flexibilidade e facilidade de uso a qualquer
                  momento.
                </div>
              </el-collapse-item>
              <el-collapse-item title="Como posso obter suporte?" name="8">
                <div>
                  Se precisar de ajuda, nossa equipe de suporte está disponível
                  para auxiliar. Você pode entrar em contato através do chat
                  dentro da plataforma ou pelo e-mail de suporte.
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 gap-10">
          <div class="rounded-lg bg-gray-800 p-4"></div>
          <div class="rounded-lg bg-gray-800 p-4"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  body {
    background-color: #0D0D0D !important;
  }

  /* Adicionando estilos personalizados */
#faq {
  background-color: #0D0D0D;
  color: white;
}

.demo-collapse {
  background-color: #0D0D0D;
  color: white;
}

.el-collapse {
  background-color: #0D0D0D;
  color: white;
}

.el-collapse-item__header {
  background-color: #0D0D0D;
  color: white;
  border-bottom: 1px solid white;
}

.el-collapse-item__content {
  background-color: #0D0D0D;
  color: white;
}

.el-collapse-item__arrow {
  color: white;
}

  /* Personaliza a largura do scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Personaliza a parte do "track" (fundo) do scrollbar */
::-webkit-scrollbar-track {
  background: black;  /* Cor do fundo */
  border-radius: 10px;
}

/* Personaliza a parte "thumb" (barra que você arrasta) do scrollbar */
::-webkit-scrollbar-thumb {
  background: #ff4d00;  /* Cor da barra */
  border-radius: 10px;
}
</style>
