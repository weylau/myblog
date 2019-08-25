import Hljs from 'highlight.js'

import 'highlight.js/styles/monokai-sublime.css'

let Highlight = {}

Highlight.install = (Vue, options) => {
    Vue.directive('highlight', (el) => {
        let blocks = el.querySelectorAll('pre code')

        blocks.forEach((block) => {
            Hljs.highlightBlock(block)
        })
    })
}

export default Highlight