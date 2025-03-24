<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Activity,
  BarChart3,
  Building,
  Home,
  LogOut,
  PieChart,
  Settings,
  Sparkles,
  User,
  Wallet,
  X,
} from 'lucide-vue-next'
import { returnPercentage, initStocks } from '@/service/useStock';
import { fetchCrypto, cryptoPercentageChange, startCryptoUpdates, stopCryptoUpdates } from '@/composobles/useCrypto';
const isMobile = ref(false)
const isSidebarOpen = ref(false)
const activeItem = ref('dashboard')
const btcPrice = ref<number | null>(null)
const cryptoPercentage = ref<number | null>(null)
const cryptoPercentageDay = ref<number | null>(null)
let updateInterval: number | null = null

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

const assetItems = computed(() => [
  {
    icon: Building,
    label: 'Ações',
    href: '#',
    id: 'stocks',
    badge: `${returnPercentage.value}%`
  },
])

const updateCryptoData = async () => {
  const data = await fetchCrypto()
  if (data) {
    btcPrice.value = parseFloat(data.lastPrice)
    cryptoPercentage.value = parseFloat(data.priceChangePercent)
  }
}

onMounted(async () => {
  cryptoPercentageDay.value = await cryptoPercentageChange()
  await updateCryptoData()
  startCryptoUpdates(updateCryptoData)
  initStocks()
})

onUnmounted(() => {
  stopCryptoUpdates()
})

const handleNavItemClick = (id: string) => {
  activeItem.value = id
  if (isMobile.value) {
    isSidebarOpen.value = false
  }
}
</script>

<template>
  <div
    class="fixed inset-y-0 left-0 z-20 w-72 flex flex-col bg-[#121212] text-gray-100 border-r border-gray-700">
    <div class="flex items-center justify-between p-4 border-b border-gray-700">
      <div class="flex items-center gap-2">
        <Sparkles class="h-5 w-5 text-yellow-400" />
        <span class="text-lg font-semibold">finTrack</span>
      </div>
      <button
        v-if="isMobile"
        @click="isSidebarOpen = false"
        class="text-gray-400 hover:text-gray-100">
        <X class="h-6 w-6" />
      </button>
    </div>

    <div class="flex-1 overflow-auto p-3">
      <nav>
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="flex items-center gap-3 p-2 rounded-md transition-colors duration-200"
          :class="activeItem === item.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'"
          @click="handleNavItemClick(item.id)">
          <component :is="item.icon" class="h-5 w-5" />
          <span>{{ item.label }}</span>
        </a>
      </nav>
      <div class="p-2 my-2 border-t border-b border-gray-700">
        <div class="flex-1 overflow-auto ">
          <div class="flex justify-center items-center gap-2">
            <div>
              <img src="@/assets/image/btc.webp" alt="btc" class="w-10 h-10" />
            </div>
            <span class="text-xl font-bold">
              {{ btcPrice?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || '0.00' }}
            </span>
            <span
              class="text-lg font-semibold"
              :class="(cryptoPercentage ?? 0) > 0 ? 'text-green-400' : 'text-red-400'">
              {{ cryptoPercentage?.toFixed(2) ?? 0 }}%
            </span>
          </div>
        </div>
      </div>
      <div class="mt-2  pt-3">
        <h3 class="px-2 text-xs font-semibold text-gray-500">Ativos</h3>
        <nav>
          <a
            v-for="item in assetItems"
            :key="item.id"
            :href="item.href"
            class="flex items-center gap-3 p-2 rounded-md transition-colors duration-200"
            :class="activeItem === item.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'"
            @click="handleNavItemClick(item.id)">
            <component :is="item.icon" class="h-5 w-5" />
            <span>{{ item.label }}</span>
            <span
              :class="item.badge.includes('-') ? 'text-red-400' : 'text-green-400'"
              class="ml-auto text-xs font-semibold"
              v-if="item.badge">
              {{ item.badge }}
            </span>
          </a>
        </nav>
      </div>
    </div>
    <div class="border-t border-gray-700 p-3">
      <nav>
        <a
          v-for="item in secondaryNavItems"
          :key="item.id"
          :href="item.href"
          class="flex items-center gap-3 p-2 rounded-md transition-colors duration-200"
          :class="activeItem === item.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800'"
          @click="handleNavItemClick(item.id)">
          <component :is="item.icon" class="h-5 w-5" />
          <span>{{ item.label }}</span>
        </a>
        <button
          class="flex w-full items-center gap-3 p-2 text-gray-400 hover:bg-red-800 hover:text-white rounded-md transition-colors duration-200">
          <LogOut class="h-5 w-5" />
          <span>Sair</span>
        </button>
      </nav>
    </div>
  </div>
</template>
