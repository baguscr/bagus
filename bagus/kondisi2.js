//buat nilai rata-rata dari 4 input nilai d
let nila1=pelrsenInt(prompt("masukan nilai 1"));
let nila2=pelrsenInt(prompt("masukan nilai 2"));
let nila3=pelrsenInt(prompt("masukan nilai 3"));
let nila4=pelrsenInt(prompt("masukan nilai 4"));
let ratarata=(nilai1+nilai2+nilai3+nilai4);

//ketik kode konversi rata rata ke nilai 
if (ratarata>85){
    nilai_huruf="A";
}
else if(ratarata>=65){
    nilai_huruf="B";
}
else if(ratarata>70) {
    nilai_huruf="C";
}
else{
    nilai_huruf="D"
}
document.write("nilai :"+nilai_huruf+"<br>")
document.write(ratarata);


    
    
