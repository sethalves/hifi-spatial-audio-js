/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "ssm";

export interface Uuid {
  value: Uint8Array;
}

export interface ClientPosition {
  /** millimeters */
  x: number;
  y: number;
  /** radians */
  facing: number;
}

export interface SetClientData {
  id: Uuid | undefined;
  clientPosition?: ClientPosition | undefined;
  volume?: number | undefined;
}

export interface DisconnectClient {
  id: Uuid | undefined;
}

export interface KillServerRequest {}

export interface LogToServer {
  logLine: string;
}

export interface ClientMessage {
  messageType: ClientMessage_MessageType;
  requestDetails?:
    | { $case: "setClientData"; setClientData: SetClientData }
    | { $case: "killServerRequest"; killServerRequest: KillServerRequest }
    | { $case: "logToServer"; logToServer: LogToServer };
}

export enum ClientMessage_MessageType {
  SET_CLIENT_DATA = 0,
  KILL_SERVER_REQUEST = 1,
  LOG_TO_SERVER = 2,
  UNRECOGNIZED = -1,
}

export function clientMessage_MessageTypeFromJSON(
  object: any
): ClientMessage_MessageType {
  switch (object) {
    case 0:
    case "SET_CLIENT_DATA":
      return ClientMessage_MessageType.SET_CLIENT_DATA;
    case 1:
    case "KILL_SERVER_REQUEST":
      return ClientMessage_MessageType.KILL_SERVER_REQUEST;
    case 2:
    case "LOG_TO_SERVER":
      return ClientMessage_MessageType.LOG_TO_SERVER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientMessage_MessageType.UNRECOGNIZED;
  }
}

export function clientMessage_MessageTypeToJSON(
  object: ClientMessage_MessageType
): string {
  switch (object) {
    case ClientMessage_MessageType.SET_CLIENT_DATA:
      return "SET_CLIENT_DATA";
    case ClientMessage_MessageType.KILL_SERVER_REQUEST:
      return "KILL_SERVER_REQUEST";
    case ClientMessage_MessageType.LOG_TO_SERVER:
      return "LOG_TO_SERVER";
    default:
      return "UNKNOWN";
  }
}

export interface ClientUpdates {
  clientData: SetClientData[];
}

export interface ServerMessage {
  messageType: ServerMessage_MessageType;
  messageDetails?:
    | { $case: "clientUpdates"; clientUpdates: ClientUpdates }
    | { $case: "disconnectClient"; disconnectClient: DisconnectClient };
}

export enum ServerMessage_MessageType {
  UPDATE_CLIENTS = 0,
  DISCONNECT_CLIENT = 1,
  UNRECOGNIZED = -1,
}

export function serverMessage_MessageTypeFromJSON(
  object: any
): ServerMessage_MessageType {
  switch (object) {
    case 0:
    case "UPDATE_CLIENTS":
      return ServerMessage_MessageType.UPDATE_CLIENTS;
    case 1:
    case "DISCONNECT_CLIENT":
      return ServerMessage_MessageType.DISCONNECT_CLIENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServerMessage_MessageType.UNRECOGNIZED;
  }
}

export function serverMessage_MessageTypeToJSON(
  object: ServerMessage_MessageType
): string {
  switch (object) {
    case ServerMessage_MessageType.UPDATE_CLIENTS:
      return "UPDATE_CLIENTS";
    case ServerMessage_MessageType.DISCONNECT_CLIENT:
      return "DISCONNECT_CLIENT";
    default:
      return "UNKNOWN";
  }
}

export interface ConnectWithServer {
  serverID: Uuid | undefined;
}

export interface SDP {
  peerID: Uuid | undefined;
  sdpType: string;
  sdp: string;
}

export interface IceCandidate {
  peerID: Uuid | undefined;
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
}

export interface RequestRTCRenegotiation {
  peerID: Uuid | undefined;
}

export interface TellClientAboutMixer {
  serverID: Uuid | undefined;
}

export interface ErrorResponse {
  message: string;
}

export interface CoordinatorMessage {
  id: Uuid | undefined;
  messageType: CoordinatorMessage_MessageType;
  messageDetails?:
    | { $case: "connectWithServer"; connectWithServer: ConnectWithServer }
    | { $case: "mixerSDP"; mixerSDP: SDP }
    | { $case: "clientSDP"; clientSDP: SDP }
    | { $case: "iceCandidate"; iceCandidate: IceCandidate }
    | {
        $case: "tellClientAboutMixer";
        tellClientAboutMixer: TellClientAboutMixer;
      }
    | { $case: "errorResponse"; errorResponse: ErrorResponse }
    | { $case: "killServerRequest"; killServerRequest: KillServerRequest }
    | {
        $case: "requestRTCRenegotiation";
        requestRTCRenegotiation: RequestRTCRenegotiation;
      };
}

export enum CoordinatorMessage_MessageType {
  CONNECT_WITH_SERVER = 0,
  SDP = 1,
  ICE_CANDIDATE = 2,
  TELL_CLIENT_ABOUT_MIXER = 3,
  ERROR_RESPONSE = 4,
  KILL_SERVER_REQUEST = 5,
  REQUEST_RTC_RENEGOTIATION = 6,
  UNRECOGNIZED = -1,
}

