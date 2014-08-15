
url = "https://github.com/caok2709/node-webkit-ng-require/blob/master/package.json";
    
    $.getJson(url,function(data){
       console.log("success"); 
       var items={};
       var newestversion;
       $.each(data,function(key,val){
          if (key=="version") alert(val);
       });
    });