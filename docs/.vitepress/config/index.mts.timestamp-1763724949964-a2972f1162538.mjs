// .vitepress/config/index.mts
import { withPwa } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/@vite-pwa+vitepress@1.0.1_v_22711a1074ec998f25a9bd3a76aa8589/node_modules/@vite-pwa/vitepress/dist/index.mjs";
import { defineConfigWithTheme } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// .vitepress/config/en.mts
import { defineConfig } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";

// ../package.json
var version = "5.5.9";

// .vitepress/config/en.mts
var en = defineConfig({
  description: "Vben Admin Naive - Naive UI version SPA independently split from Vue Vben Admin v5.5.9",
  lang: "en-US",
  themeConfig: {
    darkModeSwitchLabel: "Theme",
    darkModeSwitchTitle: "Switch to Dark Mode",
    docFooter: {
      next: "Next Page",
      prev: "Previous Page"
    },
    editLink: {
      pattern: "https://github.com/Ducr/vue-vben-admin-naive/edit/main/docs/src/:path",
      text: "Edit this page on GitHub"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Ducr`,
      message: "Released under the MIT License."
    },
    langMenuLabel: "Language",
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      },
      text: "Last updated on"
    },
    lightModeSwitchTitle: "Switch to Light Mode",
    nav: nav(),
    outline: {
      label: "Navigate"
    },
    returnToTopLabel: "Back to top",
    sidebar: {
      "/en/commercial/": {
        base: "/en/commercial/",
        items: sidebarCommercial()
      },
      "/en/guide/": { base: "/en/guide/", items: sidebarGuide() }
    }
  }
});
function sidebarGuide() {
  return [
    {
      collapsed: false,
      text: "Introduction",
      items: [
        {
          link: "introduction/vben",
          text: "About Vben Admin"
        },
        {
          link: "introduction/why",
          text: "Why Choose Us?"
        },
        { link: "introduction/quick-start", text: "Quick Start" },
        { link: "introduction/thin", text: "Lite Version" }
      ]
    },
    {
      text: "Basics",
      items: [
        { link: "essentials/concept", text: "Basic Concepts" },
        { link: "essentials/development", text: "Local Development" },
        { link: "essentials/route", text: "Routing and Menu" },
        { link: "essentials/settings", text: "Configuration" },
        { link: "essentials/icons", text: "Icons" },
        { link: "essentials/styles", text: "Styles" },
        { link: "essentials/external-module", text: "External Modules" },
        { link: "essentials/build", text: "Build and Deployment" },
        { link: "essentials/server", text: "Server Interaction and Data Mock" }
      ]
    },
    {
      text: "Advanced",
      items: [
        { link: "in-depth/login", text: "Login" },
        { link: "in-depth/theme", text: "Theme" },
        { link: "in-depth/access", text: "Access Control" },
        { link: "in-depth/locale", text: "Internationalization" },
        { link: "in-depth/features", text: "Common Features" },
        { link: "in-depth/check-updates", text: "Check Updates" },
        { link: "in-depth/loading", text: "Global Loading" },
        { link: "in-depth/ui-framework", text: "UI Framework Switching" }
      ]
    },
    {
      text: "Engineering",
      items: [
        { link: "project/standard", text: "Standards" },
        { link: "project/cli", text: "CLI" },
        { link: "project/dir", text: "Directory Explanation" },
        { link: "project/test", text: "Unit Testing" },
        { link: "project/tailwindcss", text: "Tailwind CSS" },
        { link: "project/changeset", text: "Changeset" },
        { link: "project/vite", text: "Vite Config" }
      ]
    },
    {
      text: "Others",
      items: [
        { link: "other/project-update", text: "Project Update" },
        { link: "other/remove-code", text: "Remove Code" },
        { link: "other/faq", text: "FAQ" }
      ]
    }
  ];
}
function sidebarCommercial() {
  return [
    {
      link: "community",
      text: "Community"
    },
    {
      link: "technical-support",
      text: "Technical-support"
    },
    {
      link: "customized",
      text: "Customized"
    }
  ];
}
function nav() {
  return [
    {
      activeMatch: "^/en/(guide|components)/",
      text: "Doc",
      items: [
        {
          activeMatch: "^/en/guide/",
          link: "/en/guide/introduction/vben",
          text: "Guide"
        },
        // {
        //   activeMatch: '^/en/components/',
        //   link: '/en/components/introduction',
        //   text: 'Components',
        // },
        {
          text: "Historical Versions",
          items: [
            {
              link: "https://doc.vvbin.cn",
              text: "2.x Version Documentation"
            }
          ]
        }
      ]
    },
    {
      text: "Demo",
      items: [
        {
          text: "Vben Admin",
          items: [
            {
              link: "https://ducrong.com/vue-vben-admin-naive",
              text: "Naive UI Version (Current)"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-antd",
              text: "Ant Design Vue Version"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-ele",
              text: "Element Plus Version"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-tdesign",
              text: "TDesign Version"
            }
          ]
        },
        {
          text: "Others",
          items: [
            {
              link: "https://vben.vvbin.cn",
              text: "Vben Admin 2.x"
            }
          ]
        }
      ]
    },
    {
      text: version,
      items: [
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive/releases",
          text: "Changelog"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive",
          text: "Roadmap"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive/blob/main/.github/contributing.md",
          text: "Contribution"
        }
      ]
    },
    {
      link: "/commercial/technical-support",
      text: "\u{1F984} Tech Support"
    },
    {
      link: "/sponsor/personal",
      text: "\u2728 Sponsor"
    },
    {
      link: "/commercial/community",
      text: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466} Community"
    }
    // {
    //   link: '/friend-links/',
    //   text: '🤝 Friend Links',
    // },
  ];
}

// .vitepress/config/shared.mts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import {
  viteArchiverPlugin,
  viteVxeTableImportsPlugin
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/internal/vite-config/dist/index.mjs";
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/@nolebase+vitepress-plugin-_ddb56cb1bb7ffd0ad5e320e216acbe92/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import tailwind from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/tailwindcss@3.4.18_yaml@2.8.1/node_modules/tailwindcss/lib/index.js";
import { defineConfig as defineConfig3, postcssIsolateStyles } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/vitepress-plugin-group-icon_91375fb5895993139e845db41dbafb6f/node_modules/vitepress-plugin-group-icons/dist/index.js";

// .vitepress/config/plugins/demo-preview.ts
import crypto from "node:crypto";
import { readdirSync } from "node:fs";
import { join } from "node:path";
var rawPathRegexp = (
  // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/strict
  /^(.+?(?:\.([\da-z]+))?)(#[\w-]+)?(?: ?{(\d+(?:[,-]\d+)*)? ?(\S+)?})? ?(?:\[(.+)])?$/
);
function rawPathToToken(rawPath) {
  const [
    filepath = "",
    extension = "",
    region = "",
    lines = "",
    lang = "",
    rawTitle = ""
  ] = (rawPathRegexp.exec(rawPath) || []).slice(1);
  const title = rawTitle || filepath.split("/").pop() || "";
  return { extension, filepath, lang, lines, region, title };
}
var demoPreviewPlugin = (md) => {
  md.core.ruler.after("inline", "demo-preview", (state) => {
    const insertComponentImport = (importString) => {
      const index = state.tokens.findIndex(
        (i) => i.type === "html_block" && i.content.match(/<script setup>/g)
      );
      if (index === -1) {
        const importComponent = new state.Token("html_block", "", 0);
        importComponent.content = `<script setup>
${importString}
</script>
`;
        state.tokens.splice(0, 0, importComponent);
      } else {
        if (state.tokens[index]) {
          const content = state.tokens[index].content;
          state.tokens[index].content = content.replace(
            "</script>",
            `${importString}
</script>`
          );
        }
      }
    };
    const regex = /<DemoPreview[^>]*\sdir="([^"]*)"/g;
    state.src = state.src.replaceAll(regex, (_match, dir) => {
      const componentDir = join(process.cwd(), "src", dir).replaceAll(
        "\\",
        "/"
      );
      let childFiles = [];
      let dirExists = true;
      try {
        childFiles = readdirSync(componentDir, {
          encoding: "utf8",
          recursive: false,
          withFileTypes: false
        }) || [];
      } catch {
        dirExists = false;
      }
      if (!dirExists) {
        return "";
      }
      const uniqueWord = generateContentHash(componentDir);
      const ComponentName = `DemoComponent_${uniqueWord}`;
      insertComponentImport(
        `import ${ComponentName} from '${componentDir}/index.vue'`
      );
      const { path: _path } = state.env;
      const index = state.tokens.findIndex((i) => i.content.match(regex));
      if (!state.tokens[index]) {
        return "";
      }
      const firstString = "index.vue";
      childFiles = childFiles.sort((a, b) => {
        if (a === firstString) return -1;
        if (b === firstString) return 1;
        return a.localeCompare(b, "en", { sensitivity: "base" });
      });
      state.tokens[index].content = `<DemoPreview files="${encodeURIComponent(JSON.stringify(childFiles))}" ><${ComponentName}/>
        `;
      const _dummyToken = new state.Token("", "", 0);
      const tokenArray = [];
      childFiles.forEach((filename) => {
        const templateStart = new state.Token("html_inline", "", 0);
        templateStart.content = `<template #${filename}>`;
        tokenArray.push(templateStart);
        const resolvedPath = join(componentDir, filename);
        const { extension, filepath, lang, lines, title } = rawPathToToken(resolvedPath);
        const token = new state.Token("fence", "code", 0);
        token.info = `${lang || extension}${lines ? `{${lines}}` : ""}${title ? `[${title}]` : ""}`;
        token.content = `<<< ${filepath}`;
        token.src = [resolvedPath];
        tokenArray.push(token);
        const templateEnd = new state.Token("html_inline", "", 0);
        templateEnd.content = "</template>";
        tokenArray.push(templateEnd);
      });
      const endTag = new state.Token("html_inline", "", 0);
      endTag.content = "</DemoPreview>";
      tokenArray.push(endTag);
      state.tokens.splice(index + 1, 0, ...tokenArray);
      return "";
    });
  });
};
function generateContentHash(input, length = 10) {
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  return Number.parseInt(hash, 16).toString(36).slice(0, length);
}

