<template>
  <div class="main">
    <h3>Artistes</h3>

    <div class="searchHeader">
      <SearchBarComponent @getPattern="searchArtists($event)" />
      <button>Trier par</button>
    </div>

    <p v-if="artists.length == 0" class="searchIssue">
      Aucun artiste ne correspond à votre recherche, réessayez plus tard ... 🤷🏼‍♂️
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
import ArtistCardComponent from "../components/ArtistCardComponent";
import SearchBarComponent from "../components/SearchBarComponent";

export default {
  data() {
    return {
      artists: [],
      genres: [],
      albums: [],
      concerts: [],
      loading: false
    };
  },
  components: {
    ArtistCardComponent,
    SearchBarComponent
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

    this.getArtists().then(artists =>
      this.getGenres()
        .then(() => {
          this.setGenres(artists);
          /* console.log(artists); */
        })
        .then(() => (this.artists = artists))
    );
  },
  methods: {
    async searchArtists(pattern) {
      this.loading = true;
      await axios
        .get(`http://localhost:3000/artists?name_like=${pattern}`)
        .then(response => {
          this.setGenres(response.data);
          this.artists = response.data;
          this.loading = false;
          /*  setTimeout(() => {
            this.loading = false;
          }, 800); */
        })
        .catch(error => {
          console.error(error);
        });
    },
    // GETTERS
    getArtists() {
      return axios
        .get("http://localhost:3000/artists")
        .then(a => a.data)
        .catch(err => console.error("failed to get artists\n", err));
    },
    getGenres() {
      return axios
        .get("http://localhost:3000/genres")
        .then(g => (this.genres = g.data))
        .catch(err => console.error("Failed to get genres\n", err));
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
      tmpArtists.forEach(a => {
        /* console.log(a); */
        a.genre = [];
        a.genreId.forEach(genre => {
          console.log(genre);
          a.genre.push(this.genres.find(g => g.id === genre).name);
        });
      });
    }
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
  }
};
</script>

<style></style>
