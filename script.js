//function label
function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele;
}
// function break
function break_create(){
    var ele1 = document.createElement("br")
    return ele1;
}
// function input
function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attr1value)
    element.setAttribute(attr2name,attr2value)
    return element;
}
// h1
var h1 = document.createElement("h1")
h1.innerHTML = "Form submession"
var f1_break =break_create();

// 1 label label and input feild for first_name;
var fname = label_create("label","for","fname","First Name:");
var fname_break = break_create();
var fname_input = input_create("input","type","text","id","fname");
fname_input.setAttribute("placeholder","FirstName")
var f2_break =break_create();


// label label and input feild for third_name;
var n1_break =break_create();
var lname = label_create("label","for","lname","Last Name:");
var lname_break = break_create();
var lname_input = input_create("input","type","text","id","lname");
lname_input.setAttribute("placeholder","LastName")
var f3_break =break_create();

// label for address
var n2_break =break_create();
var address = label_create("label","for","adrs","Address Line:");
var address_break = break_create();
var address_input = input_create("input","type","text","id","adrs");
address_input.setAttribute("placeholder","Address")
var f4_break =break_create();

// input pin
var n3_break =break_create();
var pin = label_create("label","for","pin","PIN:");
var pin_break = break_create();
var pin_input = input_create("input","type","number","id","pin");
pin_input.setAttribute("placeholder","Enter Pin")
var f5_break =break_create();

//gender
var n4_break =break_create();
var span = document.createElement("span")
span.innerHTML = "Gender:"
var gen_break = break_create();
//var gen1_break = break_create();
var  male = label_create("label","for","male","Male");

var  male_input = input_create("input","type","radio","id","male");
male_input.setAttribute("name","gender")
var gen2_break = break_create();
var  fmale = label_create("label","for","fmale","Female");
var  fmale_input = input_create("input","type","radio","id","fmale");
fmale_input.setAttribute("name","gender")
var f6_break =break_create();
var f7_break =break_create();
// check boks
var div1 = document.createElement("div")
div1.className = "choice"
div1.innerHTML ="Choice of food(must choose at least 2 out of 5 options):"
var f12_break =break_create();
var ch1_input = input_create("input","type","checkbox","id","ch1");
var ch1_label = label_create("label","for","ch1","North Indian");
var ch1_break = break_create();
var ch2_input = input_create("input","type","checkbox","id","ch2");
var ch2_label = label_create("label","for","ch1","South Indian");
var ch2_break = break_create();
var ch3_input = input_create("input","type","checkbox","id","ch3");
var ch3_label = label_create("label","for","ch1","Chinese");
var ch3_break = break_create();
var ch4_input = input_create("input","type","checkbox","id","ch4");
var ch4_label = label_create("label","for","ch1","Japanese");
var ch4_break = break_create();
var ch5_input = input_create("input","type","checkbox","id","ch5");
var ch5_label = label_create("label","for","ch1","Sea Food");
var ch5_break = break_create();
div1.append(f12_break,ch1_input,ch1_label,ch1_break,ch2_input,ch2_label,ch2_break,ch3_input,ch3_label,ch3_break,ch4_input,ch4_label,ch4_break, 
    ch5_input,ch5_label,ch5_break)
// state
var n5_break =break_create();
var state = label_create("label","for","sta","State:");
var state_break = break_create();
var state_input = input_create("input","type","text","id","sta");
state_input.setAttribute("placeholder","State")
var f8_break =break_create();

// country
var n6_break =break_create();
var con = label_create("label","for","con","Country:");
var con_break = break_create();
var con_input = input_create("input","type","text","id","con");
con_input.setAttribute("placeholder","Country")
var f9_break =break_create();

// submit
var n7_break =break_create();
var button = document.createElement("button")
button.setAttribute("type","button")
button.setAttribute("onclick","foo()")
button.innerHTML = "Submit"
button.className = "btn btn-secondary btn-lg"
var f10_break =break_create();
// table head
var n8_break =break_create();
var h1_p1 = document.createElement("h1")
h1_p1.setAttribute("id","top")
h1_p1.innerHTML = "Temporary Database"
var f11_break =break_create();
/// table
var table = document.createElement("table")
table.className = "table"
// create thead
var thead = document.createElement("thead")
thead.className = "thead-dark"
// create tbody
var tbody = document.createElement("tbody")
// table row
function create_tr(){
    var tr = document.createElement("tr")
    return tr
}
// table head
function create_th(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname)
    ele.setAttribute(attrname,attrvalue)
    ele.innerHTML = content
    return ele
}
//table data(td)
function create_td(tagname,content){
    var element = document.createElement(tagname)
    element.innerHTML = content;
    return element
}
// tablehead content
var thead_tr  = create_tr()
var th1 = create_th("th","scope","col","Fristname")
var th2 = create_th("th","scope","col","Lastname")
var th3 = create_th("th","scope","col","Address")
var th4 = create_th("th","scope","col","Pincode");
var th5 = create_th("th","scope","col","Gender");
var th6 = create_th("th","scope","col","Food");
var th7 = create_th("th","scope","col","State");
var th8 = create_th("th","scope","col","Country");
thead_tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(thead_tr);



//function
function foo(){
    var f1 = document.getElementById("fname").value
    var f2 = document.getElementById("lname").value
    var f3 = document.getElementById("adrs").value
    var f4 = document.getElementById("pin").value
    var f5 = document.querySelector(`input[name="gender"]:checked`).value;
    var f6 = document.getElementsByClassName("choice").value
    var f7 = document.getElementById("sta").value
    var f8 = document.getElementById("con").value

    var tbody_tr = create_tr()
    var td1 = create_td("td",`${f1}`)
    var td2 = create_td("td",`${f2}`)
    var td3 = create_td("td",`${f3}`)
    var td4 = create_td("td",`${f4}`)
    var td5 = create_td("td",`${f5}`)
    var td6 = create_td("td",`${f6}`)
    var td7 = create_td("td",`${f7}`)
    var td8 = create_td("td",`${f8}`)

    tbody_tr.append(td1,td2,td3,td4,td5,td6,td7,td8,);
    tbody.append(tbody_tr)
    table.append(thead,tbody)
}



document.body.append(h1,f1_break,fname,fname_break,fname_input,f2_break,n1_break,lname,lname_break,lname_input,f3_break,n2_break,address,
    address_break,address_input,f4_break,n3_break,pin,pin_break,pin_input,f5_break,n4_break,span,gen_break, 
    male,male_input,gen2_break,fmale,fmale_input,f6_break,f7_break,div1,
    n5_break,state,state_break,state_input,f8_break, n6_break,con,con_break,con_input,f9_break,
    n7_break,button,f10_break,n8_break,h1_p1,f11_break,table)







