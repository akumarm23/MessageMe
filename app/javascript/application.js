// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "./jquery/jquery-3.6.0.js"
import "semantic-ui"
import jquery from "jquery";
window.jQuery = jquery
window.$ = jquery

$(document).ready(function () {     
    $(".ui.dropdown").dropdown(); 
    $('.message .close').on('click', function() {
        $(this).closest('.message').transition('fade');
    });
})



