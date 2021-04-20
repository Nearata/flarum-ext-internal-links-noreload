import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';


app.initializers.add('nearata-internal-links-noreload', app => {
    function addNoReload() {
        const baseUrl = app.forum.attribute('baseUrl');
        const postBody = this.element.querySelector('.Post-body');
        const elements = postBody.querySelectorAll('a');

        for (const link of elements) {
            if (link.classList.contains('PostMention')) {
                continue;
            }

            const href = link.href;

            if (!href.startsWith(baseUrl)) {
                continue;
            }

            link.addEventListener('click', function (e) {
                e.preventDefault();

                const path = href.replace(baseUrl, '');

                m.route.set(path);
            });
        }
    };

    extend(CommentPost.prototype, 'oncreate', addNoReload);
    extend(CommentPost.prototype, 'onupdate', addNoReload);
});
