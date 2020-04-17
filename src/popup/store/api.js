import instance from 'src/popup/popup';

const urlPrefix = '/';
const syncCopy = async text => {
  await instance.post(`${urlPrefix}copies`, {
    text,
  });
};

export { syncCopy };
