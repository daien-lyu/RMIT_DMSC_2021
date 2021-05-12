(function () {
  var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

              
          // if (day < 10) {
          //   day = "0" + day;
          // }
          // if (hour < 10) {
          //   hour = "0" + hour;
          // }

          // if (minute < 10) {
          //   minute = "0" + minute;
          // }

          // if (second < 10) {
          //   second = "0" + second;
          // }

          function pad2(number) {
   
            return (number < 10 ? '0' : '') + number
   
          }

       

  let eventTime = "June 3, 2021 08:00:00",
      countDown = new Date(eventTime).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //   if((second+"").length === 1){
        //     second = "0"+second;
        // };

        // if((minute+"").length === 1){
        //     minute = "0"+minute;
        // };

         
        
        if (distance < 0) {
          let countdown = document.getElementById("countdown");
              

          

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
