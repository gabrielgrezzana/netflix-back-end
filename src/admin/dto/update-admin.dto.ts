import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateadminDto extends PartialType(CreateAdminDto) {
    id: string;
}