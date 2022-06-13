let cookieCount = 0;

const htmlGenerator = (() => {
  const body = document.querySelector("body")
  // generate cookie panel
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
    currentBank.textContent = cookieCount
    cookiePanelContainer.appendChild(currentBank)

    const cookie = document.createElement("img")
    cookie.setAttribute("src", "images/cookie.png")
    cookie.setAttribute("alt", "A large cookie. Maybe you should click it?")
    cookie.classList.add("bigCookie")
    cookiePanelContainer.appendChild(cookie)
  }
  // generate stats panel
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


  return {cookiePanel, statsPanel}
})()

htmlGenerator.cookiePanel()
htmlGenerator.statsPanel()
