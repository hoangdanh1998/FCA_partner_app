import { SegmentedControl } from '@ant-design/react-native';
import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import CartOrderDetails from '../../components/atoms/cart-order-details';
import CartReportDetails from '../../components/atoms/cart-report-detail';
import CustomDatePicker from '../../components/atoms/date-picker';
import { BACKGROUND_COLOR, HEADER_FONT_SIZE } from '../../constance/constance';
import { styles } from './style';


export default function TabReportDetails() {

    const listOrders = [
        {
            "id": "00dd3304-a643-429a-8039-4aad0ef83652",
            "createdAt": "2021-04-21T02:37:00.661Z",
            "updatedAt": "2021-04-21T03:22:32.453Z",
            "deletedAt": null,
            "customer": {
                "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Kim Anh",
                "phone": "0932168893",
                "account": {
                    "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T03:16:58.914Z",
                    "deletedAt": null,
                    "phone": "0932168893",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                    "role": "CUSTOMER",
                    "balance": "572000",
                    "transactions": []
                },
                "orders": null,
                "address": [],
                "favorite": [],
                "favoriteSummary": null,
                "favoriteFcaItem": []
            },
            "partner": {
                "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                "createdAt": "2021-02-24T03:18:56.548Z",
                "updatedAt": "2021-04-08T01:00:27.567Z",
                "deletedAt": null,
                "name": "Quán cà phê 36",
                "status": "APPROVED",
                "phone": "0394422123",
                "isOpen": true,
                "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "expirationDate": "2021-05-08T00:00:00.000Z",
                "busyTime": null,
                "address": {
                    "id": "033efee5-4d63-4493-ae44-c99d9ceca8dd",
                    "createdAt": "2021-02-24T03:18:56.524Z",
                    "updatedAt": "2021-02-24T03:18:56.524Z",
                    "deletedAt": null,
                    "description": "240 Đ. Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam",
                    "latitude": "10.827468080571492",
                    "longitude": "106.72168493270874"
                },
                "account": {
                    "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-14T07:14:24.104Z",
                    "deletedAt": null,
                    "phone": "0392211323",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
                    "role": "PARTNER",
                    "balance": "1526000",
                    "transactions": []
                },
                "items": [],
                "requestItems": [],
                "licenses": []
            },
            "status": "CANCELLATION",
            "destination": {
                "id": "cce2b7d3-e2be-4f4e-8042-516e016668b4",
                "createdAt": "2021-04-21T02:37:00.568Z",
                "updatedAt": "2021-04-21T02:37:00.568Z",
                "deletedAt": null,
                "label": "",
                "description": "Thanh Đa, Cư xá Thanh Đa, phường 27, Bình Thạnh, Ho Chi Minh City, Vietnam",
                "latitude": "10.8165294",
                "longitude": "106.7202804"
            },
            "items": [
                {
                    "id": "2999c61a-380b-4e2e-88be-008733754496",
                    "createdAt": "2021-04-21T02:37:00.720Z",
                    "updatedAt": "2021-04-21T02:37:00.720Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "18000",
                    "quantity": 1,
                    "partnerItem": {
                        "id": "9caafde8-35df-417b-87a1-3db4dbb6820f",
                        "createdAt": "2021-04-05T11:11:08.836Z",
                        "updatedAt": "2021-04-05T11:11:08.836Z",
                        "deletedAt": null,
                        "partner": null,
                        "name": "Cà phê sữa đá",
                        "price": "18000",
                        "status": "ACTIVE",
                        "imageLink": "https://i.pinimg.com/originals/52/08/34/520834ffc925bd5a0d1263b1644d1dee.png",
                        "fcaItem": null
                    }
                }
            ],
            "transaction": [
                {
                    "id": "aea4813b-d45c-4ccb-90cc-550f57bc1b65",
                    "createdAt": "2021-04-21T03:22:32.498Z",
                    "updatedAt": "2021-04-21T03:22:32.498Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "CANCELLATION",
                    "fault": "",
                    "description": "[Khách huỷ] Lí do cá nhân - Huỷ đặt hàng tự động",
                    "reason": "Lí do cá nhân",
                    "requestBy": {
                        "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                        "createdAt": "2021-02-05T03:53:58.725Z",
                        "updatedAt": "2021-02-05T03:53:58.725Z",
                        "deletedAt": null,
                        "name": "Kim Anh",
                        "phone": "0932168893",
                        "account": {
                            "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                            "createdAt": "2021-02-19T14:18:09.304Z",
                            "updatedAt": "2021-04-21T03:16:58.914Z",
                            "deletedAt": null,
                            "phone": "0932168893",
                            "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                            "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                            "role": "CUSTOMER",
                            "balance": "572000",
                            "transactions": []
                        },
                        "orders": null,
                        "address": [],
                        "favorite": [],
                        "favoriteSummary": null,
                        "favoriteFcaItem": []
                    },
                    "createdBy": null
                },
                {
                    "id": "96bb8811-2b3f-4734-9202-93aa1d205c28",
                    "createdAt": "2021-04-21T02:37:00.757Z",
                    "updatedAt": "2021-04-21T02:37:00.757Z",
                    "deletedAt": null,
                    "fromStatus": "",
                    "toStatus": "INITIALIZATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                }
            ],
            "total": 18000
        },
        {
            "id": "5ccf5d35-ed22-423d-876c-569bf496e029",
            "createdAt": "2021-04-21T02:35:00.922Z",
            "updatedAt": "2021-04-21T03:22:13.178Z",
            "deletedAt": null,
            "customer": {
                "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Kim Anh",
                "phone": "0932168893",
                "account": {
                    "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T03:16:58.914Z",
                    "deletedAt": null,
                    "phone": "0932168893",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                    "role": "CUSTOMER",
                    "balance": "572000",
                    "transactions": []
                },
                "orders": null,
                "address": [],
                "favorite": [],
                "favoriteSummary": null,
                "favoriteFcaItem": []
            },
            "partner": {
                "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                "createdAt": "2021-02-24T03:18:56.548Z",
                "updatedAt": "2021-04-08T01:00:27.567Z",
                "deletedAt": null,
                "name": "Quán cà phê 36",
                "status": "APPROVED",
                "phone": "0394422123",
                "isOpen": true,
                "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "expirationDate": "2021-05-08T00:00:00.000Z",
                "busyTime": null,
                "address": {
                    "id": "033efee5-4d63-4493-ae44-c99d9ceca8dd",
                    "createdAt": "2021-02-24T03:18:56.524Z",
                    "updatedAt": "2021-02-24T03:18:56.524Z",
                    "deletedAt": null,
                    "description": "240 Đ. Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam",
                    "latitude": "10.827468080571492",
                    "longitude": "106.72168493270874"
                },
                "account": {
                    "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-14T07:14:24.104Z",
                    "deletedAt": null,
                    "phone": "0392211323",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
                    "role": "PARTNER",
                    "balance": "1526000",
                    "transactions": []
                },
                "items": [],
                "requestItems": [],
                "licenses": []
            },
            "status": "CANCELLATION",
            "destination": {
                "id": "fd6d95e3-1e38-4036-a958-b2c1b4b97870",
                "createdAt": "2021-04-21T02:35:00.459Z",
                "updatedAt": "2021-04-21T02:35:00.459Z",
                "deletedAt": null,
                "label": "",
                "description": "Thanh Đa, Cư xá Thanh Đa, phường 27, Bình Thạnh, Ho Chi Minh City, Vietnam",
                "latitude": "10.8165294",
                "longitude": "106.7202804"
            },
            "items": [
                {
                    "id": "a453678b-9ecf-449a-9083-3574e3412b1f",
                    "createdAt": "2021-04-21T02:35:00.981Z",
                    "updatedAt": "2021-04-21T02:35:00.981Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "18000",
                    "quantity": 1,
                    "partnerItem": {
                        "id": "9caafde8-35df-417b-87a1-3db4dbb6820f",
                        "createdAt": "2021-04-05T11:11:08.836Z",
                        "updatedAt": "2021-04-05T11:11:08.836Z",
                        "deletedAt": null,
                        "partner": null,
                        "name": "Cà phê sữa đá",
                        "price": "18000",
                        "status": "ACTIVE",
                        "imageLink": "https://i.pinimg.com/originals/52/08/34/520834ffc925bd5a0d1263b1644d1dee.png",
                        "fcaItem": null
                    }
                }
            ],
            "transaction": [
                {
                    "id": "887f4bda-c584-461d-80af-b3be0a2e3800",
                    "createdAt": "2021-04-21T02:35:01.025Z",
                    "updatedAt": "2021-04-21T02:35:01.025Z",
                    "deletedAt": null,
                    "fromStatus": "",
                    "toStatus": "INITIALIZATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "3a81dfd8-400c-4448-9ab9-afb56e8d8fef",
                    "createdAt": "2021-04-21T03:22:13.221Z",
                    "updatedAt": "2021-04-21T03:22:13.221Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "CANCELLATION",
                    "fault": "",
                    "description": "[Khách huỷ] Lí do cá nhân - Huỷ đặt hàng tự động",
                    "reason": "Lí do cá nhân",
                    "requestBy": {
                        "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                        "createdAt": "2021-02-05T03:53:58.725Z",
                        "updatedAt": "2021-02-05T03:53:58.725Z",
                        "deletedAt": null,
                        "name": "Kim Anh",
                        "phone": "0932168893",
                        "account": {
                            "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                            "createdAt": "2021-02-19T14:18:09.304Z",
                            "updatedAt": "2021-04-21T03:16:58.914Z",
                            "deletedAt": null,
                            "phone": "0932168893",
                            "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                            "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                            "role": "CUSTOMER",
                            "balance": "572000",
                            "transactions": []
                        },
                        "orders": null,
                        "address": [],
                        "favorite": [],
                        "favoriteSummary": null,
                        "favoriteFcaItem": []
                    },
                    "createdBy": null
                }
            ],
            "total": 18000
        },
        {
            "id": "5ccf5d35-ed22-423d-876c-569bf496e079",
            "createdAt": "2021-04-21T02:35:00.922Z",
            "updatedAt": "2021-04-21T03:22:13.178Z",
            "deletedAt": null,
            "customer": {
                "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Kim Anh",
                "phone": "0932168893",
                "account": {
                    "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T03:16:58.914Z",
                    "deletedAt": null,
                    "phone": "0932168893",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                    "role": "CUSTOMER",
                    "balance": "572000",
                    "transactions": []
                },
                "orders": null,
                "address": [],
                "favorite": [],
                "favoriteSummary": null,
                "favoriteFcaItem": []
            },
            "partner": {
                "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                "createdAt": "2021-02-24T03:18:56.548Z",
                "updatedAt": "2021-04-08T01:00:27.567Z",
                "deletedAt": null,
                "name": "Quán cà phê 36",
                "status": "APPROVED",
                "phone": "0394422123",
                "isOpen": true,
                "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "expirationDate": "2021-05-08T00:00:00.000Z",
                "busyTime": null,
                "address": {
                    "id": "033efee5-4d63-4493-ae44-c99d9ceca8dd",
                    "createdAt": "2021-02-24T03:18:56.524Z",
                    "updatedAt": "2021-02-24T03:18:56.524Z",
                    "deletedAt": null,
                    "description": "240 Đ. Phạm Văn Đồng, Hiệp Bình Chánh, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam",
                    "latitude": "10.827468080571492",
                    "longitude": "106.72168493270874"
                },
                "account": {
                    "id": "d64c3a83-ff7c-4b98-a034-112928dabac6",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-14T07:14:24.104Z",
                    "deletedAt": null,
                    "phone": "0392211323",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
                    "role": "PARTNER",
                    "balance": "1526000",
                    "transactions": []
                },
                "items": [],
                "requestItems": [],
                "licenses": []
            },
            "status": "CANCELLATION",
            "destination": {
                "id": "fd6d95e3-1e38-4036-a958-b2c1b4b97870",
                "createdAt": "2021-04-21T02:35:00.459Z",
                "updatedAt": "2021-04-21T02:35:00.459Z",
                "deletedAt": null,
                "label": "",
                "description": "Thanh Đa, Cư xá Thanh Đa, phường 27, Bình Thạnh, Ho Chi Minh City, Vietnam",
                "latitude": "10.8165294",
                "longitude": "106.7202804"
            },
            "items": [
                {
                    "id": "a453678b-9ecf-449a-9083-3574e3412b1f",
                    "createdAt": "2021-04-21T02:35:00.981Z",
                    "updatedAt": "2021-04-21T02:35:00.981Z",
                    "deletedAt": null,
                    "name": "Cà phê sữa đá",
                    "price": "18000",
                    "quantity": 1,
                    "partnerItem": {
                        "id": "9caafde8-35df-417b-87a1-3db4dbb6820f",
                        "createdAt": "2021-04-05T11:11:08.836Z",
                        "updatedAt": "2021-04-05T11:11:08.836Z",
                        "deletedAt": null,
                        "partner": null,
                        "name": "Cà phê sữa đá",
                        "price": "18000",
                        "status": "ACTIVE",
                        "imageLink": "https://i.pinimg.com/originals/52/08/34/520834ffc925bd5a0d1263b1644d1dee.png",
                        "fcaItem": null
                    }
                }
            ],
            "transaction": [
                {
                    "id": "887f4bda-c584-461d-80af-b3be0a2e3800",
                    "createdAt": "2021-04-21T02:35:01.025Z",
                    "updatedAt": "2021-04-21T02:35:01.025Z",
                    "deletedAt": null,
                    "fromStatus": "",
                    "toStatus": "INITIALIZATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "3a81dfd8-400c-4448-9ab9-afb56e8d8fe4",
                    "createdAt": "2021-04-21T03:22:13.221Z",
                    "updatedAt": "2021-04-21T03:22:13.221Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "CANCELLATION",
                    "fault": "",
                    "description": "[Khách huỷ] Lí do cá nhân - Huỷ đặt hàng tự động",
                    "reason": "Lí do cá nhân",
                    "requestBy": {
                        "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                        "createdAt": "2021-02-05T03:53:58.725Z",
                        "updatedAt": "2021-02-05T03:53:58.725Z",
                        "deletedAt": null,
                        "name": "Kim Anh",
                        "phone": "0932168893",
                        "account": {
                            "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                            "createdAt": "2021-02-19T14:18:09.304Z",
                            "updatedAt": "2021-04-21T03:16:58.914Z",
                            "deletedAt": null,
                            "phone": "0932168893",
                            "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                            "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                            "role": "CUSTOMER",
                            "balance": "572000",
                            "transactions": []
                        },
                        "orders": null,
                        "address": [],
                        "favorite": [],
                        "favoriteSummary": null,
                        "favoriteFcaItem": []
                    },
                    "createdBy": null
                }
            ],
            "total": 18000
        },
        {
            "id": "6fbd23c2-1396-4a45-89a6-3902b064f864",
            "createdAt": "2021-04-21T03:15:54.774Z",
            "updatedAt": "2021-04-21T03:20:33.533Z",
            "deletedAt": null,
            "customer": {
                "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Kim Anh",
                "phone": "0932168893",
                "account": {
                    "id": "66babaeb-3a80-4c35-8695-0305083e88fd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T03:16:58.914Z",
                    "deletedAt": null,
                    "phone": "0932168893",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[IAXsT6M2hUTnaZpF5D_k4S]",
                    "role": "CUSTOMER",
                    "balance": "572000",
                    "transactions": []
                },
                "orders": null,
                "address": [],
                "favorite": [],
                "favoriteSummary": null,
                "favoriteFcaItem": []
            },
            "partner": {
                "id": "ad34c2a3-5c6e-4610-a638-79d77f30821a",
                "createdAt": "2021-02-24T03:18:58.564Z",
                "updatedAt": "2021-04-21T03:15:55.044Z",
                "deletedAt": null,
                "name": "Quán cà phê 44",
                "status": "APPROVED",
                "phone": "0394422123",
                "isOpen": true,
                "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "expirationDate": "2021-05-08T00:00:00.000Z",
                "busyTime": [
                    "1618974534879 - 1618974954880"
                ],
                "address": {
                    "id": "f06e6e39-3d16-4792-8b62-9addabf068be",
                    "createdAt": "2021-02-24T03:18:58.550Z",
                    "updatedAt": "2021-02-24T03:18:58.550Z",
                    "deletedAt": null,
                    "description": "756 Đ. Kha Vạn Cân, Linh Đông, Thủ Đức, Thành phố Hồ Chí Minh, Vietnam",
                    "latitude": "10.841399651431258",
                    "longitude": "106.7466918915305"
                },
                "account": {
                    "id": "ad34c2a3-5c6e-4610-a638-79d77f30821a",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T03:20:33.628Z",
                    "deletedAt": null,
                    "phone": "0392211354",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
                    "role": "PARTNER",
                    "balance": "1965000",
                    "transactions": []
                },
                "items": [],
                "requestItems": [],
                "licenses": []
            },
            "status": "RECEPTION",
            "destination": {
                "id": "71ec7095-4ae2-45b9-8eaf-5e9884a097fb",
                "createdAt": "2021-04-21T03:15:54.614Z",
                "updatedAt": "2021-04-21T03:15:54.614Z",
                "deletedAt": null,
                "label": "",
                "description": "Trường Đại học FPT, Khu Công Nghệ Cao, Long Thạnh Mỹ, District 9, Ho Chi Minh City, Vietnam",
                "latitude": "10.8414846",
                "longitude": "106.8100464"
            },
            "items": [
                {
                    "id": "edf006b3-3e81-4cfa-9e26-562abafadce1",
                    "createdAt": "2021-04-21T03:15:54.854Z",
                    "updatedAt": "2021-04-21T03:15:54.854Z",
                    "deletedAt": null,
                    "name": "Cà phê đá",
                    "price": "17000",
                    "quantity": 2,
                    "partnerItem": {
                        "id": "83830771-8f7d-4fce-a830-3d4ba4e632e8",
                        "createdAt": "2021-04-05T11:12:15.742Z",
                        "updatedAt": "2021-04-05T11:12:15.742Z",
                        "deletedAt": null,
                        "partner": null,
                        "name": "Cà phê đá",
                        "price": "17000",
                        "status": "ACTIVE",
                        "imageLink": "https://awsimages.detik.net.id/community/media/visual/2020/10/09/5-kesalahan-yang-bikin-es-kopi-kamu-kurang-enak-5.jpeg?w=700&q=90",
                        "fcaItem": null
                    }
                }
            ],
            "transaction": [
                {
                    "id": "645880be-e63a-4f66-aa91-6b33d50c4618",
                    "createdAt": "2021-04-21T03:15:55.041Z",
                    "updatedAt": "2021-04-21T03:15:55.041Z",
                    "deletedAt": null,
                    "fromStatus": "",
                    "toStatus": "INITIALIZATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "f9369406-bdbd-4566-b9fd-ee8fec2a9f93",
                    "createdAt": "2021-04-21T03:16:58.824Z",
                    "updatedAt": "2021-04-21T03:16:58.824Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "17999f81-b5b9-422b-a243-b39053fc6af8",
                    "createdAt": "2021-04-21T03:17:47.989Z",
                    "updatedAt": "2021-04-21T03:17:47.989Z",
                    "deletedAt": null,
                    "fromStatus": "ACCEPTANCE",
                    "toStatus": "PREPARATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "15898c6f-35d3-4e1b-9781-89d7e861b932",
                    "createdAt": "2021-04-21T03:20:08.994Z",
                    "updatedAt": "2021-04-21T03:20:08.994Z",
                    "deletedAt": null,
                    "fromStatus": "PREPARATION",
                    "toStatus": "READINESS",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "bb295398-be0e-4eb1-ac75-716a9839dc55",
                    "createdAt": "2021-04-21T03:20:33.677Z",
                    "updatedAt": "2021-04-21T03:20:33.677Z",
                    "deletedAt": null,
                    "fromStatus": "READINESS",
                    "toStatus": "RECEPTION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                }
            ],
            "total": 34000
        },
        {
            "id": "d6677950-68b6-4092-91f7-31bde3cfeb64",
            "createdAt": "2021-04-21T03:06:12.411Z",
            "updatedAt": "2021-04-21T03:07:42.726Z",
            "deletedAt": null,
            "customer": {
                "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
                "createdAt": "2021-02-05T03:53:58.725Z",
                "updatedAt": "2021-02-05T03:53:58.725Z",
                "deletedAt": null,
                "name": "Hoàng Danh",
                "phone": "0394422439",
                "account": {
                    "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-21T04:25:31.337Z",
                    "deletedAt": null,
                    "phone": "0394422439",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[_HULcbKrbKDj9MbioYiKGy]",
                    "role": "CUSTOMER",
                    "balance": "923000",
                    "transactions": []
                },
                "orders": null,
                "address": [],
                "favorite": [],
                "favoriteSummary": null,
                "favoriteFcaItem": []
            },
            "partner": {
                "id": "6938dd10-272a-41f5-af88-0805e274b5dd",
                "createdAt": "2021-02-24T03:18:52.660Z",
                "updatedAt": "2021-04-21T03:06:12.624Z",
                "deletedAt": null,
                "name": "Quán cà phê 21",
                "status": "APPROVED",
                "phone": "0394422123",
                "isOpen": true,
                "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
                "expirationDate": "2021-05-08T00:00:00.000Z",
                "busyTime": [
                    "1618974143480 - 1618974563481"
                ],
                "address": {
                    "id": "77d3847a-bc75-4c34-a975-768adc361870",
                    "createdAt": "2021-02-24T03:18:52.642Z",
                    "updatedAt": "2021-02-24T03:18:52.642Z",
                    "deletedAt": null,
                    "description": "371 Nguyễn Kiệm, Phường 3, Gò Vấp, Thành phố Hồ Chí Minh, Vietnam",
                    "latitude": "10.816434765403955",
                    "longitude": "106.67837262153625"
                },
                "account": {
                    "id": "6938dd10-272a-41f5-af88-0805e274b5dd",
                    "createdAt": "2021-02-19T14:18:09.304Z",
                    "updatedAt": "2021-04-08T01:05:26.165Z",
                    "deletedAt": null,
                    "phone": "0392211311",
                    "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
                    "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
                    "role": "PARTNER",
                    "balance": "1981000",
                    "transactions": []
                },
                "items": [],
                "requestItems": [],
                "licenses": []
            },
            "status": "ACCEPTANCE",
            "destination": {
                "id": "bf440392-27c9-418a-ab0b-0bdf44782adc",
                "createdAt": "2021-04-21T03:06:11.883Z",
                "updatedAt": "2021-04-21T03:06:11.883Z",
                "deletedAt": null,
                "label": "",
                "description": "snob coffee",
                "latitude": "10.7666955",
                "longitude": "106.6945608"
            },
            "items": [
                {
                    "id": "407b2118-476a-4675-9916-b14380e46d82",
                    "createdAt": "2021-04-21T03:06:12.462Z",
                    "updatedAt": "2021-04-21T03:06:12.462Z",
                    "deletedAt": null,
                    "name": "Cam vắt",
                    "price": "27000",
                    "quantity": 1,
                    "partnerItem": {
                        "id": "61168b58-3586-4548-a49a-1182d41d6b68",
                        "createdAt": "2021-04-05T11:13:24.070Z",
                        "updatedAt": "2021-04-05T11:13:24.070Z",
                        "deletedAt": null,
                        "partner": null,
                        "name": "Cam vắt",
                        "price": "27000",
                        "status": "ACTIVE",
                        "imageLink": "http://vndhomecoffee.com/public/uploads/images/MENU/NUOC-EP/cam-ep/cam-ep-1590632797.jpg",
                        "fcaItem": null
                    }
                }
            ],
            "transaction": [
                {
                    "id": "d5ab7602-4181-47e8-a3d7-60eaacf2a4bc",
                    "createdAt": "2021-04-21T03:06:12.611Z",
                    "updatedAt": "2021-04-21T03:06:12.611Z",
                    "deletedAt": null,
                    "fromStatus": "",
                    "toStatus": "INITIALIZATION",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                },
                {
                    "id": "b4a18d88-ae9a-4f00-8b4e-1d9032ef9daf",
                    "createdAt": "2021-04-21T03:07:42.773Z",
                    "updatedAt": "2021-04-21T03:07:42.773Z",
                    "deletedAt": null,
                    "fromStatus": "INITIALIZATION",
                    "toStatus": "ACCEPTANCE",
                    "fault": "",
                    "description": "",
                    "reason": "",
                    "requestBy": null,
                    "createdBy": null
                }
            ],
            "total": 27000
        }
    ]

    const [selectedOrder, setSelectedOrder] = useState(listOrders[0]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isShowModal, setIsShowModal] = useState(false);


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <CartOrderDetails
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
                order = {selectedOrder}
            />
            <View style={[styles.rowContainer, { marginVertical: 20, justifyContent: "space-evenly" }]}>
                <SegmentedControl
                    values={[
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Tất cả</Text>,
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Hoàn tất</Text>,
                        <Text style={{ fontSize: HEADER_FONT_SIZE }}>Sự cố</Text>,
                    ]}
                    tintColor={BACKGROUND_COLOR}
                    style={{ height: 45, width: 320, }}
                // onChange={onChange}
                />

                <CustomDatePicker value={selectedDate} setDate={setSelectedDate} />

            </View>

            <FlatList
                style={{ flex: 1, }}
                data={listOrders}
                horizontal={false}
                // numColumns = {5}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ width: "90%", alignSelf: "center" }}
                        onPress={
                            () => {
                                setSelectedOrder(item);
                                setIsShowModal(true);
                            }
                        }
                    >
                        <CartReportDetails
                            item={item}
                            selectedOrder={selectedOrder}
                        />
                    </TouchableOpacity>
                )}
            />
            {/* <View
                    style={{ flex: 1 }}
                >
                    <CartOrderDetails
                        order={selectedOrder}
                    />
                </View> */}

        </View>

    )
}
