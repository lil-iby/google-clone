import {SearchHeader} from "@/components/SearchHeader";
import { Suspense } from "react";

export default function SearchRootLayout({children}) {
    return (
        <Suspense>
            <div>
            <SearchHeader/>
            {children}
        </div>
        </Suspense>
        
    )
}