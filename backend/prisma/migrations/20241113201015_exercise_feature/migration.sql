-- CreateTable
CREATE TABLE "treinoaluno" (
    "id" TEXT NOT NULL,
    "aluno_id" INTEGER NOT NULL,
    "professor_id" TEXT NOT NULL,
    "frequencia_id" INTEGER NOT NULL,

    CONSTRAINT "treinoaluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exerciseontreino" (
    "id" TEXT NOT NULL,
    "treino_id" TEXT NOT NULL,
    "dia_id" INTEGER NOT NULL,
    "set_id" INTEGER NOT NULL,
    "exercise_id" INTEGER NOT NULL,

    CONSTRAINT "exerciseontreino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frequenciatreino" (
    "id" SERIAL NOT NULL,
    "frequencia" TEXT NOT NULL,

    CONSTRAINT "frequenciatreino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendariotreino" (
    "id" SERIAL NOT NULL,
    "dia" TEXT NOT NULL,

    CONSTRAINT "calendariotreino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "sets" TEXT NOT NULL,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "treinoaluno" ADD CONSTRAINT "treinoaluno_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treinoaluno" ADD CONSTRAINT "treinoaluno_professor_id_fkey" FOREIGN KEY ("professor_id") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treinoaluno" ADD CONSTRAINT "treinoaluno_frequencia_id_fkey" FOREIGN KEY ("frequencia_id") REFERENCES "frequenciatreino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseontreino" ADD CONSTRAINT "exerciseontreino_treino_id_fkey" FOREIGN KEY ("treino_id") REFERENCES "treinoaluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseontreino" ADD CONSTRAINT "exerciseontreino_dia_id_fkey" FOREIGN KEY ("dia_id") REFERENCES "calendariotreino"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseontreino" ADD CONSTRAINT "exerciseontreino_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "sets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseontreino" ADD CONSTRAINT "exerciseontreino_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