// .vitepress/config/zh.mts
import { defineConfig as defineConfig2 } from "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/node_modules/.pnpm/vitepress@1.6.4_@algolia+cl_7b553e681b6ee23b18b4a6964646ea73/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig2({
  description: "Vben Admin Naive - \u57FA\u4E8E Vue Vben Admin v5.5.9 \u72EC\u7ACB\u62C6\u5206\u7684 Naive UI \u7248\u672C\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09",
  lang: "zh-Hans",
  themeConfig: {
    darkModeSwitchLabel: "\u4E3B\u9898",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    docFooter: {
      next: "\u4E0B\u4E00\u9875",
      prev: "\u4E0A\u4E00\u9875"
    },
    editLink: {
      pattern: "https://github.com/Ducr/vue-vben-admin-naive/edit/main/docs/src/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    footer: {
      copyright: `Copyright \xA9 2020-${(/* @__PURE__ */ new Date()).getFullYear()} Ducr`,
      message: "\u57FA\u4E8E MIT \u8BB8\u53EF\u53D1\u5E03."
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      },
      text: "\u6700\u540E\u66F4\u65B0\u4E8E"
    },
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    nav: nav2(),
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebar: {
      "/commercial/": { base: "/commercial/", items: sidebarCommercial2() },
      "/components/": { base: "/components/", items: sidebarComponents() },
      "/guide/": { base: "/guide/", items: sidebarGuide2() }
    },
    sidebarMenuLabel: "\u83DC\u5355"
  }
});
function sidebarGuide2() {
  return [
    {
      collapsed: false,
      text: "\u7B80\u4ECB",
      items: [
        {
          link: "introduction/vben",
          text: "\u5173\u4E8E Vben Admin"
        },
        {
          link: "introduction/why",
          text: "\u4E3A\u4EC0\u4E48\u9009\u62E9\u6211\u4EEC?"
        },
        { link: "introduction/quick-start", text: "\u5FEB\u901F\u5F00\u59CB" },
        { link: "introduction/thin", text: "\u7CBE\u7B80\u7248\u672C" },
        {
          base: "/",
          link: "components/introduction",
          text: "\u7EC4\u4EF6\u6587\u6863"
        }
      ]
    },
    {
      text: "\u57FA\u7840",
      items: [
        { link: "essentials/concept", text: "\u57FA\u7840\u6982\u5FF5" },
        { link: "essentials/development", text: "\u672C\u5730\u5F00\u53D1" },
        { link: "essentials/route", text: "\u8DEF\u7531\u548C\u83DC\u5355" },
        { link: "essentials/settings", text: "\u914D\u7F6E" },
        { link: "essentials/icons", text: "\u56FE\u6807" },
        { link: "essentials/styles", text: "\u6837\u5F0F" },
        { link: "essentials/external-module", text: "\u5916\u90E8\u6A21\u5757" },
        { link: "essentials/build", text: "\u6784\u5EFA\u4E0E\u90E8\u7F72" },
        { link: "essentials/server", text: "\u670D\u52A1\u7AEF\u4EA4\u4E92\u4E0E\u6570\u636EMock" }
      ]
    },
    {
      text: "\u6DF1\u5165",
      items: [
        { link: "in-depth/login", text: "\u767B\u5F55" },
        // { link: 'in-depth/layout', text: '布局' },
        { link: "in-depth/theme", text: "\u4E3B\u9898" },
        { link: "in-depth/access", text: "\u6743\u9650" },
        { link: "in-depth/locale", text: "\u56FD\u9645\u5316" },
        { link: "in-depth/features", text: "\u5E38\u7528\u529F\u80FD" },
        { link: "in-depth/check-updates", text: "\u68C0\u67E5\u66F4\u65B0" },
        { link: "in-depth/loading", text: "\u5168\u5C40loading" },
        { link: "in-depth/ui-framework", text: "\u7EC4\u4EF6\u5E93\u5207\u6362" }
      ]
    },
    {
      text: "\u5DE5\u7A0B",
      items: [
        { link: "project/standard", text: "\u89C4\u8303" },
        { link: "project/cli", text: "CLI" },
        { link: "project/dir", text: "\u76EE\u5F55\u8BF4\u660E" },
        { link: "project/test", text: "\u5355\u5143\u6D4B\u8BD5" },
        { link: "project/tailwindcss", text: "Tailwind CSS" },
        { link: "project/changeset", text: "Changeset" },
        { link: "project/vite", text: "Vite Config" }
      ]
    },
    {
      text: "\u5176\u4ED6",
      items: [
        { link: "other/project-update", text: "\u9879\u76EE\u66F4\u65B0" },
        { link: "other/remove-code", text: "\u79FB\u9664\u4EE3\u7801" },
        { link: "other/faq", text: "\u5E38\u89C1\u95EE\u9898" }
      ]
    }
  ];
}
function sidebarCommercial2() {
  return [
    {
      link: "community",
      text: "\u4EA4\u6D41\u7FA4"
    },
    {
      link: "technical-support",
      text: "\u6280\u672F\u652F\u6301"
    },
    {
      link: "customized",
      text: "\u5B9A\u5236\u5F00\u53D1"
    }
  ];
}
function sidebarComponents() {
  return [
    {
      text: "\u7EC4\u4EF6",
      items: [
        {
          link: "introduction",
          text: "\u4ECB\u7ECD"
        }
      ]
    },
    {
      collapsed: false,
      text: "\u5E03\u5C40\u7EC4\u4EF6",
      items: [
        {
          link: "layout-ui/page",
          text: "Page \u9875\u9762"
        }
      ]
    },
    {
      collapsed: false,
      text: "\u901A\u7528\u7EC4\u4EF6",
      items: [
        {
          link: "common-ui/vben-api-component",
          text: "ApiComponent Api\u7EC4\u4EF6\u5305\u88C5\u5668"
        },
        {
          link: "common-ui/vben-alert",
          text: "Alert \u8F7B\u91CF\u63D0\u793A\u6846"
        },
        {
          link: "common-ui/vben-modal",
          text: "Modal \u6A21\u6001\u6846"
        },
        {
          link: "common-ui/vben-drawer",
          text: "Drawer \u62BD\u5C49"
        },
        {
          link: "common-ui/vben-form",
          text: "Form \u8868\u5355"
        },
        {
          link: "common-ui/vben-vxe-table",
          text: "Vxe Table \u8868\u683C"
        },
        {
          link: "common-ui/vben-count-to-animator",
          text: "CountToAnimator \u6570\u5B57\u52A8\u753B"
        },
        {
          link: "common-ui/vben-ellipsis-text",
          text: "EllipsisText \u7701\u7565\u6587\u672C"
        }
      ]
    }
  ];
}
function nav2() {
  return [
    {
      activeMatch: "^/(guide|components)/",
      text: "\u6587\u6863",
      items: [
        {
          activeMatch: "^/guide/",
          link: "/guide/introduction/vben",
          text: "\u6307\u5357"
        },
        {
          activeMatch: "^/components/",
          link: "/components/introduction",
          text: "\u7EC4\u4EF6"
        },
        {
          text: "\u5386\u53F2\u7248\u672C",
          items: [
            {
              link: "https://doc.vvbin.cn",
              text: "2.x\u7248\u672C\u6587\u6863"
            }
          ]
        }
      ]
    },
    {
      text: "\u6F14\u793A",
      items: [
        {
          text: "Vben Admin",
          items: [
            {
              link: "https://ducrong.com/vue-vben-admin-naive",
              text: "Naive UI \u7248\u672C\uFF08\u5F53\u524D\uFF09"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-antd",
              text: "Ant Design Vue \u7248\u672C"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-ele",
              text: "Element Plus \u7248\u672C"
            },
            {
              link: "https://ducrong.com/vue-vben-admin-tdesign",
              text: "TDesign \u7248\u672C"
            }
          ]
        },
        {
          text: "\u5176\u4ED6",
          items: [
            {
              link: "https://vben.vvbin.cn",
              text: "Vben Admin 2.x"
            }
          ]
        }
      ]
    },
    {
      text: version,
      items: [
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive/releases",
          text: "\u66F4\u65B0\u65E5\u5FD7"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive",
          text: "\u8DEF\u7EBF\u56FE"
        },
        {
          link: "https://github.com/Ducr/vue-vben-admin-naive/blob/main/.github/contributing.md",
          text: "\u8D21\u732E"
        }
      ]
    },
    {
      link: "/commercial/technical-support",
      text: "\u{1F984} \u6280\u672F\u652F\u6301"
    },
    {
      link: "/sponsor/personal",
      text: "\u2728 \u8D5E\u52A9"
    },
    {
      link: "/commercial/community",
      text: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466} \u4EA4\u6D41\u7FA4"
      // items: [
      //   {
      //     link: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&appChannel=share&inviteCode=22ySzj7pKiw&businessType=9&from=246610&biz=ka&mainSourceId=share&subSourceId=others&jumpsource=shorturl#/pc',
      //     text: 'QQ频道',
      //   },
      //   {
      //     link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mjZmlhgVzzUxvdxllB6C1vHpX8O8QRL0&authKey=DBdFbBwERmfaKY95JvRWqLCJIRGJAmKyZbrpzZ41EKDMZ5SR6MfbjOBaaNRN73fr&noverify=0&group_code=4286109',
      //     text: 'QQ群',
      //   },
      //   {
      //     link: 'https://discord.gg/VU62jTecad',
      //     text: 'Discord',
      //   },
      // ],
    }
    // {
    //   link: '/friend-links/',
    //   text: '🤝 友情链接',
    // },
  ];
}
var search = {
  root: {
    placeholder: "\u641C\u7D22\u6587\u6863",
    translations: {
      button: {
        buttonAriaLabel: "\u641C\u7D22\u6587\u6863",
        buttonText: "\u641C\u7D22\u6587\u6863"
      },
      modal: {
        errorScreen: {
          helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5",
          titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C"
        },
        footer: {
          closeText: "\u5173\u95ED",
          navigateText: "\u5207\u6362",
          searchByText: "\u641C\u7D22\u63D0\u4F9B\u8005",
          selectText: "\u9009\u62E9"
        },
        noResultsScreen: {
          noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
          reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988",
          reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
          suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2"
        },
        searchBox: {
          cancelButtonAriaLabel: "\u53D6\u6D88",
          cancelButtonText: "\u53D6\u6D88",
          resetButtonAriaLabel: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
          resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6"
        },
        startScreen: {
          favoriteSearchesTitle: "\u6536\u85CF",
          noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
          recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
          removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664",
          removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
          saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2"
        }
      }
    }
  }
};

