$('#fullpage').fullpage({ //initialize
  //set options
  sectionsColor: ['#03A9F4', '#03A9F4', '#03A9F4'],
  navigation: false,
  navigationPosition: 'right',
  anchors: ['welcome', 'main', 'quizS'],
  afterLoad: function (origin, destination, direction) {
  }
});

tippy('#about', {
  content: 'Quizzy is an online quiz app that aims to test children’s knowledge on parts and anatomies of vehicles.',
  trigger: 'mouseenter click',
  placement: 'bottom',
  delay: 150,
});

anime({
  targets: '.cls-1',
  translateX: [-100, -100],
  translateY: [0, 25, 0],
  easing: 'easeInElastic(1, 5)',
  autoplay: true,
  delay: anime.stagger(1500),
  duration: 5000,
  loop: true
});

anime({
  targets: '#planeLogo',
  opacity: [0, 1],
  translateX: [-450, -100],
  translateY: [-300, 0],
  autoplay: true,
  duration: 3500,
});

var clickPlane = anime({
  targets: '#planeLogo',
  opacity: [0, 1],
  translateX: [-100, 500, -450, -100],
  translateY: [0, -350, -500, 0],
  autoplay: false,
  duration: 8000,
});

document.querySelector('#planeLogo').onclick = clickPlane.play;

anime({
  targets: '#quizPlane',
  opacity: [0, 1],
  translateX: [-450, 0],
  translateY: [-300, 0],
  autoplay: true,
  duration: 3000,
});

var quizPlaneC = anime({
  targets: '#quizPlane',
  opacity: [0, 1],
  translateX: [0, 500, -450, 0],
  translateY: [0, -400, -550, 0],
  autoplay: false,
  duration: 8000,
});
document.querySelector('#quizPlane').onclick = quizPlaneC.play;

$("#submit").click(function () {
  var name = $("#nameInput").val();
  $("#welcomeUser").html("Hello " + name + "!");
});

$("#quiz-finish-btn").click(function () {
  document.getElementById("quizCatM").src = "images/MotorQuizU.png";
});
