$(function() {

  function genericSetTheTime(elH1, elH2, elM1, elM2, elS1, elS2, t, elan) {
    var d = t.getTime()/(1000 * 60 * 60 * 24);
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();

    $(elH1).html(Math.floor(h / 10));
    $(elH2).html(h % 10);
   
    $(elM1).html(Math.floor(m / 10));
    $(elM2).html(m % 10);
   
    $(elS1).html(Math.floor(s / 10));
    $(elS2).html(s % 10);

    elan.animate({"background-color":"rgb(" + (((d%2)==1) ? parseInt((h / 24) * 256) : (255-parseInt((h / 24) * 256)))+ "," + (((h%2)==1) ? parseInt((m / 60) * 256) : (255-parseInt((m / 60) * 256))) + "," + (((m%2)==1) ? parseInt((s / 60) * 256) : (255-parseInt((s / 60) * 256))) + ")"});  
  };

  var setTheTime = function() {
    hh1 = $("#localhour1");
    hh2 = $("#localhour2");
    mm1 = $("#localminute1");
    mm2 = $("#localminute2");
    sec1 = $("#localsecond1");
    sec2 = $("#localsecond2");

    var localT = new Date();
    genericSetTheTime(hh1, hh2, mm1, mm2, sec1, sec2, localT,  $("#local"));

    utc = localT.getTime() + (localT.getTimezoneOffset() * 60000);
    london = new Date(utc);
    genericSetTheTime($("#londonhour1"), $("#londonhour2"),  $("#londonminute1"),  $("#londonminute2"), $("#londonsecond1"), $("#londonsecond2"), london, $("#london"));

    //newyork
    utc = localT.getTime() + (localT.getTimezoneOffset() * 60000);
    newyork = new Date(utc - (3600000*5));
    genericSetTheTime($("#nyhour1"), $("#nyhour2"),  $("#nyminute1"),  $("#nyminute2"), $("#nysecond1"), $("#nysecond2"), newyork, $("#ny"));

    //tokyo
    utc = localT.getTime() + (localT.getTimezoneOffset() * 60000);
    tokyo = new Date(utc + (3600000*9));
    genericSetTheTime($("#tokyohour1"), $("#tokyohour2"),  $("#tokyominute1"),  $("#tokyominute2"), $("#tokyosecond1"), $("#tokyosecond2"), tokyo, $("#tokyo"));

  };

  window.setInterval(setTheTime, 1000);
 });
