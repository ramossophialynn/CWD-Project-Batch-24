
$(document).ready(function(){
      $('.parallax').parallax();
});
$(document).ready(function(){
    $('.materialboxed').materialbox();
});
function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}
function closeSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}