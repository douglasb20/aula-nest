import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly cursesService: CoursesService) {}
  @Get()
  findAll() {
    return this.cursesService.findAll();
  }

  @Get(':id')
  findeOne(@Param('id') id: string) {
    return this.cursesService.findOne(id);
  }

  @HttpCode(201)
  @Post()
  create(@Body() createCourseDTO: CreateCourseDTO) {
    return this.cursesService.create(createCourseDTO);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDTO) {
    return this.cursesService.update(id, updateCourseDTO);
  }
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursesService.remove(id);
  }
}
