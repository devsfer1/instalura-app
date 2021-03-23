const likeImg = (liked) => {
  if(liked) {
    return require('../../res/img/s2-checked.png');
  } else {
    return require('../../res/img/s2.png');
  }
}

const likePhoto = (liked, likes) => {
  let qnt = likes
  if(liked) {
    qnt--;
  } else {
    qnt++;
  }

  return [!liked, qnt];
};

export { likeImg, likePhoto }