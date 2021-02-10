const people = require("./people.js");
const waether = require("./weather.js");
const work = require("./work.js");

async function main() {
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")
    try {
        const peopledata = await people.getPersonById([])
        console.log("SEARCHING PERSON BY ID:");
        console.log(peopledata)
    } catch (e) {
        console.log(e);
    }
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")

    try {
        const peopledata1 = await people.lexIndex(67)
        console.log("SEARCHING PERSON BY INDEX:");
        console.log(peopledata1)
    } catch (e) {
        console.log(e);
    }
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")

    try {
        const peopledata2 = await people.firstNameMetrics()
        console.log("DETAILS RELATED TO THE FIRST NAME:");
        console.log(peopledata2)
    } catch (e) {
        console.log(e);
    }
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")


    try {
        const weatherdata3 = await waether.shouldTheyGoOutside('bob', 'smith')
        console.log("TEMPERATURE BASED ON THE NAME OF THE PERSON:");
        console.log(weatherdata3)
    } catch (e) {
        console.log(e);
    }
    //sleep(90000);
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")


    try {
        const workdata4 = await work.whereDoTheyWork('Bob', 'Smith')
        console.log("WORD DETAILS OF THE PERSON:");
        console.log(workdata4)
    } catch (e) {
        console.log(e);
    }


    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")


    try {
        const workdata5 = await work.findTheHacker("79.222.167.180")
        console.log("HACKER DETAILS BASED ON IP ADDRESS:");
        console.log(workdata5)

    } catch (e) {
        console.log(e);
    }

    console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------")


}

//call main
main()