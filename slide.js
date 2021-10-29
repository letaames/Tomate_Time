let linkToggle = document.getElementById("controlBtn");

linkToggle.addEventListener('click', function(event){

    event.preventDefault();

    var container = document.getElementById("setControlsForm");

    if (!container.classList.contains('active')) {
      
      container.classList.add('active');
      container.style.height = 'auto';

      var height = container.clientHeight + 'px';

      container.style.height = '0px';

      setTimeout(function () {
        container.style.height = height;
      }, 0);
      
    } else {
      
      container.style.height = '0px';

      container.addEventListener('transitionend', function () {
        container.classList.remove('active');
      }, {
        once: true
      });
      
    }
    
  });

