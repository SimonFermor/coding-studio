$( document ).ready(function() {

var header = '<div class="container">';
header += '<h1>Coding Studio</h1>';
header += '	<h2>Coding fun at Rochester Montessori middle school</h2>';
header += '</div>';
header += '<div class="container">';
header += '	<ul class="dropdown">';
header += '		<li><a href="/coding-studio">Home</a></li><li>&nbsp;|&nbsp;</li>';
header += '		<li>Session Notes';
header += '			<ul class="sub_menu">';
header += '				<li><a href="/coding-studio/views/pages/session_01.html">Session 1</a></li>';
header += '				<li><a href="/coding-studio/views/pages/session_02.html">Session 2</a></li>';
header += '				<li><a href="/coding-studio/views/pages/session_03.html">Session 3</a></li>';
header += '				<li><a href="/coding-studio/views/pages/session_04.html">Session 4</a></li>';
header += '				<li><a href="/coding-studio/views/pages/session_05.html">Session 5</a></li>';
header += '				<li><a href="/coding-studio/views/pages/session_06.html">Session 6</a></li>';
header += '			</ul>';
header += '		</li><li>&nbsp;|&nbsp;</li>';
header += '		<li><a href="/coding-studio/views/pages/resources.html">Resources</a></li><li>&nbsp;|&nbsp;</li>';
header += '		<li><a href="/coding-studio/views/pages/useful_links.html">Useful Links</a></li>';
header += '	</ul>';
header += '</div>';

$('#menu').html(header);
});

$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});