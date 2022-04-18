"use strict";(self.webpackChunkcracca=self.webpackChunkcracca||[]).push([[133],{8614:function(e,a,r){r.d(a,{Z:function(){return n}});var o=r(2791);function n(e){var a=e.title,r=e.description,n=(0,o.useRef)(document.title),s=(0,o.useRef)(document.querySelector('meta[name="description"]').getAttribute("content"));(0,o.useEffect)((function(){var e=n.current;return a&&(document.title="".concat(a," - Corralon Racca (San Francisco)")),function(){return document.title=e}}),[a]),(0,o.useEffect)((function(){var e=document.querySelector('meta[name="description"]'),a=s.current;return r&&e.setAttribute("content",r),function(){return e.setAttribute("content",a)}}),[r])}},1133:function(e,a,r){r.r(a),r.d(a,{default:function(){return p}});var o=r(1413),n=r(885),s=r(1363),t=r(2791),c=r(8868),i=r(3504),l=r(5667),m=r(8614),d=r(184);function u(){return(0,d.jsxs)("figure",{className:"enviarDatos",children:[(0,d.jsx)("img",{className:"enviarDatos__img",src:"./FormImg/enviandoDatos.gif",loading:"lazy",alt:"Enviando datos del formulario."}),(0,d.jsx)("figcaption",{className:"enviarDatos__mensaje",children:"ENVIADO!"})]})}function p(){var e,a,r,p,x,j,N,h,v,E,f,C,A;(0,m.Z)({title:"Contactanos",description:"Productos de calidad, atencion rapida y los mejores precios nunca faltaron con nosotros. Si necesitas saber mas, puedes contactarnos de mil maneras sencillas."}),(0,t.useEffect)((function(){l.NY.scrollToTop()}),[]);var g=(0,t.useState)(!1),R=(0,n.Z)(g,2),I=R[0],b=R[1],y=(0,c.cI)({defaultValues:{nombre:"",apellido:"",correo:"",mensaje:"",compra:""}}),O=y.register,S=y.handleSubmit,F=y.formState.errors,q=y.reset;return(0,d.jsxs)("section",{className:"secForm",children:[(0,d.jsx)(i.rU,{to:"/",className:"btnVolverInicio",children:(0,d.jsx)(s.G,{icon:"home"})}),(0,d.jsx)("section",{className:"contactoImagen",children:(0,d.jsx)("figure",{className:"contenedorImg",children:(0,d.jsx)("img",{loading:"lazy",className:"contenedorImg__img",src:"./FormImg/fondocontacto.jpg",alt:"Contactanos para conseguir lo que necesitas, datos de contacto CORRALON RACCA, presupuestos."})})}),(0,d.jsxs)("article",{className:"contactoTexto",children:[(0,d.jsxs)("section",{className:"formasContacto",children:[(0,d.jsx)("p",{className:"formasContacto__items",children:"CONTACTANOS"}),(0,d.jsx)("p",{className:"formasContacto__items",children:"Si bien somos excelentes para leer la mente, existen formas m\xe1s sencillas de comunicarnos con usted y responder sus preguntas."}),(0,d.jsxs)("p",{className:"formasContacto__items",children:["Contacto por E-mail: ",(0,d.jsx)("a",{href:"mailto:info@corralonracca.com.ar?subject=Quisiera contactarme con Corralon Racca S.R.L&body=Hola! Soy ...",className:"infoContacto--green",children:"info@corralonracca.com.ar"})]}),(0,d.jsxs)("p",{className:"formasContacto__items",children:["Contacto por Telefono: ",(0,d.jsx)("span",{className:"infoContacto--green",children:"+54 (3564) 426261 / 437847"})]})]}),(0,d.jsx)("section",{className:"contactoAviso",children:(0,d.jsx)("p",{className:"contactoAviso__texto",children:"Si tiene alguna pregunta, no dude en enviarnos una l\xednea. Si no recibe una respuesta de inmediato, es posible que estemos enviando algo al medio de la nada. Nos pondremos en contacto con usted tan pronto como podamos. \xa1Es una promesa!"})})]}),(0,d.jsxs)("form",{className:"contFormulario",onSubmit:S((function(e){b(!0),setTimeout((function(){b(!1)}),1500),q()})),children:[I&&(0,d.jsx)(u,{}),(0,d.jsxs)("section",{className:"formulario",children:[(0,d.jsxs)("div",{className:"grupoFormulario",children:[(0,d.jsx)("label",{htmlFor:"nombre",className:"etiquetaForm",children:"Nombre:"}),(0,d.jsx)("input",(0,o.Z)({className:"inputInfoForm ".concat(F.nombre&&"errorEnviar"),type:"text",autoComplete:"given-name",placeholder:"Escribe tu nombre",id:"nombre"},O("nombre",{required:!0,maxLength:50,pattern:{value:/^[a-z ,.'-]+$/i}}))),"pattern"===(null===(e=F.nombre)||void 0===e?void 0:e.type)&&(0,d.jsx)("p",{className:"alertaError",children:"DATOS INCORRECTOS, VUELVA A ESCRIBIR"}),"maxLength"===(null===(a=F.nombre)||void 0===a?void 0:a.type)&&(0,d.jsx)("p",{className:"alertaError",children:"MAXIMO 50 CARACTERES"}),"required"===(null===(r=F.nombre)||void 0===r?void 0:r.type)&&(0,d.jsx)("p",{className:"alertaError",children:"CAMPO REQUERIDO"})]}),(0,d.jsxs)("div",{className:"grupoFormulario",children:[(0,d.jsx)("label",{htmlFor:"apellido",className:"etiquetaForm",children:"Apellido:"}),(0,d.jsx)("input",(0,o.Z)({className:"inputInfoForm ".concat(F.apellido&&"errorEnviar"),autoComplete:"family-name",type:"text",placeholder:"Escribe tu apellido",id:"apellido"},O("apellido",{required:!0,maxLength:50,pattern:{value:/^[a-z ,.'-]+$/i}}))),"pattern"===(null===(p=F.apellido)||void 0===p?void 0:p.type)&&(0,d.jsx)("p",{className:"alertaError",children:"DATOS INCORRECTOS, VUELVA A ESCRIBIR"}),"maxLength"===(null===(x=F.apellido)||void 0===x?void 0:x.type)&&(0,d.jsx)("p",{className:"alertaError",children:"MAXIMO 50 CARACTERES"}),"required"===(null===(j=F.apellido)||void 0===j?void 0:j.type)&&(0,d.jsx)("p",{className:"alertaError",children:"CAMPO REQUERIDO"})]}),(0,d.jsxs)("div",{className:"grupoFormulario",children:[(0,d.jsx)("label",{htmlFor:"correo",className:"etiquetaForm",children:"Correo Electronico:"}),(0,d.jsx)("input",(0,o.Z)({className:"inputInfoForm ".concat(F.correo&&"errorEnviar"),autoComplete:"email",type:"email",placeholder:"Escribe tu correo electronico",id:"correo"},O("correo",{required:!0,maxLength:150,pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}}))),"pattern"===(null===(N=F.correo)||void 0===N?void 0:N.type)&&(0,d.jsx)("p",{className:"alertaError",children:"DATOS INCORRECTOS, VUELVA A ESCRIBIR"}),"maxLength"===(null===(h=F.correo)||void 0===h?void 0:h.type)&&(0,d.jsx)("p",{className:"alertaError",children:"MAXIMO 150 CARACTERES"}),"required"===(null===(v=F.correo)||void 0===v?void 0:v.type)&&(0,d.jsx)("p",{className:"alertaError",children:"CAMPO REQUERIDO"})]}),(0,d.jsxs)("div",{className:"grupoFormulario",children:[(0,d.jsx)("label",{className:"etiquetaForm",children:"Tipo de compra:"}),(0,d.jsx)("label",{htmlFor:"compraMayor",className:"etiquetaForm",children:"MAYORISTA"}),(0,d.jsx)("input",(0,o.Z)({name:"compras",className:"inputInfoForm ".concat(F.compra&&"errorEnviar"),type:"radio",value:"mayorista",id:"compraMayor"},O("compra",{required:!0}))),"required"===(null===(E=F.compra)||void 0===E?void 0:E.type)&&(0,d.jsx)("p",{className:"alertaError",children:"CAMPOS REQUERIDO"}),(0,d.jsx)("label",{htmlFor:"compraMinor",className:"etiquetaForm",children:"MINORISTA"}),(0,d.jsx)("input",(0,o.Z)({name:"compras",className:"inputInfoForm ".concat(F.compra&&"errorEnviar"),type:"radio",value:"minorista",id:"compraMinor"},O("compra",{required:!0})))]}),(0,d.jsxs)("div",{className:"grupoFormulario",children:[(0,d.jsx)("textarea",(0,o.Z)({id:"mensaje",placeholder:"Dejanos un mensaje...",className:"inputInfoForm texto ".concat(F.mensaje&&"errorEnviar")},O("mensaje",{maxLength:255,required:!0,pattern:{value:/[A-Za-z]/}}))),"pattern"===(null===(f=F.mensaje)||void 0===f?void 0:f.type)&&(0,d.jsx)("p",{className:"alertaError",children:"MENSAJE INCORRECTO, VUELVA A ESCRIBIR"}),"maxLength"===(null===(C=F.mensaje)||void 0===C?void 0:C.type)&&(0,d.jsx)("p",{className:"alertaError",children:"MAXIMO 255 CARACTERES"}),"required"===(null===(A=F.mensaje)||void 0===A?void 0:A.type)&&(0,d.jsx)("p",{className:"alertaError",children:"CAMPO REQUERIDO"})]}),(0,d.jsx)("input",{type:"submit",value:"ENVIAR",className:"btnEnviar"})]}),(0,d.jsx)("figure",{className:"gifContacto",children:(0,d.jsx)("img",{className:"gifContacto__gif",src:"./FormImg/formImgEnviado.png",alt:"sobre ilustrativo, envio de datos a corralon racca",loading:"lazy"})})]})]})}}}]);
//# sourceMappingURL=133.7e6a7e9b.chunk.js.map