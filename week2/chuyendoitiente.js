function convertamount(){
    var amount= document.getElementById("idamount").value;
    var From=document.getElementById('idFrom').value;
    var To=document.getElementById('idTo').value;
    console.log(amount);
    console.log (From);
    console.log (To);
    if (From=='USD'&&To=='VND'){
        var amount=amount*23000;
        alert("ket qua la: "+ amount);
    }else{
        if (From=='USD'&&To=='USD'){
            alert("ket qua la: "+ amount);
        }else{
            if(From=='VND' && To=='USD'){
            var amount=amount/23000;
            alert("ket qua la= "+ amount);
        }else{
            alert("ket qua la= "+ amount);
        }
    }
    }
}