var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span>%contact%</span><span>%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsHeader = '<h3 id="skills-header">Skills at a Glance:</h3>';
var HTMLskillsStart = '<ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span>%data%</span></li>';

var HTMLworkHeader = '<h2>Work Experience</h2>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectHeader = '<h2>Projects</h2>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLcarouselStart = '<div id="%carouselName%" class="myCarousel carousel slide" data-ride="carousel"></div>';
var HTMLcarouselIndicators = '<ol class="carousel-indicators"></ol>';
var HTMLcarouselInner = '<div class="carousel-inner" role="listbox">';
var HTMLcarouselListItemActive = '<li data-target="#myCarousel" data-slide-to="%data%" class="active"></li>';
var HTMLcarouselListItem = '<li data-target="#myCarousel" data-slide-to="%data%"></li>';
var HTMLcarouselInnerItemActive = '<div class="item active"><img src=%data% alt=%alt%></div>';
var HTMLcarouselInnerItem = '<div class="item"><img src=%data% alt=%alt%></div>';
var HTMLcarouselLeftControl = '<a class="left carousel-control" href="#%carouselName%" role="button" data-slide="prev">' +
                                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                                '<span class="sr-only">Previous</span>' +
                              '</a>';
var HTMLcarouselRightControl = '<a class="right carousel-control" href="#%carouselName%" role="button" data-slide="next">' +
                                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                                '<span class="sr-only">Next</span>' +
                              '</a>';

var HTMLeducationHeader = '<h2>Education</h2>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineCourseStart = '<div class="education-entry"></div>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var HTMLgoogleMapHeader = '<h2>Where I\'ve Lived and Worked</h2>';
var googleMap = '<div id="map"></div>';

var HTMLletsConnectHeader = '<h2>Let\'s Connect</h2>';
var HTMLletsConnectFooterContactsList = '<ul id="footer-contacts" class="flex-box"></ul>';

// ***************************************************************************
// ***********   console.log() information about click locations   ***********
// ***************************************************************************

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// ********************************************************************************
// ***********   Google Maps for all locations (bio, education, work)   ***********
// ********************************************************************************

var map;

function initializeMap() {
  var locations;

  var mapOptions = {
    // disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // shows an info window about the location when marker is clicked
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
