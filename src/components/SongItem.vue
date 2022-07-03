<template>
  <div>
    <van-cell
      :title="title"
      :label="label"
      center
      class="new-song"
      @click="Clickcall"
      ><van-icon name="play-circle-o"
    /></van-cell>
  </div>
</template>

<script>
export default {
  props: ['title', 'label', 'id'],
  methods: {
    Clickcall () {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.new-song {
  .van-cell__title {
    flex: 4;
  }
}
</style>
