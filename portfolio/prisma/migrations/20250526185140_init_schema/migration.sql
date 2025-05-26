-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "html" TEXT NOT NULL,
    "css" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
