import type { Metadata } from "next";
import RegisterForm from '@/components/authentication/RegisterForm';
import React from 'react';

export const metadata: Metadata = {
    title: 'Create Your Account',
    description: 'Create a free LaunchDeck account to showcase your software projects, track releases, and join a global network of builders and open-source creators.',
};

export default function RegisterPage() {
    return (
        // Calculates exact vertical space below a standard navbar to force total center alignment
        <div className="min-h-[calc(100vh-64px)] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <RegisterForm />
        </div>
    );
}