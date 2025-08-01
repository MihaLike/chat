<template>
  <div class="app-loader">
    <LoaderIcon class="app-loader__icon">
      <template
        v-if="comment"
        #default
      >
      <div class="app-loader__comment">
        {{ comment }}
      </div>
      </template>
    </LoaderIcon>

    <div class="app-loader__overlay" />
  </div>
</template>

<script setup lang="ts">
// <editor-fold desc="imports">
import { LoaderIcon } from './loader-icon';

import type { Props } from './types';
// </editor-fold>

// <editor-fold desc="interface">
withDefaults(defineProps<Props>(), { comment: undefined });
// </editor-fold>
</script>

<style>
  .app-loader {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-loader__icon {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app-loader__comment {
    display: flex;
    text-align: center;
    color: #fff;
  }
</style>
