function date_time(id) {
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    h = date.getHours();
    if (h < 10) {
        h = "0" + h
    }
    m = date.getMinutes();
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s
    }
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    result = days[day] + ' ' + months[month] + ' ' + d + ' ' + h + ':' + m + ' ' + ampm;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("' + id + '");', '1000');
    return true
}
