import UnmodifiedPropTypes from "prop-types";
import spyOn from ".";

describe("spyOn", () => {
  it("should add spy to methods of a object", () => {
    const PropTypes = spyOn(UnmodifiedPropTypes);
    const propTypes = {
      something: PropTypes.oneOf(["1", "2", "3"])
    };
    expect(propTypes.something.definition).toEqual(["1", "2", "3"]);
  });

  it("should correctly set the required flag", () => {
    const PropTypes = spyOn(UnmodifiedPropTypes);
    const propTypes = {
      something: PropTypes.string.isRequired,
      another: PropTypes.string
    };
    expect(propTypes.something.required).toBeTruthy();
    expect(propTypes.another.required).toBeFalsy();
  });

  it("should set the type", () => {
    const PropTypes = spyOn(UnmodifiedPropTypes);
    const propTypes = {
      something: PropTypes.shape({}).isRequired,
      another: PropTypes.string
    };
    expect(propTypes.something.type).toBe("shape");
    expect(propTypes.another.type).toBe("string");
  });
});