// .vitepress/config/shared.mts
var __vite_injected_original_import_meta_url = "file:///D:/$work/Admin-vue/vue-vben-admin/spa-web/vue-vben-admin-naive/docs/.vitepress/config/shared.mts";
var shared = defineConfig3({
  appearance: "dark",
  head: head(),
  markdown: {
    preConfig(md) {
      md.use(demoPreviewPlugin);
      md.use(groupIconMdPlugin);
    }
  },
  pwa: pwa(),
  srcDir: "src",
  themeConfig: {
    i18nRouting: true,
    logo: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/logo-v1.webp",
    search: {
      options: {
        locales: {
          ...search
        }
      },
      provider: "local"
    },
    siteTitle: "Vben Admin Naive",
    socialLinks: [
      { icon: "github", link: "https://github.com/Ducr/vue-vben-admin-naive" }
    ]
  },
  title: "Vben Admin Naive",
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
      minify: "terser"
    },
    css: {
      postcss: {
        plugins: [
          tailwind(),
          postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] })
        ]
      },
      preprocessorOptions: {
        scss: {
          api: "modern"
        }
      }
    },
    json: {
      stringify: true
    },
    resolve: {
      alias: [
        {
          find: "@vben/vite-config",
          replacement: fileURLToPath(new URL("../../../internal/vite-config/src/index.ts", __vite_injected_original_import_meta_url))
        }
      ]
    },
    plugins: [
      GitChangelog({
        mapAuthors: [
          {
            mapByNameAliases: ["Vben"],
            name: "vben",
            username: "anncwb"
          },
          {
            name: "vince",
            username: "vince292007"
          },
          {
            name: "Li Kui",
            username: "likui628"
          }
        ],
        repoURL: () => "https://github.com/Ducr/vue-vben-admin-naive"
      }),
      GitChangelogMarkdownSection(),
      groupIconVitePlugin(),
      viteArchiverPlugin({ outputDir: ".vitepress" }),
      await viteVxeTableImportsPlugin()
    ],
    server: {
      fs: {
        allow: ["../.."]
      },
      host: true,
      port: 6173
    },
    ssr: {
      external: ["@vue/repl"]
    }
  }
});
function head() {
  return [
    ["meta", { content: "Ducr", name: "author" }],
    [
      "meta",
      {
        content: "vben, vitejs, vite, shacdn-ui, vue",
        name: "keywords"
      }
    ],
    ["link", { href: "/favicon.ico", rel: "icon", type: "image/svg+xml" }],
    [
      "meta",
      {
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        name: "viewport"
      }
    ],
    ["meta", { content: "vben admin docs", name: "keywords" }],
    ["link", { href: "/favicon.ico", rel: "icon" }]
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.tailwindcss.com',
    //   },
    // ],
  ];
}
function pwa() {
  return {
    includeManifestIcons: false,
    manifest: {
      description: "Vben Admin Naive is a Naive UI version SPA independently split from Vue Vben Admin v5.5.9. A modern admin dashboard template based on Vue 3.",
      icons: [
        {
          sizes: "192x192",
          src: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/pwa-icon-192.png",
          type: "image/png"
        },
        {
          sizes: "512x512",
          src: "https://unpkg.com/@vbenjs/static-source@0.1.7/source/pwa-icon-512.png",
          type: "image/png"
        }
      ],
      id: "/",
      name: "Vben Admin Naive Doc",
      short_name: "vben_admin_naive_doc",
      theme_color: "#ffffff"
    },
    outDir: resolve(process.cwd(), ".vitepress/dist"),
    registerType: "autoUpdate",
    workbox: {
      globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    }
  };
}

