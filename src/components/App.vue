<script setup lang="ts">
import SoundButton from './SoundButton.vue'
import { soundList } from '../soundList.ts'
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
  <footer class="app__footer">
    <p>Concu avec amour par <a href="https://www.jbbal.fr" target="_blank">JB Bal</a> en 2024, selon l'oeuvre originale de <a href="https://www.bobbypills.com" target="_blank">Bobbypills</a></p>
  </footer>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');

@mixin small-screen {
  @media (max-width: 680px) { @content; }
}

@mixin medium-screen {
  @media (max-width: 960px) { @content; }
}

:root {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

html {
  height: calc(100% + env(safe-area-inset-top) + env(safe-area-inset-bottom));
  -webkit-tap-highlight-color: transparent;
}

body {
  background-color: #ABDDFF;
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100%;
  width: 100%;
}

.app {
  align-items: center;
  background: center / cover no-repeat url('/images/app-background.jpg');
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 100%;
  overflow-y: auto;
  padding: calc(env(safe-area-inset-top) + 64px) 48px calc(env(safe-area-inset-bottom) + 56px);

  @include medium-screen {
    padding: calc(env(safe-area-inset-top) + 56px) 48px  calc(env(safe-area-inset-bottom) + 48px);
  }

  @include small-screen {
    padding: calc(env(safe-area-inset-top) + 48px) 16px  calc(env(safe-area-inset-bottom) + 16px);
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
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
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
      gap: 16px;
      padding: 16px;
    }
  }

  &__footer {
    color: #2D0000;
    font-family: "Nanum Pen Script", cursive;
    font-size: 22px;

    p {
      text-align: center;
      text-transform: uppercase;
      text-wrap: balance;
      margin:  4px 16px;
    }

    a:visited, a:link {
      color: inherit;
    }
  }
}
</style>
