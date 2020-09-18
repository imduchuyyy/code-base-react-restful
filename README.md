# Code Base Front-end React, Webpack, Babel, Eslint using with RESTful api

## Setting:

1. Connect to Backend
   - Setting in 2 file `.env.development.local` and `.env.production.local`
2. Setting router
   - Setting in `src/configs/routers/index.js`
3. Setting Provider
   - Setting in `src/utils/provider/index.js`

## Usage:

1. Running with command:

   - Start
     > npm run start
   - Build
     > npm run build

2. Using alias
   - Đối với các thư mục cấp 0 từ `src`, vui lòng tạo file `index.js` để `export` các component ở trong thư mục cấp 0 đó.
   - Sau khi `export` các bạn có thể `import` theo cách sau.

```javascript
import { ... } from '@components'
import { ... } from '@contexts'
import { ... } from '@environments'
import { ... } from '@helpers'
import { ... } from '@hooks'
import { ... } from '@layouts'
import { ... } from '@pages'
import { ... } from '@translation'
```

3. Support Dynamic Import

```javascript
import('@pages/login').then(({ default: Component }) => {
  return <Component />
})
```

4. Support i18next
   - Edit folder `resource` in folder `src/translation` to translate
5. Support eslint
