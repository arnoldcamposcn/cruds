import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }), // Validación: nombre mínimo 2 caracteres
  email: z.string().email({ message: "Debe ser un correo válido" }), // Validación: formato de correo válido
});

export default formSchema;
