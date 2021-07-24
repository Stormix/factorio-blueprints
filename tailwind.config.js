const path = require('path')
const BASE_DIR = path.join(__dirname, 'src')
const VUE_FILE = path.join('**', '*.vue')

const config = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [path.join(BASE_DIR, VUE_FILE), path.join(__dirname, '*.html')],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

module.exports = config