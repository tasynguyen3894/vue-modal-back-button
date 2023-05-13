<template>
  <div>
    <h1>Product Detail with hash </h1>
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
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Modal from '../components/Modal.vue';

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

const route = useRoute();
const router = useRouter();
const isShow = ref<boolean>(false);
const imgUrl = ref<string>('');

function closeModal() {
  isShow.value = false;
  router.back();
}

function openModal(id: string) {
  imgUrl.value = id;
  isShow.value = true;
  router.push({ hash: '#' + id })
}

watch(() => route.hash, () => {
  if(route.hash === '') {
    isShow.value = false;
  }
})
</script>
<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0px;
  li {
    margin-bottom: 10px;
    display: inline-block;
    max-width: 30%;
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
