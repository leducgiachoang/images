$(window).bind("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#loader").fadeOut()
});
function randomimg() {
    var min = 1
    var max = 5
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (number) {
        case 1:
            document.getElementById('image').setAttribute('src', 'imgs/hinh1.jpg')
            break;
        case 2:
            document.getElementById('image').setAttribute('src', 'imgs/hinh2.jpg')
            break;
        case 3:
            document.getElementById('image').setAttribute('src', 'imgs/hinh3.jpg')
            break;
        case 4:
            document.getElementById('image').setAttribute('src', 'imgs/hinh4.jpg')
            break;
        case 5:
            document.getElementById('image').setAttribute('src', 'imgs/hinh5.jpg')
            break
    }
}
setInterval(randomimg, 3000);

function readURL(input) {
    if (input.files && input.files[0]) {

        for (var i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.file-upload-image').attr('src', e.target.result);
                $('.file-upload-content').show();

                const container = document.querySelector(".container");

                var cardTag =
                    `<div class="box_loading_icoc_item icon_loading"><i class="fas fa-spinner fa-spin"></i></div>`;
                container.innerHTML += cardTag
            };
            reader.readAsDataURL(input.files[i]);
            var $files = $('#inpImg').get(0).files;
            if ($files.length) {
                if ($files[i].size > $(this).data('max-size') * 1024) {
                    console.log('Vui lòng chọn file có dung lượng nhỏ hơn!');
                    return false;
                }
                var apiUrl = 'https://api.imgur.com/3/image';
                var apiKey = '07d8712f12f015b'; // Thay bằng Client ID của ae
                var settings = {
                    async: false,
                    crossDomain: true,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    url: apiUrl,
                    headers: {
                        Authorization: 'Client-ID ' + apiKey,
                        Accept: 'application/json',
                    },
                    mimeType: 'multipart/form-data',
                };
                var formData = new FormData();
                formData.append('image', $files[i]);
                settings.data = formData;

                const container = document.querySelector(".container");

                $.ajax(settings).done(function (response) {
                    var obj = JSON.parse(response);
                    var link = obj.data.link;
                    var lv_Optimal = jQuery('#lv_Optimal').val();
                    $.get("https://api.resmush.it/ws.php?img=" + link + "&qlty=" + lv_Optimal,
                        function (
                            data) {
                            var leng_loading = (jQuery('.icon_loading'));
                            for (var i = 0; i < leng_loading.length; i++) {
                                leng_loading[i].remove();
                            }
                            var cardTag = `<div class="card_img">
                        <div  class="hdev_thanh_loading">
                            <div class="box_item_img">
                                <div class="item_1">${((data.src_size)/1024).toFixed(2)} KB </div>
                                <div class="item_2">${((data.dest_size)/1024).toFixed(2)} KB </div>
                                <div class="item_3">${data.percent}% </div>
                                <div class="item_4"><a href="${data.dest}" target="_blank" download="${data.dest}"><div class="button_download">Download</div></a></div>
                            </div>
                             
                        </div>    
                    </div>`;
                            container.innerHTML += cardTag
                            jQuery('#inpImg').val('');
                        });
                });
            }
        }



    }

    $('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
    });
}
