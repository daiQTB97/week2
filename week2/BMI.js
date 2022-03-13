function show(){
    let weight = parseFloat(document.getElementById("IDcannang").value);
    let height = parseFloat(document.getElementById("IDchieucao").value);
    let BMI = weight/(height*height);
        if (BMI < 18){
            alert(BMI + " Thiếu cân");
        }else if (BMI>= 18 && BMI < 25){
            alert(BMI + " Bình thường");
        }else if ( BMI >= 25 && BMI < 30){
            alert(BMI + " Thừa cân");
        }else
        alert(BMI + " Béo phì");
}