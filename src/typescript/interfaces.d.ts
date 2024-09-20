interface Region {
    id: number,
    name: string
}

interface City {
    id: number
    name: string
    region_id: number
}

interface Agent {
    id: number
    name: string
    surname: string
    email: string
    phone: string
    avatar: string
}

interface Estate {
    id: number
    address: string
    zip_code: string
    price: number
    area: number
    bedrooms: number
    is_rental: number
    image: string
    city_id: number
    city: {
        id: number
        name: string
        region_id: number
        region: {
            id: number
            name: string
        }
    }
}

interface IAddEstateCtx {
    isFormValid: boolean
    setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>
    inputStates: {
        addressState: StringInputStateType
        postalCodeState: StringInputStateType
        priceState: StringInputStateType
        areaState: StringInputStateType
        bedroomsState: StringInputStateType
        descriptionState: StringInputStateType
        pictureState: StringInputStateType
        dealTypeState: StringInputStateType
        cityState: NumberInputStateType
        regionState: NumberInputStateType
        agentState: NumberInputStateType
    };
}