<template>
  <div>
   <div>
     <span><router-link :to="{ name: 'Home' }">Home</router-link></span> |
     <span><router-link :to="{ name: 'ProductDetail' }">Product Detail</router-link></span> |
     <span><router-link :to="{ name: 'ProductDetail1' }">Product Detail with hash</router-link></span> |
     <span><router-link :to="{ name: 'ProductDetail2' }">Product Detail with query</router-link></span> |
     <span><router-link :to="{ name: 'ProductDetail3' }">Product Detail with onBeforeRouteLeave</router-link></span> |
     <span><router-link :to="{ name: 'About' }">About</router-link></span>
   </div>
   <router-view></router-view>
  </div>
 </template>