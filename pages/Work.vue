<template>
  <div>
    <h1 class="page-title text-center mt-4">Works</h1>
    <v-card class="ma-5">
      <v-tabs pararell>
        <v-tab>
          <v-icon left> mdi-account </v-icon>
          ポートフォリオ
        </v-tab>
        <!-- <v-tab>
          <v-icon left> mdi-briefcase </v-icon>
          おしごと
        </v-tab> -->
        <v-tab>
          <v-icon left> mdi-account-multiple </v-icon>
          ユニット活動
        </v-tab>
        <v-tab-item>
          <PersonalWork></PersonalWork>
        </v-tab-item>
        <!-- <v-tab-item>
          <MainJob></MainJob>
        </v-tab-item> -->
        <v-tab-item>
          <TeamWork></TeamWork>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <!-- <iframe
      src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=48&l=ur1&category=pc_store&f=ifr&linkID=4d06146f4b4f62e7d49216adce72aa64&t=revue0f-22&tracking_id=revue0f-22"
      class="pc amazon-banner"
      width="728"
      height="90"
      scrolling="no"
      border="0"
      marginwidth="0"
      style="border: none"
      frameborder="0"
    >
    </iframe> -->
  </div>
</template>
<script>
import PersonalWork from "../components/work/PersonalWork";
import MainJob from "../components/work/MainJob";
import TeamWork from "../components/work/TeamWork";

export default {
  name: "Work",

  components: {
    PersonalWork,
    MainJob,
    TeamWork,
  },
};
</script>
