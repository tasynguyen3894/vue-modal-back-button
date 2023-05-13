<template>
  <div>
    <h1>Product Detail</h1>
    <Modal :show="isShow" @on-hide="closeModal">
      <div class="custom-modal">
        <img :src="imgUrl" />
      </div>
    </Modal>
    <ul>
      <li @click="openModal(image.id)"  :key="image.id" v-for="image in images">
        <img :src="image.id" alt="">
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

const images: { id: string, text: string }[] = [
  {
    id: '/1.jpg',
    text: 'Picture 1'
  },
  {
    id: '/2.jpg',
    text: 'Picture 2'
  },
  {
    id: '/3.jpg',
    text: 'Picture 3'
  }
]

const isShow = ref<boolean>(false);
const imgUrl = ref<string>('');

function closeModal() {
  isShow.value = false;
}

function openModal(id: string) {
  imgUrl.value = id;
  isShow.value = true;
}
</script>
<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0px;
  li {
    margin-bottom: 10px;
    display: inline-block;
    max-width: 31%;
    margin-right: 10px;
    img {
      max-width: 100%;
    }
  }
}

.custom-modal {
  img {
    max-width: 100%;
  }
}
</style>
