import { Module } from '@nestjs/common';
import { ScheduledTaskService } from './scheduled-task.service';
import { ScheduledTaskController } from './scheduled-task.controller';

@Module({
  providers: [ScheduledTaskService],
  controllers: [ScheduledTaskController]
})
export class ScheduledTaskModule {}
