import { Button, NavBar, Tabbar, TabbarItem } from 'vant'
const elements = [Button, NavBar, Tabbar, TabbarItem]
export default function (Vue) {
  elements.forEach((item) => Vue.use(item))
}
