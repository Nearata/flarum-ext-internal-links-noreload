import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';


app.initializers.add('nearata-internal-links-noreload', app => {
    const regex = /^\/(?<route>\w+)/;

    function addNoReload() {
        const baseUrl = app.forum.attribute('baseUrl');
        const postBody = this.element.querySelector('.Post-body');
        const elements = postBody.querySelectorAll('a');

        for (const link of elements) {
            const href = link.href;

            if (!href.startsWith(baseUrl)) {
                continue;
            }

            const path = href.replace(baseUrl, '');

            link.addEventListener('click', function (e) {
                e.preventDefault();

                const found = path.match(regex);

                if (found === null) {
                    m.route.set('/');
                    return;
                }

                const groups = found.groups;
                const route = groups['route'];

                switch (route) {
                    case 'd':
                        m.route.set(app.route('discussion', { id: path.replace('/d/', '') }));
                        break;
                    case 'flags':
                    case 'following':
                    case 'notifications':
                    case 'settings':
                    case 'tags':
                        m.route.set(`/${route}`);
                        break;
                    case 't':
                        m.route.set(app.route('tag', { tags: path.replace('/t/', '') }));
                        break;
                    case 'u':
                        m.route.set(app.route(`user`, { username: path.replace('/u/', '') }));
                        break;
                    default:
                        break;
                }
            });
        }
    };

    extend(CommentPost.prototype, 'oncreate', addNoReload);
    extend(CommentPost.prototype, 'onupdate', addNoReload);
});
