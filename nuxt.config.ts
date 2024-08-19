// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-08-19",

    css: [
								"~/src/css/style.css",
								"~/src/css/demo.css"
				],
    modules: [
								"@nuxt/icon"
				],
				devtools: {
								enabled: false
				}
})