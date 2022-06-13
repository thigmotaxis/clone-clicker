let cookieCount = 0;

const htmlGenerator = (() => {
  const body = document.querySelector("body")
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

  return {cookiePanel}
})()

htmlGenerator.cookiePanel()




// cookie.addEventListener("click", () => {
//   let unoMas = incrementCookie(cookieCount)
//   cookieCount = parseInt(unoMas)
// })
//
// function incrementCookie(cookies) {
//   cookies ++
//   currentBank.textContent = cookies
//   return cookies
// }
