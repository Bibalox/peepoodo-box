<script setup lang="ts">
import type { Sound } from '@assets/soundList'

const props = defineProps<Sound>()

const sound = new Audio(`/sounds/${props.url}.mp3`)

const manageClick = () => {
  if (sound.paused) {
    sound.currentTime=0
    sound.play()
  } else {
    sound.pause()
  }
}
</script>

<template>
  <button :class="`sound-button sound-button--${props.color}`" @click="manageClick()">
    <div class="sound-button__content">
      <span class="sound-button__label" v-text="props.label" />
    </div>
  </button>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

.sound-button {
  border: none;
  background-color: transparent;
  border-radius: 14px;
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

  &--pink {
    --primary: #FFC5C5;
    --secondary: #FF8E8E;
    --third: #;
  }

  &--yellow {
    --primary: #FFE59F;
    --secondary: #FFC52D;
    --third: #;
  }

  &--blue {
    --primary: #A0E2F1;
    --secondary: #5F8CB8;
    --third: #;
  }

  &--brown {
    --primary: #D5C1B2;
    --secondary: #765B47;
    --third: #;
  }

  &__content {
    align-items: center;
    background-color: var(--primary);
    border-radius: 14px;
    box-shadow: 0 8px 0 0 var(--secondary);
    box-sizing: border-box;
    display: flex;
    flex: 1;
    height: 56px;
    padding: 0 20px;
    transition: all .2s;

    &:hover {
      box-shadow: 0 4px 0 0 var(--secondary);
      transform: translateY(4px);
    }

    &:active {
      box-shadow: 0 0 0 0 var(--secondary);
      transform: translateY(8px);
    }
  }
}
</style>
