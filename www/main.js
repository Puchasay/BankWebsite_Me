// We can try write like this:
//console.log('Hej');

// inside async functions we are allowed
// to use the keyword await
// - this lets wait for response from a server etc
async function showUserData(searchText) {  //before, there wasnt searchText
    // fetch user data from the server
    //let fetched = await fetch('/json/users');
    //let users = await fetched.json();

    let fetched = await fetch('/json/accounts');
    // convert from json to a data structure
    let accounts = await fetched.json();

    //console.log("users", users);
    console.log("accounts", accounts);

    // test (vi ka  testa nu)
    //console.log(users);

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


    for (let account of accounts) {
        //let columnName = account.first_name && account.last_name;
        //if (searchText && !columnName.toLowerCase().includes(searchText)){
        if (searchText && !account.last_name.toLowerCase().includes(searchText) && !account.first_name.toLowerCase().includes(searchText)&& !account.first_name.includes(searchText) && !account.last_name.includes(searchText) && !account.pnr.toString().includes(searchText) && !account.number.toString().includes(searchText)){
            continue;
        }


        html += `
        <tr>
            <td>${account.first_name}</td>
            <td>${account.last_name}</td>
            <td>${account.pnr}</td>
            <td>${account.number}</td>
            <td>${account.balance}</td>
        </tr>
    `;
    }

    html += '</table>';

    // visa console med detta:
    //console.log(html);

    // add the html inside the div tag
    // with the class users

    // grab the div with the class users
    let userDiv = document.querySelector('.accounts');
    // replace the content inside the div
    userDiv.innerHTML = html;

}

showUserData();  //This is to show all data which we fetch from database



// To make search box function choice on html page
//Event listeners
let searchElement = document.querySelector('#search >input');
searchElement.onchange = function (e) {
    //alert(e.target.value);  //ganti jadi ini
    showUserData(e.target.value);
}

let searchButton = document.querySelector('#search-button');
searchButton.onclick = function (){
    document.querySelector('body').style.backgroundColor = 'pink';
}




