function request(url) {
  return new Promise((resolve) => {
    console.log('request url:', url);
    setTimeout(() => {
      resolve({ data: '这是返回的数据' });
    }, 2000);
  });
}

export default request;
