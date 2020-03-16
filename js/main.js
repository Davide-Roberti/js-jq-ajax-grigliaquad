
$('.square').click(function(){
    var cliccato = $(this);
    var numeroUnivoco = $(this).children('span');
    // console.log(numeroUnivoco);
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data) {
            var numeroRandom = data.response;
            decisioneColore(numeroRandom, cliccato);
            scriviNumero(numeroUnivoco, numeroRandom)
        },
        error: function () {
            alert('ERROR!!!!!!')
        }
    });




});

function decisioneColore (numRandom, quadCliccato) {
    if (numRandom <= 5) {
        quadCliccato.addClass('giallo');
    } else {
        quadCliccato.addClass('verde');
    }
};

function scriviNumero (numUnivoco, numRandom) {
    numUnivoco.text(numRandom)
};
