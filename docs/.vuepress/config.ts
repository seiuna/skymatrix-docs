import {defaultTheme, defineUserConfig} from 'vuepress'

export default defineUserConfig({

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: '',

        },
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        },
    },
    theme: defaultTheme({

        sidebar:{
            '/guide/': [
                '/guide/', // 默认显示指南的 README.md 或 index.md
                'q/', // 显示 docs/guide/introduction.md

            ],
            '/modules/': [
                '/modules/',
                'FarmingHelper',
            ],
            '/options/': [
                '/options/',
            ],
        },
        repo: 'seiuna/skymatrix-docs',
        docsDir: 'docs',
        locales: {
            '/en': {
                editLinkText: 'Edit this page on GitHub',
            },

            '/': {

                // navbar
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                navbar:[
                    { text: '指南', link: '/guide/' },
                    { text: '所有功能', link: '/modules/' },
                    { text: '所有选项', link: '/options/' },
                    { text: '路径点', link: '/waypoint/' },
                ],
                // page meta
                editLinkText: '在 GitHub 上编辑此页',

                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                // custom containers
                tip: '提示',
                warning: '注意',
                danger: '警告',
                // 404 page
                notFound: [
                    '这里什么都没有捏',
                    '我们怎么到这来了？',
                    '这是一个 404 页面',
                    '看起来我们进入了错误的链接',
                    '这是哪?',
                ],
                backToHome: '返回首页',
                // a11y
                openInNewWindow: '在新窗口打开',
                toggleColorMode: '切换颜色模式',
                toggleSidebar: '切换侧边栏',
            },
        },


    }),

})