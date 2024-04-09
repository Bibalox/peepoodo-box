<script setup lang="ts">
const props = defineProps<{
  url: string
  label: string
  color: 'yellow' | 'pink' | 'brown' | 'blue'
}>()

const sound = new Audio(`/sounds/${props.url}.mp3`)

const playSound = () => {
  sound.currentTime=0;
  sound.play()
}
</script>

<template>
  <button
    @click="playSound()"
    v-text="props.label"
  >
  </button>
</template>

<style lang="scss">

</style>
