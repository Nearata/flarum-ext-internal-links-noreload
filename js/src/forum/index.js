import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';


app.initializers.add('nearata-internal-links-noreload', app => {
    const regex = /^\/(?<route>\w+)\/?(?<par1>\w+)?\/?(?<par2>\w+)?/;

    extend(CommentPost.prototype, 'oncreate', function () {
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
                const par1 = groups['par1'];
                const par2 = groups['par2'];

                switch (route) {
                    case 'd':
                        if (typeof par2 === 'undefined') {
                            m.route.set(app.route('discussion', { id: par1 }));
                        } else {
                            m.route.set(app.route('discussion.near', { id: par1, near: par2 }));
                        }
                        break;
                    case 'flags':
                    case 'following':
                    case 'notifications':
                    case 'settings':
                    case 'tags':
                        m.route.set(`/${route}`);
                        break;
                    case 't':
                        m.route.set(app.route('tag', { tags: par1 }));
                        break;
                    case 'u':
                        const suffix = typeof par2 === 'undefined' ? '' : `.${par2}`;;
                        m.route.set(app.route(`user${suffix}`, { username: par1 }));
                        break;
                    default:
                        break;
                }
            });
        }
    });
});
