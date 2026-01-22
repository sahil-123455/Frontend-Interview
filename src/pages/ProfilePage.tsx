import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, MapPin, Link as LinkIcon } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";

const ProfilePage = () => {
    const { toast } = useToast();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Card className="rounded-2xl shadow-soft border-none overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-primary/30 to-primary/10" />
                <CardContent className="relative px-6 pb-8">
                    <div className="absolute -top-16 left-6 group cursor-pointer">
                        <div className="w-32 h-32 rounded-full border-[6px] border-background bg-secondary overflow-hidden shadow-xl relative">
                            <img src="https://ui.shadcn.com/avatars/02.png" alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {/* Overlay Username */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-2 opacity-100 transition-opacity">
                                <h1 className="text-white font-bold text-lg leading-tight drop-shadow-md">Demo User</h1>
                                <p className="text-white/90 text-[10px] font-medium leading-tight mt-1 drop-shadow-sm">Frontend Developer & Content Creator</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                {/* Name and Role moved to avatar overlay */}
                            </div>
                            <Button
                                onClick={() => {
                                    toast({
                                        title: "Edit Profile",
                                        description: "This feature is coming soon!",
                                    });
                                }}
                            >
                                Edit Profile
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>@demouser</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                <span>user@example.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <LinkIcon className="w-4 h-4" />
                                <a href="#" className="hover:text-primary">website.com</a>
                            </div>
                        </div>

                        <div className="border-t pt-6">
                            <h3 className="font-semibold text-lg mb-4">Bio</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Passionate about building beautiful user interfaces and accessible web applications.
                                Love working with React, Tailwind CSS, and modern frontend tools.
                                Always learning and sharing knowledge with the community.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfilePage;
