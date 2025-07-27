try {
  let defaultConfig = {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "has-danger",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-help",
  }

  function main() {
    var form = document.getElementById("subscribe-form")

    // create the pristine instance
    var pristine = new Pristine(form, defaultConfig, false)

    form.addEventListener("submit", function (e) {
      e.preventDefault()

      // check if the form is valid
      var valid = pristine.validate() // returns true or false
      console.log("valid: ", valid)
    })
  }

  main()
} catch (error) {
  // console.error(error)
  console.warn('[subscribe/validation.js] ERROR')
}
