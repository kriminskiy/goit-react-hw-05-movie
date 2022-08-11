"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[20],{7020:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(885),a=r(2791),s=r(6871),c=r(3504),i=r(8185),o={Button:"GalleryItem_Button__7mITF",Container:"GalleryItem_Container__4wzT8",Image:"GalleryItem_Image__dcGHn",Title:"GalleryItem_Title__FckrF",Subitle:"GalleryItem_Subitle__nDAXP",Overview:"GalleryItem_Overview__Aat1H",Description:"GalleryItem_Description__Y0XJX",Link:"GalleryItem_Link__qSkjF"},u=r(184);function l(e){var t=e.movie,r=(0,s.s0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("button",{type:"button",className:o.Button,onClick:function(){r(-1)},children:(0,u.jsx)(i.knT,{style:{width:"2em",height:"2em"}})}),t&&(0,u.jsxs)("div",{className:o.Container,children:[(0,u.jsx)("img",{className:o.Image,src:"https://image.tmdb.org/t/p/w500"+t.poster_path,alt:t.title}),(0,u.jsxs)("div",{className:o.Card,children:[(0,u.jsx)("h1",{className:o.Title,children:t.title}),(0,u.jsxs)("p",{className:o.Description,children:["User Score: ",10*t.vote_average,"%"]}),(0,u.jsx)("h2",{className:o.Subitle,children:"Overview"}),(0,u.jsx)("p",{className:o.Overview,children:t.overview}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{className:o.Description,children:t.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,u.jsx)("hr",{}),(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsx)(c.rU,{to:"cast",className:o.Link,children:"Cast"}),(0,u.jsx)(c.rU,{to:"reviews",className:o.Link,children:"Reviews"}),(0,u.jsx)("hr",{}),(0,u.jsx)(s.j3,{})]})}var p=r(6910);function v(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],c=t[1],i=(0,s.UO)().movieId;return(0,a.useEffect)((function(){p.Z.getMovieById(i).then(c)}),[i]),(0,u.jsx)(l,{movie:r})}},6910:function(e,t,r){var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="1aaaa4b4eb79ea073919ef453434f2ea",u={getTrendingMovies:function(){return l.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastById:function(e){return v.apply(this,arguments)},getReviewsById:function(e){return h.apply(this,arguments)},getMoviesbySearchQuery:function(e){return m.apply(this,arguments)}};function l(){return(l=(0,n.Z)(s().mark((function e(){var t,r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(o),e.prev=1,e.next=4,i().get(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"?api_key=").concat(o));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"/credits?api_key=").concat(o));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(o,"&query=").concat(t),e.prev=1,e.next=4,i().get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}t.Z=u}}]);
//# sourceMappingURL=20.52ab3a59.chunk.js.map