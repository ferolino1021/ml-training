import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { PrismaService } from 'prisma/prisma/prisma.service';

@Module({
  imports: [ContactsModule],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService, PrismaService],
})
export class AppModule {}