export function coordinatorMessage_MessageTypeFromJSON(
  object: any
): CoordinatorMessage_MessageType {
  switch (object) {
    case 0:
    case "CONNECT_WITH_SERVER":
      return CoordinatorMessage_MessageType.CONNECT_WITH_SERVER;
    case 1:
    case "SDP":
      return CoordinatorMessage_MessageType.SDP;
    case 2:
    case "ICE_CANDIDATE":
      return CoordinatorMessage_MessageType.ICE_CANDIDATE;
    case 3:
    case "TELL_CLIENT_ABOUT_MIXER":
      return CoordinatorMessage_MessageType.TELL_CLIENT_ABOUT_MIXER;
    case 4:
    case "ERROR_RESPONSE":
      return CoordinatorMessage_MessageType.ERROR_RESPONSE;
    case 5:
    case "KILL_SERVER_REQUEST":
      return CoordinatorMessage_MessageType.KILL_SERVER_REQUEST;
    case 6:
    case "REQUEST_RTC_RENEGOTIATION":
      return CoordinatorMessage_MessageType.REQUEST_RTC_RENEGOTIATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CoordinatorMessage_MessageType.UNRECOGNIZED;
  }
}

export function coordinatorMessage_MessageTypeToJSON(
  object: CoordinatorMessage_MessageType
): string {
  switch (object) {
    case CoordinatorMessage_MessageType.CONNECT_WITH_SERVER:
      return "CONNECT_WITH_SERVER";
    case CoordinatorMessage_MessageType.SDP:
      return "SDP";
    case CoordinatorMessage_MessageType.ICE_CANDIDATE:
      return "ICE_CANDIDATE";
    case CoordinatorMessage_MessageType.TELL_CLIENT_ABOUT_MIXER:
      return "TELL_CLIENT_ABOUT_MIXER";
    case CoordinatorMessage_MessageType.ERROR_RESPONSE:
      return "ERROR_RESPONSE";
    case CoordinatorMessage_MessageType.KILL_SERVER_REQUEST:
      return "KILL_SERVER_REQUEST";
    case CoordinatorMessage_MessageType.REQUEST_RTC_RENEGOTIATION:
      return "REQUEST_RTC_RENEGOTIATION";
    default:
      return "UNKNOWN";
  }
}

export interface ClientHello {
  clientID: Uuid | undefined;
  secret: Uuid | undefined;
}

export interface CoordinatorClientMessage {
  messageType: CoordinatorClientMessage_MessageType;
  messageDetails?:
    | { $case: "clientHello"; clientHello: ClientHello }
    | { $case: "sdp"; sdp: SDP }
    | { $case: "iceCandidate"; iceCandidate: IceCandidate }
    | {
        $case: "requestRTCRenegotiation";
        requestRTCRenegotiation: RequestRTCRenegotiation;
      };
}

export enum CoordinatorClientMessage_MessageType {
  CLIENT_HELLO = 0,
  SDP = 1,
  ICE_CANDIDATE = 2,
  REQUEST_RTC_RENEGOTIATION = 3,
  UNRECOGNIZED = -1,
}

export function coordinatorClientMessage_MessageTypeFromJSON(
  object: any
): CoordinatorClientMessage_MessageType {
  switch (object) {
    case 0:
    case "CLIENT_HELLO":
      return CoordinatorClientMessage_MessageType.CLIENT_HELLO;
    case 1:
    case "SDP":
      return CoordinatorClientMessage_MessageType.SDP;
    case 2:
    case "ICE_CANDIDATE":
      return CoordinatorClientMessage_MessageType.ICE_CANDIDATE;
    case 3:
    case "REQUEST_RTC_RENEGOTIATION":
      return CoordinatorClientMessage_MessageType.REQUEST_RTC_RENEGOTIATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CoordinatorClientMessage_MessageType.UNRECOGNIZED;
  }
}

export function coordinatorClientMessage_MessageTypeToJSON(
  object: CoordinatorClientMessage_MessageType
): string {
  switch (object) {
    case CoordinatorClientMessage_MessageType.CLIENT_HELLO:
      return "CLIENT_HELLO";
    case CoordinatorClientMessage_MessageType.SDP:
      return "SDP";
    case CoordinatorClientMessage_MessageType.ICE_CANDIDATE:
      return "ICE_CANDIDATE";
    case CoordinatorClientMessage_MessageType.REQUEST_RTC_RENEGOTIATION:
      return "REQUEST_RTC_RENEGOTIATION";
    default:
      return "UNKNOWN";
  }
}

function createBaseUuid(): Uuid {
  return { value: new Uint8Array() };
}

