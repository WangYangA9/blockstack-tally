(this["webpackJsonpblockstack-Tally"]=this["webpackJsonpblockstack-Tally"]||[]).push([[0],{190:function(e,t){},216:function(e,t,a){e.exports=a.p+"static/media/index.13712712.less"},299:function(e,t,a){e.exports=a.p+"static/media/index.13712712.less"},300:function(e,t,a){e.exports=a.p+"static/media/index.13712712.less"},303:function(e,t,a){e.exports=a.p+"static/media/index.13712712.less"},323:function(e,t,a){},327:function(e,t,a){e.exports=a(658)},332:function(e,t,a){},333:function(e,t,a){},346:function(e,t){},348:function(e,t){},365:function(e,t){},367:function(e,t){},444:function(e,t){},451:function(e,t){},543:function(e,t,a){},651:function(e,t,a){},658:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),i=(a(332),a(20)),o=a(21),m=a(27),s=a(26),u=(a(333),a(123)),d=a(35),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.handleSignIn;return(l.a.createElement("div",null,l.a.createElement(d.a,{onClick:e.bind(this)},"Sign In with Blockstack")))}}]),a}(n.Component),E=a(23),h=a(660),f=a(87),b=a(661),g=(a(289),a(543),a(299)),v=a.n(g),y=a(111),w=a(46),S=a(300),O=a.n(S),k=a(665),j=k.a.TextArea,C=function(){return l.a.createElement("div",{className:O.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{span:12},l.a.createElement("div",{id:"components-input-demo-basic"},l.a.createElement("label",null,"\u8d26\u6237:"),l.a.createElement(k.a,{placeholder:"card"}),l.a.createElement("label",null,"\u8d26\u5355\u65e5\u671f:"),l.a.createElement(k.a,{placeholder:"update"}),l.a.createElement("label",null,"\u4f59\u989d:"),l.a.createElement(k.a,{placeholder:"balance"}),l.a.createElement(d.a,{type:"primary"},"\u63d0\u4ea4"))),l.a.createElement(w.a,{span:12},l.a.createElement("div",null,l.a.createElement("label",null,"\u5c55\u793a:"),l.a.createElement(j,{rows:18})))))))},x=a(303),I=a.n(x),M=k.a.TextArea,A=function(){return l.a.createElement("div",{className:I.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(y.a,null,l.a.createElement(w.a,{span:12},l.a.createElement("div",{id:"components-input-demo-basic"},l.a.createElement("label",null,"\u6536\u652f\u652f\u51fa\u8bbe\u7f6e:"),l.a.createElement(k.a,{placeholder:"payment"}),l.a.createElement("label",null,"\u7c7b\u522b\u540d\u79f0:"),l.a.createElement(k.a,{placeholder:"update"}),l.a.createElement(d.a,{type:"primary"},"\u63d0\u4ea4"))),l.a.createElement(w.a,{span:12},l.a.createElement("div",null,l.a.createElement("label",null,"\u7c7b\u522b\u5c55\u793a\u5c55\u793a:"),l.a.createElement(M,{rows:18}))))))},N=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:v.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{span:12},"  ",l.a.createElement(C,null)),l.a.createElement(w.a,{span:12},"  ",l.a.createElement(A,null))))))}}]),a}(n.Component),F=a(216),D=a.n(F),T=a(664),U=a(666),q=a(662),z=function(e){var t=[{title:"\u65e5\u671f",dataIndex:"date"},{title:"\u9879\u76ee",width:"30%",dataIndex:"item"},{title:"\u7c7b\u578b",dataIndex:"type"},{title:"\u91d1\u989d",dataIndex:"amount"},{title:"\u8d26\u6237",dataIndex:"card"},{title:"operation",dataIndex:"operation",render:function(t,a){return n.length>=1?l.a.createElement(U.a,{title:"Sure to delete?",onConfirm:function(){e.removeCharacter(a.key)}},l.a.createElement("a",null,"Delete")):null}}];console.log(e.waterbill);for(var a=e.waterbill,n=[],r=0,c=a.length-1;c>-1;c--)n[r]=a[c],n[r].key=r,r++;return console.log(n),l.a.createElement("div",null,l.a.createElement(q.a,{columns:t,dataSource:n,count:n.length}))},J=a(318),R=(a(651),a(663)),B={labelCol:{span:8},wrapperCol:{span:16}},H=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).formRef=l.a.createRef(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(R.a,Object.assign({},B,{ref:this.formRef,name:"nest-messages",onFinish:function(t){e.props.handleSubmit(t),console.log(t),e.formRef.current.resetFields()}}),l.a.createElement(R.a.Item,{name:["bill","date"],label:"\u65e5\u671f",rules:[{required:!0}]},l.a.createElement(k.a,null)),l.a.createElement(R.a.Item,{name:["bill","item"],label:"\u9879\u76ee",rules:[{required:!0}]},l.a.createElement(k.a,null)),l.a.createElement(R.a.Item,{name:["bill","type"],label:"\u7c7b\u522b",rules:[{required:!0}]},l.a.createElement(k.a,null)),l.a.createElement(R.a.Item,{name:["bill","amount"],label:"\u91d1\u989d",rules:[{required:!0}]},l.a.createElement(k.a,null)),l.a.createElement(R.a.Item,{name:["bill","card"],label:"\u8d26\u6237",rules:[{required:!0}]},l.a.createElement(k.a,null)),l.a.createElement(R.a.Item,{wrapperCol:Object(J.a)({},B.wrapperCol,{offset:8})},l.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Submit")))}}]),a}(n.Component),P=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:D.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{span:6},l.a.createElement(T.a,{title:"\u672c\u6708\u4f59\u989d",extra:l.a.createElement("a",{href:"#"},"More"),style:{width:260}},l.a.createElement("p",null,"Card content"),l.a.createElement("p",null,"Card content"),l.a.createElement("p",null,"Card content"))),l.a.createElement(w.a,{span:6},l.a.createElement(T.a,{title:"\u8d26\u6237\u6b20\u6b3e",extra:l.a.createElement("a",{href:"#"},"More"),style:{width:260}},l.a.createElement("p",null,"\u4e0a\u6708\u6b20\u6b3e\uff1a"),l.a.createElement("p",null,"\u672c\u6708\u6b20\u6b3e\uff1a"),l.a.createElement("p",null,"\u4e0b\u6708\u6b20\u6b3e\uff1a"))),l.a.createElement(w.a,{span:6},l.a.createElement(T.a,{title:"\u6536\u5165\u60c5\u51b5",extra:l.a.createElement("a",{href:"#"},"More"),style:{width:260}},l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"),l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"),l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"))),l.a.createElement(w.a,{span:6},l.a.createElement(T.a,{title:"\u652f\u51fa\u60c5\u51b5",extra:l.a.createElement("a",{href:"#"},"More"),style:{width:260}},l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"),l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"),l.a.createElement("p",null,"\u6536\u5165\u60c5\u51b5"))))))),l.a.createElement("div",{className:D.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,l.a.createElement(w.a,{span:16},l.a.createElement(z,{waterbill:this.props.waterbill,removeCharacter:this.props.removeCharacter})," "),l.a.createElement(w.a,{span:8}," ",l.a.createElement(H,{handleSubmit:this.props.handleSubmit})," "))))))}}]),a}(n.Component),W=a(323),Q=a.n(W),L=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:Q.a.container},l.a.createElement("div",{id:"components-grid-demo-basic"},l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null))))}}]),a}(n.Component),$=h.a.Header,G=h.a.Footer,K=h.a.Sider,V=h.a.Content,X=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({waterbill:[].concat(Object(E.a)(n.state.waterbill),[e.bill])}),console.log(n.state)},n.removeCharacter=function(e){var t=n.state.waterbill;e=t.length-e-1,console.log(e),n.setState({waterbill:t.filter((function(t,a){return a!==e}))})},n.state={person:{name:function(){return"Anonymous"},avatarUrl:function(){return"https://s3.amazonaws.com/onename/avatar-placeholder.png"}},page:"welcome",waterbill:[{date:"20200420",item:"\u52a0\u6cb9",type:"\u4ea4\u901a",amount:"-200",card:"\u519c\u884c"},{date:"20200421",item:"\u52a0\u6cb9",type:"\u4ea4\u901a",amount:"-200",card:"\u519c\u884c"},{date:"20200422",item:"\u52a0\u6cb9",type:"\u4ea4\u901a",amount:"-200",card:"\u519c\u884c"},{date:"20200423",item:"\u52a0\u6cb9",type:"\u4ea4\u901a",amount:"-200",card:"\u519c\u884c"}]},n}return Object(o.a)(a,[{key:"saveMe",value:function(e,t){var a=this,n=this.props.userSession;this.setState({savingMe:!0});var l=JSON.stringify(e);console.log(l);n.putFile(t,JSON.stringify(e),{encrypt:!0}).finally((function(){a.setState({savingMe:!1,redirectToMe:!1})}))}},{key:"componentWillMount",value:function(){var e=this.props.userSession;this.setState({person:new u.Person(e.loadUserData().profile)})}},{key:"pagezhuan",value:function(){return"welcome"===this.state.page?l.a.createElement(P,{waterbill:this.state.waterbill,handleSubmit:this.handleSubmit,removeCharacter:this.removeCharacter}):"Setcategory"===this.state.page?l.a.createElement(N,null):"SearchQuery"===this.state.page?l.a.createElement(L,null):void 0}},{key:"render",value:function(){var e=this,t=this.props,a=t.handleSignOut,n=(t.userSession,this.state.person);return l.a.createElement(h.a,null,l.a.createElement(K,{width:256,style:{minHeight:"100vh"}},l.a.createElement("div",{style:{height:"58px",background:"rgba(255,255,255,.2)",margin:"16px"}},l.a.createElement("div",{style:{textAlign:"center",size:64}},"Tally")),l.a.createElement(f.a,{theme:"dark",mode:"inline"},l.a.createElement(f.a.Item,{onClick:function(){return e.setState({page:"welcome"})}}," ",l.a.createElement("span",null,"\u6b22\u8fce")),l.a.createElement(f.a.Item,{onClick:function(){return e.setState({page:"SearchQuery"})}},"\u67e5\u8be2\u641c\u7d22"),l.a.createElement(f.a.Item,{onClick:function(){return e.setState({page:"Setcategory"})}},"\u8bbe\u7f6e"))),l.a.createElement(h.a,null,l.a.createElement($,{style:{background:"#fff",textAlign:"center",padding:0}},l.a.createElement("div",null,l.a.createElement("div",{style:{background:"#fff",textAlign:"right",padding:0}},l.a.createElement(b.a,{size:"large",icon:l.a.createElement("img",{src:n.avatarUrl()})}),l.a.createElement(d.a,{type:"primary",onClick:a.bind(this)},"Logout")))),l.a.createElement(V,{style:{margin:"24px 16px 0"}},l.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},this.pagezhuan(),l.a.createElement(d.a,{type:"primary",onClick:this.saveMe(this.state.waterbill,"waterbill.json")},"\u4fdd\u5b58"))),l.a.createElement(G,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED")))}}]),a}(n.Component),Y=new u.AppConfig,Z=new u.UserSession({appConfig:Y}),_=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleSignIn",value:function(e){e.preventDefault(),Z.redirectToSignIn()}},{key:"handleSignOut",value:function(e){e.preventDefault(),Z.signUserOut(window.location.origin)}},{key:"render",value:function(){return l.a.createElement("div",{className:"site-wrapper"},Z.isUserSignedIn()?l.a.createElement(X,{userSession:Z,handleSignOut:this.handleSignOut}):l.a.createElement(p,{userSession:Z,handleSignIn:this.handleSignIn}))}},{key:"componentDidMount",value:function(){var e=this;Z.isSignInPending()&&Z.handlePendingSignIn().then((function(t){window.history.replaceState({},document.title,"/"),e.setState({userData:t})}))}}]),a}(n.Component),ee=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"site-wrapper"},l.a.createElement("div",{className:"site-wrapper-inner"},l.a.createElement(_,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[327,1,2]]]);
//# sourceMappingURL=main.6917d97d.chunk.js.map