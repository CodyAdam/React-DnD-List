(this["webpackJsonpreact-drag-and-drop"]=this["webpackJsonpreact-drag-and-drop"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),r=a.n(o),c=(a(13),a(4)),i=a(5),d=a(1),l=a(7),u=a(6),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onAdd=n.onAdd.bind(Object(d.a)(n)),n.onRemove=n.onRemove.bind(Object(d.a)(n)),n.cardMove=n.cardMove.bind(Object(d.a)(n)),n.onMouseDown=n.onMouseDown.bind(Object(d.a)(n)),n.onMouseMove=n.onMouseMove.bind(Object(d.a)(n)),n.onMouseUp=n.onMouseUp.bind(Object(d.a)(n)),n.state={cards:e.initialState,startPos:null,lastId:e.initialState.length},n}return Object(i.a)(a,[{key:"onAdd",value:function(){var e=this.state;e.cards.push({id:"card-".concat(this.state.lastId+1),content:"Name ".concat(this.state.cards.length+1),drag:!1}),e.lastId++,this.setState(e)}},{key:"onRemove",value:function(e){var t=this.state;t.cards.splice(e,1),this.setState(t)}},{key:"cardMove",value:function(e,t){for(var a=this.state.cards;e<0;)e+=a.length;for(;t<0;)t+=a.length;if(t>=a.length)for(var n=t-a.length+1;n--;)a.push(void 0);a.splice(t,0,a.splice(e,1)[0]),this.setState({cards:a})}},{key:"onMouseDown",value:function(e,t){var a=this.state;a.cards[t].drag=!0,a.startPos={x:e.clientX,y:e.clientY},this.setState(a)}},{key:"onMouseMove",value:function(e){for(var t=this.state,a=t.cards,n=t.startPos,s=0;s<a.length;s++)if(a[s].drag){var o=Math.min(Math.max(s+Math.floor((e.clientY-n.y+50)/100),0),a.length-1);this.cardMove(s,o),this.setState({startPos:{x:n.x,y:n.y+100*(o-s)}});break}}},{key:"onMouseUp",value:function(){for(var e=this.state,t=0;t<e.cards.length;t++)e.cards[t].drag=!1;this.setState(e)}},{key:"render",value:function(){var e=this,t=this.state.cards,a={transition:"all .1s"},n={transition:"all .1s",cursor:"grabbing",zIndex:"1",opacity:"0.5",scale:"0.9"};return s.a.createElement("div",{className:this.props.className,style:{overflowX:"hidden",overflowY:"scroll"},onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseUp},t.map((function(t,o){return s.a.createElement("div",{className:e.props.cardClassName,key:t.id,style:t.drag?n:a},s.a.createElement("span",null,s.a.createElement("span",{className:"name"},t.content),s.a.createElement("br",null),s.a.createElement("span",{className:"id"},"id : ",t.id)),s.a.createElement("div",{className:"drag",onMouseDown:function(t){e.onMouseDown(t,o)}},"Drag Here"),s.a.createElement("button",{className:"minus",onClick:function(){e.onRemove(o)}},"-"))})),s.a.createElement("button",{className:"plus",onClick:this.onAdd},"+"))}}]),a}(s.a.Component),m=[{id:"card-1",content:"Name 1",drag:!1},{id:"card-2",content:"Name 2",drag:!1},{id:"card-3",content:"Name 3",drag:!1},{id:"card-4",content:"Name 4",drag:!1},{id:"card-5",content:"Name 5",drag:!1}];function v(){return s.a.createElement("div",{id:"App"},s.a.createElement(h,{className:"container",cardClassName:"card",initialState:m}))}r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a5cc9665.chunk.js.map