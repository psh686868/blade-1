define(["View",getViewTemplatePath("bubble.layer"),"UIBubbleLayer"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"click #filter":"filterAction","click #orderBy":"orderByAction","click .demo1":"demo1Action","click .demo2":"demo2Action","click .demo3":"demo3Action","click .demo4":"demo4Action"},filterAction:function(){},orderByAction:function(){},demo1Action:function(a){if(!this.demo1){var b=[{name:'<span class="center">价格/星级</span>'},{name:'<span class="center">位置区域</span>'},{name:'<span class="center">品牌</span>'},{name:'<span class="center">测试</span>'}],d=$(a.currentTarget),e=parseInt(4*Math.random()),f=a.pageY>200?"down":"up";this.demo1=new c({triggerEl:d,datamodel:{data:b,dir:f,index:e},onClick:function(a,b,c){0,this.setIndex(c),this.hide()}})}this.demo1.show()},demo2Action:function(a){if(!this.demo2){var b=[{name:'<span class="center">价格/星级</span>'},{name:'<span class="center">位置区域</span>'},{name:'<span class="center">品牌</span>'},{name:'<span class="center">测试</span>'}],d=$(a.currentTarget),e=parseInt(4*Math.random()),f=a.pageY>200?"down":"up";this.demo2=new c({triggerEl:d,datamodel:{data:b,dir:f,index:e},onClick:function(a,b,c){0,this.setIndex(c),this.hide()}})}this.demo2.show()},demo3Action:function(a){if(!this.demo3){var b=[{name:'<span class="center">价格/星级</span>'},{name:'<span class="center">位置区域</span>'},{name:'<span class="center">品牌</span>'},{name:'<span class="center">测试</span>'}],d=$(a.currentTarget),e=parseInt(4*Math.random()),f=a.pageY>200?"down":"up";this.demo3=new c({triggerEl:d,datamodel:{data:b,dir:f,index:e},needMask:!0,onClick:function(a,b,c){0,this.setIndex(c),this.hide()}})}this.demo3.show()},demo4Action:function(a){if(!this.demo4){var b=[{name:'<span class="center">普通会员</span>'},{name:'<span class="center">vip</span>'},{name:'<span class="center">高级vip</span>'},{name:'<span class="center">钻石vip</span>'}],d=$(a.currentTarget),e=parseInt(4*Math.random()),f=a.pageY>200?"down":"up";this.demo4=new c({triggerEl:d,datamodel:{data:b,dir:f,index:e},onClick:function(a,b,c){0,this.setIndex(c),this.hide()}})}this.demo4.show()},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){this.demo1&&"show"==this.demo1.status&&this.demo1.hide(),this.demo2&&"show"==this.demo2.status&&this.demo2.hide(),this.demo3&&"show"==this.demo3.status&&this.demo3.hide(),this.demo4&&"show"==this.demo4.status&&this.demo4.hide()}})});