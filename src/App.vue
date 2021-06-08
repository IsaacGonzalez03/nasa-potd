<template>
  <header>
    <Navbar />
  </header>
  <main>
    <POTD />
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { nasaService } from './services/NasaService'
export default {
  name: 'App',
  setup() {
    onMounted(() => {
      nasaService.findPotd()
    })
    return {
      potd: computed(() => AppState.potd),
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
