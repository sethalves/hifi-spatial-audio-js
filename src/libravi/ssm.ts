/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "ssm";

export interface Uuid {
  value: Uint8Array;
}

export interface SetClientPosition {
  id: Uuid | undefined;
  x: number;
  y: number;
  facing: number;
}

export interface KillServerRequest {}

export interface LogToServer {
  logLine: string;
}

export interface ClientMessage {
  messageType: ClientMessage_MessageType;
  requestDetails?:
    | { $case: "setClientPosition"; setClientPosition: SetClientPosition }
    | { $case: "killServerRequest"; killServerRequest: KillServerRequest }
    | { $case: "logToServer"; logToServer: LogToServer };
}

export enum ClientMessage_MessageType {
  SET_CLIENT_POSITION = 0,
  KILL_SERVER_REQUEST = 1,
  LOG_TO_SERVER = 2,
  UNRECOGNIZED = -1,
}

export function clientMessage_MessageTypeFromJSON(
  object: any
): ClientMessage_MessageType {
  switch (object) {
    case 0:
    case "SET_CLIENT_POSITION":
      return ClientMessage_MessageType.SET_CLIENT_POSITION;
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
    case ClientMessage_MessageType.SET_CLIENT_POSITION:
      return "SET_CLIENT_POSITION";
    case ClientMessage_MessageType.KILL_SERVER_REQUEST:
      return "KILL_SERVER_REQUEST";
    case ClientMessage_MessageType.LOG_TO_SERVER:
      return "LOG_TO_SERVER";
    default:
      return "UNKNOWN";
  }
}

export interface ServerMessage {
  messageType: ServerMessage_MessageType;
  encodedMessage: Uint8Array;
}

export enum ServerMessage_MessageType {
  TELL_CLIENT_ABOUT_MIXER = 0,
  UNRECOGNIZED = -1,
}

