// We can try write like this:
//console.log('Hej');

// inside async functions we are allowed
// to use the keyword await
// - this lets wait for response from a server etc
async function showUserData() {
    // fetch user data from the server
    //let fetched = await fetch('/json/users');
    //let users = await fetched.json();

    // fetch user data from the server 'sums'
    let fetched = await fetch('/json/sums');
    // convert from json to a data structure
    let sums = await fetched.json();

    //console.log("users", users);
    console.log("sums", sums);

    // test (vi ka  testa nu)
    //console.log(users);

    // table style makes a room between words in the table
    let html = `
        <table style="width:100%"> 
            <tr>
            <td><b>Förnamn</b></td>
            <td><b>Efternamn</b></td>
            <td><b>Personnummer</b></td>
            <td><b>Kontonummer</b></td>
            <td><b>Saldo</b></td>      
            </tr>
    `;
    for (let sum of sums) { //change the name sums address to sum
        html += `
        <tr>
            <td>${sum.first_name}</td> 
            <td>${sum.last_name}</td>
            <td>${sum.pnr}</td>
            <td>${sum.number}</td>
            <td>${sum.saldo}</td>
        </tr>
    `;
    }

    html += '</table>';

    // visa console med detta:
    //console.log(html);

    // add the html inside the div tag
    // with the class users

    // grab the div with the class users
    let userDiv = document.querySelector('.sums');
    // replace the content inside the div
    userDiv.innerHTML = html;

}

showUserData();