// .vitepress/config/index.mts
var config_default = withPwa(
  defineConfigWithTheme({
    ...shared,
    locales: {
      en: {
        label: "English",
        lang: "en",
        link: "/en/",
        ...en
      },
      root: {
        label: "\u7B80\u4F53\u4E2D\u6587",
        lang: "zh-CN",
        ...zh
      }
    }
  })
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcvaW5kZXgubXRzIiwgIi52aXRlcHJlc3MvY29uZmlnL2VuLm10cyIsICIuLi9wYWNrYWdlLmpzb24iLCAiLnZpdGVwcmVzcy9jb25maWcvc2hhcmVkLm10cyIsICIudml0ZXByZXNzL2NvbmZpZy9wbHVnaW5zL2RlbW8tcHJldmlldy50cyIsICIudml0ZXByZXNzL2NvbmZpZy96aC5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1uYWl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1uYWl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGluZGV4Lm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tbmFpdmUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC5tdHNcIjtpbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcyc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWdXaXRoVGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBlbiB9IGZyb20gJy4vZW4ubXRzJztcbmltcG9ydCB7IHNoYXJlZCB9IGZyb20gJy4vc2hhcmVkLm10cyc7XG5pbXBvcnQgeyB6aCB9IGZyb20gJy4vemgubXRzJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcbiAgZGVmaW5lQ29uZmlnV2l0aFRoZW1lKHtcbiAgICAuLi5zaGFyZWQsXG4gICAgbG9jYWxlczoge1xuICAgICAgZW46IHtcbiAgICAgICAgbGFiZWw6ICdFbmdsaXNoJyxcbiAgICAgICAgbGFuZzogJ2VuJyxcbiAgICAgICAgbGluazogJy9lbi8nLFxuICAgICAgICAuLi5lbixcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgICAgLi4uemgsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tbmFpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tbmFpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxlbi5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyR3b3JrL0FkbWluLXZ1ZS92dWUtdmJlbi1hZG1pbi9zcGEtd2ViL3Z1ZS12YmVuLWFkbWluLW5haXZlL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvZW4ubXRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNvbnN0IGVuID0gZGVmaW5lQ29uZmlnKHtcbiAgZGVzY3JpcHRpb246ICdWYmVuIEFkbWluIE5haXZlIC0gTmFpdmUgVUkgdmVyc2lvbiBTUEEgaW5kZXBlbmRlbnRseSBzcGxpdCBmcm9tIFZ1ZSBWYmVuIEFkbWluIHY1LjUuOScsXG4gIGxhbmc6ICdlbi1VUycsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1RoZW1lJyxcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnU3dpdGNoIHRvIERhcmsgTW9kZScsXG4gICAgZG9jRm9vdGVyOiB7XG4gICAgICBuZXh0OiAnTmV4dCBQYWdlJyxcbiAgICAgIHByZXY6ICdQcmV2aW91cyBQYWdlJyxcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOlxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tbmFpdmUvZWRpdC9tYWluL2RvY3Mvc3JjLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWInLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBjb3B5cmlnaHQ6IGBDb3B5cmlnaHQgXHUwMEE5IDIwMjAtJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IER1Y3JgLFxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgIH0sXG4gICAgbGFuZ01lbnVMYWJlbDogJ0xhbmd1YWdlJyxcbiAgICBsYXN0VXBkYXRlZDoge1xuICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICBkYXRlU3R5bGU6ICdzaG9ydCcsXG4gICAgICAgIHRpbWVTdHlsZTogJ21lZGl1bScsXG4gICAgICB9LFxuICAgICAgdGV4dDogJ0xhc3QgdXBkYXRlZCBvbicsXG4gICAgfSxcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1N3aXRjaCB0byBMaWdodCBNb2RlJyxcbiAgICBuYXY6IG5hdigpLFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxhYmVsOiAnTmF2aWdhdGUnLFxuICAgIH0sXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogJ0JhY2sgdG8gdG9wJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2VuL2NvbW1lcmNpYWwvJzoge1xuICAgICAgICBiYXNlOiAnL2VuL2NvbW1lcmNpYWwvJyxcbiAgICAgICAgaXRlbXM6IHNpZGViYXJDb21tZXJjaWFsKCksXG4gICAgICB9LFxuICAgICAgJy9lbi9ndWlkZS8nOiB7IGJhc2U6ICcvZW4vZ3VpZGUvJywgaXRlbXM6IHNpZGViYXJHdWlkZSgpIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBzaWRlYmFyR3VpZGUoKTogRGVmYXVsdFRoZW1lLlNpZGViYXJJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICB0ZXh0OiAnSW50cm9kdWN0aW9uJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdBYm91dCBWYmVuIEFkbWluJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vd2h5JyxcbiAgICAgICAgICB0ZXh0OiAnV2h5IENob29zZSBVcz8nLFxuICAgICAgICB9LFxuICAgICAgICB7IGxpbms6ICdpbnRyb2R1Y3Rpb24vcXVpY2stc3RhcnQnLCB0ZXh0OiAnUXVpY2sgU3RhcnQnIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi90aGluJywgdGV4dDogJ0xpdGUgVmVyc2lvbicgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnQmFzaWNzJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvY29uY2VwdCcsIHRleHQ6ICdCYXNpYyBDb25jZXB0cycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9kZXZlbG9wbWVudCcsIHRleHQ6ICdMb2NhbCBEZXZlbG9wbWVudCcgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9yb3V0ZScsIHRleHQ6ICdSb3V0aW5nIGFuZCBNZW51JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3NldHRpbmdzJywgdGV4dDogJ0NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvaWNvbnMnLCB0ZXh0OiAnSWNvbnMnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc3R5bGVzJywgdGV4dDogJ1N0eWxlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9leHRlcm5hbC1tb2R1bGUnLCB0ZXh0OiAnRXh0ZXJuYWwgTW9kdWxlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9idWlsZCcsIHRleHQ6ICdCdWlsZCBhbmQgRGVwbG95bWVudCcgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXJ2ZXInLCB0ZXh0OiAnU2VydmVyIEludGVyYWN0aW9uIGFuZCBEYXRhIE1vY2snIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0FkdmFuY2VkJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2xvZ2luJywgdGV4dDogJ0xvZ2luJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC90aGVtZScsIHRleHQ6ICdUaGVtZScgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvYWNjZXNzJywgdGV4dDogJ0FjY2VzcyBDb250cm9sJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2NhbGUnLCB0ZXh0OiAnSW50ZXJuYXRpb25hbGl6YXRpb24nIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2ZlYXR1cmVzJywgdGV4dDogJ0NvbW1vbiBGZWF0dXJlcycgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvY2hlY2stdXBkYXRlcycsIHRleHQ6ICdDaGVjayBVcGRhdGVzJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2FkaW5nJywgdGV4dDogJ0dsb2JhbCBMb2FkaW5nJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC91aS1mcmFtZXdvcmsnLCB0ZXh0OiAnVUkgRnJhbWV3b3JrIFN3aXRjaGluZycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRW5naW5lZXJpbmcnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9zdGFuZGFyZCcsIHRleHQ6ICdTdGFuZGFyZHMnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvY2xpJywgdGV4dDogJ0NMSScgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9kaXInLCB0ZXh0OiAnRGlyZWN0b3J5IEV4cGxhbmF0aW9uJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3Rlc3QnLCB0ZXh0OiAnVW5pdCBUZXN0aW5nJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3RhaWx3aW5kY3NzJywgdGV4dDogJ1RhaWx3aW5kIENTUycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9jaGFuZ2VzZXQnLCB0ZXh0OiAnQ2hhbmdlc2V0JyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3ZpdGUnLCB0ZXh0OiAnVml0ZSBDb25maWcnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ090aGVycycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdvdGhlci9wcm9qZWN0LXVwZGF0ZScsIHRleHQ6ICdQcm9qZWN0IFVwZGF0ZScgfSxcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvcmVtb3ZlLWNvZGUnLCB0ZXh0OiAnUmVtb3ZlIENvZGUnIH0sXG4gICAgICAgIHsgbGluazogJ290aGVyL2ZhcScsIHRleHQ6ICdGQVEnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJDb21tZXJjaWFsKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBsaW5rOiAnY29tbXVuaXR5JyxcbiAgICAgIHRleHQ6ICdDb21tdW5pdHknLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJ3RlY2huaWNhbC1zdXBwb3J0JyxcbiAgICAgIHRleHQ6ICdUZWNobmljYWwtc3VwcG9ydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnY3VzdG9taXplZCcsXG4gICAgICB0ZXh0OiAnQ3VzdG9taXplZCcsXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gbmF2KCk6IERlZmF1bHRUaGVtZS5OYXZJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGFjdGl2ZU1hdGNoOiAnXi9lbi8oZ3VpZGV8Y29tcG9uZW50cykvJyxcbiAgICAgIHRleHQ6ICdEb2MnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnXi9lbi9ndWlkZS8nLFxuICAgICAgICAgIGxpbms6ICcvZW4vZ3VpZGUvaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdHdWlkZScsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICBhY3RpdmVNYXRjaDogJ14vZW4vY29tcG9uZW50cy8nLFxuICAgICAgICAvLyAgIGxpbms6ICcvZW4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAvLyAgIHRleHQ6ICdDb21wb25lbnRzJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdIaXN0b3JpY2FsIFZlcnNpb25zJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kb2MudnZiaW4uY24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnMi54IFZlcnNpb24gRG9jdW1lbnRhdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0RlbW8nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kdWNyb25nLmNvbS92dWUtdmJlbi1hZG1pbi1uYWl2ZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdOYWl2ZSBVSSBWZXJzaW9uIChDdXJyZW50KScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kdWNyb25nLmNvbS92dWUtdmJlbi1hZG1pbi1hbnRkJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0FudCBEZXNpZ24gVnVlIFZlcnNpb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tZWxlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0VsZW1lbnQgUGx1cyBWZXJzaW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2R1Y3JvbmcuY29tL3Z1ZS12YmVuLWFkbWluLXRkZXNpZ24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnVERlc2lnbiBWZXJzaW9uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdPdGhlcnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL3ZiZW4udnZiaW4uY24nLFxuICAgICAgICAgICAgICB0ZXh0OiAnVmJlbiBBZG1pbiAyLngnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IHZlcnNpb24sXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLW5haXZlL3JlbGVhc2VzJyxcbiAgICAgICAgICB0ZXh0OiAnQ2hhbmdlbG9nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1uYWl2ZScsXG4gICAgICAgICAgdGV4dDogJ1JvYWRtYXAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLW5haXZlL2Jsb2IvbWFpbi8uZ2l0aHViL2NvbnRyaWJ1dGluZy5tZCcsXG4gICAgICAgICAgdGV4dDogJ0NvbnRyaWJ1dGlvbicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9jb21tZXJjaWFsL3RlY2huaWNhbC1zdXBwb3J0JyxcbiAgICAgIHRleHQ6ICdcdUQ4M0VcdUREODQgVGVjaCBTdXBwb3J0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvc3BvbnNvci9wZXJzb25hbCcsXG4gICAgICB0ZXh0OiAnXHUyNzI4IFNwb25zb3InLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9jb21tZXJjaWFsL2NvbW11bml0eScsXG4gICAgICB0ZXh0OiAnXHVEODNEXHVEQzY4XHUyMDBEXHVEODNEXHVEQzY2XHUyMDBEXHVEODNEXHVEQzY2IENvbW11bml0eScsXG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBsaW5rOiAnL2ZyaWVuZC1saW5rcy8nLFxuICAgIC8vICAgdGV4dDogJ1x1RDgzRVx1REQxRCBGcmllbmQgTGlua3MnLFxuICAgIC8vIH0sXG4gIF07XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJ2dWUtdmJlbi1hZG1pbi1uYWl2ZVwiLFxuICBcInZlcnNpb25cIjogXCI1LjUuOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiXHU1N0ZBXHU0RThFIFZ1ZSBWYmVuIEFkbWluIHY1LjUuOSBcdTcyRUNcdTdBQ0JcdTYyQzZcdTUyMDZcdTc2ODQgTmFpdmUgVUkgXHU3MjQ4XHU2NzJDXHU1MzU1XHU5ODc1XHU1RTk0XHU3NTI4XHVGRjA4U1BBXHVGRjA5XHVGRjBDXHU1QjhDXHU1MTY4XHU4MTMxXHU3OUJCIG1vbm9yZXBvIFx1NEY5RFx1OEQ1Nlx1RkYwQ1x1NTNFRlx1NzJFQ1x1N0FDQlx1OTBFOFx1N0Y3Mlx1NTQ4Q1x1NTNEMVx1NUUwM1x1MzAwMlwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tbmFpdmVcIixcbiAgXCJidWdzXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tbmFpdmUvaXNzdWVzXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tbmFpdmUuZ2l0XCJcbiAgfSxcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkR1Y3JcIixcbiAgICBcImVtYWlsXCI6IFwiZHVjcm9uZ0AxMjYuY29tXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vRHVjclwiXG4gIH0sXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkIC0tbW9kZSBwcm9kdWN0aW9uXCIsXG4gICAgXCJidWlsZDphbmFseXplXCI6IFwidml0ZSBidWlsZCAtLW1vZGUgYW5hbHl6ZVwiLFxuICAgIFwiY2hhbmdlc2V0XCI6IFwiY2hhbmdlc2V0XCIsXG4gICAgXCJkZXZcIjogXCJ2aXRlIC0tbW9kZSBkZXZlbG9wbWVudFwiLFxuICAgIFwiZGV2OmFsbFwiOiBcInBucG0gcnVuIGRldiAmIHBucG0gcnVuIGRldjpkb2NzXCIsXG4gICAgXCJkZXY6ZG9jc1wiOiBcInBucG0gLS1maWx0ZXIgQHZiZW4vZG9jcyBydW4gZGV2XCIsXG4gICAgXCJidWlsZDpkb2NzXCI6IFwicG5wbSAtLWZpbHRlciBAdmJlbi9kb2NzIHJ1biBidWlsZFwiLFxuICAgIFwicHJlZGV2OmRvY3NcIjogXCJjZCBpbnRlcm5hbC9ub2RlLXV0aWxzICYmIG5weCB1bmJ1aWxkIC0tc3R1YiA+bnVsIDI+JjEgJiYgY2QgLi4vdml0ZS1jb25maWcgJiYgbnB4IHVuYnVpbGQgLS1zdHViID5udWwgMj4mMSAmJiBjZCAuLi8uLlwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IC50cywudHN4LC5qcywuanN4LC52dWVcIixcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgcnVuXCIsXG4gICAgXCJ0ZXN0OndhdGNoXCI6IFwidml0ZXN0XCIsXG4gICAgXCJ0eXBlY2hlY2tcIjogXCJ2dWUtdHNjIC0tbm9FbWl0IC0tc2tpcExpYkNoZWNrXCJcbiAgfSxcbiAgXCJpbXBvcnRzXCI6IHtcbiAgICBcIiMvKlwiOiBcIi4vc3JjLypcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAdmJlbi9hY2Nlc3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vY29tbW9uLXVpXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2NvbnN0YW50c1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9ob29rc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9pY29uc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9sYXlvdXRzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL2xvY2FsZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vcGx1Z2luc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9wcmVmZXJlbmNlc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9yZXF1ZXN0XCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkB2YmVuL3N0b3Jlc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdmJlbi9zdHlsZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vdHlwZXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZiZW4vdXRpbHNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEzLjQuMFwiLFxuICAgIFwiZGF5anNcIjogXCJeMS4xMS4xM1wiLFxuICAgIFwibmFpdmUtdWlcIjogXCJeMi40Mi4wXCIsXG4gICAgXCJwaW5pYVwiOiBcIl4zLjAuM1wiLFxuICAgIFwidnVlXCI6IFwiXjMuNS4xN1wiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjUuMVwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBjaGFuZ2VzZXRzL2NoYW5nZWxvZy1naXRodWJcIjogXCJeMC41LjFcIixcbiAgICBcIkBjaGFuZ2VzZXRzL2NsaVwiOiBcIl4yLjI5LjVcIixcbiAgICBcIkBlc2xpbnQvanNcIjogXCJeOS4zMC4xXCIsXG4gICAgXCJAZmFrZXItanMvZmFrZXJcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwiQGljb25pZnkvdGFpbHdpbmRcIjogXCJeMS4yLjBcIixcbiAgICBcIkB0YWlsd2luZGNzcy90eXBvZ3JhcGh5XCI6IFwiXjAuNS4xNlwiLFxuICAgIFwiQHR5cGVzL2pzb253ZWJ0b2tlblwiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yNC45LjJcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiOiBcIl42LjAuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl41LjAuMVwiLFxuICAgIFwiYXV0b3ByZWZpeGVyXCI6IFwiXjEwLjQuMjFcIixcbiAgICBcImNzc25hbm9cIjogXCJeNy4wLjdcIixcbiAgICBcImVzbGludFwiOiBcIl45LjMwLjBcIixcbiAgICBcImVzbGludC1wbHVnaW4tdnVlXCI6IFwiXjEwLjIuMFwiLFxuICAgIFwiQG1hbnlwa2cvZ2V0LXBhY2thZ2VzXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcImdldC1wb3J0XCI6IFwiY2F0YWxvZzpcIixcbiAgICBcImdsb2JhbHNcIjogXCJeMTYuMy4wXCIsXG4gICAgXCJoM1wiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJoYXBweS1kb21cIjogXCJeMTIuMTAuM1wiLFxuICAgIFwianNvbndlYnRva2VuXCI6IFwiY2F0YWxvZzpcIixcbiAgICBcIm5pdHJvcGFja1wiOiBcImNhdGFsb2c6XCIsXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNS42XCIsXG4gICAgXCJwb3N0Y3NzLWFudGQtZml4ZXNcIjogXCJeMC4yLjBcIixcbiAgICBcInBvc3Rjc3MtaW1wb3J0XCI6IFwiXjE2LjEuMVwiLFxuICAgIFwicG9zdGNzcy1wcmVzZXQtZW52XCI6IFwiXjEwLjIuNFwiLFxuICAgIFwic2Fzc1wiOiBcIl4xLjg5LjJcIixcbiAgICBcInRhaWx3aW5kY3NzXCI6IFwiXjMuNC4xN1wiLFxuICAgIFwidGFpbHdpbmRjc3MtYW5pbWF0ZVwiOiBcIl4xLjAuN1wiLFxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjguM1wiLFxuICAgIFwidHlwZXNjcmlwdC1lc2xpbnRcIjogXCJeOC4zLjBcIixcbiAgICBcInZpdGVcIjogXCJeNy4xLjJcIixcbiAgICBcInZpdGUtcGx1Z2luLWh0bWxcIjogXCJjYXRhbG9nOlwiLFxuICAgIFwidml0ZXN0XCI6IFwiXjMuMi40XCIsXG4gICAgXCJ2dWUtdHNjXCI6IFwiMi4yLjEwXCJcbiAgfSxcbiAgXCJwYWNrYWdlTWFuYWdlclwiOiBcInBucG1AMTAuMTQuMFwiXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLW5haXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLW5haXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxcc2hhcmVkLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tbmFpdmUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9zaGFyZWQubXRzXCI7aW1wb3J0IHR5cGUgeyBQd2FPcHRpb25zIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcyc7XG5pbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcblxuaW1wb3J0IHtcbiAgdml0ZUFyY2hpdmVyUGx1Z2luLFxuICB2aXRlVnhlVGFibGVJbXBvcnRzUGx1Z2luLFxufSBmcm9tICdAdmJlbi92aXRlLWNvbmZpZyc7XG5cbmltcG9ydCB7XG4gIEdpdENoYW5nZWxvZyxcbiAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uLFxufSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1naXQtY2hhbmdlbG9nL3ZpdGUnO1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgcG9zdGNzc0lzb2xhdGVTdHlsZXMgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHtcbiAgZ3JvdXBJY29uTWRQbHVnaW4sXG4gIGdyb3VwSWNvblZpdGVQbHVnaW4sXG59IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnMnO1xuXG5pbXBvcnQgeyBkZW1vUHJldmlld1BsdWdpbiB9IGZyb20gJy4vcGx1Z2lucy9kZW1vLXByZXZpZXcnO1xuaW1wb3J0IHsgc2VhcmNoIGFzIHpoU2VhcmNoIH0gZnJvbSAnLi96aC5tdHMnO1xuXG5leHBvcnQgY29uc3Qgc2hhcmVkID0gZGVmaW5lQ29uZmlnKHtcbiAgYXBwZWFyYW5jZTogJ2RhcmsnLFxuICBoZWFkOiBoZWFkKCksXG4gICAgbWFya2Rvd246IHtcbiAgICAgIHByZUNvbmZpZyhtZCkge1xuICAgICAgICBtZC51c2UoZGVtb1ByZXZpZXdQbHVnaW4pO1xuICAgICAgICBtZC51c2UoZ3JvdXBJY29uTWRQbHVnaW4pO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHB3YTogcHdhKCksXG4gICAgc3JjRGlyOiAnc3JjJyxcbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgaTE4blJvdXRpbmc6IHRydWUsXG4gICAgICBsb2dvOiAnaHR0cHM6Ly91bnBrZy5jb20vQHZiZW5qcy9zdGF0aWMtc291cmNlQDAuMS43L3NvdXJjZS9sb2dvLXYxLndlYnAnLFxuICAgICAgc2VhcmNoOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICAuLi56aFNlYXJjaCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlcjogJ2xvY2FsJyxcbiAgICAgIH0sXG4gICAgICBzaXRlVGl0bGU6ICdWYmVuIEFkbWluIE5haXZlJyxcbiAgICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1uYWl2ZScgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB0aXRsZTogJ1ZiZW4gQWRtaW4gTmFpdmUnLFxuICAgIHZpdGU6IHtcbiAgICAgIGJ1aWxkOiB7XG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogSW5maW5pdHksXG4gICAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgICB9LFxuICAgICAgY3NzOiB7XG4gICAgICAgIHBvc3Rjc3M6IHtcbiAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICB0YWlsd2luZCgpLFxuICAgICAgICAgICAgcG9zdGNzc0lzb2xhdGVTdHlsZXMoeyBpbmNsdWRlRmlsZXM6IFsvdnAtZG9jXFwuY3NzL10gfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgIHNjc3M6IHtcbiAgICAgICAgICAgIGFwaTogJ21vZGVybicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBqc29uOiB7XG4gICAgICAgIHN0cmluZ2lmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmluZDogJ0B2YmVuL3ZpdGUtY29uZmlnJyxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4uLy4uLy4uL2ludGVybmFsL3ZpdGUtY29uZmlnL3NyYy9pbmRleC50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgcGx1Z2luczogW1xuICAgICAgICBHaXRDaGFuZ2Vsb2coe1xuICAgICAgICAgIG1hcEF1dGhvcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWFwQnlOYW1lQWxpYXNlczogWydWYmVuJ10sXG4gICAgICAgICAgICAgIG5hbWU6ICd2YmVuJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICdhbm5jd2InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3ZpbmNlJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICd2aW5jZTI5MjAwNycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnTGkgS3VpJyxcbiAgICAgICAgICAgICAgdXNlcm5hbWU6ICdsaWt1aTYyOCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVwb1VSTDogKCkgPT4gJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLW5haXZlJyxcbiAgICAgICAgfSksXG4gICAgICAgIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbigpLFxuICAgICAgICBncm91cEljb25WaXRlUGx1Z2luKCksXG4gICAgICAgIHZpdGVBcmNoaXZlclBsdWdpbih7IG91dHB1dERpcjogJy52aXRlcHJlc3MnIH0pLFxuICAgICAgICBhd2FpdCB2aXRlVnhlVGFibGVJbXBvcnRzUGx1Z2luKCksXG4gICAgICBdLFxuICAgIHNlcnZlcjoge1xuICAgICAgZnM6IHtcbiAgICAgICAgYWxsb3c6IFsnLi4vLi4nXSxcbiAgICAgIH0sXG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogNjE3MyxcbiAgICB9LFxuXG4gICAgc3NyOiB7XG4gICAgICBleHRlcm5hbDogWydAdnVlL3JlcGwnXSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGhlYWQoKTogSGVhZENvbmZpZ1tdIHtcbiAgcmV0dXJuIFtcbiAgICBbJ21ldGEnLCB7IGNvbnRlbnQ6ICdEdWNyJywgbmFtZTogJ2F1dGhvcicgfV0sXG4gICAgW1xuICAgICAgJ21ldGEnLFxuICAgICAge1xuICAgICAgICBjb250ZW50OiAndmJlbiwgdml0ZWpzLCB2aXRlLCBzaGFjZG4tdWksIHZ1ZScsXG4gICAgICAgIG5hbWU6ICdrZXl3b3JkcycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydsaW5rJywgeyBocmVmOiAnL2Zhdmljb24uaWNvJywgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9zdmcreG1sJyB9XSxcbiAgICBbXG4gICAgICAnbWV0YScsXG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEsbWluaW11bS1zY2FsZT0xLjAsbWF4aW11bS1zY2FsZT0xLjAsdXNlci1zY2FsYWJsZT1ubycsXG4gICAgICAgIG5hbWU6ICd2aWV3cG9ydCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgWydtZXRhJywgeyBjb250ZW50OiAndmJlbiBhZG1pbiBkb2NzJywgbmFtZTogJ2tleXdvcmRzJyB9XSxcbiAgICBbJ2xpbmsnLCB7IGhyZWY6ICcvZmF2aWNvbi5pY28nLCByZWw6ICdpY29uJyB9XSxcbiAgICAvLyBbXG4gICAgLy8gICAnc2NyaXB0JyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgc3JjOiAnaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gXSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gcHdhKCk6IFB3YU9wdGlvbnMge1xuICByZXR1cm4ge1xuICAgIGluY2x1ZGVNYW5pZmVzdEljb25zOiBmYWxzZSxcbiAgICBtYW5pZmVzdDoge1xuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdWYmVuIEFkbWluIE5haXZlIGlzIGEgTmFpdmUgVUkgdmVyc2lvbiBTUEEgaW5kZXBlbmRlbnRseSBzcGxpdCBmcm9tIFZ1ZSBWYmVuIEFkbWluIHY1LjUuOS4gQSBtb2Rlcm4gYWRtaW4gZGFzaGJvYXJkIHRlbXBsYXRlIGJhc2VkIG9uIFZ1ZSAzLicsXG4gICAgICBpY29uczogW1xuICAgICAgICB7XG4gICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICBzcmM6ICdodHRwczovL3VucGtnLmNvbS9AdmJlbmpzL3N0YXRpYy1zb3VyY2VAMC4xLjcvc291cmNlL3B3YS1pY29uLTE5Mi5wbmcnLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICBzcmM6ICdodHRwczovL3VucGtnLmNvbS9AdmJlbmpzL3N0YXRpYy1zb3VyY2VAMC4xLjcvc291cmNlL3B3YS1pY29uLTUxMi5wbmcnLFxuICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGlkOiAnLycsXG4gICAgICBuYW1lOiAnVmJlbiBBZG1pbiBOYWl2ZSBEb2MnLFxuICAgICAgc2hvcnRfbmFtZTogJ3ZiZW5fYWRtaW5fbmFpdmVfZG9jJyxcbiAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgICBvdXREaXI6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy52aXRlcHJlc3MvZGlzdCcpLFxuICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgIHdvcmtib3g6IHtcbiAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntjc3MsanMsaHRtbCxzdmcscG5nLGljbyx0eHQsd29mZjJ9J10sXG4gICAgICBtYXhpbXVtRmlsZVNpemVUb0NhY2hlSW5CeXRlczogNSAqIDEwMjQgKiAxMDI0LFxuICAgIH0sXG4gIH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXCR3b3JrXFxcXEFkbWluLXZ1ZVxcXFx2dWUtdmJlbi1hZG1pblxcXFxzcGEtd2ViXFxcXHZ1ZS12YmVuLWFkbWluLW5haXZlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcJHdvcmtcXFxcQWRtaW4tdnVlXFxcXHZ1ZS12YmVuLWFkbWluXFxcXHNwYS13ZWJcXFxcdnVlLXZiZW4tYWRtaW4tbmFpdmVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxwbHVnaW5zXFxcXGRlbW8tcHJldmlldy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tbmFpdmUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9wbHVnaW5zL2RlbW8tcHJldmlldy50c1wiO2ltcG9ydCB0eXBlIHsgTWFya2Rvd25FbnYsIE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tICd2aXRlcHJlc3MnO1xuXG5pbXBvcnQgY3J5cHRvIGZyb20gJ25vZGU6Y3J5cHRvJztcbmltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnbm9kZTpmcyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAnbm9kZTpwYXRoJztcblxuZXhwb3J0IGNvbnN0IHJhd1BhdGhSZWdleHAgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLXN1cGVyLWxpbmVhci1iYWNrdHJhY2tpbmcsIHJlZ2V4cC9zdHJpY3RcbiAgL14oLis/KD86XFwuKFtcXGRhLXpdKykpPykoI1tcXHctXSspPyg/OiA/eyhcXGQrKD86WywtXVxcZCspKik/ID8oXFxTKyk/fSk/ID8oPzpcXFsoLispXSk/JC87XG5cbmZ1bmN0aW9uIHJhd1BhdGhUb1Rva2VuKHJhd1BhdGg6IHN0cmluZykge1xuICBjb25zdCBbXG4gICAgZmlsZXBhdGggPSAnJyxcbiAgICBleHRlbnNpb24gPSAnJyxcbiAgICByZWdpb24gPSAnJyxcbiAgICBsaW5lcyA9ICcnLFxuICAgIGxhbmcgPSAnJyxcbiAgICByYXdUaXRsZSA9ICcnLFxuICBdID0gKHJhd1BhdGhSZWdleHAuZXhlYyhyYXdQYXRoKSB8fCBbXSkuc2xpY2UoMSk7XG5cbiAgY29uc3QgdGl0bGUgPSByYXdUaXRsZSB8fCBmaWxlcGF0aC5zcGxpdCgnLycpLnBvcCgpIHx8ICcnO1xuXG4gIHJldHVybiB7IGV4dGVuc2lvbiwgZmlsZXBhdGgsIGxhbmcsIGxpbmVzLCByZWdpb24sIHRpdGxlIH07XG59XG5cbmV4cG9ydCBjb25zdCBkZW1vUHJldmlld1BsdWdpbiA9IChtZDogTWFya2Rvd25SZW5kZXJlcikgPT4ge1xuICBtZC5jb3JlLnJ1bGVyLmFmdGVyKCdpbmxpbmUnLCAnZGVtby1wcmV2aWV3JywgKHN0YXRlKSA9PiB7XG4gICAgY29uc3QgaW5zZXJ0Q29tcG9uZW50SW1wb3J0ID0gKGltcG9ydFN0cmluZzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnRva2Vucy5maW5kSW5kZXgoXG4gICAgICAgIChpKSA9PiBpLnR5cGUgPT09ICdodG1sX2Jsb2NrJyAmJiBpLmNvbnRlbnQubWF0Y2goLzxzY3JpcHQgc2V0dXA+L2cpLFxuICAgICAgKTtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgaW1wb3J0Q29tcG9uZW50ID0gbmV3IHN0YXRlLlRva2VuKCdodG1sX2Jsb2NrJywgJycsIDApO1xuICAgICAgICBpbXBvcnRDb21wb25lbnQuY29udGVudCA9IGA8c2NyaXB0IHNldHVwPlxcbiR7aW1wb3J0U3RyaW5nfVxcbjwvc2NyaXB0PlxcbmA7XG4gICAgICAgIHN0YXRlLnRva2Vucy5zcGxpY2UoMCwgMCwgaW1wb3J0Q29tcG9uZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0ZS50b2tlbnNbaW5kZXhdKSB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHN0YXRlLnRva2Vuc1tpbmRleF0uY29udGVudDtcbiAgICAgICAgICBzdGF0ZS50b2tlbnNbaW5kZXhdLmNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAnPC9zY3JpcHQ+JyxcbiAgICAgICAgICAgIGAke2ltcG9ydFN0cmluZ31cXG48L3NjcmlwdD5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIERlZmluZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIHRoZSBkZXNpcmVkIHBhdHRlcm5cbiAgICBjb25zdCByZWdleCA9IC88RGVtb1ByZXZpZXdbXj5dKlxcc2Rpcj1cIihbXlwiXSopXCIvZztcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIE1hcmtkb3duIGNvbnRlbnQgYW5kIHJlcGxhY2UgdGhlIHBhdHRlcm5cbiAgICBzdGF0ZS5zcmMgPSBzdGF0ZS5zcmMucmVwbGFjZUFsbChyZWdleCwgKF9tYXRjaCwgZGlyKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnREaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksICdzcmMnLCBkaXIpLnJlcGxhY2VBbGwoXG4gICAgICAgICdcXFxcJyxcbiAgICAgICAgJy8nLFxuICAgICAgKTtcblxuICAgICAgbGV0IGNoaWxkRmlsZXM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgZGlyRXhpc3RzID0gdHJ1ZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY2hpbGRGaWxlcyA9XG4gICAgICAgICAgcmVhZGRpclN5bmMoY29tcG9uZW50RGlyLCB7XG4gICAgICAgICAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICAgICAgICAgICAgcmVjdXJzaXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHdpdGhGaWxlVHlwZXM6IGZhbHNlLFxuICAgICAgICAgIH0pIHx8IFtdO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGRpckV4aXN0cyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRpckV4aXN0cykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVdvcmQgPSBnZW5lcmF0ZUNvbnRlbnRIYXNoKGNvbXBvbmVudERpcik7XG5cbiAgICAgIGNvbnN0IENvbXBvbmVudE5hbWUgPSBgRGVtb0NvbXBvbmVudF8ke3VuaXF1ZVdvcmR9YDtcbiAgICAgIGluc2VydENvbXBvbmVudEltcG9ydChcbiAgICAgICAgYGltcG9ydCAke0NvbXBvbmVudE5hbWV9IGZyb20gJyR7Y29tcG9uZW50RGlyfS9pbmRleC52dWUnYCxcbiAgICAgICk7XG4gICAgICBjb25zdCB7IHBhdGg6IF9wYXRoIH0gPSBzdGF0ZS5lbnYgYXMgTWFya2Rvd25FbnY7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudG9rZW5zLmZpbmRJbmRleCgoaSkgPT4gaS5jb250ZW50Lm1hdGNoKHJlZ2V4KSk7XG5cbiAgICAgIGlmICghc3RhdGUudG9rZW5zW2luZGV4XSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBmaXJzdFN0cmluZyA9ICdpbmRleC52dWUnO1xuICAgICAgY2hpbGRGaWxlcyA9IGNoaWxkRmlsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYSA9PT0gZmlyc3RTdHJpbmcpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGIgPT09IGZpcnN0U3RyaW5nKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiLCAnZW4nLCB7IHNlbnNpdGl2aXR5OiAnYmFzZScgfSk7XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLnRva2Vuc1tpbmRleF0uY29udGVudCA9XG4gICAgICAgIGA8RGVtb1ByZXZpZXcgZmlsZXM9XCIke2VuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjaGlsZEZpbGVzKSl9XCIgPjwke0NvbXBvbmVudE5hbWV9Lz5cbiAgICAgICAgYDtcblxuICAgICAgY29uc3QgX2R1bW15VG9rZW4gPSBuZXcgc3RhdGUuVG9rZW4oJycsICcnLCAwKTtcbiAgICAgIGNvbnN0IHRva2VuQXJyYXk6IEFycmF5PHR5cGVvZiBfZHVtbXlUb2tlbj4gPSBbXTtcbiAgICAgIGNoaWxkRmlsZXMuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3Qgc2xvdE5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKGV4dG5hbWUoZmlsZW5hbWUpLCAnJyk7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVTdGFydCA9IG5ldyBzdGF0ZS5Ub2tlbignaHRtbF9pbmxpbmUnLCAnJywgMCk7XG4gICAgICAgIHRlbXBsYXRlU3RhcnQuY29udGVudCA9IGA8dGVtcGxhdGUgIyR7ZmlsZW5hbWV9PmA7XG4gICAgICAgIHRva2VuQXJyYXkucHVzaCh0ZW1wbGF0ZVN0YXJ0KTtcblxuICAgICAgICBjb25zdCByZXNvbHZlZFBhdGggPSBqb2luKGNvbXBvbmVudERpciwgZmlsZW5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHsgZXh0ZW5zaW9uLCBmaWxlcGF0aCwgbGFuZywgbGluZXMsIHRpdGxlIH0gPVxuICAgICAgICAgIHJhd1BhdGhUb1Rva2VuKHJlc29sdmVkUGF0aCk7XG4gICAgICAgIC8vIEFkZCBjb2RlIHRva2VucyBmb3IgZWFjaCBsaW5lXG4gICAgICAgIGNvbnN0IHRva2VuID0gbmV3IHN0YXRlLlRva2VuKCdmZW5jZScsICdjb2RlJywgMCk7XG4gICAgICAgIHRva2VuLmluZm8gPSBgJHtsYW5nIHx8IGV4dGVuc2lvbn0ke2xpbmVzID8gYHske2xpbmVzfX1gIDogJyd9JHtcbiAgICAgICAgICB0aXRsZSA/IGBbJHt0aXRsZX1dYCA6ICcnXG4gICAgICAgIH1gO1xuXG4gICAgICAgIHRva2VuLmNvbnRlbnQgPSBgPDw8ICR7ZmlsZXBhdGh9YDtcbiAgICAgICAgKHRva2VuIGFzIGFueSkuc3JjID0gW3Jlc29sdmVkUGF0aF07XG4gICAgICAgIHRva2VuQXJyYXkucHVzaCh0b2tlbik7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbmQgPSBuZXcgc3RhdGUuVG9rZW4oJ2h0bWxfaW5saW5lJywgJycsIDApO1xuICAgICAgICB0ZW1wbGF0ZUVuZC5jb250ZW50ID0gJzwvdGVtcGxhdGU+JztcbiAgICAgICAgdG9rZW5BcnJheS5wdXNoKHRlbXBsYXRlRW5kKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZW5kVGFnID0gbmV3IHN0YXRlLlRva2VuKCdodG1sX2lubGluZScsICcnLCAwKTtcbiAgICAgIGVuZFRhZy5jb250ZW50ID0gJzwvRGVtb1ByZXZpZXc+JztcbiAgICAgIHRva2VuQXJyYXkucHVzaChlbmRUYWcpO1xuXG4gICAgICBzdGF0ZS50b2tlbnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgLi4udG9rZW5BcnJheSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgLy8gICBzdGF0ZS5tZC5yZW5kZXJlci5yZW5kZXIoc3RhdGUudG9rZW5zLCBzdGF0ZT8ub3B0aW9ucyA/PyBbXSwgc3RhdGUuZW52KSxcbiAgICAgIC8vICk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50SGFzaChpbnB1dDogc3RyaW5nLCBsZW5ndGg6IG51bWJlciA9IDEwKTogc3RyaW5nIHtcbiAgLy8gXHU0RjdGXHU3NTI4IFNIQS0yNTYgXHU3NTFGXHU2MjEwXHU1NEM4XHU1RTBDXHU1MDNDXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMjU2JykudXBkYXRlKGlucHV0KS5kaWdlc3QoJ2hleCcpO1xuXG4gIC8vIFx1NUMwNlx1NTRDOFx1NUUwQ1x1NTAzQ1x1OEY2Q1x1NjM2Mlx1NEUzQSBCYXNlMzYgXHU3RjE2XHU3ODAxXHVGRjBDXHU1RTc2XHU1M0Q2XHU2MzA3XHU1QjlBXHU5NTdGXHU1RUE2XHU3Njg0XHU1QjU3XHU3QjI2XHU0RjVDXHU0RTNBXHU3RUQzXHU2NzlDXG4gIHJldHVybiBOdW1iZXIucGFyc2VJbnQoaGFzaCwgMTYpLnRvU3RyaW5nKDM2KS5zbGljZSgwLCBsZW5ndGgpO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1uYWl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFwkd29ya1xcXFxBZG1pbi12dWVcXFxcdnVlLXZiZW4tYWRtaW5cXFxcc3BhLXdlYlxcXFx2dWUtdmJlbi1hZG1pbi1uYWl2ZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHpoLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJHdvcmsvQWRtaW4tdnVlL3Z1ZS12YmVuLWFkbWluL3NwYS13ZWIvdnVlLXZiZW4tYWRtaW4tbmFpdmUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy96aC5tdHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcyc7XG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuXG5leHBvcnQgY29uc3QgemggPSBkZWZpbmVDb25maWcoe1xuICBkZXNjcmlwdGlvbjogJ1ZiZW4gQWRtaW4gTmFpdmUgLSBcdTU3RkFcdTRFOEUgVnVlIFZiZW4gQWRtaW4gdjUuNS45IFx1NzJFQ1x1N0FDQlx1NjJDNlx1NTIwNlx1NzY4NCBOYWl2ZSBVSSBcdTcyNDhcdTY3MkNcdTUzNTVcdTk4NzVcdTVFOTRcdTc1MjhcdUZGMDhTUEFcdUZGMDknLFxuICBsYW5nOiAnemgtSGFucycsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NEUzQlx1OTg5OCcsXG4gICAgZGFya01vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRicsXG4gICAgZG9jRm9vdGVyOiB7XG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1JyxcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxuICAgIH0sXG4gICAgZWRpdExpbms6IHtcbiAgICAgIHBhdHRlcm46XG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1uYWl2ZS9lZGl0L21haW4vZG9jcy9zcmMvOnBhdGgnLFxuICAgICAgdGV4dDogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XHU5NzYyJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgY29weXJpZ2h0OiBgQ29weXJpZ2h0IFx1MDBBOSAyMDIwLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBEdWNyYCxcbiAgICAgIG1lc3NhZ2U6ICdcdTU3RkFcdTRFOEUgTUlUIFx1OEJCOFx1NTNFRlx1NTNEMVx1NUUwMy4nLFxuICAgIH0sXG4gICAgbGFuZ01lbnVMYWJlbDogJ1x1NTkxQVx1OEJFRFx1OEEwMCcsXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgZGF0ZVN0eWxlOiAnc2hvcnQnLFxuICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nLFxuICAgICAgfSxcbiAgICAgIHRleHQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTRFOEUnLFxuICAgIH0sXG4gICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZENDVcdTgyNzJcdTZBMjFcdTVGMEYnLFxuICAgIG5hdjogbmF2KCksXG5cbiAgICBvdXRsaW5lOiB7XG4gICAgICBsYWJlbDogJ1x1OTg3NVx1OTc2Mlx1NUJGQ1x1ODIyQScsXG4gICAgfSxcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcblxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvY29tbWVyY2lhbC8nOiB7IGJhc2U6ICcvY29tbWVyY2lhbC8nLCBpdGVtczogc2lkZWJhckNvbW1lcmNpYWwoKSB9LFxuICAgICAgJy9jb21wb25lbnRzLyc6IHsgYmFzZTogJy9jb21wb25lbnRzLycsIGl0ZW1zOiBzaWRlYmFyQ29tcG9uZW50cygpIH0sXG4gICAgICAnL2d1aWRlLyc6IHsgYmFzZTogJy9ndWlkZS8nLCBpdGVtczogc2lkZWJhckd1aWRlKCkgfSxcbiAgICB9LFxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIHNpZGViYXJHdWlkZSgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIHRleHQ6ICdcdTdCODBcdTRFQ0InLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vdmJlbicsXG4gICAgICAgICAgdGV4dDogJ1x1NTE3M1x1NEU4RSBWYmVuIEFkbWluJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdpbnRyb2R1Y3Rpb24vd2h5JyxcbiAgICAgICAgICB0ZXh0OiAnXHU0RTNBXHU0RUMwXHU0RTQ4XHU5MDA5XHU2MkU5XHU2MjExXHU0RUVDPycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi9xdWljay1zdGFydCcsIHRleHQ6ICdcdTVGRUJcdTkwMUZcdTVGMDBcdTU5Q0InIH0sXG4gICAgICAgIHsgbGluazogJ2ludHJvZHVjdGlvbi90aGluJywgdGV4dDogJ1x1N0NCRVx1N0I4MFx1NzI0OFx1NjcyQycgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJhc2U6ICcvJyxcbiAgICAgICAgICBsaW5rOiAnY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24nLFxuICAgICAgICAgIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTY1ODdcdTY4NjMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTU3RkFcdTc4NDAnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9jb25jZXB0JywgdGV4dDogJ1x1NTdGQVx1Nzg0MFx1Njk4Mlx1NUZGNScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9kZXZlbG9wbWVudCcsIHRleHQ6ICdcdTY3MkNcdTU3MzBcdTVGMDBcdTUzRDEnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvcm91dGUnLCB0ZXh0OiAnXHU4REVGXHU3NTMxXHU1NDhDXHU4M0RDXHU1MzU1JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL3NldHRpbmdzJywgdGV4dDogJ1x1OTE0RFx1N0Y2RScgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9pY29ucycsIHRleHQ6ICdcdTU2RkVcdTY4MDcnIH0sXG4gICAgICAgIHsgbGluazogJ2Vzc2VudGlhbHMvc3R5bGVzJywgdGV4dDogJ1x1NjgzN1x1NUYwRicgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9leHRlcm5hbC1tb2R1bGUnLCB0ZXh0OiAnXHU1OTE2XHU5MEU4XHU2QTIxXHU1NzU3JyB9LFxuICAgICAgICB7IGxpbms6ICdlc3NlbnRpYWxzL2J1aWxkJywgdGV4dDogJ1x1Njc4NFx1NUVGQVx1NEUwRVx1OTBFOFx1N0Y3MicgfSxcbiAgICAgICAgeyBsaW5rOiAnZXNzZW50aWFscy9zZXJ2ZXInLCB0ZXh0OiAnXHU2NzBEXHU1MkExXHU3QUVGXHU0RUE0XHU0RTkyXHU0RTBFXHU2NTcwXHU2MzZFTW9jaycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2xvZ2luJywgdGV4dDogJ1x1NzY3Qlx1NUY1NScgfSxcbiAgICAgICAgLy8geyBsaW5rOiAnaW4tZGVwdGgvbGF5b3V0JywgdGV4dDogJ1x1NUUwM1x1NUM0MCcgfSxcbiAgICAgICAgeyBsaW5rOiAnaW4tZGVwdGgvdGhlbWUnLCB0ZXh0OiAnXHU0RTNCXHU5ODk4JyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9hY2Nlc3MnLCB0ZXh0OiAnXHU2NzQzXHU5NjUwJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2NhbGUnLCB0ZXh0OiAnXHU1NkZEXHU5NjQ1XHU1MzE2JyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9mZWF0dXJlcycsIHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUyOUZcdTgwRkQnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL2NoZWNrLXVwZGF0ZXMnLCB0ZXh0OiAnXHU2OEMwXHU2N0U1XHU2NkY0XHU2NUIwJyB9LFxuICAgICAgICB7IGxpbms6ICdpbi1kZXB0aC9sb2FkaW5nJywgdGV4dDogJ1x1NTE2OFx1NUM0MGxvYWRpbmcnIH0sXG4gICAgICAgIHsgbGluazogJ2luLWRlcHRoL3VpLWZyYW1ld29yaycsIHRleHQ6ICdcdTdFQzRcdTRFRjZcdTVFOTNcdTUyMDdcdTYzNjInIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NURFNVx1N0EwQicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L3N0YW5kYXJkJywgdGV4dDogJ1x1ODlDNFx1ODMwMycgfSxcbiAgICAgICAgeyBsaW5rOiAncHJvamVjdC9jbGknLCB0ZXh0OiAnQ0xJJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L2RpcicsIHRleHQ6ICdcdTc2RUVcdTVGNTVcdThCRjRcdTY2MEUnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvdGVzdCcsIHRleHQ6ICdcdTUzNTVcdTUxNDNcdTZENEJcdThCRDUnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3QvdGFpbHdpbmRjc3MnLCB0ZXh0OiAnVGFpbHdpbmQgQ1NTJyB9LFxuICAgICAgICB7IGxpbms6ICdwcm9qZWN0L2NoYW5nZXNldCcsIHRleHQ6ICdDaGFuZ2VzZXQnIH0sXG4gICAgICAgIHsgbGluazogJ3Byb2plY3Qvdml0ZScsIHRleHQ6ICdWaXRlIENvbmZpZycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgbGluazogJ290aGVyL3Byb2plY3QtdXBkYXRlJywgdGV4dDogJ1x1OTg3OVx1NzZFRVx1NjZGNFx1NjVCMCcgfSxcbiAgICAgICAgeyBsaW5rOiAnb3RoZXIvcmVtb3ZlLWNvZGUnLCB0ZXh0OiAnXHU3OUZCXHU5NjY0XHU0RUUzXHU3ODAxJyB9LFxuICAgICAgICB7IGxpbms6ICdvdGhlci9mYXEnLCB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBzaWRlYmFyQ29tbWVyY2lhbCgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhckl0ZW1bXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgbGluazogJ2NvbW11bml0eScsXG4gICAgICB0ZXh0OiAnXHU0RUE0XHU2RDQxXHU3RkE0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICd0ZWNobmljYWwtc3VwcG9ydCcsXG4gICAgICB0ZXh0OiAnXHU2MjgwXHU2NzJGXHU2NTJGXHU2MzAxJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICdjdXN0b21pemVkJyxcbiAgICAgIHRleHQ6ICdcdTVCOUFcdTUyMzZcdTVGMDBcdTUzRDEnLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIHNpZGViYXJDb21wb25lbnRzKCk6IERlZmF1bHRUaGVtZS5TaWRlYmFySXRlbVtdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaW50cm9kdWN0aW9uJyxcbiAgICAgICAgICB0ZXh0OiAnXHU0RUNCXHU3RUNEJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgdGV4dDogJ1x1NUUwM1x1NUM0MFx1N0VDNFx1NEVGNicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2xheW91dC11aS9wYWdlJyxcbiAgICAgICAgICB0ZXh0OiAnUGFnZSBcdTk4NzVcdTk3NjInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICB0ZXh0OiAnXHU5MDFBXHU3NTI4XHU3RUM0XHU0RUY2JyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tYXBpLWNvbXBvbmVudCcsXG4gICAgICAgICAgdGV4dDogJ0FwaUNvbXBvbmVudCBBcGlcdTdFQzRcdTRFRjZcdTUzMDVcdTg4QzVcdTU2NjgnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWFsZXJ0JyxcbiAgICAgICAgICB0ZXh0OiAnQWxlcnQgXHU4RjdCXHU5MUNGXHU2M0QwXHU3OTNBXHU2ODQ2JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1tb2RhbCcsXG4gICAgICAgICAgdGV4dDogJ01vZGFsIFx1NkEyMVx1NjAwMVx1Njg0NicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tZHJhd2VyJyxcbiAgICAgICAgICB0ZXh0OiAnRHJhd2VyIFx1NjJCRFx1NUM0OScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnY29tbW9uLXVpL3ZiZW4tZm9ybScsXG4gICAgICAgICAgdGV4dDogJ0Zvcm0gXHU4ODY4XHU1MzU1JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi12eGUtdGFibGUnLFxuICAgICAgICAgIHRleHQ6ICdWeGUgVGFibGUgXHU4ODY4XHU2ODNDJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdjb21tb24tdWkvdmJlbi1jb3VudC10by1hbmltYXRvcicsXG4gICAgICAgICAgdGV4dDogJ0NvdW50VG9BbmltYXRvciBcdTY1NzBcdTVCNTdcdTUyQThcdTc1M0InLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2NvbW1vbi11aS92YmVuLWVsbGlwc2lzLXRleHQnLFxuICAgICAgICAgIHRleHQ6ICdFbGxpcHNpc1RleHQgXHU3NzAxXHU3NTY1XHU2NTg3XHU2NzJDJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gbmF2KCk6IERlZmF1bHRUaGVtZS5OYXZJdGVtW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGFjdGl2ZU1hdGNoOiAnXi8oZ3VpZGV8Y29tcG9uZW50cykvJyxcbiAgICAgIHRleHQ6ICdcdTY1ODdcdTY4NjMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnXi9ndWlkZS8nLFxuICAgICAgICAgIGxpbms6ICcvZ3VpZGUvaW50cm9kdWN0aW9uL3ZiZW4nLFxuICAgICAgICAgIHRleHQ6ICdcdTYzMDdcdTUzNTcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYWN0aXZlTWF0Y2g6ICdeL2NvbXBvbmVudHMvJyxcbiAgICAgICAgICBsaW5rOiAnL2NvbXBvbmVudHMvaW50cm9kdWN0aW9uJyxcbiAgICAgICAgICB0ZXh0OiAnXHU3RUM0XHU0RUY2JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTUzODZcdTUzRjJcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGxpbms6ICdodHRwczovL2RvYy52dmJpbi5jbicsXG4gICAgICAgICAgICAgIHRleHQ6ICcyLnhcdTcyNDhcdTY3MkNcdTY1ODdcdTY4NjMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTZGMTRcdTc5M0EnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdWYmVuIEFkbWluJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9kdWNyb25nLmNvbS92dWUtdmJlbi1hZG1pbi1uYWl2ZScsXG4gICAgICAgICAgICAgIHRleHQ6ICdOYWl2ZSBVSSBcdTcyNDhcdTY3MkNcdUZGMDhcdTVGNTNcdTUyNERcdUZGMDknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tYW50ZCcsXG4gICAgICAgICAgICAgIHRleHQ6ICdBbnQgRGVzaWduIFZ1ZSBcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tZWxlJyxcbiAgICAgICAgICAgICAgdGV4dDogJ0VsZW1lbnQgUGx1cyBcdTcyNDhcdTY3MkMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGluazogJ2h0dHBzOi8vZHVjcm9uZy5jb20vdnVlLXZiZW4tYWRtaW4tdGRlc2lnbicsXG4gICAgICAgICAgICAgIHRleHQ6ICdURGVzaWduIFx1NzI0OFx1NjcyQycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly92YmVuLnZ2YmluLmNuJyxcbiAgICAgICAgICAgICAgdGV4dDogJ1ZiZW4gQWRtaW4gMi54JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiB2ZXJzaW9uLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vRHVjci92dWUtdmJlbi1hZG1pbi1uYWl2ZS9yZWxlYXNlcycsXG4gICAgICAgICAgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0R1Y3IvdnVlLXZiZW4tYWRtaW4tbmFpdmUnLFxuICAgICAgICAgIHRleHQ6ICdcdThERUZcdTdFQkZcdTU2RkUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9EdWNyL3Z1ZS12YmVuLWFkbWluLW5haXZlL2Jsb2IvbWFpbi8uZ2l0aHViL2NvbnRyaWJ1dGluZy5tZCcsXG4gICAgICAgICAgdGV4dDogJ1x1OEQyMVx1NzMyRScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGluazogJy9jb21tZXJjaWFsL3RlY2huaWNhbC1zdXBwb3J0JyxcbiAgICAgIHRleHQ6ICdcdUQ4M0VcdUREODQgXHU2MjgwXHU2NzJGXHU2NTJGXHU2MzAxJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxpbms6ICcvc3BvbnNvci9wZXJzb25hbCcsXG4gICAgICB0ZXh0OiAnXHUyNzI4IFx1OEQ1RVx1NTJBOScsXG4gICAgfSxcbiAgICB7XG4gICAgICBsaW5rOiAnL2NvbW1lcmNpYWwvY29tbXVuaXR5JyxcbiAgICAgIHRleHQ6ICdcdUQ4M0RcdURDNjhcdTIwMERcdUQ4M0RcdURDNjZcdTIwMERcdUQ4M0RcdURDNjYgXHU0RUE0XHU2RDQxXHU3RkE0JyxcbiAgICAgIC8vIGl0ZW1zOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9xdW4ucXEuY29tL3Fxd2ViL3F1bnByby9zaGFyZT9fd3Y9MyZfd3d2PTEyOCZhcHBDaGFubmVsPXNoYXJlJmludml0ZUNvZGU9MjJ5U3pqN3BLaXcmYnVzaW5lc3NUeXBlPTkmZnJvbT0yNDY2MTAmYml6PWthJm1haW5Tb3VyY2VJZD1zaGFyZSZzdWJTb3VyY2VJZD1vdGhlcnMmanVtcHNvdXJjZT1zaG9ydHVybCMvcGMnLFxuICAgICAgLy8gICAgIHRleHQ6ICdRUVx1OTg5MVx1OTA1MycsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBsaW5rOiAnaHR0cHM6Ly9xbS5xcS5jb20vY2dpLWJpbi9xbS9xcj9fd3Y9MTAyNyZrPW1qWm1saGdWenpVeHZkeGxsQjZDMXZIcFg4TzhRUkwwJmF1dGhLZXk9REJkRmJCd0VSbWZhS1k5NUp2UldxTENKSVJHSkFtS3laYnJwelo0MUVLRE1aNVNSNk1mYmpPQmFhTlJONzNmciZub3ZlcmlmeT0wJmdyb3VwX2NvZGU9NDI4NjEwOScsXG4gICAgICAvLyAgICAgdGV4dDogJ1FRXHU3RkE0JyxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvVlU2MmpUZWNhZCcsXG4gICAgICAvLyAgICAgdGV4dDogJ0Rpc2NvcmQnLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gXSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGxpbms6ICcvZnJpZW5kLWxpbmtzLycsXG4gICAgLy8gICB0ZXh0OiAnXHVEODNFXHVERDFEIFx1NTNDQlx1NjBDNVx1OTRGRVx1NjNBNScsXG4gICAgLy8gfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaDogRGVmYXVsdFRoZW1lLkFsZ29saWFTZWFyY2hPcHRpb25zWydsb2NhbGVzJ10gPSB7XG4gIHJvb3Q6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICBidXR0b246IHtcbiAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICB9LFxuICAgICAgbW9kYWw6IHtcbiAgICAgICAgZXJyb3JTY3JlZW46IHtcbiAgICAgICAgICBoZWxwVGV4dDogJ1x1NEY2MFx1NTNFRlx1ODBGRFx1OTcwMFx1ODk4MVx1NjhDMFx1NjdFNVx1NEY2MFx1NzY4NFx1N0Y1MVx1N0VEQ1x1OEZERVx1NjNBNScsXG4gICAgICAgICAgdGl0bGVUZXh0OiAnXHU2NUUwXHU2Q0Q1XHU4M0I3XHU1M0Q2XHU3RUQzXHU2NzlDJyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgY2xvc2VUZXh0OiAnXHU1MTczXHU5NUVEJyxcbiAgICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdcdTUyMDdcdTYzNjInLFxuICAgICAgICAgIHNlYXJjaEJ5VGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjNEMFx1NEY5Qlx1ODAwNScsXG4gICAgICAgICAgc2VsZWN0VGV4dDogJ1x1OTAwOVx1NjJFOScsXG4gICAgICAgIH0sXG4gICAgICAgIG5vUmVzdWx0c1NjcmVlbjoge1xuICAgICAgICAgIG5vUmVzdWx0c1RleHQ6ICdcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUMnLFxuICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6ICdcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODgnLFxuICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzVGV4dDogJ1x1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRicsXG4gICAgICAgICAgc3VnZ2VzdGVkUXVlcnlUZXh0OiAnXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoQm94OiB7XG4gICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiAnXHU1M0Q2XHU2RDg4JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnXHU1M0Q2XHU2RDg4JyxcbiAgICAgICAgICByZXNldEJ1dHRvbkFyaWFMYWJlbDogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0U2NyZWVuOiB7XG4gICAgICAgICAgZmF2b3JpdGVTZWFyY2hlc1RpdGxlOiAnXHU2NTM2XHU4NUNGJyxcbiAgICAgICAgICBub1JlY2VudFNlYXJjaGVzVGV4dDogJ1x1NkNBMVx1NjcwOVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgcmVjZW50U2VhcmNoZXNUaXRsZTogJ1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgICAgcmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NCcsXG4gICAgICAgICAgcmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGU6ICdcdTRFQ0VcdTY0MUNcdTdEMjJcdTUzODZcdTUzRjJcdTRFMkRcdTc5RkJcdTk2NjQnLFxuICAgICAgICAgIHNhdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZTogJ1x1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5YixTQUFTLGVBQWU7QUFDamQsU0FBUyw2QkFBNkI7OztBQ0N0QyxTQUFTLG9CQUFvQjs7O0FDQTNCLGNBQVc7OztBRElOLElBQU0sS0FBSyxhQUFhO0FBQUEsRUFDN0IsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUFBLElBQ1gscUJBQXFCO0FBQUEsSUFDckIscUJBQXFCO0FBQUEsSUFDckIsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFNBQ0U7QUFB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QUNMO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxZQUNBO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFVO0FBQUEsTUFDUixhQUNFO0FBQUEsTUFDRixPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsS0FBSztBQUFBLFVBQ0wsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxRQUFRLFFBQVEsUUFBUSxJQUFJLEdBQUcsaUJBQWlCO0FBQUEsSUFDaEQsY0FBYztBQUFBLElBQ2QsU0FBUztBQUFBLE1BQ1AsY0FBYyxDQUFDLDBDQUEwQztBQUFBLE1BQ3pELCtCQUErQixJQUFJLE9BQU87QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFDRjs7O0FIN0tBLElBQU8saUJBQVE7QUFBQSxFQUNiLHNCQUFzQjtBQUFBLElBQ3BCLEdBQUc7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxRQUNGLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEdBQUc7QUFBQSxNQUNMO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixHQUFHO0FBQUEsTUFDTDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAibmF2IiwgInNpZGViYXJDb21tZXJjaWFsIiwgInNpZGViYXJHdWlkZSIsICJkZWZpbmVDb25maWciXQp9Cg==
