<template>
  <div>
    <div class="artist-container">
      <div class="avatar_wrapper">
        <div class="avatar_layout">
          <button class="button_icon">Voir plus</button>
        </div>
        <div
          class="avatar"
          :style="
            'background-image: url(' +
            artist.avatar +
            '), linear-gradient(#fefff8 50%, #140c3d) '
          "
        ></div>
        <div class="foreground">
          <button class="like_round">
            <i class="far fa-heart"></i>
          </button>
        </div>
      </div>
      <div class="info">
        <h4>{{ artist.name }}</h4>
        <div class="badges_div">
          <BadgeComponent
            v-for="(genre, index) in artist.genre"
            :key="index"
            :data="genre"
          />
        </div>

        <!-- <span class="name"> {{ artist.name }}</span> -->
        <!-- <span class="likes"> {{ artist.likes }}❤️</span> -->
        <!-- <span class="description"> {{artist.description}}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import BadgeComponent from "./BadgeComponent";
export default {
  props: ["artist"],
  components: {
    BadgeComponent,
  },
};
</script>
