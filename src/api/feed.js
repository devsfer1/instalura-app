const readPhotos = async(callback) => {
  const photosHTTP = await fetch('http://192.168.1.10:3030/feed');
  const photosJSON = await photosHTTP.json();
  callback(photosJSON);
}

export default readPhotos;