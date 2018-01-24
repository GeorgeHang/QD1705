window.onload=function(){
    var username=document.getElementById("username");
    username.onblur=function(){
        var ovalue=username.value.replace(/ /ig,"");
        username.value=ovalue;
        if(!ovalue.length){
            var name=document.getElementById("name");
            name.innerHTML="请输入用户名";
            name.className="box";
        }
        var password=document.getElementById("password");
        password.onblur=function(){
            var ovalue1=password.value.replace(/ /ig,"");
            password.value=ovalue1;
            if(!ovalue1.length){
                var pass=document.getElementById("pass");
                pass.innerHTML="请输入密码";
                pass.className="box";
            }
        var test=document.getElementById("test");
        test.onblur=function(){
            var ovalue2=test.value.replace(/ /ig,"");
            test.value=ovalue2;
            if(!ovalue2){
                var test1=document.getElementById("test1");
                test1.innerHTML="请输入验证码";
                test1.className="box";
            }
        }
        }
    }
}