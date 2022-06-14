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
      // line 41 sets appropriate camelCase ids on stat divs
      stat.classList.add(statsArray[i].slice(0, 1).toLowerCase() + statsArray[i].slice(1).replace(/\s+/g, ""))
      statsPanelContainer.appendChild(stat)
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
    buy.textContent = "Buy"
    storePanelContainer.appendChild(buy)

    const sell = document.createElement("div")
    sell.textContent = "Sell"
    storePanelContainer.appendChild(sell)

    const buildings = ["cursor", "grandma", "farm", "mine", "factory"]

    for(let i = 0; i < buildings.length; i++) {
      let building = document.createElement("div")
      building.setAttribute("id", buildings[i])
      building.classList.add("building")
      building.textContent = `${buildings[i].slice(0, 1).toUpperCase() + buildings[i].slice(1)}`
      storePanelContainer.appendChild(building)
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

// COOKIE CLICK LOGIC
// adds event listener to big cookie, increments currentBank

(function makeEventListeners() {
  const bigCookie = document.querySelector(".bigCookie")
  const cookieBank = document.querySelector(".currentBank")
  bigCookie.addEventListener("click", () => {
    cookieBank.textContent ++
  })
})()
