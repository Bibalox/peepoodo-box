<script setup lang="ts">
</script>

<template>
  <header class="app-header">
    <img src="/logo/logo-long.svg" class="app-logo app-logo--long" />
    <img src="/logo/logo-square.svg" class="app-logo app-logo--square" />
  </header>
</template>

<style lang="scss">

@mixin small-screen {
  @media (max-width: 680px) { @content; }
}

@mixin medium-screen {
  @media (max-width: 960px) { @content; }
}

body {
  align-items: center;
  background: center / cover no-repeat url('/background.jpg'), #ABDDFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin: 0;
  min-height: 100vh;
  padding: 64px 48px 56px;
  width: 100%;

  @include medium-screen {
    gap: 48px;
    padding: 56px 48px 48px;
  }

  @include small-screen {
    padding: 48px 16px 16px;
  }
}

.app-logo {
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

</style>
