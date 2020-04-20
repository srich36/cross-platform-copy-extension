import instance from 'src/popup/popup';

const urlPrefix = '/';
const syncCopy = async text => {
  await instance.post(`${urlPrefix}posts/`, {
    text,
  });
};

const getPosts = async () => {
  const data = await instance.get(`${urlPrefix}posts/`);
  return data;
};

export { syncCopy, getPosts };
