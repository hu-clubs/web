export function createFetchActions (resource) {
  return {
    begin: 'FETCH_' + resource + '_BEGIN',
    success: 'FETCH_' + resource + '_SUCCESS',
    error: 'FETCH_' + resource + '_ERROR',
    invalidate: 'INVALIDATE_' + resource
  };
}
