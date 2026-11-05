import { HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import site from "./src/_data/site.json" with { type: "json" };

export default function (eleventyConfig) {
  // Rewrites root-relative links ("/about/") to include the path prefix
  // ("/livingworld-site/about/") when the site is built for GitHub Pages.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addGlobalData("year", new Date().getFullYear());

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/devlog/posts/*.md").reverse()
  );

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("head", (items, n) => (items || []).slice(0, n));
  eleventyConfig.addFilter("isoDate", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "posts", limit: 20 },
    metadata: {
      language: "en",
      title: `${site.title} Devlog`,
      subtitle: site.description,
      base: "https://scripo.github.io/",
      author: { name: site.author },
    },
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
