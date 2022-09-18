import { Exclude } from "class-transformer";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";
import { UserRole } from "./UserRole";

@Entity("login")
export class Login {
  @Exclude()
  @PrimaryColumn("uuid", { name: "login_id" })
  id?: string;

  @Column("varchar", { length: 30, name: "login_email", unique: true })
  email!: string;

  @Exclude()
  @Column("text", { name: "login_password" })
  password!: string;

  @OneToOne(() => User)
  user!: User;

  @ManyToOne(() => UserRole, (userRole) => userRole.logins)
  @JoinColumn({ name: "login_role_id" })
  role?: UserRole;
}