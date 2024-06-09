"use strict";exports.id=70,exports.ids=[70],exports.modules={7462:(e,r,o)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o(2015),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,f=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,o){var t,n={},l=null,a=null;for(t in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)_.call(r,t)&&!p.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:a,props:n,_owner:f.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},6070:(e,r,o)=>{e.exports=o(7462)}};