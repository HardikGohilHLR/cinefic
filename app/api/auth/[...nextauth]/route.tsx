// Auth 
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

import { prisma } from '@/lib/prisma';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: "Password", type: "password" },
            },
            async authorize(params: any) {

                const { email, password } = params;

                if (!email || !password) {
                    throw new Error('Please enter credentials');
                }

                const user = await prisma.user.findUnique({
                    where: { email }
                });

                return user;
            }
        })
    ],
    secret: process.env.SECRET_KEY,
    session: {
        strategy: 'jwt',
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }