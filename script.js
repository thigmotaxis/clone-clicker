let cookieBank = 0

const htmlGenerator = (() => {
  const body = document.querySelector("body")

// GENERATE COOKIE PANEL

  const cookiePanel = () => {
    const cookiePanelContainer = document.createElement("div")
    cookiePanelContainer.classList.add("cookiePanel")
    body.appendChild(cookiePanelContainer)

    const bakeryName = document.createElement("div")
    bakeryName.classList.add("bakeryName")
    bakeryName.textContent = "Abe's Bakery"
    cookiePanelContainer.appendChild(bakeryName)

    const currentBank = document.createElement("div")
    currentBank.classList.add("currentBank")
    currentBank.textContent = cookieBank
    cookiePanelContainer.appendChild(currentBank)

    const cookie = document.createElement("img")
    cookie.setAttribute("src", "images/cookie.png")
    cookie.setAttribute("alt", "A large cookie. Maybe you should click it?")
    cookie.classList.add("bigCookie")
    cookiePanelContainer.appendChild(cookie)
  }



// GENERATE STATS PANEL

  const statsPanel = () => {
    const statsPanelContainer = document.createElement("div")
    statsPanelContainer.classList.add("statsPanel")
    body.appendChild(statsPanelContainer)

    const statistics = document.createElement("div")
    statistics.classList.add("header1")
    statistics.textContent = "Statistics"
    statsPanelContainer.appendChild(statistics)

    const general = document.createElement("div")
    general.setAttribute("id", "general")
    general.classList.add("header2")
    general.textContent = "General"
    statsPanelContainer.appendChild(general)

    const statsArray = ["Current Cookies", "Cookies Baked", "Run Started", "Buildings Owned", "Cookies Per Second", "Cookies Per Click",
                        "Cookie Clicks", "Handmade Cookies"]

    for(let i = 0; i < statsArray.length; i++) {
      let stat = document.createElement("div")
      stat.classList.add("stat")
      stat.textContent = `${statsArray[i]}: `
      // line below sets appropriate camelCase ids on stat divs
      stat.classList.add(statsArray[i].slice(0, 1).toLowerCase() + statsArray[i].slice(1).replace(/\s+/g, ""))
      statsPanelContainer.appendChild(stat)
      let statValue = document.createElement("div")
      statValue.setAttribute("id", `${statsArray[i].slice(0, 1).toLowerCase() + statsArray[i].slice(1).replace(/\s+/g, "")}Value`)
      statValue.classList.add("statValue")
      // line below sets default value of each stat to 0 (with two exceptions)
      statValue.textContent = (statsArray[i] === "Run Started") ? "date" : (statsArray[i] === "Cookies Per Click") ? 1 : 0
      statsPanelContainer.appendChild(statValue)
    }

    const upgrades = document.createElement("div")
    upgrades.setAttribute("id", "upgrades")
    upgrades.classList.add("header2")
    upgrades.textContent = "Upgrades"
    statsPanelContainer.appendChild(upgrades)

    const achievements = document.createElement("div")
    achievements.classList.add("header2")
    achievements.setAttribute("id", "achievements")
    achievements.textContent = "Achievements"
    statsPanelContainer.appendChild(achievements)
  }



// GENERATE STORE PANEL

  const storePanel = () => {
    const storePanelContainer = document.createElement("div")
    storePanelContainer.classList.add("storePanel")
    body.appendChild(storePanelContainer)

    const storeHeader = document.createElement("div")
    storeHeader.classList.add("header1")
    storeHeader.textContent = "Store"
    storePanelContainer.appendChild(storeHeader)

    const upgradeContainer = document.createElement("div")
    upgradeContainer.classList.add("upgradeContainer")
    storePanelContainer.appendChild(upgradeContainer)

    const upgrades = ["DU1", "DU2", "DU3", "DU4", "DU5"]

    for(let i = 0; i < upgrades.length; i++) {
      let upgrade = document.createElement("div")
      upgrade.setAttribute("id", upgrades[i])
      upgrade.classList.add("upgrade")
      upgrade.textContent = upgrades[i]
      upgradeContainer.appendChild(upgrade)
    }

    const buy = document.createElement("div")
    buy.setAttribute("id", "buyToggle")
    buy.classList.add("transactionToggle")
    buy.textContent = "Buy"
    storePanelContainer.appendChild(buy)

    const sell = document.createElement("div")
    sell.setAttribute("id", "sellToggle")
    sell.classList.add("transactionToggle")
    sell.textContent = "Sell"
    storePanelContainer.appendChild(sell)

    const buildings = ["cursor", "grandma", "farm", "mine", "factory"]
    const initialPrices = [15, 100, 1100, 12000, 130000]

    for(let i = 0; i < buildings.length; i++) {
      let buildingContainer = document.createElement("div")
      buildingContainer.setAttribute("id", `${buildings[i]}Container`)
      buildingContainer.classList.add("buildingContainer")
      storePanelContainer.appendChild(buildingContainer)

      let icon = document.createElement("div")
      icon.setAttribute("id", `${buildings[i]}Icon`)
      icon.classList.add("icon")
      icon.textContent = "icon PH"
      buildingContainer.appendChild(icon)

      let building = document.createElement("div")
      building.setAttribute("id", buildings[i])
      building.classList.add("building")
      building.textContent = `${buildings[i].slice(0, 1).toUpperCase() + buildings[i].slice(1)}`
      buildingContainer.appendChild(building)

      let buildingCount = document.createElement("div")
      buildingCount.setAttribute("id", `${buildings[i]}Count`)
      buildingCount.classList.add("buildingCount")
      buildingCount.textContent = 0
      buildingContainer.appendChild(buildingCount)

// adds initial cost for each building - may be subbed out for building objects (or it might be ok to generate everything here except the text content
// which I could then modify with individual building objects)
      let price = document.createElement("div")
      price.setAttribute("id", `${buildings[i]}Price`)
      price.classList.add("price")
      price.textContent = initialPrices[i]
      buildingContainer.appendChild(price)
    }
  }
  return {cookiePanel, statsPanel, storePanel}
})();