export function serverMessage_MessageTypeFromJSON(
  object: any
): ServerMessage_MessageType {
  switch (object) {
    case 0:
    case "TELL_CLIENT_ABOUT_MIXER":
      return ServerMessage_MessageType.TELL_CLIENT_ABOUT_MIXER;
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
    case ServerMessage_MessageType.TELL_CLIENT_ABOUT_MIXER:
      return "TELL_CLIENT_ABOUT_MIXER";
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

const baseUuid: object = {};

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
    const message = { ...baseUuid } as Uuid;
    message.value = new Uint8Array();
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
    const message = { ...baseUuid } as Uuid;
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
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
    const message = { ...baseUuid } as Uuid;
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseSetClientPosition: object = { x: 0, y: 0, facing: 0 };

export const SetClientPosition = {
  encode(message: SetClientPosition, writer: Writer = Writer.create()): Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
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

  decode(input: Reader | Uint8Array, length?: number): SetClientPosition {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetClientPosition } as SetClientPosition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = Uuid.decode(reader, reader.uint32());
          break;
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

  fromJSON(object: any): SetClientPosition {
    const message = { ...baseSetClientPosition } as SetClientPosition;
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromJSON(object.id)
        : undefined;
    message.x =
      object.x !== undefined && object.x !== null ? Number(object.x) : 0;
    message.y =
      object.y !== undefined && object.y !== null ? Number(object.y) : 0;
    message.facing =
      object.facing !== undefined && object.facing !== null
        ? Number(object.facing)
        : 0;
    return message;
  },

  toJSON(message: SetClientPosition): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    message.facing !== undefined && (obj.facing = message.facing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetClientPosition>, I>>(
    object: I
  ): SetClientPosition {
    const message = { ...baseSetClientPosition } as SetClientPosition;
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromPartial(object.id)
        : undefined;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.facing = object.facing ?? 0;
    return message;
  },
};

const baseKillServerRequest: object = {};

export const KillServerRequest = {
  encode(_: KillServerRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): KillServerRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKillServerRequest } as KillServerRequest;
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
    const message = { ...baseKillServerRequest } as KillServerRequest;
    return message;
  },

  toJSON(_: KillServerRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KillServerRequest>, I>>(
    _: I
  ): KillServerRequest {
    const message = { ...baseKillServerRequest } as KillServerRequest;
    return message;
  },
};

const baseLogToServer: object = { logLine: "" };

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
    const message = { ...baseLogToServer } as LogToServer;
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
    const message = { ...baseLogToServer } as LogToServer;
    message.logLine =
      object.logLine !== undefined && object.logLine !== null
        ? String(object.logLine)
        : "";
    return message;
  },

  toJSON(message: LogToServer): unknown {
    const obj: any = {};
    message.logLine !== undefined && (obj.logLine = message.logLine);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogToServer>, I>>(
    object: I
  ): LogToServer {
    const message = { ...baseLogToServer } as LogToServer;
    message.logLine = object.logLine ?? "";
    return message;
  },
};

const baseClientMessage: object = { messageType: 0 };

export const ClientMessage = {
  encode(message: ClientMessage, writer: Writer = Writer.create()): Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.requestDetails?.$case === "setClientPosition") {
      SetClientPosition.encode(
        message.requestDetails.setClientPosition,
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
    const message = { ...baseClientMessage } as ClientMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.requestDetails = {
            $case: "setClientPosition",
            setClientPosition: SetClientPosition.decode(
              reader,
              reader.uint32()
            ),
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
    const message = { ...baseClientMessage } as ClientMessage;
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? clientMessage_MessageTypeFromJSON(object.messageType)
        : 0;
    if (
      object.setClientPosition !== undefined &&
      object.setClientPosition !== null
    ) {
      message.requestDetails = {
        $case: "setClientPosition",
        setClientPosition: SetClientPosition.fromJSON(object.setClientPosition),
      };
    }
    if (
      object.killServerRequest !== undefined &&
      object.killServerRequest !== null
    ) {
      message.requestDetails = {
        $case: "killServerRequest",
        killServerRequest: KillServerRequest.fromJSON(object.killServerRequest),
      };
    }
    if (object.logToServer !== undefined && object.logToServer !== null) {
      message.requestDetails = {
        $case: "logToServer",
        logToServer: LogToServer.fromJSON(object.logToServer),
      };
    }
    return message;
  },

  toJSON(message: ClientMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = clientMessage_MessageTypeToJSON(message.messageType));
    message.requestDetails?.$case === "setClientPosition" &&
      (obj.setClientPosition = message.requestDetails?.setClientPosition
        ? SetClientPosition.toJSON(message.requestDetails?.setClientPosition)
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
    const message = { ...baseClientMessage } as ClientMessage;
    message.messageType = object.messageType ?? 0;
    if (
      object.requestDetails?.$case === "setClientPosition" &&
      object.requestDetails?.setClientPosition !== undefined &&
      object.requestDetails?.setClientPosition !== null
    ) {
      message.requestDetails = {
        $case: "setClientPosition",
        setClientPosition: SetClientPosition.fromPartial(
          object.requestDetails.setClientPosition
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

const baseServerMessage: object = { messageType: 0 };

export const ServerMessage = {
  encode(message: ServerMessage, writer: Writer = Writer.create()): Writer {
    if (message.messageType !== 0) {
      writer.uint32(8).int32(message.messageType);
    }
    if (message.encodedMessage.length !== 0) {
      writer.uint32(18).bytes(message.encodedMessage);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ServerMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseServerMessage } as ServerMessage;
    message.encodedMessage = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.int32() as any;
          break;
        case 2:
          message.encodedMessage = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ServerMessage {
    const message = { ...baseServerMessage } as ServerMessage;
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? serverMessage_MessageTypeFromJSON(object.messageType)
        : 0;
    message.encodedMessage =
      object.encodedMessage !== undefined && object.encodedMessage !== null
        ? bytesFromBase64(object.encodedMessage)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ServerMessage): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = serverMessage_MessageTypeToJSON(message.messageType));
    message.encodedMessage !== undefined &&
      (obj.encodedMessage = base64FromBytes(
        message.encodedMessage !== undefined
          ? message.encodedMessage
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServerMessage>, I>>(
    object: I
  ): ServerMessage {
    const message = { ...baseServerMessage } as ServerMessage;
    message.messageType = object.messageType ?? 0;
    message.encodedMessage = object.encodedMessage ?? new Uint8Array();
    return message;
  },
};

const baseConnectWithServer: object = {};

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
    const message = { ...baseConnectWithServer } as ConnectWithServer;
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
    const message = { ...baseConnectWithServer } as ConnectWithServer;
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromJSON(object.serverID)
        : undefined;
    return message;
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
    const message = { ...baseConnectWithServer } as ConnectWithServer;
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromPartial(object.serverID)
        : undefined;
    return message;
  },
};

const baseSDP: object = { sdpType: "", sdp: "" };

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
    const message = { ...baseSDP } as SDP;
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
    const message = { ...baseSDP } as SDP;
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromJSON(object.peerID)
        : undefined;
    message.sdpType =
      object.sdpType !== undefined && object.sdpType !== null
        ? String(object.sdpType)
        : "";
    message.sdp =
      object.sdp !== undefined && object.sdp !== null ? String(object.sdp) : "";
    return message;
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
    const message = { ...baseSDP } as SDP;
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromPartial(object.peerID)
        : undefined;
    message.sdpType = object.sdpType ?? "";
    message.sdp = object.sdp ?? "";
    return message;
  },
};

const baseIceCandidate: object = {
  candidate: "",
  sdpMid: "",
  sdpMLineIndex: 0,
};

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
    const message = { ...baseIceCandidate } as IceCandidate;
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
    const message = { ...baseIceCandidate } as IceCandidate;
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromJSON(object.peerID)
        : undefined;
    message.candidate =
      object.candidate !== undefined && object.candidate !== null
        ? String(object.candidate)
        : "";
    message.sdpMid =
      object.sdpMid !== undefined && object.sdpMid !== null
        ? String(object.sdpMid)
        : "";
    message.sdpMLineIndex =
      object.sdpMLineIndex !== undefined && object.sdpMLineIndex !== null
        ? Number(object.sdpMLineIndex)
        : 0;
    return message;
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
    const message = { ...baseIceCandidate } as IceCandidate;
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

const baseRequestRTCRenegotiation: object = {};

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
    const message = {
      ...baseRequestRTCRenegotiation,
    } as RequestRTCRenegotiation;
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
    const message = {
      ...baseRequestRTCRenegotiation,
    } as RequestRTCRenegotiation;
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromJSON(object.peerID)
        : undefined;
    return message;
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
    const message = {
      ...baseRequestRTCRenegotiation,
    } as RequestRTCRenegotiation;
    message.peerID =
      object.peerID !== undefined && object.peerID !== null
        ? Uuid.fromPartial(object.peerID)
        : undefined;
    return message;
  },
};

const baseTellClientAboutMixer: object = {};

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
    const message = { ...baseTellClientAboutMixer } as TellClientAboutMixer;
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
    const message = { ...baseTellClientAboutMixer } as TellClientAboutMixer;
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromJSON(object.serverID)
        : undefined;
    return message;
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
    const message = { ...baseTellClientAboutMixer } as TellClientAboutMixer;
    message.serverID =
      object.serverID !== undefined && object.serverID !== null
        ? Uuid.fromPartial(object.serverID)
        : undefined;
    return message;
  },
};

const baseErrorResponse: object = { message: "" };

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
    const message = { ...baseErrorResponse } as ErrorResponse;
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
    const message = { ...baseErrorResponse } as ErrorResponse;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    return message;
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(
    object: I
  ): ErrorResponse {
    const message = { ...baseErrorResponse } as ErrorResponse;
    message.message = object.message ?? "";
    return message;
  },
};

