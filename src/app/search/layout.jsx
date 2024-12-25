import SearchHeader from "@/components/SearchHeader";

export default function SearchRootLayout({children}) {
    return (
        <div>
            <SearchHeader/>
            {children}
        </div>
    )
}