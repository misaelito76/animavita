import { Module } from '@nestjs/common';
import { GeolocationController } from './geolocation.controller';
import { OpenCageService } from '../frameworks/opencage.service';
import { GeolocationService } from '../core/abstracts/geolocation.service.abstract';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GeolocationController],
  providers: [{
    provide: GeolocationService,
    useClass: OpenCageService,
  }],
})
export class GeolocationModule {}