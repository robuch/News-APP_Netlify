<template>
  <v-container>
    <v-card class="mx-auto mt-5" max-width="100%">
      <v-img
        contain
        height="400px"
        width="auto"
        :src="listBerita[index].urlToImage"
        position="center"
      >
      </v-img>
      <v-card-title>{{ listBerita[index].title }}</v-card-title>
      <v-card-subtitle class="pb-0">
        {{ listBerita[index].author }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{ listBerita[index].content }}
      </v-card-text>

      <v-card-actions>
        <div>
          {{
            moment(listBerita[index].publishedAt).format(
              "dddd, Do MMMM YYYY [at] h:m A"
            )
          }}
        </div>
        <v-spacer></v-spacer>
        <a :href="listBerita[index].url">Baca Selengkapnya </a>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "detailPage",
  setup() {},
  computed: {
    index() {
      return this.$route.params.index;
    },
    listBerita() {
      return this.$store.state.listBerita;
    },
  },
};
</script>
