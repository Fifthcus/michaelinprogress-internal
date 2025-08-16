-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "blogs" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
