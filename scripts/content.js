if (document.location.href.includes("model=helpdesk.ticket")) {
    // from https://stackoverflow.com/a/61511955
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    waitForElm('div.o_ChatterTopbar_actions').then((elm) => {
        var actions = document.querySelector('div.o_ChatterTopbar_actions');
        var autogrow = document.querySelector('div.o_ChatterTopbar_actions div.o-autogrow');
        var logNoteButton = document.querySelector('[data-hotkey="shift+m"]');

        actions.insertBefore(logNoteButton, autogrow);
    });
}
