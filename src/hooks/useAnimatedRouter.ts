"use client"

import ExtendedDocument from "@/types/ExtendedDocument";
import { useRouter } from "next/navigation";

export default function useAnimatedRouter() {
    const router = useRouter();

    const viewTransitionStatus = () => {
        const extendedDocument = document as ExtendedDocument;
        if (!extendedDocument.startViewTransition) console.log("No view transition support");
        else console.log("View transition support");
    }
    
    const animatedRoute = (url: string) => {
        const extendedDocument = document as ExtendedDocument;
        if (!extendedDocument.startViewTransition) return router.push(url);
        else {
            extendedDocument.startViewTransition(() => {
                router.push(url);
            });
        }
    }

    return { animatedRoute, viewTransitionStatus };
}
