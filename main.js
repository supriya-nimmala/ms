function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier.ml5.soundClassifier('https://storage.googleapis.com/tm-model/u02fOYRBx/model.json',modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
    console.log(error);
    }
    else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("sound").innerHTML="I can hear- "+results[0].label;
    document.getElementById("accurecy-of-sound").innerHTML="accurecy- "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("sound").style.color="rgb("+random_number_r+","+ random_number_g+","+random_number_b+")";
    document.getElementById("accurecy-of-sound").style.color="rgb("+random_number_r+","+ random_number_g+","+random_number_b+")";
    img=document.getElementById("dog");
    img_2=document.getElementById("cat");
    img_3=document.getElementById("lion");
    img_4=document.getElementById("bird");
    if(results[0].label=="Barking"){
        img.src='dog.jpg';
    }
    else if(results[0].label=="Meow"){
        img_2.src='cat.jpg';
    }
    else if(results[0].label=="roar"){
        img_3.src='lion.jpg';
    }
    else{
        img_4.src='bird.jpg';  
    }
    }
    }