import { BlogList } from "@/components/feature/BlogList";
import { BlogDetail } from "@/components/feature/BlogDetail";

const HomePage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-background items-start">

            {/* Left Sidebar (Blog List) 
                - Sticky on Desktop
                - Full width on Mobile
            */}
            <aside className="w-full md:w-[320px] lg:w-[380px] xl:w-[420px] shrink-0 border-r bg-muted/5 flex flex-col pt-6 md:sticky md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar z-20">
                <div className="px-6 mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-2xl tracking-tight">Articles</h2>
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                            Latest
                        </span>
                    </div>
                </div>

                <div className="flex-1 px-6 pb-6 pt-2">
                    <BlogList />
                </div>
            </aside>

            {/* Right Main Panel (Blog Detail) 
                - Flows naturally with document
                - Allows page to scroll down to Footer which is in MainLayout
            */}
            <div className="flex-1 min-w-0 bg-card/60 relative hidden md:block border-l shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.03)] z-10 w-full min-h-[calc(100vh-4rem)]">
                <div className="max-w-[1000px] mx-auto pb-12">
                    <BlogDetail />
                </div>
            </div>

            {/* Mobile Detail Overlay/Stacked */}
            <div className="md:hidden flex-1 w-full border-t bg-background min-h-screen">
                <BlogDetail />
            </div>
        </div>
    );
};

export default HomePage;
