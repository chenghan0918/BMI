var result=document.querySelector('.result');
var BMI_data=[];
var height_data=[];
var weight_data=[];
//var weight=document.getElementById('weight').value;
var height=document.getElementById('height').value;
/*if(JSON.parse(localStorage.getItem('BMI_data'))!=null){
    BMI_data=JSON.parse(localStorage.getItem('BMI_data'));
    height_data=JSON.parse(localStorage.getItem('height_data'));
    weight_data=JSON.parse(localStorage.getItem('weight_data'));
    showList();
}*/
var result_button =document.getElementById('result_button');
result_button.addEventListener('click',calaculateResult);
function calaculateResult(){
    console.log(weight);
    var BMI=(weight/((height/100)*(height/100))).toFixed(2);
    console.log(BMI)
    BMI_data.push(BMI);
    height_data.push(height);
    weight_data.push(weight);
    var str_BMI_data=JSON.stringify(BMI_data);
    localStorage.setItem("BMI_data",str_BMI_data);
    var str_height_data=JSON.stringify(height_data);
    localStorage.setItem("height_data",str_height_data);
    var str_weight_data=JSON.stringify(weight_data);
    localStorage.setItem("weight_data",str_weight_data);
    showList();
}

function showList(){
    str='';
    for (let index = 0; index < BMI_data.length; index++) {
        str+="<li>"+
        '<table>'+
            '<tr>'+ 
                '<td>'+BMI_data[index]+'</td>'+
                '<td>'+BMI_data[index]+'</td>'+
            '</tr>'
        '</table>'+
        "<a href='#' BMI_data-num="+
        index+" class='delete'>刪除</a></li>"
    }
    result.innerHTML=str;
}
result.addEventListener('click',de);
function de(e){
    var num=e.target.dataset.num;
    if(e.target.nodeName=='A'){
        BMI_data.splice(num,1);
        height_data.splice(num,1);
        weight_data.splice(num,1);
    }
    var str_BMI_data=JSON.stringify(BMI_data);
    localStorage.setItem("BMI_data",str_BMI_data);
    var str_height_data=JSON.stringify(height_data);
    localStorage.setItem("height_data",str_height_data);
    var str_weight_data=JSON.stringify(weight_data);
    localStorage.setItem("weight_data",str_weight_data);
    showList();
}

