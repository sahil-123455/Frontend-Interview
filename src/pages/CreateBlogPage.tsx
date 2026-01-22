import { BlogForm } from "@/components/feature/BlogForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CreateBlogPage = () => {
    return (
        <div className="w-full max-w-[1400px] mx-auto space-y-6 px-6">
            <div className="w-full flex justify-start">
                <Link to="/">
                    <Button variant="ghost" className="pl-0 hover:pl-2 transition-all hover:bg-transparent hover:text-primary gap-2 text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col items-center space-y-2 text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Publish Your Insight</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Share your knowledge with the community. Create a new blog post in seconds.
                    </p>
                </div>
                <BlogForm />
            </div>
        </div>
    );
};

export default CreateBlogPage;
