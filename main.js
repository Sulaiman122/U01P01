let galleryList = JSON.parse(localStorage.getItem("myFav")) || [
  {
    title: "iPhone 5",
    img: ["./img/iphone5.jpg", "./img/iphone5_1.jpg", "./img/iphone5_2.jpg"],
    desc: `<p>4.7-inch Super Retina XDR display</p>\n    <p>Ceramic Shield, tougher than any smartphone glass</p>\n    <p>A14 Bionic chip, the fastest chip ever in a smartphone</p>\n    <p>\n      Advanced dual-camera system with 12MP Ultra Wide and Wide cameras\n    </p>\n    <p>\n      Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR\n      recording\n    </p>\n    <p>\n      12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR\n      recording\n    </p>`,
    isFavourite: false,
  },
  {
    title: "Samsung Galaxy S21",
    img: [
      "./img/galaxys21.jpg",
      "./img/galaxys21_1.jpg",
      "./img/galaxys21_2.jpg",
    ],
    desc: `<p>Brand\tSamsung Electronics</p>\n    <p>Form Factor\tSmartphone</p>\n    <p>Memory Storage Capacity\t128 GB</p>\n    <p>Operating System\tAndroid</p>\n    <p>Color\tPhantom Gray</p>\n    <p>Cellular Technology\t5G</p>\n    <p>Year\t2021</p>\n    <p>Screen Size\t6.2 Inches</p>`,
    isFavourite: false,
  },
  {
    title: "iPhone 8 Plus",
    img: ["./img/iphone8.jpg", "./img/iphone8_1.jpg", "./img/iphone8_2.jpg"],
    desc: `<p>Model Name\tA1864</p>\n    <p>Wireless Carrier\tUnlocked for All Carriers</p>\n    <p>Brand\tApple</p>\n    <p>Form Factor\tSmartphone</p>\n    <p>Memory Storage Capacity\t64 GB</p>\n    <p>Operating System\tIOS 8</p>\n    <p>Color\tSilver</p>\n    <p>Cellular Technology\t4G</p>\n    <p>Screen Size\t5.5 Inches</p>`,
    isFavourite: false,
  },
  {
    title: "iPhone X",
    img: ["./img/iphonex.jpg", "./img/iphonex_1.jpg", "./img/iphonex_2.jpg"],
    desc: `<p>Model Name\tIPhone X</p>\n    <p>Wireless Carrier\tUnlocked for All Carriers</p>\n    <p>Brand\tApple</p>\n    <p>Form Factor\tSmartphone</p>\n    <p>Memory Storage Capacity\t64 GB</p>\n    <p>Operating System\tIOS 13</p>\n    <p>Color\tSilver</p>\n    <p>Cellular Technology\t4G</p>\n    <p>Screen Size\t5.8 Inches</p>`,
    isFavourite: false,
  },
  {
    title: "iPhone 12 mini",
    img: ["./img/iphone12.jpg", "./img/iphone12_1.jpg", "./img/iphone12_2.png"],
    desc: `<p>WIRELESS PLAN: Unlimited talk, text, and data with mobile hotspot, nationwide coverage, and international reach. No long</p>-term contract required.\n    <p>PROGRAM DETAILS: When you add this offer to cart, it will reflect 3 items: the iPhone, SIM kit, and carrier subscription</p>\n    <p>6.1-inch Liquid Retina HD LCD display, water and dust resistant, with Face ID</p>\n    <p>Dual-camera system with 12MP Ultra Wide camera, 12MP TrueDepth front camera with Portrait mode</p>`,
    isFavourite: false,
  },
  {
    title: "iPad 4",
    img: ["./img/ipad.jpg", "./img/ipad_1.jpg", "./img/ipad_2.png"],
    desc: `<p>Stunning 10.9-inch Liquid Retina display with True Tone and P3 wide color</p>\n    <p>A14 Bionic chip with Neural Engine</p>\n    <p>Touch ID for secure authentication and Apple Pay</p>\n    <p>12MP back camera, 7MP FaceTime HD front camera</p>\n    <p>Available in Silver, Space Gray, Rose Gold, Green, and Sky Blue\n    <p>Wide stereo audio</p>\n    <p>Wi-Fi 6 (802.11ax)</p>`,
    isFavourite: false,
  },
];

