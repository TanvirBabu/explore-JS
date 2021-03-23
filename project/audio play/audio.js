for (var i = 0; i < 7; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){
        var song = this.innerHTML;
        console.log(song)

        switch (song){
            case "Alan_Walker":
                var audio = new Audio("music/Alan_Walker.mp3");
                audio.play();
                break;
            
            case "Let_Me_Love_You":
                var audio = new Audio("music/Let_Me_Love_You.mp3");
                audio.play();
                break;
            
            case "My_Love":
                var audio = new Audio("music/My_Love.mp3");
                audio.play();
                break;
            
            case "Need_You":
                var audio = new Audio("music/Need_You.mp3");
                audio.play();
                break;
            
            case "See_You_Again":
                var audio = new Audio("music/See_You_Again.mp3");
                audio.play();
                break;
            
            case "Sia_Cheap":
                var audio = new Audio("music/Sia_Cheap.mp3");
                audio.play();
                break;
            
            case "Trevor_Daniel":
                var audio = new Audio("music/Trevor_Daniel.mp3");
                audio.play();
                break;
        }
    })
}

