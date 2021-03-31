const listElm = document.querySelector('.infinite-list');
let itemNum = 1;

const loadMoreList = () => {
  for (let i = 0; i < 10; i++) {
    const item = document.createElement('li');
    item.innerText = 'Item ' + itemNum++;
    listElm.appendChild(item);
  }
}

listElm.addEventListener('scroll', () => {
  if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    loadMoreList();
  }
});

// Initially load items
loadMoreList();