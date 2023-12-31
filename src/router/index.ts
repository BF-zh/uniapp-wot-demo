/*
 * @Author: weisheng
 * @Date: 2021-10-13 11:15:00
 * @LastEditTime: 2023-05-31 17:12:11
 * @LastEditors: weisheng
 * @Description:
 * @FilePath: \uniapp-vue3-fant-ts\src\router\index.ts
 * 记得注释
 */

import pagesJsonToRoutes from 'uni-parse-pages'
import pagesJson from '../pages.json'

const router = createRouter({
  routes: [...pagesJsonToRoutes(pagesJson)],
})
export default router
