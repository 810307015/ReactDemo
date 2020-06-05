// 将location中的search字符串转化成query对象
const searchToQuery = (search = location.search) => {
  if (search.length <= 1) {
    return {};
  }
  const query = {};
  search
    .slice(1)
    .split("&")
    .forEach(item => {
      const [key, value] = item.split("=");
      query[key] = decodeURIComponent(value);
    });
  return query;
};

export {
  searchToQuery
}