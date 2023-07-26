export const themeData = JSON.parse("{\"sidebar\":{\"/guide/\":[\"/guide/\",\"q/\"],\"/modules/\":[\"/modules/\",\"FarmingHelper\"],\"/options/\":[\"/options/\"]},\"repo\":\"seiuna/skymatrix-docs\",\"docsDir\":\"docs\",\"locales\":{\"/en\":{\"editLinkText\":\"Edit this page on GitHub\"},\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"navbar\":[{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"所有功能\",\"link\":\"/modules/\"},{\"text\":\"所有选项\",\"link\":\"/options/\"},{\"text\":\"路径点\",\"link\":\"/waypoint/\"}],\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
