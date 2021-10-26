<template>
  <v-card flat>
    <v-card-text>
      <v-timeline :reverse="reverse" dense>
        <v-timeline-item
          ><!-- v-for="n in 2" :key="n" -->
          <span slot="opposite">Tus eu perfecto</span>
          <v-card class="elevation-2">
            <v-card-title class="subtitle-1">
              タスク管理システム開発
            </v-card-title>
            <v-card-text>
              <p>2021.1-2021.7</p>
              <h4>使用言語</h4>
              <p>HTML,CSS,jQuery,Laravel6</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title class="subtitle-1">
              飲食店向けシステム開発
            </v-card-title>
            <v-card-text>
              <p>2019.4-2020.8</p>
              <h4>使用言語・ツール</h4>
              <p>SQLserver・CRS言語(Biz/Browser,Biz/Designer)</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "MainJob",
};
</script>
