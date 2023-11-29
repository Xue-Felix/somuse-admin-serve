import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('用户')
@Controller({
  path: 'user',
  version: [VERSION_NEUTRAL],
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get('getTestHRMName')
  getTestHRMName() {
    return this.configService.get('TEST_VALUE').name;
  }

  @ApiOperation({
    summary: '新增用户',
  })
  @Post('/add')
  create(@Body() user: CreateUserDto) {
    // console.log('user ==> ', user);
    return this.userService.createOrSave(user);
  }

  @Post('/update')
  update(@Body() user: UpdateUserDto) {
    return this.userService.createOrSave(user);
  }
}
