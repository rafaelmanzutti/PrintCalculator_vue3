<script setup>                                                                                                                             import { ref } from 'vue'
import { RouterLink } from 'vue-router';

  const drawer = ref(null);
  const items = [
    { text: 'Home', icon: 'mdi-folder', to: "/Home"},
    { text: 'Calcular impressão', icon: 'mdi mdi-calculator', to: "/CalculationArea"},
  ];


</script>
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-img
        gradient="to top right, rgba(0,0,0,.8), rgba(255,255,255,.5)"
        height="100"
        cover
        class="pt-0"
      >
        <v-list class="pt-0">
          <div class="d-flex align-center justify-space-around">
            <v-img
              alt="Marcus"
              src="@/assets/logo_marcusMesquita_750x750.png"
            />
            <v-list-item
              title="Studio Frammer"
              class="color-gray"
            />
          </div>
        </v-list>
      </v-img>

      <v-divider />

      <v-list
        :lines="false"
        density="compact"
        nav
      >
        <RouterLink
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item
            :value="item"
            color="white"
          >
            <template
              #prepend
            >
              <v-icon :icon="item.icon" />
            </template>
            <v-list-item-title
              :textContent="item.text"
            />
          </v-list-item>
        </RouterLink>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color=""
      image=""
      density="prominent"
      height="50"
    >
      <v-app-bar-nav-icon
        class="mt-6 color-gray"

        @click="drawer = !drawer"
      />
      <v-app-bar-title>
        <h2>Studio Frammer</h2>
        <h6>Calculadora de impressão Fine'art</h6>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
  a{
    text-decoration: none;
    color: rgb(185, 185, 185);
  }
  h1, h2, h3, h4, h5, h6 {
    color: rgb(185, 185, 185);
  }
  .color-gray{
    color: rgb(211, 211, 211);
  }

</style>
