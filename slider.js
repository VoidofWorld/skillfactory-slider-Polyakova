let images = [{
    url: "img/img1.jpg",
    item: "Rostov-on-Don, Admiral",
    title: "Rostov-on-Don",
    city: " LCD admiral",
    ApartmenstArea: "81 m2",
    RepairTime: "3.5 months"
  }, {
    url: "img/img2.jpg",
    item: "Sochi Thieves",
    title: "Sochi",
    city: "Thieves",
    ApartmenstArea: "105 m2",
    RepairTime: "4 months"
  }, {
    url: "img/img3.jpg",
    item: "Rostov-on-Don Patriotic",
    title: "Rostov-on-Don",
    city: "Patriotic",
    ApartmenstArea: "93 m2",
    RepairTime: "3 months"
  }];


function initSlider(){
    if (!images || !images.length) return;


    let sliderImages = document.querySelector(".main__slider_imges");
    let sliderArrows = document.querySelector(".main__text_arrow");
    let sliderDots =  document.querySelector(".slider__arrow_dots");
    let sliderItem = document.querySelector(".main__slider_title");
    let sliderTitle = document.querySelector(".main__text_article_features_items_title");
    let sliderRepair = document.querySelector(".main__text_article_features_items_repair");
    let sliderApart = document.querySelector(".main__text_article_features_items_apart");
    

    initImages()
    initArrows()
    initDots()
    initItem()
    initTitle()
    initRepair()
    initApart()

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="main__slider_imges img n${index} ${index === 0? "active" : ""}" style = "background-image: url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows(){
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function(){
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        })
      })
    }
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__arrow_dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__arrow_dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(dot.dataset.index);
        })
      })
    }

   function initItem() {
      images.forEach((image, index) => {
        let itemTitel = `<div class="main__slider_title item n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].item}</div>`;
        sliderItem.innerHTML += itemTitel;
      });
      sliderItem.querySelectorAll(".main__slider_title.item").forEach(itemTitel => {
        itemTitel.addEventListener("click", function() {
          moveSlider(itemTitel.dataset.index);
        })
      })
    }

  
    function moveSlider(num){
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
      sliderItem.querySelector(".active").classList.remove("active");
      sliderItem.querySelector(".n" + num).classList.add("active");
      changeTitle(num);
      changeRepair(num);
      changeApart(num);
   }

    function initTitle() {
      let titleCity = `<p class= "main__text_article_features_items_title_text">${images[0].title} <br> ${images[0].city} </p>`;
      sliderTitle.innerHTML += titleCity;
      }
    

    function changeTitle(num) {
      let sliderCity =  sliderTitle.querySelector(".main__text_article_features_items_title_text");
      sliderCity.innerHTML = images[num].title + `<br>` + images[num].city ;
    }

    function initRepair() {
      let titleRepair = `<p class= "main__text_article_features_items_title_repair">${images[0].RepairTime}</p>`;
      sliderRepair.innerHTML += titleRepair;
      }
    

    function changeRepair(num) {
      let titleRepair =  sliderRepair.querySelector(".main__text_article_features_items_title_repair");
      titleRepair.innerHTML = images[num].RepairTime ;
    }

    function initApart() {
      let titleApart = `<p class= "main__text_article_features_items_title_apart">${images[0].ApartmenstArea}</p>`;
      sliderApart.innerHTML += titleApart;
      }
    

    function changeApart(num) {
      let titleApart =  sliderApart.querySelector(".main__text_article_features_items_title_apart");
      titleApart.innerHTML = images[num].ApartmenstArea ;
    }

  }

 



document.addEventListener("DOMContentLoaded", initSlider);