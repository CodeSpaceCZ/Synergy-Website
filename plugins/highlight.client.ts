import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import highlightJS from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
    hljs.registerLanguage('html', xml)
    nuxtApp.vueApp.use(highlightJS)
});
