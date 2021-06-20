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
              <div class="artist_title_wrapper">
                <h3>
                  {{ artist.name }}
                </h3>
                <img
                  v-if="artist.origin"
                  :src="'https://flagcdn.com/h20/' + artist.origin + '.png'"
                  height="20"
                  :alt="artist.origin"
                />
              </div>

              <div class="badges_div">
                <BadgeComponent
                  v-for="(genre, index) in artist.genres"
                  :key="index"
                  :data="genre"
                />
              </div>
            </div>
            <div class="artist_interect">
              likes : {{ artist.likes }}
              <button @click="like">
                j'aime
                <i class="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="details_main">
          <div class="details_description">
            <p class="artist_description">{{ artist.description }}</p>
          </div>
          <div class="details concerts">
            <ConcertsComponent :concerts="artist.concerts" />
          </div>
        </div>
        <div class="details_footer">
          <AlbumsPreviewComponent :albums="artist.albums" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BadgeComponent from "../../components/BadgeComponent.vue";
import AlbumsPreviewComponent from "../../components/AlbumsPreviewComponent.vue";
import ConcertsComponent from "../../components/ConcertsComponent.vue";
export default {
  components: { BadgeComponent, AlbumsPreviewComponent, ConcertsComponent },
  data() {
    return {
      artist: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/artists?id=${this.$nuxt.$route.params.id}`)
      .then((response) => response.data[0])
      .then((respArtist) => {
        //GENRES
        let reqGenres = axios
          .get(
            `http://localhost:3000/genres?id=${respArtist.genreId.join("&id=")}`
          )
          .then((respGenre) => respGenre.data.map((genre) => genre.name))
          .then((respGenreData) => {
            respArtist.genres = respGenreData;
          });
        //CONCERTS
        let reqConcerts = axios
          .get(`http://localhost:3000/concerts?artistId=${respArtist.id}`)
          .then((respConcert) => {
            respConcert.data.forEach((element) => {
              let date = element.dates.split("/");
              let formated = new Date(date[2], date[1] - 1, date[0]);
              element.dates = formated;
            });
            respArtist.concerts = respConcert.data;
          });
        //ALBUMS
        let reqAlbums = axios
          .get(`http://localhost:3000/albums?artistId=${respArtist.id}`)
          .then((respAlbums) => {
            respArtist.albums = respAlbums.data;
          });

        Promise.all([reqGenres, reqConcerts, reqAlbums]).then((response) => {
          this.artist = respArtist;
        });
      });
  },
  methods: {
    like: function () {
      this.$store.dispatch("like", {
        id: this.artist.id,
        likes: this.artist.likes++,
      });
    },
  },
};
</script>

<style></style>
