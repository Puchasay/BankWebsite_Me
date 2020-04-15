// We can try write like this:
//console.log('Hej');

// inside async functions we are allowed
// to use the keyword await
// - this lets wait for response from a server etc
async function showUserData() {
    // fetch user data from the server
    //let fetched = await fetch('/json/users');
    //let users = await fetched.json();

    let fetched = await fetch('/json/minuss');
    // convert from json to a data structure
    let minuss = await fetched.json();

    //console.log("users", users);
    console.log("minuss", minuss);

    // test (vi ka  testa nu)
    //console.log(users);

    let html = `
        <table style="width:100%">
            <tr>
            <td><b>Förnamn</b></td>
            <td><b>Efternamn</b></td>
            <td><b>Personnummer</b></td>
            <td><b>Kontonummer</b></td>
            <td><b>Balance</b></td>      
            </tr>
    `;
    for (let minus of minuss) {
        html += `
        <tr>
            <td>${minus.first_name}</td>
            <td>${minus.last_name}</td>
            <td>${minus.pnr}</td>
            <td>${minus.number}</td>
            <td>${minus.balance}</td>
        </tr>
    `;
    }

    html += '</table>';

    // visa console med detta:
    //console.log(html);

    // add the html inside the div tag
    // with the class users

    // grab the div with the class users
    let userDiv = document.querySelector('.minuss');
    // replace the content inside the div
    userDiv.innerHTML = html;

}

showUserData();
