import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://dreamlanter.github.io/blog',
  lang: 'zh-CN',
  title: 'DreamLanter Blog',
  author: {
    name: 'dreamlanter',
    avatar: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/avatar.jpg',
    status:{
      emoji: '🤐'
    },
  },
  favicon: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/favicon.png',
  subtitle: 'To the Moon',
  description: '资源分享，社会观察，碎碎念。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
       name: 'GitHub',
       link: 'https://github.com/DreamLanter',
       icon: 'i-ri-github-line',
       color: '#6e5494',
    },
    {
      name: 'E-Mail',
      link: 'mailto:ndyttl0903@gmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '求求你给我打点钱吧！我什么都会做的！我真的什么都会做的！！',
    methods: [
      {
        name: '支付宝',
        url: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/PixelSnap%202023-08-01%20at%2011.43.59%402x.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: '微信支付',
        url: 'https://raw.githubusercontent.com/DreamLanter/picture-bed/main/PixelSnap%202023-08-01%20at%2011.43.49%402x.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
  
})
