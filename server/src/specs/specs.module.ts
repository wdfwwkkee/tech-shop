import { Module } from '@nestjs/common';
import { SpecsService } from './specs.service';
import { SpecsController } from './specs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spec } from './entities/spec.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Catalog } from 'src/catalog/entities/catalog.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Spec,Catalog]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get("JWT_SECRET"),
        signOptions: { expiresIn: "30d" },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [SpecsController],
  providers: [SpecsService],
  exports : [SpecsService]
})
export class SpecsModule {}
