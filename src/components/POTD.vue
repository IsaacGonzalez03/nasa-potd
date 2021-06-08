<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8 d-flex justify-content-center">
        <img class="img-fluid" :src="potd.picture" alt="">
        <div>{{ potd.date }}</div>
        <div>{{ potd.title }}</div>
        <div>{{ potd.explanation }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      potd: computed(() => AppState.potd)
    }
  }
}
</script>
