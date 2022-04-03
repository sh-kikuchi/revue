<template>
  <div id="career">
    <h1 class="page-title">Career</h1>

    <div class="button-area d-flex justify-space-between overflow-x-auto">
      <div>
        <v-btn class="ma-2" outlined large fab color="indigo" v-on:click="add">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
      <div>
        <button class="csv-download-button" v-on:click="downloadCSV">
          <v-icon>mdi-download</v-icon>
          CSV出力
        </button>
        <input type="file" class="csv-read-button" @change="fileChange" />
      </div>
    </div>
    <v-simple-table class="ma-2 overflow-x-auto">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left date-col">開始日</th>
            <th class="text-left date-col">終了日</th>
            <th class="text-left company-col">企業名</th>
            <th class="text-left task-col">業務内容</th>
            <th class="text-left destroy-col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in careers" :key="index">
            <td>
              <input type="text" v-model="item.startDate" />
            </td>
            <td>
              <input type="text" v-model="item.endDate" />
            </td>
            <td><input type="text" v-model="item.company" /></td>
            <td><textarea v-model="item.task"></textarea></td>
            <td>
              <button v-on:click="destroy"><v-icon>mdi-delete</v-icon></button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      careers: [
        {
          startDate: "2022/01/01",
          endDate: "2022/03/31",
          company: "●×テクノ",
          task: "■ 案件名 ■ 人数  ■ 役割  ■ スキル/ツール  ■ 案件概要",
        },
      ],
    };
  },
  methods: {
    fileChange: function (e) {
      //CSVアップロード
      const file = e.target.files[0];
      const reader = new FileReader();
      const careers = [];
      const loadFunc = () => {
        const lines = reader.result.split("\n");
        lines.shift();
        lines.forEach((element) => {
          const careerData = element.split(",");
          if (careerData.length != 4) return;
          const career = {
            company: careerData[0],
            startDate: careerData[1],
            endDate: careerData[2],
            task: careerData[3].replace(/<br>/g, "\r\n"),
          };
          careers.push(career);
        });
        this.careers = careers;
      };

      // onloadはreadAsBinaryStringでファイルを読み込んだ後に実行されます.
      reader.onload = loadFunc;

      reader.readAsText(file, "Shift_JIS");
    },
    downloadCSV: function () {
      let csv_data =
        "company" + "," + "startDate" + "," + "endDate" + "," + "task" + "\f\n";
      //ダウンロードするCSVファイル名を指定する
      const filename = "download.csv";

      this.careers.forEach((el) => {
        let csv_line =
          el["company"] +
          "," +
          el["startDate"] +
          "," +
          el["endDate"] +
          "," +
          el["task"].replace(/\r?\n/g, " <br>") +
          "\f\n";
        csv_data += csv_line;
      });

      //CSVデータ
      const data = csv_data;
      //BOMを付与する（Excelでの文字化け対策）
      const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
      //Blobでデータを作成する
      const blob = new Blob([bom, data], { type: "text/csv" });

      //IE10/11用(download属性が機能しないためmsSaveBlobを使用）
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, filename);
        //その他ブラウザ
      } else {
        //BlobからオブジェクトURLを作成する（createObjectURL）
        const url = (window.URL || window.webkitURL).createObjectURL(blob);
        const download = document.createElement("a");
        download.href = url;
        download.download = filename;
        download.click();
        //createObjectURLで作成したオブジェクトURLを開放する
        (window.URL || window.webkitURL).revokeObjectURL(url);
      }
    },
    add: function () {
      //行追加
      this.careers.push({
        startDate: "",
        endDate: "",
        company: "",
        task: "■ 案件名 \f\n ■ 人数 \f\n ■ 役割 \f\n ■ スキル/ツール \f\n  ■ 案件概要",
      });
    },
    destroy: function (index) {
      //行削除
      this.careers.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.date-col {
  width: 75px;
}
.company-col {
  width: 200px;
}
textarea {
  width: 400px;
}
.csv-upload-button,
.csv-download-button {
  display: block;
}
</style>
