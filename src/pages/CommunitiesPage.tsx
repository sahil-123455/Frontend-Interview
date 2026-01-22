import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const communities = [
    { name: "Frontend Developers", members: "12.5k", desc: "Discussing React, Vue, Angular and more." },
    { name: "UI/UX Designers", members: "8.2k", desc: "Share designs, get feedback, talk tools." },
    { name: "Career Advice", members: "15k", desc: "Resume reviews, interview prep, and guidance." },
    { name: "Remote Work", members: "5.3k", desc: "Tips and tricks for working from home." },
    { name: "Tech News", members: "22k", desc: "Latest happenings in the tech world." },
    { name: "Open Source", members: "9.1k", desc: "Contributing to OSS projects." },
];

const CommunitiesPage = () => {
    const { toast } = useToast();

    const handleJoin = (name: string) => {
        toast({
            title: "Community Joined!",
            description: `You have successfully joined the ${name} community.`,
        });
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Communities</h1>
                <p className="text-muted-foreground">Join conversations that matter to you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communities.map((comm) => (
                    <Card key={comm.name} className="rounded-2xl shadow-soft border-none hover:shadow-soft-hover transition-all">
                        <CardContent className="p-6 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{comm.name}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{comm.desc}</p>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xs font-medium text-muted-foreground">{comm.members} members</span>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full"
                                    onClick={() => handleJoin(comm.name)}
                                >
                                    Join
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CommunitiesPage;
