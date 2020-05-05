var data1 = {
    photo: "pic/photo1.jpg",
    title: "Serious biker",
    description: "I'm like riding motorbikes.",
};


var data2 = {
    photo: "pic/photo2.jpg",
    title: "Tuk-tuk",
    description: "Not just motorbikes, another kind of cute vehicles.",
};


var data3 = {
    photo: "pic/photo3.jpg",
    title: "Ready?",
    description: "I'm also a fan of: skydiving.",
};


var data4 = {
    photo: "pic/photo4.jpg",
    title: "Let's GO!",
    description: "Moving for a take off.",
};


var data5 = {
    photo: "pic/photo5.jpg",
    title: "Old but gold.",
    description: "This beauty more than 40 years old, but still give us good times.",
};


var data6 = {
    photo: "pic/photo6.jpg",
    title: "High-life",
    description: "Everyone have to try this.",
};


var data7 = {
    photo: "pic/photo7.jpg",
    title: "So much fun",
    description: "When you out there, with your friends together.",
};


var data8 = {
    photo: "pic/photo8.jpg",
    title: "Landing",
    description: "On the way back from the clouds.",
};

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title).title;
$('#photo-description').text(imagesData[currentPhoto].description);

function loadPhoto(photoNumber) {
    $("#photo").attr("src", imagesData[photoNumber].photo);
}

function loadTitle(photoNumber) {
    $('#photo-title').text(imagesData[photoNumber].title);
}

function loadDescription(photoNumber) {
    $('#photo-description').text(imagesData[photoNumber].description);
}
loadPhoto(currentPhoto);

$('#nextside').click(() => {
    currentPhoto++;
    if (currentPhoto > 7) { currentPhoto = 0 }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
});

$('#backside').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) { currentPhoto = 7 }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
})