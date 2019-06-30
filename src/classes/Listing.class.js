import axios from 'axios'

export class Listing {
    constructor(pictures, address, neighborhood, contactEmail, contactNumber, roommateTolerant, listOfPotentialRoommates, /* params */ numberOfRooms, numberOfBathrooms, squareFootage, typeOfHome, price){
        this.pictures = pictures || ''; // array of urls
        this.address = address || ''; // string
        this.neighborhood = neighborhood || ''; // string
        this.contactEmail = contactEmail || ''; // string
        this.contactNumber = contactNumber || ''; // string
        this.roommateTolerant = roommateTolerant || true; // bool
        this.listOfPotentialRoommates = listOfPotentialRoommates || ''; // array of urls
        this.params = HouseParameters.buildHouseParameters(numberOfRooms, numberOfBathrooms, squareFootage, typeOfHome, price);
    }
}

class HouseParameters {
    constructor(numberOfRooms, numberOfBathrooms, squareFootage, typeOfHome , price){
        this.numberOfRooms = numberOfRooms || ''; // int
        this.numberOfBathrooms = numberOfBathrooms || ''; // int
        this.squareFootage = squareFootage || ''; // int
        this.typeOfHome = typeOfHome || ''; // string
        this.price = price || ''; // int
    }

    static buildHouseParameters(numberOfRooms, numberOfBathrooms, squareFootage, typeOfHome, price){
        return new HouseParameters(numberOfRooms, numberOfBathrooms, squareFootage, typeOfHome, price);
    }
}

export class Parser {
    constructor(querystring){
        this.querystring = querystring
    }

    static parseCraigsList(region, price){
        axios.get(`https://sfbay.craigslist.org/search/${region}/apa?max_price=${price}&availabilityMode=0&sale_date=all+dates`)
        .then(response=>{
            console.log(response);
            
        })
    }
}