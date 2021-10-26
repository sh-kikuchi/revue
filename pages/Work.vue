<template>
  <v-card>
    <h1 class="page-title">My Works</h1>
    <h3 class="page-sub-title">( ﾟ ρ ﾟ )ﾎﾞｰ</h3>
    <v-tabs pararell>
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        自己紹介・制作
      </v-tab>
      <v-tab>
        <v-icon left> mdi-briefcase </v-icon>
        おしごと
      </v-tab>
      <v-tab>
        <v-icon left> mdi-account-multiple </v-icon>
        ユニット活動
      </v-tab>
      <v-tab-item>
        <PersonalWork></PersonalWork>
      </v-tab-item>
      <v-tab-item>
        <MainJob></MainJob>
      </v-tab-item>
      <v-tab-item>
        <TeamWork></TeamWork>
      </v-tab-item>
    </v-tabs>
  </v-card>
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
