const axios = require('axios');

async function whereDoTheyWork(firstName, lastName) {
    var a = '';
    var b = '';
    if ((typeof firstName != 'string') || (typeof lastName != 'string')) { throw 'Names are not strings.Please enter correct names' }
    if ((typeof firstName == 'undefined') || (typeof lastName == 'undefined')) throw 'Empty strings.Please enter correct names'
    if ((firstName.length < 0) || (lastName.length < 0)) throw 'Please enter valid names'
    var ssn1 = 0;
    var d = 0;
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    data.forEach(element => {
        if ((element.firstName == firstName) && (element.lastName == lastName)) {
            a = element.firstName;
            b = element.lastName;
            ssn1 = element.ssn;
            d++;
        }
    });
    if (d == 0) { throw 'Person does not exists in the list' }
    return workdata(ssn1, a, b);

}

async function workdata(s, a, b) {
    var c = 0;
    var d = 0;
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
        //console.log("SSN :" + s);
    data.forEach(element => {
        if (element.ssn == s) {
            if (element.willBeFired == 1) {
                d = (a + " " + b + ' - ' + element.jobTitle + ' works at  ' + element.company + '. They will be fired')
            } else { d = (a + " " + b + ' - ' + element.jobTitle + ' works at ' + element.company + '. They will not be fired') }
        }
    });
    return d;
}

async function findTheHacker(ip) {
    var d = 0;
    var c = 0;
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip) != 1) { throw 'Not an ip adress please enter correct ip address' }
    if (typeof ip != 'string') throw 'Not of type Number.Please enter correct IP Address'
    if (ip.length <= 0) throw 'Please enter a valid IP address'
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json')
    data.forEach(element => {
        if (element.ip == ip) {
            d = 1;
            c = hacker(element.ssn);

        }
    })
    return c;
}

async function hacker(ssn2) {
    var d = 0;
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    data.forEach(element => {
        if (element.ssn == ssn2) {
            d = (element.firstName + " " + element.lastName + " is the hacker!")
        }
    });
    return d;
}




module.exports = { whereDoTheyWork, findTheHacker }