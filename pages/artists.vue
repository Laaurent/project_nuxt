<template>
  <div class="main">
    <h3>Artistes</h3>

    <div class="searchHeader">
      <SearchBarComponent @getPattern="searchArtists($event)" />
      <button>Trier par</button>
    </div>

    <scale-loader
      :loading="loading"
      :color="'#1f59fa'"
      :height="'24px'"
      :width="'3px'"
    ></scale-loader>
    <p v-if="!artists || artists.length == 0" class="searchIssue">
      Aucun artiste ne correspond à votre recherche, réessayer plus tard ... 🤷🏼‍♂️
    </p>
    <ul v-if="!loading && artists" class="artists-ul">
      <li v-for="(artist, key) in artists" :key="key">
        <ArtistCardComponent :artist="artist" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";
import ArtistCardComponent from "../components/ArtistCardComponent";
import SearchBarComponent from "../components/SearchBarComponent";

export default {
  data() {
    return {
      artists: [],
      genres: [],
      albums: [],
      concerts: [],
      loading: false,
    };
  },
  components: {
    ArtistCardComponent,
    SearchBarComponent,
    ScaleLoader,
  },
  mounted() {
    // this.getArtists().then((a) => {
    //   const reqGenres = this.getGenres().then(() => this.setGenres(a));
    //   const reqAlbums = this.getAlbums().then(() => this.setAlbums(a));
    //   const reqConcerts = this.getConcerts().then(() => this.setConcerts(a));

    //   Promise.all([reqGenres, reqAlbums, reqConcerts]).then(
    //     () => (this.artists = a)
    //   );
    // });

    this.getArtists().then((artists) =>
      this.getGenres()
        .then(() => this.setGenres(artists))
        .then(() => (this.artists = artists))
    );
  },
  methods: {
    async searchArtists(pattern) {
      this.loading = true;
      await axios
        .get(`http://localhost:3000/artists?name_like=${pattern}`)
        .then((response) => {
          this.setGenres(response.data);
          this.artists = response.data;
          this.loading = false;
          /*  setTimeout(() => {
            this.loading = false;
          }, 800); */
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // GETTERS
    getArtists() {
      return axios
        .get("http://localhost:3000/artists")
        .then((a) => a.data)
        .catch((err) => console.error("failed to get artists\n", err));
    },
    getGenres() {
      return axios
        .get("http://localhost:3000/genres")
        .then((g) => (this.genres = g.data))
        .catch((err) => console.error("Failed to get genres\n", err));
    },
    /*  getAlbums() {
      return axios
        .get("http://localhost:3000/albums")
        .then((a) => (this.albums = a.data))
        .catch((err) => console.error("Failed to get albums\n", err));
    },
    getConcerts() {
      return axios
        .get("http://localhost:3000/concerts")
        .then((c) => (this.concerts = c.data))
        .catch((err) => console.error("Failed to get concerts\n", err));
    }, */

    // SETTERS
    setGenres(tmpArtists) {
      tmpArtists.forEach((a) => {
        a.genre = this.genres.find((g) => g.id === a.genreId).name;
      });
    },
    /* setAlbums(tmpArtists) {
      tmpArtists.forEach((artist) => {
        artist.albums = this.albums.filter(
          (album) => album.artistId === artist.id
        );
      });
    },
    setConcerts(tmpArtists) {
      tmpArtists.forEach((artist) => {
        artist.concerts = this.concerts.filter(
          (concert) => concert.artistId === artist.id
        );
      });
    }, */
  },
};
</script>

<style>
</style>