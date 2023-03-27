"use strict";(self.webpackChunkcms_palmeiras=self.webpackChunkcms_palmeiras||[]).push([[695],{85078:(H,f,i)=>{i.r(f),i.d(f,{SettingsPage:()=>p,default:()=>L});var e=i(67294),b=i(15482),O=i(97132),r=i(95489),v=i(41363),a=i(28702),C=i(19325),D=i(18446),y=i.n(D),n=i(57197);const M=t=>t;var T=i(18172),S=i(36968),z=i.n(S);const k={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},I=(t,l)=>(0,T.default)(t,s=>{switch(l.type){case"CANCEL_CHANGES":{s.modifiedData=t.initialData;break}case"GET_DATA_SUCCEEDED":{s.isLoading=!1,s.initialData=l.data,s.modifiedData=l.data;break}case"ON_CHANGE":{z()(s,["modifiedData",...l.keys.split(".")],l.value);break}case"ON_SUBMIT":{s.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{s.initialData=t.modifiedData,s.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{s.isSubmiting=!1;break}default:return t}});var B=i(16838);const p=()=>{const{formatMessage:t}=(0,O.useIntl)(),{lockApp:l,unlockApp:s}=(0,r.useOverlayBlocker)(),P=(0,r.useNotification)(),{get:A,put:N}=(0,r.useFetchClient)();(0,r.useFocusWhenNavigate)();const[{initialData:x,isLoading:R,isSubmiting:U,modifiedData:d},g]=(0,e.useReducer)(I,k,M),h=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const c=C.Z.CancelToken.source(),F=async()=>{try{const{data:{data:u}}=await A((0,n.IF)("settings"),{cancelToken:c.token});g({type:"GET_DATA_SUCCEEDED",data:u})}catch(u){console.error(u)}};return h.current&&F(),()=>{c.cancel("Operation canceled by the user."),h.current=!1}},[]);const E=y()(x,d),G=async o=>{if(o.preventDefault(),!E){l(),g({type:"ON_SUBMIT"});try{await N((0,n.IF)("settings"),d),g({type:"SUBMIT_SUCCEEDED"}),P({type:"success",message:{id:"notification.form.success.fields"}})}catch(c){console.error(c),g({type:"ON_SUBMIT_ERROR"})}s()}},m=({target:{name:o,value:c}})=>{g({type:"ON_CHANGE",keys:o,value:c})};return e.createElement(a.Main,{tabIndex:-1},e.createElement(b.Helmet,{title:t({id:(0,n.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:G},e.createElement(a.HeaderLayout,{title:t({id:(0,n.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(a.Button,{disabled:E,"data-testid":"save-button",loading:U,type:"submit",startIcon:e.createElement(v.Check,null),size:"S"},t({id:"global.save",defaultMessage:"Save"})),subtitle:t({id:(0,n.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(a.ContentLayout,null,R?e.createElement(r.LoadingIndicatorPage,null):e.createElement(a.Layout,null,e.createElement(a.Flex,{direction:"column",alignItems:"stretch",gap:12},e.createElement(a.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(a.Flex,{direction:"column",alignItems:"stretch",gap:4},e.createElement(a.Flex,null,e.createElement(a.Typography,{variant:"delta",as:"h2"},t({id:(0,n.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(a.Grid,{gap:6},e.createElement(a.GridItem,{col:6,s:12},e.createElement(a.ToggleInput,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:d.responsiveDimensions,hint:t({id:(0,n.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:t({id:(0,n.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{m({target:{name:"responsiveDimensions",value:o.target.checked}})}})),e.createElement(a.GridItem,{col:6,s:12},e.createElement(a.ToggleInput,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:d.sizeOptimization,hint:t({id:(0,n.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:t({id:(0,n.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{m({target:{name:"sizeOptimization",value:o.target.checked}})}})),e.createElement(a.GridItem,{col:6,s:12},e.createElement(a.ToggleInput,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:d.autoOrientation,hint:t({id:(0,n.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:t({id:(0,n.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:o=>{m({target:{name:"autoOrientation",value:o.target.checked}})}}))))))))))},L=()=>e.createElement(r.CheckPagePermissions,{permissions:B.Z.settings},e.createElement(p,null))}}]);
