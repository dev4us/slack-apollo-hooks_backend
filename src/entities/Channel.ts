import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import Message from "./Message";

@Entity()
class Channel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  channelName: string;

  @OneToMany(type => Message, message => message.innerChannel)
  messages: Message[];

  @Column({ type: Boolean, default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "timestamp" }) createdAt: string;
  @UpdateDateColumn({ type: "timestamp" }) updatedAt: string;
}

export default Channel;
