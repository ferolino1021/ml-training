// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Param,
//   Put,
//   Delete,
//   Query,
// } from '@nestjs/common';
// import { ContactsService } from './contacts.service';
// import { Prisma } from '@prisma/client';

// @Controller('contacts')
// export class ContactsController {
//   constructor(private readonly contactsService: ContactsService) {}

//   @Post()
//   create(@Body() data: Prisma.ContactCreateInput) {
//     return this.contactsService.createContact(data);
//   }

//   @Get()
//   findAll() {
//     return this.contactsService.getContacts();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.contactsService.getContactById(Number(id));
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() data: Prisma.ContactUpdateInput) {
//     return this.contactsService.updateContact(Number(id), data);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.contactsService.deleteContact(Number(id));
//   }

//   @Get('search')
//   search(@Query('query') query: string) {
//     return this.contactsService.searchContacts(query);
//   }
// }
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.getContacts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.getContactById(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.updateContact(Number(id), updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.deleteContact(Number(id));
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.contactsService.searchContacts(query);
  }
}
