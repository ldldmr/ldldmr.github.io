let color = "purple";
let number = 10;
let word = "cool";
$(".north").css("background", color);
if (number < 100) {
    $(".east").text("whoah, that's a big number.");
  }
  else {
    $(".east").text("fuck");
  }

  if (word === "cool") {
    $(".west").text("Power of DOM");
  }
  else {
    $(".south").text("Power of DOM");
  }

  $('body').append(
    '<h1>Hello World!</h1>'
    );

// //   nevek.forEach(function(nevek) {$('#wk').append('<li>'+nevek+'</li>')});
  // let names = ["a", "b", "c", "d", "e"];
 
  // names.forEach(function(names) => {
  //   $("ul").append("li" + names + "li")}; 
  //       console.log(names);

  $('p').on('click', (event) => {
    $(".south").text("kiprobalom");
  });
  
  let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