const render = (galleryList) => {
  $(".gallery-image").html("");
  galleryList.forEach((item, i) => {
    $(".gallery-image").append(`<div class="img-box" id="img-box${i}">
      <img src="${item.img[0]}" alt="gallery image" />
        <div class="text">
          <p><b>${item.title}</b></p>
        </div>
    </div>`);
  });
};

render(galleryList);

const showPage2 = (data) => {
  for (let i = 0; i < data.length; i++) {
    $("#img-box" + i).click(() => {
      let src = "";
      if (data[i].isFavourite) {
        src = "./img/fav1.png";
      } else {
        src = "./img/fav2.png";
      }
      $(".page1").hide();
      $(".page2").append(`<div class="container2">
          <div class="descTitle">${data[i].title}<span class='fav' onclick='fav(${i})'><img src='${src}'/></span></div>
          <div class="desc">
            ${data[i].desc}
          </div>
          <div class="NoPaddingMarging">
            <div id="MainDiv">
              <img
                src="${data[i].img[2]}"
                alt="mobile img"
                id="MainImage"
                width="800"
                height="600"
              />
            </div>
            <div id="slider">
              <ul class="slides">
                <li class="NoPaddingMarging slide">
                  <img
                    src="${data[i].img[0]}"
                    alt="mobile img"
                  />
                </li>
                <li class="NoPaddingMarging slide">
                  <img
                    src="${data[i].img[1]}"
                    alt="mobile img"
                  />
                </li>
                <li class="NoPaddingMarging slide">
                  <img
                    src="${data[i].img[2]}"
                    alt="mobile img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>`);
      slider();
    });
  }
};

showPage2(galleryList);

let myFav;
const renderFavourite = () => {
  $(".favGallery").html("");
  myFav = galleryList.filter((item) => item.isFavourite);
  if(myFav.length){
  myFav.forEach((item, i) => {
    $(".favGallery").append(`<div class="img-box favBox" id="img-box${i}" style="position: relative;">
        <img src="${item.img[0]}" alt="gallery image" /><button id='rem'><i class="far fa-trash-alt"></i></button>
          <div class="text">
            <p><b>${item.title}</b></p>
          </div>
      </div>`);
  });
}else{
    $(".favGallery").append(`<div class='no_fav'><h3>No favourites yet!</h3></div>`);
}
  showPage2(myFav);
};

if ($(".favGallery")[0]) {
  renderFavourite();
}

const fav = (i) => {
    galleryList[i].isFavourite = !galleryList[i].isFavourite;
  if ($(".fav img").attr("src") == "./img/fav2.png") {
    if ($(".favGallery")[0]) {
      myFav[i].isFavourite = true;
    }
    $(".fav").replaceWith(
      `<span class='fav' onclick='fav(${i})'><img src='./img/fav1.png'></span>`
    );
  } 
  else {
    if ($(".favGallery")[0]) {
      myFav[i].isFavourite = false;
    }
    $(".fav").replaceWith(`<span class='fav' onclick='fav(${i})'><img
           src='./img/fav2.png'></span>`);
  }
  localStorage.setItem("myFav", JSON.stringify(galleryList));
};

// Slider functionality
const slider = () => {
  let tn_array = [];
  $("#MainImage").attr("src", tn_array[0]);
  let lengthImages = tn_array.length;
  let CurrImage = 0,
    BottomLength = 4;
  let IndexDiff;
  $(".slides li img").click(function () {
    let Imagesrc = $(this).attr("src");
    let ImageIndex = $(this).parent(".slide").index();
    $("#MainImage")
      .fadeOut("slow", function () {
        if (ImageIndex <= lengthImages - BottomLength) {
          IndexDiff = CurrImage;
          CurrImage = ImageIndex;
          IndexDiff = Math.abs(IndexDiff - CurrImage);
          $("#MainImage").attr("src", Imagesrc);
        } else {
          $("#MainImage").attr("src", Imagesrc);
        }
      })
      .fadeIn(200);
  });
  $(".slides li img").hover(
    function () {
      $(this).css("cursor", "pointer");
      $(this).css({ filter: "alpha(opacity=50)", opacity: "0.8" });
    },
    function () {
      $(this).css("cursor", "none");
      $(this).css({ filter: "alpha(opacity=100)", opacity: "1" });
    }
  );
};

const search = () => {
  $(".searchTerm").on("keyup", function () {
    let input = $(".searchTerm").val().toLowerCase();
    var filteredData = galleryList.filter(function (obj) {
      return obj.title.toLowerCase().indexOf(input) > -1;
    });
    render(filteredData);
  });
};

search();
