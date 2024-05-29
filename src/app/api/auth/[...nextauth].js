import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod'; //form validation
import connectToDatabase from './app/utils/db';
import Users from './app/models/Users';
import bcrypt from 'bcrypt'; //Hashing converts a password into a fixed-length string of characters
 

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);
 
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            // const user = await getUser(email);
            await connectToDatabase();
            const user = await Users.findOne({ username: credentials.email });
            console.log("User:", user);
            if (!user) return null;
            const passwordsMatch = await bcrypt.compare(password, user.password);
   
            if (passwordsMatch) return user;
          }
   
          console.log('Invalid credentials');
          return null;
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  });