// CALLS PANEL CREATION METHODS TO CREATE HTML CONTENT

(function generateContent() {
  htmlGenerator.cookiePanel()
  htmlGenerator.statsPanel()
  htmlGenerator.storePanel()
})();

// BANK AND BUILDING OBJECTS
const bank = {
  cookieBank: document.querySelector(".currentBank"),
  currentBank: 500,
  cookieClick: function() {
    this.currentBank++
    this.cookieBank.innerHTML = Math.round(this.currentBank)
  },
  cookiesPerSecond: 0,
  incrementBank: function() {
    this.currentBank += this.cookiesPerSecond
    this.cookieBank.innerHTML = Math.round(this.currentBank)
  }
};
setInterval(() => bank.incrementBank(), 1000);

// this will toggle to false onclick of sellbutton and back to true onclick of buybutton
let buy = true;
// // set event listener on buy and sell divs, with onclick, toggle buy to true/false
(function makeTransactionToggleListeners() {
  const buyToggle = document.querySelector("#buyToggle")
  buyToggle.addEventListener("click", () => {
    buy = true;
  })
  const sellToggle = document.querySelector("#sellToggle")
  sellToggle.addEventListener("click", () => {
    buy = false;
  })
})()

// BUILDING FACTORY AND BUILDING INITIALIZATIONS

const buildingFactory = (name, price, cookiesPerSecond) => {
  let buildingCount = 0;
  let buildingPrice = price;
  let buildingCPS = cookiesPerSecond;
  const buy = () => {
      if(bank.currentBank >= buildingPrice) {
        bank.currentBank -= buildingPrice
        buildingCount++
        buildingPrice *= 1.1
        bank.cookiesPerSecond += buildingCPS
      }
    };
  const sell = () => {
      if(buildingCount > 0) {
        buildingCount--
        buildingPrice /= 1.1
        bank.currentBank += buildingPrice/4
      }
    };
  const updateDisplay = () => {
      const count = document.querySelector(`#${name}Container .buildingCount`)
      count.textContent = buildingCount
      const price = document.querySelector(`#${name}Container .price`)
      price.textContent = Math.round(buildingPrice)
    };
  return {buildingCount, buy, sell, updateDisplay};
};

const cursor = buildingFactory("cursor", 15, 0.1)
const grandma = buildingFactory("grandma", 100, 1);
const farm = buildingFactory("farm", 1100, 4);
const mine = buildingFactory("mine", 12000, 10);
const factory = buildingFactory("factory", 130000, 40);

const buildingObjects = [cursor, grandma, farm, mine, factory];
// END BUILDING FACTORY/INITIALIZATIONS


// STATS OBJECT TO STORE VARIOUS GAME DATA
// stats object should periodically check values - rather than having stats increment in realtime
const statsObject = {
  currentCookies: bank.currentBank,
  cookiesBaked: "come back to this",
  runStarted: "elapsed time",
  buildingsOwned: function () {
    let total = 0;
    for (obj in buildingObjects) {
      total += buildingObjects[obj].buildingCount
    }
    return total
  },
  cookiesPerSecond: bank.cookiesPerSecond,
};

function updateStats() {
  let currentCookiesElement = document.querySelector("#currentCookiesValue")
  currentCookiesElement.textContent = Math.round(bank.currentBank)
  let cookiesBakedElement = document.querySelector("#cookiesBakedValue")
  cookiesBakedElement.textContent = "Placeholder"
  let runStartedElement = document.querySelector("#runStartedValue")
  runStartedElement.textContent = "Placeholder"
  let buildingsOwnedElement = document.querySelector("#buildingsOwnedValue")
  buildingsOwnedElement.textContent = statsObject.buildingsOwned()
  let cookiesPerSecondElement = document.querySelector("#cookiesPerSecondValue")
  cookiesPerSecondElement.textContent = statsObject.cookiesPerSecond
  let cookiesPerClickElement = document.querySelector("#cookiesPerClickValue")
  cookiesPerClickElement.textContent = statsObject.cookiesPerClick
  let cookieClicksElement = document.querySelector("#cookieClicksValue")
  cookieClicksElement.textContent = statsObject.cookieClicks
  let handmadeCookiesElement = document.querySelector("#handmadeCookiesValue")
  handmadeCookiesElement.textContent = statsObject.handmadeCookies
};
setInterval(() => updateStats(), 10000);
// END STATS OBJECT


// SETS LISTENERS ON EACH BUILDINGCONTAINER TO RUN CALL BUY/SELL/UPDATEDISPLAY
(function makeBuildingListeners() {
  const buildingNames = ["cursor", "grandma", "farm", "mine", "factory"];
  const buildings = document.querySelectorAll(".buildingContainer")
  buildings.forEach((building, index) => {
    building.addEventListener("click", () => {
      if (buy === true) buildingObjects[index].buy()
      else buildingObjects[index].sell()
      buildingObjects[index].updateDisplay()
    })
  })
})();


// COOKIE CLICK LOGIC
// adds event listener to big cookie, increments currentBank

(function makeCookieListener() {
  const bigCookie = document.querySelector(".bigCookie")
  const cookieBank = document.querySelector(".currentBank")
  bigCookie.addEventListener("click", () => {
    bank.cookieClick()
  })
})()
