function get_para_1(){
    var inputs= [];
    for (var i= 1; i<=6 ; i++){
        inputs.push(document.getElementById("text_para_"+i).value);
    }
    document.getElementById("show_paragraph1").innerHTML = inputs.join(". ");
}
function get_para_2(){
    var inputs= [];
    for (var i= 1; i<=6 ; i++) {
        inputs.push(document.getElementById("text_para_second_"+i).value);  
    }
    document.getElementById("show_paragraph2").innerHTML = inputs.join(". ");
}
