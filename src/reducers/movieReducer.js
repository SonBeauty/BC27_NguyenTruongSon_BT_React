const initialState = {
    chairs: [
        {
            "row": "A",
            "seats": [
                { "name": "A1", "price": 75000, "booked": false },
                { "name": "A2", "price": 75000, "booked": false },
                { "name": "A3", "price": 75000, "booked": false },
                { "name": "A4", "price": 75000, "booked": false },
                { "name": "A5", "price": 75000, "booked": false },
                { "name": "A6", "price": 75000, "booked": false },
                { "name": "A7", "price": 75000, "booked": false },
                { "name": "A8", "price": 75000, "booked": false },
                { "name": "A9", "price": 75000, "booked": false },
                { "name": "A10", "price": 75000, "booked": false },
                { "name": "A11", "price": 75000, "booked": false },
                { "name": "A12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "B",
            "seats": [
                { "name": "B1", "price": 75000, "booked": false },
                { "name": "B2", "price": 75000, "booked": false },
                { "name": "B3", "price": 75000, "booked": false },
                { "name": "B4", "price": 75000, "booked": false },
                { "name": "B5", "price": 75000, "booked": false },
                { "name": "B6", "price": 75000, "booked": false },
                { "name": "B7", "price": 75000, "booked": false },
                { "name": "B8", "price": 75000, "booked": false },
                { "name": "B9", "price": 75000, "booked": false },
                { "name": "B10", "price": 75000, "booked": false },
                { "name": "B11", "price": 75000, "booked": false },
                { "name": "B12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "C",
            "seats": [
                { "name": "C1", "price": 75000, "booked": false },
                { "name": "C2", "price": 75000, "booked": false },
                { "name": "C3", "price": 75000, "booked": false },
                { "name": "C4", "price": 75000, "booked": false },
                { "name": "C5", "price": 75000, "booked": false },
                { "name": "C6", "price": 75000, "booked": false },
                { "name": "C7", "price": 75000, "booked": false },
                { "name": "C8", "price": 75000, "booked": false },
                { "name": "C9", "price": 75000, "booked": false },
                { "name": "C10", "price": 75000, "booked": false },
                { "name": "C11", "price": 75000, "booked": false },
                { "name": "C12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "D",
            "seats": [
                { "name": "D1", "price": 75000, "booked": false },
                { "name": "D2", "price": 75000, "booked": false },
                { "name": "D3", "price": 75000, "booked": false },
                { "name": "D4", "price": 75000, "booked": false },
                { "name": "D5", "price": 75000, "booked": false },
                { "name": "D6", "price": 75000, "booked": false },
                { "name": "D7", "price": 75000, "booked": false },
                { "name": "D8", "price": 75000, "booked": false },
                { "name": "D9", "price": 75000, "booked": false },
                { "name": "D10", "price": 75000, "booked": false },
                { "name": "D11", "price": 75000, "booked": false },
                { "name": "D12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "E",
            "seats": [
                { "name": "E1", "price": 75000, "booked": false },
                { "name": "E2", "price": 75000, "booked": false },
                { "name": "E3", "price": 75000, "booked": false },
                { "name": "E4", "price": 75000, "booked": false },
                { "name": "E5", "price": 75000, "booked": false },
                { "name": "E6", "price": 75000, "booked": false },
                { "name": "E7", "price": 75000, "booked": false },
                { "name": "E8", "price": 75000, "booked": false },
                { "name": "E9", "price": 75000, "booked": false },
                { "name": "E10", "price": 75000, "booked": false },
                { "name": "E11", "price": 75000, "booked": false },
                { "name": "E12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "F",
            "seats": [
                { "name": "F1", "price": 75000, "booked": false },
                { "name": "F2", "price": 75000, "booked": false },
                { "name": "F3", "price": 75000, "booked": false },
                { "name": "F4", "price": 75000, "booked": false },
                { "name": "F5", "price": 75000, "booked": false },
                { "name": "F6", "price": 75000, "booked": false },
                { "name": "F7", "price": 75000, "booked": false },
                { "name": "F8", "price": 75000, "booked": false },
                { "name": "F9", "price": 75000, "booked": false },
                { "name": "F10", "price": 75000, "booked": false },
                { "name": "F11", "price": 75000, "booked": false },
                { "name": "F12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "G",
            "seats": [
                { "name": "G1", "price": 75000, "booked": false },
                { "name": "G2", "price": 75000, "booked": false },
                { "name": "G3", "price": 75000, "booked": false },
                { "name": "G4", "price": 75000, "booked": false },
                { "name": "G5", "price": 75000, "booked": false },
                { "name": "G6", "price": 75000, "booked": false },
                { "name": "G7", "price": 75000, "booked": false },
                { "name": "G8", "price": 75000, "booked": false },
                { "name": "G9", "price": 75000, "booked": false },
                { "name": "G10", "price": 75000, "booked": false },
                { "name": "G11", "price": 75000, "booked": false },
                { "name": "G12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "H",
            "seats": [
                { "name": "H1", "price": 75000, "booked": false },
                { "name": "H2", "price": 75000, "booked": false },
                { "name": "H3", "price": 75000, "booked": false },
                { "name": "H4", "price": 75000, "booked": false },
                { "name": "H5", "price": 75000, "booked": false },
                { "name": "H6", "price": 75000, "booked": false },
                { "name": "H7", "price": 75000, "booked": false },
                { "name": "H8", "price": 75000, "booked": false },
                { "name": "H9", "price": 75000, "booked": false },
                { "name": "H10", "price": 75000, "booked": false },
                { "name": "H11", "price": 75000, "booked": false },
                { "name": "H12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "I",
            "seats": [
                { "name": "I1", "price": 75000, "booked": false },
                { "name": "I2", "price": 75000, "booked": false },
                { "name": "I3", "price": 75000, "booked": false },
                { "name": "I4", "price": 75000, "booked": false },
                { "name": "I5", "price": 75000, "booked": false },
                { "name": "I6", "price": 75000, "booked": false },
                { "name": "I7", "price": 75000, "booked": false },
                { "name": "I8", "price": 75000, "booked": false },
                { "name": "I9", "price": 75000, "booked": false },
                { "name": "I10", "price": 75000, "booked": false },
                { "name": "I11", "price": 75000, "booked": false },
                { "name": "I12", "price": 75000, "booked": false }
            ]
        },
        {
            "row": "J",
            "seats": [
                { "name": "J1", "price": 75000, "booked": false },
                { "name": "J2", "price": 75000, "booked": false },
                { "name": "J3", "price": 75000, "booked": false },
                { "name": "J4", "price": 75000, "booked": false },
                { "name": "J5", "price": 75000, "booked": false },
                { "name": "J6", "price": 75000, "booked": false },
                { "name": "J7", "price": 75000, "booked": false },
                { "name": "J8", "price": 75000, "booked": false },
                { "name": "J9", "price": 75000, "booked": false },
                { "name": "J10", "price": 75000, "booked": false },
                { "name": "J11", "price": 75000, "booked": false },
                { "name": "J12", "price": 75000, "booked": false }
            ]
        }
    ],
    selectedChair: [],
    choosingChair: 0
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "selectChair": {
            const cloneSelectChair = [...state.selectedChair];
            const index = cloneSelectChair.findIndex(item => item.name === action.chair.name);
            if (index === -1) {
                cloneSelectChair.push(action.chair)
            } else {
                cloneSelectChair.splice(index, 1);
            }
            console.log(cloneSelectChair);
            const totalMoney = cloneSelectChair.reduce((total, value) => total = total + value.price, 0)
            console.log(totalMoney)

            return { ...state, selectedChair: cloneSelectChair, choosingChair:totalMoney }
            // const index = state.selectedChair.findIndex((chair) => chair.name === action.chair.name)
            // if (index === -1) {
            //     const newChosingChair = [...state.selectedChair, { ...action.chair }, { ...state.selectedChair, booked: !state.selectedChair.booked }]
            //     console.log(state.selectedChair.booked);
            //     return { ...state, selectedChair: newChosingChair }
            // }
        }
        case "deleteChair": {
            const newSelectedChair = state.selectedChair.filter((item) => item.name !== action.chairName)
            console.log(action.chairName)
            const totalMoney = newSelectedChair.reduce((total, value) => total = total + value.price, 0)
            return { ...state, selectedChair: newSelectedChair, choosingChair:totalMoney }
        }

        case "handleTicket": {
            const cloneTicket = [...state.chairs];
            for (let i = 0; i < action.payload.length; i++) {
                const indexRow = cloneTicket.findIndex(item => item.row === action.payload[i].name.substr(0, 1));
                if (indexRow !== -1) {
                    const indexItem = cloneTicket[indexRow].seats.findIndex(item => item.name === action.payload[i].name);
                    console.log(indexItem)
                    if (indexItem !== -1) {
                        console.log(indexItem)
                        cloneTicket[indexRow].seats[indexItem].booked = true;

                    }
                }

            }

            return { ...state, chairs: cloneTicket, selectedChair: [], choosingChair:0  }

            // const ticket = [...state.chairs]
            // const index = ticket.findIndex((ticket)=>ticket.row===action.ticket.row)

            // const foundIndex = ticket[index].seats.findIndex((seat)=> seat.name===action.ticket.name)
            // ticket[index].seats[foundIndex].booked = true
            // console.log(ticket);
            // return{...state, chairs:ticket}


        }

        default:
            return state
    }
}

export default movieReducer;