module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.setTemplateFormats(["njk", "md"]);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
