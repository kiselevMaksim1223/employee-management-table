export const generateId = () => {
  const timestamp = new Date().getTime();
  return 'id_' + timestamp;
};
