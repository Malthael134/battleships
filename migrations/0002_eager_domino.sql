DO $$ BEGIN
 CREATE TYPE "public"."color_scheme" AS ENUM('system', 'light', 'dark');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "battleships_preference" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"color_scheme" "color_scheme" DEFAULT 'system' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "battleships_preference" ADD CONSTRAINT "battleships_preference_user_id_battleships_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."battleships_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
