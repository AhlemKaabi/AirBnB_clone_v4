$('document').ready(function(){
    const api_URL = 'http://' + window.location.hostname + ':5001/api/v1/status';
    $.get(api_URL, function(data){
        if (data.status === "OK"){
            $('#api_status').addClass('available');
        }
        else{
            $('#api_status').removeClass('available');
        }
    });
});