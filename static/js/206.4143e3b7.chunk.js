"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[206],{6369:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(3504),a={Gallery:"MoviesGallery_Gallery__rJFex",Link:"MoviesGallery_Link__-IlD5",Image:"MoviesGallery_Image__tUhSS",Subtitle:"MoviesGallery_Subtitle__BPegV"},c=r(184);function s(e){var t=e.movies;return(0,c.jsx)("ul",{className:a.Gallery,children:t&&t.map((function(e){return(0,c.jsx)("li",{className:a.Item,children:(0,c.jsxs)(n.rU,{to:"/movies/".concat(e.id),className:a.Link,children:[(0,c.jsx)("img",{className:a.Image,src:e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"https://raw.githubusercontent.com/SergiusNahnoinyi/goit-react-hw-05-movies/main/public/logo512.png",alt:e.title}),(0,c.jsx)("h3",{className:a.Title,children:e.title}),(0,c.jsx)("p",{className:a.Subtitle,children:e.release_date?e.release_date:"Unknown"})]})},e.id)}))})}},1206:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(885),a=r(2791),c=r(6369),s=r(6910),i=r(184);function o(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],o=t[1];return(0,a.useEffect)((function(){s.Z.getTrendingMovies().then(o)}),[]),(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{style:{marginBottom:"16px",textAlign:"center"},children:"Trending today"}),(0,i.jsx)(c.Z,{movies:r})]})}},6910:function(e,t,r){var n=r(5861),a=r(7757),c=r.n(a),s=r(4569),i=r.n(s);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="1aaaa4b4eb79ea073919ef453434f2ea",u={getTrendingMovies:function(){return l.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastById:function(e){return v.apply(this,arguments)},getReviewsById:function(e){return h.apply(this,arguments)},getMoviesbySearchQuery:function(e){return f.apply(this,arguments)}};function l(){return(l=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(o),e.prev=1,e.next=4,i().get(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"?api_key=").concat(o));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(o,"&query=").concat(t),e.prev=1,e.next=4,i().get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}t.Z=u}}]);
//# sourceMappingURL=206.4143e3b7.chunk.js.map