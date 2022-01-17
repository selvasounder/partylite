define([
    'uiComponent',
    'ko',
    'jquery'
], function (Component, ko, $,) {
    'use strict';
    console.log('from js');

    $("body").on('click', '.clc', function () {
        $('#display').val($('#display').val () + $(this).val());
    });
    $("body").on('click', '.clear', function () {
        $('#display').val(' ');
    });
    $("body").on('click', '.finalresult', function () {
        $('#display').val(eval($('#display').val()));
    });
    
return Component.extend({
    });
});