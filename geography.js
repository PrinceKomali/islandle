function rad(d) {return (d * Math.PI)/180;}
function deg(d) {return (d * 180)/Math.PI;}
function distance(lat1, lon1, lat2, lon2) {
    var dLat = rad(lat2 - lat1);
    var dLon = rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
    return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));;
}
function title(s) {
    return s.replace(/\S*/g, function (t) {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
}


function angle(lat1, lon1, lat2, lon2) {
    if (lat1 === lat2 && lon1 === lon2) return "🎉"
    var dLon = rad(lon2 - lon1);
    var dLat = Math.log(
        Math.tan(rad(lat2) / 2 + Math.PI / 4) /
        Math.tan(rad(lat1) / 2 + Math.PI / 4)
    );
    if (Math.abs(dLon) > Math.PI) {
        if (dLon > 0) {
            dLon = (Math.PI * 2 - dLon) * -1;
        } else {
            dLon = Math.PI * 2 + dLon;
        }
    }
    let d = (deg(Math.atan2(dLon, dLat)) + 360) % 360;

    return ['⬆️', '↗️', '➡️', '↘️', '⬇️', '↙️', '⬅️', '↖️', '⬆️'][Math.round(d / 45)]
}