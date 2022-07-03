<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <van-cell title="热门搜索" />
    <div class="hot-search" v-if="value.trim() === ''">
      <van-button
        v-for="(item, index) in hots"
        :key="index"
        type="primary"
        size="small"
        round
        class="btn1"
        hairline
        color="linear-gradient(to right, skyblue, pink)"
        @click="value = item.first"
        >{{ item.first }}</van-button
      >
    </div>
    <div class="search-result" v-else>
      <van-list
        @load="onLoad"
        v-model="loading"
        offset="1"
        :immediate-check="false"
        :finished="finished"
        finished-text="没有更多了~~~~~~~"
        ><SongItem
          v-for="item in Searchs"
          :key="item.id"
          :id="item.id"
          :title="item.al.name"
          :label="item.ar[0].name + '---' + item.al.name"
        ></SongItem
      ></van-list>
    </div>
  </div>
</template>

<script>
import { getHots, getSearchs } from '@/api'
import SongItem from '../../components/SongItem.vue'
export default {
  name: 'Search',
  data () {
    return {
      value: '',
      hots: [],
      Searchs: [],
      loading: false,
      limit: 10,
      page: 1,
      finished: false
    }
  },
  created () {
    this.getHots()
  },
  methods: {
    async getHots () {
      const { data } = await getHots()
      this.hots = data.result.hots
    },
    getSearchs () {
      if (this.value.trim() === '') return
      this.page = 1
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        const { data } = await getSearchs(this.value, this.limit)
        this.Searchs = data.result.songs
      }, 300)
    },
    async onLoad () {
      const { data } = await getSearchs(
        this.value,
        this.limit,
        this.page * this.limit
      )
      if (!data.result.songs) {
        this.finished = true
        return
      }
      this.Searchs.push(...data.result.songs)
      this.page += 1
      this.loading = false
    }
  },
  watch: {
    value: 'getSearchs'
  },
  components: { SongItem }
}
</script>

<style scoped lang="less">
.btn1 {
  margin: 5px 7px;
}
</style>
