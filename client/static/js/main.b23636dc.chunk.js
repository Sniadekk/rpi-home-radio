(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{133:function(e,t,n){e.exports=n(245)},138:function(e,t,n){},141:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(6),s=n.n(o),c=(n(138),n(12)),i=n.n(c),u=n(28),l=n(19),p=n(20),h=n(24),f=n(21),d=n(23),O=(n(141),n(254)),E=n(253),b=n(249),v=n(8),g=Object(v.a)({height:"87vh",background:"#282828",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}),S=Object(v.a)({fontSize:"2rem"}),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).clientId="d09edd82dac149a5b6f076515368e06d",n.responseType="token",n.redirectURL=window.location.origin,n.linkToSpotifyAuth="https://accounts.spotify.com/authorize?client_id=".concat(n.clientId,"&redirect_uri=").concat(n.redirectURL,"&response_type=").concat(n.responseType,"&scope=user-library-read"),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(window.location),Object(v.b)("div",{css:g},Object(v.b)("a",{css:S,href:this.linkToSpotifyAuth,className:"App-link"},"Login to spotify"))}}]),t}(r.Component),m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).getToken=function(e){var t=((void 0===e.location.hash?"":e.location.hash).split("=")[1]||"").split("&")[0]||"";n.props.saveToken(t)},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getToken(this.props)}},{key:"render",value:function(){return Object(v.b)("div",null,"Authenticated")}}]),t}(r.Component),j=n(39),y=n(53),A=n(93),N=n(35),w=n.n(N);function T(e){return{value:e.value,status:e.status,createdAt:w()(e.createdAt),expiresAt:w()(e.expiresAt)}}var C=n(94),k=n.n(C);k.a.defaults.baseURL="https://api.spotify.com/v1";var L=k.a;function I(e){return{value:e,type:Y.SAVE_ALBUMS}}function U(){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=ie.getState().token.value,e.next=3,L.get("/me/playlists",{headers:{Authorization:"Bearer  ".concat(t)}}).then(function(e){return{value:e.data.items,error:!1}}).catch(function(e){return{error:!0}});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:if(!(t=e.sent).error){e.next=7;break}return e.abrupt("return",{value:[],type:Y.ALBUMS_FETCH_FAILED});case 7:return e.abrupt("return",I(t.value));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){return{value:e,type:Y.SAVE_SONGS}}function G(e){return V.apply(this,arguments)}function V(){return(V=Object(u.a)(i.a.mark(function e(t){var n,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=ie.getState().token.value,r=0,e.next=4,L.get("/me/tracks?limit=50&offset=".concat(t.offset),{headers:{Authorization:"Bearer  ".concat(n)}}).then(function(e){var t=e.data;return r=t.total,{value:t.items.map(function(e){var t,n,r=e.track;return{id:r.id,name:r.name,thumbnail_url:r.album.images[0].url,duration:r.duration/1e3,formatted_name:(t=r.name,n=r.artists,"".concat(t," - ").concat(n.map(function(e){return e.name}).join(", "))),isReady:B.NOT_READY,artists:r.artists.map(function(e){return e.name}).join(", ")}}),error:!1}}).catch(function(e){return{error:!0}});case 4:return a=e.sent,e.abrupt("return",{songs:a,total:r,offset:t.offset+a.value.length});case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Q(e){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(i.a.mark(function e(t){var n,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={total:0,offset:0,firstFetch:!0},r=[];case 2:if(!(n.offset<n.total||n.firstFetch)){e.next=9;break}return e.next=5,G(n);case 5:(a=e.sent).songs.error?t({value:[],type:Y.SONGS_FETCH_FAILED}):(n={offset:a.offset,total:a.total,firstFetch:!1},r=r.concat(a.songs.value),t(x(r))),e.next=2;break;case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function H(e,t){return{type:Y.TOGGLE_SONG_IN_QUEUE,isReady:t,songName:e}}var P=n(252),M=new WebSocket("ws://127.0.0.1:8080/ws/");function K(){return{type:Y.WS_CONNECTION_FAILED,value:!1}}var Y,z,B;function q(e){return{value:e,type:Y.SET_ACTIVE_SONG}}function X(e){!function(e,t,n){var r={action:"request_song",payload:{artists:t,name:e,thumbnail_url:n}};M.send(JSON.stringify(r))}(e.name,e.artists,e.thumbnail_url)}function J(e){return null===e||0===Object.entries(e).length&&e.constructor===Object}function $(e){return{value:e,type:Y.SAVE_USER_PROFILE}}function Z(){return ee.apply(this,arguments)}function ee(){return(ee=Object(u.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:if(!(t=e.sent).error){e.next=7;break}return e.abrupt("return",{value:{display_name:""},type:Y.USER_FETCH_FAILED});case 7:return e.abrupt("return",$(t.value));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function te(){return ne.apply(this,arguments)}function ne(){return(ne=Object(u.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=ie.getState().token.value,e.next=3,L.get("/me",{headers:{Authorization:"Bearer  ".concat(t)}}).then(function(e){return{value:e.data,error:!1}}).catch(function(e){return{error:!0}});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}M.onopen=function(e){!0,P.a.success({message:"Connection",description:"Successfully connected to the home-fm-server."}),ie.dispatch({type:Y.WS_CONNECTION_SUCCESSFULL,value:!0})},M.onclose=function(e){!1,P.a.error({message:"Connection",description:"Diconnected from home-fm-server"}),ie.dispatch(K())},M.onerror=function(e){P.a.error({message:"Connection",duration:10,description:"home-fm-server isn't turned on"}),ie.dispatch(K())},M.onmessage=function(e){var t,n,r=JSON.parse(e.data);switch(r.action){case"next_song":var a=r.value.next_song;P.a.open({message:"Now playing",description:"".concat(a.name," - ").concat(a.artists)}),n=a,ie.dispatch(q(n)),ie.dispatch({type:Y.DELETE_RECENT_ACTIVE_SONG_FROM_QUEUE});break;case"queue_state":var o=r.value,s=o.songs_queue;ie.dispatch((t=s,{type:Y.SAVE_SONGS_IN_QUEUE,songs:t}));var c=o.active_song;return void ie.dispatch(q(c));case"song_download_finished":var i=r.value;return void ie.dispatch(H(i.name,B.READY));case"song_download_failed":var u=r.value;return void ie.dispatch(H(u.name,B.CANT_DOWNLOAD))}},function(e){e[e.SAVE_TOKEN=0]="SAVE_TOKEN",e[e.DELETE_TOKEN=1]="DELETE_TOKEN",e[e.REFRESH_TOKEN=2]="REFRESH_TOKEN",e[e.SAVE_USER_PROFILE=3]="SAVE_USER_PROFILE",e[e.USER_FETCH_FAILED=4]="USER_FETCH_FAILED",e[e.SAVE_ALBUMS=5]="SAVE_ALBUMS",e[e.ALBUMS_FETCH_FAILED=6]="ALBUMS_FETCH_FAILED",e[e.SAVE_SONGS=7]="SAVE_SONGS",e[e.SONGS_FETCH_FAILED=8]="SONGS_FETCH_FAILED",e[e.SET_ACTIVE_SONG=9]="SET_ACTIVE_SONG",e[e.PUSH_SONG=10]="PUSH_SONG",e[e.POP_SONG=11]="POP_SONG",e[e.WS_CONNECTION_FAILED=12]="WS_CONNECTION_FAILED",e[e.WS_CONNECTION_SUCCESSFULL=13]="WS_CONNECTION_SUCCESSFULL",e[e.SAVE_SONGS_IN_QUEUE=14]="SAVE_SONGS_IN_QUEUE",e[e.ADD_SONGS_TO_QUEUE=15]="ADD_SONGS_TO_QUEUE",e[e.TOGGLE_SONG_IN_QUEUE=16]="TOGGLE_SONG_IN_QUEUE",e[e.DELETE_RECENT_ACTIVE_SONG_FROM_QUEUE=17]="DELETE_RECENT_ACTIVE_SONG_FROM_QUEUE"}(Y||(Y={})),function(e){e[e.OK=0]="OK",e[e.INVALID=1]="INVALID",e[e.EXPIRED=2]="EXPIRED"}(z||(z={})),function(e){e[e.READY=0]="READY",e[e.NOT_READY=1]="NOT_READY",e[e.CANT_DOWNLOAD=2]="CANT_DOWNLOAD"}(B||(B={}));var re=n(123);var ae=n(124),oe=n(125),se=Object(oe.createLogger)(),ce=Object(y.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SAVE_TOKEN:case Y.DELETE_TOKEN:return t.value;case Y.REFRESH_TOKEN:default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SAVE_USER_PROFILE:return t.value;case Y.USER_FETCH_FAILED:default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SAVE_ALBUMS:return t.value;case Y.ALBUMS_FETCH_FAILED:return[];default:return e}},songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SAVE_SONGS:return t.value;case Y.SONGS_FETCH_FAILED:return[];default:return e}},activeSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.SET_ACTIVE_SONG:return t.value;default:return e}},websocketConnected:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case Y.WS_CONNECTION_FAILED:return!1;case Y.WS_CONNECTION_SUCCESSFULL:return!0;default:return e}},songsQueue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y.ADD_SONGS_TO_QUEUE:return e.concat(t.songs);case Y.TOGGLE_SONG_IN_QUEUE:return e.map(function(e){return e.name==t.songName?Object(re.a)({},e,{isReady:t.isReady}):e});case Y.SAVE_SONGS_IN_QUEUE:return t.songs;case Y.DELETE_RECENT_ACTIVE_SONG_FROM_QUEUE:return e.length>0?e.slice(1,e.length):e;default:return e}}}),ie=Object(y.d)(ce,{token:{},songs:[],user:{},albums:[],previousSongs:[],activeSong:{},websocketConnected:!1,songsQueue:[]},Object(y.a)(se,ae.a)),ue=n(248),le=n(247),pe=n(10);function he(e){var t=window.innerWidth/10;return e.length>t?"".concat(e.slice(0,t),"..."):e}var fe=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.song.artists;return Object(v.b)(ue.a.Item,{className:"list-item-song",onClick:function(){e.props.setActiveSong(e.props.song)}},Object(v.b)(ue.a.Item.Meta,{avatar:Object(v.b)(le.a,{src:this.props.song.thumbnail_url}),title:Object(v.b)("span",{className:"song-name"},he(this.props.song.name)),description:he(t)}))}}]),t}(r.Component),de=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.song.artists;return Object(v.b)(ue.a.Item,{className:"list-item-song",onClick:function(){e.props.setActiveSong(e.props.song)}},function(e){switch(e){case B.CANT_DOWNLOAD:return Object(v.b)(pe.a,{title:"Song can't be downloaded",type:"close-circle",css:[Oe,Ee]});case B.NOT_READY:return Object(v.b)(pe.a,{title:"Downloading song",type:"loading",css:Oe,spin:!0});case B.READY:return Object(v.b)(pe.a,{type:"check-circle",title:"Song successfully downloaded",css:[Oe,be]})}}(this.props.song.isReady),Object(v.b)(ue.a.Item.Meta,{avatar:Object(v.b)(le.a,{src:this.props.song.thumbnail_url}),title:Object(v.b)("span",{className:"song-name"},he(this.props.song.name)),description:he(t)}))}}]),t}(r.Component),Oe=Object(v.a)({fontSize:24}),Ee=Object(v.a)({color:"#ba252f"}),be=Object(v.a)({color:"#15c455"});var ve,ge=n(250),Se=n(251),_e=ge.a.Search;!function(e){e.YourSongs="YourSongs",e.SongsQueue="SongsQueue"}(ve||(ve={}));var me=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={offset:0,currentPage:1,window_height:window.innerHeight,window_width:window.innerWidth,selectedList:ve.YourSongs,searchbarValue:"",indexesToFade:[]},n.getData=function(e){return 0===n.state.searchbarValue.length?e:e.filter(function(e){var t=e.name.toLowerCase(),r=e.artists.toLowerCase();return t.includes(n.state.searchbarValue)||r.includes(n.state.searchbarValue)})},n.handleTransition=function(e){return e},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectedList===ve.SongsQueue?this.getData(this.props.songsQueue):this.getData(this.props.songs);return Object(v.b)("div",{className:"list-container"},Object(v.b)(Se.a,{onClick:function(t){var n="YourSongs"===t.key?ve.YourSongs:ve.SongsQueue;e.setState({selectedList:n})},selectedKeys:[this.state.selectedList],mode:"horizontal"},Object(v.b)(Se.a.Item,{key:ve.YourSongs},"Your songs"),Object(v.b)(Se.a.Item,{key:ve.SongsQueue},"Songs queue")),Object(v.b)(_e,{placeholder:"filter songs...",size:"default",name:"domains",value:this.state.searchbarValue,onChange:function(t){var n=t.target.value;e.setState({searchbarValue:n})},onSearch:function(e){e.length}}),Object(v.b)("span",null,Object(v.b)(ue.a,{locale:{emptyText:this.state.selectedList===ve.SongsQueue?"There are no songs scheduled in the queue":"There are no favourite songs in your spotify account."},bordered:!1,size:"large",itemLayout:"horizontal",dataSource:t,renderItem:function(t){return e.state.selectedList===ve.SongsQueue?Object(v.b)(de,{setActiveSong:e.props.setActiveSong,song:t}):Object(v.b)(fe,{setActiveSong:e.props.setActiveSong,song:t})},pagination:{total:t.length,pageSize:window.innerHeight/110,simple:!0,showQuickJumper:!0}})))}}]),t}(r.Component),je=Object(j.b)(function(e){return{songs:e.songs,songsQueue:e.songsQueue}},function(e){return{setActiveSong:function(t){var n;P.a.success({description:t.formatted_name,message:"Successfully scheduled",duration:window.innerWidth>=576?2:1}),X(t),e((n=[t],{type:Y.ADD_SONGS_TO_QUEUE,songs:n}))}}})(me),ye=n(70);function Ae(e){var t=Math.floor(e),n=Math.floor(t/60),r=t-60*n;return"".concat(n,":").concat(r<10?"0".concat(r):r)}var Ne=Object(v.a)({background:"#282828",display:"flex",justifyContent:"center",alignItems:"flex-end",width:"100%",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",padding:"1rem 5% 1rem 5%",height:"8rem"}),we=(Object(v.a)({width:"100%",display:"flex",justifyContent:"center",alignItems:"flex-end"}),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={progress:0,clicked:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=!J(this.props.activeSong);return Object(v.b)("div",{css:Ne},e&&Object(v.b)(Le,{activeSong:this.props.activeSong}),e&&Object(v.b)(Ce,{duration:this.props.activeSong.duration}))}}]),t}(r.Component)),Te=Object(v.a)({width:"30%",height:"80%"}),Ce=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={progress:0},setInterval(function(){return n.setState({progress:n.state.progress+1})},1e3),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.duration!==this.props.duration&&this.setState({progress:0})}},{key:"render",value:function(){var e=this.props.duration;return Object(v.b)("div",{css:Te},Object(v.b)("div",null,Ae(this.state.progress)," / ",Ae(e)))}}]),t}(r.Component),ke=Object(v.a)(Object(ye.a)({width:"70%",height:"80%"},"@media (max-width: 576px)",{width:"70%"})),Le=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return Object(v.b)("div",{css:ke},Object(v.b)(le.a,{size:50,shape:"square",src:this.props.activeSong.thumbnail_url}),Object(v.b)("div",{style:{display:"inline-block",paddingLeft:"0.5rem"}},Object(v.b)("div",{style:{fontSize:"0.9rem",width:"100%"}},this.props.activeSong.name),Object(v.b)("div",{style:{fontSize:"0.7rem",width:"100%",color:"#b3b3b3"}},this.props.activeSong.artists)))}}]),t}(r.Component),Ie=Object(j.b)(function(e){return{songs:e.songs,previousSongs:e.previousSongs,activeSong:e.activeSong}},function(e){return{nextSong:function(){},previousSong:function(){}}})(we),Ue=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={didRouteChange:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getTokenFromLocalStorage()}},{key:"componentWillReceiveProps",value:function(e){e.token.status!==z.EXPIRED||this.state.didRouteChange?e.token.value.length>0&&!this.state.didRouteChange&&e.token.status!==z.EXPIRED&&(this.props.fetchUserInformations(),this.props.fetchUserAlbums(),this.props.fetchFavouriteSongs(),this.props.history.push("/songs"),this.setState({didRouteChange:!0})):(this.props.history.push("/login"),this.setState({didRouteChange:!0}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App-header"},a.a.createElement(O.a,null,a.a.createElement(E.a,{path:"/auth",component:xe}),a.a.createElement(E.a,{path:"/songs",component:je}),a.a.createElement(E.a,{path:"/",component:_})),this.props.socketConnected&&a.a.createElement(Ie,null))}}]),t}(r.Component),De=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(j.a,{store:ie},a.a.createElement(b.a,null,a.a.createElement(E.a,{path:"/",component:Fe})))}}]),t}(r.Component),Re=function(e){return{token:e.token,socketConnected:e.websocketConnected}},Fe=Object(j.b)(Re,function(e){return{fetchUserInformations:function(){var t=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,Z();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),fetchUserAlbums:function(){var t=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,R();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),fetchFavouriteSongs:function(){var t=Object(u.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(e);case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),getTokenFromLocalStorage:function(){e(function(){var e=A.get("token",{});return w()(e.expiresAt).isBefore(w()())||J(e)?{value:{value:"EXPIRED_TOKEN",status:z.EXPIRED,createdAt:w()(),expiresAt:w()()},type:Y.SAVE_TOKEN}:{value:T(e),type:Y.SAVE_TOKEN}}())}}})(Ue),xe=Object(j.b)(Re,function(e){return{saveToken:function(t){e(function(e){var t={value:e,status:z.OK,createdAt:w()(),expiresAt:w()().add(3600,"seconds")};return A.set("token",t),{value:t,type:Y.SAVE_TOKEN}}(t))}}})(m),Ge=De;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));P.a.config({placement:"bottomRight",bottom:-5}),s.a.render(a.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[133,1,2]]]);
//# sourceMappingURL=main.b23636dc.chunk.js.map