document.addEventListener("turbolinks:load", function() {

  $(".amount-form").submit(function (event) {
    event.preventDefault();
    var validation = new FormValidator(this).validateForm();
    var amount = $("input[name=amount]").val()
    var parsedAmount = parseFloat(amount) * 100;
    console.log(amount);

    if (validation) {
      $(".confirm-amount").text(amount);
      $(this).fadeOut(function() {
        $(".confirmation").fadeIn();
      });

      var handler = StripeCheckout.configure({
        key: 'pk_test_9ZLVR6WahevanGUdzzu5qp5f',
        image: 'https://s3-us-west-1.amazonaws.com/children-of-mexico/icon-padded.svg',
        locale: 'auto',
        zipCode: true,
        billingAddress: true,
        token: function(token) {
          var data =  {
            stripe_token: token.id,
            donation: {
              amount_in_cents: parsedAmount,
              email: token.email
            }
          }
          $.post("/donations", data).done(function() {
            console.log("charge created")
          });
        }
      });

      document.getElementById('donate-button').addEventListener('click', function(e) {
        // Open Checkout with further options:
        handler.open({
          name: 'Children of Mexico International',
          description: 'Donation',
          amount: parsedAmount
        });
        e.preventDefault();
      });

      // Close Checkout on page navigation:
      window.addEventListener('popstate', function() {
        handler.close();
      });


      // $.ajax({
      //     url: this.action,
      //     method: this.method,
      //     data: data,
      //     dataType: "json"
      // })
      // .done(formSuccess)
      // .fail(function(response){
      //   console.log("error", response);
      // });
    } else {
      // $(".contact-button").attr("disabled", false).val("Send").css("cursor", "pointer");
    }
  });



});