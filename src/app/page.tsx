import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import ThemeToggle from "@/components/theme-toggle";

export default async function Home() {
    const session = await getServerAuthSession();

    const text = `You are ${
        session
            ? `logged in${session.user.name ? ` as ${session.user.name}` : ""}`
            : "not logged in"
    }!`;

    return (
        <HydrateClient>
            <main>
                <h1 className="text-3xl">Welcome!</h1>
                <span>{text}</span>
                <h2 className="text-2xl">Your preferences:</h2>
                <ThemeToggle theme={"system"} />
            </main>
        </HydrateClient>
    );
}
