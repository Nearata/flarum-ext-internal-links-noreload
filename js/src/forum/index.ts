import app from "flarum/forum/app";

app.initializers.add("nearata-internal-links-noreload", () => {
    document.addEventListener("click", (e) => {
        const base: string = app.forum.attribute("baseUrl");
        // @ts-ignore
        const origin: HTMLAnchorElement = e.target.closest("a");

        if (!origin) {
            return;
        }

        if (!origin.href.startsWith(base)) {
            return;
        }

        if (origin.target) {
            return;
        }

        const path = origin.href.replace(base, "");
        const elements = path.split("/");
        const isFile = elements[elements.length - 1].match(/(.*)\.(.*)/i);

        if (isFile) {
            return;
        }

        e.preventDefault();

        m.route.set(path);
    });
});
