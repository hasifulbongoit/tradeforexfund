// slick slider

$(document).ready(function () {
  $(".payment_item_wrapper").slick({
    dots: true,
    autoplay: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    speed: 1000,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          items: 1,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          items: 1,
        },
      },
    ],
  });
});

// stcky header

let mainHeader = document.getElementById("myHeader");
let sticky = mainHeader.offsetTop;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > sticky) {
    mainHeader.classList.add("sticky");
  } else {
    mainHeader.classList.remove("sticky");
  }
});

// accordion

// online calculator

{
  let mainAmount = document.getElementById("amount");

  mainAmount.addEventListener("change", function () {
    calculator();
  });

  let getValue = document.getElementById("getInt");

  getValue.addEventListener("change", function () {
    calculator();
  });

  let calculator = function () {
    let getInt = document.getElementById("getInt").value;

    let inputAmount = document.getElementById("amount").value;

    let totalProfit = document.getElementById("totalProfit");

    let dailyProfit = document.getElementById("dailyProfit");

    // get input 5%

    if (getInt == 5) {
      if (inputAmount == "") {
      } else if (inputAmount < 20 || inputAmount > 50000) {
        if (inputAmount < 20) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 7%
    else if (getInt == 7) {
      if (inputAmount == "") {
      } else if (inputAmount < 500 || inputAmount > 50000) {
        if (inputAmount < 500) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 9%
    else if (getInt == 9) {
      if (inputAmount == "") {
      } else if (inputAmount < 1000 || inputAmount > 50000) {
        if (inputAmount < 1000) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 130%
    else if (getInt == 130) {
      if (inputAmount == "") {
      } else if (inputAmount < 100 || inputAmount > 50000) {
        if (inputAmount < 100) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 170%
    else if (getInt == 170) {
      if (inputAmount == "") {
      } else if (inputAmount < 200 || inputAmount > 50000) {
        if (inputAmount < 200) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    // get input 200%
    else if (getInt == 200) {
      if (inputAmount == "") {
      } else if (inputAmount < 300 || inputAmount > 50000) {
        if (inputAmount < 300) {
          alert("This Number is so Small");
        } else if (inputAmount > 5000) {
          alert("This Number is so Large");
        }
        return;
      }
    }

    var interest = getInt;
    var amount = inputAmount;

    var daily;
    var monthly;

    daily = amount * (interest / 100);

    if (interest < 100) {
      monthly = amount * (interest / 100) * 30;
    } else {
      monthly = amount * (interest / 100);
    }

    dailyProfit.value = daily.toFixed(2);
    totalProfit.value = monthly.toFixed(2);
  };
}
