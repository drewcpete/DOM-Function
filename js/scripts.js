$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul").prepend("<li>Hello</li>");
      $("ul#webpage").prepend("<li>Why hello there!</li>");
        $('li').css('background-color', 'pink');
  });
  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");
      $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
      $('li').css('background-color', 'green');
  });
  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
      $('li').click(function() {
        alert('hi');
  });
});
});
