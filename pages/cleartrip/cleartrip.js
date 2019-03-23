window.onload = function(){

    var main_modal = document.getElementById('main-modal');
    var main_btn = document.getElementById("share-btn");
    var span = document.getElementsByClassName("close")[0];

    main_btn.onclick = function() {
      main_modal.style.display = "block";
    }

    span.onclick = function() {
      main_modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == main_modal || event.target == sec_modal) {
        main_modal.style.display = "none";
        sec_modal.style.display = "none";
      }
    }


    var sec_modal = document.getElementById('secondary-modal');
    var sec_btn = document.getElementById("sec-btn");
    var span2 = document.getElementsByClassName("close")[1];

    sec_btn.onclick = function() {
      sec_modal.style.display = "block";
    }

    span2.onclick = function() {
      sec_modal.style.display = "none";
    }



}
