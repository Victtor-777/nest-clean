import { Controller, Post, UseGuards } from '@nestjs/common'
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JWTAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
