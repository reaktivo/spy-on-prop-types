export default function mapObject(obj, fn) {
  if (Array.isArray(obj)) {
    return obj.map(fn);
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    return Object.assign(acc, { [key]: fn(value, key, obj) });
  }, {});
}
