"use strict";(self.webpackChunkbackoffice=self.webpackChunkbackoffice||[]).push([[817],{9817:(te,w,m)=>{m.r(w),m.d(w,{DashboardModule:()=>Vt});var Z=m(8583),L=m(416),y=m(4655),t=m(7716),q=m(1841);let N=(()=>{class i{constructor(e){this.http=e,this.hospitals=[],this.pathologies=[],this.partnerServices=[],this.emertencyServices=[],this.token=localStorage.getItem("access_token")||""}setHospitals(e){this.hospitals=e}setPathologies(e){this.pathologies=e}setPartnerServices(e){this.partnerServices=e}setEmertencyServices(e){this.emertencyServices=e}getHospitalsLocal(){return this.hospitals}getPathologiesLocal(){return this.pathologies}getPartnerServicesLocal(){return this.partnerServices}getEmertencyServicesLocal(){return this.emertencyServices}getHospital(){return this.http.get("https://healthhomeapi.herokuapp.com/api/hospital",{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}getPathologies(){return this.http.get("https://healthhomeapi.herokuapp.com/api/pathologies",{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}getPartnerService(){return this.http.get("https://healthhomeapi.herokuapp.com/api/partnerService",{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}getEmergencyService(){return this.http.get("https://healthhomeapi.herokuapp.com/api/emergencyService",{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(q.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),T=(()=>{class i{constructor(e){this.http=e,this.patients=[],this.token=localStorage.getItem("access_token")||""}setPatients(e){this.patients=e}getPatientsLocal(){return this.patients}getPatientsByHome(e){return this.http.get(`https://healthhomeapi.herokuapp.com/api/patient/homeId?_id=${e}`,{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}deletePatientById(e){return this.http.delete(`https://healthhomeapi.herokuapp.com/api/patient?document=${e}`,{headers:{"Content-type":"application/json",Authorization:this.token},responseType:"text",observe:"response"})}createPatient(e){const o={"Content-type":"application/json",Authorization:this.token},a=JSON.stringify(e);return this.http.post("https://healthhomeapi.herokuapp.com/api/patient",a,{headers:o,observe:"response",responseType:"text"})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(q.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var S=m(3071),J=m(2522),C=m(1095),A=m(6627);let G=(()=>{class i{constructor(e,o){this.router=e,this.patientService=o}ngOnInit(){}logout(){this.patientService.setPatients([]),localStorage.removeItem("access_token"),this.router.navigate([""])}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(y.F0),t.Y36(T))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-navbar"]],decls:13,vars:0,consts:[["color","primary"],["mat-button","","routerLink","/dashboard"],[1,"example-spacer"],["mat-button","","routerLink","tasks"],["mat-button","","routerLink","patients"],["mat-icon-button","","routerLink","",1,"primary"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"mat-toolbar",0),t.TgZ(1,"button",1),t.TgZ(2,"h1"),t._uU(3,"Casa de salud"),t.qZA(),t.qZA(),t._UZ(4,"span",2),t.TgZ(5,"button",3),t._uU(6,"Tareas"),t.qZA(),t.TgZ(7,"button",4),t._uU(8,"Pacientes"),t.qZA(),t._UZ(9,"span",2),t.TgZ(10,"button",5),t.TgZ(11,"mat-icon",6),t.NdJ("click",function(){return o.logout()}),t._uU(12,"logout"),t.qZA(),t.qZA(),t.qZA())},directives:[J.Ye,C.lW,y.rH,A.Hw],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),i})(),j=(()=>{class i{constructor(e,o,a){this.miscSevice=e,this.patientService=o,this.userService=a}ngOnInit(){this.getHospitals(),this.getPathologies(),this.getPartnerService(),this.getEmergencyService(),this.getPatients(),this.getNurses()}getHospitals(){this.miscSevice.getHospital().subscribe(e=>{200===e.status&&this.miscSevice.setHospitals(e.body||[])},e=>{console.log(e)})}getPathologies(){this.miscSevice.getPathologies().subscribe(e=>{200===e.status&&this.miscSevice.setPathologies(e.body||[])},e=>{console.log(e)})}getPartnerService(){this.miscSevice.getPartnerService().subscribe(e=>{200===e.status&&this.miscSevice.setPartnerServices(e.body||[])},e=>{console.log(e)})}getEmergencyService(){this.miscSevice.getEmergencyService().subscribe(e=>{200===e.status&&this.miscSevice.setEmertencyServices(e.body||[])},e=>{console.log(e)})}getPatients(){this.patientService.getPatientsByHome(this.userService.getHealthHome()).subscribe(e=>{200===e.status&&this.patientService.setPatients(e.body||[])},e=>{console.log(e)})}getNurses(){this.userService.getNursesByHome(this.userService.getHealthHome()).subscribe(e=>{200===e.status&&this.userService.setNurses(e.body||[])},e=>{console.log(e)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(N),t.Y36(T),t.Y36(S.K))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(e,o){1&e&&(t._UZ(0,"app-navbar"),t._UZ(1,"router-outlet"))},directives:[G,y.lC],styles:[".content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}"]}),i})();var B=m(6215),l=m(3679),g=m(2238),x=m(7832),P=m(8295),O=m(9983),F=m(7441),I=m(2458);function E(i,n){1&i&&t._uU(0,"Datos personales")}function $(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h4"),t._uU(2,"Rellene todos los campos"),t.qZA(),t.qZA())}function z(i,n){1&i&&t._uU(0,"Datos m\xe9dicos")}function R(i,n){if(1&i&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}function X(i,n){if(1&i&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}function K(i,n){if(1&i&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}function W(i,n){if(1&i&&(t.TgZ(0,"mat-option",25),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}function V(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h4"),t._uU(2,"Rellene todos los campos"),t.qZA(),t.qZA())}function tt(i,n){1&i&&t._uU(0,"Contactos")}function et(i,n){if(1&i&&(t.TgZ(0,"div",26),t.TgZ(1,"div",27),t.TgZ(2,"mat-form-field",28),t._UZ(3,"input",29),t.qZA(),t.TgZ(4,"mat-form-field",28),t._UZ(5,"input",30),t.qZA(),t.qZA(),t.qZA()),2&i){const e=n.index;t.xp6(1),t.Q6J("formGroupName",e)}}function it(i,n){1&i&&(t.TgZ(0,"div"),t.TgZ(1,"h4"),t._uU(2,"Ingrese al menos 1 contacto"),t.qZA(),t.qZA())}let ot=(()=>{class i{constructor(e,o,a,s,r){this.fb=e,this.patientService=o,this.miscService=a,this.userService=s,this.parentData=r,this.data=[{contactName:"",contactPhone:""}],this.dataSource=new B.X([]),this.displayColumns=["contactName","contactPhone"],this.rows=this.fb.array([]),this.thirdFormGroup=this.fb.group({contacts:this.rows}),this.isEditable=!0,this.firstStepInvalid=!1,this.secondStepInvalid=!1,this.thirdStepInvalid=!1,this.hospitalsList=[],this.pathologiesList=[],this.emergencyServicesList=[],this.partnerServicesList=[],this.toppingList=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.firstFormGroup=this.fb.group({document:["",l.kI.required],name:["",l.kI.required]}),this.secondFormGroup=this.fb.group({mutualist:[],emergencyService:new l.NI,primaryDoctor:[],accompanying:new l.NI,pathologies:new l.NI,cares:[""]})}validateFirstStep(){var e,o;return!(""!==(null===(e=this.firstFormGroup.get("name"))||void 0===e?void 0:e.value)&&""!==(null===(o=this.firstFormGroup.get("document"))||void 0===o?void 0:o.value))}validateSecondStep(){var e,o,a,s,r,c;return!(null!==(null===(e=this.secondFormGroup.get("mutualist"))||void 0===e?void 0:e.value)&&null!==(null===(o=this.secondFormGroup.get("emergencyService"))||void 0===o?void 0:o.value)&&null!==(null===(a=this.secondFormGroup.get("primaryDoctor"))||void 0===a?void 0:a.value)&&null!==(null===(s=this.secondFormGroup.get("accompanying"))||void 0===s?void 0:s.value)&&(null===(r=this.secondFormGroup.get("pathologies"))||void 0===r?void 0:r.value.length)>0&&""!==(null===(c=this.secondFormGroup.get("cares"))||void 0===c?void 0:c.value))}validateThirdStep(){var e,o,a;return!((null===(e=this.thirdFormGroup.get("contacts"))||void 0===e?void 0:e.value.length)>0&&null!==(null===(o=this.thirdFormGroup.get("contacts"))||void 0===o?void 0:o.value[0].contactName)&&null!==(null===(a=this.thirdFormGroup.get("contacts"))||void 0===a?void 0:a.value[0].contactPhone))}ngOnInit(){this.data.forEach(e=>this.addRow(e,!1)),this.updateView(),(0===this.hospitalsList.length||0===this.pathologiesList.length||0===this.partnerServicesList.length||0===this.emergencyServicesList.length)&&(this.hospitalsList=this.miscService.getHospitalsLocal(),this.pathologiesList=this.miscService.getPathologiesLocal(),this.partnerServicesList=this.miscService.getPartnerServicesLocal(),this.emergencyServicesList=this.miscService.getEmertencyServicesLocal())}finishSteps(e){let o=4;this.validateThirdStep()&&(this.thirdStepInvalid=!0,o=2),this.validateSecondStep()&&(this.secondStepInvalid=!0,o=1),this.validateFirstStep()&&(this.firstStepInvalid=!0,o=0),o<4?e.selectedIndex=o:this.savePatient()}savePatient(){var e,o,a,s,r,c,u,f,d;let h=null===(e=this.thirdFormGroup.get("contacts"))||void 0===e?void 0:e.value,b=[];h.forEach(v=>{b.push({name:v.contactName,phone:v.contactPhone})});let U={name:null===(o=this.firstFormGroup.get("name"))||void 0===o?void 0:o.value,document:null===(a=this.firstFormGroup.get("document"))||void 0===a?void 0:a.value,hospital:null===(s=this.secondFormGroup.get("mutualist"))||void 0===s?void 0:s.value._id,emergencyService:null===(r=this.secondFormGroup.get("emergencyService"))||void 0===r?void 0:r.value._id,gpDoctor:null===(c=this.secondFormGroup.get("primaryDoctor"))||void 0===c?void 0:c.value,partnerService:null===(u=this.secondFormGroup.get("accompanying"))||void 0===u?void 0:u.value._id,pathologies:null===(f=this.secondFormGroup.get("pathologies"))||void 0===f?void 0:f.value.map(v=>v._id),caresAndComments:null===(d=this.secondFormGroup.get("cares"))||void 0===d?void 0:d.value,assignedHealthHome:this.userService.getHealthHome(),contacts:b,admissionDate:this.formatDate()};this.patientService.createPatient(U).subscribe(v=>{this.patientService.getPatientsByHome(this.userService.getHealthHome()).subscribe(Y=>{this.patientService.setPatients(Y.body||[]),this.parentData.closeDialog()},Y=>{console.log(Y)})},v=>{console.log(v)})}addRow(e,o){const a=this.fb.group({contactName:[e&&e.contactName?e.contactName:null,[]],contactPhone:[e&&e.contactPhone?e.contactPhone:null,[]]});this.rows.push(a),o||this.updateView()}updateView(){this.dataSource.next(this.rows.controls)}formatDate(){var e=new Date,o=""+(e.getMonth()+1),a=""+e.getDate(),s=e.getFullYear();return o.length<2&&(o="0"+o),a.length<2&&(a="0"+a),[s,o,a].join("/")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.qu),t.Y36(T),t.Y36(N),t.Y36(S.K),t.Y36(g.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-crear-paciente"]],decls:71,vars:15,consts:[[1,"nav-1"],["mat-dialog-close",""],["linear",""],["stepper",""],[3,"stepControl","editable"],[3,"formGroup"],["matStepLabel",""],["appearance","fill",1,"input"],["matInput","","formControlName","document","placeholder","Ej.: 1.234.567-8","autocomplete","off"],["matInput","","formControlName","name","placeholder","Ej.: Luis Su\xe1rez","autocomplete","off"],[4,"ngIf"],["mat-button","","matStepperNext",""],["required","","name","mutualist","formControlName","mutualist"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","primaryDoctor","formControlName","primaryDoctor","placeholder","","autocomplete","off"],["required","","name","emergencyService","formControlName","emergencyService"],["required","","name","accompanying","formControlName","accompanying"],["formControlName","pathologies","multiple",""],["formControlName","cares","matInput","","placeholder","Dormir de lado."],[1,"nav-2"],["mat-button","","matStepperPrevious",""],["formArrayName","contacts",4,"ngFor","ngForOf"],[1,"row"],["mat-mini-fab","","color","primary",3,"click"],["mat-raised-button","","color","primary",3,"click"],[3,"value"],["formArrayName","contacts"],[1,"row",3,"formGroupName"],["appearance","fill",1,"input-half"],["matInput","","formControlName","contactName","placeholder","Nombre","autocomplete","off"],["type","number","matInput","","formControlName","contactPhone","placeholder","N\xfamero","autocomplete","off"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"mat-icon",1),t._uU(2,"cancel"),t.qZA(),t.qZA(),t.TgZ(3,"mat-stepper",2,3),t.TgZ(5,"mat-step",4),t.TgZ(6,"form",5),t.YNc(7,E,1,0,"ng-template",6),t.TgZ(8,"mat-form-field",7),t.TgZ(9,"mat-label"),t._uU(10,"N\xfamero de documento (C.I)"),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"mat-form-field",7),t.TgZ(13,"mat-label"),t._uU(14,"Nombre completo"),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.YNc(16,$,3,0,"div",10),t.TgZ(17,"div",0),t.TgZ(18,"button",11),t._uU(19,"Siguiente"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"mat-step",4),t.TgZ(21,"form",5),t.YNc(22,z,1,0,"ng-template",6),t.TgZ(23,"mat-form-field",7),t.TgZ(24,"mat-label"),t._uU(25,"Mutualista:"),t.qZA(),t.TgZ(26,"mat-select",12),t.YNc(27,R,2,2,"mat-option",13),t.qZA(),t.qZA(),t.TgZ(28,"mat-form-field",7),t.TgZ(29,"mat-label"),t._uU(30,"M\xe9dico de cabecera"),t.qZA(),t._UZ(31,"input",14),t.qZA(),t.TgZ(32,"mat-form-field",7),t.TgZ(33,"mat-label"),t._uU(34,"Servicio de emergencia:"),t.qZA(),t.TgZ(35,"mat-select",15),t.YNc(36,X,2,2,"mat-option",13),t.qZA(),t.qZA(),t.TgZ(37,"mat-form-field",7),t.TgZ(38,"mat-label"),t._uU(39,"Servicio de acompa\xf1ante:"),t.qZA(),t.TgZ(40,"mat-select",16),t.YNc(41,K,2,2,"mat-option",13),t.qZA(),t.qZA(),t.TgZ(42,"mat-form-field",7),t.TgZ(43,"mat-label"),t._uU(44,"Patologias"),t.qZA(),t.TgZ(45,"mat-select",17),t.YNc(46,W,2,2,"mat-option",13),t.qZA(),t.qZA(),t.TgZ(47,"mat-form-field",7),t.TgZ(48,"mat-label"),t._uU(49,"Cuidados"),t.qZA(),t._UZ(50,"textarea",18),t.qZA(),t.TgZ(51,"div",19),t.TgZ(52,"button",20),t._uU(53,"Anterior"),t.qZA(),t.TgZ(54,"button",11),t._uU(55,"Siguiente"),t.qZA(),t.qZA(),t.YNc(56,V,3,0,"div",10),t.qZA(),t.qZA(),t.TgZ(57,"mat-step"),t.YNc(58,tt,1,0,"ng-template",6),t.TgZ(59,"form",5),t.YNc(60,et,6,1,"div",21),t.qZA(),t.TgZ(61,"div",22),t.TgZ(62,"button",23),t.NdJ("click",function(){return o.addRow()}),t.TgZ(63,"mat-icon"),t._uU(64,"add"),t.qZA(),t.qZA(),t.qZA(),t.YNc(65,it,3,0,"div",10),t.TgZ(66,"div",19),t.TgZ(67,"button",20),t._uU(68,"Anterior"),t.qZA(),t.TgZ(69,"button",24),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(4);return o.finishSteps(r)}),t._uU(70," Guardar paciente "),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(5),t.Q6J("stepControl",o.firstFormGroup)("editable",o.isEditable),t.xp6(1),t.Q6J("formGroup",o.firstFormGroup),t.xp6(10),t.Q6J("ngIf",o.firstStepInvalid),t.xp6(4),t.Q6J("stepControl",o.secondFormGroup)("editable",o.isEditable),t.xp6(1),t.Q6J("formGroup",o.secondFormGroup),t.xp6(6),t.Q6J("ngForOf",o.hospitalsList),t.xp6(9),t.Q6J("ngForOf",o.emergencyServicesList),t.xp6(5),t.Q6J("ngForOf",o.partnerServicesList),t.xp6(5),t.Q6J("ngForOf",o.pathologiesList),t.xp6(10),t.Q6J("ngIf",o.secondStepInvalid),t.xp6(3),t.Q6J("formGroup",o.thirdFormGroup),t.xp6(1),t.Q6J("ngForOf",o.rows.controls),t.xp6(5),t.Q6J("ngIf",o.thirdStepInvalid))},directives:[A.Hw,g.ZT,x.Vq,x.C0,l._Y,l.JL,l.sg,x.VY,P.KE,P.hX,O.Nt,l.Fj,l.JJ,l.u,Z.O5,C.lW,x.Ic,F.gD,l.Q7,Z.sg,x.fd,I.ey,l.CE,l.x0,l.wV],styles:[".body[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center}form[_ngcontent-%COMP%]{padding-top:24px}.img[_ngcontent-%COMP%]{width:50%;border-radius:45%;margin-bottom:15px}.login-element-width[_ngcontent-%COMP%]{width:80%}.button[_ngcontent-%COMP%]{height:50px;margin:8px 8px 8px 0}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.input[_ngcontent-%COMP%]{width:100%}.input-half[_ngcontent-%COMP%]{width:47%}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.nav-1[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.nav-2[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),i})();var k=m(5319),D=m(2468);function nt(i,n){1&i&&(t.TgZ(0,"button",4),t._uU(1,"Cerrar"),t.qZA())}function at(i,n){1&i&&(t.TgZ(0,"button",4),t._uU(1," Aceptar "),t.qZA())}let M=(()=>{class i{constructor(e){this.data=e,this.subscription=new k.w,this.mode="",this.title="",this.text=""}ngOnInit(){this.subscription=this.data.currentMode.subscribe(e=>this.mode=e),this.subscription=this.data.currentTitle.subscribe(e=>this.title=e),this.subscription=this.data.currentText.subscribe(e=>this.text=e)}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.D))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dialog"]],decls:7,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","",4,"ngIf"],["mat-button","","mat-dialog-close",""]],template:function(e,o){1&e&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.YNc(5,nt,2,0,"button",3),t.YNc(6,at,2,0,"button",3),t.qZA()),2&e&&(t.xp6(1),t.Oqu(o.title),t.xp6(2),t.hij(" ",o.text,"\n"),t.xp6(2),t.Q6J("ngIf","show"===o.mode),t.xp6(1),t.Q6J("ngIf","validate"===o.mode))},directives:[g.uh,g.xY,g.H8,Z.O5,C.lW,g.ZT],styles:[""]}),i})();var p=m(2789);function st(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Nombre"),t.qZA())}function rt(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.name)}}function ct(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Documento"),t.qZA())}function lt(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.document)}}function mt(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"M\xe9dico cabecera"),t.qZA())}function pt(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.gpDoctor)}}function ut(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Patologias"),t.qZA())}function dt(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.pathologies.join(", ")," ")}}function ht(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Cuidados"),t.qZA())}function gt(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.caresAndComments," ")}}function ft(i,n){1&i&&(t.TgZ(0,"th",15),t._uU(1,"Contactos"),t.qZA())}function _t(i,n){if(1&i&&(t.TgZ(0,"td",16),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.contacts.length)}}function vt(i,n){1&i&&t._UZ(0,"th",15)}function Zt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"td",16),t.TgZ(1,"button",17,18),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().deletePatient(s.document)}),t.TgZ(3,"mat-icon",19),t._uU(4,"delete"),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(1),t.uIk("data-message-id",e._id)}}function Tt(i,n){1&i&&t._UZ(0,"tr",20)}function Ct(i,n){1&i&&t._UZ(0,"tr",21)}let bt=(()=>{class i{constructor(e,o,a,s,r){this.patientService=e,this.dialog=o,this.userService=a,this.data=s,this.miscService=r,this.subscription=new k.w,this.mode="",this.title="",this.text="",this.displayedColumns=["nombre","documento","medicoCabecera","patologias","cuidados","contactos","delete"],this.pacientes=[]}ngOnInit(){this.getPatients(),this.subscription=this.data.currentMode.subscribe(e=>this.mode=e),this.subscription=this.data.currentTitle.subscribe(e=>this.title=e),this.subscription=this.data.currentText.subscribe(e=>this.text=e)}ngOnDestroy(){this.subscription.unsubscribe()}getPatients(){let e=this.patientService.getPatientsLocal(),o=[];e.forEach(a=>{var s,r,c;let u=a;u.mutualist=(null===(s=this.miscService.getHospitalsLocal().find(d=>d))||void 0===s?void 0:s.name)||"",u.emergencyService=(null===(r=this.miscService.getEmertencyServicesLocal().find(d=>d))||void 0===r?void 0:r.name)||"",u.partnerService=(null===(c=this.miscService.getPartnerServicesLocal().find(d=>d))||void 0===c?void 0:c.name)||"";let f=[];u.pathologies.forEach(d=>{var h;f.push((null===(h=this.miscService.getPathologiesLocal().filter(b=>b._id===d)[0])||void 0===h?void 0:h.name)||"")}),u.pathologies=f,o.push(u)}),this.pacientes=o}createPatient(){const e=this.dialog.open(ot,{height:"80%",width:"700px",data:{closeDialog:()=>{e.close()}}});e.afterClosed().subscribe(o=>{this.ngOnInit()})}closePatientDialog(){this.dialog.closeAll()}deletePatient(e){this.patientService.deletePatientById(e).subscribe(o=>{200===o.status&&this.patientService.getPatientsByHome(this.userService.getHealthHome()).subscribe(a=>{this.patientService.setPatients(a.body||[])},a=>{this.patientService.setPatients([]),console.log(a)}).add(()=>{this.data.changeDialog("show","\xc9xito","Se elimino al paciente satisfactoriamente."),this.dialog.open(M),this.ngOnInit()})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T),t.Y36(g.uw),t.Y36(S.K),t.Y36(D.D),t.Y36(N))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-paciente"]],decls:31,vars:3,consts:[[1,"content"],[1,"row"],["mat-fab","","color","primary","aria-label","Crear paciente",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","documento"],["matColumnDef","medicoCabecera"],["matColumnDef","patologias"],["matColumnDef","cuidados"],["matColumnDef","contactos"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","",3,"click"],["element._id",""],["color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Pacientes"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.createPatient()}),t.TgZ(5,"mat-icon"),t._uU(6,"add"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"table",3),t.ynx(8,4),t.YNc(9,st,2,0,"th",5),t.YNc(10,rt,2,1,"td",6),t.BQk(),t.ynx(11,7),t.YNc(12,ct,2,0,"th",5),t.YNc(13,lt,2,1,"td",6),t.BQk(),t.ynx(14,8),t.YNc(15,mt,2,0,"th",5),t.YNc(16,pt,2,1,"td",6),t.BQk(),t.ynx(17,9),t.YNc(18,ut,2,0,"th",5),t.YNc(19,dt,2,1,"td",6),t.BQk(),t.ynx(20,10),t.YNc(21,ht,2,0,"th",5),t.YNc(22,gt,2,1,"td",6),t.BQk(),t.ynx(23,11),t.YNc(24,ft,2,0,"th",5),t.YNc(25,_t,2,1,"td",6),t.BQk(),t.ynx(26,12),t.YNc(27,vt,1,0,"th",5),t.YNc(28,Zt,5,1,"td",6),t.BQk(),t.YNc(29,Tt,1,0,"tr",13),t.YNc(30,Ct,1,0,"tr",14),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("dataSource",o.pacientes),t.xp6(22),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},directives:[C.lW,A.Hw,p.BZ,p.w1,p.fO,p.Dz,p.as,p.nj,p.ge,p.ev,p.XQ,p.Gk],styles:[".content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}","table[_ngcontent-%COMP%]{width:100%}"]}),i})();var _=(()=>{return(i=_||(_={})).pendiente="Pendiente",i.enCurso="En curso",i.cerrado="Cerrado",_;var i})();let H=(()=>{class i{constructor(e){this.http=e,this.token=localStorage.getItem("access_token")||""}getTaskByHome(e){return this.http.get(`https://healthhomeapi.herokuapp.com/api/task/homeId?_id=${e}`,{headers:{"Content-type":"application/json",Authorization:this.token},observe:"response"})}deleteTaskById(e){return this.http.delete(`https://healthhomeapi.herokuapp.com/api/task?_id=${e}`,{headers:{"Content-type":"application/json",Authorization:this.token},responseType:"text",observe:"response"})}createTask(e){const o={"Content-type":"application/json",Authorization:this.token},a=JSON.stringify(e);return this.http.post("https://healthhomeapi.herokuapp.com/api/task",a,{headers:o,observe:"response",responseType:"text"})}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(q.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var Q=m(3755),yt=m(3220),St=m(7539);function At(i,n){if(1&i&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&i){const e=n.$implicit,o=t.oxw();t.Q6J("value",e),t.xp6(1),t.hij(" ",o.statusList[e]," ")}}function xt(i,n){if(1&i&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}function Pt(i,n){if(1&i&&(t.TgZ(0,"mat-option",17),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e.name)}}let qt=(()=>{class i{constructor(e,o,a,s,r,c){this.http=e,this.fb=o,this.userService=a,this.patientService=s,this.taskService=r,this.parentData=c,this.enumKeys=Object.keys(_),this.statusList=_,this.priority=!1,this.patientsList=[],this.nursesList=[],this.disabled=!1,this.showSpinners=!0,this.showSeconds=!1,this.touchUi=!1,this.enableMeridian=!1,this.stepHour=1,this.stepMinute=1,this.taskFormGroup=this.fb.group({title:["",l.kI.required],description:[""],date:["",l.kI.required],statusTask:[],nurseSel:[void 0],patientSel:[],priority:[!1]})}ngOnInit(){this.getPatients(),this.getNurses()}getPatients(){this.patientService.getPatientsByHome(this.userService.getHealthHome()).subscribe(e=>{if(200===e.status&&null!==e.body){let o=[];e.body.map(a=>{o.push({_id:a._id,name:a.name})}),this.patientsList=o}},e=>{console.log(e)})}getNurses(){this.userService.getNursesByHome(this.userService.getHealthHome()).subscribe(e=>{if(200===e.status&&null!==e.body){let o=[];e.body.map(a=>{o.push({_id:a._id,name:a.name})}),this.nursesList=o}},e=>{console.log(e)})}saveTask(){var e,o,a,s,r,c,u;let f=this.formatDate(null===(e=this.taskFormGroup.get("date"))||void 0===e?void 0:e.value),d=null===(o=this.taskFormGroup.get("nurseSel"))||void 0===o?void 0:o.value;d=null===d?null:d._id;let h=null===(a=this.taskFormGroup.get("patientSel"))||void 0===a?void 0:a.value;h=null===h?null:h._id;let b={name:null===(s=this.taskFormGroup.get("title"))||void 0===s?void 0:s.value,description:null===(r=this.taskFormGroup.get("description"))||void 0===r?void 0:r.value,dateTime:f,status:null===(c=this.taskFormGroup.get("statusTask"))||void 0===c?void 0:c.value,assignedUser:d,assignedPatient:h,assignedHealthHome:this.userService.getHealthHome(),priority:null===(u=this.taskFormGroup.get("priority"))||void 0===u?void 0:u.value};this.taskService.createTask(b).subscribe(U=>{this.parentData.closeDialog()},U=>{console.log(U)})}formatDate(e){var o=""+(e.getMonth()+1),a=""+e.getDate(),s=e.getFullYear(),r=e.getHours(),c=e.getMinutes();return o.length<2&&(o="0"+o),a.length<2&&(a="0"+a),[s,o,a].join("-")+"T"+[r,c].join(":")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(q.eN),t.Y36(l.qu),t.Y36(S.K),t.Y36(T),t.Y36(H),t.Y36(g.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-crear-tarea"]],decls:37,vars:14,consts:[[1,"nav-1"],["mat-dialog-close",""],[3,"formGroup","ngSubmit"],["appearance","fill",1,"input"],["matInput","","formControlName","title","placeholder","Ej.: Cambiar suero","autocomplete","off"],["matInput","","formControlName","description","placeholder","Detalles sobre la tarea a realizar.","autocomplete","off"],["matInput","","placeholder","Choose a date","formControlName","date",3,"ngxMatDatetimePicker","min","disabled"],["matSuffix","",3,"for"],[3,"showSpinners","showSeconds","stepHour","stepMinute","touchUi"],["picker",""],["required","","name","statusTask","formControlName","statusTask"],[3,"value",4,"ngFor","ngForOf"],["name","nurseSel","formControlName","nurseSel"],["name","patientSel","formControlName","patientSel"],[1,"input"],["name","priority","formControlName","priority",1,"example-margin"],["type","submit","mat-raised-button","","color","primary",1,"login-element-width","button",3,"disabled"],[3,"value"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-icon",1),t._uU(2,"cancel"),t.qZA(),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return o.saveTask()}),t.TgZ(4,"mat-form-field",3),t.TgZ(5,"mat-label"),t._uU(6,"Nombre de la tarea"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"mat-form-field",3),t.TgZ(9,"mat-label"),t._uU(10,"Descripci\xf3n:"),t.qZA(),t._UZ(11,"input",5),t.qZA(),t.TgZ(12,"mat-form-field"),t._UZ(13,"input",6),t._UZ(14,"mat-datepicker-toggle",7),t._UZ(15,"ngx-mat-datetime-picker",8,9),t.qZA(),t.TgZ(17,"mat-form-field",3),t.TgZ(18,"mat-label"),t._uU(19,"Estado:"),t.qZA(),t.TgZ(20,"mat-select",10),t.YNc(21,At,2,2,"mat-option",11),t.qZA(),t.qZA(),t.TgZ(22,"mat-form-field",3),t.TgZ(23,"mat-label"),t._uU(24,"Asignar enfermero:"),t.qZA(),t.TgZ(25,"mat-select",12),t.YNc(26,xt,2,2,"mat-option",11),t.qZA(),t.qZA(),t.TgZ(27,"mat-form-field",3),t.TgZ(28,"mat-label"),t._uU(29,"Asignar paciente:"),t.qZA(),t.TgZ(30,"mat-select",13),t.YNc(31,Pt,2,2,"mat-option",11),t.qZA(),t.qZA(),t.TgZ(32,"div",14),t.TgZ(33,"mat-checkbox",15),t._uU(34,"\xbfEs prioritaria?"),t.qZA(),t.qZA(),t.TgZ(35,"button",16),t._uU(36," Guardar tarea "),t.qZA(),t.qZA()),2&e){const a=t.MAs(16);t.xp6(3),t.Q6J("formGroup",o.taskFormGroup),t.xp6(10),t.Q6J("ngxMatDatetimePicker",a)("min",o.minDate)("disabled",o.disabled),t.xp6(1),t.Q6J("for",a),t.xp6(1),t.Q6J("showSpinners",o.showSpinners)("showSeconds",o.showSeconds)("stepHour",o.stepHour)("stepMinute",o.stepMinute)("touchUi",o.touchUi),t.xp6(6),t.Q6J("ngForOf",o.enumKeys),t.xp6(5),t.Q6J("ngForOf",o.nursesList),t.xp6(5),t.Q6J("ngForOf",o.patientsList),t.xp6(4),t.Q6J("disabled",o.taskFormGroup.invalid)}},directives:[A.Hw,g.ZT,l._Y,l.JL,l.sg,P.KE,P.hX,O.Nt,l.Fj,l.JJ,l.u,Q.g2,yt.nW,P.R9,Q.AB,F.gD,l.Q7,Z.sg,St.oG,C.lW,I.ey],styles:[".body[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center}form[_ngcontent-%COMP%]{padding-top:24px}.img[_ngcontent-%COMP%]{width:50%;border-radius:45%;margin-bottom:15px}.login-element-width[_ngcontent-%COMP%]{width:80%}.button[_ngcontent-%COMP%]{height:50px;margin:8px 8px 8px 0}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.input[_ngcontent-%COMP%]{width:100%}.input-half[_ngcontent-%COMP%]{width:47%}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-around}.nav-1[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.nav-2[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),i})();function Nt(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Prioridad"),t.qZA())}function Ut(i,n){1&i&&(t.TgZ(0,"mat-icon",21),t._uU(1," arrow_upward "),t.qZA())}function kt(i,n){1&i&&(t.TgZ(0,"mat-icon",22),t._uU(1,"arrow_downward"),t.qZA())}function Dt(i,n){if(1&i&&(t.TgZ(0,"td",18),t.YNc(1,Ut,2,0,"mat-icon",19),t.YNc(2,kt,2,0,"mat-icon",20),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",e.priority),t.xp6(1),t.Q6J("ngIf",!e.priority)}}function Yt(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"T\xedtulo"),t.qZA())}function wt(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.name)}}function Ot(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Descripci\xf3n"),t.qZA())}function Ft(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.description)}}function It(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Fecha"),t.qZA())}function Mt(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.Oqu(e.dateTime)}}function Ht(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Estado"),t.qZA())}function Qt(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.status," ")}}function Lt(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Paciente"),t.qZA())}function Jt(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.assignedPatient," ")}}function Gt(i,n){1&i&&(t.TgZ(0,"th",17),t._uU(1,"Enfermero"),t.qZA())}function jt(i,n){if(1&i&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&i){const e=n.$implicit;t.xp6(1),t.hij(" ",e.assignedUser," ")}}function Bt(i,n){1&i&&t._UZ(0,"th",17)}function Et(i,n){1&i&&(t.TgZ(0,"td",18),t.TgZ(1,"button",23),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA(),t.qZA(),t.qZA())}function $t(i,n){1&i&&t._UZ(0,"th",17)}function zt(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"td",18),t.TgZ(1,"button",24,25),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().deleteTask(s._id)}),t.TgZ(3,"mat-icon",26),t._uU(4,"delete"),t.qZA(),t.qZA(),t.qZA()}if(2&i){const e=n.$implicit;t.xp6(1),t.uIk("data-message-id",e._id)}}function Rt(i,n){1&i&&t._UZ(0,"tr",27)}function Xt(i,n){1&i&&t._UZ(0,"tr",28)}const Kt=[{path:"",component:j,children:[{path:"patients",component:bt},{path:"tasks",component:(()=>{class i{constructor(e,o,a,s,r,c){this.taskService=e,this.dialog=o,this.userService=a,this.data=s,this.miscService=r,this.patientService=c,this.enumKeys=Object.keys(_),this.statusList=_,this.subscription=new k.w,this.mode="",this.title="",this.text="",this.displayedColumns=["priority","name","description","dateTime","assignedPatient","assignedUser","status","delete"],this.tareas=[]}ngOnInit(){this.getTasks(),this.subscription=this.data.currentMode.subscribe(e=>this.mode=e),this.subscription=this.data.currentTitle.subscribe(e=>this.title=e),this.subscription=this.data.currentText.subscribe(e=>this.text=e)}ngOnDestroy(){this.subscription.unsubscribe()}getTasks(){this.tareas=[],this.taskService.getTaskByHome(this.userService.getHealthHome()).subscribe(e=>{if(200===e.status&&null!==e.body){this.tareas=e.body;let o=[];e.body.forEach(a=>{var s,r;a.assignedUser=(null===(s=this.userService.getNursesLocal().find(c=>c._id===a.assignedUser))||void 0===s?void 0:s.name)||"",a.assignedPatient=(null===(r=this.patientService.getPatientsLocal().find(c=>c._id===a.assignedPatient))||void 0===r?void 0:r.name)||"",a.dateTime=this.formatDate(a.dateTime),o.push(a)}),this.tareas=o}},e=>{console.log(e)})}createTask(){const e=this.dialog.open(qt,{height:"80%",width:"700px",data:{closeDialog:()=>{e.close()}}});e.afterClosed().subscribe(o=>{this.ngOnInit()})}deleteTask(e){this.taskService.deleteTaskById(e).subscribe(o=>{200===o.status&&(this.data.changeDialog("show","\xc9xito","Se elimino la tarea satisfactoriamente."),this.dialog.open(M),this.ngOnInit())})}formatDate(e){let o=new Date(e);var a=""+(o.getMonth()+1),s=""+o.getDate(),r=o.getFullYear(),c=o.getHours(),u=o.getMinutes();return a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),[s,a,r].join("/")+" "+[c,u<10?"0"+u:u].join(":")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(H),t.Y36(g.uw),t.Y36(S.K),t.Y36(D.D),t.Y36(N),t.Y36(T))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tareas"]],decls:39,vars:3,consts:[[1,"content"],[1,"row"],["mat-fab","","color","primary","aria-label","Crear tarea",3,"click"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","priority"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","description"],["matColumnDef","dateTime"],["matColumnDef","status"],["matColumnDef","assignedPatient"],["matColumnDef","assignedUser"],["matColumnDef","edit"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["style","color: red",4,"ngIf"],["style","color: green",4,"ngIf"],[2,"color","red"],[2,"color","green"],["mat-icon-button",""],["mat-icon-button","",3,"click"],["element._id",""],["color","warn"],["mat-header-row",""],["mat-row",""]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"h1"),t._uU(3,"Tareas"),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return o.createTask()}),t.TgZ(5,"mat-icon"),t._uU(6,"add"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"table",3),t.ynx(8,4),t.YNc(9,Nt,2,0,"th",5),t.YNc(10,Dt,3,2,"td",6),t.BQk(),t.ynx(11,7),t.YNc(12,Yt,2,0,"th",5),t.YNc(13,wt,2,1,"td",6),t.BQk(),t.ynx(14,8),t.YNc(15,Ot,2,0,"th",5),t.YNc(16,Ft,2,1,"td",6),t.BQk(),t.ynx(17,9),t.YNc(18,It,2,0,"th",5),t.YNc(19,Mt,2,1,"td",6),t.BQk(),t.ynx(20,10),t.YNc(21,Ht,2,0,"th",5),t.YNc(22,Qt,2,1,"td",6),t.BQk(),t.ynx(23,11),t.YNc(24,Lt,2,0,"th",5),t._uU(25," //TODO "),t.YNc(26,Jt,2,1,"td",6),t.BQk(),t.ynx(27,12),t.YNc(28,Gt,2,0,"th",5),t._uU(29," //TODO "),t.YNc(30,jt,2,1,"td",6),t.BQk(),t.ynx(31,13),t.YNc(32,Bt,1,0,"th",5),t.YNc(33,Et,4,0,"td",6),t.BQk(),t.ynx(34,14),t.YNc(35,$t,1,0,"th",5),t.YNc(36,zt,5,1,"td",6),t.BQk(),t.YNc(37,Rt,1,0,"tr",15),t.YNc(38,Xt,1,0,"tr",16),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("dataSource",o.tareas),t.xp6(30),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},directives:[C.lW,A.Hw,p.BZ,p.w1,p.fO,p.Dz,p.as,p.nj,p.ge,p.ev,Z.O5,p.XQ,p.Gk],styles:[".content[_ngcontent-%COMP%]{padding:20px}.content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}","table[_ngcontent-%COMP%]{width:100%}"]}),i})()}]}];let Wt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[y.Bz.forChild(Kt)],y.Bz]}),i})(),Vt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[Z.ez,Wt,L.m]]}),i})()}}]);