<template>
  <div class="main">
    <!-- Split button -->
    <div class="btn-group">
      <button type="button" class="btn btn-danger">Action</button>
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a href="#">Separated link</a></li>
      </ul>
    </div>
    这是主页
    <p @click="sendAjax('http://127.0.0.1:8081/kuayu')">axios跨域测试</p>
    <p @click="jQueryAjax('../../../static/test.json')">本地测试</p>
  </div>
</template>
<script>
	export default{
		name: 'maindex',
    data:function(){
        return {

        }
    },
    components:{
    },
    methods:{
      sendAjax(url){
        this.$http(url).then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      },
      jQueryAjax(url){
        $.ajax({
          url:url,
          type:"GET",
          dataType:"json",
          success:function(res){
            console.log("ajax=>",res)
          }
        })
      }
    }
	}
</script>
<style lang='less' scoped>
  @import  '../../public/css/comment.less';

</style>
