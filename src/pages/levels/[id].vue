<template>
  <div>
    <v-parallax
      class="bg-dark"
      height="40vh"
      max-height="300px"
      src="/milad-fakurian-E8Ufcyxz514-unsplash.jpg"
    >
      <div class="bg-dark-in d-flex mt-1 flex-column fill-height justify-center align-center text-white">
        <v-container>
          <v-row justify="start" alignContent="start" dense>
            <v-col class="hidden-md-and-down" cols="12" sm="12" md="6" lg="4" xl="3">
                <v-row justify="center">
                  <v-col elevation="8" cols="5">
                    <v-card class="mx-n6 rounded-lg">
                      <v-img class="rounded-lg" max-height="200px" src="https://gochiusa.com/core_sys/images/main/cont/special/v/2022/chino.png" />
                    </v-card>
                  </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="6" xl="5">
              <v-spacer class="hidden-lg-and-up" style="height: 20px;" />
              <v-row justify="end" alignContent="end">
                <v-col cols="8" xs="8" sm="8" md="6" lg="12" xl="12">
                  <h4 class="text-h4 text-start font-weight-thin mb-4">
                    譜面タイトル
                  </h4>
                  <h4 class="text-h5 text-start mb-1">
                    譜面アーティスト名
                  </h4>
                  <h4 class="text-h5 text-start mb-1">
                    譜面作者名
                  </h4>
                </v-col>
                <v-col class="hidden-lg-and-up" cols="4" xs="4" sm="4" md="6" lg="12" xl="12">
                  <v-row justify="center">
                    <v-col elevation="8" class="p-n6" cols="10">
                      <v-card class="rounded-lg">
                        <v-img class="rounded-lg" max-height="180px" src="https://gochiusa.com/core_sys/images/main/cont/special/v/2022/chino.png" />
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="2" xl="2">
                <p class="text-h5 text-end font-weight-thin">
                  #KFCN1204
                </p>
                <p class="text-h6 text-end">
                  Level: 5
                </p>
                <p class="text-h6 text-end">
                  J-POP
                </p>
            </v-col>
          </v-row>
          <v-row class="hidden-md-and-down" justify="end" dense>
            <h4 class="mt-2 subheading text-center">
                <v-btn-group
                  color="secondary"
                  rounded
                  dense
                >
                  <v-btn>
                    <v-icon>
                      {{ mdiLeadPencil }}
                    </v-icon>
                    編集
                  </v-btn>
                  <v-btn>
                    <v-icon>
                      {{ mdiHeartOutline }}
                    </v-icon>
                    いいね
                  </v-btn>
                  <v-btn>
                    <v-icon>
                      {{ mdiBookmarkOutline }}
                    </v-icon>
                    ブックマーク
                  </v-btn>
                  <v-btn>
                    <v-icon>
                      {{ mdiCartVariant }}
                    </v-icon>
                    カートに追加
                  </v-btn>
                </v-btn-group>
            </h4>
          </v-row>
        </v-container>
      </div>
    </v-parallax>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="12" md="8" lg="8">
          <v-card>
            <v-card-text>
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
              香風智乃です一応うさぎです香風智乃です一応うさぎです
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mb-4 text-center">
            <v-card-text>
              <p class="text-h5">Koi</p>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-text>
              <p><v-icon>{{ mdiCalendar }}</v-icon> 作成時刻 2022/05/14 20:03</p>
              <p class="mb-2"><v-icon>{{ mdiCalendar }}</v-icon> 更新時刻 2022/05/14 20:03</p>
              <p><v-icon>{{ mdiHeart }}</v-icon> いいね数 0回</p>
              <p><v-icon>{{ mdiBookmark }}</v-icon> ブクマ数 0回</p>
              <p><v-icon>{{ mdiPlayCircle }}</v-icon> プレイ数 0回</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-3">
        <v-col class="text-center" cols="12">
          <v-btn-group
            color="secondary"
            rounded
            dense
          >
            <v-btn>
              <v-icon>
                {{ mdiTwitter }}
              </v-icon>
              <p class="hidden-md-and-down">Twitterでシェア</p>
            </v-btn>
            <v-btn>
              <v-icon>
                {{ mdiMessageTextOutline }}
              </v-icon>
              <p class="hidden-md-and-down">LINEでシェア</p>
            </v-btn>
            <v-btn>
              <v-icon>
                {{ mdiClipboardText }}
              </v-icon>
              <p class="hidden-md-and-down">リンクをシェア</p>
            </v-btn>
          </v-btn-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.bg-dark::before{
	background-color: rgba(0,0,0,0.3);
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	content: ' ';
}
.bg-dark-in{
  position: absolute;
  width: 100%;
  text-align: center;
}

</style>

<script setup lang="ts">
import {
  mdiTwitter, mdiMessageTextOutline, mdiClipboardText,
  mdiCalendar, mdiPlayCircle, mdiLeadPencil,
  mdiHeart, mdiHeartOutline, mdiBookmark,
  mdiBookmarkOutline, mdiCartVariant
} from "@mdi/js"

useTitle("譜面")
</script>