<template>
  <v-main>
    <v-card
      class="mx-auto mt-5"
      max-width="100%"
      v-for="(berita, index) in listBerita"
      :key="index"
    >
      <v-img
        class="white--text align-end"
        height="400px"
        :src="berita.urlToImage"
        alt="image"
      >
        <v-card-title>{{ berita.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{ berita.author }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ berita.description }}
      </v-card-text>

      <v-card-actions>
        <div>
          {{
            moment(berita.publishedAt).format("dddd, Do MMMM YYYY [at] h:m A")
          }}
        </div>
        <v-spacer></v-spacer>
        <v-btn color="orange" @click="() => redirect(index)" text
          >detail
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "sainsPage",
  computed: {
    listBerita() {
      return this.$store.state.listBerita;
    },
  },
  methods: {
    fetchBerita() {
      this.$store.dispatch("fetchListSains");
    },
    redirect(index) {
      return this.$router.push({
        name: "detailPage",
        params: {
          index,
        },
      });
    },
  },
  mounted() {
    this.fetchBerita();
  },
};
</script>
