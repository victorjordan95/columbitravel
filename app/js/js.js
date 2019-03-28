$('#js-more-options').on( "click", function() {
    $('#js-options-input').toggleClass('is-hidden');
});

$('#js-closeOptions').on( "click", function() {
    $('#js-options-input').toggleClass('is-hidden');
});


$('#js-hotel-quartos').on('change', function () {
    
    const inputHTML = `
    <div class="person mb-2">
        <span>Quarto 1</span>
        <span>ADULTOS <br> + de 18 anos</span>
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
                <option selected>3</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    </div>
    `;
    cleanAndAppendHTML(this.value, inputHTML, '#js-hotel-person');
});

$('#js-roteiros-quartos').on('change', function () {
    const inputHTML = `
    <div class="person mb-2">
        <span>Quarto 1</span>
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
                <option selected>3</option>
                <option>1</option>
                <option>2</option>
            </select>
        </div>
    </div>
    `;
    cleanAndAppendHTML(this.value, inputHTML, '#js-roteiros-person');
});

/**
 * When Change the quantity of
 * rooms in the HTML, append the 
 * amount of select input
 */
function cleanAndAppendHTML(count, html, id) {
    $(id).html('');
    
    for (let index = 0; index < count; index++) {
        $(id).append(html);
    }
};

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