/**
 * 
 */



function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var myLatLang = new google.maps.LatLng(32.92298778, -96.7780602)
    var mapOptions = {
      center: myLatLang,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    
    var marker = new google.maps.Marker({
        position: myLatLang,
        map: map,
        title: 'Wedding!'
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  
