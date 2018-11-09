/****** uncomment line 11 or line 14 *******/

// Got help from:
// https://medium.com/@viacheslavlushchinskiy/real-time-data-with-redux-saga-event-channels-and-socket-io-ad6e64dbefd9

import { call, put, take } from 'redux-saga/effects';
import io from 'socket.io-client';
import {eventChannel} from 'redux-saga';
import { doSupplierAdd, doSupplierUpdate } from '../actions/suppliers';

const socketServerURL = 'https://olives-app.herokuapp.com';

// To connect to api-server and real-time server in localhost:
// const socketServerURL = 'http://localhost:3200'; // socket.io real-time server and express API server


// wrapping functions for socket events (connect, disconnect, reconnect)
let socket;
const connect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

// This is how channel is created
const createSocketChannel = socket => eventChannel((emit) => {
  const handler = (data) => {
    emit(data);
  };
  socket.on('updateSupplier', handler);
  socket.on('addSupplier', handler);
  return () => {
    //socket.off('updateSupplier', handler);
  };
});

// Saga to switch on channel.
const listenServerSaga = function* () {
  try {
    const socket = yield call(connect);
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
      const payload = yield take(socketChannel);
      if (payload.type === 'updateSupplier') {
        yield put(doSupplierUpdate(payload.updatedSupplier));
      }
      if (payload.type === 'addSupplier') {
        yield put(doSupplierAdd(payload._id, payload.newSupplier));
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  listenServerSaga
};