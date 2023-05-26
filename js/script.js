
            jQuery(document).ready(function($) {
              $('.loop').owlCarousel({
                center: true,
                items: 2,
                loop: true,
                margin: 50,
                responsive: {
                  600: {
                    items: 2
                  },
                   768: {
                    items: 3
                  }
                }
              });
            });
          