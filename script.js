var link = $("nav ul li a");
//click handler
link.on("click" , function(){
  var $this = $(this);
  link.removeClass("active");
  $this.addClass("active");
  })