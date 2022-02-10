var hafiza1="";
        var hafiza2="";
        var sonuc=0;
        var islem=0;
        var yazi="";

        function yazdir(a){
            if(islem==0){
            hafiza1+=a;
            document.getElementById("calculate").innerText=hafiza1;
             }
             else if(islem==1){
            hafiza2+=a;
            document.getElementById("calculate").innerText=hafiza1+"+"+hafiza2;
                sonuc=parseInt(hafiza1)+parseInt(hafiza2);
             }
             else if(islem==2){
            hafiza2+=a;
            document.getElementById("calculate").innerText=hafiza1+"-"+hafiza2;
                sonuc=parseInt(hafiza1)-parseInt(hafiza2);
             }
             else if(islem==3){
            hafiza2+=a;
            document.getElementById("calculate").innerText=hafiza1+"*"+hafiza2;
                sonuc=parseInt(hafiza1)*parseInt(hafiza2);
             }
             else if(islem==4){
            hafiza2+=a;
            document.getElementById("calculate").innerText=hafiza1+"/"+hafiza2;
                sonuc=parseInt(hafiza1)/parseInt(hafiza2);
             }
        }
        function sonucf(){


            if(islem==1){
            document.getElementById("screen").innerHTML+=hafiza1+"+"+hafiza2+"="+sonuc+"<br>";
            }
            else if(islem==2){
                document.getElementById("screen").innerHTML+=hafiza1+"-"+hafiza2+"="+sonuc+"<br>";
            }
            else if(islem==3){
                document.getElementById("screen").innerHTML+=hafiza1+"x"+hafiza2+"="+sonuc+"<br>";
            }
            else if(islem==4){
                document.getElementById("screen").innerHTML+=hafiza1+"/"+hafiza2+"="+sonuc+"<br>";
            }
            hafiza1="";
            hafiza2="";
            sonuc=0;
            islem=0;
            yazi="";
            document.getElementById("calculate").innerHTML="";
    
    }
        function temiz(){
            hafiza1="";
            hafiza2="";
            sonuc=0;
            islem=0;
            yazi="";
            document.getElementById("calculate").innerHTML="";
            document.getElementById("screen").innerHTML="";
        }