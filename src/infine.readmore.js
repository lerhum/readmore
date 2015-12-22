/*!
 * @preserve
 *
 * infine.readmore.js jQuery plugin
 * Author: @darkstars
 * Project home: 
 * Author URI: http://www.infine.net/
 * License: GPL version 2 or later - http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */
(function ($) {
    $.fn.readdmore = function (opts) {
        return this.each(function ()
        {
            html= $(this);
            text=$(this).text();    
            html.hide();
            var words = text.split(' ');
            resume="";
            for(var i=0;i<50;i++){
                resume=resume+" "+words[i];                    
            }
            $(this).after("<div class='resume'> "+resume+" </div>"+"<span class='plus'  style='cursor:pointer'> En savoir plus ...</span>");
            $('.plus').click(function(){
                if($(this).html()==='close'){
                     $('.plus').html(' En savoir plus ...');
                     html.hide();
                     $('.resume').show(); 
                }else{
                    $('.resume').hide(); 
                    $('.plus').html('close');
                    html.show();
                }               
               return false;
            });
        });
    };
})(jQuery);