import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-FUEmrta8.js";import{d as k,j as g,o as l,e as d,f as o,F as v,k as $,n as y,t as p,l as b,_ as u,a as w,p as B,c as j,w as e,h as I,r as n}from"./app-By9CmiP2.js";import{o as S}from"./index-nlSmcLJj.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-gpw0esQ1.js";import"./YunCard.vue_vue_type_script_setup_true_lang-D_3JQnXv.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-Mi62bvAZ.js";const D={class:"links"},E={class:"link-items"},L=["href","title"],N={class:"link-left"},V=["src","alt"],z={class:"link-info",m:"l-2"},C={class:"link-blog",font:"serif black"},F={class:"link-desc"},O=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(t){const i=t,{data:c}=g(i.links,i.random);function f(s){S(s,i.errorImg)}return(s,_)=>(l(),d("div",D,[o("ul",E,[(l(!0),d(v,null,$(b(c),(a,m)=>(l(),d("li",{key:m,class:"link-item",style:y(`--primary-color: ${a.color}`)},[o("a",{class:"link-url",p:"x-4 y-2",href:a.url,title:a.name,alt:"portrait",rel:"friend",target:"_blank"},[o("div",N,[o("img",{class:"link-avatar",width:"64",height:"64",w:"16",h:"16",loading:"lazy",src:a.avatar,alt:a.name,onError:f},null,40,V)]),o("div",z,[o("div",C,p(a.blog),1),o("div",F,p(a.desc),1)])],8,L)],4))),128))])]))}}),R=u(O,[["__scopeId","data-v-64ff5004"]]),r=JSON.parse('{"title":"我的小伙伴们","description":"云游的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"云游的小伙伴们","links":"https://www.yunyoujun.cn/friends/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","path":"/home/runner/work/blog/blog/pages/links/index.md","lastUpdated":1706059739000}'),Y={name:"pages/links/index.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const t=w();t.meta.frontmatter=Object.assign(t.meta.frontmatter||{},r.frontmatter||{}),B("pageData",r)}};function J(t,i,c,f,s,_){const a=R,m=h;return l(),j(m,{frontmatter:s.frontmatter,data:s.data},{"main-content-md":e(()=>[I(a,{links:s.frontmatter.links,random:s.frontmatter.random},null,8,["links","random"])]),"main-header":e(()=>[n(t.$slots,"main-header")]),"main-header-after":e(()=>[n(t.$slots,"main-header-after")]),"main-nav":e(()=>[n(t.$slots,"main-nav")]),"main-content":e(()=>[n(t.$slots,"main-content")]),"main-content-after":e(()=>[n(t.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(t.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(t.$slots,"main-nav-after")]),comment:e(()=>[n(t.$slots,"comment")]),footer:e(()=>[n(t.$slots,"footer")]),aside:e(()=>[n(t.$slots,"aside")]),"aside-custom":e(()=>[n(t.$slots,"aside-custom")]),default:e(()=>[n(t.$slots,"default")]),_:3},8,["frontmatter","data"])}const H=u(Y,[["render",J]]);export{r as data,H as default};
