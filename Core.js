var Time = function(){
this.period, this.date;
};


Time.prototype = function(){

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getDate(){
    var d = new Date();
    return d;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getDay(){
    var g = getDate();
    var d = g.getDay();
    return d;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getMonth(){
    var g = getDate();
    var m = g.getMonth();
    return m;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getYear(){
    var g = getDate();
    var y = g.getYear();
    return y;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getFullYear(){
    var g = getDate();
    var fY = g.getFullYear();
    return fY;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getHours(){
    var g = getDate();
    var h = g.getHours();
    return h;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getMillSeconds(){
    var g = getDate();
    var mS = g.getMilliseconds();
    return mS;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getMinutes(){
    var g = getDate();
    var m = g.getMinutes();
    return m;
  }


  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCDate(){
    var g = getDate();
    var Ud = g.getUTCDate();
    return Ud;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCDay(){
    var g = getDate();
    var Uy = g.getUTCDay();
    return Uy;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCFullYear(){
    var g = getDate();
    var Ufy = g.getUTCFullYear();
    return Ufy;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCHours(){
    var g = getDate();
    var Uh = g.getUTCHours();
    return Uh;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCMilliseconds(){
    var g = getDate();
    var UMs = g.getUTCMilliseconds();
    return UMs;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCMinutes(){
    var g = getDate();
    var Um = g.getUTCMinutes();
    return Um;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCMonth(){
    var g = getDate();
    var Uth = g.getUTCMonth();
    return Uth;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getUTCSeconds(){
    var g = getDate();
    var Us = g.getUTCSeconds();
    return Us;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getTime(){
    var g = getDate();
    var t = g.getTime();
    return t;

  }


  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function setTimeUI(){
    var cElement = document.createElement("DIV");
    cElement.setAttribute(
      'id','display-time'
    );



    document.body.appendChild(cElement);

    getTimeAsIs('display-time');
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getTimeAsIs(dom){

    var i;
    setTimeout(function(){
      i = document.getElementById(dom);
      // console.log(getHours());
      i.innerHTML = "";
      i.innerHTML = hourType(getHours(),12)+" : "+getMinutes()+" : "+getUTCSeconds()+" : "+getPeriod();
      // fourTweny(i);s

      getTimeAsIs(dom);

      setTimer(getCurrentTime(dom));

    }, 500);
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getCurrentTime(dom){
    var element = document.getElementById(dom);
    var elValue = element.innerHTML || element.innerText || null;
    var time   = elValue.replace(/\s+/g, '').split(":");

    return time;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function setTimer(setTime){
    var timeToSet = {
      hours : setTime[0],
      minutes : setTime[1],
      seconds : setTime[2],
    };

    console.log(timeToSet);

  }
  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function fourTweny(data){
    // split data when : found
    var time = data.innerHTML.split(":");
    // get that DOMelement
    var dis = document.getElementById("display-time");
    // if 4:20 pm
    if(parseInt(time[0]) === 4 && parseInt(time[1]) === 20 && parseInt(time[2]) === 0
      || parseInt(time[0]) === 4 && parseInt(time[1]) === '20' && parseInt(time[2]) === '0'){
      // send messages
      alert("HAPPY 420");
      // apply style
      dis.style.background = "#9FB009";
      dis.style.color = "#003264";
    }
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function getPeriod(){
    if(this.period === 'am'){
      return 'am';
    }else if(this.period === 'pm'){
      return 'pm';
    }

  }


  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function hourType(callback, type = 12){
    var v;
    if(type === 12){
      v  = convertTwelf(callback);
    }else if (type === 24){
      v  = callback;
    }

    return v;
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function convertTwelf(data){
    switch(data){
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      this.period =  'am';
        return data;
              break;
      case 13:
      this.period =  'pm';
        return 1;
              break;
      case 14:
      this.period =  'pm';
        return 2;
              break;
      case 15:
      this.period =  'pm';
        return 3;
              break;
      case 16:
      this.period =  'pm';
        return 4;
              break;
      case 17:
      this.period =  'pm';
        return 5;
              break;
      case 18:
      this.period =  'pm';
        return 6;
              break;
      case 19:
      this.period =  'pm';
        return 7;
              break;
      case 20:
      this.period =  'pm';
        return 8;
              break;
      case 21:
      this.period =  'pm';
        return 9;
              break;
      case 22:
      this.period =  'pm';
        return 10;
              break;
      case 23:
      this.period =  'pm';
        return 11;
              break;
      case 24:
      this.period =  'pm';
        return 12;
              break;


        default:
        return false;
        break;
    }
  }

  /**
  * @description
  * @author @moayadkhater <hello@moayadkh.net>
  * @param
  * @return
  */
  function init(){
    setTimeUI();

      var  i = {
        getDate   : getDate(),
        getDay    : getDay(),
        getMonth  : getMonth(),
        getHours  : getHours(),
        getMinutes : getMinutes(),
        getMillSeconds : getMillSeconds(),
        getYear  : getYear(),
        getFullYear   : getFullYear(),
        getTime   : getTime()
      };

      var u = {
        getUTCDate    : getUTCDate(),
        getUTCDay     : getUTCDay(),
        getUTCFullYear: getUTCFullYear(),
        getUTCHours   : getUTCHours(),
        getUTCMilliseconds: getUTCMilliseconds(),
        getUTCMinutes : getUTCMinutes(),
        getUTCMonth   : getUTCMonth(),
        getUTCSeconds : getUTCSeconds(),


      };
      // console.log(i, u);
  }


  return{
    init  : init
  }
}();


  var time = new Time();
  time.init();
