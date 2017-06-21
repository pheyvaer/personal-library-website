var elem = document.querySelector('.grid');
var iso;
var currentSortValue = 'date';


imagesLoaded(elem, function() {
  // init Isotope after all images have loaded
  iso = new Isotope( elem, {
    // options
    itemSelector: '.grid-item',
    // masonry: {
    //   columnWidth: 100,
    //   gutter: 20
    // },
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 20
    },
    getSortData: {
      title: '.title',
      date: function( itemElem ) {
        var date = itemElem.querySelector('.date').textContent;
        var split = date.split('/');
        date = new Date(split[2], parseInt(split[1]) - 1, split[0]);
        return date.getTime();
      },
      rating: itemElem => {
        var rating = itemElem.querySelector('.rating.hidden');

        if (rating) {
          rating = rating.textContent;
          return parseInt(rating);
        } else {
          return false;
        }
      }
    }
  });

  iso.arrange({ sortBy: currentSortValue, sortAscending: false });
});

var filterFns = {
  buy: itemElem => matchesSelector(itemElem, '.buy'),
  borrow: itemElem => matchesSelector(itemElem, '.borrow'),
  burn: itemElem => matchesSelector(itemElem, '.burn'),
  all: () => true
};

// bind filter button click
var buttons = document.querySelectorAll('.filter');

buttons.forEach(function(button){
  button.onclick = function( event ) {
    var currentLabel = document.querySelector('#controls-filter label.selected');
    currentLabel.classList.remove('selected');

    var newLabel = document.querySelector('label[for=' + event.currentTarget.id + ']');
    newLabel.classList.add('selected');

    var filterValue = event.currentTarget.getAttribute('value');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  };
});

buttons = document.querySelectorAll('.sort');

buttons.forEach(function(button){
  button.onclick = function( event ) {
    var sortValue = event.currentTarget.getAttribute('value');

    if (currentSortValue !== sortValue) {
      var currentCaret = document.querySelector('#controls-sort label.selected i');
      currentCaret.classList.add('fa-inverse');
    }

    var currentLabel = document.querySelector('#controls-sort label.selected');
    currentLabel.classList.remove('selected');

    var newLabel = document.querySelector('label[for=' + event.currentTarget.id + ']');
    newLabel.classList.add('selected');

    var caret = document.querySelector('label[for=' + event.currentTarget.id + '] i');
    var sortAscending;

    if (currentSortValue !== sortValue) {
      sortAscending = caret.classList.contains('fa-caret-up');
    } else {
      if (caret.classList.contains('fa-caret-down')) {
        caret.classList.remove('fa-caret-down');
        caret.classList.add('fa-caret-up');
        sortAscending = true;
      } else {
        caret.classList.add('fa-caret-down');
        caret.classList.remove('fa-caret-up');
        sortAscending = false;
      }
    }

    caret.classList.remove('fa-inverse');
    currentSortValue = sortValue;

    iso.arrange({ sortBy: sortValue, sortAscending });
  };
});
