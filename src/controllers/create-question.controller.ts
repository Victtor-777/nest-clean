import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller('/questions')
@UseGuards(JWTAuthGuard)
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user.sub)

    return 'ok'
  }
}