const baseCoordinatorMessage: object = { messageType: 0 };

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
    const message = { ...baseCoordinatorMessage } as CoordinatorMessage;
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
    const message = { ...baseCoordinatorMessage } as CoordinatorMessage;
    message.id =
      object.id !== undefined && object.id !== null
        ? Uuid.fromJSON(object.id)
        : undefined;
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? coordinatorMessage_MessageTypeFromJSON(object.messageType)
        : 0;
    if (
      object.connectWithServer !== undefined &&
      object.connectWithServer !== null
    ) {
      message.messageDetails = {
        $case: "connectWithServer",
        connectWithServer: ConnectWithServer.fromJSON(object.connectWithServer),
      };
    }
    if (object.mixerSDP !== undefined && object.mixerSDP !== null) {
      message.messageDetails = {
        $case: "mixerSDP",
        mixerSDP: SDP.fromJSON(object.mixerSDP),
      };
    }
    if (object.clientSDP !== undefined && object.clientSDP !== null) {
      message.messageDetails = {
        $case: "clientSDP",
        clientSDP: SDP.fromJSON(object.clientSDP),
      };
    }
    if (object.iceCandidate !== undefined && object.iceCandidate !== null) {
      message.messageDetails = {
        $case: "iceCandidate",
        iceCandidate: IceCandidate.fromJSON(object.iceCandidate),
      };
    }
    if (
      object.tellClientAboutMixer !== undefined &&
      object.tellClientAboutMixer !== null
    ) {
      message.messageDetails = {
        $case: "tellClientAboutMixer",
        tellClientAboutMixer: TellClientAboutMixer.fromJSON(
          object.tellClientAboutMixer
        ),
      };
    }
    if (object.errorResponse !== undefined && object.errorResponse !== null) {
      message.messageDetails = {
        $case: "errorResponse",
        errorResponse: ErrorResponse.fromJSON(object.errorResponse),
      };
    }
    if (
      object.killServerRequest !== undefined &&
      object.killServerRequest !== null
    ) {
      message.messageDetails = {
        $case: "killServerRequest",
        killServerRequest: KillServerRequest.fromJSON(object.killServerRequest),
      };
    }
    if (
      object.requestRTCRenegotiation !== undefined &&
      object.requestRTCRenegotiation !== null
    ) {
      message.messageDetails = {
        $case: "requestRTCRenegotiation",
        requestRTCRenegotiation: RequestRTCRenegotiation.fromJSON(
          object.requestRTCRenegotiation
        ),
      };
    }
    return message;
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
    const message = { ...baseCoordinatorMessage } as CoordinatorMessage;
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

