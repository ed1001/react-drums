(this["webpackJsonpreact-drums"]=this["webpackJsonpreact-drums"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/RideBell_VintageIndie.09d28e60.wav"},function(t,e,n){t.exports=n.p+"static/media/Ride_VintageIndie.1b44ebe7.wav"},function(t,e,n){t.exports=n.p+"static/media/HiHatOpen_VintageIndie.71b2cf73.wav"},function(t,e,n){t.exports=n.p+"static/media/HiHatClosed_VintageIndie.ccba712c.wav"},function(t,e,n){t.exports=n.p+"static/media/Snare_VintageIndie.5bbd4d6f.wav"},function(t,e,n){t.exports=n.p+"static/media/XStick_VintageIndie.c09137cf.wav"},function(t,e,n){t.exports=n.p+"static/media/Tom_VintageIndie.46b4c8d7.wav"},function(t,e,n){t.exports=n.p+"static/media/Kick_VintageIndie.fcdae127.wav"},,function(t,e,n){t.exports=n(35)},,,,,function(t,e,n){},function(t,e,n){},,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(10),s=n.n(r),c=(n(28),n(22)),o=n(2),l=n(3),u=n(5),m=n(4),d=n(6),p=n(7),v=n.n(p),b=n(14),f=n.n(b),h=n(15),y=n.n(h),E=n(16),O=n.n(E),j=n(17),w=n.n(j),A=n(18),g=n.n(A),x=n(19),N=n.n(x),k=n(20),C=n.n(k),D=n(21),S=n.n(D),B=Object(a.createContext)(),G=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={drumKit:new v.a.Sampler({A1:f.a,A2:y.a,A3:O.a,A4:w.a,A5:g.a,A6:N.a,A7:C.a,A8:S.a},{}).toMaster(),sequence:{},instruments:{A1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A3:[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0],A4:[1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0],A5:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],A6:[0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0],A7:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],A8:[1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0]},instrumentLabels:{A1:"Ride bell",A2:"Ride",A3:"Hihat Open",A4:"Hihat Closed",A5:"Snare",A6:"Rim Click",A7:"Tom",A8:"Kick"},bpm:100,currentDivision:-1,mouseDown:!1,edit:0},n.componentDidMount=function(){window.addEventListener("mousedown",(function(){n.setState({mouseDown:!0})})),window.addEventListener("mouseup",(function(){n.setState({mouseDown:!1})})),n.sequence=new v.a.Sequence((function(t,e){for(var a=0,i=Object.keys(n.state.instrumentLabels);a<i.length;a++){var r=i[a];n.state.instruments[r][e]&&n.playNote(r)}n.setDivision()}),[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"16n").start(0)},n.playNote=function(t){n.state.drumKit.triggerAttack(t),"A4"===t&&n.state.drumKit.triggerRelease("A3")},n.setGrid=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n.state.instruments[e][t]||"0"===a||n.playNote(e);var i=n.state,r=a?+a:!n.state.instruments[e][t];i.instruments[e][t]=r,n.setState({newState:i})},n.editGrid=function(t,e,a){n.setGrid(e,a,t)},n.toggleEditMode=function(t){var e=t===n.state.edit?0:t;n.setState({edit:e})},n.setBpm=function(t){var e=n.state;e.bpm=t,n.setState({newState:e}),v.a.Transport.bpm.value=t},n.setDivision=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.currentDivision;n.setState({currentDivision:(t+1)%16})},n.clearAll=function(){for(var t in n.state.instruments)n.state.instruments.hasOwnProperty(t)&&n.state.instruments[t].fill(0,0);n.setState({edit:n.state.edit})},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(B.Provider,{value:Object(c.a)({},this.state,{setGrid:this.setGrid,setBpm:this.setBpm,setDivision:this.setDivision,playNote:this.playNote,editGrid:this.editGrid,toggleEditMode:this.toggleEditMode,clearAll:this.clearAll})},this.props.children)}}]),e}(a.Component),T=(n(29),function(t){var e=Object(a.useContext)(B),n=e.mouseDown,r=e.edit,s=e.editGrid;return i.a.createElement("div",{className:"".concat(t.class," ").concat(r?"mouse-"+r:""),onMouseDown:function(){t.setGrid(t.note,t.instrument,r)},onMouseEnter:function(){n&&r&&s(r,t.note,t.instrument)}})}),M=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).instrPlay=function(t){n.context.playNote(t);var e=n.refs.instrName;e.classList.remove("instr-name-active"),e.offsetWidth,e.classList.add("instr-name-active")},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"grid-line"},i.a.createElement("div",{className:"instr-name",id:this.props.instrument,ref:"instrName",onClick:function(){return t.instrPlay(t.props.instrument)}},this.context.instrumentLabels[this.props.instrument]),i.a.createElement("div",{className:"notes"},this.context.instruments[this.props.instrument].map((function(e,n){return i.a.createElement(T,{class:"note ".concat(e&&n===t.context.currentDivision?"note-playing":e?"note-active":""),note:n,instrument:t.props.instrument,setGrid:t.context.setGrid,key:n})}))))}}]),e}(a.Component);M.contextType=B;var I=M;var L=function(t){return i.a.createElement("div",{className:"beat"})};var V=function(t){return i.a.createElement("div",{className:"beat-container"},i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,null),i.a.createElement(L,null))};var _=function(t){return i.a.createElement("div",{className:t.class})};var H=function(){var t=Object(a.useContext)(B),e=t.instruments,n=t.currentDivision,r=t.edit;return i.a.createElement("div",{className:"beat-container ".concat(r?"mouse-"+r:"")},e.A1.map((function(t,e){return i.a.createElement(_,{element:e,class:"".concat(n===e?"subdivision subdiv-active":"subdivision"),key:e})})))};var R=function(){var t=Object(a.useContext)(B).instrumentLabels;return i.a.createElement("div",{className:"grid-container"},i.a.createElement(V,null),i.a.createElement(H,null),Object.keys(t).map((function(t,e){return i.a.createElement(I,{instrument:t,key:e})})))},K=n(11),P=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"transport symbol-container",onClick:function(){return t.props.action()}},i.a.createElement(K.a,{icon:this.props.symbol,className:"transport-symbol symbol"}))}}]),e}(i.a.Component),q=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).start=function(){v.a.Transport.start()},n.pause=function(){v.a.Transport.pause()},n.stop=function(){v.a.Transport.stop(),n.context.setDivision(-2)},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"transport-container"},i.a.createElement(P,{symbol:"play",action:this.start}),i.a.createElement(P,{symbol:"pause",action:this.pause}),i.a.createElement(P,{symbol:"stop",action:this.stop}))}}]),e}(i.a.Component);q.contextType=B;var W=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={interval:200,increment:1,stop:!1},n.increaseBpm=function(t,e){n.state.stop||n.context.setBpm(n.context.bpm+e),t>20&&(t-=10),window.addEventListener("mouseup",(function(){n.setState({stop:!0})})),n.state.stop||setTimeout((function(){n.increaseBpm(t,e)}),t)},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"bpm-container"},i.a.createElement("p",{id:"bpm-desc"},"BPM"),i.a.createElement("div",{id:"bpm-text"},i.a.createElement("p",null,this.context.bpm)),i.a.createElement("div",{id:"arrows"},i.a.createElement("p",{className:"arrow",onMouseDown:function(){t.setState({stop:!1},(function(){t.increaseBpm(200,1)}))}},"\u25b2"),i.a.createElement("p",{className:"arrow",onMouseDown:function(){t.setState({stop:!1},(function(){t.increaseBpm(200,-1)}))}},"\u25bc")))}}]),e}(i.a.Component);W.contextType=B;var J=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={active:!1},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"edit symbol-container",onClick:function(){"clear"!==t.props.edit?(t.context.toggleEditMode(t.props.edit),t.setState({active:!t.state.active})):t.context.clearAll()}},i.a.createElement(K.a,{icon:this.props.symbol,className:"edit-symbol symbol ".concat(this.context.edit===this.props.edit?"edit-active":"")}))}}]),e}(i.a.Component);J.contextType=B;var X=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"edit-container"},i.a.createElement(J,{symbol:"pencil-alt",edit:"1"}),i.a.createElement(J,{symbol:"eraser",edit:"0"}),i.a.createElement(J,{symbol:"trash-alt",edit:"clear"}))}}]),e}(i.a.Component),$=function(t){function e(){return Object(o.a)(this,e),Object(u.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"upper-container"},i.a.createElement(q,null),i.a.createElement(X,null),i.a.createElement(W,null)),i.a.createElement(R,{setGrid:this.setGrid}))}}]),e}(i.a.Component);$.contextType=B;var z=n(9),F=n(8);function Q(){return i.a.createElement(G,null,i.a.createElement($,null))}z.b.add(F.d,F.e,F.b,F.a,F.c,F.f),s.a.render(i.a.createElement(Q,null),document.getElementById("root"));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[23,1,2]]]);
//# sourceMappingURL=main.8992e0d8.chunk.js.map