export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const actionRemove = (id) => ({
  type: REMOVE_CLIENT,
  payload: id,
});