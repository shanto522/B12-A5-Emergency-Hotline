const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");
const heartCountEl = document.getElementById("heart-count");
const clearBtn = document.getElementById("clear-btn");
const historySection = document.querySelector(".history-section");

const callButtons = document.querySelectorAll(".call-btn");

const copyButtons = document.querySelectorAll(".btn-active");

const loveIcons = document.querySelectorAll(".fa-heart");

function addCallHistory(serviceName, number) {
  const timeNow = new Date().toLocaleTimeString();
  const historyItem = document.createElement("div");
  historyItem.className =
    "flex justify-between items-center bg-[#fafafa] p-4 rounded-xl mt-5";

  historyItem.innerHTML = `
    <div>
      <p class="text-[18px] font-semibold">${serviceName}</p>
      <p class="text-[18px]">${number}</p>
    </div>
    <div class="font-semibold text-[20px]">${timeNow}</div>
  `;

  historySection.appendChild(historyItem);
}

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    let currentCoin = parseInt(coinCountEl.innerText);

    if (currentCoin < 20) {
      alert("❌ You don't have enough coins. Making a call requires 20 coins.");
      return;
    }

    const card = btn.closest(".card");
    const serviceName = card.querySelector("p.font-bold").innerText;
    const number = card.querySelector("p.font-bold.mt-5").innerText;

    alert(`${serviceName} - ${number}`);

    coinCountEl.innerText = currentCoin - 20;

    addCallHistory(serviceName, number);
  });
}

for (const btn of copyButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const number = card.querySelector("p.font-bold.mt-5").innerText;

    navigator.clipboard.writeText(number).then(() => {
      console.log("Copied: " + number);

      let currentCopy = parseInt(copyCountEl.innerText);
      copyCountEl.innerText = currentCopy + 1;

      alert(`Number Copied - ${number}`);
    });
  });
}

for (const icon of loveIcons) {
  icon.addEventListener("click", function () {
    let currentHeart = parseInt(heartCountEl.innerText);
    heartCountEl.innerText = currentHeart + 1;

    icon.classList.toggle("text-red-500");
  });
}

clearBtn.addEventListener("click", function () {
  const items = historySection.querySelectorAll("div.mt-5");
  for (const item of items) {
    item.remove();
  }
});
