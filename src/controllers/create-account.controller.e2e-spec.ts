test('1 plus 1', () => {
  expect(1 + 1).toBe(2)
})

// import { ConflictException } from '@nestjs/common'
// import { Test, TestingModule } from '@nestjs/testing'
// import { PrismaService } from '@/prisma/prisma.service'
// import { CreateAccountController } from './create-account.controller'
// import { hash } from 'bcryptjs'
// import { describe, it, expect, beforeEach, vi } from 'vitest'

// describe('CreateAccountController', () => {
//   let controller: CreateAccountController
//   let prisma: PrismaService

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CreateAccountController],
//       providers: [
//         {
//           provide: PrismaService,
//           useValue: {
//             user: {
//               findUnique: vi.fn(),
//               create: vi.fn(),
//             },
//           },
//         },
//       ],
//     }).compile()

//     controller = module.get<CreateAccountController>(CreateAccountController)
//     prisma = module.get<PrismaService>(PrismaService)
//   })

//   it('should create a new account successfully', async () => {
//     const body = {
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       password: 'password123',
//     }

//     prisma.user.findUnique = vi.fn().mockResolvedValue(null)
//     prisma.user.create = vi.fn().mockResolvedValue({
//       id: 1,
//       ...body,
//       password: await hash(body.password, 8),
//     })

//     await expect(controller.handle(body)).resolves.not.toThrow()
//     expect(prisma.user.findUnique).toHaveBeenCalledWith({
//       where: { email: body.email },
//     })
//     expect(prisma.user.create).toHaveBeenCalledWith({
//       data: {
//         name: body.name,
//         email: body.email,
//         password: expect.any(String),
//       },
//     })
//   })

//   it('should throw ConflictException if email already exists', async () => {
//     const body = {
//       name: 'John Doe',
//       email: 'john.doe@example.com',
//       password: 'password123',
//     }

//     prisma.user.findUnique = vi.fn().mockResolvedValue({ id: 1, ...body })

//     await expect(controller.handle(body)).rejects.toThrow(ConflictException)
//     expect(prisma.user.findUnique).toHaveBeenCalledWith({
//       where: { email: body.email },
//     })
//     expect(prisma.user.create).not.toHaveBeenCalled()
//   })
// })
