/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "task";

export interface GenerateHashRequest {
  id: number;
  data: string;
}

export interface GenerateHashResponse {
  id: number;
  hash: string;
}

function createBaseGenerateHashRequest(): GenerateHashRequest {
  return { id: 0, data: "" };
}

export const GenerateHashRequest = {
  encode(message: GenerateHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.data !== "") {
      writer.uint32(18).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateHashRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateHashRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0, data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: GenerateHashRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateHashRequest>, I>>(base?: I): GenerateHashRequest {
    return GenerateHashRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenerateHashRequest>, I>>(object: I): GenerateHashRequest {
    const message = createBaseGenerateHashRequest();
    message.id = object.id ?? 0;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseGenerateHashResponse(): GenerateHashResponse {
  return { id: 0, hash: "" };
}

export const GenerateHashResponse = {
  encode(message: GenerateHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateHashResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hash = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateHashResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0, hash: isSet(object.hash) ? String(object.hash) : "" };
  },

  toJSON(message: GenerateHashResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenerateHashResponse>, I>>(base?: I): GenerateHashResponse {
    return GenerateHashResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenerateHashResponse>, I>>(object: I): GenerateHashResponse {
    const message = createBaseGenerateHashResponse();
    message.id = object.id ?? 0;
    message.hash = object.hash ?? "";
    return message;
  },
};

export interface TaskService {
  GenerateHash(request: GenerateHashRequest): Promise<GenerateHashResponse>;
}

export class TaskServiceClientImpl implements TaskService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "task.TaskService";
    this.rpc = rpc;
    this.GenerateHash = this.GenerateHash.bind(this);
  }
  GenerateHash(request: GenerateHashRequest): Promise<GenerateHashResponse> {
    const data = GenerateHashRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GenerateHash", data);
    return promise.then((data) => GenerateHashResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
