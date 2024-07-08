import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
    const session = await getServerAuthSession();

    const text = `You are ${session
            ? `logged in${session.user.name ? ` as ${session.user.name}` : ""}`
            : "not logged in"
        }!`;

    return (
        <HydrateClient>
            <main className="px-20 h-[6000px]">
                <h1 className="text-3xl">Welcome!</h1>
                <span>{text}</span>
                <h2 className="text-2xl">Your preferences:</h2>
            </main>
        </HydrateClient>
    );
}
