import axios from '@/utils/request'

export const getHots = () => {
  return axios({
    url: '/search/hot'
  })
}
export const getSearchs = (keywords, limit, offset) => {
  return axios({
    url: '/cloudsearch',
    params: {
      keywords,
      limit,
      offset
    }
  })
}
