// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactSimpleMaps = require("react-simple-maps");

function make(geography, projection, precision, cacheId, round, tabable, children) {
  return ReasonReact.wrapJsForReason(ReactSimpleMaps.Geography, {
              geography: geography,
              projection: projection,
              precision: precision,
              cacheId: cacheId,
              round: round,
              tabable: tabable
            }, children);
}

exports.make = make;
/* ReasonReact Not a pure module */
