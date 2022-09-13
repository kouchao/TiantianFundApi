import { defaultTheme } from 'vuepress'
export default {
  theme: defaultTheme({
    base: '/TiantianFundApi/',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: 'Api 列表',
        link: '/apis',
      },
      {
        text: 'Github',
        link: 'https://github.com/kouchao/TiantianFundApi',
      },
    ],
  }),
}
