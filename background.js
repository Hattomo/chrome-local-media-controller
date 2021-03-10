// removeRules
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    // add rules
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
            // conditions of running action
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { schemes: ['file'] },
            })
        ],
        // run action
        actions: [
            new chrome.declarativeContent.ShowPageAction()
        ]
    }]);
});