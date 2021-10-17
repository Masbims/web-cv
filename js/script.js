// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen tujuan
	var elemenTujuan = $(tujuan);


	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250);

	e.preventDefault();
});