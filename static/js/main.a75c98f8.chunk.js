(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1024px-Bitcoin.svg.png"},{id:2,image:"https://mybroadband.co.za/news/wp-content/uploads/2017/12/Ethereum-logo-plain.jpg"},{id:3,image:"https://cryptoslate.com/wp-content/uploads/2017/09/xrp-logo.jpg"},{id:4,image:"https://res.cloudinary.com/teepublic/image/private/s--2_9Hj3lv--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1521998441/production/designs/2528147_0.jpg"},{id:5,image:"https://dwglogo.com/wp-content/uploads/2017/08/1200px-Litecoin_logo.png"},{id:6,image:"https://btc-sites.com/____impro/1/onewebmedia/binancelogo.png?etag=W%2F%225b77-5af644c6%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=198%2B198"},{id:7,image:"https://www.ilbitcoin.news/wp/wp-content/uploads/2018/01/stellar.png"},{id:8,image:"https://logos-download.com/wp-content/uploads/2018/04/Tether_logo_coin-700x700.png"},{id:9,image:"https://fangalbert.com/wp-content/uploads/2018/03/tron-logo-crypto.png"},{id:10,image:"https://i.gadgets360cdn.com/large/monero_cryptocurrency_1518527179837.jpg?output-quality=80"},{id:11,image:"https://cryptomined.com/images/flags/dash_circle_Flag_1.png"},{id:12,image:"https://pbs.twimg.com/profile_images/877916411108237312/QLVWgJb6_400x400.jpg"}]},,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),r=n.n(i),o=n(4),l=n(5),s=n(7),m=n(6),u=n(8),p=(n(15),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.Click(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),d=(n(16),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",{className:"brand animated lightSpeedIn"},a.a.createElement("a",{href:"/clicky-game/"},e.title)),a.a.createElement("li",{id:"rw"},e.rightWrong),a.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),a.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))});n(17);var g=function(e){return a.a.createElement("div",{className:"wrapper"},e.children)};n(18);var f=function(e){return a.a.createElement("h1",{className:"title"},e.children)},h=(n(19),function(e){return a.a.createElement("div",{className:"Container".concat(e.fluid?"-fluid":"")},e.children)}),w=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},v=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return a.a.createElement("div",{className:t},e.children)},S=n(1);var E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={CryptoPics:S,currentScore:0,TopScore:0,RorW:"",clicked:[]},n.Click=function(e){-1===n.state.clicked.indexOf(e)?(n.Increment(),n.setState({clicked:n.state.clicked.concat(e)})):n.Reset()},n.Increment=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,RorW:""}),e>=n.state.TopScore?n.setState({TopScore:e}):12===e&&n.setState({RorW:"You win!"}),n.Shuffle()},n.Reset=function(){n.setState({currentScore:0,TopScore:n.state.TopScore,RorW:"Hello",clicked:[]}),n.Shuffle()},n.Shuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}(S);n.setState({CryptoPics:e})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g,null,a.a.createElement(d,{title:"Crypto Clicky Game",score:this.state.currentScore,TopScore:this.state.TopScore,RorW:this.state.RorW}),a.a.createElement(f,null,"Click on a Crpyo but Remember that if you click one twice.... no Dice!"),a.a.createElement(h,null,a.a.createElement(w,null,this.state.CryptoPics.map(function(t){return a.a.createElement(v,{size:"md-3 sm-6"},a.a.createElement(p,{key:t.id,Click:e.Click,Increment:e.Increment,Reset:e.Reset,Shuffle:e.Shuffle,id:t.id,image:t.image}))}))))}}]),t}(c.Component);n(20);r.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a75c98f8.chunk.js.map