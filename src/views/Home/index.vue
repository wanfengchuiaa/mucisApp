<template>
  <div>
    <van-cell title="推荐歌单" class="SinceYiDCard" />
    <van-grid :column-num="3">
      <van-grid-item
        v-for="item in RecommendMusicData"
        :key="item.id"
        :icon="item.picUrl"
        :text="item.name"
      />
    </van-grid>
    <van-cell title="推荐歌单" class="SinceYiDCard" />
    <!-- 歌曲推荐列表 -->
    <!-- <van-cell
      v-for="item in SongList"
      :key="item.id"
      :title="item.name"
      :label="item.song.artists[0].name + '---' + item.name"
      center
      class="new-song"
      ><van-icon name="play-circle-o"
    /></van-cell> -->
    <SongItem
      v-for="item in SongList"
      :key="item.id"
      :id="item.id"
      :label="item.song.artists[0].name + '---' + item.name"
      :title="item.name"
    ></SongItem>
  </div>
</template>

<script>
import { RecommendMuisc, getSongList } from '@/api'
import SongItem from '../../components/SongItem.vue'
export default {
  name: 'Home',
  data () {
    return {
      RecommendMusicData: [],
      SongList: []
    }
  },
  created () {
    this.RecommendMuiscList()
    this.getSongList()
  },
  methods: {
    async RecommendMuiscList () {
      const res = await RecommendMuisc(6)
      this.RecommendMusicData = res.data.result
    },
    async getSongList () {
      const res = await getSongList()
      this.SongList = res.data.result
    }
  },
  components: { SongItem }
}
</script>

<style scoped lang="less">
.SinceYiDCard {
  background-color: #eee;
  margin: 5px 0 10px;
}
/deep/.van-icon__image {
  width: 120px;
  height: 100px;
  object-fit: cover;
}

/deep/.van-grid-item__content {
  padding: 0;
}
/deep/.van-grid-item__text {
  height: 36px;
  width: 120px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>
