jQuery(function($) {
  $(document).ready(function() {
    $('#boom').sprite({ fps:15, no_of_frames: 15, play_frames: 15 })
      .spRandom({
        top:900,
        bottom:300,
        left:900,
        speed: 11000
      })




    $('#bg').pan({ fps:30, speed:0, dir: 'left' });
    $('#namas').pan({ fps:30, speed:0, dir: 'left'});


    $('#square').sprite({ fps:10, no_of_frames:8 })
    .spRandom({
      bottom: 600,
      left:800,
      top:-200,
      speed: 3000,
      right:100
    });


  });


});
