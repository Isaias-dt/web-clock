((win, doc) => {
  'use strict';

  var $hours = doc.querySelector('[data-js=h');
  var $minutes = doc.querySelector('[data-js=m');
  var $seconds = doc.querySelector('[data-js=s');

  $hours.innerText = '--';
  $minutes.innerText = '--';
  $seconds.innerText = '--';

  function clock(){
    var dateNow = new Date();
    var h = dateNow.getHours().toString();
    var m = dateNow.getMinutes().toString();
    var s = dateNow.getSeconds().toString();

    $hours.innerText = h.length === 1 ? '0' + h : h;
    $minutes.innerText = m.length === 1 ? '0' + m : m;
    $seconds.innerText = s.length === 1 ? '0' + s : s;
  }
  var id = win.setInterval(clock, 900);

})(window, document);
