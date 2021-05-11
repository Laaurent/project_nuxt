<template>
  <div>
    <div class="artist-container">
      <div class="avatar" :style="'background-image: url(' + artist.avatar + ')'"></div>
      <div class="info">
        <span class="name"> {{artist.name}}</span>
        <span class="likes"> {{artist.likes}}❤️</span>
        <span class="description"> {{artist.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['artist']
}
</script>
