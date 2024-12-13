import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Course } from './Course';

@Entity()
export class UserCourse {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.userCourses)
  user!: User;

  @ManyToOne(() => Course, (course) => course.userCourses)
  course!: Course;
}