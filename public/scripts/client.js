//Needs to append photos, info, buttons, and likes
$(function() {
  getPeople();

  $('#people').on('click', 'button', function(){
    var $clicked = $(this).data('name');
    postLikes($clicked);
  });

});

function getPeople() {

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(people) {

      people.forEach(function(person) {
        var $personDiv = $("<div class='person'></div>");
        $personDiv.append('<img src="' + person.photo + '" />');
        $personDiv.append('<h2>' + person.firstName + ' ' + person.lastName + '</h2>');
        $personDiv.append('<p>' + person.bio + '</p>');
        var $button = $('<button>Click to Like!</button>');
        $button.data("name", person.firstName);
        $personDiv.append($button);
        $personDiv.append('<p> Likes Counter: <span class="' + person.firstName + '"> 0 </span> </p>');
        $('#people').append($personDiv);
      });
    }
  });
}

function getLikes(person) {
  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(likes) {
      var liked = likes[person];
      $('.' + person).text(liked);

    }
  });
}

function postLikes(person) {
  $.ajax({
    type: 'POST',
    url: '/likes/' + person,
    success: function() {
      getLikes(person);
    }
  });
}






//
