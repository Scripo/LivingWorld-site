// Loads the YouTube player only when a Short is clicked, to keep pages fast.
(function () {
  if (window.__lwShorts) return;
  window.__lwShorts = true;
  function init() {
    document.querySelectorAll(".short-frame").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + btn.dataset.video + "?autoplay=1&rel=0";
        f.title = btn.getAttribute("aria-label");
        f.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        f.allowFullscreen = true;
        btn.replaceWith(f);
      });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
