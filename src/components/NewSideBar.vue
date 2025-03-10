<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Activity,
  BarChart3,
  Bitcoin,
  Building,
  CreditCard,
  DollarSign,
  Home,
  LogOut,
  Menu,
  PieChart,
  Settings,
  Sparkles,
  User,
  Wallet,
  X,
} from 'lucide-vue-next'
import {returnPercentage} from '@/service/useStock';

// Props
const props = defineProps<{
  className?: string
}>()

// Estados reativos
const isMobile = ref(false)
const isSidebarOpen = ref(false)
const activeItem = ref('dashboard')

// Itens de navegação
const navItems = [
  { icon: Home, label: 'Dashboard', href: '#', id: 'dashboard' },
  { icon: Wallet, label: 'Carteira', href: '#', id: 'portfolio' },
  { icon: PieChart, label: 'Investimentos', href: '#', id: 'investments' },
  { icon: Activity, label: 'Desempenho', href: '#', id: 'performance' },
  { icon: BarChart3, label: 'Relatórios', href: '#', id: 'reports' },
]

const secondaryNavItems = [
  { icon: Settings, label: 'Configurações', href: '#', id: 'settings' },
  { icon: User, label: 'Perfil', href: '#', id: 'profile' },
]



const assetItems = [
  { icon: Building, label: 'Ações', href: '#', id: 'stocks', badge: `${returnPercentage}%` },
  { icon: CreditCard, label: 'Renda Fixa', href: '#', id: 'bonds', badge: '+12.1%' },
  { icon: Bitcoin, label: 'Criptomoedas', href: '#', id: 'crypto', badge: '-5.2%' },
  { icon: DollarSign, label: 'Reserva', href: '#', id: 'emergency', badge: '+10.2%' },
]

// Verificar tamanho da tela
const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

// Event listeners
onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile)
})

// Manipuladores
const handleNavItemClick = (id: string) => {
  activeItem.value = id
  if (isMobile.value) {
    isSidebarOpen.value = false
  }
}
</script>

