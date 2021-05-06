<template>
  <div>
    <span>{{artist.id}}</span>
    <span>{{artist.name}}</span>
    <span>{{artist.country}}</span>
    <img class="avatar" :src="artist.avatar" alt="avatar" />
    <span>{{artist.genreId}} -> {{artist.genre}} </span>
    <span>{{artist.likes}}</span>
    <span>{{artist.description}}</span>
  </div>
</template>

<script>
export default {
    props: ['artist']
}
</script>


<style>
  .avatar {
    max-width: 10rem;
  }
  span {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
</style>