import $ from 'jquery'
$.ajaxSetup({
  type:"POST",
  headers:{
     Accept: "application/json; charset=utf-8",
  }
})
$(window).ajaxSuccess(function(event, XMLHttpRequest, ajaxOptions){
  console.log(XMLHttpRequest);
  if (XMLHttpRequest.status!== 200) { //http状态码
    window.alert('请求有误')
  }
});
$(window).ajaxError(function(event, XMLHttpRequest, ajaxOptions, thrownError){
  // thrownError 只有当异常发生时才会被传递
})
export default $
