(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,n){},142:function(e,n,r){},145:function(e,n,r){"use strict";r.r(n);var t={};r.r(t),r.d(t,"getModel",function(){return Pe}),r.d(t,"getFormValues",function(){return Re}),r.d(t,"getErrors",function(){return Se}),r.d(t,"getIsLogged",function(){return Te});var a={};r.r(a),r.d(a,"getModel",function(){return Ue}),r.d(a,"getFormValues",function(){return De}),r.d(a,"getUsers",function(){return Ye}),r.d(a,"getErrors",function(){return Ge});var c=r(0),o=r.n(c),l=r(59),s=r.n(l),i=r(7),u=r(15),d=r(67),m=r(11),p=r(58),f=r(12),E="game",b=r(8),g=r(9),y=r(17),O=r(10),w=r(18),v=r(3),h=r(1),j={container:Object(h.css)({backgroundColor:"#112b46",padding:15,fontSize:22,color:"#fff"}),logout:Object(h.css)({fontSize:10,cursor:"pointer",marginRight:"15px"})},N=function(e){var n=e.onLogout;return o.a.createElement("div",{className:"row ".concat(j.container)},o.a.createElement("div",{className:"col-12 text-center"},"ROCK, PAPER, SCISSORS",o.a.createElement("div",{onClick:n,className:j.logout},"Cerrar Sesion")))},C={weapon:Object(h.css)({margin:"0 auto",backgroundColor:"#fff",width:100,height:100,borderRadius:"100%",cursor:"pointer"}),icon:Object(h.css)({color:"#476b96",fontSize:50}),iconQuestion:Object(h.css)({color:"#fff",fontSize:35}),result:Object(h.css)({margin:"0 auto",width:100,height:100,borderRadius:100,textAlign:"center",border:"2px dashed #fff",padding:20,fontWeight:300}),hide:Object(h.css)({backgroundColor:"#fff",border:"4px solid #476b96","&>span":{color:"#476b96 !important"}}),isWinner:Object(h.css)({border:"4px solid green","&>span":{color:"green !important"}}),disabled:Object(h.css)({opacity:.6})},k=function(e){var n=e.type,r=e.onClick,t=e.hide,a=e.isWinner,c=e.disabled;return o.a.createElement("div",null,n?o.a.createElement("button",{disabled:c,className:"text-center ".concat(Object(h.css)(C.weapon,a?C.isWinner:{},c?C.disabled:{})),onClick:r},o.a.createElement("span",{className:"far fa-hand-".concat(n," ").concat(C.icon)})):o.a.createElement("div",{className:Object(h.css)(C.result,t?C.hide:{})},o.a.createElement("span",{className:Object(h.css)(C.icon,C.iconQuestion)},"?")))},P={container:Object(h.css)({marginTop:50,backgroundColor:"#476b96",padding:"20px 10px 20px 10px",bottom:"0"}),text:Object(h.css)({color:"#fff",marginTop:20})},R=function(e){var n=e.fireWeapon,r=e.disabled,t=e.textInfo;return o.a.createElement("div",{className:"row align-items-center justify-content-center text-center ".concat(P.container)},o.a.createElement("div",{className:"col"},o.a.createElement(k,{type:"rock",onClick:function(){return n("rock")},disabled:r})),o.a.createElement("div",{className:"col"},o.a.createElement(k,{type:"paper",onClick:function(){return n("paper")},disabled:r})),o.a.createElement("div",{className:"col"},o.a.createElement(k,{type:"scissors",onClick:function(){return n("scissors")},disabled:r})),o.a.createElement("div",{className:"col-12 ".concat(P.text)},"CHOOSE A WEAPON"),t)},S={container:Object(h.css)({margin:30}),title:Object(h.css)({fontSize:15,color:"#fff"}),button:Object(h.css)({borderRadius:5,marginTop:10})},T=function(e){var n=e.changeMode,r=e.mode,t=e.hideButton,a=e.infoText;return o.a.createElement("div",{className:"row ".concat(S.container)},o.a.createElement("div",{className:"col text-center"},o.a.createElement("div",{className:S.title},1===r?"PLAYER VS COMPUTER":"PLAYER VS PLAYER"),t?"":o.a.createElement("button",{className:S.button,onClick:n},"CHANGE MODE"),a))},x={loading:Object(h.css)({fontSize:24,color:"#fff",textAlign:"center"}),container:Object(h.css)({margin:"30px 0px 30px 0px"}),label:Object(h.css)({fontSize:15,color:"#fff"}),points:Object(h.css)({textAlign:"center",margin:"0 auto",width:60,fontSize:15,border:"1px solid #fff",color:"#fff",padding:5,borderRadius:5})},_=function(e){var n=e.participant,r=e.points,t=e.type,a=e.hide,c=e.isWinner;return o.a.createElement("div",{className:"row align-items-center ".concat(x.container)},o.a.createElement("div",{className:"col text-center"},o.a.createElement("div",{className:x.label},n)),o.a.createElement("div",{className:"col text-center"},a?o.a.createElement(k,{hide:!0}):o.a.createElement(k,{type:t,isWinner:c})),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:x.points},r," PT")))},$={title:Object(h.css)({color:"#fff",fontSize:18,textAlign:"center"})},A=function(e){var n=e.mode,r=e.answerPlayer,t=e.answerComputer,a=e.scorePlayer,c=e.scoreComputer,l=e.changeMode,s=e.answerPlayerTwo,i=e.playerNumber,u=e.scorePlayerTwo,d=e.winner,m=e.canPlayOnline;return console.log(m),o.a.createElement("div",null,o.a.createElement(T,{mode:n,changeMode:l,hideButton:!m,infoText:0==m?"En esta primera version solo es posible conectar a dos jugadores a la vez, puede intentar ganarle a la m\xe1quina mientras se libera una conexi\xf3n. Gracias":""}),2==n?o.a.createElement(_,{participant:"PLAYER",type:1==i?r:s,points:1==i?a:u,hide:1==i&&r&&!s||0==i&&s&&!r,isWinner:1==i&&"playerOne"==d||0==i&&"playerTwo"==d}):o.a.createElement(_,{participant:"COMPUTER",type:t,points:c}),o.a.createElement("div",{className:$.title},"vs"),2==n?o.a.createElement(_,{participant:"YOU",type:0==i?r:s,points:0==i?a:u,isWinner:1==i&&"playerTwo"==d||0==i&&"playerOne"==d}):o.a.createElement(_,{participant:"PLAYER",type:r,points:a}))},L="".concat(E,"/FIRE_WEAPON"),M="".concat(E,"/CHANGE_MODE"),I="".concat(E,"/RESET_BOARD"),V="".concat(E,"/RESET_ANSWERS"),W="".concat(E,"/CONNECT_PLAYER_SUCCESS"),F=("".concat(E,"/DISCONNECT_PLAYER_SUCCESS"),"".concat(E,"/UPDATE_PLAYERS_ONLINE")),z="".concat(E,"/SEND_WINNER"),U="".concat(E,"/FIRE_WEAPON_REMOTE_SUCCESS"),D="server/".concat(E,"/SERVER_CONNECT_PLAYER"),Y="server/".concat(E,"/SERVER_DISCONNECT_PLAYER"),G="server/".concat(E,"/SERVER_FIRE_WEAPON_REMOTE"),q=["rock","paper","scissors"],B={rock:{rock:0,paper:-1,scissors:1},paper:{rock:1,paper:0,scissors:-1},scissors:{rock:-1,paper:1,scissors:0}},H=function(){return q[Math.floor(Math.random()*q.length)]},J=function(e){return e.game},K=Object(v.a)(J,function(e){return e.mode}),Q=Object(v.a)(J,function(e){return e.answerPlayer}),X=Object(v.a)(J,function(e){return e.answerComputer}),Z=Object(v.a)(J,function(e){return e.scorePlayer}),ee=Object(v.a)(J,function(e){return e.scoreComputer}),ne=Object(v.a)(J,function(e){return e.waitingResponse}),re=Object(v.a)(J,function(e){return e.playerNumber}),te=Object(v.a)(J,function(e){return e.isRemote}),ae=Object(v.a)(J,function(e){return e.answerPlayerTwo}),ce=Object(v.a)(J,function(e){return e.scorePlayerTwo}),oe=Object(v.a)(J,function(e){return e.winner}),le=Object(v.a)(J,function(e){return e.socketId}),se=Object(v.a)(J,function(e){return e.playersOnline}),ie=Object(v.a)(K,se,re,function(e,n,r){return 1==e&&n<2||2==e&&(0==r||1==r||null==r)}),ue=function(e){return function(n,r){var t=r(),a=Q(t),c=ae(t);a&&c&&n({type:V,payload:null}),n({type:G,payload:e})}},de=function(){return{type:D}},me=function(e,n){return function(r){return r({type:Y,payload:{playerNumber:e,socketId:n}})}},pe=function(){return{type:I,payload:null}},fe=function(e){var n=H(),r=0===B[n][e]?"tie":1===B[n][e]?"computer":"player";return{type:L,payload:{answerComputer:n,answerPlayer:e,winner:r}}},Ee=function(){return function(e,n){var r=n(),t=K(r),a=le(r),c=re(r);e(pe()),e({type:M,payload:""}),e(1==t?de():me(c,a))}},be=r(2),ge={header:Object(h.css)({fontSize:30,color:"#fff",margin:20})},ye=function(){return o.a.createElement("div",{className:ge.header},"ROCK-PAPER-SCISSORS GAME")},Oe={logo:Object(h.css)({width:100,height:100,borderRadius:100})},we=function(){return o.a.createElement("img",{className:Oe.logo,alt:"",src:"https://scontent.fmid1-2.fna.fbcdn.net/v/t1.0-9/46202265_549816388815371_3132916786865897472_n.jpg?_nc_cat=107&_nc_ht=scontent.fmid1-2.fna&oh=10837af84030d5c638539a2de0f4edd3&oe=5D23E442"})},ve={button:Object(h.css)({width:"100%",marginTop:15,padding:8,fontSize:14,backgroundColor:"#112b46",color:"#fff",border:"none"})},he=function(e){var n=e.text,r=e.onClick;return o.a.createElement("button",{type:"button",className:ve.button,onClick:r},n)},je=(Object(h.css)({width:"100%",backgroundColor:"#fff",height:40,fontSize:14,borderRadius:0,margin:"20px 0px 20px 0px"}),{container:Object(h.css)({textAlign:"left"}),input:Object(h.css)({width:"100%",backgroundColor:"#fff",height:40,fontSize:14,borderRadius:0,padding:5,marginTop:15}),error:Object(h.css)({color:"#ED2939"})}),Ne=function(e){var n=e.value,r=e.handleChange,t=e.placeholder,a=e.type,c=e.error;return o.a.createElement("div",{className:je.container},o.a.createElement("input",{className:je.input,type:a,value:n,onChange:r,placeholder:t}),o.a.createElement("span",{className:je.error},c&&c))},Ce={form:Object(h.css)({backgroundColor:"#476b96",marginTop:20,padding:20}),label:Object(h.css)({margin:10}),link:Object(h.css)({"&:hover":{color:"blue",cursor:"pointer"}})},ke=function(e){var n=e.redirect,r=e.changeField,t=e.formValues,a=(e.registerUser,e.formErrors),c=e.login;return o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-10 col-md-6"},o.a.createElement("div",{className:"".concat(Ce.form)},o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(we,null)),o.a.createElement("div",{className:"col-12"},o.a.createElement(Ne,{placeholder:"Nickname",handleChange:function(e){return r("nickname",e.target.value)},value:t.nickname,error:a.nickname})),o.a.createElement("div",{className:"col-12"},o.a.createElement(Ne,{placeholder:"Contrase\xf1a",type:"password",handleChange:function(e){return r("password",e.target.value)},value:t.password,error:a.password})),o.a.createElement("div",{className:"col-12"},o.a.createElement(he,{text:"Ingresar",onClick:c})))),o.a.createElement("div",{className:Ce.label},"\xf3"),o.a.createElement("div",{className:(Ce.label,Ce.link),onClick:function(){return n("/register")}},"Registrate aqu\xed para poder ingresar"))))},Pe=function(e){return e.login},Re=Object(v.a)(Pe,function(e){return e.formValues}),Se=Object(v.a)(Pe,function(e){return e.errors}),Te=Object(v.a)(Pe,function(e){return e.isLogged}),xe="".concat("login","/CHANGE_FIELD"),_e="".concat("login","/SET_ERRORS"),$e="".concat("login","/LOGIN"),Ae="".concat("login","/LOGOUT"),Le="".concat("login","/RESET_FORM"),Me={form:Object(h.css)({backgroundColor:"#476b96",marginTop:20,padding:20}),label:Object(h.css)({margin:10}),link:Object(h.css)({marginTop:20,"&:hover":{color:"blue",cursor:"pointer"}}),info:Object(h.css)({color:"#fff",fontSize:14,marginBottom:20})},Ie=function(e){var n=e.redirect,r=e.changeField,t=e.formValues,a=e.registerUser,c=e.formErrors;return o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-10 col-md-6"},o.a.createElement("div",{className:"".concat(Me.form)},o.a.createElement("div",{className:Me.info}," Es necesario registrarse para poder jugar, elija un nickname y asigne una contrase\xf1a para poder ingresar. "),o.a.createElement("form",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(Ne,{placeholder:"Nickname",handleChange:function(e){return r("nickname",e.target.value)},value:t.nickname,error:c.nickname})),o.a.createElement("div",{className:"col-12"},o.a.createElement(Ne,{placeholder:"Contrase\xf1a",type:"password",handleChange:function(e){return r("password",e.target.value)},value:t.password,error:c.password})),o.a.createElement("div",{className:"col-12"},o.a.createElement(Ne,{placeholder:"Repita la contrase\xf1a",type:"password",handleChange:function(e){return r("confirmPassword",e.target.value)},value:t.confirmPassword,error:c.confirmPassword})),o.a.createElement("div",{className:"col-12"},o.a.createElement(he,{text:"Registrar",onClick:a})))),o.a.createElement("div",{className:(Me.label,Me.link),onClick:function(){return n("/login")}},"Regresar al login"))))},Ve="".concat("register","/CHANGE_FIELD"),We="".concat("register","/REGISTER_USER"),Fe="".concat("register","/SET_ERRORS"),ze="".concat("register","/RESET_FORM"),Ue=function(e){return e.register},De=Object(v.a)(Ue,function(e){return e.formValues}),Ye=Object(v.a)(Ue,function(e){return e.users}),Ge=Object(v.a)(Ue,function(e){return e.errors}),qe=function(){return{type:ze,payload:null}};var Be=function(e,n){return{type:Ve,payload:{field:e,value:n}}},He=function(){return function(e,n){var r,t=n(),a=De(t),c=function(e,n){var r={},t=Ye(n).find(function(n){return n.nickname===e.nickname});return e.nickname?t&&(r.nickname="El usuario ".concat(e.nickname," ha sido registrado anteriormente.")):r.nickname="El nickname es requerido.",e.password||(r.password="La contrase\xf1a es requerida."),e.confirmPassword||(r.confirmPassword="Por favor escriba la confirmaci\xf3n de la contrase\xf1a."),e.password!==e.confirmPassword&&(r.confirmPassword="La contrase\xf1a y la confirmaci\xf3n de la contrase\xf1a deben ser iguales."),r}(a,t);r=c,0===Object.keys(r).length?(e({type:We,payload:{nickname:a.nickname,password:a.password}}),e(qe()),e(Object(be.d)("/login"))):e(function(e){return{type:Fe,payload:e}}(c))}},Je=function(e){function n(){return Object(b.a)(this,n),Object(y.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.props,n=e.redirect,r=e.changeField,t=e.formValues,a=e.formErrors,c=e.registerUser;return o.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},o.a.createElement("div",{className:"col"},o.a.createElement(ye,null),o.a.createElement(Ie,{redirect:n,changeField:r,formValues:t,registerUser:c,formErrors:a})))}}]),n}(c.Component),Ke=Object(v.b)({formValues:De,formErrors:Ge}),Qe=Object(i.c)(Ke,function(e){return{redirect:function(n){return e(Object(be.d)(n))},changeField:function(n,r){return e(Be(n,r))},registerUser:function(){return e(He())}}})(Je),Xe=r(5),Ze=r.n(Xe),en={formValues:{nickname:null,password:null,confirmPassword:null},errors:{nickname:null,password:null,confirmPassword:null},users:[]},nn={NAME:"register",Container:Qe,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ve:return Ze()(e,{formValues:Object(f.a)({},n.payload.field,{$set:n.payload.value})});case Fe:return Ze()(e,{errors:{$set:n.payload}});case We:return Ze()(e,{users:{$push:[n.payload]}});case ze:return Ze()(e,{errors:{$set:{nickname:null,pasword:null,confirmPassword:null}},formValues:{$set:{nickname:null,pasword:null,confirmPassword:null}}});default:return e}},selectors:a},rn=function(){return{type:Le,payload:null}};var tn={onChangeField:function(e,n){return{type:xe,payload:{field:e,value:n}}},login:function(){return function(e,n){var r,t=n(),a=Re(t),c=function(e,n){var r={},t=nn.selectors.getUsers(n);e.nickname||(r.nickname="El nickname es requerido."),e.password||(r.password="La contrase\xf1a es requerida.");var a=t.find(function(n){return n.nickname===e.nickname});return a?a.password!==e.password&&(r.password="El usuario o contrase\xf1a no son validos."):r.password="El usuario o contrase\xf1a no son validos.",r}(a,t);r=c,0===Object.keys(r).length?(e({type:$e,payload:a.nickname}),e(rn()),e(Object(be.d)("/"))):e(function(e){return{type:_e,payload:e}}(c))}},logout:function(e,n){return function(e){e({type:Ae}),e(rn()),e(Object(be.d)("/login"))}}},an=function(e){function n(){return Object(b.a)(this,n),Object(y.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.props,n=e.redirect,r=e.changeField,t=e.formValues,a=e.formErrors,c=e.login;return o.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},o.a.createElement("div",{className:"col"},o.a.createElement(ye,null),o.a.createElement(ke,{redirect:n,changeField:r,formValues:t,formErrors:a,login:c})))}}]),n}(c.Component),cn=Object(v.b)({formValues:Re,formErrors:Se}),on=Object(i.c)(cn,function(e){return{redirect:function(n){return e(Object(be.d)(n))},changeField:function(n,r){return e(tn.onChangeField(n,r))},login:function(){return e(tn.login())}}})(an),ln={isLogged:!1,nickname:null,formValues:{nickname:null,password:null},errors:{nickname:null,password:null}},sn={NAME:"login",Container:on,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ln,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case xe:return Ze()(e,{formValues:Object(f.a)({},n.payload.field,{$set:n.payload.value})});case _e:return Ze()(e,{errors:{$set:n.payload}});case $e:return Ze()(e,{isLogged:{$set:!0},nickname:{$set:n.payload}});case Ae:return Ze()(e,{isLogged:{$set:!1},nickname:{$set:null}});case Le:return Ze()(e,{errors:{$set:{nickname:null,pasword:null}},formValues:{$set:{nickname:null,pasword:null}}});default:return e}},actions:tn,selectors:t},un=function(e){function n(){return Object(b.a)(this,n),Object(y.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.isLogged,r=e.redirect;n||r("/login")}},{key:"render",value:function(){var e=this.props,n=e.mode,r=e.answerPlayer,t=e.answerComputer,a=e.scorePlayer,c=e.scoreComputer,l=e.fireWeapon,s=e.fireWeaponRemote,i=e.waitingResponse,u=e.changeMode,d=e.isRemote,m=e.playerNumber,p=e.answerPlayerTwo,f=e.scorePlayerTwo,E=e.winner,b=e.canPlayOnline,g=e.playersOnline,y=e.logout;return o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"col-12"},o.a.createElement(N,{onLogout:y})),o.a.createElement("div",{className:"col-12 align-content-center"},o.a.createElement(A,{mode:n,answerPlayer:r,answerPlayerTwo:p,answerComputer:t,scorePlayer:a,scorePlayerTwo:f,scoreComputer:c,waitingResponse:i,changeMode:u,isRemote:d,playerNumber:m,winner:E,canPlayOnline:b})),o.a.createElement("div",{className:"col-12  align-content-end"},o.a.createElement(R,{fireWeapon:1==n?l:s,disabled:2==n&&(0==m&&r&&!p||1==m&&p&&!r||g<2),textInfo:2==n&&g<2?"Porfavor espere a que alg\xfan contrincante se conecte, para poder jugar.":""})))}}]),n}(c.Component),dn=Object(v.b)({canPlayOnline:ie,mode:K,answerPlayer:Q,answerPlayerTwo:ae,answerComputer:X,scorePlayer:Z,scorePlayerTwo:ce,scoreComputer:ee,waitingResponse:ne,playerNumber:re,isRemote:te,winner:oe,playersOnline:se,isLogged:sn.selectors.getIsLogged}),mn=Object(i.c)(dn,function(e){return{fireWeapon:function(n){return e(fe(n))},changeMode:function(){return e(Ee())},fireWeaponRemote:function(n){return e(ue(n))},redirect:function(n){return e(Object(be.d)(n))},logout:function(){return e(sn.actions.logout())}}})(un),pn={socketId:null,mode:1,playerNumber:null,answerPlayer:null,answerPlayerTwo:null,answerComputer:null,winner:null,scorePlayer:0,scorePlayerTwo:0,scoreComputer:0,playersOnline:0},fn={NAME:E,Container:mn,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L:return Ze()(e,{answerPlayer:{$set:n.payload.answerPlayer},answerComputer:{$set:n.payload.answerComputer},scoreComputer:{$apply:function(e){return"computer"===n.payload.winner?e+1:e}},scorePlayer:{$apply:function(e){return"player"===n.payload.winner?e+1:e}}});case M:return Ze()(e,{mode:{$apply:function(e){return 1==e?2:1}}});case I:return Ze()(e,{socketId:{$set:null},playerNumber:{$set:null},answerPlayer:{$set:null},answerPlayerTwo:{$set:null},answerComputer:{$set:null},winner:{$set:null},scorePlayer:{$set:0},scorePlayerTwo:{$set:0},scoreComputer:{$set:0}});case V:return 0==e.playerNumber||1==e.playerNumber?Ze()(e,{answerPlayer:{$set:null},answerPlayerTwo:{$set:null},answerComputer:{$set:null},winner:{$set:null}}):e;case W:return Ze()(e,{socketId:{$set:n.payload.socketId},playerNumber:{$set:n.payload.playerNumber}});case F:return Ze()(e,{playersOnline:{$set:n.payload}});case G:return 0==e.playerNumber||1==e.playerNumber?Ze()(e,{answerPlayer:{$apply:function(r){return 0==e.playerNumber?n.payload:r}},answerPlayerTwo:{$apply:function(r){return 1==e.playerNumber?n.payload:r}}}):e;case U:return 0==e.playerNumber||1==e.playerNumber?Ze()(e,{answerPlayer:{$apply:function(e){return 0==n.payload.playerNumber?n.payload.move:e}},answerPlayerTwo:{$apply:function(e){return 1==n.payload.playerNumber?n.payload.move:e}}}):e;case z:return Ze()(e,{winner:{$set:n.payload},scorePlayer:{$apply:function(e){return"playerOne"==n.payload?e+1:e}},scorePlayerTwo:{$apply:function(e){return"playerTwo"==n.payload?e+1:e}}});default:return e}}},En=function(e){var n;return Object(m.c)((n={router:Object(u.b)(e)},Object(f.a)(n,fn.NAME,fn.reducer),Object(f.a)(n,sn.NAME,sn.reducer),Object(f.a)(n,nn.NAME,nn.reducer),n))},bn=r(62),gn=r.n(bn),yn=r(63),On=r(64),wn=r.n(On),vn=r(65),hn=r.n(vn)()("http://localhost:8000"),jn=wn()(hn,"server/"),Nn=gn()();var Cn=r(147),kn=r(148),Pn=r(146),Rn=r(149),Sn={text:Object(h.css)({fontSize:23,fontStyle:"italic",marginTop:50})},Tn=function(){return o.a.createElement("div",{className:"row text-center align-items-center h-100"},o.a.createElement("div",{className:"col ".concat(Sn.text)},"Lo sentimos la p\xe1gina que buscas no existe. :("))},xn=(Object(h.css)({backgroundColor:"#112b46",padding:15,fontSize:15,color:"#fff"}),r(30)),_n=function(e){var n=e.children;return o.a.createElement("div",{className:"row h-100 align-items-center justify-content-center"},o.a.createElement("div",{className:"col-12 h-100"},n))},$n=function(e){var n=e.component,r=Object(xn.a)(e,["component"]);return o.a.createElement(Pn.a,Object.assign({},r,{render:function(e){return o.a.createElement(_n,null,o.a.createElement(n,e))}}))},An=function(e){var n=e.children;return o.a.createElement("div",{className:"container h-100"},n)},Ln=function(e){var n=e.component,r=Object(xn.a)(e,["component"]);return o.a.createElement(Pn.a,Object.assign({},r,{render:function(e){return o.a.createElement(An,null,o.a.createElement(n,e))}}))},Mn=function(e){function n(){return Object(b.a)(this,n),Object(y.a)(this,Object(O.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){var e=this.props.history;return o.a.createElement(Cn.a,{history:e},o.a.createElement("div",null,o.a.createElement(kn.a,null,o.a.createElement($n,{exact:!0,path:"/login",component:sn.Container}),o.a.createElement($n,{exact:!0,path:"/register",component:nn.Container}),o.a.createElement(Ln,{exact:!0,path:"/",component:fn.Container}),o.a.createElement(Pn.a,{component:Tn}))))}}]),n}(c.Component),In={NAME:"main",Container:Object(Rn.a)(Object(i.c)(null,null)(Mn))},Vn=(r(142),function(e){var n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d;return Object(m.e)(En(Nn),e,n(Object(m.a)(Object(p.a)(Nn),yn.a,jn)))}());s.a.render(o.a.createElement(d.AppContainer,null,o.a.createElement(i.a,{store:Vn},o.a.createElement(u.a,{history:Nn},o.a.createElement(In.Container,null)))),document.getElementById("root"))},69:function(e,n,r){e.exports=r(145)}},[[69,2,1]]]);
//# sourceMappingURL=main.4ca41596.chunk.js.map