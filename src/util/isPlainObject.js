// A really naive implementation of is plain object
export default function isPlainObject(o) {
  return typeof o === "object" && o.constructor === Object;
}
