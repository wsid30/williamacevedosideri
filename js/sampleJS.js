function conditional(){
   // alert("Use Inspect to see the console");
    var currentHour = new Date().getHours();
    if(currentHour < 10){
        alert("Good Morning!");
    }
    else if(currentHour < 18){
        alert("Good Morrow")
    }
    else{
        alert("Good Evening")
    }
}

function evalNumber(parameters){
    var inputValue = Number(prompt("Enter any five digit number without commas"));
    var ans;
    if (isNaN(inputValue)){
        alert(inputValue + " is not a number");
    }
    else if (inputValue % 2 == 0){
        alert(inputValue + " is and even number");
    }
    else{
        alert(inputValue + " is an odd number");
    }
}

function howdy(yourFirstName){
    alert("Howdy "+ yourFirstName);
}

function changeTitle(){
    let selectedElement = document.getElementById('programCard1');
    console.log(selectedElement);
    selectedElement.innerText="DIGS Student";
}

function getMinute(){
    var num = new Date().getMinutes();
    let selectedElement = document.getElementById("timeBody");
    console.log(selectedElement);
    selectedElement.innerText=num;
}

function eliminateCard(){
    let selectedElement = document.getElementById('programCard2');
    console.log(selectedElement);
    selectedElement.style.display = "none";
}

function sorter(list){
    let selectedElement = document.getElementById("fruitBody");
    list.sort();
    selectedElement.innerText = list[list.length-1];
}

function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class','row');
        newDiv.setAttribute("id", 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    }
}

function mapLoad(){
    var latLng = [41.789649, -87.599702];
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors,' + 'Imagery © <a href="https://www.mapbox.com/%22%3EMapbox</a>', mbUrl = 'https://api.mapbox.com/styles/v1/%7Bid%7D/tiles/%7Bz%7D/%7Bx%7D/%7By%7D?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    var streets = L.tileLayer(mbUrl,{
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr}
    );
    var map = L.map('map',{
        center: latLng,
        zoom: 16,
        layers: [streets]
    });
    var baseLayers = {
        //"Grayscale": grayscale,
        "Streets": streets
    };
    L.control.layers(baseLayers).addTo(map);
    L.marker(latLng).addTo(map).bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    var popup = L.popup();
    function onMapClick(e) {
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click',onMapClick);
}