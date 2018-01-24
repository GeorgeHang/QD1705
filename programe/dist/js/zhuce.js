window.onload=function(){
            var phone=document.getElementById("phone");
            phone.onblur=function(){
                var ovalue=phone.value.replace(/ /ig,"");
                phone.value=ovalue;
                if(!ovalue.length){
                    var mobile=document.getElementById("mobile");
                    mobile.innerHTML = "请输入正确的手机号";
                    mobile.className = "box";
                }else if(ovalue.length!=11){
                     var mobile=document.getElementById("mobile");
                        mobile.innerHTML = "请输入正确的手机号";
                        mobile.className = "box";
                }else if(!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(ovalue)){
                    var mobile=document.getElementById("mobile");
                        mobile.innerHTML = "请输入正确的手机号";
                        mobile.className = "box";
                }
            }
            var email=document.getElementById("email");
                email.onblur=function(){
                var oValue1 = email.value.replace(/ /ig, "");
                    email.value = oValue1;
                    if(oValue1.length > 18 || oValue1.length < 6){
                        var email1=document.getElementById("email1");
                        email1.innerHTML = "长度应为6~18个字符";
                        email1.className = "box";
                    }else if(/\d/.test(oValue1[0])){
                       email1.innerHTML = "邮件地址必需以英文字母开头";
                       email1.className = "box";
                    }else if(/_/.test(oValue1[oValue1.length - 1])){
                        email1.innerHTML = "请以英文字母或数字结尾";
                        email1.className = "box";
                    }else if(/\W/.test(oValue1)){
                        email1.innerHTML = "邮件地址需由字母、数字或下划线组成";
                        email1.className = "box";
                    }
            }

            var password=document.getElementById("password");
                password.onblur=function(){
                    var oValue2 = password.value.replace(/ /ig, "");
                    if(oValue2.length>20||oValue2.length<8){
                        var password1=document.getElementById("password1");
                        password1.innerHTML="密码必须在8~20个字符之间";
                        password1.className = "box";
                    }
                }

            var sure=document.getElementById("sure");
                sure.onblur=function(){
                    var oValue2 = password.value.replace(/ /ig, "");
                    var oValue3=sure.value.replace(/ /ig,"");
                    if(oValue2!=oValue3){
                    var sure1=document.getElementById("sure1");
                       sure1.innerHTML="两次密码填写不一致";
                       sure1.className = "box";
                    }
                }


            var test=document.getElementById("test");
                test.onblur=function(){
                    var oValue4=test.value.replace(/ /ig,"");
                    if(oValue4.length==0){
                       var test1=document.getElementById("test1");
                       test1.innerHTML="请输入校验码"
                       test1.className = "box";
                    }
                }
            var message=document.getElementById("message");
                message.onblur=function(){
                    var oValue5=message.value.replace(/ /ig,"");
                    if(oValue5.length==0){
                        var message1=document.getElementById("message1");
                        message1.innerHTML="请填写短信验证码";
                        message1.className = "box";
                    }
                }




        }


