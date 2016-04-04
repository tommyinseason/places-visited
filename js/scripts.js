//Business logic

function placesVisited(name, location, landmarks, timeYear, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeYear = timeYear;
  this.notes = notes;
}

placesVisited.prototype.nameLocation = function() {
  return this.name + " " + this.location;
}

//User interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeYear = $("input#timeYear").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new placesVisited(inputtedName, inputtedLocation);

    $("ul#places").append("<li><span class='place'>" + newPlace.nameLocation() + "</span></li>");
    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.name);
      $(".landmarks").text(newPlace.landmarks);
      $(".timeYear").text(newPlace.timeYear);
      $(".notes").text(newPlace.notes);
    });

    $("input#name").val("");
    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#timeYear").val("");
    $("input#notes").val("");
  });
});
