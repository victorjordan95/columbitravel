$('#js-more-options').on( "click", function() {
    $('#js-options-input').toggleClass('is-hidden');
});

$('#js-closeOptions').on( "click", function() {
    $('#js-options-input').toggleClass('is-hidden');
});


$('#js-hotel-quartos').on('change', function () {
    
    const id = $('#js-hotel-person');
    id.html('');
    
    for (let index = 0; index < this.value; index++) {
        id.append(`
        <div class="person mb-2">
            <span>Quarto ${index + 1}</span>
            <span>ADULTOS <br> + de 18 anos</span>
            <div class="form-group">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <span>CRIANÇAS <br> 2 a 17 anos</span>
            <div class="form-group">
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
        </div>
        `);
    }
});

$('#js-roteiros-quartos').on('change', function () {
    const id = $('#js-roteiros-person');
    id.html('');
    
    for (let index = 0; index < this.value; index++) {
        id.append(`
            <div class="person mb-2">
                <span>Quarto ${index + 1}</span>
                <span>Adultos <br> + de 18 anos</span>
                <div class="form-group">
                    <select class="form-control">
                        <option selected>3</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <span>CRIANÇAS <br> 2 a 17 anos</span>
                <div class="form-group">
                    <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            </div>
        `);
    }
});

$("#owl-clients").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    loop: true,
    navText: ["<svg class='icone icon-arrow-left'><use xlink:href='#icon-arrow-left'></use></svg>", "<svg class='icone icon-arrow-right'><use xlink:href='#icon-arrow-right'></use></svg>"],
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$(".js-toggleLink").click(function () {
    $(this).children('i').toggleClass('down');
});

// Select all
$("#js-checkAll").click( function() {
    $(".js-airline").attr('checked', true);
    return false;
});
// Select none
$("#js-uncheckAll").click( function() {
    $(".js-airline").attr('checked', false);
    return false;
});