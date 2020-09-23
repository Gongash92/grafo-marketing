// // var json = [{ value: '1', text: 'Muflon-papirna nalepnica' },
// // { value: '2', text: 'Konstdruk papir' },
// // ];

// // var options = $('<select/>');
// // $.each(json, function (id, ob) {
// //     options.append($('<option>',
// //         {
// //             value: ob.value,
// //             text: ob.text
// //         }));
// // });

// // $('#options').html(options.html());



// $(document).ready(function () {

//     load_json_data('papira');

//     function load_json_data(id, parent_id) {
//         var html_code = '';
//         $.getJSON("../../assets/js/selectboxex.json", function (data) {

//             html_code += '<option value="" disabled selected hidden>Izaberite ' + id + ' </option>';
//             $.each(data, function (key, value) {
//                 if (id == 'papira') {
//                     if (value.parent_id == '0') {
//                         html_code += '<option value="' + value.value + '" id="' + value.id + '">' + value.name + '</option>';
//                     }
//                 }
//                 else {
//                     if (value.parent_id == parent_id) {
//                         html_code += '<option value="' + value.value + '" id="' + value.id + '">' + value.name + '</option>';
//                     }
//                 }
//                 $('#' + id).html(html_code);

//             });
//         });

//     }

//     $(document).on('change', '#papira', function () {
//         var options_id = $(this).val();
//         if (options_id != '') {
//             load_json_data('tiraz', options_id);
//         }
//         else {
//             $('#tiraz').html('<option value="">Izaberite</option>');
//         }
//     });

// });


$('#papira').on('change', function () {
    if ($(this).val() === '2') {
        $('#color').attr('disabled', 'disabled');
    } else {
        $('#color').attr('disabled', false);
    }
});

// let priceListColor = {
//     1: 90,
//     10: 90,
//     11: 55,
//     100: 55,
//     250: 48,
//     500: 38
//   }

// let priceListColorSecond = {
//     1: 100,
//     10: 100,
//     11: 63,
//     100: 63,
//     250: 48,
//     500: 38 
// }

// function finalAmountOfPages() {
//     var totalAmountOfSets = document.getElementById("amountOfSetsInput").value || 0;

//     var finalPagesAmount = totalAmountOfPages;




// }


// function findPricePerColorPage(numberOfPages, initialNumber) {
//     pricePerColorPage = initialNumber;
//     for (var amount in priceListColor) {
//       if (numberOfPages > amount) {
//         pricePerColorPage = priceListColor[amount]
//       }
//     }
//     return pricePerColorPage;
//   }



let cena = [
    [90, 150, 100],
    [55, 75, 63],
    [48, 68, 56],
    [38, 63, 46]
];

function calculate() {

    let tiraz = 0;
    let papir = parseInt($('#papira :selected').val());
    let tabak = parseInt($('#tabak :selected').val());
    let a = $("#papira option:selected").text();
    let boja = $("#color option:selected").text();
    let tabakIme = $("#tabak option:selected").text();

    if (papir === 0) {
        let color = $('#color :selected').val();
        papir += parseInt(color);
        console.log(papir)
    }
    let color = $('#color :selected').val();
    console.log(color)

    let total = parseInt(document.getElementById("totalval").value);
    let tezina = parseInt($('input[name="typeOfListingRadio1"]:checked').val());


    if (total <= 10) {
        tiraz = 0;
        priceRange = "1-10";
    }
    else if ((total >= 11) && (total <= 100)) {
        tiraz = 1;
        priceRange = "11-100";

    }
    else if ((total >= 101) && (total <= 250)) {
        tiraz = 2;
        priceRange = "101-250";

    }
    else if ((total >= 251) && (total <= 500)) {
        tiraz = 3;
        priceRange = "251-500";

    }

    let ukupno = (cena[tiraz][papir] + tabak + tezina) * total;
    console.log(tiraz);
    console.log(papir);
    document.getElementById("ukupno").innerHTML = ukupno;
    document.getElementById("jedan").innerHTML = "Tiraz " + priceRange + ":";
    document.getElementById("komad").innerHTML = cena[tiraz][papir] + " DIN";
    document.getElementById("kolor").innerHTML = boja;
    document.getElementById("cena2").innerHTML = cena[tiraz][papir] + " DIN";
    document.getElementById("papiri").innerHTML = a + ": ";
    document.getElementById("ime").innerHTML = tabakIme + ": ";
    document.getElementById("cijena").innerHTML = tabak + " DIN";


    // document.getElementById("cijena").innerHTML = oe + " DIN";
}


// Pozivanje funkcije
$(document).ready(function () {
    $('#form').keyup(function () {
        calculate()
    });
    $('#form').change(function () {
        calculate()
    });
});