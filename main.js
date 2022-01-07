//107

function startClassification() {
  navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gz3AjwaAy/model.json",modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}

//108
var elephant = 0;
var bird = 0;
var duck = 0;
var rabbit = 0;

function gotResults(error, results) {
  if(error){
    console.log(error);
  }
  else {
    console.log("got Results");
    console.log(results);

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = results[0].confidence.toFixed(2) * 100 + "%";
    document.getElementById("result_label").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";

    img = document.getElementById("ear");

    if (results[0].label === "Tweet"){
      img.src = "bird.gif"
      bird = bird + 1
    }
    else if (results[0].label === "Squeak"){
      img.src = "bunny.gif"
      rabbit = rabbit + 1
    }
    else if (results[0].label === "Trumpet"){
      img.src = "elephant.gif"
      elephant = elephant + 1
    }
    else if (results[0].label === "Quack"){
      img.src = "duck.gif"
      duck = duck + 1
    }
    else {
      img.src = "ear.png"
    }
  }
}


 
