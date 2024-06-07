import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    console.log(Body);
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

  @Get(':search/:query')
  search(@Param('query') query: string) {
    console.log(query);
    return this.contactsService.searchContacts(query);
  }
}
