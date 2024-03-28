import { useRouter } from "next/router";

// example just to import something from "next/router"
export function usePathname() {
    const router = useRouter();
    return router.pathname;
}
