var vm=new Vue({
    el:"#app",

    data:{
        dt:new Date(),
        week : new Date().getDay(),
        msg: '我爱李沙蔓小乖乖,今天是在一起的第330天，耶✌️～～～',
        intervalId: null
    },
    created(){
        this.lang()
    },
    methods:{
        lang(){
        // console.log(this.msg)
        //获取到头的第一格字符
        if(this.intervalId!=null)return;
        var _this = this

        //这里可以简写成setInterval( () => {
        this.intervalId = setInterval(function(){
            var start = _this.msg.substring(0, 1)
            //获取到后面的所有字符
            var end = _this.msg.substring(1)
            //重新拼接得到新的字符串，并赋值给 _this.msg
            _this.msg = end + start
        }, 400)
        //VM实例会监听自己的所有改变,只要一发生改动就会自动把最新的数据从data上同步到页面中去
        //【好处： 程序员只需要关心数据，不需要考虑如何重新渲染DOM】
        },
        chuxian(){
            document.getElementById("yincang").style="dispaly:true"
        }
    },
    filters:{//定义私有过滤器 有两个条件 【过滤器名称 和 处理函数】
        dateFormat : function(dateStr, pattern=''){
            var dt = new Date(dateStr)
            //yyyy-mm-dd
            var y =dt.getFullYear()
            var m=(dt.getMonth() + 1).toString().padStart(2,'0')
            var d=dt.getDate().toString().padStart(2,'0')
            
            

            if(pattern.toLowerCase()=='yyyy-mm-dd'){
                return `${y}-${m}-${d}`
            }else {
                var h=dt.getHours().toString().padStart(2,'0')
                var mi = dt.getMinutes().toString().padStart(2,'0')
                var s=dt.getSeconds().toString().padStart(2,'0')

                return `${y}-${m}-${d} ${h}:${mi}:${s} +++`
            }
        }
    },

    directives:{ //自定义私有指令
        'fontweight' :{
            bind: function(el, binding){
                el.style.fontWeight = binding.value
            }
        }  ,
        'fontsize':function(el, binding){ //对于针对bind或者update钩子函数的操作，可以这样简写，这就同时写了两个钩子函数
            el.style.fontSize= parseInt(binding.value)+'px' //曾强代码的健壮性
        }
    }
})