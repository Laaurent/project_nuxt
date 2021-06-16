<template>
  <div class="modale">
    <form @submit.prevent="checkSubmit()">
      <!-- FIELDS -->
      <div class="modale-item">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" v-model="artist.name" />
      </div>
      <div class="modale-item">
        <label for="avatar">Avatar</label>
        <input type="text" id="avatar" name="avatar" v-model="artist.avatar" />
      </div>
      <!-- CLOSE & SAVE -->
      <div class="modale-actions">
        <button type="submit" class="modale-save">
          <i class="fas fa-save"></i>
        </button>
        <button class="modale-close" @click.prevent="closeModale()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ArtistModale",
  props: ["artistInfo", "showModale"],
  data() {
    return {
      artist: {},
    };
  },
  methods: {
    closeModale() {
      this.$emit("closemodale");
    },
    checkSubmit() {
      this.$emit("update", this.artist);
    },
  },
  mounted() {
    this.artist = { ...this.artistInfo };
    console.log(this.artist);
  },
};
</script>

<style scoped>
.modale {
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 1000;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modale > form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: #c4c4c4;
  border: 4px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 4px 4px #c4c4c4;
}

.modale-item > label {
  color: black;
}

.modale-actions {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.modale-actions > button {
  margin: 0;
  margin-left: 4px;
  padding: 8px 12px;
}

.modale-close {
  background-color: #e04b4b;
}

.modale-close:hover {
  box-shadow: 0px 4px 4px #e04b4b50;
}

.modale-save {
  background-color: #4be064;
}

.modale-save:hover {
  box-shadow: 0px 4px 4px #4be064;
}
</style>