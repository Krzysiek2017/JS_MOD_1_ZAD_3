var os = require('os');

function getTimeFormat(changeToTime) {
    var uptime = os.uptime();
    if (uptime >= 3600) {
        uptime = uptime / 3600;
    }
    console.log('Uptime:', (uptime).toFixed(0), 'h' + uptime.toFixed(0) / 60, 'm' + uptime.toFixed(0) / 60, 's');
}
exports.print = getTimeFormat;