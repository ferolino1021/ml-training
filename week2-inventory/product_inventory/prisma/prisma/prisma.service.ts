// prisma.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

@Injectable()
export class PrismaService {
  product: any;
  constructor(private prisma: PrismaClient) {}

  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProductById(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async createProduct(data: {
    name: string;
    price: number;
    quantity: number;
  }): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  async updateProduct(
    id: number,
    data: { name?: string; price?: number; quantity?: number },
  ): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
// prisma.service.ts;

// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect();
//   }

//   async enableShutdownHooks(app: INestApplication) {
//     this.$on('beforeExit', async () => {
//       await app.close();
//     });
//   }
// }
