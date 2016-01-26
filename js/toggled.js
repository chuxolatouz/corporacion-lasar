function toggleProducts(ProductID) {
  //console.log('Acabo de clickear ' + ProductID);
  $('.portfolio-item').hide();
  $('.portfolio-item'+'.'+ProductID).show(); 
}
 function mainToggle(){
  $('.portfolio-item').show();
  $('ul.dropdown-menu li.active').removeClass('active');
}
