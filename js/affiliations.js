function myMap() {
    var mapCanvas = document.getElementById("map1");
    var hospital = { lat: 51.517252, lng: -3.569878 };
    var mapOptions = {
        center: hospital,
        zoom: 15,
        mapTypeId: 'hybrid'
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: hospital,
        map: map
    });
}