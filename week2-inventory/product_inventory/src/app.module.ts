import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma/prisma/prisma.module';

@Module({
  imports: [ProductModule, PrismaModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService, PrismaService],
})
export class AppModule {}
