var siteName=document.getElementById("in-1")
var siteUrl=document.getElementById("in-2")
var btn=document.getElementById("myBtn")
var row =document.getElementById("row")

 
 var allSites
 if(localStorage.getItem("items")==null)
     {
         allSites=[]
     }
 else
     {
         allSites=JSON.parse(localStorage.getItem("items"))
         display()
     }


btn.onclick=function(e)
{
  
        makeSure()  
      

   
}

function valid()
{
    var find =siteUrl.value
     find.indexOf("http://")
     if(find.indexOf("http://")<0)
    {
        alert("please enter valid URL")
    }
    else
        {
            add()
            display()
            clear()
        }
}
function add()
{
    var site ={}
     site=
        {
        name:siteName.value,
        link:siteUrl.value,
        
    }
    allSites.push(site)
    console.log(allSites)
    localStorage.setItem("items",JSON.stringify(allSites))

    
    
}
function makeSure()
{
    
  if(siteName.value=='')
    {
      
        
        alert("pleaze enter siteName")
    } 
    
        
    else
        {
           valid()  
        }
      
}
 function display()
{
    var col =''
 for(var i=0;i<allSites.length;i++)
     {
         col+='<div class="col-md-8 decore pb-2  mb-4 pt-2 d-flex"><h1>'+allSites[i].name+'</h1><button class="btn btn-info mx-2"> <a class="text-decoration-none text-white" href='+allSites[i].link+'>visit</a></button> <button class="btn btn-danger" onclick="del('+i+')">delete</button></div>'
        
     }
    row.innerHTML=col
}
function del(id)
{
    allSites.splice(id,1)
        localStorage.setItem("items",JSON.stringify(allSites))

    console.log(id)
    display()
    
}
function clear ()
{
    siteName.value=''
    siteUrl.value=''
}