"use strict";(self.webpackChunkcms_palmeiras=self.webpackChunkcms_palmeiras||[]).push([[9514],{87532:(P,v,t)=>{t.r(v),t.d(v,{default:()=>H});var e=t(67294),y=t(97132),T=t(18446),A=t.n(T),N=t(45697),r=t.n(N),n=t(28702),g=t(95489),m=t(41363),d=t(15537),E=t(49826);const C=({sort:s="",pageSize:o=10,onChange:i})=>{const{formatMessage:l}=(0,y.useIntl)();return e.createElement(n.Box,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(n.Grid,{gap:4},e.createElement(n.GridItem,{s:12,col:6},e.createElement(n.Select,{label:l({id:(0,d.Z)("config.entries.title"),defaultMessage:"Entries per page"}),hint:l({id:(0,d.Z)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>i({target:{name:"pageSize",value:a}}),name:"pageSize",value:o,"test-pageSize":o,"data-testid":"pageSize-select"},E.ay.map(a=>e.createElement(n.Option,{"data-testid":`pageSize-option-${a}`,key:a,value:a},a)))),e.createElement(n.GridItem,{s:12,col:6},e.createElement(n.Select,{label:l({id:(0,d.Z)("config.sort.title"),defaultMessage:"Default sort order"}),hint:l({id:(0,d.Z)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>i({target:{name:"sort",value:a}}),name:"sort",value:s,"test-sort":s,"data-testid":"sort-select"},E.Fo.map(a=>e.createElement(n.Option,{"data-testid":`sort-option-${a.value}`,key:a.key,value:a.value},l({id:(0,d.Z)(a.key),defaultMessage:`${a.value}`})))))))};C.propTypes={sort:r().string.isRequired,pageSize:r().number.isRequired,onChange:r().func.isRequired};var R=t(18172),I=t(36968),B=t.n(I),O=t(27361),z=t.n(O),f=t(55994);const D=`${f.Z}/ON_CHANGE`,S=`${f.Z}/SET_LOADED`,h={initialData:{},modifiedData:{}},M=s=>({...h,initialData:s,modifiedData:s}),$=(s=h,o)=>(0,R.default)(s,i=>{switch(o.type){case D:{B()(i,["modifiedData",...o.keys.split(".")],o.value);break}case S:{const l=M(z()(i,["modifiedData"],{}));i.initialData=l.initialData,i.modifiedData=l.modifiedData;break}default:return i}}),G=({name:s,value:o})=>({type:D,keys:s,value:o}),W=()=>({type:S});var F=t(60862);const L=({config:s})=>{const{trackUsage:o}=(0,g.useTracking)(),{formatMessage:i}=(0,y.useIntl)(),l=(0,g.useNotification)(),{mutateConfig:a}=(0,F.Z)(),{isLoading:b}=a,[k,U]=(0,e.useState)(!1),p=()=>U(u=>!u),[V,Z]=(0,e.useReducer)($,h,()=>M(s)),{initialData:x,modifiedData:c}=V,Y=u=>{u.preventDefault(),p()},j=async()=>{o("willEditMediaLibraryConfig"),await a.mutateAsync(c),p(),Z(W()),l({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},J=({target:{name:u,value:K}})=>{Z(G({name:u,value:K}))};return(0,g.useFocusWhenNavigate)(),e.createElement(n.Layout,null,e.createElement(n.Main,{"aria-busy":b},e.createElement("form",{onSubmit:Y},e.createElement(n.HeaderLayout,{navigationAction:e.createElement(g.Link,{startIcon:e.createElement(m.ArrowLeft,null),to:`/plugins/${f.Z}`,id:"go-back"},i({id:(0,d.Z)("config.back"),defaultMessage:"Back"})),primaryAction:e.createElement(n.Button,{size:"S",startIcon:e.createElement(m.Check,null),disabled:A()(c,x),type:"submit"},i({id:"global.save",defaultMessage:"Save"})),subtitle:i({id:(0,d.Z)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:i({id:(0,d.Z)("config.title"),defaultMessage:"Configure the view - Media Library"})}),e.createElement(n.ContentLayout,null,e.createElement(C,{"data-testid":"settings",pageSize:c.pageSize||"",sort:c.sort||"",onChange:J})),e.createElement(g.ConfirmDialog,{bodyText:{id:(0,d.Z)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(m.Check,null),isConfirmButtonLoading:b,isOpen:k,onToggleDialog:p,onConfirm:j,variantRightButton:"success-light"}))))};L.propTypes={config:r().shape({pageSize:r().number,sort:r().string}).isRequired};const H=L}}]);
