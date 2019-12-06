

$( document ).ready(function() {



});

function MostrarNotificacion(value)
{
    for(var i = 1; i <= 6; i++)
    {
        $(".cat"+i).hide();
    }

    $(".cat"+value).show();
    
    if(value === 7)
    {
        for(var i = 1; i <= 6; i++)
        {
            $(".cat"+i).show();
        }
    }

}