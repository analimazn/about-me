(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(227)},119:function(e,t,a){e.exports=a.p+"static/media/analima.0668a123.jpg"},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(103),c=a.n(l),r=a(8),o=a(9),s=a(12),m=a(10),u=a(11),d=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"footer",style:{backgroundColor:"transparent"}},i.a.createElement("div",{className:"d-flex flex-row justify-content-center"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-md-offset-6"},i.a.createElement("span",{className:"copyright"},i.a.createElement("i",{className:"fa fa-coffee coffee"})," +",i.a.createElement("i",{className:"fa fa-beer beer"})," +",i.a.createElement("i",{className:"fa fa-terminal terminal"})," =",i.a.createElement("i",{className:"fa fa-heart heart"}))))))}}]),t}(i.a.Component),p=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"header","data-parallax":"true",style:{backgroundColor:"transparent",padding:110,positionTop:"fixed"}})}}]),t}(i.a.Component),f=a(28),E=a(7),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={color:"gray",fontSize:20,margin:5},t=E.socialNetwork.map(function(t,a){return i.a.createElement("a",{key:a,rel:"noopener noreferrer",target:"_blank",title:t.title,href:t.url},i.a.createElement("i",{className:t.icon,style:e}))});return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-md-offset-6"},i.a.createElement("div",{className:"container",style:{positionTop:"fixed",backgroundColor:"transparent"}},t))))}}]),t}(i.a.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={position:"",positionTop:""},a.resize=a.resize.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"resize",value:function(){window.innerWidth>=768?(this.setState({position:"fixed"}),this.setState({positionTop:""})):(this.setState({position:""}),this.setState({positionTop:"fixed"}))}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"render",value:function(){var e=a(119),t={position:this.state.position,positionTop:this.state.positionTop};return i.a.createElement("div",{className:"col-md-3 col-md-offset-6",style:t},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"owner"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:e,alt:"Circle",className:"img-circle img-no-padding img-responsive"})))),i.a.createElement("div",{className:"text-center"},i.a.createElement("h3",null,E.name),i.a.createElement("br",null),i.a.createElement("h6",null,E.contact.email),i.a.createElement(h,null)))}}]),t}(i.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=E.professionalExperience.all.map(function(t,a){return i.a.createElement("div",{className:e.props.textAlign,key:a},i.a.createElement("ul",{className:"timeline"},i.a.createElement("li",null,i.a.createElement("h6",null,t.company," - ",t.occupation),i.a.createElement("b",null,t.dateBegin,", ",t.dateEnd),i.a.createElement("br",null),i.a.createElement("p",null,t.worksWith))))});return i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-md-3"},i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement("h4",null,i.a.createElement("i",{className:E.professionalExperience.icon,style:{marginRight:15}}),E.professionalExperience.title)),t)))}}]),t}(i.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=E.volunteerWork.all.map(function(t,a){return i.a.createElement("div",{className:e.props.textAlign,key:a},i.a.createElement("ul",{className:"timeline"},i.a.createElement("li",null,i.a.createElement("h6",null,t.event," - ",t.occupation),i.a.createElement("b",null,t.years),i.a.createElement("br",null),i.a.createElement("p",null,t.about),i.a.createElement("p",null,t.worksWith))))});return i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-md-3"},i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement("h4",null,i.a.createElement("i",{className:E.volunteerWork.icon,style:{marginRight:15}}),E.volunteerWork.title)),t)))}}]),t}(i.a.Component),y=a(235),j=a(234),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("g",null,i.a.createElement(y.a,this.props),i.a.createElement(j.a,Object.assign({},this.props,{x:200,y:250,text:"".concat(this.props.text),orientation:"top",pointerLength:0,cornerRadius:50,width:100,height:100,flyoutStyle:{fill:"white"}})))}}]),t}(i.a.Component);O.defaultEvents=j.a.defaultEvents;var N=a(231),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={skills:a.props.skills},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",style:{width:"100%"}},i.a.createElement(N.a,{style:{labels:{fill:"#444243"}},colorScale:["#e8daef","#fadbd8","#d5f5e3","#fdebd0","#f6ddcc","#d1f2eb"],padAngle:3,innerRadius:100,labelRadius:115,labels:function(e){return e.x},labelComponent:i.a.createElement(O,null),data:this.state.skills.map(function(e){return{x:e.technologie,y:e.percentage}})}))}}]),t}(i.a.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-md-3"},i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement("h4",null,i.a.createElement("i",{className:E.skills.icon,style:{marginRight:15}}),E.skills.title)),i.a.createElement(k,{skills:E.skills.all}))))}}]),t}(i.a.Component),x=a(232),A=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=E.languages.all.map(function(t,a){return i.a.createElement("div",{className:e.props.textAlign,key:a},i.a.createElement("ul",{className:"timeline"},i.a.createElement("li",null,i.a.createElement("h6",null,t.idiom),i.a.createElement("p",null,t.titleRead),i.a.createElement(x.a,{animated:!0,now:t.percentageRead}),i.a.createElement("p",null,t.titleWriter),i.a.createElement(x.a,{animated:!0,now:t.percentageWriter}),i.a.createElement("p",null,t.titleConversation),i.a.createElement(x.a,{animated:!0,now:t.percentageConversation}))))});return i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-md-3"},i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement("h4",null,i.a.createElement("i",{className:E.languages.icon,style:{marginRight:15}}),E.languages.title)),t)))}}]),t}(i.a.Component),z=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=E.academicJourney.all.map(function(t,a){return i.a.createElement("div",{className:e.props.textAlign,key:a},i.a.createElement("ul",{className:"timeline"},i.a.createElement("li",null,i.a.createElement("h6",null,t.school),i.a.createElement("b",null,t.dateBegin,", ",t.dateEnd),i.a.createElement("br",null),i.a.createElement("p",null," ",t.course))))});return i.a.createElement("div",{className:"container mt-5 mb-5"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-8 offset-md-3"},i.a.createElement("div",{className:"d-flex justify-content-start"},i.a.createElement("h4",null,i.a.createElement("i",{className:E.academicJourney.icon,style:{marginRight:15}}),E.academicJourney.title)),t)))}}]),t}(i.a.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={textAlign:""},a.resize=a.resize.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"resize",value:function(){window.innerWidth>=768?this.setState({textAlign:"text-justify"}):this.setState({textAlign:"text-left"})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,{textAlign:this.state.textAlign}),i.a.createElement(v,{textAlign:this.state.textAlign}),i.a.createElement(z,{textAlign:this.state.textAlign}),i.a.createElement(A,{textAlign:this.state.textAlign}),i.a.createElement(w,{textAlign:this.state.textAlign}))}}]),t}(i.a.Component);var S=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(g,null),i.a.createElement(C,null),i.a.createElement(d,null))};a(224),a(225),a(226);c.a.render(i.a.createElement(S,null),document.getElementById("app"))},7:function(e){e.exports={name:"Ana Lima",address:{country:"Brasil",state:"S\xe3o Paulo",city:"Ca\xe7apava",code:"12285-150"},contact:{email:"analimazn@gmail.com"},socialNetwork:[{title:"github",url:"https://github.com/analimazn/",icon:"fa fa-github"},{title:"linkedin",url:"https://www.linkedin.com/in/analimazn/",icon:"fa fa-linkedin"},{title:"twitter",url:"https://twitter.com/analimazn",icon:"fa fa-twitter"},{title:"facebook",url:"https://www.facebook.com/analimazn",icon:"fa fa-facebook-f"},{title:"lastfm",url:"https://www.last.fm/user/anazzita",icon:"fa fa-lastfm"}],professionalExperience:{icon:"fa fa-briefcase",title:"Experi\xeancia profissional",key:"professionalExperience",all:[{company:"Climatempo",occupation:"Estagi\xe1ria em TI",worksWith:"Manuten\xe7\xe3o em sistemas que utilizam PHP e Node.js. Desenvolvimento de scripts de automa\xe7\xe3o utilizando Python. Gerenciamento de banco de dados utilizando PostgreSQL e MongoDB. Uso de Git com padr\xf5es de Gitflow para versionamento de c\xf3digo e da metodologia \xe1gil SCRUM para organiza\xe7\xe3o das tarefas.",dateBegin:"18/02/2019",dateEnd:"Atualmente"},{company:"Brasil317",occupation:"Estagi\xe1ria em TI",worksWith:"Desenvolvimento de softwares para extra\xe7\xe3o de dados de sites p\xfablicos utilizando Python e Node.js. Gerenciamento de banco dados utilizando MySQL e MongoDB. Experi\xeancia com servi\xe7os e servidores AWS/Amazon. Uso da metodologia \xe1gil SCRUM para organiza\xe7\xe3o das tarefas.",dateBegin:"01/02/2018",dateEnd:"09/02/2019"},{company:"Megavale Transportes",occupation:"Auxiliar Administrativo",worksWith:"Administra\xe7\xe3o do pagamento de funcion\xe1rios terceirizados.",dateBegin:"01/04/2014",dateEnd:"01/08/2015"}]},volunteerWork:{icon:"fa fa-users",title:"Trabalho volunt\xe1rio",key:"volunteerWork",all:[{event:"Roadsec",occupation:"Roadie",about:"O evento trata sobre seguran\xe7a da informa\xe7\xe3o e tecnologia.",worksWith:"Fui volunt\xe1ria para ajudar na organiza\xe7\xe3o e divulga\xe7\xe3o do evento.",years:"2018, 2017"}]},academicJourney:{icon:"fa fa-graduation-cap",title:"Forma\xe7\xe3o acad\xeamica",key:"academicJourney",all:[{school:"Faculdade de Tecnologia Professor Jessen Vidal",course:"Tecn\xf3logo em An\xe1lise e Desenvolvimento de Sistemas",dateBegin:"02/02/2016",dateEnd:"02/12/2019"},{school:"Escola T\xe9cnica Machado de Assis",course:"T\xe9cnico em Administra\xe7\xe3o",dateBegin:"02/02/2013",dateEnd:"02/06/2014"},{school:"Escola T\xe9cnica Machado de Assis",course:"T\xe9cnico em Log\xedstica",dateBegin:"02/06/2012",dateEnd:"02/12/2013"},{school:"Escola T\xe9cnica Machado de Assis",course:"T\xe9cnico em Inform\xe1tica",dateBegin:"02/06/2011",dateEnd:"02/06/2012"}]},languages:{icon:"fa fa-language",title:"Idiomas",key:"languages",all:[{idiom:"Ingl\xeas",iconRead:"fa fa-book",titleRead:"Leitura",percentageRead:"90",iconWriter:"fas fa-pen",titleWriter:"Escrita",percentageWriter:"60",iconConversation:"fa fa-comments",titleConversation:"Conversa\xe7\xe3o",percentageConversation:"50"}]},skills:{icon:"fa fa-magic",title:"Conhecimentos",key:"skills",all:[{technologie:"MySQL",percentage:45},{technologie:"PostgreSQL",percentage:35},{technologie:"MongoDB",percentage:45},{technologie:"Javascript",percentage:35},{technologie:"HTML",percentage:60},{technologie:"CSS",percentage:35},{technologie:"React",percentage:25},{technologie:"Node.js",percentage:75},{technologie:"Python",percentage:50},{technologie:"Java",percentage:35},{technologie:"React Native",percentage:25},{technologie:"Linux",percentage:80}]}}}},[[114,1,2]]]);
//# sourceMappingURL=main.528ea547.chunk.js.map