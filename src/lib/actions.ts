'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn, signOut } from '@/auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  console.log("Sign in Authenticate executed"); 
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}

export async function signOut_() {
  await signOut();
  console.log("Sign out executed");  
}
