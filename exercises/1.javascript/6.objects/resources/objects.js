let aboutme ={
    name: "Zeger Kenis",
    age:"23",
    gender:"Male",
    favoritefood: "Steak",
    favoriteseries: "Seinfeld",
    favoritemovie:"Oldboy",
    single: "yes",
  };
  let myvalues= Object.values(aboutme);
  let mykeys= Object.keys(aboutme);
  let list = document.getElementById('list');

  for (var i = 0; i <= 6 ; i++) {
    let lis = document.createElement("li");
    lis.innerHTML= (mykeys[i]+" : "+myvalues[i]);
    list.append(lis)
  };


  let myfamily=[]
function FamilyMember(name,age,gender,image){
let photo = document.createElement("img");
photo.src = image;

let btn = document.createElement("button");
btn.innerHTML = "Click me";
btn.addEventListener ("click", showHide);

function showHide (event) {
    if (photo.style.visibility == "visible") {
        photo.style.visibility = "hidden";
    } else {
        photo.style.visibility = "visible";
    }
}
showHide();
this.picture = photo;
this.Name = name;
this.Age = age;
this.Gender = gender;
this.button = btn;
this.showHide = function(){
  showHide();
};

myfamily.push(this)
};

console.dir(myfamily);
let dad = new FamilyMember("Jo Kenis","58","Male","resources/image.png");
let mom = new FamilyMember("Ann Vanbaelen","52","Female","resources/image1.jpg");
let sister = new FamilyMember("Merel Kenis","21","Female","resources/image2.jpg");


for (var k = 0; k < myfamily.length; k++) {
var card = document.createElement("ul");
let familyid= document.getElementById('familyid');
var famkeys = Object.keys(myfamily[k]);
var famvalues = Object.values(myfamily[k]);

card.appendChild(famvalues[0])
for (var j = 1; j < 4; j++) {

  var info = document.createElement("li");
  info.innerHTML =(famkeys[j]+" : "+famvalues[j]);
  card.appendChild(info);
}
card.appendChild(famvalues[4])
familyid.appendChild(card);
}