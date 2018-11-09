## Olives App


This project runs live at: [olives-app-react-client](https://gfa61-ga.github.io/olives-app-react-client/).

Server files are in this repo: [olives-app-server](https://github.com/gfa61-ga/olives-app-server).

## Instructions

********
To run app with mongodb-database and io-API servers in localhost, change comments properly into the following files:
********

    1. server/routes/suppliers.js (connects to mongoDb)

    2. react-client/src/sagas/realTimeConnect.js (connects socket to real-time server)

    3. react-client/src/api/suppliers.js (fetches data from Api-server)

