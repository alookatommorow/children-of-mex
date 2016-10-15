document.addEventListener("turbolinks:load", function() {
  $("textarea.validate").focus(function() {
    if ($(this).hasClass("error")) {
      $(this).removeClass("error");
    }
  });

  /// validate then send contact form ///
  $(".contact-form").submit(function (event) {
    event.preventDefault();

    var validation = new FormValidator(this).validateForm();
    var data = $(this).serialize();

    if (validation) {
      $(".contact-button").attr("disabled", true).val("Please wait...").css("cursor", "default");
      $.ajax({
          url: this.action,
          method: this.method,
          data: data,
          dataType: "json"
      })
      .done(formSuccess)
      .fail(function(response){
        console.log("error", response);
      });
    }
  });
});