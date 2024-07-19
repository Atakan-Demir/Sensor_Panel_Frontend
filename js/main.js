document.addEventListener("DOMContentLoaded", function () {

    let currentValues = {
        minDis: 100,
        maxDis: 3500,
        offset: 10,
        interval: null,
        distance: null,
        percent: 3
    };
    // Bar
    var totalUnits = 4000;
    var blackSegmentWidth = 30;



    Highcharts.chart('container', {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '80%'
        },

        title: {
            text: 'Distance',
            style: {
                color: '#4e73df'
            }
        },

        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 4000,
            tickPixelInterval: 75,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px',
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: currentValues.minDis,
                to: currentValues.maxDis,
                color: '#55BF3B', // green
                thickness: 20,
                borderRadius: '50%'
            }, {
                from: 0,
                to: currentValues.minDis,
                color: '#DF5353', // red
                thickness: 20,
                borderRadius: '50%'
            }, {
                from: currentValues.maxDis,
                to: totalUnits,
                color: '#DDDF0D', // yellow
                thickness: 20
            }]
        },

        series: [{
            name: 'Distance',
            data: [600],
            tooltip: {
                valueSuffix: ' mm'
            },
            dataLabels: {
                format: '{y} mm',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }

        }]

    });

    // Add some life
setInterval(() => {
    const chart = Highcharts.charts[0];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 1000);

        let newVal = point.y + inc;

        // Ensure newVal is within the range 0 to 4000
        if (newVal < 0) {
            newVal = 0;
        } else if (newVal > 4000) {
            newVal = 4000;
        }

        point.update(newVal);
    }
}, 300);


// remove class
var elmCharts = document.querySelectorAll(".highcharts-credits");
elmCharts.forEach(function (elm) {
    elm.style.display = "none";
});

    var elmBlack = document.getElementById('black-segment');
    var elmGreen = document.getElementById('green-segment');
    var elmOffset = document.getElementById('offset-segment');

    elmBlack.style.width = (blackSegmentWidth / totalUnits * 100) + '%';

    var greenSegmentStart = currentValues.minDis / totalUnits * 100;
    var greenSegmentWidth = (currentValues.maxDis - currentValues.minDis) / totalUnits * 100;

    if (currentValues.offset > 0) {
        var offsetStart = (currentValues.maxDis / totalUnits * 100);
        var offsetWidth = currentValues.percent;

        elmOffset.style.left = offsetStart + '%';
        elmOffset.style.width = offsetWidth + '%';
        elmOffset.style.backgroundColor = '#FFB90F';

        console.log("Offset : " + offsetStart + " Offset Width : " + offsetWidth);
    } else {
        var offsetWidth = -currentValues.percent;
        var offsetStart = (currentValues.maxDis / totalUnits * 100) - offsetWidth;
        console.log("Offset : " + offsetStart + " Offset Width : " + offsetWidth);
        elmOffset.style.left = offsetStart + '%';
        elmOffset.style.width = offsetWidth + '%';
        elmOffset.style.backgroundColor = '#e74a3b';
    }

    elmGreen.style.left = greenSegmentStart + '%';
    elmGreen.style.width = greenSegmentWidth + '%';
    elmGreen.innerText = "";

});
