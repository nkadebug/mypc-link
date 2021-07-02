
$('#submit').click(function(){
    let method = $('#method').val();
    let url = $('#url').val();
    let data = {};
    try{
        data = JSON.parse($('#data'));
    }catch(e){
        alert(e);
        return;
    }
    let request = {method,url,data};
    console.log(request);
});