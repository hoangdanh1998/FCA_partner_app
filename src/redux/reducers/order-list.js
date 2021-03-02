import { 
    GET_ACCEPTANCE_ORDERS_TODAY, 
    GET_ARRIVAL_ORDER_TODAY, 
    GET_ORDER_AFTER_UPDATE, 
    GET_PREPARATION_ORDERS_TODAY, 
    GET_READINESS_ORDERS_TODAY, 
    SEND_QR_CODE, 
    SET_ACCEPTANCE_ORDER, 
    SET_PREPARATION_ORDER, 
    SET_READINESS_ORDER, 
    SET_RECEPTION_ORDER,
    SEARCH_READY_LIST
} from "../action/order-list";

const initialState = {
    orderLists: [],
    filterToDoList: [],
    filterDoingList: [],
    filterReadyList: [
        {
            "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
            "createdAt": "2021-02-24T17:03:39.583Z",
            "updatedAt": "2021-02-25T17:35:15.396Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "03909899",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "READINESS",
            "items": [
                {
                    "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                    "createdAt": "2021-02-25T17:03:39.632Z",
                    "updatedAt": "2021-02-25T17:03:39.632Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                    "createdAt": "2021-02-25T17:03:42.210Z",
                    "updatedAt": "2021-02-25T17:03:42.210Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": null
                },
                {
                    "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                    "createdAt": "2021-02-25T17:27:58.098Z",
                    "updatedAt": "2021-02-25T17:27:58.098Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "PREPARATION",
                    "fault": null
                },
                {
                    "id": "50c5d221-5af8-4913-9560-42ef56152187",
                    "createdAt": "2021-02-25T17:35:15.437Z",
                    "updatedAt": "2021-02-25T17:35:15.437Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "READINESS",
                    "fault": null
                }
            ],
            "total": 30000
        },
        {
            "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
            "createdAt": "2021-02-24T17:27:01.359Z",
            "updatedAt": "2021-02-25T17:27:14.971Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "03699800",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "REJECTION",
            "items": [
                {
                    "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                    "createdAt": "2021-02-25T17:27:01.882Z",
                    "updatedAt": "2021-02-25T17:27:01.882Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                },
                {
                    "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                    "createdAt": "2021-02-25T17:27:01.681Z",
                    "updatedAt": "2021-02-25T17:27:01.681Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                    "createdAt": "2021-02-25T17:27:15.023Z",
                    "updatedAt": "2021-02-25T17:27:15.023Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "REJECTION",
                    "fault": null
                }
            ],
            "total": 60000
        },
        {
            "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
            "createdAt": "2021-02-24T17:03:39.583Z",
            "updatedAt": "2021-02-25T17:35:15.396Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "039889723",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "READINESS",
            "items": [
                {
                    "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                    "createdAt": "2021-02-25T17:03:39.632Z",
                    "updatedAt": "2021-02-25T17:03:39.632Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                    "createdAt": "2021-02-25T17:03:42.210Z",
                    "updatedAt": "2021-02-25T17:03:42.210Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": null
                },
                {
                    "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                    "createdAt": "2021-02-25T17:27:58.098Z",
                    "updatedAt": "2021-02-25T17:27:58.098Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "PREPARATION",
                    "fault": null
                },
                {
                    "id": "50c5d221-5af8-4913-9560-42ef56152187",
                    "createdAt": "2021-02-25T17:35:15.437Z",
                    "updatedAt": "2021-02-25T17:35:15.437Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "READINESS",
                    "fault": null
                }
            ],
            "total": 30000
        },
        {
            "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
            "createdAt": "2021-02-24T17:27:01.359Z",
            "updatedAt": "2021-02-25T17:27:14.971Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "0289111111",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "REJECTION",
            "items": [
                {
                    "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                    "createdAt": "2021-02-25T17:27:01.882Z",
                    "updatedAt": "2021-02-25T17:27:01.882Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                },
                {
                    "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                    "createdAt": "2021-02-25T17:27:01.681Z",
                    "updatedAt": "2021-02-25T17:27:01.681Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                    "createdAt": "2021-02-25T17:27:15.023Z",
                    "updatedAt": "2021-02-25T17:27:15.023Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "REJECTION",
                    "fault": null
                }
            ],
            "total": 60000
        },
        {
            "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
            "createdAt": "2021-02-24T17:03:39.583Z",
            "updatedAt": "2021-02-25T17:35:15.396Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "0394422439",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "READINESS",
            "items": [
                {
                    "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                    "createdAt": "2021-02-25T17:03:39.632Z",
                    "updatedAt": "2021-02-25T17:03:39.632Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                    "createdAt": "2021-02-25T17:03:42.210Z",
                    "updatedAt": "2021-02-25T17:03:42.210Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": null
                },
                {
                    "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                    "createdAt": "2021-02-25T17:27:58.098Z",
                    "updatedAt": "2021-02-25T17:27:58.098Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "PREPARATION",
                    "fault": null
                },
                {
                    "id": "50c5d221-5af8-4913-9560-42ef56152187",
                    "createdAt": "2021-02-25T17:35:15.437Z",
                    "updatedAt": "2021-02-25T17:35:15.437Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "READINESS",
                    "fault": null
                }
            ],
            "total": 30000
        },
        
        {
            "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
            "createdAt": "2021-02-24T17:03:39.583Z",
            "updatedAt": "2021-02-25T17:35:15.396Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "0831312123",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "READINESS",
            "items": [
                {
                    "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                    "createdAt": "2021-02-25T17:03:39.632Z",
                    "updatedAt": "2021-02-25T17:03:39.632Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                    "createdAt": "2021-02-25T17:03:42.210Z",
                    "updatedAt": "2021-02-25T17:03:42.210Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": null
                },
                {
                    "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                    "createdAt": "2021-02-25T17:27:58.098Z",
                    "updatedAt": "2021-02-25T17:27:58.098Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "PREPARATION",
                    "fault": null
                },
                {
                    "id": "50c5d221-5af8-4913-9560-42ef56152187",
                    "createdAt": "2021-02-25T17:35:15.437Z",
                    "updatedAt": "2021-02-25T17:35:15.437Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "READINESS",
                    "fault": null
                }
            ],
            "total": 30000
        },
        {
            "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
            "createdAt": "2021-02-24T17:27:01.359Z",
            "updatedAt": "2021-02-25T17:27:14.971Z",
            "deletedAt": null,
            "customer": {
                "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "087231223",
                "account": null
            },
            "partner": {
                "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
                "createdAt": "2021-02-05T08:42:44.411Z",
                "updatedAt": "2021-02-05T08:42:44.411Z",
                "deletedAt": null,
                "name": "Café Sân Thượng Phong Lan",
                "status": "APPROVED",
                "phone": null,
                "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "address": null,
                "account": null,
                "items": [],
                "requestItems": []
            },
            "status": "REJECTION",
            "items": [
                {
                    "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                    "createdAt": "2021-02-25T17:27:01.882Z",
                    "updatedAt": "2021-02-25T17:27:01.882Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "30000",
                    "quantity": 1
                },
                {
                    "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                    "createdAt": "2021-02-25T17:27:01.681Z",
                    "updatedAt": "2021-02-25T17:27:01.681Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "30000",
                    "quantity": 1
                }
            ],
            "transaction": [
                {
                    "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                    "createdAt": "2021-02-25T17:27:15.023Z",
                    "updatedAt": "2021-02-25T17:27:15.023Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "REJECTION",
                    "fault": null
                }
            ],
            "total": 60000
        }

    ],
    filterArrivalList: [],
    filterSearchOrderList: [
        {
        "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
        "createdAt": "2021-02-24T17:03:39.583Z",
        "updatedAt": "2021-02-25T17:35:15.396Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "03909899",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "READINESS",
        "items": [
            {
                "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                "createdAt": "2021-02-25T17:03:39.632Z",
                "updatedAt": "2021-02-25T17:03:39.632Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                "createdAt": "2021-02-25T17:03:42.210Z",
                "updatedAt": "2021-02-25T17:03:42.210Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "ACCEPTANCE",
                "fault": null
            },
            {
                "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                "createdAt": "2021-02-25T17:27:58.098Z",
                "updatedAt": "2021-02-25T17:27:58.098Z",
                "deletedAt": null,
                "fromStatus": "PREPARATION",
                "toStatus": "PREPARATION",
                "fault": null
            },
            {
                "id": "50c5d221-5af8-4913-9560-42ef56152187",
                "createdAt": "2021-02-25T17:35:15.437Z",
                "updatedAt": "2021-02-25T17:35:15.437Z",
                "deletedAt": null,
                "fromStatus": "READINESS",
                "toStatus": "READINESS",
                "fault": null
            }
        ],
        "total": 30000
    },
    {
        "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        "createdAt": "2021-02-24T17:27:01.359Z",
        "updatedAt": "2021-02-25T17:27:14.971Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "03699800",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "REJECTION",
        "items": [
            {
                "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                "createdAt": "2021-02-25T17:27:01.882Z",
                "updatedAt": "2021-02-25T17:27:01.882Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            },
            {
                "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                "createdAt": "2021-02-25T17:27:01.681Z",
                "updatedAt": "2021-02-25T17:27:01.681Z",
                "deletedAt": null,
                "name": "Cà phê sữa đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                "createdAt": "2021-02-25T17:27:15.023Z",
                "updatedAt": "2021-02-25T17:27:15.023Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "REJECTION",
                "fault": null
            }
        ],
        "total": 60000
    },
    {
        "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
        "createdAt": "2021-02-24T17:03:39.583Z",
        "updatedAt": "2021-02-25T17:35:15.396Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "039889723",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "READINESS",
        "items": [
            {
                "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                "createdAt": "2021-02-25T17:03:39.632Z",
                "updatedAt": "2021-02-25T17:03:39.632Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                "createdAt": "2021-02-25T17:03:42.210Z",
                "updatedAt": "2021-02-25T17:03:42.210Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "ACCEPTANCE",
                "fault": null
            },
            {
                "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                "createdAt": "2021-02-25T17:27:58.098Z",
                "updatedAt": "2021-02-25T17:27:58.098Z",
                "deletedAt": null,
                "fromStatus": "PREPARATION",
                "toStatus": "PREPARATION",
                "fault": null
            },
            {
                "id": "50c5d221-5af8-4913-9560-42ef56152187",
                "createdAt": "2021-02-25T17:35:15.437Z",
                "updatedAt": "2021-02-25T17:35:15.437Z",
                "deletedAt": null,
                "fromStatus": "READINESS",
                "toStatus": "READINESS",
                "fault": null
            }
        ],
        "total": 30000
    },
    {
        "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        "createdAt": "2021-02-24T17:27:01.359Z",
        "updatedAt": "2021-02-25T17:27:14.971Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "0289111111",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "REJECTION",
        "items": [
            {
                "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                "createdAt": "2021-02-25T17:27:01.882Z",
                "updatedAt": "2021-02-25T17:27:01.882Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            },
            {
                "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                "createdAt": "2021-02-25T17:27:01.681Z",
                "updatedAt": "2021-02-25T17:27:01.681Z",
                "deletedAt": null,
                "name": "Cà phê sữa đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                "createdAt": "2021-02-25T17:27:15.023Z",
                "updatedAt": "2021-02-25T17:27:15.023Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "REJECTION",
                "fault": null
            }
        ],
        "total": 60000
    },
    {
        "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
        "createdAt": "2021-02-24T17:03:39.583Z",
        "updatedAt": "2021-02-25T17:35:15.396Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "0394422439",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "READINESS",
        "items": [
            {
                "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                "createdAt": "2021-02-25T17:03:39.632Z",
                "updatedAt": "2021-02-25T17:03:39.632Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                "createdAt": "2021-02-25T17:03:42.210Z",
                "updatedAt": "2021-02-25T17:03:42.210Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "ACCEPTANCE",
                "fault": null
            },
            {
                "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                "createdAt": "2021-02-25T17:27:58.098Z",
                "updatedAt": "2021-02-25T17:27:58.098Z",
                "deletedAt": null,
                "fromStatus": "PREPARATION",
                "toStatus": "PREPARATION",
                "fault": null
            },
            {
                "id": "50c5d221-5af8-4913-9560-42ef56152187",
                "createdAt": "2021-02-25T17:35:15.437Z",
                "updatedAt": "2021-02-25T17:35:15.437Z",
                "deletedAt": null,
                "fromStatus": "READINESS",
                "toStatus": "READINESS",
                "fault": null
            }
        ],
        "total": 30000
    },
    
    {
        "id": "3d30f064-d5b2-4c64-af3d-8b2f7bacafa2",
        "createdAt": "2021-02-24T17:03:39.583Z",
        "updatedAt": "2021-02-25T17:35:15.396Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "0831312123",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "READINESS",
        "items": [
            {
                "id": "f1f87914-5ca3-4ef7-83eb-2947f31d2fba",
                "createdAt": "2021-02-25T17:03:39.632Z",
                "updatedAt": "2021-02-25T17:03:39.632Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "c8c90d0e-2ba8-4e4f-b017-ec92f5fc72e9",
                "createdAt": "2021-02-25T17:03:42.210Z",
                "updatedAt": "2021-02-25T17:03:42.210Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "ACCEPTANCE",
                "fault": null
            },
            {
                "id": "b5d79298-1b0f-4c6c-88dc-858ce2cb5329",
                "createdAt": "2021-02-25T17:27:58.098Z",
                "updatedAt": "2021-02-25T17:27:58.098Z",
                "deletedAt": null,
                "fromStatus": "PREPARATION",
                "toStatus": "PREPARATION",
                "fault": null
            },
            {
                "id": "50c5d221-5af8-4913-9560-42ef56152187",
                "createdAt": "2021-02-25T17:35:15.437Z",
                "updatedAt": "2021-02-25T17:35:15.437Z",
                "deletedAt": null,
                "fromStatus": "READINESS",
                "toStatus": "READINESS",
                "fault": null
            }
        ],
        "total": 30000
    },
    {
        "id": "219a55a3-a12f-4c7a-bab9-04524ad56729",
        "createdAt": "2021-02-24T17:27:01.359Z",
        "updatedAt": "2021-02-25T17:27:14.971Z",
        "deletedAt": null,
        "customer": {
            "id": "76babaeb-3a80-4c35-8695-0305083e88fd",
            "createdAt": "2021-02-05T03:53:58.725Z",
            "updatedAt": "2021-02-05T03:53:58.725Z",
            "deletedAt": null,
            "name": "Hoàng Danh",
            "phone": "087231223",
            "account": null
        },
        "partner": {
            "id": "1ceee651-7dea-4a0f-b517-b49166cb6cfb",
            "createdAt": "2021-02-05T08:42:44.411Z",
            "updatedAt": "2021-02-05T08:42:44.411Z",
            "deletedAt": null,
            "name": "Café Sân Thượng Phong Lan",
            "status": "APPROVED",
            "phone": null,
            "imageLink": "http://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
            "address": null,
            "account": null,
            "items": [],
            "requestItems": []
        },
        "status": "REJECTION",
        "items": [
            {
                "id": "10ce5a6e-5178-4387-bee7-fee713cf03ff",
                "createdAt": "2021-02-25T17:27:01.882Z",
                "updatedAt": "2021-02-25T17:27:01.882Z",
                "deletedAt": null,
                "name": "Cà phê đá",
                "price": "30000",
                "quantity": 1
            },
            {
                "id": "ee846edf-9558-404b-9dfc-be49bec36ab8",
                "createdAt": "2021-02-25T17:27:01.681Z",
                "updatedAt": "2021-02-25T17:27:01.681Z",
                "deletedAt": null,
                "name": "Cà phê sữa đá",
                "price": "30000",
                "quantity": 1
            }
        ],
        "transaction": [
            {
                "id": "5d985e31-04e2-4e46-8ef4-ed0d7b1ca6f0",
                "createdAt": "2021-02-25T17:27:15.023Z",
                "updatedAt": "2021-02-25T17:27:15.023Z",
                "deletedAt": null,
                "fromStatus": "INITIALIZATION",
                "toStatus": "REJECTION",
                "fault": null
            }
        ],
        "total": 60000
    }]
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCEPTANCE_ORDERS_TODAY: {
            
            const data = action.payload.data.data.orders;

            // console.log('setAcceptance ' + data.length)
            return {...state, filterToDoList: data};
        }

        case GET_PREPARATION_ORDERS_TODAY: {
            const data = action.payload.data.data.orders;
            return {...state, filterDoingList: data};
        }

        case GET_READINESS_ORDERS_TODAY: {
            const data = [...action.responseReady.data.data.orders, ...action.responseArrival.data.data.orders];

            return {...state, filterReadyList: data};
        }

        case GET_ARRIVAL_ORDER_TODAY: {
            const data = action.payload.data.data.orders;

            return {...state, filterArrivalList: data};
        }

        case SET_RECEPTION_ORDER: {
            
            const id = action.payload;
            const orderList = state.filterReadyList.filter((order) => {
                return order.id != id;
            })
            
            return {...state, filterReadyList: orderList};
        }

        case SET_PREPARATION_ORDER: {
            const id = action.payload;
            let doingList = state.filterDoingList.map((order)=>order);
            // console.log("filterDoingList: ", doingList);
            const orderList = state.filterToDoList.filter((order) => {
                if(order.id === id){
                    doingList.push(order);
                }
                return order.id != id;
            })

            
            // console.log("filterTodoList: ", orderList);
            
            return {...state, filterToDoList: orderList, filterDoingList: doingList };
        }

        case SET_READINESS_ORDER: {
            const id = action.payload;
            let readyList = state.filterReadyList.map((order)=>order);
            // console.log("filterDoingList: ", doingList);
            const orderList = state.filterDoingList.filter((order) => {
                if(order.id === id){
                    readyList.push(order);
                }
                return order.id != id;
            })

            
            // console.log("filterTodoList: ", orderList);
            
            return {...state, filterDoingList: orderList, filterReadyList: readyList };
        }

        case SET_ACCEPTANCE_ORDER: {
            return state;
        }

        case SEND_QR_CODE: {
            return state;
        }

        case GET_ORDER_AFTER_UPDATE: {
            
            return state;
        }

        case SEARCH_READY_LIST: {
            const numberPhone = action.payload;
            console.log("number phone: ", numberPhone);
            
            if (numberPhone.length === 0) {
                return {...state, filterSearchOrderList: state.filterReadyList};
            }
            console.log(state.filterReadyList);
            const orderList = state.filterReadyList.filter((order) => {
                return order.customer.phone.search(numberPhone) != -1;          
            });
            // state.filterSearchOrderList = [...orderList];
            console.log("search length",state.filterSearchOrderList.length);
            return {...state,filterSearchOrderList:orderList};
        }


        default:
            return state;
    }
    
}

export default ordersReducer;