export const typeDefs = ["type Channel {\n  id: Int!\n  channelName: String!\n  messages: [Message]\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateChannelResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  CreateChannel(channelName: String!): CreateChannelResponse!\n  SendMessage(nickname: String!, contents: String!, innerChannelId: Int!): SendMessageResponse!\n}\n\ntype Subscription {\n  CreateChannelSubscription: Channel\n  CreateMessageSubscription: Message\n}\n\ntype GetChannelResponse {\n  ok: Boolean!\n  error: String\n  channels: [Channel]\n}\n\ntype Query {\n  GetChannel: GetChannelResponse!\n  GetMessage(innerChannelId: Int!): GetMessageResponse!\n}\n\ntype GetMessageResponse {\n  ok: Boolean!\n  error: String\n  messages: [Message]\n}\n\ntype Message {\n  id: Int!\n  nickname: String!\n  contents: String!\n  innerChannel: Channel!\n  innerChannelId: Int!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SendMessageResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetChannel: GetChannelResponse;
  GetMessage: GetMessageResponse;
}

export interface GetMessageQueryArgs {
  innerChannelId: number;
}

export interface GetChannelResponse {
  ok: boolean;
  error: string | null;
  channels: Array<Channel> | null;
}

export interface Channel {
  id: number;
  channelName: string;
  messages: Array<Message> | null;
  createdAt: string;
  updatedAt: string | null;
}

export interface Message {
  id: number;
  nickname: string;
  contents: string;
  innerChannel: Channel;
  innerChannelId: number;
  createdAt: string;
  updatedAt: string | null;
}

export interface GetMessageResponse {
  ok: boolean;
  error: string | null;
  messages: Array<Message> | null;
}

export interface Mutation {
  CreateChannel: CreateChannelResponse;
  SendMessage: SendMessageResponse;
}

export interface CreateChannelMutationArgs {
  channelName: string;
}

export interface SendMessageMutationArgs {
  nickname: string;
  contents: string;
  innerChannelId: number;
}

export interface CreateChannelResponse {
  ok: boolean;
  error: string | null;
}

export interface SendMessageResponse {
  ok: boolean;
  error: string | null;
}

export interface Subscription {
  CreateChannelSubscription: Channel | null;
  CreateMessageSubscription: Message | null;
}
