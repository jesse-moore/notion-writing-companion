chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url && /^http/.test(tab.url)) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: ['contentScript.bundle.js'],
      },
      (result) => {
        console.log(result);
      }
    );
  }
});
