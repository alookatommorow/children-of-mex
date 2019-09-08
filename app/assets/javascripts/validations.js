var validationTypes = {

  name: {
    prompt: "Please enter a name",
    counterpart: "[placeholder='Full Name']",
    validator: "empty"
  },

  email: {
    prompt: "Please enter a valid email address",
    counterpart: "[placeholder='Email']",
    validator: "email"
  },

  message: {
    prompt: 'Please enter a message',
    counterpart: "textarea",
    validator: "empty"
  },

  amount: {
    prompt: "Please enter an amount",
    counterpart: "[placeholder='100']",
    validator: "empty"
  },
  amountList: {
    prompt: "Please choose an amount",
    counterpart: ".ax-select-selected",
    validator: "selected"
  }
}

var validators = {
  empty: function(val) {
    return val.length > 0;
  },

  selected: function(val) {
    return val !== 'Choose an amount';
  },

  email: function(val) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  }
}

function FormValidator(form) {
  this.form = form;
}

FormValidator.prototype.validateForm = function() {
  var inputTypes = [];
  var validationType, validator;
  var input = $(this.form).find(".validate");
  var errorCounterparts = [];
  var errorList = "<ul class='error-list'>";
  var val;

  $(input).each(function(item) {
    validationType = input[item].className.split(" ")[1];
    validator = validators[validationTypes[validationType].validator];
    if (validationType === 'amountList') {
      val = input.children('.ax-select-selected').html();
      if (val === 'Other amount') {
        return true;
      }
    } else {
      val = $(input[item]).val();
    }
    if (!validator(val)) {
      errorList += "<li>" + validationTypes[validationType].prompt + "</li>";
      errorCounterparts.push(validationTypes[validationType].counterpart);
      if (validationType === 'amountList') {
        return false;
      }
    } else {
      $("" + validationTypes[validationType].counterpart + "").removeClass("error");
      if (validationType === 'amountList') {
        return false;
      }
    }
  });

  if (errorCounterparts.length > 0) {
    $(this.form).find(".error.user-message").html(errorList).show();
    $(""+errorCounterparts.join(", ")+"").addClass("error");
  } else {
    $(".error.user-message").hide();
    return true;
  }
}
