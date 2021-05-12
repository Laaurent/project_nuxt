<template>
  <div class="main">
    <!--  {{ artist }} -->
    <div class="details_card" v-if="artist">
      <div class="details_wrapper">
        <div class="details_header">
          <div
            class="artist_avatar"
            :style="
              'background-image: url(' +
              artist.avatar +
              '), linear-gradient(#fefff8 50%, #140c3d) '
            "
          ></div>
          <div class="artist_info">
            <div class="artist_title">
              <h3>{{ artist.name }}</h3>
              <div class="badges_div">
                <BadgeComponent
                  v-for="(genre, index) in artist.genres"
                  :key="index"
                  :data="genre"
                />
              </div>
            </div>
            <div class="artiste_interect">
              <button>
                j'aime
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="details_main">MAIN</div>
        <div class="details_footer">FOOTER</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BadgeComponent from "../../components/BadgeComponent.vue";
export default {
  components: { BadgeComponent },
  data() {
    return {
      artist: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/artists?id=${this.$nuxt.$route.params.id}`)
      .then((response) => {
        this.artist = response.data[0];
      })
      .then(() => {
        axios.get(`http://localhost:3000/genres?id=${this.artist.genreId.join('&id=')}`)
          .then(genres => this.artist.genres = genres.data.map(genre => genre.name))
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style>
</style>