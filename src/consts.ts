export const SITE = {
  title: "ZiJingBlog",
  description: "ZiJingBlog",
  defaultLanguage: "en",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;
export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;
export const KNOWN_LANGUAGES = {
  english: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<
    string,
    { text: string; link: string; type: string; introduction: String }[]
  >
>;

//文章侧边栏配置
export const SIDEBAR: Sidebar = {
  en: {
    "2023": [
      {
        text: "HTTP常见状态码",
        link: "docs/en/com-http-code",
        type: "blog",
        introduction: "列举HTTP常见的状态码",
      },
    ],
    "2022": [
      {
        text: "解决跨域",
        link: "docs/en/resolve-cross-domain-issues",
        type: "blog",
        introduction: "了解何为跨域以及常见的解决跨域手段",
      },
      { text: "6月", link: "", type: "month", introduction: "时间分隔-2022-6" },
      {
        text: "常见网络攻击",
        link: "docs/en/internet-attack",
        type: "blog",
        introduction: "介绍常见的网络攻击手段",
      },
    ],
    框架配置: [
      {
        text: "Astro快速搭建博客",
        link: "docs/en/astro-fast-building",
        type: "blog",
        introduction:
          "Astro 是集多功能于一体的 Web 框架 ，用于构建快速、以内容为中心的网站,本文会为你快速了解并搭建属于自己的博客",
      },
      {
        text: "Astro快速搭建博客",
        link: "docs/en/astro-fast-building",
        type: "blog",
        introduction: "",
      },
      {
        text: "Astro快速搭建博客",
        link: "docs/en/astro-fast-building",
        type: "blog",
        introduction: "",
      },
      {
        text: "Astro快速搭建博客",
        link: "docs/en/astro-fast-building",
        type: "blog",
        introduction: "",
      },
      {
        text: "Astro快速搭建博客",
        link: "docs/en/astro-fast-building",
        type: "blog",
        introduction: "",
      },
    ],
  },
};
