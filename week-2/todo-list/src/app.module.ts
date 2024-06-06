import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { PrismaService } from 'prisma/prisma/prisma.service';

@Module({
  imports: [TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService, PrismaService],
})
export class AppModule {}
