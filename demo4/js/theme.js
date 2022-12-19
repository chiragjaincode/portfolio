$(document).ready(function () {
  // hide and show function start
  $(".hide-show-button").click(function () {
    $(this).parents().find(".panel-new-action").slideToggle();
    $(".panel-show-btn").slideToggle();
  });

  $(".show-action-btn").click(function () {
    $(this).parents().find(".panel-new-action").slideToggle();
    $(this).parent().slideToggle();
  });

  // hide and show function end

  // page redirection on click of save button start
  $(".show-popup").click(function (event) {
    event.preventDefault();
    window.setTimeout(function () {
      location.href = "./thanks.html";
    }, 2000);

    $(".popup").fadeIn();
    $("body").addClass("popup-on");
  });
  $(".close").click(function () {
    $(".popup").fadeOut();
    $("body").removeClass("popup-on");
  });

  // page redirection on click of save button end

  //   on triger value done show popup start
  $(".status").on("change", function () {
    if ($(this).find(":selected").val() == "done") {
      $(".popup-big").fadeIn(200);
      $("body").addClass("popup-on");

      $(".close, .popup-big .btn").click(function () {
        $(".popup-big").fadeOut(200);
        $("body").removeClass("popup-on");
      });
    }
  });
  //   on triger value done show popup end

  // onclick append jquery for Insert New Line start

  $(".insertbutton").click(function (event) {
    event.preventDefault();

    // get value via using array size
    let myNumber = $(".panel-list .panel-itemlisting").length + 1;

    $(".panel-list").append(
      `<div class="panel-itemlisting" id=${myNumber} onClick="reply_click(this.id)" >
    <div class="record-item-list">
        <div class="left">${myNumber}. Lorem Ipsum</div>
        <div class="right">
            <ul>
                <li>
                    <a href="#">
                        <img src="./images/edit.png">
                    </a>
                </li>
                <li>
                    <a href="#" class="delete-item">
                        <img src="./images/delete.png">
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="content-detail">
        <div class="first-row">
            <div class="content">
                <span>For/Poc:</span> Test Data;
            </div>
            <div class="content">
                <span>data details:</span> testing
            </div>
        </div>
        <div class="second-row">
            <div class="content">
                <span>Start Date:</span>1/29/2010 6:30:00 PM
            </div>
            <div class="content">
                <span>Target Date:</span> :1/29/2010 6:30:00 PM
            </div>
        </div>
        <div class="third-row">
            <div class="content">
                <span>Actual Date:</span>1/29/2010 6:30:00 PM
            </div>
        </div>
    </div>
</div>`
    );
  });

  // onclick append jquery for Insert New Line end
});

// onclick remove element from list
function reply_click(clicked_id) {
  document.getElementById(clicked_id).remove();
}
