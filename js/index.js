let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "charupsharma5",
    "email": "charupsharma5@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

document.getElementById("submitbtn").addEventListener("click", async (e) => {
    e.preventDefault();

    console.log("clicked")

    // Create a new image element
    var imgElement = document.createElement("img");
    // Set the source (URL) of the image
    imgElement.src = "./img/loading.svg"
    // Set optional attributes, e.g., alt text, width, height, etc.
    imgElement.alt = "loading image...";
    imgElement.width = 40;
    imgElement.height = 40;
    // Add the image element to a specific container or the document body
    document.getElementById("resultcontainer").appendChild(imgElement);


    // api details
    let key = "ema_live_7eWFeCVkVUO4Ldt9TPiFF3091EMCgm9stLmdSN8z"
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    
    // Js code for getting the object key and values after fetching from the API    
    // let res = await fetch(url)
    // let validationResult = await res.json()
    
    //     let str = ``
    //     for (key of Object.keys(validationResult)) {
    //         if (validationResult[key] !== "" && validationResult[key !== " ")
    //             str = str + `${key}:${validationResult[key]}<br>\n`
    //     }
    //     console.log(str)
    //     let resultcontainer = document.getElementById("resultcontainer")
    //     resultcontainer.innerHTML = str
        
        
    let res = await fetch(url)
    let validationResult = await res.json()

    let smtpValueBracket = validationResult["smtp_check"]  ;
    let mx_foundValueBracket = validationResult["mx_found"];
        
    let str = ``
    for (key of Object.keys(validationResult)) {
        if (smtpValueBracket==true && mx_foundValueBracket==true)
            str = "<p class='valid'>VALID EMAIL ✅</p>\n"
        else
            str = "<p class='invalid'>INVALID EMAIL ⚠️</p>\n"
    }
    console.log(str)
    let resultcontainer = document.getElementById("resultcontainer")
    resultcontainer.innerHTML = str
           
})


    