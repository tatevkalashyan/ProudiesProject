

$(document).ready(function() {
    var minVal = 1, maxVal = 20;

    $(".increaseQty").on('click', function(){
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function(){
            $(".clicked").removeClass("clicked");
        },100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
// Decrease product quantity on cart page
    $(".decreaseQty").on('click', function(){
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function(){
            $(".clicked").removeClass("clicked");
        },100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });


    $('.change_location-btn').on("click", function () {
        $('.location-content').toggleClass('d-none');
    });



    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#imagePreview').css('background-image', 'url('+e.target.result +')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);


                var attr = $('#imagePreview').css('background-image', 'url('+e.target.result +')');

                if (attr !== ' ') {
                    $("#imageUpload-label").hide();
                }
                var showOnHover = $("#imagePreview[style]");

                $(showOnHover).hover(function () {
                    $(".banner-edit").toggleClass("show");
                })
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function() {
        readURL(this);
    });


});


