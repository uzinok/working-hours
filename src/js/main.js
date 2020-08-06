window.onload = function () {
    workHours();
};

function workHours() {
    let scheduler = [{
            hours: 11,
            minute: 00,
            time: 50,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 11,
            minute: 50,
            time: 10,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 12,
            minute: 00,
            time: 55,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 12,
            minute: 55,
            time: 5,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 13,
            minute: 00,
            time: 45,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 13,
            minute: 45,
            time: 15,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 14,
            minute: 00,
            time: 55,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 14,
            minute: 55,
            time: 5,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 15,
            minute: 00,
            time: 50,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 15,
            minute: 50,
            time: 10,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 16,
            minute: 00,
            time: 55,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 16,
            minute: 55,
            time: 5,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 17,
            minute: 00,
            time: 55,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 17,
            minute: 55,
            time: 5,
            'signal to': 'alarm.mp3?v1'
        }, {
            hours: 18,
            minute: 00,
            time: 35,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 18,
            minute: 35,
            time: 25,
            'signal to': 'alarm.mp3?v1'
        },
        {
            hours: 19,
            minute: 00,
            time: 30,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 19,
            minute: 30,
            time: 30,
            'signal to': 'alarm.mp3?v1'
        },
        {
            hours: 20,
            minute: 00,
            time: 30,
            'signal to': 'alarm.mp3'
        },
        {
            hours: 20,
            minute: 30,
            time: 30,
            'signal to': 'alarm.mp3?v1'
        },
    ]

    let date = new Date();
    for (firstKey in scheduler) {

        if (scheduler[firstKey]['hours'] == date.getHours() && '00' == scheduler[firstKey]['minute'] && date.getMinutes() < scheduler[firstKey]['time']) {

            return svgTimer(
                document.querySelector(".timer-js"),
                0,
                59 - date.getMinutes() - (60 - scheduler[firstKey]['time']),
                59 - date.getSeconds(),
                scheduler[firstKey]['signal to']
                );
            }

            else if(scheduler[firstKey]['hours'] == date.getHours() && 00 != scheduler[firstKey]['minute']) {

            return svgTimer(
                document.querySelector(".timer-js"),
                0,
                59 - date.getMinutes(),
                59 - date.getSeconds(),
                scheduler[firstKey]['signal to']
            );
        }

    }
}