var result=document.querySelector('.result');
var BMI_data=[];
var height_data=[];
var weight_data=[];
var time_data=[];
BMI_data=JSON.parse(localStorage.getItem('BMI_data'));
height_data=JSON.parse(localStorage.getItem('height_data'));
weight_data=JSON.parse(localStorage.getItem('weight_data'));
time_data=JSON.parse(localStorage.getItem('time_data'));
showList();
var result_button =document.getElementById('result_button');
result_button.addEventListener('click',calaculateResult);
function calaculateResult(){
    var weight=document.getElementById('weight_value').value;
    var height=document.getElementById('height_value').value;
    var BMI=(weight/((height/100)*(height/100))).toFixed(2);
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    time_data.push({year:year, month:month, day:day});
    BMI_data.push(BMI);
    weight_data.push(weight);
    height_data.push(height);
    var str_BMI_data=JSON.stringify(BMI_data);
    localStorage.setItem("BMI_data",str_BMI_data);
    var str_height_data=JSON.stringify(height_data);
    localStorage.setItem("height_data",str_height_data);
    var str_weight_data=JSON.stringify(weight_data);
    localStorage.setItem("weight_data",str_weight_data);
    var str_time_data=JSON.stringify(time_data);
    localStorage.setItem("time_data",str_time_data);
    var change_BMI=document.querySelector('.change_BMI');
    var change_small_button=document.querySelector('.change_small_button');
    var change_range=document.querySelector('.change_range')
    showList();
    if(BMI<18.5){
        result_button.value=BMI
        result_button.style='border: 6px solid #31BAF9;;background:#424242;font-family:SFNSDisplay;font-size: 32px;color: #31BAF9;';
        change_BMI.style.display='inline';
        change_BMI.style.color="#31BAF9";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor='#31BAF9';
        change_range.style.display='inline';
        change_range.innerHTML='過輕';
        change_range.style.color="#31BAF9";
    }
    else if(BMI>=18.5&&BMI<24){
        result_button.value=BMI
        result_button.style='border: 6px solid  #86D73E;background:#424242;font-family:SFNSDisplay;font-size: 32px;color:  #86D73E;';
        change_BMI.style.display='inline';
        change_BMI.style.color="#86D73E";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor='#86D73E';
        change_range.style.display='inline';
        change_range.innerHTML='理想';
        change_range.style.color=" #86D73E";
    }
    else if(BMI>=24&&BMI<27){
        result_button.value=BMI
        result_button.style='border: 6px solid   #FF982D;background:#424242;font-family:SFNSDisplay;font-size: 32px;color:   #FF982D';
        change_BMI.style.display='inline';
        change_BMI.style.color="#FF982D";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor=' #FF982D';
        change_range.style.display='inline';
        change_range.innerHTML='過重';
        change_range.style.color=" #FF982D";
    }
    else if(BMI>=27&&BMI<30){
        result_button.value=BMI
        result_button.style='border: 6px solid #FF6C02;background:#424242;font-family:SFNSDisplay;font-size: 32px;color:#FF6C02';
        change_BMI.style.display='inline';
        change_BMI.style.color="#FF6C02";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor='#FF6C02';
        change_range.style.display='inline';
        change_range.innerHTML='輕度肥胖';
        change_range.style.color="#FF6C02";
    }
    else if(BMI>=30&&BMI<35){
        result_button.value=BMI
        result_button.style='border: 6px solid  #FF6C02;background:#424242;font-family:SFNSDisplay;font-size: 32px;color: #FF6C02;';
        change_BMI.style.display='inline';
        change_BMI.style.color="#FF6C02";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor='#FF6C02;';
        change_range.style.display='inline';
        change_range.innerHTML='中度肥胖';
        change_range.style.color="#FF6C02";
    }
    else{
        result_button.value=BMI
        result_button.style='border: 6px solid  #FF1200;background:#424242;font-family:SFNSDisplay;font-size: 32px;color:#FF1200;';
        change_BMI.style.display='inline';
        change_BMI.style.color="#FF1200";
        change_small_button.style.display='block';
        change_small_button.style.backgroundColor='#FF1200';
        change_range.style.display='inline';
        change_range.innerHTML='重度肥胖';
        change_range.style.color="#FF1200";
    }
}

function showList(){
    str='';
    for (let i = 0; i < BMI_data.length; i++) {
        str +=
        "<li>"+
        '<div style="margin:0 auto;display:flex;">'+
        '<div class="color"></div>'+
        '<table>'+
        '<tr>'+
            '<td class="range"></td>'+
            '<td class="BMI"><span class="title">BMI</span><span class="value">'+BMI_data[i]+'</span></td>'+
            '<td class="weight"><span class="title">weight</span><span class="value">'+weight_data[i]+'</span></td>'+
            '<td class="height"><span class="title">height</span><span class="value">'+height_data[i]+'</span></td>'+
            '<td>'+time_data[i].day+'-'+time_data[i].month+'-'+time_data[i].year+'</td>'+
        '</tr>'+
        '</table>'+ '</div>'+"<a href='#' data-num="+i+" class='delete'></a>"+"</li>"
    } 
    result.innerHTML=str;
    var range=document.querySelectorAll('.range');
    var color=document.querySelectorAll('.color');
    for(var i=0;i<BMI_data.length;i++){
        if(BMI_data[i]<18.5){
            range[i].innerHTML='過輕  ';
            color[i].style="background:#31BAF9;box-shadow: 2px 0 3px 0 rgba(49,186,249,0.29);"
        }
        else if(BMI_data[i]>=18.5&&BMI_data[i]<24){
            range[i].innerHTML='理想  ';
            color[i].style="background:#86D73F;box-shadow: 2px 0 3px 0 rgba(133,215,63,0.29);";
        }
        else if(BMI_data[i]>=24&&BMI_data[i]<27){
            range[i].innerHTML='過重 ';
            color[i].style="background:#FF982D;box-shadow: 2px 0 3px 0 rgba(255,152,45,0.29);";
        }
        else if(BMI_data[i]>=27&&BMI_data[i]<30){
            range[i].innerHTML='輕度肥胖';
            color[i].style="background:#FF6C02;box-shadow: 2px 0 3px 0 rgba(255,108,2,0.29);width:7pxheight:62px;";
        }
        else if(BMI_data[i]>=30&&BMI_data[i]<35){
            range[i].innerHTML='中度肥胖';
            color[i].style="background: #FF6C02;box-shadow: 2px 0 3px 0 rgba(255,108,2,0.29);";
        }
        else{
            range[i].innerHTML='重度肥胖';
            color[i].style="background: #FF1200;box-shadow: 2px 0 3px 0 rgba(255,17,0,0.29);";
        }
    }
}

result.addEventListener('click',de);
function de(e){
    var num=e.target.dataset.num;
    if(e.target.nodeName=='A'){
        BMI_data.splice(num,1);
        height_data.splice(num,1);
        weight_data.splice(num,1);
        time_data.splice(num,1);
    }
    var str_BMI_data=JSON.stringify(BMI_data);
    localStorage.setItem("BMI_data",str_BMI_data);
    var str_weight_data=JSON.stringify(weight_data);
    localStorage.setItem("weight_data",str_weight_data);
    var str_height_data=JSON.stringify(height_data);
    localStorage.setItem("height_data",str_height_data);
    var str_time_data=JSON.stringify(time_data);
    localStorage.setItem("time_data",str_time_data);
    showList();
}
var change_small_button = document.querySelector('.change_small_button');
change_small_button.addEventListener('click',function(){
    calaculateResult()
})