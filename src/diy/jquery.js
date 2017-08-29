import $ from 'jquery'
// $.ajaxSetup({
  // headers:{
  //    access_token: "534654e7rtfhjgfk",
  // }
// })
$(window).ajaxSend(function(evt, request, settings){
  // 解决ie9下ajax缓存的问题
  if(!!window.ActiveXObject || "ActiveXObject" in window){
    console.log("settings.type=====>",settings.type);
    if(settings.type=="GET"||settings.type=="get"){
      console.log("是GET请求啊啊啊啊啊啊");
      if(settings.url.indexOf('?')!=-1){
      	settings.url+=("&nowDate="+new Date().getTime())
      }else{
      	settings.url+=("?nowDate="+new Date().getTime())
      }
      
    }
  }
})
$(window).ajaxSuccess(function(event, XMLHttpRequest, ajaxOptions){
  // console.log(XMLHttpRequest);
  if (XMLHttpRequest.status!== 200) { //http状态码
    window.alert('请求有误')
  }
});
$(window).ajaxError(function(event, XMLHttpRequest, ajaxOptions, thrownError){
  // thrownError 只有当异常发生时才会被传递
})
export default $
