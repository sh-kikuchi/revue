<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <div>
            <v-list-item-action tag="div" class="v-list-item-action">
              <v-icon size="30">
                {{ item.icon }}
              </v-icon>
              <v-list-item-title v-text="item.title" class="item-subtitle" />
            </v-list-item-action>
          </div>
        </v-list-item>
      </v-list>
      <v-menu right tag="div" class="v-list-item-actions">
        <template v-slot:activator="{ on, attrs }">
          <div dark v-bind="attrs" v-on="on" style="text-align: center">
            <v-icon size="30">mdi-dots-horizontal</v-icon>
          </div>
        </template>

        <v-list tag="div" style="margin-left: 30px" class="d-flex">
          <v-list-item
            v-for="(subItem, index) in subItems"
            :to="subItem.to"
            router
            exact
            :key="index"
          >
            <div style="width: 30px; margin: 0 auto">
              <v-list-item-action>
                <v-icon size="30">
                  {{ subItem.icon }}
                </v-icon>
                <v-list-item-title
                  v-text="subItem.title"
                  class="item-subtitle"
                />
              </v-list-item-action>
            </div>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <div>
        <h2 class="site-title">Re:Vue</h2>
      </div>
      <div>
        <span>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        </span>
      </div>
    </v-app-bar>
    <v-main tag="div" class="v-main">
      <Nuxt />
    </v-main>
    <v-footer padless style="background-color: rgb(62, 60, 65)">
      <v-card
        flat
        tile
        class="lighten-1 white--text text-center mx-auto"
        style="background-color: rgb(62, 60, 65)"
      >
        <v-card-text class="white--text">
          <img class="footer-img" src="~@/assets/image/s_logo_gray.png" />
          2021-{{ new Date().getFullYear() }} — <strong>Re:Vue</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "",
          to: "/",
        },
        {
          icon: "mdi-information-outline",
          title: "About",
          to: "/about",
        },
        {
          icon: "mdi-account",
          title: "Work",
          to: "/work",
        },
        {
          icon: "mdi-fountain-pen",
          title: "Blog",
          to: "/blog",
        },

        {
          icon: "mdi-palette",
          title: "Design",
          to: "/design",
        },
      ],
      subItems: [
        {
          icon: "mdi-camera",
          title: "Views",
          to: "/picture",
        },
        {
          icon: "mdi-label",
          title: "Labels",
          to: "/label",
        },
        {
          icon: "mdi-sync",
          title: "Convert",
          to: "/convert",
        },
        {
          icon: "mdi-newspaper",
          title: "News",
          to: "/news",
        },
        {
          icon: "mdi-target",
          title: "scratch",
          to: "/scratch",
        },
      ],
      miniVariant: true,
      right: false,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  head: {
    htmlAttrs: {
      class: "html-class",
    },
    bodyAttrs: {
      class: "body-class",
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Allura&family=Anton&family=Rock+Salt&family=Teko:wght@500&display=swap");

.v-toolbar__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(225, 231, 238);
}

.v-main {
  height: 100%;
  background-color: rgb(183, 204, 219);
  /* background-image: url("../assets/image/p_new0091_m_new00910.png");
  background-repeat: repeat; */
}

.site-title {
  margin-left: 3px;
}

.v-navigation-drawer__content {
  background-color: rgb(241, 241, 243);
  /* background-color: rgb(225, 231, 238); */
}
/**メニュータイトル */
.list-item {
  display: block;
}

.item-title {
  text-align: center;
}

.item-subtitle {
  text-align: center;
  font-size: 7px;
  padding: 0;
}

.link-color {
  text-decoration: none;
  /* color: #fff; */
}

.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.page-title,
.page-sub-title {
  text-align: center;
  font-family: "Rock Salt", cursive;
  /* font-family: 'Allura', cursive;
  font-family: 'Anton', sans-serif;
  font-family: 'Teko', sans-serif; */
}

.contents {
  margin: 0 auto;
}
.footer {
  height: 180px;
  margin: 0 auto;
  vertical-align: middle;
  line-height: 180px;
}
.footer-img {
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.page-title,
.page-sub-title {
  text-align: center;
}

.contents {
  margin: 0 auto;
}
.contact-link {
  color: #fff;
  background-color: rgba(143, 188, 143, 0.3);
}

.footer {
  margin: 0 auto;
}

/*テックブログの記事一覧*/
.back-link {
  color: black;
  text-decoration: none;
}

/*レスポンスデザイン */
/* パソコンで見たときは"pc"のclassがついた画像が表示される */
.pc {
  display: block !important;
  margin: 10px auto;
}
.sp {
  display: none !important;
}

/* スマートフォンで見たときは"sp"のclassがついた画像が表示される */
@media only screen and (max-width: 750px) {
  .pc {
    display: none !important;
  }
  .sp {
    display: block !important;
  }
}
</style>
