import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTables1704043942699 } from 'src/migrations/1704043942699-CreateCoursesTables';
import { CreateTagsTable1704064271200 } from 'src/migrations/1704064271200-CreateTagsTable';
import { CreateCoursesTagsTable1704066784994 } from 'src/migrations/1704066784994-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTags1704067228270 } from 'src/migrations/1704067228270-AddCoursesIdToCoursesTags';
import { AddTagsIdToCoursesTags1704068452259 } from 'src/migrations/1704068452259-AddTagsIdToCoursesTags';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTables1704043942699,
    CreateTagsTable1704064271200,
    CreateCoursesTagsTable1704066784994,
    AddCoursesIdToCoursesTags1704067228270,
    AddTagsIdToCoursesTags1704068452259,
  ],
});
