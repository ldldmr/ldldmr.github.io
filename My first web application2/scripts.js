let data = {
    photo: 'images/1.jpg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
  };
  // images loaded via jquery
  // $('#mainimg').attr('src', data.photo);

let imgzero = {
    photo: 'images/0.jpg',
    title: '0. image',
    description: 'This is the review of the zerouth image'
  };
  // $('#mainimg').attr('src', data.photo);

  let imgtwo = {
    photo: 'images/2.jpg',
    title: '2nd image',
    description: 'This is the review of the second image'
  };

  let imgthree = {
    photo: 'images/3.jpg',
    title: '3nd image',
    description: 'This is the review of the second image'
  };

  let imgfour = {
    photo: 'images/4.jpg',
    title: '4th image',
    description: 'This is the review of the fourth image'
  };

// change number of element down here (currentPhoto)
  let currentPhoto = 0;
  let imagesData = [data , imgzero, imgtwo, imgthree , imgfour];
  $('#mainimg').attr('src', imagesData[currentPhoto].photo);
  // chooses from variables (data,imgzero etc) to be inserted to mainimg


let loadPhoto = (photoNumber) => {
$('#mainimg').attr('src', imagesData[currentPhoto].photo);
}

loadPhoto(currentPhoto);

// on click set the next image
$('#rarrow').click(() => {
  currentPhoto++;
  loadPhoto(currentPhoto);
})

// on click set the previous image
$('#larrow').click(() => {
  currentPhoto--;
  loadPhoto(currentPhoto);
})

//thumbnails