/**
 * Created by v738110 on 9/29/17.
 */
$(function () {
    $('#name').keyup(function () {
        $('#greeting').text('Hi ' + $('#name').val() + '!');
    });
    $('#addAmount').click(function () {
        chrome.storage.sync.get('total', function () { // can pass an array of strings or string of keys
            if( items.total ){
                newTotal += parseInt(items.Total)
            }
        })
    })
});