export const Uuid = {
  encode(message: Uuid, writer: Writer = Writer.create()): Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Uuid {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUuid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Uuid {
    return {
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: Uuid): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Uuid>, I>>(object: I): Uuid {
    const message = createBaseUuid();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseClientPosition(): ClientPosition {
  return { x: 0, y: 0, facing: 0 };
}

export const ClientPosition = {
  encode(message: ClientPosition, writer: Writer = Writer.create()): Writer {
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.facing !== 0) {
      writer.uint32(37).float(message.facing);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClientPosition {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        case 4:
          message.facing = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientPosition {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      facing: isSet(object.facing) ? Number(object.facing) : 0,
    };
  },

  toJSON(message: ClientPosition): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.facing !== undefined && (obj.facing = message.facing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientPosition>, I>>(
    object: I
  ): ClientPosition {
    const message = createBaseClientPosition();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.facing = object.facing ?? 0;
    return message;
  },
};

function createBaseSetClientData(): SetClientData {
  return { id: undefined, clientPosition: undefined, volume: undefined };
}

export const SetClientData = {
  encode(message: SetClientData, writer: Writer = Writer.create()): Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientPosition !== undefined) {
      ClientPosition.encode(
        message.clientPosition,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.volume !== undefined) {
      writer.uint32(24).int32(message.volume);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetClientData {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetClientData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Uuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientPosition = ClientPosition.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.volume = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetClientData {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
      clientPosition: isSet(object.clientPosition)
        ? ClientPosition.fromJSON(object.clientPosition)
        : undefined,
      volume: isSet(object.volume) ? Number(object.volume) : undefined,
    };
  },

  toJSON(message: SetClientData): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.clientPosition !== undefined &&
      (obj.clientPosition = message.clientPosition
        ? ClientPosition.toJSON(message.clientPosition)
        : undefined);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetClientData>, I>>(
    object: I
  ): SetClientData {
    const message = createBaseSetClientData();
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromPartial(object.id)
        : undefined;
    message.clientPosition =
      object.clientPosition !== undefined && object.clientPosition !== null
        ? ClientPosition.fromPartial(object.clientPosition)
        : undefined;
    message.volume = object.volume ?? undefined;
    return message;
  },
};

function createBaseDisconnectClient(): DisconnectClient {
  return { id: undefined };
}

export const DisconnectClient = {
  encode(message: DisconnectClient, writer: Writer = Writer.create()): Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DisconnectClient {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Uuid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisconnectClient {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: DisconnectClient): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisconnectClient>, I>>(
    object: I
  ): DisconnectClient {
    const message = createBaseDisconnectClient();
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromPartial(object.id)
        : undefined;
    return message;
  },
};

function createBaseKillServerRequest(): KillServerRequest {
  return {};
}

export const KillServerRequest = {
  encode(_: KillServerRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): KillServerRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKillServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): KillServerRequest {
    return {};
  },

  toJSON(_: KillServerRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KillServerRequest>, I>>(
    _: I
  ): KillServerRequest {
    const message = createBaseKillServerRequest();
    return message;
  },
};

function createBaseLogToServer(): LogToServer {
  return { logLine: "" };
}

export const LogToServer = {
  encode(message: LogToServer, writer: Writer = Writer.create()): Writer {
    if (message.logLine !== "") {
      writer.uint32(10).string(message.logLine);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): LogToServer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogToServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logLine = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogToServer {
    return {
      logLine: isSet(object.logLine) ? String(object.logLine) : "",
    };
  },

  toJSON(message: LogToServer): unknown {
    const obj: any = {};
    message.logLine !== undefined && (obj.logLine = message.logLine);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogToServer>, I>>(
    object: I
  ): LogToServer {
    const message = createBaseLogToServer();
    message.logLine = object.logLine ?? "";
    return message;
  },
};

function createBaseClientMessage(): ClientMessage {
  return { messageType: 0, requestDetails: undefined };
}

export const ClientMessage = {
  encode(message: ClientMessage, writer: Writer = Writer.create()): Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.requestDetails?.$case === "setClientData") {
      SetClientData.encode(
        message.requestDetails.setClientData,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.requestDetails?.$case === "killServerRequest") {
      KillServerRequest.encode(
        message.requestDetails.killServerRequest,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.requestDetails?.$case === "logToServer") {
      LogToServer.encode(
        message.requestDetails.logToServer,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.requestDetails = {
            $case: "setClientData",
            setClientData: SetClientData.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.requestDetails = {
            $case: "killServerRequest",
            killServerRequest: KillServerRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.requestDetails = {
            $case: "logToServer",
            logToServer: LogToServer.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientMessage {
    return {
      messageType: isSet(object.messageType)
        ? clientMessage_MessageTypeFromJSON(object.messageType)
        : 0,
      requestDetails: isSet(object.setClientData)
        ? {
            $case: "setClientData",
            setClientData: SetClientData.fromJSON(object.setClientData),
          }
        : isSet(object.killServerRequest)
        ? {
            $case: "killServerRequest",
            killServerRequest: KillServerRequest.fromJSON(
              object.killServerRequest
            ),
          }
        : isSet(object.logToServer)
        ? {
            $case: "logToServer",
            logToServer: LogToServer.fromJSON(object.logToServer),
          }
        : undefined,
    };
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = clientMessage_MessageTypeToJSON(message.messageType));
    message.requestDetails?.$case === "setClientData" &&
      (obj.setClientData = message.requestDetails?.setClientData
        ? SetClientData.toJSON(message.requestDetails?.setClientData)
        : undefined);
    message.requestDetails?.$case === "killServerRequest" &&
      (obj.killServerRequest = message.requestDetails?.killServerRequest
        ? KillServerRequest.toJSON(message.requestDetails?.killServerRequest)
        : undefined);
    message.requestDetails?.$case === "logToServer" &&
      (obj.logToServer = message.requestDetails?.logToServer
        ? LogToServer.toJSON(message.requestDetails?.logToServer)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientMessage>, I>>(
    object: I
  ): ClientMessage {
    const message = createBaseClientMessage();
    message.messageType = object.messageType ?? 0;
    if (
      object.requestDetails?.$case === "setClientData" &&
      object.requestDetails?.setClientData !== undefined &&
      object.requestDetails?.setClientData !== null
    ) {
      message.requestDetails = {
        $case: "setClientData",
        setClientData: SetClientData.fromPartial(
          object.requestDetails.setClientData
        ),
      };
    }
    if (
      object.requestDetails?.$case === "killServerRequest" &&
      object.requestDetails?.killServerRequest !== undefined &&
      object.requestDetails?.killServerRequest !== null
    ) {
      message.requestDetails = {
        $case: "killServerRequest",
        killServerRequest: KillServerRequest.fromPartial(
          object.requestDetails.killServerRequest
        ),
      };
    }
    if (
      object.requestDetails?.$case === "logToServer" &&
      object.requestDetails?.logToServer !== undefined &&
      object.requestDetails?.logToServer !== null
    ) {
      message.requestDetails = {
        $case: "logToServer",
        logToServer: LogToServer.fromPartial(object.requestDetails.logToServer),
      };
    }
    return message;
  },
};

function createBaseClientUpdates(): ClientUpdates {
  return { clientData: [] };
}

export const ClientUpdates = {
  encode(message: ClientUpdates, writer: Writer = Writer.create()): Writer {
    for (const v of message.clientData) {
      SetClientData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClientUpdates {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUpdates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientData.push(
            SetClientData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientUpdates {
    return {
      clientData: Array.isArray(object?.clientData)
        ? object.clientData.map((e: any) => SetClientData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ClientUpdates): unknown {
    const obj: any = {};
    if (message.clientData) {
      obj.clientData = message.clientData.map((e) =>
        e ? SetClientData.toJSON(e) : undefined
      );
    } else {
      obj.clientData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientUpdates>, I>>(
    object: I
  ): ClientUpdates {
    const message = createBaseClientUpdates();
    message.clientData =
      object.clientData?.map((e) => SetClientData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServerMessage(): ServerMessage {
  return { messageType: 0, messageDetails: undefined };
}

export const ServerMessage = {
  encode(message: ServerMessage, writer: Writer = Writer.create()): Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.messageDetails?.$case === "clientUpdates") {
      ClientUpdates.encode(
        message.messageDetails.clientUpdates,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "disconnectClient") {
      DisconnectClient.encode(
        message.messageDetails.disconnectClient,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.messageDetails = {
            $case: "clientUpdates",
            clientUpdates: ClientUpdates.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.messageDetails = {
            $case: "disconnectClient",
            disconnectClient: DisconnectClient.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerMessage {
    return {
      messageType: isSet(object.messageType)
        ? serverMessage_MessageTypeFromJSON(object.messageType)
        : 0,
      messageDetails: isSet(object.clientUpdates)
        ? {
            $case: "clientUpdates",
            clientUpdates: ClientUpdates.fromJSON(object.clientUpdates),
          }
        : isSet(object.disconnectClient)
        ? {
            $case: "disconnectClient",
            disconnectClient: DisconnectClient.fromJSON(
              object.disconnectClient
            ),
          }
        : undefined,
    };
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = serverMessage_MessageTypeToJSON(message.messageType));
    message.messageDetails?.$case === "clientUpdates" &&
      (obj.clientUpdates = message.messageDetails?.clientUpdates
        ? ClientUpdates.toJSON(message.messageDetails?.clientUpdates)
        : undefined);
    message.messageDetails?.$case === "disconnectClient" &&
      (obj.disconnectClient = message.messageDetails?.disconnectClient
        ? DisconnectClient.toJSON(message.messageDetails?.disconnectClient)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(
    object: I
  ): ServerMessage {
    const message = createBaseServerMessage();
    message.messageType = object.messageType ?? 0;
    if (
      object.messageDetails?.$case === "clientUpdates" &&
      object.messageDetails?.clientUpdates !== undefined &&
      object.messageDetails?.clientUpdates !== null
    ) {
      message.messageDetails = {
        $case: "clientUpdates",
        clientUpdates: ClientUpdates.fromPartial(
          object.messageDetails.clientUpdates
        ),
      };
    }
    if (
      object.messageDetails?.$case === "disconnectClient" &&
      object.messageDetails?.disconnectClient !== undefined &&
      object.messageDetails?.disconnectClient !== null
    ) {
      message.messageDetails = {
        $case: "disconnectClient",
        disconnectClient: DisconnectClient.fromPartial(
          object.messageDetails.disconnectClient
        ),
      };
    }
    return message;
  },
};

function createBaseConnectWithServer(): ConnectWithServer {
  return { serverID: undefined };
}

export const ConnectWithServer = {
  encode(message: ConnectWithServer, writer: Writer = Writer.create()): Writer {
    if (message.serverID !== undefined) {
      Uuid.encode(message.serverID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ConnectWithServer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectWithServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverID = Uuid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectWithServer {
    return {
      serverID: isSet(object.serverID)
        ? Uuid.fromJSON(object.serverID)
        : undefined,
    };
  },

  toJSON(message: ConnectWithServer): unknown {
    const obj: any = {};
    message.serverID !== undefined &&
      (obj.serverID = message.serverID
        ? Uuid.toJSON(message.serverID)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectWithServer>, I>>(
    object: I
  ): ConnectWithServer {
    const message = createBaseConnectWithServer();
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromPartial(object.serverID)
        : undefined;
    return message;
  },
};

function createBaseSDP(): SDP {
  return { peerID: undefined, sdpType: "", sdp: "" };
}

export const SDP = {
  encode(message: SDP, writer: Writer = Writer.create()): Writer {
    if (message.peerID !== undefined) {
      Uuid.encode(message.peerID, writer.uint32(10).fork()).ldelim();
    }
    if (message.sdpType !== "") {
      writer.uint32(18).string(message.sdpType);
    }
    if (message.sdp !== "") {
      writer.uint32(26).string(message.sdp);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SDP {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSDP();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerID = Uuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.sdpType = reader.string();
          break;
        case 3:
          message.sdp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SDP {
    return {
      peerID: isSet(object.peerID) ? Uuid.fromJSON(object.peerID) : undefined,
      sdpType: isSet(object.sdpType) ? String(object.sdpType) : "",
      sdp: isSet(object.sdp) ? String(object.sdp) : "",
    };
  },

  toJSON(message: SDP): unknown {
    const obj: any = {};
    message.peerID !== undefined &&
      (obj.peerID = message.peerID ? Uuid.toJSON(message.peerID) : undefined);
    message.sdpType !== undefined && (obj.sdpType = message.sdpType);
    message.sdp !== undefined && (obj.sdp = message.sdp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SDP>, I>>(object: I): SDP {
    const message = createBaseSDP();
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromPartial(object.peerID)
        : undefined;
    message.sdpType = object.sdpType ?? "";
    message.sdp = object.sdp ?? "";
    return message;
  },
};

function createBaseIceCandidate(): IceCandidate {
  return { peerID: undefined, candidate: "", sdpMid: "", sdpMLineIndex: 0 };
}

export const IceCandidate = {
  encode(message: IceCandidate, writer: Writer = Writer.create()): Writer {
    if (message.peerID !== undefined) {
      Uuid.encode(message.peerID, writer.uint32(10).fork()).ldelim();
    }
    if (message.candidate !== "") {
      writer.uint32(18).string(message.candidate);
    }
    if (message.sdpMid !== "") {
      writer.uint32(26).string(message.sdpMid);
    }
    if (message.sdpMLineIndex !== 0) {
      writer.uint32(32).int32(message.sdpMLineIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IceCandidate {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIceCandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerID = Uuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.candidate = reader.string();
          break;
        case 3:
          message.sdpMid = reader.string();
          break;
        case 4:
          message.sdpMLineIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IceCandidate {
    return {
      peerID: isSet(object.peerID) ? Uuid.fromJSON(object.peerID) : undefined,
      candidate: isSet(object.candidate) ? String(object.candidate) : "",
      sdpMid: isSet(object.sdpMid) ? String(object.sdpMid) : "",
      sdpMLineIndex: isSet(object.sdpMLineIndex)
        ? Number(object.sdpMLineIndex)
        : 0,
    };
  },

  toJSON(message: IceCandidate): unknown {
    const obj: any = {};
    message.peerID !== undefined &&
      (obj.peerID = message.peerID ? Uuid.toJSON(message.peerID) : undefined);
    message.candidate !== undefined && (obj.candidate = message.candidate);
    message.sdpMid !== undefined && (obj.sdpMid = message.sdpMid);
    message.sdpMLineIndex !== undefined &&
      (obj.sdpMLineIndex = Math.round(message.sdpMLineIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IceCandidate>, I>>(
    object: I
  ): IceCandidate {
    const message = createBaseIceCandidate();
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromPartial(object.peerID)
        : undefined;
    message.candidate = object.candidate ?? "";
    message.sdpMid = object.sdpMid ?? "";
    message.sdpMLineIndex = object.sdpMLineIndex ?? 0;
    return message;
  },
};

function createBaseRequestRTCRenegotiation(): RequestRTCRenegotiation {
  return { peerID: undefined };
}

export const RequestRTCRenegotiation = {
  encode(
    message: RequestRTCRenegotiation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.peerID !== undefined) {
      Uuid.encode(message.peerID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RequestRTCRenegotiation {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestRTCRenegotiation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.peerID = Uuid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestRTCRenegotiation {
    return {
      peerID: isSet(object.peerID) ? Uuid.fromJSON(object.peerID) : undefined,
    };
  },

  toJSON(message: RequestRTCRenegotiation): unknown {
    const obj: any = {};
    message.peerID !== undefined &&
      (obj.peerID = message.peerID ? Uuid.toJSON(message.peerID) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestRTCRenegotiation>, I>>(
    object: I
  ): RequestRTCRenegotiation {
    const message = createBaseRequestRTCRenegotiation();
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromPartial(object.peerID)
        : undefined;
    return message;
  },
};

function createBaseTellClientAboutMixer(): TellClientAboutMixer {
  return { serverID: undefined };
}

export const TellClientAboutMixer = {
  encode(
    message: TellClientAboutMixer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.serverID !== undefined) {
      Uuid.encode(message.serverID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TellClientAboutMixer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTellClientAboutMixer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serverID = Uuid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TellClientAboutMixer {
    return {
      serverID: isSet(object.serverID)
        ? Uuid.fromJSON(object.serverID)
        : undefined,
    };
  },

  toJSON(message: TellClientAboutMixer): unknown {
    const obj: any = {};
    message.serverID !== undefined &&
      (obj.serverID = message.serverID
        ? Uuid.toJSON(message.serverID)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TellClientAboutMixer>, I>>(
    object: I
  ): TellClientAboutMixer {
    const message = createBaseTellClientAboutMixer();
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromPartial(object.serverID)
        : undefined;
    return message;
  },
};

function createBaseErrorResponse(): ErrorResponse {
  return { message: "" };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: Writer = Writer.create()): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(
    object: I
  ): ErrorResponse {
    const message = createBaseErrorResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCoordinatorMessage(): CoordinatorMessage {
  return { id: undefined, messageType: 0, messageDetails: undefined };
}

export const CoordinatorMessage = {
  encode(
    message: CoordinatorMessage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.messageType !== 0) {
      writer.uint32(16).int32(message.messageType);
    }
    if (message.messageDetails?.$case === "connectWithServer") {
      ConnectWithServer.encode(
        message.messageDetails.connectWithServer,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "mixerSDP") {
      SDP.encode(
        message.messageDetails.mixerSDP,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "clientSDP") {
      SDP.encode(
        message.messageDetails.clientSDP,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "iceCandidate") {
      IceCandidate.encode(
        message.messageDetails.iceCandidate,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "tellClientAboutMixer") {
      TellClientAboutMixer.encode(
        message.messageDetails.tellClientAboutMixer,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "errorResponse") {
      ErrorResponse.encode(
        message.messageDetails.errorResponse,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "killServerRequest") {
      KillServerRequest.encode(
        message.messageDetails.killServerRequest,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "requestRTCRenegotiation") {
      RequestRTCRenegotiation.encode(
        message.messageDetails.requestRTCRenegotiation,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CoordinatorMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoordinatorMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Uuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.messageType = reader.int32() as any;
          break;
        case 3:
          message.messageDetails = {
            $case: "connectWithServer",
            connectWithServer: ConnectWithServer.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.messageDetails = {
            $case: "mixerSDP",
            mixerSDP: SDP.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.messageDetails = {
            $case: "clientSDP",
            clientSDP: SDP.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.messageDetails = {
            $case: "iceCandidate",
            iceCandidate: IceCandidate.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.messageDetails = {
            $case: "tellClientAboutMixer",
            tellClientAboutMixer: TellClientAboutMixer.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 8:
          message.messageDetails = {
            $case: "errorResponse",
            errorResponse: ErrorResponse.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.messageDetails = {
            $case: "killServerRequest",
            killServerRequest: KillServerRequest.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 10:
          message.messageDetails = {
            $case: "requestRTCRenegotiation",
            requestRTCRenegotiation: RequestRTCRenegotiation.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoordinatorMessage {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
      messageType: isSet(object.messageType)
        ? coordinatorMessage_MessageTypeFromJSON(object.messageType)
        : 0,
      messageDetails: isSet(object.connectWithServer)
        ? {
            $case: "connectWithServer",
            connectWithServer: ConnectWithServer.fromJSON(
              object.connectWithServer
            ),
          }
        : isSet(object.mixerSDP)
        ? { $case: "mixerSDP", mixerSDP: SDP.fromJSON(object.mixerSDP) }
        : isSet(object.clientSDP)
        ? { $case: "clientSDP", clientSDP: SDP.fromJSON(object.clientSDP) }
        : isSet(object.iceCandidate)
        ? {
            $case: "iceCandidate",
            iceCandidate: IceCandidate.fromJSON(object.iceCandidate),
          }
        : isSet(object.tellClientAboutMixer)
        ? {
            $case: "tellClientAboutMixer",
            tellClientAboutMixer: TellClientAboutMixer.fromJSON(
              object.tellClientAboutMixer
            ),
          }
        : isSet(object.errorResponse)
        ? {
            $case: "errorResponse",
            errorResponse: ErrorResponse.fromJSON(object.errorResponse),
          }
        : isSet(object.killServerRequest)
        ? {
            $case: "killServerRequest",
            killServerRequest: KillServerRequest.fromJSON(
              object.killServerRequest
            ),
          }
        : isSet(object.requestRTCRenegotiation)
        ? {
            $case: "requestRTCRenegotiation",
            requestRTCRenegotiation: RequestRTCRenegotiation.fromJSON(
              object.requestRTCRenegotiation
            ),
          }
        : undefined,
    };
  },

  toJSON(message: CoordinatorMessage): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.messageType !== undefined &&
      (obj.messageType = coordinatorMessage_MessageTypeToJSON(
        message.messageType
      ));
    message.messageDetails?.$case === "connectWithServer" &&
      (obj.connectWithServer = message.messageDetails?.connectWithServer
        ? ConnectWithServer.toJSON(message.messageDetails?.connectWithServer)
        : undefined);
    message.messageDetails?.$case === "mixerSDP" &&
      (obj.mixerSDP = message.messageDetails?.mixerSDP
        ? SDP.toJSON(message.messageDetails?.mixerSDP)
        : undefined);
    message.messageDetails?.$case === "clientSDP" &&
      (obj.clientSDP = message.messageDetails?.clientSDP
        ? SDP.toJSON(message.messageDetails?.clientSDP)
        : undefined);
    message.messageDetails?.$case === "iceCandidate" &&
      (obj.iceCandidate = message.messageDetails?.iceCandidate
        ? IceCandidate.toJSON(message.messageDetails?.iceCandidate)
        : undefined);
    message.messageDetails?.$case === "tellClientAboutMixer" &&
      (obj.tellClientAboutMixer = message.messageDetails?.tellClientAboutMixer
        ? TellClientAboutMixer.toJSON(
            message.messageDetails?.tellClientAboutMixer
          )
        : undefined);
    message.messageDetails?.$case === "errorResponse" &&
      (obj.errorResponse = message.messageDetails?.errorResponse
        ? ErrorResponse.toJSON(message.messageDetails?.errorResponse)
        : undefined);
    message.messageDetails?.$case === "killServerRequest" &&
      (obj.killServerRequest = message.messageDetails?.killServerRequest
        ? KillServerRequest.toJSON(message.messageDetails?.killServerRequest)
        : undefined);
    message.messageDetails?.$case === "requestRTCRenegotiation" &&
      (obj.requestRTCRenegotiation = message.messageDetails
        ?.requestRTCRenegotiation
        ? RequestRTCRenegotiation.toJSON(
            message.messageDetails?.requestRTCRenegotiation
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoordinatorMessage>, I>>(
    object: I
  ): CoordinatorMessage {
    const message = createBaseCoordinatorMessage();
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromPartial(object.id)
        : undefined;
    message.messageType = object.messageType ?? 0;
    if (
      object.messageDetails?.$case === "connectWithServer" &&
      object.messageDetails?.connectWithServer !== undefined &&
      object.messageDetails?.connectWithServer !== null
    ) {
      message.messageDetails = {
        $case: "connectWithServer",
        connectWithServer: ConnectWithServer.fromPartial(
          object.messageDetails.connectWithServer
        ),
      };
    }
    if (
      object.messageDetails?.$case === "mixerSDP" &&
      object.messageDetails?.mixerSDP !== undefined &&
      object.messageDetails?.mixerSDP !== null
    ) {
      message.messageDetails = {
        $case: "mixerSDP",
        mixerSDP: SDP.fromPartial(object.messageDetails.mixerSDP),
      };
    }
    if (
      object.messageDetails?.$case === "clientSDP" &&
      object.messageDetails?.clientSDP !== undefined &&
      object.messageDetails?.clientSDP !== null
    ) {
      message.messageDetails = {
        $case: "clientSDP",
        clientSDP: SDP.fromPartial(object.messageDetails.clientSDP),
      };
    }
    if (
      object.messageDetails?.$case === "iceCandidate" &&
      object.messageDetails?.iceCandidate !== undefined &&
      object.messageDetails?.iceCandidate !== null
    ) {
      message.messageDetails = {
        $case: "iceCandidate",
        iceCandidate: IceCandidate.fromPartial(
          object.messageDetails.iceCandidate
        ),
      };
    }
    if (
      object.messageDetails?.$case === "tellClientAboutMixer" &&
      object.messageDetails?.tellClientAboutMixer !== undefined &&
      object.messageDetails?.tellClientAboutMixer !== null
    ) {
      message.messageDetails = {
        $case: "tellClientAboutMixer",
        tellClientAboutMixer: TellClientAboutMixer.fromPartial(
          object.messageDetails.tellClientAboutMixer
        ),
      };
    }
    if (
      object.messageDetails?.$case === "errorResponse" &&
      object.messageDetails?.errorResponse !== undefined &&
      object.messageDetails?.errorResponse !== null
    ) {
      message.messageDetails = {
        $case: "errorResponse",
        errorResponse: ErrorResponse.fromPartial(
          object.messageDetails.errorResponse
        ),
      };
    }
    if (
      object.messageDetails?.$case === "killServerRequest" &&
      object.messageDetails?.killServerRequest !== undefined &&
      object.messageDetails?.killServerRequest !== null
    ) {
      message.messageDetails = {
        $case: "killServerRequest",
        killServerRequest: KillServerRequest.fromPartial(
          object.messageDetails.killServerRequest
        ),
      };
    }
    if (
      object.messageDetails?.$case === "requestRTCRenegotiation" &&
      object.messageDetails?.requestRTCRenegotiation !== undefined &&
      object.messageDetails?.requestRTCRenegotiation !== null
    ) {
      message.messageDetails = {
        $case: "requestRTCRenegotiation",
        requestRTCRenegotiation: RequestRTCRenegotiation.fromPartial(
          object.messageDetails.requestRTCRenegotiation
        ),
      };
    }
    return message;
  },
};

function createBaseClientHello(): ClientHello {
  return { clientID: undefined, secret: undefined };
}

export const ClientHello = {
  encode(message: ClientHello, writer: Writer = Writer.create()): Writer {
    if (message.clientID !== undefined) {
      Uuid.encode(message.clientID, writer.uint32(10).fork()).ldelim();
    }
    if (message.secret !== undefined) {
      Uuid.encode(message.secret, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClientHello {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientHello();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientID = Uuid.decode(reader, reader.uint32());
          break;
        case 2:
          message.secret = Uuid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClientHello {
    return {
      clientID: isSet(object.clientID)
        ? Uuid.fromJSON(object.clientID)
        : undefined,
      secret: isSet(object.secret) ? Uuid.fromJSON(object.secret) : undefined,
    };
  },

  toJSON(message: ClientHello): unknown {
    const obj: any = {};
    message.clientID !== undefined &&
      (obj.clientID = message.clientID
        ? Uuid.toJSON(message.clientID)
        : undefined);
    message.secret !== undefined &&
      (obj.secret = message.secret ? Uuid.toJSON(message.secret) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClientHello>, I>>(
    object: I
  ): ClientHello {
    const message = createBaseClientHello();
    message.clientID =
      object.clientID !== undefined && object.clientID !== null
        ? Uuid.fromPartial(object.clientID)
        : undefined;
    message.secret =
      object.secret !== undefined && object.secret !== null
        ? Uuid.fromPartial(object.secret)
        : undefined;
    return message;
  },
};

function createBaseCoordinatorClientMessage(): CoordinatorClientMessage {
  return { messageType: 0, messageDetails: undefined };
}

export const CoordinatorClientMessage = {
  encode(
    message: CoordinatorClientMessage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.messageDetails?.$case === "clientHello") {
      ClientHello.encode(
        message.messageDetails.clientHello,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "sdp") {
      SDP.encode(message.messageDetails.sdp, writer.uint32(26).fork()).ldelim();
    }
    if (message.messageDetails?.$case === "iceCandidate") {
      IceCandidate.encode(
        message.messageDetails.iceCandidate,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.messageDetails?.$case === "requestRTCRenegotiation") {
      RequestRTCRenegotiation.encode(
        message.messageDetails.requestRTCRenegotiation,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CoordinatorClientMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoordinatorClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.messageDetails = {
            $case: "clientHello",
            clientHello: ClientHello.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.messageDetails = {
            $case: "sdp",
            sdp: SDP.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.messageDetails = {
            $case: "iceCandidate",
            iceCandidate: IceCandidate.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.messageDetails = {
            $case: "requestRTCRenegotiation",
            requestRTCRenegotiation: RequestRTCRenegotiation.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoordinatorClientMessage {
    return {
      messageType: isSet(object.messageType)
        ? coordinatorClientMessage_MessageTypeFromJSON(object.messageType)
        : 0,
      messageDetails: isSet(object.clientHello)
        ? {
            $case: "clientHello",
            clientHello: ClientHello.fromJSON(object.clientHello),
          }
        : isSet(object.sdp)
        ? { $case: "sdp", sdp: SDP.fromJSON(object.sdp) }
        : isSet(object.iceCandidate)
        ? {
            $case: "iceCandidate",
            iceCandidate: IceCandidate.fromJSON(object.iceCandidate),
          }
        : isSet(object.requestRTCRenegotiation)
        ? {
            $case: "requestRTCRenegotiation",
            requestRTCRenegotiation: RequestRTCRenegotiation.fromJSON(
              object.requestRTCRenegotiation
            ),
          }
        : undefined,
    };
  },

  toJSON(message: CoordinatorClientMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = coordinatorClientMessage_MessageTypeToJSON(
        message.messageType
      ));
    message.messageDetails?.$case === "clientHello" &&
      (obj.clientHello = message.messageDetails?.clientHello
        ? ClientHello.toJSON(message.messageDetails?.clientHello)
        : undefined);
    message.messageDetails?.$case === "sdp" &&
      (obj.sdp = message.messageDetails?.sdp
        ? SDP.toJSON(message.messageDetails?.sdp)
        : undefined);
    message.messageDetails?.$case === "iceCandidate" &&
      (obj.iceCandidate = message.messageDetails?.iceCandidate
        ? IceCandidate.toJSON(message.messageDetails?.iceCandidate)
        : undefined);
    message.messageDetails?.$case === "requestRTCRenegotiation" &&
      (obj.requestRTCRenegotiation = message.messageDetails
        ?.requestRTCRenegotiation
        ? RequestRTCRenegotiation.toJSON(
            message.messageDetails?.requestRTCRenegotiation
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoordinatorClientMessage>, I>>(
    object: I
  ): CoordinatorClientMessage {
    const message = createBaseCoordinatorClientMessage();
    message.messageType = object.messageType ?? 0;
    if (
      object.messageDetails?.$case === "clientHello" &&
      object.messageDetails?.clientHello !== undefined &&
      object.messageDetails?.clientHello !== null
    ) {
      message.messageDetails = {
        $case: "clientHello",
        clientHello: ClientHello.fromPartial(object.messageDetails.clientHello),
      };
    }
    if (
      object.messageDetails?.$case === "sdp" &&
      object.messageDetails?.sdp !== undefined &&
      object.messageDetails?.sdp !== null
    ) {
      message.messageDetails = {
        $case: "sdp",
        sdp: SDP.fromPartial(object.messageDetails.sdp),
      };
    }
    if (
      object.messageDetails?.$case === "iceCandidate" &&
      object.messageDetails?.iceCandidate !== undefined &&
      object.messageDetails?.iceCandidate !== null
    ) {
      message.messageDetails = {
        $case: "iceCandidate",
        iceCandidate: IceCandidate.fromPartial(
          object.messageDetails.iceCandidate
        ),
      };
    }
    if (
      object.messageDetails?.$case === "requestRTCRenegotiation" &&
      object.messageDetails?.requestRTCRenegotiation !== undefined &&
      object.messageDetails?.requestRTCRenegotiation !== null
    ) {
      message.messageDetails = {
        $case: "requestRTCRenegotiation",
        requestRTCRenegotiation: RequestRTCRenegotiation.fromPartial(
          object.messageDetails.requestRTCRenegotiation
        ),
      };
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
