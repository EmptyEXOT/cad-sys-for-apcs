import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const locales = ['en', 'ru'] as const;
export const localePrefix = 'always';

export const pathnames = {
    '/': '/',
    '/signup': '/signup',
    '/login': '/login',
    '/password_reset': '/password_reset',

} satisfies Pathnames<typeof locales>;

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});