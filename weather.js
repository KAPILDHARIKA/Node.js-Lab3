const axios = require('axios');

async function shouldTheyGoOutside(firstName, lastName) {
    if ((typeof firstName != 'string') || (typeof lastName != 'string')) throw 'Names are not strings.Please enter correct names'
    if ((typeof firstName == 'undefined') || (typeof lastName == 'undefined')) throw 'Empty strings.Please enter correct names'
    if ((firstName.length < 0) || (lastName.length < 0)) throw 'Please enter valid names'
    var zip1 = 0;
    var d = 0;
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
    data.forEach(element => {
        if ((element.firstName == firstName) && (element.lastName == lastName)) {
            zip1 = element.zip;
            d++;
        }
    });
    if (d == 0) { throw 'Person does not exists in the list' }
    return weatherdata(zip1, firstName);
}

async function weatherdata(z, firstName) {
    var c = 0;
    var b = 0;
    const { data } = await axios.get('https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json')
        // console.log("Zip is :" + z);
    data.forEach(element => {
        if (element.zip == z) {
            if (element.temp >= 34) {
                b = ("\n" + 'Yes,' + firstName + ' should go outside')
            } else {
                b = ("\n" + 'No,' + firstName + ' should not go outside ')
            }
        }
    });
    return b;

}




module.exports = { shouldTheyGoOutside }