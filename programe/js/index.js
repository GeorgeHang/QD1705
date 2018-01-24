define(["jquery"],function($){

    var index=function(){
        // alert(1);
        $.ajax({
            url:"../data/hot.json",
            type:"GET",
            success:  function(res){
                var html = "";
                for(var i = 0; i < res.length; i++){
                    html += `<li><div><a target="_blank"
                    href="https://www.shop.philips.com.cn/item">
                    <img src="${res[i].image}"></a></div>
                <a target="_blank" href="https://www.shop.philips.com.cn/item">${res[i].title}<br/>S7310/12</a>
            </li>`
                }
                $("#div6 ul").html(html);
            }
        })
        $.ajax({
            url:"../data/star.json",
            type:"GET",
            success:function(res){
                var html="";
                for(var i=0;i<res.length;i++){
                    html+=`<li><a href="#"><img src="${res[i].image}"></a></li>`
                }
                $("#div8 ul").html(html);
            }
        })

        $.ajax({
            url:"../data/jingpin.json",
            type:"GET",
            success:function(res){
                var html="";
                html=`<a target="_blank" href="#"><img src="${res[0].image}"></a>`
                $("#div11").html(html);
            }

        })

        $.ajax({
            url:"../data/look.json",
            type:"GET",
            success:function(res){
                var html="";
                for(i=0;i<res.length;i++){
                    html+=`<li>
                    <a href="#">${res[i].title}</a>
                    <div id="div21">
                    <a href="#"><img src="${res[i].image}"></a>
                    </div>
                    <div id="div22">
                    </div>
                    <div id="div23">
                    <a target="_blank" href="#">立即查看</a>
                    </div>
                </li>`
                }
                $("#div20").find("ul").html(html);
            }
        });

        $.ajax({
            url:"../data/最热排行.json",
            type:"GET",
            success:function(res){
                var html="";
                for(i=0;i<res.length;i++){
                    html+=`<li>
                            <span>${i+1}</span>
                            <a href="#"><img src="${res[i].image}"></a>
                            <div id="div29">
                            <a target="_blank" href="#">${res[i].title}</a>
                            </div>
                    </li>`
                }
                $("#div27").find("#div28").find("ul").html(html);
            }
        })



        // alert(JSON.stringify([{title: "飞利浦 干湿两用剃须刀 S7310/12",
        //     image: "../images/干湿两用.jpg"},
        //     {title: "飞利浦 Sonicare声波震动牙刷 HX8962/05",
        //     image: "../images/14803998111376212_120X120.jpg"},
        //     {title: "飞利浦 全自动意式咖啡机 HD8824/07",
        //     image: "../images/14822208205992534_120X120.jpg"},
        //     {title: "飞利浦 空气净化器 AC4076/01",
        //     image: "../images/14659564558226313_120X120.jpg"},
        //     {title: "飞利浦 电吹风 BHC201/05",
        //     image: "../images/14658968220385777_120X120.jpg"}]))

        // alert(JSON.stringify([{image:"../images/14658962713965761_180X180.jpg",title:"飞利浦 干湿两用电动剃须刀 S5077/03"},
        //                     {image:"../images/14658968220385777_120X120.jpg",title:"飞利浦 Sonicare声波震动牙刷 HX8962/05"},
        //                     {image:"../images/14803998111376212_120X120.jpg",title:"飞利浦 Sonicare声波震动牙刷 HX8962/05"},
        //                     {image:"../images/14659626931616311_180X180.jpg",title:"飞利浦 超音波美肤滋养仪 SC2800/00"},
        //                     {image:"../images/剃须刀.jpg",title:"飞利浦 干湿两用脱毛器 BRE630/00"}
        //             ]))
    }
    return {
        index:index
    }


})