import { X, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"

export const ArticleModal = ({ blog, onClose }: any) => {
  return (
    <div
      className="
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black/60 dark:bg-black/80
        backdrop-blur-md
      "
    >
      {/* MODAL */}
      <div
        className="
          relative w-full max-w-5xl max-h-[90vh]
          overflow-y-auto custom-scrollbar

          /* LIGHT MODE */
          bg-white text-slate-900
          shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]

          /* DARK MODE */
          dark:bg-card/60 dark:text-foreground
          dark:backdrop-blur-2xl
          dark:border dark:border-white/10
          dark:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]

          rounded-[3rem]
          animate-in slide-in-from-bottom-10 duration-700
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6 z-50 rounded-full p-2
            bg-black/10 hover:bg-black/20 text-black
            dark:bg-black/40 dark:hover:bg-black/70 dark:text-white
            transition
          "
        >
          <X className="w-5 h-5" />
        </button>

        {/* HERO */}
        <div className="relative h-[420px] rounded-t-[3rem] overflow-hidden">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          {/* GRADIENT OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-white via-white/70 to-transparent
              dark:from-background dark:via-background/40
            "
          />

          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex gap-2 mb-4 flex-wrap">
              {blog.category.map((c: string) => (
                <Badge
                  key={c}
                  className="
                    text-[10px] uppercase tracking-widest
                    bg-primary text-white
                    dark:bg-primary
                  "
                >
                  {c}
                </Badge>
              ))}
            </div>

            <h1
              className="
                text-4xl md:text-6xl font-black italic leading-tight
                text-slate-900 dark:text-white
              "
            >
              {blog.title}
            </h1>
          </div>
        </div>

        {/* BODY */}
        <div className="px-10 py-16 max-w-3xl mx-auto">
          <div
            className="
              flex gap-8 text-xs uppercase tracking-widest mb-12
              text-slate-500 dark:text-muted-foreground
            "
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {blog.date
                ? format(new Date(blog.date), "MMM d, yyyy")
                : "Recent"}
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {Math.max(1, Math.ceil(blog.content.length / 600))} min read
            </div>
          </div>

          <p
            className="
              text-xl italic mb-12 pl-6 border-l-4
              text-slate-600 border-primary/40
              dark:text-muted-foreground
            "
          >
            {blog.description}
          </p>

          <div
            className="
              space-y-8 text-lg leading-[2]
              text-slate-800 dark:text-foreground
            "
          >
            {blog.content.split("\n").map(
              (p: string, i: number) =>
                p.trim() && <p key={i}>{p}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
