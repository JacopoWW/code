import _ from 'lodash';


/**
 * @export 从0开始，从一个分成pageSize页的数组中拿到它的第pageNumber页的function
 * @param {*} item 数据
 * @param {*} pageNumber 当前是第几页
 * @param {*} pageSize 每页几个item
 */
export function paginate(item, pageNumber, pageSize) {
  const startIndex = (pageNumber-1)*pageSize;
  return _(item)
    .slice(startIndex)
    .take(pageSize)
    .value();
}