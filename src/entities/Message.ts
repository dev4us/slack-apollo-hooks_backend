import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import Channel from "./Channel";

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  nickname: string;

  @Column({ nullable: false })
  contents: string;

  @Column()
  innerChannelId: number;

  @ManyToOne(type => Channel, channel => channel.messages)
  innerChannel: Channel;

  @CreateDateColumn({ type: "timestamp" }) createdAt: string;
  @UpdateDateColumn({ type: "timestamp" }) updatedAt: string;
}

export default Message;
