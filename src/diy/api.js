import router from '../router'
import {Loading,MessageBox} from 'element-ui'
import md5 from 'js-md5'
const _baseUrl = 'http://192.168.1.50:8069'

// 发送请求时，重复使用的url可在这里统一修改
// 在需要使用的组件里 import api from '..'  api.getUrl(url)
import '../public/js/jquery.cookie'
export default {
  request(obj,that){
    if(!obj.type){obj.type="GET"}
    if(!obj.dataType){obj.dataType="json"}
    if(!obj.data){obj.data={}}
    // 不验证token的接口传true
    if(!obj.urlKey){
      var access_token=$.cookie("lingzhu_token"),
        user_id=JSON.parse($.cookie("lingzhu_userMsg")).user_id,
        user_code=JSON.parse($.cookie("lingzhu_userMsg")).user_code;
      if(!access_token){
        router.push('/login')
        return
      }else {
        obj.data.access_token=access_token
        if(user_code == 1){//采购商
          obj.data.partner_id=user_id
        }else{
          obj.data.supplier_id=user_id
        }
      }
    }
    //加密
    var arrs = [];
    $.each(obj.data, function(i,e) {
      var str = i + e;
      arrs.push(str)
    });
    arrs.sort();
    var sortStr = "";
    for(var i=0;i<arrs.length;i++){
      sortStr += arrs[i];
    }
    arrs = md5(sortStr);
    // console.log("加密后",obj.data);
    obj.data.secret_str = arrs;
  //加密完成
    $.ajax({
      type:obj.type,
      url:_baseUrl+obj.url,
      data:obj.data,
      dataType:obj.dataType,
      success:function(data){
        if((typeof data)==='string'){
          data=JSON.parse(data)
        }
        if(data.status==1000 ||data.status==200 ){
          return obj.callBack(data)
        }else if(data.status==1001){
          router.push('/login')
        }else{
          that.dialogMsg={
            msg:data.message,
            status:true
          }
        }
      },
      error:function(){
        that.dialogMsg={
          msg:"网络请求错误！",
          status:true
        }
      }

    })
  },
  getUrl(promise){
    if(promise){
      return _baseUrl+'?'+promise
    }else {
      return _baseUrl
    }
  },
  getToken(){
    return $.cookie("lingzhu_token")
  },
  getUsrMsg(){
    return JSON.parse($.cookie("lingzhu_userMsg"))
  },
  getUserId(){
    return JSON.parse($.cookie("lingzhu_userMsg")).user_id
  },
  log(){
    if(arguments[1]){
      console.log(arguments[0],arguments[1]);
    }else{
      console.log(arguments[0])
    }

  },
  getTime(){
   var date=new Date();
   date.setTime(date.getTime()+30*60*1000)
   return date;
  //设置date为当前时间+30*60*1000分 cookie过期时间
  },
  getHeight(that,number){
    if(!number){number=0}
    that.$nextTick(function(){
      if($(".cont").height()<$(window).height()-50){
        $(".userMsg>.msg").css('minHeight',$(window).height()-50+number)
        $(".cont").css('minHeight',$(window).height()-50)
      }else{
        $(".userMsg>.msg").css('minHeight',$(".cont").height()+number)
      }
    })
  },
  getFormatDate(date){
    var date=new Date(date), seperator1 = "-";
    var year = date.getFullYear(), month = date.getMonth() + 1, strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
   return  year + seperator1 + month + seperator1 + strDate;
  }
}
