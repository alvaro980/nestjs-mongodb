import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/Task';
import { Model } from 'mongoose';
import { CreateTaskDto } from './DTO/create-task.dto';

@Injectable()
export class TasksService {

  constructor(@InjectModel('Task') private taskModel: Model<Task>) {
  }

// Fetch all tasks
  async getAllTask() {
    return await this.taskModel.find();
  }

// Get a single task
  async getTask(id: string) {
    return await this.taskModel.findById(id);
  }

// create new task
  async createTask(task: CreateTaskDto) {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

// edit task details
  async updateTask(taskID: string, CreateTaskDTO: CreateTaskDto) {
    const updateTask = this.taskModel
      .findByIdAndUpdate(taskID, CreateTaskDTO, { new: true });
    return await updateTask;
  }

// delete a task
  async deleteTask(taskID: string) {
    const deletedCustomer = this.taskModel
      .findOneAndDelete(taskID);
    return await deletedCustomer;
  }

}
