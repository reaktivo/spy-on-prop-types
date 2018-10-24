import { mapObject, isPlainObject } from "./util";

export default function spyOn(obj, registry = []) {
  if (registry.includes(obj)) {
    return obj;
  }

  registry.push(obj);

  if (isPlainObject(obj) || Array.isArray(obj)) {
    return mapObject(obj, value => spyOn(value, registry));
  } else if (typeof obj === "function") {
    function spy(...args) {
      const spiedArgs = spyOn(args, registry);
      const result = obj(...spiedArgs);
      if (typeof result === "function") {
        // store only the first one, since propType
        // checker's public API is monadic
        result.definition = spiedArgs[0];
      }
      return spyOn(result, registry);
    }
    spy.definition = obj.definition || [];
    spy.required = false;
    if (obj.isRequired) {
      spy.isRequired = spyOn(obj.isRequired, registry);
      spy.isRequired.definition = spy.definition;
      spy.isRequired.required = true;
    }
    return spy;
  } else {
    return obj;
  }
}
