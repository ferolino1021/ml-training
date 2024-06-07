import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { Prisma, Contact } from '@prisma/client';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async createContact(data: Prisma.ContactCreateInput): Promise<Contact> {
    return this.prisma.contact.create({ data });
  }

  async getContacts(): Promise<Contact[]> {
    return this.prisma.contact.findMany();
  }

  async getContactById(id: number): Promise<Contact | null> {
    return this.prisma.contact.findUnique({ where: { id } });
  }

  async updateContact(
    id: number,
    data: Prisma.ContactUpdateInput,
  ): Promise<Contact> {
    return this.prisma.contact.update({ where: { id }, data });
  }

  async deleteContact(id: number): Promise<Contact> {
    return this.prisma.contact.delete({ where: { id } });
  }

  async searchContacts(query: string): Promise<Contact[]> {
    return this.prisma.contact.findMany({
      where: {
        OR: [
          { firstName: { contains: query } },
          { lastName: { contains: query } },
          { email: { contains: query } },
          { phone: { contains: query } },
        ],
      },
    });
  }
}
