

document.addEventListener("DOMContentLoaded", function () {
  const fp = flatpickr("#promote-datepicker", {
    dateFormat: "d-m-Y",
    inline: true,
    enableTime: false,
    onChange: function (dObj, dStr, fp) {
      const dateElem = document.querySelector("#promote-banner-inline-date")
      dateElem.innerText = dStr
    },
    locale: 'ru'
  })

  console.log("instance: ", fp)
})
