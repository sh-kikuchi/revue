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
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title tag="a" class="link-color">
              <a
                class="link-color"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_Rz-F6RMqCKGTalCROlcjbXie6mdy39izCkQnFZrRISbefw/viewform"
              >
                Contacts
              </a>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <h2 class="site-title">
        Re:<span><font-awesome-icon :icon="['fab', 'vuejs']" /></span>ue
      </h2>
      <!-- <v-toolbar-title>The Grand EXperiments</v-toolbar-title> -->
      <v-spacer />
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main class="v-main">
      <Nuxt />
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right">
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <!-- <v-list-item-title>Switch drawer (click me)</v-list-item-title> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app justify="center">
      <v-row justify="center">&copy; {{ new Date().getFullYear() }}</v-row>
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
          title: "Top",
          to: "/",
        },
        {
          icon: "mdi-information-outline",
          title: "Readme",
          to: "/about",
        },
        {
          icon: "mdi-account",
          title: "WorkS",
          to: "/work",
        },
        {
          icon: "mdi-fountain-pen",
          title: "TechS",
          to: "/blog",
        },
        {
          icon: "mdi-format-list-bulleted",
          title: "ListS",
          to: "/list",
        },
        {
          icon: "mdi-palette",
          title: "Designs",
          to: "/design",
        },
        {
          icon: "mdi-book-open-variant",
          title: "BookS",
          to: "/book",
        },
      ],
      miniVariant: false,
      right: true,
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
.site-title {
  margin-left: 3px;
}
.link-color {
  text-decoration: none;
  color: black;
}
.html-class {
  height: 100%;
}
.body-class {
  height: 100%;
}
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-application {
  /* ドット（水玉）模様のCSS */
  background-color: #ffffff;
  background-image: radial-gradient(#006633 28%, transparent 35%),
    radial-gradient(#006633 28%, transparent 35%);
  background-position: 0 0, 2px 2px;
  background-size: 4px 4px;
}

.page-title,
.page-sub-title {
  text-align: center;
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
.footer {
  margin: 0 auto;
}
</style>
