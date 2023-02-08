/**
 * @fileoverview gRPC-Web generated client stub for chatPackage
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: src/chat.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chatPackage = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chatPackage.ChatServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.chatPackage.ChatServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatPackage.User,
 *   !proto.chatPackage.JoinResponse>}
 */
const methodDescriptor_ChatService_join = new grpc.web.MethodDescriptor(
  '/chatPackage.ChatService/join',
  grpc.web.MethodType.UNARY,
  proto.chatPackage.User,
  proto.chatPackage.JoinResponse,
  /**
   * @param {!proto.chatPackage.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPackage.JoinResponse.deserializeBinary
);


/**
 * @param {!proto.chatPackage.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chatPackage.JoinResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatPackage.JoinResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatPackage.ChatServiceClient.prototype.join =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatPackage.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join,
      callback);
};


/**
 * @param {!proto.chatPackage.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatPackage.JoinResponse>}
 *     Promise that resolves to the response
 */
proto.chatPackage.ChatServicePromiseClient.prototype.join =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatPackage.ChatService/join',
      request,
      metadata || {},
      methodDescriptor_ChatService_join);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatPackage.ChatMessage,
 *   !proto.chatPackage.Empty>}
 */
const methodDescriptor_ChatService_sendMsg = new grpc.web.MethodDescriptor(
  '/chatPackage.ChatService/sendMsg',
  grpc.web.MethodType.UNARY,
  proto.chatPackage.ChatMessage,
  proto.chatPackage.Empty,
  /**
   * @param {!proto.chatPackage.ChatMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPackage.Empty.deserializeBinary
);


/**
 * @param {!proto.chatPackage.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chatPackage.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatPackage.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatPackage.ChatServiceClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatPackage.ChatService/sendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMsg,
      callback);
};


/**
 * @param {!proto.chatPackage.ChatMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatPackage.Empty>}
 *     Promise that resolves to the response
 */
proto.chatPackage.ChatServicePromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatPackage.ChatService/sendMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_sendMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatPackage.Empty,
 *   !proto.chatPackage.ChatMessage>}
 */
const methodDescriptor_ChatService_receiveMsg = new grpc.web.MethodDescriptor(
  '/chatPackage.ChatService/receiveMsg',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.chatPackage.Empty,
  proto.chatPackage.ChatMessage,
  /**
   * @param {!proto.chatPackage.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPackage.ChatMessage.deserializeBinary
);


/**
 * @param {!proto.chatPackage.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatPackage.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chatPackage.ChatServiceClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatPackage.ChatService/receiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_receiveMsg);
};


/**
 * @param {!proto.chatPackage.Empty} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chatPackage.ChatMessage>}
 *     The XHR Node Readable Stream
 */
proto.chatPackage.ChatServicePromiseClient.prototype.receiveMsg =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chatPackage.ChatService/receiveMsg',
      request,
      metadata || {},
      methodDescriptor_ChatService_receiveMsg);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chatPackage.Empty,
 *   !proto.chatPackage.UserList>}
 */
const methodDescriptor_ChatService_getAllUsers = new grpc.web.MethodDescriptor(
  '/chatPackage.ChatService/getAllUsers',
  grpc.web.MethodType.UNARY,
  proto.chatPackage.Empty,
  proto.chatPackage.UserList,
  /**
   * @param {!proto.chatPackage.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chatPackage.UserList.deserializeBinary
);


/**
 * @param {!proto.chatPackage.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.chatPackage.UserList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chatPackage.UserList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chatPackage.ChatServiceClient.prototype.getAllUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chatPackage.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers,
      callback);
};


/**
 * @param {!proto.chatPackage.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chatPackage.UserList>}
 *     Promise that resolves to the response
 */
proto.chatPackage.ChatServicePromiseClient.prototype.getAllUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chatPackage.ChatService/getAllUsers',
      request,
      metadata || {},
      methodDescriptor_ChatService_getAllUsers);
};


module.exports = proto.chatPackage;
