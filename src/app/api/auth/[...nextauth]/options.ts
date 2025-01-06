import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<any> {
                await dbConnect();

                try {
                    const user = await User.findOne({ email: credentials?.email })

                    if (!user) {
                        throw new Error('No user found with this email')
                    }

                    if (!credentials) {
                        throw new Error('Credentials are missing');
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)

                    if (isPasswordCorrect) {
                        return user;
                    }
                    else {
                        throw new Error('Incorrect Password')
                    }

                } catch (error: any) {
                    throw new Error(error)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id?.toString()
            }

            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id
            }

            return session
        }
    },
    pages: {
        signIn: '/auth/admin-login'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}