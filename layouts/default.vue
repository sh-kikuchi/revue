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
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <div>
        <h2 class="site-title">Re:Vue</h2>
      </div>
      <div>
        <span>
          <a
            class="link-color"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_Rz-F6RMqCKGTalCROlcjbXie6mdy39izCkQnFZrRISbefw/viewform"
            ><v-icon>mdi-email</v-icon>
          </a>
        </span>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
    </v-app-bar>
    <v-main tag="div" class="v-main">
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app justify="center">
      <v-row justify="center">
        &copy; Project R {{ new Date().getFullYear() }}</v-row
      >
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
        {
          icon: "mdi-camera",
          title: "Views",
          to: "/picture",
        },
        {
          icon: "mdi-format-list-bulleted",
          title: "List",
          to: "/list",
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
@import url("https://fonts.googleapis.com/css2?family=Allura&family=Anton&family=Teko:wght@500&display=swap");

.v-toolbar__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.v-main {
  height: 100%;
  background: url("../assets/image/p_new0091_m_new00910.png");
  /* background-repeat: repeat; */
}

.site-title {
  margin-left: 3px;
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
  font-family: "" Anton, sans-serif;
  font-family: "Teko", sans-serif;
}

.contents {
  margin: 0 auto;
}
.footer {
  margin: 0 auto;
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

/*アマゾンアソシエイツ*/
.amazon-banner .amazon-link {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
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
