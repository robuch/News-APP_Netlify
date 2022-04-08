<template>
  <v-app>
    <v-main>
      <template>
        <div>
          <v-app-bar color="deep-purple accent-4" fixed dense dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>Berita Vue</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-app-bar>
        </div>
      </template>

      <v-row>
        <v-col cols="3">
          <v-sheet
            height="400"
            class="overflow-hidden"
            style="position: relative"
          >
            <v-navigation-drawer v-model="drawer" fixed temporary>
              <v-list dense>
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  :to="item.link"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-sheet>
        </v-col>

        <v-col cols="8" class="mt-10 pt-4">
          <!-- Content Here -->
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "defaultLayout",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home-city", link: "/" },
        { title: "Olahraga", icon: "mdi-basketball", link: "/olahraga" },
        { title: "Kesehatan", icon: "mdi-cards-heart", link: "/kesehatan" },
        {
          title: "Teknologi",
          icon: "mdi-monitor-cellphone",
          link: "/teknologi",
        },
        { title: "Bisnis", icon: "mdi-briefcase-variant", link: "/bisnis" },
        {
          title: "Entertainment",
          icon: "mdi-human-greeting-proximity",
          link: "/Entertainment",
        },
        { title: "Sains", icon: "mdi-atom", link: "/sains" },
      ],
    };
  },
  methods: {},
};
</script>
