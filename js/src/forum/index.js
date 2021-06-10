import { extend } from 'flarum/common/extend';
import app from 'flarum/forum/app'
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('nearata-internal-links-noreload', () => {
    extend(CommentPost.prototype, ['oncreate', 'onupdate'], function () {
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

            const path = href.replace(baseUrl, '');
            const elements = path.split('/');
            const isFile = elements[elements.length-1].match(/(.*)\.(.*)/i);

            if (isFile) {
                continue;
            }

            link.addEventListener('click', function (e) {
                e.preventDefault();

                m.route.set(path);
            });
        }
    });
});
