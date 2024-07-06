import { z } from "zod";

export namespace UserPreferences {
    const UserPreferencesSchema = z.object({
        colorScheme: z
            .enum(["system", "light", "dark"])
            .optional()
            .default("system"),
    });

    type UserPreferencesConfig = z.infer<typeof UserPreferencesSchema>;

    const defaultUserPreferences = UserPreferencesSchema.parse({});
}
