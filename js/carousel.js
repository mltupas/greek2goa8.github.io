var current_user = localStorage.getItem("current_user");
var profiles = JSON.parse(localStorage.getItem("profiles"));
var events_carousel = $('.slideshow-container'), container;
var events_to_display = [];

for (var user in profiles) {
  if (current_user == profiles[user].email) {
    events_to_display = profiles[user].events;
  }
}
//MARK: disable delete event button if there are no events to display
var btn = document.getElementById("delete_event");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

if (events_to_display.length <= 1) {
  if (events_to_display.length == 0) {
    btn.style.display = "none";
  }
  prev.style.display = "none";
  next.style.display = "none";
}

//SORT CAROUSEL EVENTS
var sort_events = events_to_display.sort(function(a, b) {return b - a});
var sorted_events = sort_events.sort(comparator);

//ORDER ARRAY BY DATE, WITH OLDEST SHOWING FIRST
function comparator(a, b) {
  if (a.date > b.date) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  }

  if (a.time > b.time) {
    return 1;
  } else if (a.time < b.time) {
    return -1;
  } else {
    return 0;
  }
}

if (events_to_display.length == 0) {
  //MARK: changed default pic to Greek2Go logo, added "Take Questionnaire" button
  container = $('<div id="mySlides" class="carousel_container" id="default_pic"></div>');
  events_carousel.append(container);

  container.append('<img src="images/greek2gofinalfinal.png" style=height"100%" width="auto">');
  container.append('<div class="text">');
  container.append('<h2>You have no events. Click on Take Questionnaire to see which Greek organizations best align with your personal attributes.</h2>');
  container.append('<form action="questionnaire.html"><button type="submit" class="questionnairebtn">Take Questionnaire</button></form>');

} else {

  var counter = 1;

  for (var index = 0; index < events_to_display.length; index++) {
    container = $('<div id="mySlides" class="carousel_container"></div>');
    events_carousel.append(container);
    //Counter to rotate the image in carousel
    if (counter > 4) {
      counter = 1;
    }

    container.append('<div class="numbertext">' + (index + 1) + ' / ' + events_to_display.length + '</div>');
    container.append('<img src="images/carouselpic' + counter + '.jpg" style=width"100%">');
    container.append('<div class="text">');
    container.append('<h1>' + sorted_events[index].title + '</h1');
    container.append('<h3>' + sorted_events[index].location + '</h3>');
    container.append('<h3>' + sorted_events[index].date + " from " + sorted_events[index].time + '</h3>');
    container.append('<h3>' + sorted_events[index].description + '</h3>');
    container.append('</div>');
    counter++;
  }
}

function deleteEvent() {

  var slides = document.getElementsByClassName("carousel_container");

  for (var index = 0; index < slides.length; index++) {
    if (slides[index].style.display == "block") {
      sorted_events.splice(index, 1);
    }
  }

  for (var user in profiles) {
    if (current_user == profiles[user].email) {
      profiles[user].events = sorted_events;
    }
  }
  localStorage.setItem("profiles", JSON.stringify(profiles));
  alert("Event has been removed.");
  document.location.reload();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel_container");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
