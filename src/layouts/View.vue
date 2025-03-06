<script setup>                                                                                                                             import { ref } from 'vue'
import { RouterLink } from 'vue-router';

  const drawer = ref(null);
  const items = [
    { text: 'Home', icon: 'mdi-folder', to: "/Home"},
    { text: 'Calcular impressão', icon: 'mdi mdi-calculator', to: "/CalculationArea"},
  ];

</script>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(249,168,0,.7), rgba(255,255,0,1)"
        height="60"
        cover
        class="pt-0"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://images.creativefabrica.com/products/previews/2024/09/26/JZ5DtlHao/2mcQioyJmcDUxSIz1IsN13YzPEw-desktop.jpg"
            title="Studio Frammer"
            subtitle="Marcus Mesquita"
          />
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
            color="primary"
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
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
      density="prominent"
      height="35"
    >
      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(249,168,0,.5), rgba(255,255,0,.8)"
        />
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        <h2>Studio Frammer</h2>
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
    color: rgb(165, 148, 0);
  }


</style>
