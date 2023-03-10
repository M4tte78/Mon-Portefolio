window.onload = function() {
    var isMobile = false;
    (function(a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        isMobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
  
    // for the subheader animation
    // function([string1, string2],target id,[color1,color2])
    consoleText(
      [
        "D??velopper int??grateur junior",
        "Discord serveur cr??ator",
        
        "#Portfolio"
      ],
      "text",
      ["#56ceb0", "#a770d4", "#e28ede", "#d1c849"]
    );
  
    // title color count
    var count = 0;
  
    // boolean for first time site is loaded
    var isFirstTime = 1;
    var isClue2Done = 0;
    var isClue3Done = 0;
  
    // get the modals
    var modal1 = document.getElementById("modal1");
  
    var modal2 = document.getElementById("modal2");
  
    var modal3 = document.getElementById("modal3");
  
    var modal4 = document.getElementById("modal4");
  
    // get the modals' content
    var modal1Content = document.getElementById("modal1-content");
    var modal2Content = document.getElementById("modal2-content");
    var modal3Content = document.getElementById("modal3-content");
    var modal4Content = document.getElementById("modal4-content");
  
    // get the tab title
    var title = document.getElementById("title");
  
    // get the count text
    var countNum = document.getElementById("countNum");
  
    // get the subheader
    var subheader = document.getElementById("subheader");
  
    // get the about-me secret text
    var ams = document.getElementById("about-me-secret");
  
    // get the experience secret text
    var ems = document.getElementById("experience-secret");
  
    // get the buttons that opens the modals
    var btn1 = document.getElementById("button1");
  
    var btn2 = document.getElementById("button2");
  
    var btn3 = document.getElementById("button3");
  
    var btn4 = document.getElementById("button4");
  
    // get the close buttons
    var span1 = document.getElementsByClassName("close1")[0];
  
    var span2 = document.getElementsByClassName("close2")[0];
  
    var span3 = document.getElementsByClassName("close3")[0];
  
    var span4 = document.getElementsByClassName("close4")[0];
  
    // initialize modals' content opacity to 0
    modal1Content.style.opacity = "0";
  
    modal2Content.style.opacity = "0";
  
    modal3Content.style.opacity = "0";
  
    modal4Content.style.opacity = "0";
  
    // change colors
    title.onclick = function() {
      switch (count) {
        case 0:
          title.className = "teal";
          ++count;
          break;
        case 1:
          title.className = "purple";
          ++count;
          break;
        case 2:
          title.className = "pink";
          ++count;
          if (Boolean(isFirstTime)) {
            countNum.innerHTML = "4";
          }
          break;
        case 3:
          title.className = "yellow";
          ++count;
          if (Boolean(isFirstTime)) {
            countNum.innerHTML = "3";
          }
          break;
        case 4:
          title.className = "teal";
          ++count;
          if (Boolean(isFirstTime)) {
            countNum.innerHTML = "2";
          }
          break;
        case 5:
          title.className = "purple";
          ++count;
          if (Boolean(isFirstTime)) {
            countNum.innerHTML = "1";
          }
          break;
        case 6:
          title.className = "blue";
          count = 0;
          if (Boolean(isFirstTime)) {
            countNum.innerHTML = "";
            subheader.innerHTML = "hmm, there's something different about me...";
          }
          isClue2Done = 1;
          isFirstTime = 0;
          break;
      }
    };
  
    // when the user clicks a button, open the corresponding modal
    btn1.onclick = function() {
      modal1.style.width = "100%";
      modal1Content.style.transition = "2s opacity";
      modal1Content.style.opacity = "1";
      if (Boolean(isClue2Done)) {
        if (isMobile) {
          ams.innerHTML = "got experience?";
        } else {
          ams.innerHTML = "look up!";
          document.title = "got experience?";
        }
        isClue3Done = 1;
      }
    };
  
    btn2.onclick = function() {
      modal2.style.width = "100%";
      modal2Content.style.transition = "2s opacity";
      modal2Content.style.opacity = "1";
    };
  
    btn3.onclick = function() {
      modal3.style.width = "100%";
      modal3Content.style.transition = "2s opacity";
      modal3Content.style.opacity = "1";
    };
  
    btn4.onclick = function() {
      modal4.style.width = "100%";
      modal4Content.style.transition = "2s opacity";
      modal4Content.style.opacity = "1";
      if (Boolean(isClue3Done)) {
        ems.innerHTML = "hewwo";
        document.title = "Vivienne Ooi";
      }
    };
  
    // when the user click the CLOSE button, close the modal
    span1.onclick = function() {
      modal1Content.style.transition = "0.5s opacity";
      modal1Content.style.opacity = "0";
      modal1.style.width = "0%";
    };
  
    span2.onclick = function() {
      modal2Content.style.transition = "0.5s opacity";
      modal2Content.style.opacity = "0";
      modal2.style.width = "0%";
    };
  
    span3.onclick = function() {
      modal3Content.style.transition = "0.5s opacity";
      modal3Content.style.opacity = "0";
      modal3.style.width = "0%";
    };
  
    span4.onclick = function() {
      modal4Content.style.transition = "0.5s opacity";
      modal4Content.style.opacity = "0";
      modal4.style.width = "0%";
    };
  
    // loop through the subheader positions
    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function() {
        if (visible === true) {
          con.className = "console-underscore hidden";
          visible = false;
        } else {
          con.className = "console-underscore";
  
          visible = true;
        }
      }, 400);
    }
  };
  