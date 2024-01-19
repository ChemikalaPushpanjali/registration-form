document.querySelector("#btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let fname=document.querySelector("#uname").value
    let email=document.querySelector("#email").value
    let pwd=document.querySelector("#pwd").value
    if(fname.length==0 || fname=="" || fname==null){
        document.querySelector("#err").innerHTML="Enter fname";
        document.querySelector("#err").style.color="red"
    }
    else if(email.length==0 || email=="" || email==null){
        document.querySelector("#err").innerHTML="Enter email";
        document.querySelector("#err").style.color="red"
    }
    else if(pwd.length==0){
        document.querySelector("#err").innerHTML="Enter Password";
        document.querySelector("#err").style.color="red"
    }
   else{
        //document.querySelector("#err").innerHTML="Register Successfully"
        //document.querySelector("#err").style.color="green"
        const data=new FormData()
        data.append("uname",uname)
        data.append("email",email)
        data.append("pwd",pwd)
        //API INTEGRATION HERE
        let http=new XMLHttpRequest()
        http.open("POST","http://ilandertech.com/api/index.php/Welcome/AddStuRegister")
        http.send(data)
        console.log(http)
        http.onreadystatechange=()=>{
            if(http.readyState==4 && http.status==200){
                console.log(http.response)
                let result=JSON.parse(http.response)
                console.log(result)
                document.querySelector("#err").innerHTML=result.message
                if(result.status==1){
                    document.querySelector("#err").style.color="green"
                }
                else{
                    document.querySelector("#err").style.color="red"
                }
            }
        }
    }
})
