
$('.square').click(function(){
    var cliccato = $(this);
    var numeroUnivoco = $(this).children('span').text();
    // console.log(numeroUnivoco);
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data) {
            var numeroRandom = data.response;
            decisioneColore(numeroRandom);
        },
        error: function () {
            alert('ERROR!!!!!!')
        }
    });
    function decisioneColore (numRandom) {
        if (numRandom <= 5) {
            cliccato.addClass('giallo');
        } else {
            cliccato.addClass('verde');
        }
    };
});
