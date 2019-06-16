import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/Task';

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {
  }

  @Get()
  getAllTask(): Promise<Task[]> {
    return this.taskService.getAllTask();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string): Promise<Task> {
    return this.taskService.getTask(taskId);
  }

  @Post()
  createTask(@Body() CreateTaskDTO: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(CreateTaskDTO);
  }

  @Put(':id')
  updateTask(@Body() CreateTaskDTO: CreateTaskDto, @Param('id') id): Promise<Task> {
    return this.taskService.updateTask(id, CreateTaskDTO);
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<Task> {
    return this.taskService.deleteTask(id);
  }
}
