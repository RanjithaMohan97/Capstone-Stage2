

function initMap () {
    //styles for styling google map
    /*var styles = [{
        featureType: "water",
        stylers: [{
          color: "#b5cbe4"
        }]
      },
      {
        featureType: "landscape",
        stylers: [{
          color: "#efefef"
        }]
      },
      {
        featureType: "road.highway",
        stylers: [{
          color: "#83a5b0"
        }]
      }
    ];*/
    //var call = this;
    var map;
    console.log("helloooo");
    // Constructor for creating new map 
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 13.051384,
        lng: 80.251961
      },
      zoom: 12,
      mapTypeControl: false
      //styles: styles

    });
    var tribeca = {lat: 40.719526, lng: -74.0089934};
        var marker = new google.maps.Marker({
          position: tribeca,
          map: map,
          title: 'First Marker!'
        });
    //constructor for creating infowindow
    //var largeInfowindow = new google.maps.InfoWindow();
       

  }
 // window.addEventListener("load",function(){initMap();});