import Game from "@/components/Game";
import { getServerAuthSession } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import { Canvas } from "@react-three/fiber";

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
                <Game />
            </main>
        </HydrateClient>
    );
}
