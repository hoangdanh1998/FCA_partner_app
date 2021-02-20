import { GET_ACCEPTANCE_ORDERS_TODAY, GET_PREPARATION_ORDERS_TODAY, GET_READINESS_ORDERS_TODAY } from "../action/order-list";

const toDoList = [
    {
        phone: "0987654321",
        estTime: 10,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 13000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 20,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 12000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
];

const doingList = [
    {
        phone: "0987654321",
        estTime: 10,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 20,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
];

const initialState = {
    orderLists: [],
    filterToDoList: [],
    filterDoingList: [],
    filterReadyList: []
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCEPTANCE_ORDERS_TODAY: {
            
            const data = action.payload.data.data.orders;
            
            return {...state, filterToDoList: data};
        }

        case GET_PREPARATION_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;
            return {...state, filterDoingList: data};
        }

        case GET_READINESS_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;

            return {...state, filterReadyList: data};
        }

        default:
            return state;
    }
    
}

export default ordersReducer;