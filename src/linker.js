document.getElementsByTagName('head')[0].innerHTML+='<style type="text/css">*[link]:hover{cursor: pointer;}</style>';for(var i=0;i<document.body.getElementsByTagName("*").length;i++){document.body.getElementsByTagName("*")[i].addEventListener("click",function(){window.open(this.getAttribute('link'),(this.getAttribute('target')||typeof(this.getAttribute('target')))=='undefined'?'_self':this.getAttribute('target'))})}