var minutes = document.getElementById('min')
var sec = document.getElementById('sec')



var min_count = 0
var sec_count = 0


function start_timer() {
    document.getElementById('stbtn').setAttribute('disabled' , true)
    if (sec_count < 9) {
        sec_count = ++sec_count
        document.getElementById('sec').innerHTML = '0' + sec_count
        console.log(sec_count)
    } else if (sec_count < 59 && sec_count >= 9) {
        sec_count = sec_count + 1
        document.getElementById('sec').innerHTML = sec_count

    } else {
        sec_count = 0
        document.getElementById('sec').innerHTML = '0' + sec_count

        if (min_count < 9) {
            min_count = min_count + 1
            document.getElementById('min').innerHTML = '0' + min_count
        }else if(min_count < 59 && min_count >= 9 ){
            min_count = min_count + 1
            document.getElementById('min').innerHTML =  min_count
        }

    }
}