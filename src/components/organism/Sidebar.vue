<script setup lang="ts">
import { House, Wallet, LogOut, Handshake } from 'lucide-vue-next';
import { onMounted } from 'vue';
const route = useRoute();

let sidebar: null | any;
let logout: null | any;

const initialWitdhDashboard = () => {
  sidebar = document.getElementById('sidebar');
  logout = document.getElementById('logout');
  sidebar?.classList.add('w-[165px]');
};

onMounted(() => {
  document.getElementById('sidebar');
  setTimeout(() => {
    initialWitdhDashboard();
    setTimeout(() => {
      sidebar?.classList.remove('w-[165px]');
    }, 1500);
  }, 0);
});
</script>

<template>
  <aside
    id="sidebar"
    class="h-[95vh] flex flex-col justify-between text-white mt-5 ml-5 rounded-xl w-[65px] px-3 py-5 bg-[#0B1739] hover:w-[165px] transition-all duration-700 ease-in-out"
  >
    <nav class="overflow-hidden flex flex-col">
      <ul class="flex flex-col gap-4 justify-center items-start">
        <li class="flex rounded-lg">
          <nuxt-link to="/dashboard" class="flex justify-center items-center gap-3">
            <div class="p-2 rounded-lg" :class="route.path === '/dashboard' ? 'bg-white' : ''">
              <House :class="route.path === '/dashboard' ? 'text-black' : 'text-white'" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </nuxt-link>
        </li>

        <li class="flex rounded-lg">
          <nuxt-link to="/dashboard/investment" class="flex justify-center items-center gap-2">
            <div
              class="p-2 rounded-lg"
              :class="route.path === '/dashboard/investment' ? 'bg-white' : ''"
            >
              <Wallet
                :class="route.path === '/dashboard/investment' ? 'text-black' : 'text-white'"
              />
            </div>
            <div>
              <p>Investment</p>
            </div>
          </nuxt-link>
        </li>

        <li class="flex rounded-lg">
          <nuxt-link to="/dashboard/agentInvestment" class="flex justify-center items-center gap-2">
            <div
              class="p-2 rounded-lg"
              :class="route.path === '/dashboard/agentInvestment' ? 'bg-white' : ''"
            >
              <Handshake
                :class="route.path === '/dashboard/agentInvestment' ? 'text-black' : 'text-white'"
              />
            </div>
            <div>
              <p>Financial Advisor</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="logout flex flex-col mt-3 overflow-hidden bg-gray-700 rounded-lg">
      <nuxt-link to="/" class="flex justify-center items-center gap-2">
        <ul>
          <li class="flex p-2 justify-center items-center">
            <LogOut />
          </li>
        </ul>
      </nuxt-link>
    </div>
  </aside>
</template>

<style></style>
