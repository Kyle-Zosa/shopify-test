const path = require('path')

module.exports = {
  themes: {
    development: {
      id: '120459952317',
      password: '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',
      store: 'kz-dev.myshopify.com/',
      ignore: [
        'settings_data.json' // leave this here to avoid overriding theme settings on sync
      ]
    }
  }
}