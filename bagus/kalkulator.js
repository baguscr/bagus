let bil1=parseInt(document.getElementById("angka1").value);
let bil2=parseInt(document.getElementById("angka2").value);
let op=document.getElementById("operator").value;
//document.write(biI1);
//document.log(bil1);
///document.log(op);
 let hasil=0;
switch (op) {   
    case "+":      
        hasil=biI1+biI2;
        break;
    case"-":
        hasil=biI1-biI2;
        break;
    case"*":
        hasil=biI1*biI2;
        break;
    case"/":
        hasil=biI1/biI2;
        break;
    default:
        break;
}
document.write(biI1+" "+op+" "+biI2+" = "+hasil);