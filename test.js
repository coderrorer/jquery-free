/**
 * Created by denniszhang on 16/3/2.
 */
    "use strict"
class Overlay {
    constructor() {
        var node=document.createElement('div');
        node.id='overlay';
        node.className='Hide';
        $('body').appendChild(node);
        var that=this;
        node.addEventListener('click',function(){
            that._close();
        })
    }
    open(){
        $('#overlay').removeClass('Hide')
    }
    _close(){
        $('#overlay').addClass('Hide');
    }
}
var overlay=new Overlay();
$('button').addEventListener('click',function() {
    overlay.open();
    $().ajax({
        "method" : "get",
        "url" : "./data.json",
        "data" : {
            "name": "gaga",
            "age": 10000000,
            "num": "12346&598"
        },
        success:function(res){
            console.log(res.code)
        },
        Error : function(msg){
            alert(msg);
        },
        "async" : true
    })
});