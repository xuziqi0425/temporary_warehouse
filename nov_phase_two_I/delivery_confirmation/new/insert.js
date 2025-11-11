{/* <div id="footer-placeholder"><#include "footer.html" /></div> */}
// 动态加载 footer.html
(function() {
  var footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './footer.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        footerPlaceholder.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
})();

