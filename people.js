const axios = require('axios');

async function getPersonById(id) {
    var c = 0;
    var a = 0;
    var d = 0;
    if (!Number.isInteger(id)) throw "Not a number. Please enter valid ID"
    if (id <= 0) throw "id cannot be negative"
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')

    data.forEach(element => {
        if ((element.id == id) && (c != 1)) {
            c = 1;
            a = (element.firstName + " " + element.lastName);

        }
    });
    if (c != 1) { throw "Not in the bounds.Please enter ID within the bounds" }
    return (a);

}


async function lexIndex(index) {
    const a = [];
    var i = 0;
    var c = [];
    var d = 0;
    var b = 0;
    if (!Number.isInteger(index)) throw "Not a number. Please enter valid ID"
    if (index <= 0) throw "id cannot be negative"
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    data.forEach(element => {
        a[i] = element.lastName;
        i++;
    });
    c = a.sort();
    //console.log(c[index]);

    data.forEach(element => {
        if (element.lastName == c[index]) {
            b = (element.firstName + " " + element.lastName);
            d = 1;
        }
    });
    if (d != 1) { throw 'Index not in the bounds. Enter Index within the bounds' }
    return b;

}



async function firstNameMetrics() {
    var sum = 0;
    var b = '';
    var vowel_list = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var consonent = 0;
    var vowelcount = 0;
    var longestName = "";
    var a = 0;
    shortestName = "hjgjhfjgjhgjkjgkfjh";

    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    data.forEach(element => {
        b = element.firstName;
        for (j = 0; j < b.length; j++) {
            sum++;
            if (vowel_list.includes(b[j])) {
                vowelcount++;
            } else { consonent++; }
        }
        if (element.firstName.length > longestName.length) {
            longestName = element.firstName;
        }
        if (element.firstName.length < shortestName.length) {
            shortestName = element.firstName;
        }

    });





    return ("Total letters: " + sum + "\n" + "Total Vowels: " + vowelcount + "\n" + "Total Consonenets: " + consonent + "\n" + "Longest Name: " + longestName + "\n" + "Shortest Name: " + shortestName);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")

}




module.exports = { getPersonById, lexIndex, firstNameMetrics }