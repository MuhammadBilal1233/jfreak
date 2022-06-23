array = [];
array2 = [];
array3 = [];
array4 = [];
function Currency() {
    api = "4af1a6a2bc744dce9ef426ca542b4aa4";
    base1 = (document.getElementById("currency1").value).toUpperCase();
    console.log(base1);
    base2 = (document.getElementById("currency2").value).toUpperCase();
    console.log(base2);
    url = "https://api.currencyfreaks.com/latest/convert?apikey=" + api + "&from=" +
        base1 + "&to=" + base2 + "&amount=10";
    console.log(url)
    fetch(url).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data) => {
        try {
            document.getElementById("currency").innerHTML = "1 " + base1 +
                " = " + data.current_rates[base2] + " " + base2;
            try {
                document.getElementById("graphplotting").id = "graphplotting1";
            }
            catch {
                q = 3;
            }
        }
        catch {
            document.getElementById("currency").innerHTML = "You have Entered wrong Currency Code" +
                "<br>";
                document.getElementById("graphplotting1").id = "graphplotting";
                document.getElementById("graph1").id = "graph";
        }
    })

}

function week() {
    array = [];
    array2 = [];
    array3 = [];
    array4 = [];
    try {
        document.getElementById("graph").id = "graph1";
    }
    catch {
        q = 2;
    }
    datetime1 = new Date();
    console.log(datetime1)
    year1 = datetime1.getFullYear();
    console.log(year1)
    month1 = datetime1.getMonth() + 1;
    console.log(month1)
    day1 = datetime1.getDate();
    console.log(day1)
    console.log(year1 + " " + month1 + " " + day1);
    if (parseInt(month1) < 10) {
        month1 = "0" + month1
    }
    if (parseInt(day1) < 10) {
        day1 = "0" + day1
    }
    if (parseInt(day1) < 8) {
        if (parseInt(month1) == 1 || parseInt(month1) == 3 || parseInt(month1) == 5 || parseInt(month1) == 7 || parseInt(month1) == 8 || parseInt(month1) == 10 || parseInt(month1) == 12) {
            month2 = parseInt(month1) - 1;
            day2 = 24 + parseInt(day1)
        }
        else if (parseInt(month1) == 2) {
            if (parseInt((year1 % 4) == 0)) {
                month2 = parseInt(month1) - 1;
                day2 = 22 + parseInt(day1)
            }
            else {
                month2 = parseInt(month1) - 1;
                day2 = 21 + parseInt(day1)
            }
        }
        else {
            month2 = parseInt(month1) - 1;
            day2 = 23 + parseInt(day1)
        }
    }
    else {
        month2 = month1;
        day2 = parseInt(day1) - 7;
    }
    if (month2 == 0) {
        month2 = "12";
        year2 = parseInt(year1) - 1;
    }
    else {
        year2 = year1;
    }

    startdate = year2 + "-" + month2 + "-" + day2;
    enddate = year1 + "-" + month1 + "-" + day1;
    console.log(startdate)
    console.log(enddate)
    url2 = "https://api.currencyfreaks.com/timeseries?apikey=" + api +
        "&start_date=" + startdate + "&end_date=" + enddate + "&base=" + base1 + "&symbols=" + base2;
    console.log(url2)
    fetch(url2).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data1) => {
        console.log(data1)
        try {
            document.getElementById("currency5").innerHTML = ""
            array = Object.keys(data1.rates);
            for (let i = 0; i < array.length; i++) {
                array2.push(array[i].slice(0,10));
            }
            array = Object.values(data1.rates)
            for (let [key, value] of Object.entries(array)) {
                for (let [key1, value1] of Object.entries(value)) {
                    array3.push(value1)
                }
            }
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: array2,
                    datasets: [{
                        label: base1 + " vs " + base2,
                        data: array3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: false
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }
        catch {
            document.getElementById("graph1").id = "graph";
            document.getElementById("currency5").innerHTML = "<br>You have entered wrong dates or format";
        }

    })


}
function month() {
    array = [];
    array2 = [];
    array3 = [];
    array4 = [];
    try {
        document.getElementById("graph").id = "graph1";
    }
    catch {
        q = 2;
    }
    datetime1 = new Date();
    year1 = datetime1.getFullYear();
    month1 = datetime1.getMonth() + 1;
    day1 = datetime1.getDate();
    console.log(year1 + " " + month1 + " " + day1);
    if (parseInt(month1) < 10) {
        month1 = "0" + month1
    }
    if (parseInt(day1) < 10) {
        day1 = "0" + day1
    }
    if (parseInt(month1) == 1) {
        month2 = "12";
        year2 = parseInt(year1) - 1;
    }
    else {
        month2 = month1 - 1;
        year2 = year1;
    }
    startdate1 = year2 + "-" + month2 + "-" + day1;
    console.log(startdate1);
    enddate1 = year1 + "-" + month1 + "-" + day1;
    console.log(enddate1);
    url2 = "https://api.currencyfreaks.com/timeseries?apikey=" + api +
        "&start_date=" + startdate1 + "&end_date=" + enddate1 + "&base=" + base1 + "&symbols=" + base2;
    console.log(url2)
    fetch(url2).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data1) => {
        console.log(data1)
        try {
            document.getElementById("currency5").innerHTML = ""
            array = Object.keys(data1.rates);
            for (let i = 0; i < array.length; i++) {
                array2.push(array[i].slice(0,10));
            }
            array = Object.values(data1.rates)
            for (let [key, value] of Object.entries(array)) {
                for (let [key1, value1] of Object.entries(value)) {
                    array3.push(value1)
                }
            }
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: array2,
                    datasets: [{
                        label: base1 + " vs " + base2,
                        data: array3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: false
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }
        catch {
            document.getElementById("graph1").id = "graph";
            document.getElementById("currency5").innerHTML = "<br>You have entered wrong dates or format";
        }

    })


}
function year() {
    array = [];
    array2 = [];
    array3 = [];
    array4 = [];
    try {
        document.getElementById("graph").id = "graph1";
    }
    catch {
        q = 2;
    }
    datetime1 = new Date();
    year1 = datetime1.getFullYear();
    month1 = datetime1.getMonth() + 1;
    day1 = datetime1.getDate();
    console.log(year1 + " " + month1 + " " + day1);
    if (parseInt(month1) < 10) {
        month1 = "0" + month1
    }
    if (parseInt(day1) < 10) {
        day1 = "0" + day1
    }
    year2 = parseInt(year1) - 1;
    startdate2 = year2 + "-" + month1 + "-" + day1;
    console.log(startdate2);
    enddate2 = year1 + "-" + month1 + "-" + day1;
    console.log(enddate2);
    url2 = "https://api.currencyfreaks.com/timeseries?apikey=" + api +
        "&start_date=" + startdate2 + "&end_date=" + enddate2 + "&base=" + base1 + "&symbols=" + base2;
    console.log(url2)
    fetch(url2).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data1) => {
        console.log(data1)
        try {
            document.getElementById("currency5").innerHTML = ""
            array = Object.keys(data1.rates);
            for (let i = 0; i < array.length; i++) {
                array2.push(array[i].slice(0,10));
            }
            array = Object.values(data1.rates)
            for (let [key, value] of Object.entries(array)) {
                for (let [key1, value1] of Object.entries(value)) {
                    array3.push(value1)
                }
            }
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: array2,
                    datasets: [{
                        label: base1 + " vs " + base2,
                        data: array3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: false
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }
        catch {
            document.getElementById("graph1").id = "graph";
            document.getElementById("currency5").innerHTML = "<br>You have entered wrong dates or format";
        }

    })

}

