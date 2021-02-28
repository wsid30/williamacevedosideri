function searchMusic(){
    var artistName = document.getElementById('artistInput').value;
    var albumName = document.getElementById('albumName').value;
    var url = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + artistName + "&a=" + albumName;
    //var albumDiv = document.getElementById("albumArt");
    
    fetch(url)
    .then(
        function(response){
            if (response.status != 200){
                console.log('PROBLEM! Status codee is: ' + response.status);
                return;
            }
            response.json().then(function(data){
                //console.log(data);
                let jsonContent = data.album;
                console.log(jsonContent);

                document.getElementById('albumYear').innerText = jsonContent.intYearReleased;
                document.getElementById("albumName").innerText = jsonContent.strAlbum;
            });
        });
    }