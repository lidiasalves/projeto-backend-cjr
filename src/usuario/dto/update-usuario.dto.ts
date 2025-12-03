import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUrl,
} from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsString({ message: 'O username deve ser um texto.' })
  username?: string;

  @IsOptional()
  @IsString({ message: 'O nome deve ser um texto.' })
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: 'O email informado é inválido.' })
  email?: string;

  @IsOptional()
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
  senha?: string; // se presente, será hashada e salva em senha_hash

  @IsOptional()
  @IsUrl({}, { message: 'A foto de perfil deve ser uma URL válida.' })
  foto_perfil_url?: string;
}
