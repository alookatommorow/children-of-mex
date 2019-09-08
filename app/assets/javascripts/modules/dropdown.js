function AxDropdown() {
}
AxDropdown.prototype = (function() {
	var closeAllSelect = function(elmnt) {
	  /* A function that will close all select boxes in the document,
	  except the current select box: */
	  var x, y, i, arrNo = [];
	  x = document.getElementsByClassName('ax-select-items');
	  y = document.getElementsByClassName('ax-select-selected');
	  for (i = 0; i < y.length; i++) {
	    if (elmnt == y[i]) {
	      arrNo.push(i)
	    } else {
	      y[i].classList.remove('ax-select-arrow-active');
	    }
	  }
	  for (i = 0; i < x.length; i++) {
	    if (arrNo.indexOf(i)) {
	      x[i].classList.add('ax-select-hide');
	    }
	  }
	}

	return {
    constructor: AxDropdown,
    init: function() {
  		var selected = false,
  				x = document.getElementsByClassName('ax-select-dropdown'),
  				i = 0,
  				j, selElmnt, a, b, c, y;

  		while (i < x.length) {
  		  selElmnt = x[i].getElementsByTagName('select')[0];
  		  /* For each element, create a new DIV that will act as the selected item: */
  		  a = document.createElement('DIV');
  		  a.setAttribute('class', 'ax-select-selected placeholder');
  		  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  		  x[i].appendChild(a);
  		  /* For each element, create a new DIV that will contain the option list: */
  		  b = document.createElement('DIV');
  		  b.setAttribute('class', 'ax-select-items ax-select-hide');
  		  j = 1;
  		  while (j < selElmnt.length) {
  		    /* For each option in the original select element,
  		    create a new DIV that will act as an option item: */
  		    c = document.createElement('DIV');
  		    c.innerHTML = selElmnt.options[j].innerHTML;
  		    c.addEventListener('click', function(e) {
  	        /* When an item is clicked, update the original select box,
  	        and the selected item: */
  	        var y, i, k, s, h;
  	        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
  	        h = this.parentNode.previousSibling;
  	        for (i = 0; i < s.length; i++) {
  	          if (s.options[i].innerHTML == this.innerHTML) {
  	            s.selectedIndex = i;
  	            h.innerHTML = this.innerHTML;
  	            y = this.parentNode.getElementsByClassName('ax-same-as-selected');
  	            for (k = 0; k < y.length; k++) {
  	              y[k].removeAttribute('class');
  	            }
  	            this.setAttribute('class', 'ax-same-as-selected');
  	            break;
  	          }
  	        }
  	        h.click();
            h.setAttribute('class', 'ax-select-selected');
  	        $(e.currentTarget).parent().siblings('select').children("[value='" + this.innerHTML + "']").trigger('change');
            y = document.getElementsByClassName('ax-select-selected');

  	        return;
  		    });
  		    b.appendChild(c);
  		    j++;
  		  }
  		  x[i].appendChild(b);

  		  a.addEventListener('click', function(e) {
  		    /* When the select box is clicked, close any other select boxes,
  		    and open/close the current select box: */
  		    e.stopPropagation();
  		    closeAllSelect(this);
  		    this.nextSibling.classList.toggle('ax-select-hide');
  		    this.classList.toggle('ax-select-arrow-active');
  		  });
  		  i++;
  		}

  		/* If the user clicks anywhere outside the select box,
  		then close all select boxes: */
  		document.addEventListener('click', closeAllSelect); 
    }
  };
})();