<script setup>
  const items = [
    {
      title: 'Marcus Mesquita Instagram',
      icon: `mdi-instagram`,
      href: 'https://www.instagram.com/marcusmesquita/',
    },
    {
      title: 'Marcus Mesquita Site',
      icon: 'mdi-web',
      href: 'https://marcus-mesquita.com/?fbclid=PAZXh0bgNhZW0CMTEAAaZQy0rOo_y4G3v9krC_G4f2caYev38dqv4FN_6yYCXr_zX2MSQPjMRdCrQ_aem_AQGS2qZ-l2IUPww6Ynm3bw',
    },
    {
      title: 'Marcus Mesquita Facebook',
      icon: 'mdi-facebook',
      href: 'https://www.facebook.com/marcus.mesquita.photographer/',
    },
  ]
</script>

<template>
  <v-footer
    height="40"
    app
  >
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === 'mdi-instagram' ? 24 : 18"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2016-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Marcus Mesquita</span>
    </div>
  </v-footer>
</template>


<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(255, 255, 255, 1)
</style>
