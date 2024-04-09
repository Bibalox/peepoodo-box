<script setup lang="ts">
import SoundButton from '@components/SoundButton.vue'
import { soundList } from '@assets/soundList.ts'
</script>

<template>
  <header class="app__header">
    <img src="/logo/logo-long.svg" class="app__logo app__logo--long" />
    <img src="/logo/logo-square.svg" class="app__logo app__logo--square" />
  </header>
  <main class="app__main">
    <sound-button
      v-for="sound in soundList" :key="sound.url"
      :url="sound.url" :label="sound.label"
      :color="sound.color"
    />
  </main>
</template>

<style lang="scss">

@mixin small-screen {
  @media (max-width: 680px) { @content; }
}

@mixin medium-screen {
  @media (max-width: 960px) { @content; }
}

body {
  background: center / cover no-repeat url('/background.jpg'), #ABDDFF;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100dvh;
}

.app {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 56px;
  height: 100%;
  overflow-y: auto;
  padding: 64px 48px 56px;

  @include medium-screen {
    gap: 48px;
    padding: 56px 48px 48px;
  }

  @include small-screen {
    padding: 48px 16px 16px;
  }

  &__logo {
    flex-shrink: 0;

    &--long {
      display: block;

      @include small-screen {
        display: none;
      }
    }

    &--square {
      display: none;

      @include small-screen {
        display: block;
      }
    }
  }

  &__main {
    -webkit-backdrop-filter: blur(28px);
    backdrop-filter: blur(28px);
    background-color: rgba(255,255,255,.4);
    border: 1px solid rgba(255,255,255,.4);
    border-radius: 50px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 36px 64px;
    max-width: 1080px;
    padding: 56px 64px;
    width: 100%;

    @include medium-screen {
      border-radius: 42px;
      gap: 24px 48px;
      padding: 40px 48px;
    }

    @include small-screen {
      border-radius: 26px;
      gap: 20px;
      padding: 24px;
    }
  }
}

</style>
