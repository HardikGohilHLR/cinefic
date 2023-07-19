// Signup
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const { userName, email, password } = body;

    if(!userName || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 });
    }

    const userExist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(userExist) {
        throw new Error('Email already exists...');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            userName,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user);
}