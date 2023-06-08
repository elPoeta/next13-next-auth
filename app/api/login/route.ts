import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: RequestBody = await req.json();
  console.log("body", body);
  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });
  console.log("USER", user);
  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;
    console.log("USER-sin pass", userWithoutPassword);

    return new Response(JSON.stringify(userWithoutPassword));
  }

  return new Response(JSON.stringify(null));
};
