---
---
const site_url_len = "{{site.url}}{{site.baseurl}}".length

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", main);
} else {
  // `DOMContentLoaded` has already fired
  main();
}

function main() {
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.getElementById("missing-content").textContent = '(' + document.URL.substring(site_url_len) + ')';
}
