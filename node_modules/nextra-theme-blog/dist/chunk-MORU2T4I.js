// src/utils/get-tags.ts
function split(tags = "") {
  return (Array.isArray(tags) ? tags : tags.split(",")).map((s) => s.trim());
}
var flattenPageMap = (page, result = []) => {
  if (Array.isArray(page.children)) {
    for (const p of page.children) {
      flattenPageMap(p, result);
    }
  }
  result.push(page);
};
var flattenPageMaps = (pages, result = []) => {
  for (const v of pages) {
    flattenPageMap(v, result);
  }
};
var getStaticTags = (pageMap) => {
  const result = [];
  flattenPageMaps(pageMap, result);
  return Array.from(new Set(result.map(getTags).flat(1).filter(Boolean)));
};
function getTags(page) {
  if (!page.frontMatter) {
    return [];
  }
  return split(page.frontMatter.tag);
}

export {
  split,
  getStaticTags,
  getTags
};
