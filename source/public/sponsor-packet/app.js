let sponsorLevel;
let activeSponsorElem;
let ppUpgrade;
let total = 0;
let step = 1;
let logo64;

function scrollToElem(e) {
  setActiveLink(e.target);
  let hash = e.target.id.slice(1);
  let elem = document.getElementById(hash);
  elem.scrollIntoView({ behavior: "smooth" });
}
let navs = document.querySelectorAll(".navbutton.onclick_button");
let active = navs[0];
navs.forEach(n => (n.onclick = scrollToElem));

function setActiveLink(next) {
  active.classList.toggle("active");
  active = next;
  active.classList.toggle("active");
}
function toggleSidebar() {
  let elem = document.querySelector(".navigation");
  elem.classList.toggle("hidden");
  document.body.classList.toggle("slide");
}

function updateTotal(price) {
  let totalElem = document.getElementById("total");
  let total = price || 0;
  totalElem.innerText = Number(total).toLocaleString("en");
}

function setSponsorLevel(level) {
  if (sponsorLevel == level) {
    return;
  }
  sponsorLevel = level;
  if (activeSponsorElem) {
    activeSponsorElem.classList.remove("selected");
  }
  activeSponsorElem = document.getElementById(level);
  activeSponsorElem.classList.add("selected");
  let sponsorLevelElem = document.getElementById("sponsor-level");
  sponsorLevelElem.innerText = level;
  let form = document.getElementById("sponsor-payment-form");
  form.ppupgrade.forEach(elem => (elem.checked = false));
  total = 0;
  switch (level) {
    case "platinum":
      form.ppupgrade.forEach(elem =>
        elem.id == "platinum-only" ? (elem.checked = true) : null
      );
      total = 1500;
      break;
    case "gold":
      total = 1000;
      break;
    case "silver":
      total = 500;
      break;
    case "friend":
      total = 100;
      break;
  }
  updateTotal(total);
}
function setPPUpgrade() {
  ppUpgrade = event.target.id;
  total = 1500;
  let sponsorLevelElem = document.getElementById("sponsor-level");
  sponsorLevelElem.innerText = "Platinum Plus";
  switch (ppUpgrade) {
    case "title":
      total = 15000;
      break;
    case "shirt":
      total = 4500;
      break;
    case "keynote":
      total = 3750;
      break;
    case "lunch":
      total = 3500;
      break;
    case "breakfast":
      total = 2500;
      break;
    case "youth":
      total = 2000;
      break;
    default:
      sponsorLevelElem.innerText = "Platinum";
  }
  updateTotal(total);
}

function goBack() {
  step--;
  event.target.disabled = false;
  event.target.nextElementSibling.disabled = false;
  let currElem = document.getElementById("step-" + (step + 1));
  let prevElem = document.getElementById("step-" + step);
  currElem.classList.add("slide-out-right");
  prevElem.classList.remove("slide-out-left");
  if (step <= 1) {
    step = 1;
    event.target.disabled = true;
  }
}

function goNext() {
  if (total == 0) {
    return;
  }
  step++;
  event.target.disabled = false;
  event.target.previousElementSibling.disabled = false;
  let currElem = document.getElementById("step-" + (step - 1));
  let nextElem = document.getElementById("step-" + step);
  currElem.classList.add("slide-out-left");
  nextElem.classList.remove("slide-out-right");
  if (step == 3) {
    showPaypal();
  }
  if (step >= 3) {
    step = 3;
    event.target.disabled = true;
  }
}

function setLogo() {
  let logofile = event.target.files[0];
  if (!logofile) {
    logo64 = undefined;
    let elem = document.getElementById("sponsor-logo");
    elem.classList.remove("d-block");
    elem.classList.add("d-none");
    return;
  }

  let fr = new FileReader();

  fr.onloadend = () => {
    logo64 = fr.result;
    let elem = document.getElementById("sponsor-logo");
    elem.setAttribute("src", logo64.toString());
    elem.classList.remove("d-none");
    elem.classList.add("d-block");
  };
  fr.readAsDataURL(logofile);
}

function showPaypal() {
  document.getElementById("paypal-button-container").innerHTML = "";
  // @ts-ignore
  paypal
    .Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: total
              }
            }
          ]
        });
      },
      onError: function(err) {
        // TODO Show an error page here, when an error occurs
      },
      // Finalize the transaction
      onApprove: function(data, actions) {
        console.log(data, actions);
        return actions.order.capture().then(function(paypalDetails) {
          let form = document.getElementById("sponsor-payment-form");
          let userDetails = {
            name: form.name.value,
            email: form.email.value
          };
          let companyDetails = {
            url: form.url.value,
            name: form.company.value
          };
          let sponsorDetails = {
            level: sponsorLevel,
            ppUpgrade
          };
          debugger;
          let url = "/api/sponsors/validate-purchase/" + data.orderID;
          if (window.location.host.includes("localhost:")) {
            url = "http://localhost:5000" + url;
          }else{
            url = "https://bccsponsoradminsite.azurewebsites.net" + url;
          }
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              eventDetails: {
                name: "boisecodecamp",
                year: 2020
              },
              userDetails,
              paypalDetails,
              companyDetails,
              sponsorDetails,
              logo64
            })
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.error) {
                // TODO show error
              }
            });
        });
      }
    })
    .render("#paypal-button-container");
}
