//  Document ready
$(function() {

  //  Append the information for people to the DOM
  getPeople();

  //  Click handler for like buttons
  $('#people').on('click', 'button', function(){
    //  Collect the name of the person from the button data
    var $clicked = $(this).data('name');
    //  Call the postLikes function
    postLikes($clicked);
  });
});

//  Function for a GET request
function getPeople() {
  //  AJAX GET request for people
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(people) {
      //  Create a div for each person, and append it to the DOM
      people.forEach(function(person) {
        var $personDiv = $("<div class='person'></div>");
        $personDiv.append('<img src="' + person.photo + '" />');
        $personDiv.append('<h2>' + person.firstName + ' ' + person.lastName + '</h2>');
        $personDiv.append('<p>' + person.bio + '</p>');
        var $button = $('<button>Click to Like!</button>');
        //  Add the person's first name as data, used in the click handler
        $button.data("name", person.firstName);
        $personDiv.append($button);
        $personDiv.append('<p> Likes Counter: <span class="' + person.firstName + '"> 0 </span> </p>');
        $('#people').append($personDiv);
      });
    }
  });
}

//  AJAX GET request for likes
function getLikes(person) {
  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(likes) {
      //  Take the number of likes from the likes object, stored in a variable
      var liked = likes[person];
      //  Set the text value for the number of likes on the DOM to the value in the likes object.
      $('.' + person).text(liked);
    }
  });
}

//  AJAX POST request for likes
function postLikes(person) {
  $.ajax({
    type: 'POST',
    url: '/likes/' + person,
    success: function() {
      //  Call the getLikes function from within the postLikes function
      getLikes(person);
    }
  });
}
