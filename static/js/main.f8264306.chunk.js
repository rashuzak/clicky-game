(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://th.bing.com/th/id/OIP.06v4VYNx270YMheY5VdkFQHaL2?w=172&h=276&c=7&o=5&dpr=2&pid=1.7"},{"id":2,"image":"https://th.bing.com/th/id/OIP.hxqZYvrLo0fbUjr2S-ar-wHaJE?w=172&h=211&c=7&o=5&dpr=2&pid=1.7"},{"id":3,"image":"https://th.bing.com/th/id/OIP.ON7OfB2c4kWb9FDhPHq9vAHaPd?w=167&h=349&c=7&o=5&dpr=2&pid=1.7"},{"id":4,"image":"https://th.bing.com/th/id/OIP.eX-dkdCizzwP9cr7lI8f6QHaL9?w=172&h=278&c=7&o=5&dpr=2&pid=1.7"},{"id":5,"image":"https://th.bing.com/th/id/OIP.NrihFIgCVGm3kKowba8A-gHaIZ?w=172&h=196&c=7&o=5&dpr=2&pid=1.7"},{"id":6,"image":"https://th.bing.com/th/id/OIP.uhbgjEkCzWtdzaJZ4jNKmAHaKH?w=172&h=236&c=7&o=5&dpr=2&pid=1.7"},{"id":7,"image":"https://th.bing.com/th/id/OIP.0Fi77pa-p6tL4RK7b5ucLgHaKh?w=172&h=245&c=7&o=5&dpr=2&pid=1.7"},{"id":8,"image":"https://th.bing.com/th/id/OIP.XkHCqag2UBxjCcE_cdgY5AHaKx?w=172&h=250&c=7&o=5&dpr=2&pid=1.7"},{"id":9,"image":"https://th.bing.com/th/id/OIP.ooTQuHuZW02VeVTHvVxaOgAAAA?w=124&h=180&c=7&o=5&dpr=2&pid=1.7"},{"id":10,"image":"https://th.bing.com/th/id/OIP.diPoQJwLL6VUINTL4F-23QHaOz?w=172&h=344&c=7&o=5&dpr=2&pid=1.7"},{"id":11,"image":"https://th.bing.com/th/id/OIP.-iysJXW3rZ7Xtqsb26XXrgHaHa?w=172&h=172&c=7&o=5&dpr=2&pid=1.7"},{"id":12,"image":"https://th.bing.com/th/id/OIP.Lmn7EQK7v1hJYncQKfGDOgHaFj?w=172&h=129&c=7&o=5&dpr=2&pid=1.7"}]')},,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(2),o=a.n(i),r=(a(13),a(3)),s=a(4),d=a(7),l=a(6),m=(a(14),function(e){return n.a.createElement("div",{className:"card remove",onClick:function(){return e.clickedImage(e)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))}),h=(a(15),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),p=a(5),u=(a(16),function(e){return n.a.createElement("nav",{className:"navBar navbar-expand-lg"},n.a.createElement("div",{className:""}," Bugs Bunny Clicky Game"),n.a.createElement("div",null,e.scores.topMessage," "),n.a.createElement("div",null,"Score: ",e.scores.score," | Top Score: ",e.scores.topScore," "))}),g=(a(17),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("a",{href:"#top",className:"btn btn-outline-light"},n.a.createElement("span",{className:"fa fa-sort-asc"})))}),f=(a(18),function(){return n.a.createElement("div",{className:"header"},n.a.createElement("p",null," Clicky Game ",n.a.createElement("br",null),"Click on an image to earn points, but don't click on any more than once!"))}),b=(a(19),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={friends:p,score:0,topScore:0,clicked:[],topMessage:"Click an image to begin"},e.clickedImage=function(t){!1===e.state.clicked.includes(t.id)?(e.state.clicked.push(t.id),e.setState({score:e.state.score+1,topMessage:"You guessed correctly!"}),e.state.score>=e.state.topScore&&e.setState((function(e){return{topScore:e.score,topMessage:"You guessed correctly!"}}))):(e.setState({score:0,clicked:[],topMessage:"You guessed incorrectly!"}),e.state.score>=e.state.topScore&&e.setState({topScore:e.state.score}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(u,{scores:this.state}),n.a.createElement(f,null),n.a.createElement(h,null,this.state.friends.sort((function(e,t){return.5-Math.random()})).map((function(t){return n.a.createElement(m,{clickedImage:e.clickedImage,id:t.id,key:t.id,image:t.image})}))),n.a.createElement(g,null))}}]),a}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f8264306.chunk.js.map