import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: ['dreamlanter','の','blog'],
      cloud: {
        enable: true,
      },
    },
    bg_image:{
      enable: true,
      url: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/background.jpg',
      dark: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/test_dark_background.JPG',
      opacity: 0.6,
    },
    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2022,
    },
  },
  siteConfig: {
    // 启用评论
    comment: {
      enable: false
    },
  },
  unocss: { safelist },
})
