$(document).ready(function () {
  // MODAL
  AOS.refreshHard();
  var modalText = {
    omdivya: {
      title: "Omdivyadarshan.org",
      tag: "A treasure house of information on Hindu religion and spirituality.",
      detail:
        "OM DIVYA DARSHAN, a treasure house of information on Hindu religion and spirituality has been launched to bridge the gap between the divine and humanity. User-friendly links from each page ensure easier access to any section from anywhere. Devotional songs, Bhajans and aartis, Travel tips with Maps of each city, Travel routes and Travel assistance.",
      link: "http://omdivyadarshan.org/",
    },
    insurance: {
      title: "Union Insurance",
      tag: "Established in 1998, Dubai",
      detail:
        "Union Insurance is licensed by the UAE Insurance Authority and listed on the Abu Dhabi Securities Exchange.The company provides a comprehensive range of retail and commercial insurance products to clients in the UAE and the Middle East region.Led by some of the most experienced and respected professionals in the industry",
      link: "https://www.unioninsurance.ae/",
    },
    mystand: {
      title: "MyStand",
      tag: "CROWD-FUNDED CHARITY.",
      detail:
        "MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.",
    },
    sparcs: {
      title: "Sparcs",
      tag: "Reporting and Invoicing of Multi Products Platform",
      detail:
        "Sparcs provides analytics, reporting, and business intelligence for companies to use on the go.",
      link: "https://sparcs.innoviti.com/",
    },
    emi: {
      title: "TotalEMI/BrandEMI",
      tag: "EMI ANALYTICS.",
      detail:
        "Payment solutions for modern businesses in India. Accept credit and debit cards, EMI, and UPI payments online using fast and reliable payment gateways. Delight customers with contactless POS swipe machines that integrate with your billing system. Create and send payment links easily and get settlements instantly to bank account.",
      link: "https://innoviti.com/",
    },
    tamm: {
      title: "TAMM",
      tag: "ABUDHABI GOVERNMENT DIGITAL PLATFORM.",
      detail:
        'TAMM is a state-of-the-art unified digital ecosystem of over 900 government and private sector services that is customer-centric at its core. The word "TAMM” translates to “consider it done” in Arabic and as an ethos, it represents a guiding light to offering superior customer service.  TAMM prides itself on accessibility and inclusivity allowing people within Abu Dhabi to access everyday vital services across Healthcare, Housing, Education, Citizenship, Residency and much more. ',
    },
    powur: {
      title: "Powur.com",
      tag: "CONSUMER POWERED MARKETING.",
      detail:
        "Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.",
      link: "http://www.powur.com/with/42",
    },

    never: {
      title: "NeverSurrender",
      tag: "ALS AWARENESS.",
      detail:
        "NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.",
    },
    themall: {
      title: "The Mall",
      tag: "PEER GUIDED SHOPPING.",
      detail:
        "The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".carousel-wrap, .slide").css("max-height", "380px");
    $(".modal").css("max-width", slideWidth);
    // $('.modal').css('max-height', '580px');
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".png') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
