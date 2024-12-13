import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserCourse } from './UserCourse';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ unique: true })
	username!: string;

	@Column()
	password!: string;

	@OneToMany(() => UserCourse, (userCourse) => userCourse.user)
	userCourses!: UserCourse[];
}