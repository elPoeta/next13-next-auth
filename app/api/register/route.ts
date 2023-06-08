import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const { name, email, password: pass }: RequestBody = await req.json();

  //TODO check for existing email

  if (name === "" || email === "" || pass === "") {
    return new Response(JSON.stringify(null));
  }
  const hashPass = await bcrypt.hash(pass, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashPass },
  });

  const { password, ...userWithoutPassword } = user;

  return new Response(JSON.stringify(userWithoutPassword));
};
