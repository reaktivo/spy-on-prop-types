/**
 * We expose this API as a hook to mutating the PropTypes object
 */
import PropTypes from "prop-types";
import spyOn from ".";

Object.assign(PropTypes, spyOn(PropTypes));
