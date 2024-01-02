import { PartialType } from '@nestjs/mapped-types';
import { CreateDownloadhistoryDto } from './create-downloadhistory.dto';

export class UpdateDownloadhistoryDto extends PartialType(CreateDownloadhistoryDto) {}
