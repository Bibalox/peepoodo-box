<script setup lang="ts">
import { ref } from 'vue'
import type { Sound } from 'src/soundList'

const props = defineProps<Sound>()

const playing = ref(false)
const sound = new Audio(`/sounds/${props.url}.mp3`)

const manageClick = () => {
  if (sound.paused) {
    playing.value = true
    sound.currentTime=0
    sound.play()
    sound.addEventListener('ended', () => playing.value = false)
  } else {
    playing.value = false
    sound.pause()
  }
}
</script>

<template>
  <button
    :class="[
      'sound-button',
      `sound-button--${props.color}`,
      { 'sound-button--playing': playing }
    ]"
    @click="manageClick()"
  >
    <div class="sound-button__wrapper">
      <span class="sound-button__label" v-text="props.label" />
      <img class="sound-button__icon sound-button__icon--play" src="/icons/play.svg" />
      <img class="sound-button__icon sound-button__icon--stop" src="/icons/stop.svg" />
    </div>
  </button>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

.sound-button {
  border: none;
  background-color: transparent;
  border-radius: 14px;
  box-shadow: 0 6px 0 0 var(--third);
  box-sizing: border-box;
  color: #2D0000;
  cursor: pointer;
  display: flex;
  flex: 1;
  font-family: "Nanum Pen Script", cursive;
  font-size: 28px;
  height: 64px;
  margin: 0;
  min-width: 280px;
  padding: 0;
  transition: box-shadow .2s;

  &:hover {
    box-shadow: 0 5px 0 0 var(--third);
  }

  &:active {
    box-shadow: 0 1px 0 0 var(--third);
  }

  &--pink {
    --primary: #FFC5C5;
    --secondary: #FF8E8E;
    --third: rgba(255, 142, 142, .15);
  }

  &--yellow {
    --primary: #FFE59F;
    --secondary: #FFC52D;
    --third: rgba(255, 197, 45, .2);
  }

  &--blue {
    --primary: #A0E2F1;
    --secondary: #5F8CB8;
    --third: rgba(95, 140, 184, .15);
  }

  &--brown {
    --primary: #D5C1B2;
    --secondary: #765B47;
    --third: rgba(154, 129, 111, .15);
  }

  &__wrapper {
    align-items: center;
    background-color: var(--primary);
    border-radius: 14px;
    box-shadow: 0 8px 0 0 var(--secondary);
    box-sizing: border-box;
    display: flex;
    flex: 1;
    height: 56px;
    justify-content: space-between;
    overflow: hidden;
    padding: 0 20px;
    position: relative;
    transition: all .2s;

    &:hover {
      box-shadow: 0 6px 0 0 var(--secondary);
      transform: translateY(2px);
    }

    &:active {
      box-shadow: 0 2px 0 0 var(--secondary);
      transform: translateY(6px);
    }
  }

  &__icon--stop {
    display: none;
  }

  &--playing &__icon--play {
    display: none;
  }

  &--playing &__icon--stop {
    display: block;
  }

}
</style>
