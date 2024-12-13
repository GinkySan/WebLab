import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserCourse } from './UserCourse';

@Entity()
export class Course {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	title!: string;

	@Column()
	description!: string;

	@OneToMany(() => UserCourse, (userCourse) => userCourse.course)
	userCourses!: UserCourse[];
}