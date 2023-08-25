-- CreateTable
CREATE TABLE "TestTable" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "TestTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "School" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TestTable_schoolId_key" ON "TestTable"("schoolId");

-- AddForeignKey
ALTER TABLE "TestTable" ADD CONSTRAINT "TestTable_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
