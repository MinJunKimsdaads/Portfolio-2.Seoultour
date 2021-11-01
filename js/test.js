var slideslider = 0;
        function autoslide1() {
            var i;
            var slide1 = document.getElementsByClassName("imageslide");
            for(i = 0; i < slide1.length; i++) {
                slide1[i].style.display = "none";
            }

            slideslider++;
            if (slideslider >= slide1.length) {
                slideslider = 1;
            }
            slide1[slideslider-1].style.display = "block";
            setTimeout(autoslide1, 2000);
        }