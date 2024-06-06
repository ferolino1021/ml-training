import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from 'src/task/task.service';
import { Prisma } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private TaskService: TaskService) {}

  @Post()
  createTask(@Body() data: Prisma.TaskCreateInput) {
    return this.TaskService.createTask(data);
  }

  @Get()
  getTasks() {
    return this.TaskService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return this.TaskService.getTask(+id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() data: Prisma.TaskUpdateInput) {
    return this.TaskService.updateTask(+id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.TaskService.deleteTask(+id);
  }
}
