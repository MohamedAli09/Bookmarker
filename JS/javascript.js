 var SiteName = document.getElementById('SiteName');
 var SiteURL = document.getElementById('SiteURL');
 var myBody = document.getElementById('myBody');
 var displayError = document.getElementById('displayError');
//  displayError.classList.add('d-none')
//  displayError.classList.remove('d-none')
var true1 = document.getElementById('true1');
var true2 = document.getElementById('true2');
var false1 = document.getElementById('false1');
var false2 = document.getElementById('false2');
const pattern =  /^\b[^ ]+[a-zA-Z]\.+[a-zA-Z]{2,}\b$/
const pattern2 = /[a-zA-Z]$/;
 




function closeError(){
  displayError.classList.add('d-none')  
}

 var productList ;

 if(localStorage.getItem("productList")){
  productList = JSON.parse(localStorage.getItem("productList"));
  display(productList);   



}else{ 
  productList = [];
}


function addProduct(){
 var product = {
   sitename : SiteName.value ,
   siteurl : SiteURL.value 

 }
 if(SiteName.value.length >= 3 && !SiteName.value.includes(' ') && pattern2.test(SiteName.value) && pattern.test(SiteURL.value)  ){  
  productList.push(product);
   saveToLocalStorage();

 clear();
 display(productList); 
 true1.classList.add('d-none') 
 true2.classList.add('d-none') 



 }
 else{
  displayError.classList.remove('d-none')
 }

}



function display(plist){
 var cartonna = "";
for(var i = 0; i < productList.length; i++){
  cartonna += 
  `
  <tr>
  <td>${i+1}</td> 
  <td>  ${plist[i].sitename}  </td>
  <td class=" ">
      <button class="btn1 btn btn-info text-light ps-2 pe-3 " onclick="openWebsite( ' ${plist[i].siteurl} '  )">
          <i class="fa-solid fa-eye pe-1"></i>
          Visit
      </button>
  </td>
  <td>
      <button class=" btn1 btn btn-danger" onclick="Delete(${i} )">
          <i class="fa-solid fa-trash-can" ></i>
          Delete
      </button>
  </td>
</tr>

  `
}

myBody.innerHTML = cartonna;
 

}

function clear() {
  SiteName.value = "";
  SiteURL.value = "";
}

function Delete(index){
  productList.splice(index, 1);
  saveToLocalStorage();
  display(productList); 

}

function saveToLocalStorage(){
   localStorage.setItem("productList", JSON.stringify(productList));
 }
 function openWebsite(url) {
  url = url.trim();
  url = "http://" + url
  window.open(url, '_blank');
}
 
function checkIsValidSiteNmae(){
  
  
   if(SiteName.value.length >= 3 && !SiteName.value.includes(' ') && pattern2.test(SiteName.value) ) {
     true1.classList.remove('d-none')
     false1.classList.add('d-none') 
    
  }else{
    true1.classList.add('d-none') 
    false1.classList.remove('d-none') 

  } 

 

 }

 
 function checkIsValidWebsiteUrl(){
   if(  pattern.test(SiteURL.value)  ){

    true2.classList.remove('d-none') 
    false2.classList.add('d-none') 


  }else{
    true2.classList.add('d-none') 
    false2.classList.remove('d-none') 

  }

 }
 
 