import axios from '@/utils/request'

export const RecommendMuisc = (limit) => {
  return axios({
    url: '/personalized',
    params: {
      limit
    }
  })
}
export const getSongList = (limit) => {
  return axios({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
}
