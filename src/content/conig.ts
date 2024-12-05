// 1. 从 `astro:content` 导入
import { z, defineCollection } from "astro:content";
import { SITE } from "../consts";
// 2. 定义集合
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    lang: z.literal("en").default(SITE.defaultLanguage),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
// 3. 导出一个 `collections` 对象来注册集合
//    这个键应该与 `src/content` 中的集合目录名匹配
export const collections = {
  docs: blogCollection,
};
