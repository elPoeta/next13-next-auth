import { signJwtAccessToken } from "@/lib/jwt";
import prisma from "../../../lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
}

export const POST = async (req: Request) => {
  const body: RequestBody = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPassword } = user;
    const accessToken = signJwtAccessToken(userWithoutPassword);
    const response = {
      ...userWithoutPassword,
      accessToken,
    };
    console.log("USER-RES", response);
    return new Response(JSON.stringify(response));
  }

  return new Response(JSON.stringify(null));
};
