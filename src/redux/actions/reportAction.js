import fca from "../../service/fca-api/fca";
export const GET_REPORT_ORDERS = "GET_REPORT_ORDERS";
// const response = {
//     "meta": {
//         "status": "SUCCESS"
//     },
//     "data": {
//         "report": {
//             "orders": {
//                 "RECEPTION": {
//                     "orders": [
//                         {
//                             "id": "72cbc150-9f47-4b71-bf45-34e5a0908879",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T09:05:43.342Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "RECEPTION",
//                             "items": [
//                                 {
//                                     "id": "06cd9ca2-5e0b-4fa8-bcd0-aa4ecc96b288",
//                                     "createdAt": "2021-03-10T09:04:20.563Z",
//                                     "updatedAt": "2021-03-10T09:04:20.563Z",
//                                     "deletedAt": null,
//                                     "name": "Cacao đá",
//                                     "price": "25000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "37224747-5d5a-4821-934d-b1c40b4e2154",
//                                     "createdAt": "2021-03-10T09:04:36.480Z",
//                                     "updatedAt": "2021-03-10T09:04:36.480Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "ACCEPTANCE",
//                                     "toStatus": "PREPARATION",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "e53407c5-31db-4f55-bdfe-b9a108370274",
//                                     "createdAt": "2021-03-10T09:04:37.801Z",
//                                     "updatedAt": "2021-03-10T09:04:37.801Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "PREPARATION",
//                                     "toStatus": "READINESS",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "ff1a178e-6b69-4215-9cc3-73f411d268ea",
//                                     "createdAt": "2021-03-10T09:04:22.900Z",
//                                     "updatedAt": "2021-03-10T09:04:22.900Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "INITIALIZATION",
//                                     "toStatus": "ACCEPTANCE",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "1a1ea103-26c4-4e6c-9d06-1cf884f2d01d",
//                                     "createdAt": "2021-03-10T09:05:42.633Z",
//                                     "updatedAt": "2021-03-10T09:05:42.633Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "READINESS",
//                                     "toStatus": "RECEPTION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 25000
//                         },
//                         {
//                             "id": "c94d4f90-0f92-46a6-8c3e-a46d74d76a47",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T08:31:44.301Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "RECEPTION",
//                             "items": [
//                                 {
//                                     "id": "99bdc1d6-e3c2-4319-909f-0e3ff311831b",
//                                     "createdAt": "2021-03-10T08:30:05.481Z",
//                                     "updatedAt": "2021-03-10T08:30:05.481Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê sữa đá",
//                                     "price": "17000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "0361262d-f3ca-4d88-a580-21e68c5eea19",
//                                     "createdAt": "2021-03-10T08:31:32.357Z",
//                                     "updatedAt": "2021-03-10T08:31:32.357Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "PREPARATION",
//                                     "toStatus": "READINESS",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "a176f2db-a5ab-4842-9af2-839e7ce0ab88",
//                                     "createdAt": "2021-03-10T08:31:23.095Z",
//                                     "updatedAt": "2021-03-10T08:31:23.095Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "INITIALIZATION",
//                                     "toStatus": "ACCEPTANCE",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "fe77b179-b25f-4f0c-a795-f8686422b052",
//                                     "createdAt": "2021-03-10T08:31:29.514Z",
//                                     "updatedAt": "2021-03-10T08:31:29.514Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "ACCEPTANCE",
//                                     "toStatus": "PREPARATION",
//                                     "fault": null,
//                                     "description": null
//                                 },
//                                 {
//                                     "id": "89d3841f-fdf1-47ce-8bad-a127816b3c58",
//                                     "createdAt": "2021-03-10T08:31:43.674Z",
//                                     "updatedAt": "2021-03-10T08:31:43.674Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "READINESS",
//                                     "toStatus": "RECEPTION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 17000
//                         }
//                     ],
//                     "total": 42000,
//                     "count": 2
//                 },
//                 "REJECTION": {
//                     "orders": [
//                         {
//                             "id": "0810a570-535e-453c-8dc7-d5bee34640f3",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T08:40:11.292Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "REJECTION",
//                             "items": [
//                                 {
//                                     "id": "02d89302-148b-40d3-a5cc-9a8688a6e79b",
//                                     "createdAt": "2021-03-10T08:40:07.445Z",
//                                     "updatedAt": "2021-03-10T08:40:07.445Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê đá",
//                                     "price": "15000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "3cfacfa0-2719-46d9-a2db-1f857f451a21",
//                                     "createdAt": "2021-03-10T08:40:11.337Z",
//                                     "updatedAt": "2021-03-10T08:40:11.337Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "INITIALIZATION",
//                                     "toStatus": "REJECTION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 15000
//                         },
//                         {
//                             "id": "740ee650-c48d-4b11-a33d-921240eb97cf",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T08:32:22.010Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "REJECTION",
//                             "items": [
//                                 {
//                                     "id": "2624d5d1-cd2c-4fa8-a042-dbaf62422935",
//                                     "createdAt": "2021-03-10T08:32:19.875Z",
//                                     "updatedAt": "2021-03-10T08:32:19.875Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê đá",
//                                     "price": "15000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "5fa409fa-ef1d-466e-9cda-377524ea95f5",
//                                     "createdAt": "2021-03-10T08:32:22.057Z",
//                                     "updatedAt": "2021-03-10T08:32:22.057Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "INITIALIZATION",
//                                     "toStatus": "REJECTION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 15000
//                         },
//                         {
//                             "id": "f5703d0d-8abf-4d63-b4de-f81025dd60f1",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T07:29:22.021Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "REJECTION",
//                             "items": [
//                                 {
//                                     "id": "3e78e6eb-2793-4b79-a12f-2b07b607463f",
//                                     "createdAt": "2021-03-10T07:29:19.033Z",
//                                     "updatedAt": "2021-03-10T07:29:19.033Z",
//                                     "deletedAt": null,
//                                     "name": "Cacao đá",
//                                     "price": "25000",
//                                     "quantity": 1
//                                 },
//                                 {
//                                     "id": "6c271e91-35cf-4922-b24c-fe71bd98f1a8",
//                                     "createdAt": "2021-03-10T07:29:19.052Z",
//                                     "updatedAt": "2021-03-10T07:29:19.052Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê sữa đá",
//                                     "price": "17000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "388f65f5-952d-4fef-8955-29bd5e21523e",
//                                     "createdAt": "2021-03-10T07:29:22.033Z",
//                                     "updatedAt": "2021-03-10T07:29:22.033Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "INITIALIZATION",
//                                     "toStatus": "REJECTION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 42000
//                         }
//                     ],
//                     "total": 72000,
//                     "count": 3
//                 },
//                 "CANCELLATION": {
//                     "orders": [
//                         {
//                             "id": "f3e32793-e7e7-49d7-bd4c-45b4c3042ebc",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T07:29:14.821Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "CANCELLATION",
//                             "items": [
//                                 {
//                                     "id": "7af5235d-c195-4d96-8ac0-7c4d9afab094",
//                                     "createdAt": "2021-03-10T07:29:12.408Z",
//                                     "updatedAt": "2021-03-10T07:29:12.408Z",
//                                     "deletedAt": null,
//                                     "name": "Cacao đá",
//                                     "price": "25000",
//                                     "quantity": 1
//                                 },
//                                 {
//                                     "id": "eb00e557-c70d-4d8d-aa6a-e1dcd334b240",
//                                     "createdAt": "2021-03-10T07:29:12.431Z",
//                                     "updatedAt": "2021-03-10T07:29:12.431Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê sữa đá",
//                                     "price": "17000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "5789a3b5-b174-4f85-be17-b0e21d10cb30",
//                                     "createdAt": "2021-03-10T07:29:14.832Z",
//                                     "updatedAt": "2021-03-10T07:29:14.832Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "CANCELLATION",
//                                     "toStatus": "CANCELLATION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 42000
//                         },
//                         {
//                             "id": "ef610f1f-bc2c-4c3e-b946-2cb8193c3ef1",
//                             "createdAt": "2021-03-15T09:04:20.512Z",
//                             "updatedAt": "2021-03-10T07:29:05.971Z",
//                             "deletedAt": null,
//                             "customer": {
//                                 "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                 "createdAt": "2021-02-05T03:53:58.725Z",
//                                 "updatedAt": "2021-02-05T03:53:58.725Z",
//                                 "deletedAt": null,
//                                 "name": "Hoàng Danh",
//                                 "phone": "0394422439",
//                                 "account": {
//                                     "id": "68babaeb-3a80-4c35-8695-0305083e88fd",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-03-04T03:18:03.202Z",
//                                     "deletedAt": null,
//                                     "phone": "0394422439",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[MK9VG4HXf3erwiWOEYHZXR]",
//                                     "role": "CUSTOMER"
//                                 },
//                                 "address": null
//                             },
//                             "partner": {
//                                 "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                 "createdAt": "2021-02-24T03:19:00.875Z",
//                                 "updatedAt": "2021-03-04T04:35:19.679Z",
//                                 "deletedAt": null,
//                                 "name": "Quán cà phê 53",
//                                 "status": "APPROVED",
//                                 "phone": "0394422123",
//                                 "isOpen": true,
//                                 "imageLink": "https://retaildesignblog.net/wp-content/uploads/2016/07/GENERAL-SUPPLY-store-and-cafe-Nagoya-Japan.jpg",
//                                 "expirationDate": null,
//                                 "address": {
//                                     "id": "dc23ea56-345f-4793-aa1e-546bd3a030b0",
//                                     "createdAt": "2021-02-24T03:19:00.860Z",
//                                     "updatedAt": "2021-02-24T03:19:00.860Z",
//                                     "deletedAt": null,
//                                     "description": "Trước TTDT Nhân Lực Chất Lượng Cao Hutech Song Hành Phải Xa Lộ Hà Nội, Hiệp Phú, Quận 9, Thành phố Hồ Chí Minh, Vietnam",
//                                     "latitude": "10.855771364090506",
//                                     "longitude": "106.78586483001709"
//                                 },
//                                 "account": {
//                                     "id": "0440ef59-6c90-4630-8be4-553533e45591",
//                                     "createdAt": "2021-02-19T14:18:09.304Z",
//                                     "updatedAt": "2021-02-19T14:22:22.160Z",
//                                     "deletedAt": null,
//                                     "phone": "0395577485",
//                                     "password": "$2b$10$4ppSg5kT3sBl998Uv7VPze.YSyDxQS1PAh0.EfgstLal8Ma0iKNKy",
//                                     "exponentPushToken": "ExponentPushToken[g7GRJfK7iUmeZUi5OinhPx]",
//                                     "role": "PARTNER"
//                                 },
//                                 "items": [],
//                                 "requestItems": [],
//                                 "licenses": []
//                             },
//                             "status": "CANCELLATION",
//                             "items": [
//                                 {
//                                     "id": "92f060fa-ede8-4fe7-a886-4a831f4441dc",
//                                     "createdAt": "2021-03-10T07:28:59.822Z",
//                                     "updatedAt": "2021-03-10T07:28:59.822Z",
//                                     "deletedAt": null,
//                                     "name": "Cacao đá",
//                                     "price": "25000",
//                                     "quantity": 1
//                                 },
//                                 {
//                                     "id": "5046e279-5aee-472a-8ac7-ba755b28e5f6",
//                                     "createdAt": "2021-03-10T07:28:59.852Z",
//                                     "updatedAt": "2021-03-10T07:28:59.852Z",
//                                     "deletedAt": null,
//                                     "name": "Cà phê sữa đá",
//                                     "price": "17000",
//                                     "quantity": 1
//                                 }
//                             ],
//                             "transaction": [
//                                 {
//                                     "id": "e69fb547-2803-454b-9eaa-29f23a6e290b",
//                                     "createdAt": "2021-03-10T07:29:06.001Z",
//                                     "updatedAt": "2021-03-10T07:29:06.001Z",
//                                     "deletedAt": null,
//                                     "fromStatus": "CANCELLATION",
//                                     "toStatus": "CANCELLATION",
//                                     "fault": null,
//                                     "description": null
//                                 }
//                             ],
//                             "total": 42000
//                         }
//                     ],
//                     "total": 84000,
//                     "count": 2
//                 }
//             },
//             "items": {
//                 "Cacao đá": {
//                     "count": 4
//                 },
//                 "Cà phê đá": {
//                     "count": 2
//                 },
//                 "Cà phê sữa đá": {
//                     "count": 4
//                 }
//             }
//         }
//     }
// }
export const getReport = (id, fromDate, toDate) => {

    return async dispatch => {
            const response =
                await fca.post(`/partner/${id}/report`, {
                    fromDate,
                    toDate
                });
            dispatch({
                type: GET_REPORT_ORDERS,
                payload: response.data.data.report
            })
        }           
};