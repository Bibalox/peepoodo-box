<script setup lang="ts">
import { ref } from 'vue'
import type { Sound } from 'src/soundList'

const props = defineProps<Sound>()

const sound = new Audio(`/sounds/${props.url}.mp3`)

const buttonPressed = ref(false)
const soundPlaying = ref(false)
const soundDuration = ref(0)


// Button events management

const manageClick = () => {
  if (sound.paused) {
    sound.currentTime = 0
    sound.play()
    soundPlaying.value = true
  } else {
    sound.pause()
    soundPlaying.value = false
  }
}

const manageTouch = (status: 'start' | 'end') => {
  const initialScroll = window.scrollY
  setTimeout(() => {
    buttonPressed.value = status === 'start' && (Math.abs(initialScroll - window.scrollY) < 2)
  }, 100)
}


// Sound events management

sound.addEventListener('loadedmetadata', () => soundDuration.value = sound.duration + .2)

sound.addEventListener('ended', () => soundPlaying.value = false)
</script>

<template>
  <button
    :class="[
      'sound-button',
      `sound-button--${props.color}`,
      { 'sound-button--pressed': buttonPressed }
    ]"
    :style="`--duration: ${soundDuration}s`"
    @click="manageClick()"
    @touchstart="manageTouch('start')"
    @touchend="manageTouch('end')"
  >
    <div class="sound-button__wrapper">
      <span class="sound-button__label" v-text="props.label" />
      <img
        v-if="soundPlaying"
        class="sound-button__icon sound-button__icon--stop"
        src="/icons/stop.svg"
      />
      <img
        v-else
        class="sound-button__icon sound-button__icon--play"
        src="/icons/play.svg"
      />
      <div :class="['sound-button__progress-bar', {'sound-button__progress-bar--soundPlaying': soundPlaying}]" />
    </div>
  </button>
</template>

<style lang="scss">
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

  @media (hover: hover) {

    &:hover {
      box-shadow: 0 5px 0 0 var(--third);
    }

    &:active {
      box-shadow: 0 1px 0 0 var(--third);
    }
  }

  @media (hover: none) {

    &--pressed {
      box-shadow: 0 1px 0 0 var(--third);
    }

    &--pressed &__wrapper {
      box-shadow: 0 2px 0 0 var(--secondary);
      transform: translateY(6px);
    }
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
    gap: 20px;
    height: 56px;
    justify-content: space-between;
    overflow: hidden;
    padding: 0 20px;
    position: relative;
    transition: all .2s;

    @media (hover: hover) {

      &:hover {
        box-shadow: 0 6px 0 0 var(--secondary);
        transform: translateY(2px);
      }

      &:active {
        box-shadow: 0 2px 0 0 var(--secondary);
        transform: translateY(6px);
      }
    }
  }

  &__label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__label, &__icon {
    z-index: 20;
  }

  &__progress-bar {
    background-color: rgba(0, 0, 0, .03);
    height: 100%;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: 0;
    width: 100%;
    z-index: 10;

    &--soundPlaying {
      animation: progress var(--duration) linear;

      @keyframes progress {
        to {transform: scaleX(1);}
      }
    }
  }
}
</style>
