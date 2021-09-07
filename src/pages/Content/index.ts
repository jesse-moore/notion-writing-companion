import parsePageId from '../../utils/parsePageId';
import countChars from '../../utils/countChars';

const init = () => {
  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(callback);
  observer.observe(document, config);
  const pageId = parsePageId(window.location.pathname);

  console.log(pageId);
};

const callback: MutationCallback = function (_mutationsList, observer) {
  if (document.body.querySelector('.notion-page-content') !== null) {
    countChars();
    observer.disconnect();
  }
};

init();
