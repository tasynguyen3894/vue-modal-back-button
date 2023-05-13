<template>
  <div v-if="props.show" class="modal">
    <div class="modal__outlet" @click="emit('onHide')">
    </div>
    <div class="modal__content">
      <div class="modal__header">
          <img @click="emit('onHide')" src="/cancel.png" alt="" srcset="">
      </div>
      <div class="modal__body">
      <router-link :to="{ name: 'Home' }">Back to Home</router-link>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  show?: boolean
}>();

const emit = defineEmits<{
  (e: 'onHide'): void
}>()
</script>
<style scoped lang="scss">
.modal {
  position: absolute;
  &__outlet {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  &__content {
    position: fixed;
    top: 40px;
    left: 20px;
    right: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #FFF;
    z-index: 1002;
  }
  &__header {
    text-align: right;
  }
  &__body {
    background: auto;
  }
}
</style>