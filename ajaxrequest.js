$(document).ready(function(){
        $("#convertor").submit(function(e){
                var arr=$('#from').val().split(' ');
                var from=arr[0]; 
                var arr=$('#to').val().split(' ');
                to=arr[0];  
                                         
                    $.ajax({
                                url:"http://api.fixer.io/latest",
                                type:'get',
                                data:"base="+from,
                                success:function(message){
                                    if(from==to)
                                        $('#to_value').val($('#from_value').val());
                                    else
                                        $('#to_value').val(message["rates"][to]*$('#from_value').val());
                                    }
                            });
                e.preventDefault();
                });
});
