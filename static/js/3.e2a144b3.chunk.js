(this.webpackJsonpasm_ps12133=this.webpackJsonpasm_ps12133||[]).push([[3],{76:function(e,t,a){(function(t){var n;e.exports=(n=a(3),function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var n=a(3);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,s,i){if(i!==n){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(0),i=a.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,n=e.page,s=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.pageLabelBuilder,b=e.ariaLabel||"Page "+n+(f?" "+f:""),g=null;return s&&(g="page",b=e.ariaLabel||"Page "+n+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),r.a.createElement("li",{className:t},r.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":b,"aria-current":g,onKeyPress:u},c(u)),d(n)))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=o;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=function(e){var t=e.breakLabel,a=e.breakClassName,n=e.breakLinkClassName,s=e.breakHandler,i=e.getEventListener,l=a||"break";return r.a.createElement("li",{className:l},r.a.createElement("a",u({className:n,role:"button",tabIndex:"0",onKeyPress:s},i(s)),t))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var f=p;function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=C(e);if(t){var r=C(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m(this,a)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,a,n,s=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),x(y(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),x(y(t),"handleNextPage",(function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)})),x(y(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),x(y(t),"getEventListener",(function(e){return x({},t.props.eventListener,e)})),x(y(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)})),x(y(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),x(y(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),x(y(t),"pagination",(function(){var e=[],a=t.props,n=a.pageRangeDisplayed,s=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(s<=n)for(var p=0;p<s;p++)e.push(t.getPageElement(p));else{var d,b,g,v=n/2,h=n-v;u>s-n/2?v=n-(h=s-u):u<n/2&&(h=n-(v=u));var m=function(e){return t.getPageElement(e)};for(d=0;d<s;d++)(b=d+1)<=i||b>s-i||d>=u-v&&d<=u+h?e.push(m(d)):l&&e[e.length-1]!==g&&(g=r.a.createElement(f,{key:d,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,d),getEventListener:t.getEventListener}),e.push(g))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<n)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,n=a.pageClassName,s=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext,u=a.pageLabelBuilder;return r.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:n,pageLinkClassName:s,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,n=e.containerClassName,s=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,d=e.nextAriaLabel,g=e.nextRel,v=this.state.selected,h=i+(0===v?" ".concat(t):""),m=p+(v===a-1?" ".concat(t):""),y=0===v?"true":"false",C=v===a-1?"true":"false";return r.a.createElement("ul",{className:n},r.a.createElement("li",{className:h},r.a.createElement("a",b({className:l,href:this.hrefBuilder(v-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),s)),this.pagination(),r.a.createElement("li",{className:m},r.a.createElement("a",b({className:f,href:this.hrefBuilder(v+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":C,"aria-label":d,rel:g},this.getEventListener(this.handleNextPage)),u)))}}])&&g(t.prototype,a),n&&g(t,n),i}(n.Component);x(k,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),x(k,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=k}]))}).call(this,a(26))},77:function(e,t,a){"use strict";a(3);var n=a(2);t.a=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("h2",{children:"Loading..."})})})}},80:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),s=a(13),i=a(6),l=a(3),o=a(76),c=a.n(o),u=a(8),p=a(20),f=a(30),d=a(42),b=a(77),g=a(2);t.default=function(e){var t=e.match,a=Object(l.useState)({}),n=Object(i.a)(a,2),o=n[0],v=n[1],h=Object(l.useState)([]),m=Object(i.a)(h,2),y=m[0],C=m[1],x=Object(l.useState)(!0),k=Object(i.a)(x,2),N=k[0],j=k[1],L="http://localhost:4000",P=t.params.id,O=Object(l.useState)(0),E=Object(i.a)(O,2),w=E[0],R=E[1],S=20*w,A=y.slice(S,S+20).map((function(e){return Object(g.jsx)(d.a,{film:e},e.id)})),B=Math.ceil(y.length/20),D=[{title:"Trang ch\u1ee7",link:"",isActive:!1},{title:"Qu\u1ed1c gia",link:"country",isActive:!1},{title:o.name,link:o.id,isActive:!0}];return Object(l.useEffect)((function(){return function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L,"/films"));case 3:return t=e.sent,e.next=6,t.json();case 6:for(a=e.sent,n=[],s=0;s<a.length;s++)a[s].country===parseInt(P)&&n.push(a[s]);C(n),j(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L,"/countries/").concat(P));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,v(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()(),function(){C([]),v({})}}),[P]),N?Object(g.jsx)(b.a,{}):y.length?Object(g.jsx)("div",{className:"container pt-3",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(f.a,{listBreadcrumb:D}),Object(g.jsxs)("h1",{className:"title",children:["Qu\u1ed1c gia: ",o.name]}),Object(g.jsxs)("main",{className:"col-md-9 pt-3 flex film-wrapper",children:[A,Object(g.jsx)(c.a,{previousLabel:"Previous",nextLabel:"Next",pageCount:B,onPageChange:function(e){var t=e.selected;R(t)},containerClassName:"pagination-wrapper",previousLinkClassName:"previousBtn",nextLinkClassName:"nextBtn",disabledClassName:"paginationDisabled",activeClassName:"paginationActive"})]}),Object(g.jsx)("div",{className:"col-md-3 pt-3",children:Object(g.jsx)(p.a,{})})]})}):Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("h1",{className:"title",children:["Th\u1ec3 lo\u1ea1i: ",o.name]}),Object(g.jsx)("h3",{children:"Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3"}),Object(g.jsxs)(u.b,{to:"/genzfilm/genre",children:[Object(g.jsx)("i",{className:"fad fa-arrow-left"})," H\xe3y t\xecm th\u1ebf lo\u1ea1i kh\xe1c"]})]})})}}}]);
//# sourceMappingURL=3.e2a144b3.chunk.js.map