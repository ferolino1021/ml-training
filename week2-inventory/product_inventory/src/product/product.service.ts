// product.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { Product } from '.prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async createProduct(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async updateProduct(id: number, data: CreateProductDto): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
