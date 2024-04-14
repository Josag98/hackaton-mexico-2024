import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { ContribucionesModule } from './contribuciones/contribuciones.module';
import { GastosModule } from './gastos/gastos.module';
import { HitosModule } from './hitos/hitos.module';
import { ProyectosUsuariosModule } from './proyectos-usuarios/proyectos-usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: path.join(
        process.cwd(),
        'dist',
        'config',
        'env',
        `.${process.env.NODE_ENV.trim()}.env`,
      ),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('dbHost'),
        port: +configService.get('dbPort'),
        username: configService.get('dbUsename'),
        password: configService.get('dbPassword'),
        database: configService.get('dbName'),
        synchronize: configService.get('schemaSync') === 'true',
        logging: true,
        entities: [path.join(process.cwd(), 'dist/**/*.entity.js')],
        migrations: [path.join(process.cwd(), 'dist/src/db/migrations/*.js')],
        subscribers: [],
        dropSchema: false,
        autoLoadEntities: true,
        options: {
          encrypt: false,
        },
        relationLoadStrategy: 'query',
        ssl: configService.get('ssl') === 'true',
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize();
        return dataSource;
      },
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      async useFactory(configService: ConfigService) {
        return {
          secret: configService.get('jwt.secret'),
          signOptions: {
            algorithm: 'HS256',
            expiresIn: configService.get('jwt.expiresIn'),
            allowInsecureKeySizes: false,
          },
        };
      },
    }),

    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async () => ({
        playground: false,
        subscriptions: {
          'graphql-ws': true,
          'subscriptions-transport-ws': true,
        },
        autoSchemaFile: path.join(process.cwd(), 'dist/src/schema.gql'),
        sortSchema: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault],
        context: ({ req, res }) => ({ req, res }),
      }),
    }),

    UsuariosModule,

    ProyectosModule,

    LocalidadesModule,

    ContribucionesModule,

    GastosModule,

    HitosModule,

    ProyectosUsuariosModule,

    AuthModule
  ],
})
export class AppModule { }
