export default () => {
  console.log('COUNTING CHARS');
  const pageContent = document.querySelector('.notion-page-content');
  if (pageContent === null) return;
  const textBlocks = pageContent.querySelectorAll('.notion-text-block');
  const textChars = countCharsInNodes(textBlocks);
  console.log(textChars);
};

const countCharsInNodes = (nodes: NodeListOf<Element>) => {
  let chars = 0;
  nodes.forEach((node) => {
    const data = (<HTMLElement>node).innerText;
    console.log(data);
    if (node.textContent !== null) {
      chars += data.length;
    }
  });
  return chars;
};
