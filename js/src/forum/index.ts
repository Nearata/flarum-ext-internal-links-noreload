import app from "flarum/forum/app";

app.initializers.add("nearata-internal-links-noreload", () => {
  document.addEventListener("click", (e) => {
    if (typeof e.redraw !== "undefined") {
      return;
    }

    // @ts-ignore
    const origin: HTMLAnchorElement = e.target.closest("a");

    if (!origin) {
      return;
    }

    const base: string = app.forum.attribute("baseUrl");

    if (!origin.href.startsWith(base)) {
      return;
    }

    if (origin.target) {
      return;
    }

    const elements = origin.pathname.split("/");
    const isFile = elements[elements.length - 1].match(/(.*)\.(.*)/i);

    if (isFile) {
      return;
    }

    e.preventDefault();

    m.route.set(origin.pathname);
  });
});
