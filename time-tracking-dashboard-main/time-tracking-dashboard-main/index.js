let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];


  let period = document.querySelectorAll(".end");
  let daily = document.getElementById("daily");
  let weekly = document.getElementById("week");
  let monthly = document.getElementById("month");

  daily.addEventListener('click', dailyFunc);
  monthly.addEventListener('click', monthlyFunc);
  weekly.addEventListener('click', weeklyFunc);

  window.onload = weeklyFunc();
  function dailyFunc(){
    daily.classList.add('active');
    monthly.classList.remove('active');
    weekly.classList.remove('active');

    period[0].innerHTML=` <h1>${data[0].timeframes.daily.current + 'hrs'} </h1> 
    <p>${'Yesterday - '+ data[0].timeframes.daily.previous + 'hrs'} </p> `
    period[1].innerHTML=` <h1>${data[1].timeframes.daily.current + 'hr'} </h1> 
    <p>${'Yesterday - '+ data[1].timeframes.daily.previous + 'hrs'} </p> `
    period[2].innerHTML=` <h1>${data[2].timeframes.daily.current + 'hr'} </h1> 
    <p>${'Yesterday - '+ data[2].timeframes.daily.previous + 'hr'} </p> `
    period[3].innerHTML=` <h1>${data[3].timeframes.daily.current + 'hr'} </h1> 
    <p>${'Yesterday - '+ data[3].timeframes.daily.previous + 'hr'} </p> `
    period[4].innerHTML=` <h1>${data[4].timeframes.daily.current + 'hr'} </h1> 
    <p>${'Yesterday - '+ data[4].timeframes.daily.previous + 'hrs'} </p> `
    period[5].innerHTML=` <h1>${data[5].timeframes.daily.current + 'hr'} </h1> 
    <p>${'Yesterday - '+ data[5].timeframes.daily.previous + 'hr'} </p> `

    
  }
  function weeklyFunc(){
  weekly.classList.add('active');
  daily.classList.remove('active');
  monthly.classList.remove('active');
  period[0].innerHTML=`<h1>${data[0].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[0].timeframes.weekly.previous}</p>`
  period[1].innerHTML=`<h1>${data[1].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[1].timeframes.weekly.previous}</p>`
  period[2].innerHTML=`<h1>${data[2].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[2].timeframes.weekly.previous}</p>`
  period[3].innerHTML=`<h1>${data[3].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[3].timeframes.weekly.previous}</p>`
  period[4].innerHTML=`<h1>${data[4].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[4].timeframes.weekly.previous}</p>`
  period[5].innerHTML=`<h1>${data[5].timeframes.weekly.current+'hrs'}</h1>
  <p>${'Last Week-'+data[5].timeframes.weekly.previous}</p>`
  

  }

  function monthlyFunc(){
    daily.classList.remove('active');
    monthly.classList.add('active');
    weekly.classList.remove('active');
    period[0].innerHTML=` <h1>${data[0].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[0].timeframes.monthly.previous + 'hrs'} </p> `
    period[1].innerHTML=` <h1>${data[1].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[1].timeframes.monthly.previous + 'hrs'} </p> `
    period[2].innerHTML=` <h1>${data[2].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[2].timeframes.monthly.previous + 'hrs'} </p> `
    period[3].innerHTML=` <h1>${data[3].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[3].timeframes.monthly.previous + 'hrs'} </p> `
    period[4].innerHTML=` <h1>${data[4].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[4].timeframes.monthly.previous + 'hrs'} </p> `
    period[5].innerHTML=` <h1>${data[5].timeframes.monthly.current + 'hrs'} </h1> 
    <p>${'Last month - '+ data[5].timeframes.monthly.previous + 'hrs'} </p> `
  }
//   console.log("hello");

