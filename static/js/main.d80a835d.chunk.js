(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),s=n(2),c=n.n(s),l=n(13),u=n(14),m=n(15),v=n(18),p=n(16),d=n(19),g=n(17),y=n.n(g);var h=function(e){e.id;var t=e.year,n=e.title,a=(e.summary,e.poster),i=e.genres;return r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:n,title:n}),r.a.createElement("div",null,r.a.createElement("h3",null,n),r.a.createElement("h5",null,t),r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))},f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},n.getMovies=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,a=t.data.data.movies,console.log(a),n.setState({movies:a,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"movieRender",value:function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return r.a.createElement("div",null,t?"Loading...":n.map(this.movieRender))}}]),t}(r.a.Component);o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d80a835d.chunk.js.map