(this["webpackJsonpkawarjeya-app"]=this["webpackJsonpkawarjeya-app"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./1.jpg":15,"./10.jpg":16,"./2.jpg":17,"./3.jpg":18,"./4.jpg":19,"./5.jpg":20,"./6.jpg":21,"./7.jpg":22,"./8.jpg":23,"./9.jpg":24};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/1.c9d67fed.jpg"},function(e,t,a){e.exports=a.p+"static/media/10.3d074a01.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.a5eeb750.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.805a7e97.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.63b24111.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.1f0d018a.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.db81d972.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.d6b83820.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.4d09ccd2.jpg"},function(e,t,a){e.exports=a.p+"static/media/9.eee63693.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),i=(a(12),a(3)),s=a(4),p=a(5),u=a(6),l=(a(13),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"kawarji",src:a(14)("./".concat(e.kawarji.id,".jpg")),width:"300",height:"300"}),r.a.createElement("h2",null,e.kawarji.name))}),d=(a(25),function(e){return r.a.createElement("div",{className:"card-list"},e.kawarjeya.map((function(e){return r.a.createElement(l,{key:e.id,kawarji:e})})))}),f=(a(26),function(e){var t=e.placeholder,a=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),m=(a(27),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={kawarjeya:[],searchField:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({kawarjeya:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.kawarjeya,n=t.searchField,c=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Greatest Football Players"),r.a.createElement(f,{placeholder:"search kawarji",handleChange:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement(d,{kawarjeya:c}))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.dc74217e.chunk.js.map