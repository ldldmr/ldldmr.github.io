let color = "purple";
let number = 10;
let word = "cool";


$("#first").css("background", color);
if (number < 100) {
    $("#first").text("a number erteke kisebb mint 100");
  }
  else {
    $("#first").text("fuck, a number erteke >= mint 100");
    $("#first").css("background", 'red')
  }

  if (word === "cool") {
    $("#second").text("cool");
  }
  else {
    $("#second").text("word not cool");
  }

$("#third").on('click', (event) => {
    console.log("Yeah, you clicked me");
    $('body').append('<h1>Hello World!</h1>');
    $("#third").text("ez egy gomb");
  });

  $("#second").on('click', (event) => {
    $("#second").text("a masodik gomb szovege valtozott");
  });

  $("#forth").on('click', (event) => {
    $("#blue").val("blue");
  });

  $("#aa").on('click', (event) => {
    $("#aa").css("background", "yellow");
    color = "blue";
  }); 
  

// $("#first").css("background", color);
// if ("#blue").val === "blue") {
//     $("#aa").css("background", "grey");
//   }
//   else {
//     $("#first").text("fuck, a number erteke >= mint 100");
//     $("#first").css("background", 'red')
//   }
 