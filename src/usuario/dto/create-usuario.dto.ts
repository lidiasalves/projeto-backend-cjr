/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O username é obrigatório.' })
  @IsString({ message: 'O username deve ser um texto.' })
  username: string;

  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser um texto.' })
  nome: string;

  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail({}, { message: 'O email informado é inválido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e símbolo.',
    },
  )
  senha: string; // senha em texto puro aqui (será hashada no service)

  @IsOptional()
  @IsUrl({}, { message: 'A foto de perfil deve ser uma URL válida.' })
  foto_perfil_url?: string;
}