function year5() {
    array = [];
    array2 = [];
    array3 = [];
    array4 = [];
    try {
        document.getElementById("graph").id = "graph1";
    }
    catch {
        q = 2;
    }
    datetime1 = new Date();
    year1 = datetime1.getFullYear();
    month1 = datetime1.getMonth() + 1;
    day1 = datetime1.getDate();
    console.log(year1 + " " + month1 + " " + day1);
    if (parseInt(month1) < 10) {
        month1 = "0" + month1
    }
    if (parseInt(day1) < 10) {
        day1 = "0" + day1
    }
    year2 = parseInt(year1) - 5;
    startdate3 = year2 + "-" + month1 + "-" + day1;
    console.log(startdate3);
    enddate3 = year1 + "-" + month1 + "-" + day1;
    console.log(enddate3);
    url2 = "https://api.currencyfreaks.com/timeseries?apikey=" + api +
        "&start_date=" + startdate3 + "&end_date=" + enddate3 + "&base=" + base1 + "&symbols=" + base2;
    console.log(url2)
    fetch(url2).then((response) => {
        console.log("inside first then")
        return response.json();
    }).then((data1) => {
        console.log(data1)
        try {
            document.getElementById("currency5").innerHTML = ""
            array = Object.keys(data1.rates);
            for (let i = 0; i < array.length; i++) {
                array2.push(array[i].slice(0,10));
            }
            array = Object.values(data1.rates)
            for (let [key, value] of Object.entries(array)) {
                for (let [key1, value1] of Object.entries(value)) {
                    array3.push(value1)
                }
            }
            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: array2,
                    datasets: [{
                        label: base1 + " vs " + base2,
                        data: array3,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: false
                        },
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }
        catch {
            document.getElementById("graph1").id = "graph";
            document.getElementById("currency5").innerHTML = "<br>You have entered wrong dates or format";
        }

    })

}