const baseClientHello: object = {};

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
    const message = { ...baseClientHello } as ClientHello;
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
    const message = { ...baseClientHello } as ClientHello;
    message.clientID =
      object.clientID !== undefined && object.clientID !== null
        ? Uuid.fromJSON(object.clientID)
        : undefined;
    message.secret =
      object.secret !== undefined && object.secret !== null
        ? Uuid.fromJSON(object.secret)
        : undefined;
    return message;
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
    const message = { ...baseClientHello } as ClientHello;
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

const baseCoordinatorClientMessage: object = { messageType: 0 };

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
    const message = {
      ...baseCoordinatorClientMessage,
    } as CoordinatorClientMessage;
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
    const message = {
      ...baseCoordinatorClientMessage,
    } as CoordinatorClientMessage;
    message.messageType =
      object.messageType !== undefined && object.messageType !== null
        ? coordinatorClientMessage_MessageTypeFromJSON(object.messageType)
        : 0;
    if (object.clientHello !== undefined && object.clientHello !== null) {
      message.messageDetails = {
        $case: "clientHello",
        clientHello: ClientHello.fromJSON(object.clientHello),
      };
    }
    if (object.sdp !== undefined && object.sdp !== null) {
      message.messageDetails = { $case: "sdp", sdp: SDP.fromJSON(object.sdp) };
    }
    if (object.iceCandidate !== undefined && object.iceCandidate !== null) {
      message.messageDetails = {
        $case: "iceCandidate",
        iceCandidate: IceCandidate.fromJSON(object.iceCandidate),
      };
    }
    if (
      object.requestRTCRenegotiation !== undefined &&
      object.requestRTCRenegotiation !== null
    ) {
      message.messageDetails = {
        $case: "requestRTCRenegotiation",
        requestRTCRenegotiation: RequestRTCRenegotiation.fromJSON(
          object.requestRTCRenegotiation
        ),
      };
    }
    return message;
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
    const message = {
      ...baseCoordinatorClientMessage,
    } as CoordinatorClientMessage;
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
