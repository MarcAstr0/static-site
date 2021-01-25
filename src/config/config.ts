import { Booster } from '@boostercloud/framework-core'
import { BoosterConfig } from '@boostercloud/framework-types'
import { Provider } from '@boostercloud/framework-provider-aws'

Booster.configure('production', (config: BoosterConfig): void => {
  config.appName = 'static-site'
  config.provider = Provider([
    {
      packageName: '@boostercloud/rocket-static-sites-aws-infrastructure',
      parameters: {
        bucketName: 'booster-rocket-static-site',
        indexFile: 'index.html',
        errorFile: 'error.html',
      },
    },
  ])
})
