<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button, Dialog, Divider, Card } from 'primevue';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';


const mobileMenuOpen = ref(false);
const router = useRouter();

const navigateTo = (path) => {
  router.push(path);
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const features = [
  { title: 'Real-time Analytics', description: 'Track your investments with real-time data and insights by IA.', icon: 'pi pi-chart-line' },
  { title: 'Análise Preditiva', description: 'Sugestões personalizadas para balancear seu portfólio automaticamente.', icon: 'pi pi-search' },
  { title: 'Multi-moedas & Cripto', description: 'Suporte para mais de 100 moedas fiduciárias e 2000+ criptomoedas.', icon: 'pi pi-users' },
  { title: 'Segurança Blockchain', description: 'Acesso exclusivo para investidores profissionais.', icon: 'pi pi-lock' },
];

const testimonials = [
  { name: 'John Doe', position: 'Investor', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'FinTrack has completely transformed the way I manage my investments.' },
  { name: 'Jane Smith', position: 'Entrepreneur', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'The real-time insights are invaluable. I couldn’t imagine investing without it.' },
  { name: 'Alice Johnson', position: 'Consultant', avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png', quote: 'Easy to use and very powerful. Highly recommended for anyone serious about investing.' }
];
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <header class="border-b bg-white">
      <div
        class="container mx-auto flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-3">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-bold">
            FT
          </div>
          <span class="text-xl font-semibold">FinTrack</span>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            class="text-sm font-medium text-gray-600 hover:text-blue-600">
            Features
          </a>
          <a
            href="#how-it-works"
            class="text-sm font-medium text-gray-600 hover:text-blue-600">
            How it works
          </a>
          <a
            href="#pricing"
            class="text-sm font-medium text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a
            href="#faq"
            class="text-sm font-medium text-gray-600 hover:text-blue-600">
            FAQ
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <router-link
            to="/login"
            class="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600">
            Sign in
          </router-link>
          <Button
            label="Get started"
            class="p-button-blue"
            size="small"
            @click="navigateTo('/signup')" />
          <Button
            icon="pi pi-bars"
            class="p-button-text p-button-rounded md:hidden"
            @click="mobileMenuOpen = true" />
        </div>
      </div>
    </header>

    <!-- Mobile menu -->
    <Dialog
      v-model:visible="mobileMenuOpen"
      modal
      header="Menu"
      :style="{ width: '90%', maxWidth: '300px' }">
      <div class="flex flex-col space-y-4">
        <a
          href="#features"
          class="text-base font-medium text-gray-600 hover:text-blue-600"
          @click="closeMobileMenu">
          Features
        </a>
        <a
          href="#how-it-works"
          class="text-base font-medium text-gray-600 hover:text-blue-600"
          @click="closeMobileMenu">
          How it works
        </a>
        <a
          href="#pricing"
          class="text-base font-medium text-gray-600 hover:text-blue-600"
          @click="closeMobileMenu">
          Pricing
        </a>
        <a
          href="#faq"
          class="text-base font-medium text-gray-600 hover:text-blue-600"
          @click="closeMobileMenu">
          FAQ
        </a>
        <Divider />
        <router-link
          to="/login"
          class="text-base font-medium text-gray-600 hover:text-blue-600"
          @click="closeMobileMenu">
          Sign in
        </router-link>
        <Button
          label="Get started"
          class="p-button-blue"
          @click="navigateTo('/signup')" />
      </div>
    </Dialog>

    <main>
      <!-- Hero Section -->
      <section
        class="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1
                class="text-4xl md:text-5xl text-center font-bold text-gray-900 leading-tight mb-6">
                Smart Investment Tracking for the
                <span
                  class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Modern Investor
                </span>
              </h1>
              <p class="text-xl font-regular text-center text-gray-500 mb-8">
                Track, analyze, and optimize your investment portfolio with
                precision. Have an AI that will be unique according to your
                needs, make data-driven decisions and achieve your financial
                goals.
              </p>
              <div class="flex sm:flex-row gap-4 w-full">
                <Button
                  label="Start for free"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  class="p-button-blue w-full"
                  size="small"
                  @click="navigateTo('/signup')" />
                <Button
                  label="Learn more"
                  iconPos="left"
                  class="p-button-outlined p-button-blue w-full"
                  size="large" />
              </div>
              <div class="mt-8 flex items-center">
                <div class="flex -space-x-2">
                  <img
                    v-for="i in 4"
                    :key="i"
                    src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                    alt="User avatar"
                    class="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div class="ml-4">
                  <div class="flex items-center">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="pi pi-star-fill text-yellow-400 text-sm"></i>
                  </div>
                  <p class="text-sm text-gray-600">
                    From over 2,000+ happy users
                  </p>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <img
                src="https://placehold.co/600x500"
                alt="Dashboard preview"
                class="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <!-- Logos Section -->
      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <p
            class="text-center text-sm font-medium text-gray-500 uppercase mb-8">
            Trusted by leading companies
          </p>
          <div
            class="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div
              v-for="i in 5"
              :key="i"
              class="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology that
              <span
                class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                transforms
              </span>
              your finances.
            </h2>
            <p class="text-xl text-gray-600">
              Our platform uses AI and advanced analytics to help you track,
              analyze, and optimize your investments.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              v-for="feature in features"
              :key="feature.title"
              class="border border-gray-200 !bg-gray-200">
              <template #header>
                <div class="p-4">
                  <div
                    class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <i :class="feature.icon" class="text-blue-600 text-xl"></i>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    {{ feature.title }}
                  </h3>
                </div>
              </template>
              <template #content>
                <p class="text-gray-600">{{ feature.description }}</p>
              </template>
            </Card>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16 md:py-24 bg-white">
        <div class="container mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-1">
              What our
              <span
                class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                early adopters
              </span>
              are saying.
            </h2>
            <p class="text-xl text-gray-600">
              Don't just take our word for it — hear from some of our amazing
              customers
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="border border-gray-200">
              <template #content>
                <div class="mb-6">
                  <div class="flex">
                    <i
                      v-for="i in 5"
                      :key="i"
                      class="pi pi-star-fill text-yellow-400 text-sm"></i>
                  </div>
                  <p class="text-lg text-gray-600 mb-6">
                    {{ testimonial.quote }}
                  </p>
                  <div class="flex items-center gap-4">
                    <img
                      :src="testimonial.avatar"
                      alt="Testimonial avatar"
                      class="w-12 h-12 rounded-full" />
                    <div>
                      <p class="font-semibold text-gray-900">
                        {{ testimonial.name }}
                      </p>
                      <p class="text-gray-600">{{ testimonial.position }}</p>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <!-- Plans Section -->
        <div class="container mx-auto px-4 py-16">
          <div class="text-black pb-8">
            <h1
              class="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Planos para todos os tipos de perfis
            </h1>
            <p class="text-center">
              <span
                class="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sem surpresas e sem taxas
              </span>
              adicionais no final do mês. Escolha o plano que se adapte ao seu
              estilo financeiro e
              <span
                class="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                transforme suas finanças.
              </span>
            </p>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">
            <div class="card p-4 rounded-lg !bg-[#d7d7d7]">
              <div>
                <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                  Starter
                </h2>
                <p class="text-black pb-4 pt-2">Para investidores Iniciantes</p>
              </div>
              <div class="flex flex-col gap-2 text-black">
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
              <p class="py-2 text-3xl text-center">Gratuito</p>
              <div class="flex justify-center items-center mx-auto w-full mt-4">
                <Button
                  class="w-full !text-green-500 !bg-transparent !border-2 !border-green-500"
                  label="Começar Agora!"
                  variant="outlined" />
              </div>
            </div>
            <div class="card p-4 rounded-lg !bg-[#d7d7d7]">
              <div>
                <h2 class="text-4xl text-green-600 md:text-4xl font-bold mb-2">
                  Pro
                </h2>
                <p
                  class="px-4 py-2 bg-green-600 text-white text-center rounded-full inline-block text-md">
                  Mais vendido!
                </p>
                <p class="text-black pb-4 pt-2">Para investidores ativos</p>
              </div>
              <div class="flex flex-col gap-2 text-black">
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
              <p class="opacity-50 text-center">12x</p>
              <p class="py-2 text-3xl text-center">R$29,90</p>
              <div class="flex justify-center items-center mx-auto w-full mt-4">
                <Button class="w-full" label="Começar Agora!" />
              </div>
            </div>
            <div class="card p-4 rounded-lg !bg-[#d7d7d7]">
              <div>
                <h2 class="text-4xl text-green-600 md:text-4xl font-bold mb-2">
                  Premium
                </h2>
                <p
                  class="px-4 py-2 bg-green-600 text-white text-center rounded-full inline-block text-md">
                  Mais vendido!
                </p>
                <p class="text-black pb-4 pt-2">Para investidores ativos</p>
              </div>
              <div class="flex flex-col gap-2 text-black">
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
              <p class="opacity-50 text-center">12x</p>
              <p class="py-2 text-3xl text-center">R$59,90</p>
              <div class="flex justify-center items-center mx-auto w-full mt-4">
                <Button class="w-full" label="Começar Agora!" />
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="container mx-auto px-4 py-16">
          <div class="card text-black bg-[#7d7d7d] p-4 rounded-lg">
            <Accordion value="0" class="custom-accordion">
              <AccordionPanel value="0">
                <AccordionHeader class="p-3 rounded-lg border border-gray-400">
                  Header I
                </AccordionHeader>
                <AccordionContent class="p-3 rounded-lg">
                  <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader class="p-3 rounded-lg border border-gray-400">
                  Header II
                </AccordionHeader>
                <AccordionContent class="p-3 rounded-lg">
                  <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader class="p-3 rounded-lg border border-gray-400">
                  Header III
                </AccordionHeader>
                <AccordionContent class="p-3 rounded-lg">
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum.
                  </p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center text-white mb-8">
          <h3 class="text-xl font-semibold">FinTrack</h3>
          <p class="text-gray-400 text-sm">
            © 2025 FinTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.p-accordion-content {
  background-color: #ffffff !important;
  color: #000000 !important;
}

.p-accordion-content-content {
  background-color: #ffffff !important;
  color: #000000 !important;
}

:deep(.p-accordion-header) {
    background-color: #7d7d7d !important;
    color: black !important;
  }

  :deep(.p-accordion-content) {
    background-color: #7d7d7d !important;
    color: black !important;
  }
</style>