<template>
  <!-- Mobile trigger -->
  <Button
    v-if="isMobile"
    class="fixed left-4 top-3 z-50 lg:hidden"
    @click="isSidebarOpen = true">
    <Menu class="h-5 w-5" />
  </Button>

  <!-- Mobile sidebar -->
  <div v-if="isMobile">
    <div
      v-show="isSidebarOpen"
      class="fixed inset-0 z-40 backdrop-blur-sm"
      @click="isSidebarOpen = false" />

    <transition name="slide">
      <div
        v-if="isSidebarOpen"
        class="fixed inset-y-0 left-0 z-50 w-72 border-r !bg-[#18337e] border-border/50 p-0 backdrop-blur-md">
        <div class="flex h-full flex-col !bg-[#18337e]">
          <!-- Cabeçalho -->
          <div
            class="flex h-16 items-center justify-between px-4 !bg-[#18337e]">
            <div class="flex items-center gap-2">
              <div
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles class="h-4 w-4 text-primary-foreground" />
              </div>
              <span class="text-xl font-bold tracking-tight">finTrack</span>
            </div>
            <Button v-if="isMobile" @click="isSidebarOpen = false">
              <X class="h-5 w-5" />
            </Button>
          </div>

          <!-- Perfil do usuário -->
          <div class="mb-6 mt-2 px-4">
            <div
              class="rounded-xl bg-gradient-to-br from-muted/80 to-card/50 p-4 backdrop-blur-sm">
              <div class="flex items-center gap-3">
                <Avatar class="h-10 w-10 border-2 border-background">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>FT</AvatarFallback>
                </Avatar>
                <div class="flex-1 overflow-hidden">
                  <p class="truncate text-sm font-medium">José Gomes</p>
                  <p class="truncate text-xs text-muted-foreground">
                    jose@example.com
                  </p>
                </div>
              </div>
              <div
                class="mt-3 flex items-center justify-between rounded-lg bg-background/50 p-2 text-xs">
                <span class="text-muted-foreground">Patrimônio Total</span>
                <span class="font-medium">R$ 100.000,00</span>
              </div>
            </div>
          </div>

          <!-- Navegação -->
          <div class="flex-1 overflow-auto px-3">
            <div class="space-y-1">
              <a
                v-for="item in navItems"
                :key="item.id"
                :href="item.href"
                :class="[
                  'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
                  activeItem === item.id
                    ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                ]"
                @click="handleNavItemClick(item.id)">
                <div
                  :class="[
                    'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                    activeItem === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
                  ]">
                  <component :is="item.icon" class="h-4 w-4" />
                </div>
                <span>{{ item.label }}</span>
              </a>
            </div>

            <div class="my-4">
              <h3 class="px-3 text-xs font-medium text-muted-foreground">
                ATIVOS
              </h3>
              <div class="mt-2 space-y-1">
                <a
                  v-for="item in assetItems"
                  :key="item.id"
                  :href="item.href"
                  :class="[
                    'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
                    activeItem === item.id
                      ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                  ]"
                  @click="handleNavItemClick(item.id)">
                  <div
                    :class="[
                      'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                      activeItem === item.id
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                        : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
                    ]">
                    <component :is="item.icon" class="h-4 w-4" />
                  </div>
                  <span>{{ item.label }}</span>
                  <Badge v-if="item.badge" variant="secondary" class="ml-auto">
                    {{ item.badge }}
                  </Badge>
                </a>
              </div>
            </div>
          </div>

          <!-- Rodapé -->
          <div class="mt-auto border-t border-border/40 px-3 py-4">
            <div class="space-y-1">
              <a
                v-for="item in secondaryNavItems"
                :key="item.id"
                :href="item.href"
                :class="[
                  'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
                  activeItem === item.id
                    ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                ]"
                @click="handleNavItemClick(item.id)">
                <div
                  :class="[
                    'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                    activeItem === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
                  ]">
                  <component :is="item.icon" class="h-4 w-4" />
                </div>
                <span>{{ item.label }}</span>
              </a>
              <Button
                class="w-full justify-start text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
                <div
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <LogOut class="h-4 w-4" />
                </div>
                <span class="ml-3 text-sm font-medium">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <!-- Desktop sidebar -->
  <div
    v-else
    :class="[
      'fixed inset-y-0 left-0 z-20 hidden w-72 flex-col border-r border-border/50 bg-gradient-to-b from-background to-background/95 backdrop-blur-md lg:flex',
      className,
    ]">
    <div class="flex h-full flex-col! !bg-white text-black">
      <!-- Cabeçalho -->
      <div class="flex h-16 items-center justify-between px-4">
        <div class="flex items-center gap-2">
          <div
            class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles class="h-4 w-4 text-primary-foreground" />
          </div>
          <span class="text-xl font-bold tracking-tight">finTrack</span>
        </div>
      </div>

      <!-- Perfil do usuário -->
      <div class="mb-6 mt-2 px-4">
        <div
          class="rounded-xl bg-gradient-to-br from-muted/80 to-card/50 p-4 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <Avatar class="h-10 w-10 border-2 border-background">
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>FT</AvatarFallback>
            </Avatar>
            <div class="flex-1 overflow-hidden">
              <p class="truncate text-sm font-medium">José Gomes</p>
              <p class="truncate text-xs text-muted-foreground">
                jose@example.com
              </p>
            </div>
          </div>
          <div
            class="mt-3 flex items-center justify-between rounded-lg bg-background/50 p-2 text-xs">
            <span class="text-muted-foreground">Patrimônio Total</span>
            <span class="font-medium">R$ 100.000,00</span>
          </div>
        </div>
      </div>

      <!-- Navegação -->
      <div class="flex-1 overflow-auto px-3">
        <div class="space-y-1">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            :class="[
              'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
              activeItem === item.id
                ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
            ]"
            @click="handleNavItemClick(item.id)">
            <div
              :class="[
                'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                activeItem === item.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
              ]">
              <component :is="item.icon" class="h-4 w-4" />
            </div>
            <span>{{ item.label }}</span>
          </a>
        </div>

        <div class="my-4">
          <h3 class="px-3 text-xs font-medium text-muted-foreground">ATIVOS</h3>
          <div class="mt-2 space-y-1">
            <a
              v-for="item in assetItems"
              :key="item.id"
              :href="item.href"
              :class="[
                'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
                activeItem === item.id
                  ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
              ]"
              @click="handleNavItemClick(item.id)">
              <div
                :class="[
                  'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                  activeItem === item.id
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
                ]">
                <component :is="item.icon" class="h-4 w-4" />
              </div>
              <span>{{ item.label }}</span>
              <Badge v-if="item.badge" variant="secondary" class="ml-auto">
                {{ item.badge }}
              </Badge>
            </a>
          </div>
        </div>
      </div>

      <!-- Rodapé -->
      <div class="mt-auto border-t border-border/40 px-3 py-4">
        <div class="space-y-1">
          <a
            v-for="item in secondaryNavItems"
            :key="item.id"
            :href="item.href"
            :class="[
              'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out',
              activeItem === item.id
                ? 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary'
                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
            ]"
            @click="handleNavItemClick(item.id)">
            <div
              :class="[
                'flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200',
                activeItem === item.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-muted text-muted-foreground group-hover:bg-background group-hover:text-foreground',
              ]">
              <component :is="item.icon" class="h-4 w-4" />
            </div>
            <span>{{ item.label }}</span>
          </a>
          <Button
            class="w-full justify-start text-muted-foreground hover:bg-destructive/10 hover:text-destructive">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <LogOut class="h-4 w-4" />
            </div>
            <span class="ml-3 text-sm font-medium">Sair</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
